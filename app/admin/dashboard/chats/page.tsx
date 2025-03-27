"use client";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [chats, setChats] = useState<any[]>([]);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const { data, error } = await supabase.from("PortfolioChats").select("*");
    if (error) {
      console.log(error);
    } else {
      setChats(data);
    }
  };

  const deleteChat = async (id: number) => {
    const { error } = await supabase
      .from("PortfolioChats")
      .delete()
      .match({ id });
    if (error) {
      console.log(error);
    } else {
      setChats((prevChats) => prevChats.filter((chat) => chat.id !== id));
    }
  };

  return (
    <div className="w-full h-[92vh] overflow-y-auto text-white p-5 md:p-10 bg-neutral-900">
      <div className="mb-6 AboutMe flex justify-between items-center">
        <h1 className="text-3xl font-bold">Chatlar</h1>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Dasboard
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="bg-neutral-800 p-5 rounded-lg shadow-lg border border-neutral-700"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-green-400">
                  {chat.name}
                </h2>
                <p className="text-sm text-gray-400">{chat.address}</p>
              </div>
              <button
                onClick={() => deleteChat(chat.id)}
                className="px-3 py-1 cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                O‘chirish
              </button>
            </div>
            <p className="mt-3 text-gray-300">{chat.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              {new Date(chat.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
