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
    <div className="w-full h-[92vh] hom-con overflow-y-scroll text-white p-5 md:p-10">
      <div className="AboutMe">
        <h1 className="text-2xl font-bold mb-5"> Xush kelibsiz, Admin!</h1>
      </div>

      <div className="max-w-full grid grid-cols-2 gap-6 mx-auto">
        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Asbob uskunalar</h1>
          <Link
            href={"/admin/dashboard/instrument"}
            className="block text-center w-50 px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            Uskuna qo`shish
          </Link>
          <p className="mt-2">Uskunalar: {insCount}</p>
        </div>

        <div className="bg-neutral-800 p-6 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Loyihalar</h1>
          <Link
            href={"/admin/dashboard/project"}
            className="block text-center w-50 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Loyiha qo‘shish 🚀
          </Link>
          <p className="mt-2">Loyihlar: {projectCount}</p>
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
          <h1 className="text-3xl font-semibold mb-4">Mijozlar</h1>
          <Link
            href={"/admin/dashboard/client"}
            className="block text-center w-50 px-6 py-2 bg-purple-600 text-white rounded-lg"
          >
            Mijoz qo`shish
          </Link>
          <p className="mt-2">Mijozalar: {clientCount}</p>
        </div>
      </div>
    </div>
  );
}
