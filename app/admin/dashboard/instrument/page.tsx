"use client";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Instrument {
  id?: number;
  img: string;
  name: string;
}

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<Instrument>({ img: "", name: "" });
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    const { data, error } = await supabase
      .from("Partfolio_Instrument")
      .select("*");
    if (error) {
      toast.error("Uskunalar yuklashda xatolik yuz berdi!");
    } else {
      setInstruments(data);
    }
  };

  const handleSaveInstrument = async () => {
    if (!formData.img.trim() || !formData.name.trim()) {
      toast.error("Barcha maydonlarni to‘ldiring!");
      return;
    }

    if (formData.id) {
      const { error } = await supabase
        .from("Partfolio_Instrument")
        .update({ img: formData.img, name: formData.name })
        .eq("id", formData.id);

      if (error) {
        toast.error("Xatolik yuz berdi!");
      } else {
        toast.success("Uskuna yangilandi!");
      }
    } else {
      const { error } = await supabase.from("Partfolio_Instrument").insert([
        {
          img: formData.img,
          name: formData.name,
        },
      ]);

      if (error) {
        toast.error("Xatolik yuz berdi!");
      } else {
        toast.success("Uskuna qo‘shildi!");
      }
    }

    setModalOpen(false);
    setFormData({ img: "", name: "" });
    fetchInstruments();
  };

  const handleDeleteInstrument = async (id: number) => {
    const { error } = await supabase
      .from("Partfolio_Instrument")
      .delete()
      .eq("id", id);

    if (error) {
      toast.error("Xatolik yuz berdi!");
    } else {
      toast.success("Uskuna o‘chirildi!");
      fetchInstruments();
    }
  };

  return (
    <div className="w-full h-[92vh] hom-con overflow-y-scroll text-white p-5 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Asbob uskunalar</h1>
        <button
          onClick={() => {
            setFormData({ img: "", name: "" });
            setModalOpen(true);
          }}
          className="px-6 py-2 bg-green-600 text-white rounded-lg"
        >
          Uskuna qo'shish+
        </button>
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
          {formData.id ? "Uskunani tahrirlash" : "Uskuna qo‘shish"}
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
          placeholder="Uskuna nomi"
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
            onClick={handleSaveInstrument}
            className="px-4 py-2 bg-green-500 rounded-lg"
          >
            Saqlash
          </button>
        </div>
      </Rodal>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
        {instruments.map((instrument) => (
          <div
            key={instrument.id}
            className="relative bg p-3 rounded-lg text-center"
            onMouseEnter={() => setHoveredId(instrument.id!)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {hoveredId === instrument.id ? (
              <div className="w-full h-40 flex items-center justify-center text-white font-bold text-lg rounded-md">
                {instrument.name}
              </div>
            ) : (
              <img
                src={instrument.img}
                alt={instrument.name}
                className="w-full h-40 object-cover rounded-md"
              />
            )}

            <div className="flex justify-between mt-2">
              <button
                onClick={() => handleDeleteInstrument(instrument.id!)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                🗑
              </button>
              <button
                onClick={() => {
                  setFormData(instrument);
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
