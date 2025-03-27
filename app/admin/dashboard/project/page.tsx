"use client";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

interface Project {
  id?: number;
  img: string;
  name: string;
  level: string;
  library: string[];
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState<Project>({
    img: "",
    name: "",
    level: "",
    library: [],
  });
  const [libInput, setLibInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("Portfolio_Project")
      .select("*");
    if (error) {
      toast.error("Loyihalar yuklashda xatolik yuz berdi!");
    } else {
      setProjects(data);
    }
  };

  const handleSaveProject = async () => {
    if (!formData.img.trim() || !formData.name.trim()) {
      toast.error("Barcha maydonlarni to‘ldiring!");
      return;
    }

    let response;
    if (formData.id) {
      response = await supabase
        .from("Portfolio_Project")
        .update({
          img: formData.img,
          name: formData.name,
          level: formData.level,
          library: formData.library,
        })
        .eq("id", formData.id);
    } else {
      response = await supabase.from("Portfolio_Project").insert([
        {
          img: formData.img,
          name: formData.name,
          level: formData.level,
          library: formData.library,
        },
      ]);
    }

    if (response.error) {
      toast.error("Xatolik yuz berdi!");
    } else {
      toast.success(formData.id ? "Loyiha yangilandi!" : "Loyiha qo‘shildi!");
      setModalOpen(false);
      setFormData({ img: "", name: "", level: "", library: [] });
      fetchProjects();
    }
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const { data, error } = await supabase.storage
      .from("portfolio")
      .upload(`projects/${Date.now()}.jpg`, file);

    if (error) {
      toast.error("Rasm yuklashda xatolik yuz berdi!");
    } else if (data) {
      toast.success("Rasm muvaffaqiyatli yuklandi!");
      setFormData({ ...formData, img: data.path });
    }
  };

  const addLibrary = () => {
    if (libInput.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        library: [...prev.library, libInput],
      }));
      setLibInput("");
    }
  };

  const handleUpdateProject = async (project: Project) => {
    setFormData(project);
    setModalOpen(true);
  };

  const handleDeleteProject = async (id: number) => {
    const { error } = await supabase
      .from("Portfolio_Project")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Loyihani o‘chirishda xatolik yuz berdi!");
    } else {
      toast.success("Loyiha o‘chirildi!");
      fetchProjects();
    }
  };

  return (
    <div className="w-full h-[92vh] overflow-y-scroll text-white p-5 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="AboutMe mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Loyihalar 🚀</h1>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setFormData({ img: "", name: "", level: "", library: [] });
              setModalOpen(true);
            }}
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Loyiha qo‘shish +
          </button>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Dashboard
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg shadow-xl rounded-xl overflow-hidden flex flex-col justify-between"
          >
            <div className="relative w-full h-56">
              <Image
                src={`https://tjnkjlpbumtqlylftrkn.supabase.co/storage/v1/object/public/portfolio/${project.img}`}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-white text-sm mt-1">{project.level}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.library.map((lib, index) => (
                  <p key={index} className="text-green-700">
                    #{lib}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleDeleteProject(project.id!)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                🗑
              </button>
              <button
                onClick={() => handleUpdateProject(project)}
                className="bg-blue-600 px-3 py-1 rounded"
              >
                ✏
              </button>
            </div>
          </div>
        ))}
      </div>

      <Rodal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        animation="zoom"
        width={400}
        height={500}
        customStyles={{
          background: "#1a1a1a",
          color: "#fff",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {formData.id ? "Loyihani tahrirlash" : "Loyiha qo‘shish"}
        </h2>
        <div className="shadow-lg rounded-lg mb-2 flex gap-4">
          <button
            onClick={() => setFormData({ ...formData, img: "" })}
            className="bg-red-600 px-3 py-1 rounded"
          >
            🗑
          </button>
          {formData.img ? (
            <Image
              src={`https://tjnkjlpbumtqlylftrkn.supabase.co/storage/v1/object/public/portfolio/${formData.img}`}
              alt={formData.name}
              className="rounded-t-xl"
              width={100}
              height={100}
            />
          ) : (
            <label htmlFor="image" className="cursor-pointer">
              Rasm yuklash
              <input onChange={handleUpload} id="image" type="file" hidden />
            </label>
          )}
        </div>
        <input
          type="text"
          placeholder="Loyiha nomi"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 text-white"
        />
        <select
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value })}
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 text-white"
        >
          <option value="past">Past</option>
          <option value="o‘rta">O‘rta</option>
          <option value="yuqori">Yuqori</option>
        </select>

        <div className="flex mb-3">
          <input
            type="text"
            placeholder="Kutubxona nomi"
            value={libInput}
            onChange={(e) => setLibInput(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
          />
          <button
            onClick={addLibrary}
            className="ml-2 px-3 py-2 bg-blue-500 rounded text-white"
          >
            Qo‘shish
          </button>
        </div>

        <ul className="max-h-32 overflow-y-auto">
          {formData.library.map((lib, index) => (
            <li
              key={index}
              className="p-1 bg-gray-700 rounded mt-1 flex justify-between"
            >
              {lib}
              <button
                onClick={() =>
                  setFormData({
                    ...formData,
                    library: formData.library.filter((_, i) => i !== index),
                  })
                }
                className="bg-red-600 px-3 py-1 rounded"
              >
                🗑
              </button>
            </li>
          ))}
        </ul>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-red-500 rounded-lg"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleSaveProject}
            className="px-4 py-2 bg-green-500 rounded-lg"
          >
            Saqlash
          </button>
        </div>
      </Rodal>
    </div>
  );
}
