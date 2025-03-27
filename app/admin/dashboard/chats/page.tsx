"use client";
import { createClient } from "@/supabase/client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [chat, setchat] = useState([]);
  const supabase = createClient();

  useEffect(() => {
    chatsCounts();
  }, [chat]);

  const chatsCounts = async () => {
    const { data, error } = await supabase.from("PortfolioChats").select("*");
    if (error) {
      console.log(error);
    } else {
      // @ts-ignore
      setchat(data);
    }
  };
  return (
    <div className="w-full h-[92vh] overflow-y-scroll text-white p-5 md:p-10 animate-fadeIn">
      <div className="AboutMe">
        <h1 className="text-2xl font-bold">Chats</h1>
      </div>
      <div className="">{}</div>
    </div>
  );
}
