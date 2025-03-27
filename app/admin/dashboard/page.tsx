"use client";
import { createClient } from "@/supabase/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [chatCount, setChatCount] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    chatsCounts();
  }, []);

  const chatsCounts = async () => {
    const { data, error } = await supabase.from("PortfolioChats").select("*");
    if (!error) {
      setChatCount(data.length);
    }
  };

  return (
    <div className="w-full h-[92vh] hom-con overflow-y-scroll text-white p-5 md:p-10">
      <div className="AboutMe">
        <h1 className="text-2xl font-bold mb-5">Salom Admin!</h1>
      </div>

      <div className="max-w-full grid grid-cols-2 gap-6 mx-auto">
        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Asbob uskunalar</h1>
          <Link
            href={"/admin/dashboard"}
            className="block text-center w-50 px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Uskuna qo'shish
          </Link>
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Projectlar</h1>
          <Link
            href={"/admin/dashboard"}
            className="block text-center w-50 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Project qo'shish
          </Link>
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Xabarlar</h1>
          <Link
            href={"/admin/dashboard"}
            onClick={() => (location.href = "/admin/dashboard/chats")}
            className="block text-center w-50 px-6 py-2 bg-red-600 text-white rounded-lg"
          >
            Xabarlar
          </Link>
          <p className="mt-2">Chatlar: {chatCount}</p>
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Yangi Mijozlar</h1>
          <Link
            href={"/admin/dashboard"}
            className="block text-center w-50 px-6 py-2 bg-purple-600 text-white rounded-lg"
          >
            Mijoz qo'shish
          </Link>
        </div>
      </div>
    </div>
  );
}
