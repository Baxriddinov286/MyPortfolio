"use client";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

interface Client {
  id?: number;
  img: string;
  name: string;
}

export default function ClientsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<Client>({ img: "", name: "" });
  const [clients, setClients] = useState<Client[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const { data, error } = await supabase.from("Portfolio_Client").select("*");
    if (error) {
      toast.error("Mijozlarni yuklashda xatolik yuz berdi!");
    } else {
      setClients(data);
    }
  };

  const handleSaveClient = async () => {
    if (!formData.img.trim() || !formData.name.trim()) {
      toast.error("Barcha maydonlarni to‘ldiring!");
      return;
    }

    if (formData.id) {
      const { error } = await supabase
        .from("Portfolio_Client")
        .update({ img: formData.img, name: formData.name })
        .eq("id", formData.id);

      if (error) {
        toast.error("Xatolik yuz berdi!");
      } else {
        toast.success("Mijoz yangilandi!");
      }
    } else {
      const { error } = await supabase.from("Portfolio_Client").insert([
        {
          img: formData.img,
          name: formData.name,
        },
      ]);

      if (error) {
        toast.error("Xatolik yuz berdi!");
      } else {
        toast.success("Mijoz qo‘shildi!");
      }
    }

    setModalOpen(false);
    setFormData({ img: "", name: "" });
    fetchClients();
  };

  const handleDeleteClient = async (id: number) => {
    const { error } = await supabase
      .from("Portfolio_Client")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Xatolik yuz berdi!");
    } else {
      toast.success("Mijoz o‘chirildi!");
      fetchClients();
    }
  };

  return (
    <div className="w-full h-[92vh] overflow-y-scroll text-white p-5 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="AboutMe flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Mijozlar</h1>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setFormData({ img: "", name: "" });
              setModalOpen(true);
            }}
            className="px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Mijoz qo'shish+
          </button>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Dashboard
          </button>
        </div>
      </div>

      <Rodal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        animation="zoom"
        width={400}
        height={250}
        customStyles={{
          background: "#1a1a1a",
          color: "#fff",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          {formData.id ? "Mijozni tahrirlash" : "Mijoz qo‘shish"}
        </h2>
        <input
          type="text"
          placeholder="Rasm URL"
          value={formData.img}
          onChange={(e) => setFormData({ ...formData, img: e.target.value })}
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 text-white"
        />
        <input
          type="text"
          placeholder="Mijoz nomi"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600 text-white"
        />
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-red-500 rounded-lg"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleSaveClient}
            className="px-4 py-2 bg-green-500 rounded-lg"
          >
            Saqlash
          </button>
        </div>
      </Rodal>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
        {clients.map((client) => (
          <div
            key={client.id}
            className="relative p-3 rounded-lg text-center bg-gray-800"
            onMouseEnter={() => setHoveredId(client.id!)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="h-24 flex items-center justify-center">
              {hoveredId === client.id ? (
                <div className="w-full flex items-center justify-center text-white font-bold text-lg rounded-md">
                  {client.name}
                </div>
              ) : (
                <Image
                  src={client.img}
                  alt={client.name}
                  width={100}
                  height={100}
                />
              )}
            </div>

            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleDeleteClient(client.id!)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                🗑
              </button>
              <button
                onClick={() => {
                  setFormData(client);
                  setModalOpen(true);
                }}
                className="bg-blue-600 px-3 py-1 rounded"
              >
                ✏
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
