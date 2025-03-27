"use client";
import { createClient } from "@/supabase/client";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

export default function Page() {
  const [insCount, setInsCount] = useState<number>(0);
  const [chatCount, setChatCount] = useState<number>(0);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [clientCount, setClientCount] = useState<number>(0);
  const supabase = createClient();

  const fetchCounts = useCallback(async () => {
    const fetchData = async (
      table: string,
      setter: (value: number) => void
    ) => {
      const { data, error } = await supabase.from(table).select("*");
      if (!error && data) setter(data.length);
    };

    await fetchData("Partfolio_Instrument", setInsCount);
    await fetchData("PortfolioChats", setChatCount);
    await fetchData("Portfolio_Project", setProjectCount);
    await fetchData("Portfolio_Client", setClientCount);
  }, [supabase]);

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  return (
    <div className="w-full min-h-screen hom-con overflow-y-scroll text-white p-5 md:p-10">
      <div className="AboutMe text-center">
        <h1 className="text-2xl font-bold mb-5">Xush kelibsiz, Admin!</h1>
      </div>

      <div className="max-w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        <div className="bg-neutral-800 p-4 md:p-6 rounded-2xl shadow-lg text-center">
          <h1 className="text-xl md:text-3xl font-semibold mb-4">
            Asbob uskunalar
          </h1>
          <Link
            href={"/admin/dashboard/instrument"}
            className="inline-block w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Uskuna qo`shish
          </Link>
          <p className="mt-2 text-lg">Uskunalar: {insCount}</p>
        </div>

        <div className="bg-neutral-800 p-4 md:p-6 rounded-2xl shadow-lg text-center">
          <h1 className="text-xl md:text-3xl font-semibold mb-4">Loyihalar</h1>
          <Link
            href={"/admin/dashboard/project"}
            className="inline-block w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Loyiha qo‘shish 🚀
          </Link>
          <p className="mt-2 text-lg">Loyihalar: {projectCount}</p>
        </div>

        <div className="bg-neutral-800 p-4 md:p-6 rounded-2xl shadow-lg text-center">
          <h1 className="text-xl md:text-3xl font-semibold mb-4">Xabarlar</h1>
          <Link
            href={"/admin/dashboard/chats"}
            className="inline-block w-full md:w-auto px-6 py-2 bg-red-600 text-white rounded-lg"
          >
            Xabarlar
          </Link>
          <p className="mt-2 text-lg">Chatlar: {chatCount}</p>
        </div>

        <div className="bg-neutral-800 p-4 md:p-6 rounded-2xl shadow-lg text-center">
          <h1 className="text-xl md:text-3xl font-semibold mb-4">Mijozlar</h1>
          <Link
            href={"/admin/dashboard/client"}
            className="inline-block w-full md:w-auto px-6 py-2 bg-purple-600 text-white rounded-lg"
          >
            Mijoz qo`shish
          </Link>
          <p className="mt-2 text-lg">Mijozlar: {clientCount}</p>
        </div>
      </div>
    </div>
  );
}
  