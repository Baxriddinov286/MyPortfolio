"use client";
import { createClient } from "@/supabase/client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface Instrument {
  id?: number;
  img: string;
  name: string;
}

interface Client {
  id?: number;
  img: string;
  name: string;
}

export default function About() {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [loadingInstruments, setLoadingInstruments] = useState(true);
  const [loadingClients, setLoadingClients] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    fetchInstruments();
    fetchClients();
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
    setLoadingInstruments(false);
  };

  const fetchClients = async () => {
    const { data, error } = await supabase.from("Portfolio_Client").select("*");
    if (error) {
      toast.error("Mijozlarni yuklashda xatolik yuz berdi!");
    } else {
      setClients(data);
    }
    setLoadingClients(false);
  };

  return (
    <div className="w-full h-[92vh] mx-auto text-white overflow-y-scroll p-5 md:p-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Men haqimda</h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Men Baxriddinov Bekzod, 15 yoshdaman, Buxoro viloyati, Vobkent
          tumanida tug‘ilganman. Men qiziqarli, ko‘p funksiyalarga ega va kuchli
          dizaynga ega bo‘lgan dasturlar yaratishga qiziqaman.
          <br />
          <br />
          Mening vazifam – foydalanuvchilar uchun qulay, jozibali va tezkor
          veb-saytlar yaratish. Sayt dizayni nafaqat chiroyli, balki intuitiv va
          foydalanishga qulay bo‘lishi muhim. Shuningdek, kodlarni moslashuvchan
          va samarali yozishga e’tibor beraman.
          <br />
          <br />
          Mening maqsadim – veb-sayt foydalanuvchilari uchun har bir elementni
          tushunarli va qulay qilish. Agar loyihalarim sizga qiziq bo‘lsa,
          <strong>Loyihalar</strong> sahifasiga tashrif buyuring! 😊
        </p>
        <Link
          href={"/contacts"}
          className="IfoBtn mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
        >
          Bog’lanish
        </Link>
      </div>
      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Asbob-uskunalar</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
          {loadingInstruments
            ? Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="ProgramLogo h-32"></div>
              ))
            : instruments.map((instrument) => (
                <div
                  key={instrument.id}
                  className="ProgramLogo"
                  onMouseEnter={() => setHoveredId(instrument.id!)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {hoveredId === instrument.id ? (
                    <div className="w-full flex items-center justify-center text-white font-bold text-lg rounded-md">
                      {instrument.name}
                    </div>
                  ) : (
                    <Image
                      src={instrument.img}
                      alt={instrument.name}
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              ))}
        </div>
      </div>

      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Men nimalar qila olaman
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              img: "/image wrapper.svg",
              title: "Seo",
              desc: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash",
            },
            {
              img: "/image wrapper (1).svg",
              title: "Dizayn",
              desc: "Kuchli dizayn va kichik detallargacha e’tibor berish",
            },
            {
              img: "/image wrapper (2).svg",
              title: "Sifat",
              desc: "Yuqori darajada saytlarni sifatli ishlab chiqish",
            },
            {
              img: "/image wrapper (3).svg",
              title: "Tezkorlik",
              desc: "Qisqa muddat ichida tezkor sayt ishlab chiqish",
            },
          ].map((work, index) => (
            <div
              key={index}
              className="mywork flex items-center gap-4 p-4 border border-gray-700 rounded-lg"
            >
              <Image src={work.img} alt={work.title} width={64} height={64} />
              <div>
                <h2 className="text-lg font-semibold">{work.title}</h2>
                <p className="text-sm text-gray-300">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Mijozlar </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {loadingClients
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="ProgramLogo h-32"></div>
              ))
            : clients.map((clients) => (
                <div
                  key={clients.id}
                  className="ProgramLogo"
                  onMouseEnter={() => setHoveredId(clients.id!)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {hoveredId === clients.id ? (
                    <div className="w-full h-[100px] flex items-center justify-center text-white font-bold text-lg rounded-md">
                      {clients.name}
                    </div>
                  ) : (
                    <Image
                      src={clients.img}
                      alt={clients.name}
                      width={100}
                      height={100}
                    />
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
