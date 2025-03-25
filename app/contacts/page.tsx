"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { createClient } from "./../../supabase/client";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    message: "",
  });
  const supabase = createClient();

  const handleChange = async () => {
    const { error } = await supabase.from("PortfolioChats").insert([
      {
        name: formData.name,
        address: formData.address,
        message: formData.message,
        date: new Date(),
      },
    ]);

    if (error) {
      console.error("Xatolik:", error.message);
    } else {
      console.log(formData.name, formData.address, formData.message);

      alert("Ma'lumot yuborildi!");
      setFormData({ name: "", address: "", message: "" });
    }
  };

  return (
    <div className="w-full h-[92vh] mx-auto hom-con text-white p-5 sm:p-10 overflow-y-scroll">
      <div className="AboutMe mb-10 sm:mb-16">
        <h1 className="text-center sm:text-left">Bog’lanish</h1>
        <div className="Contacs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col justify-center items-center gap-2 text-center p-4  rounded-lg shadow-md">
            <Image
              src="/Frame 11.svg"
              alt="logo"
              width={59}
              height={50}
              className="rounded-lg"
            />
            <h4 className="text-lg font-semibold">E-pochta</h4>
            <p className="break-all text-sm text-gray-600">
              dasturchi59@gmail.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 text-center p-4  rounded-lg shadow-md">
            <Image
              src="/Frame 11 (2).svg"
              alt="logo"
              width={59}
              height={50}
              className="rounded-lg"
            />
            <h4 className="text-lg font-semibold">Telegram</h4>
            <p className="break-all text-sm text-gray-600">
              <a
                href="https://t.me/bekzod_baxriddinov"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                @bekzod_baxriddinov
              </a>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 text-center p-4  rounded-lg shadow-md">
            <Image
              src="/Frame 11 (3).svg"
              alt="logo"
              width={59}
              height={50}
              className="rounded-lg"
            />
            <h4 className="text-lg font-semibold">Telefon raqam</h4>
            <p className="text-sm text-gray-600">+998 (91) 646 36 02</p>
          </div>
        </div>
      </div>

      <div className="AboutMe mb-10 sm:mb-16">
        <h1 className="text-center sm:text-left">So’rov yuborish</h1>
        <div className="request flex flex-col gap-4 mt-6 justify-between">
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="flex flex-col gap-3 w-full">
              Ismingiz*
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Falonchiyev Falonchi"
                className="p-2 w-full rounded-md border border-gray-300 bg-transparent"
                required
              />
            </label>
            <label className="flex flex-col gap-3 w-full">
              Manzilingiz*
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                placeholder="misol@gmail.com"
                className="p-2 rounded-md border border-gray-300 bg-transparent"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            Izohingiz*
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="O’z izohingizni yozing..."
              className="p-2 rounded-md border border-gray-300 bg-transparent min-h-[100px] lg:min-h-[250px]"
              required
            ></textarea>
          </label>
          <button
            onClick={() => handleChange()}
            className="p-2 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white"
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  );
}
