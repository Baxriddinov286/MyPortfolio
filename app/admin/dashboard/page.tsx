"use client";
import { createClient } from "@/supabase/client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [chatCount, setchatcount] = useState(0);
  const [projectCount, setprojectcount] = useState();
  const supabase = createClient();

  useEffect(() => {
    chatsCounts();
  }, [chatCount, projectCount]);

  const chatsCounts = async () => {
    const { data, error } = await supabase.from("PortfolioChats").select("*");
    if (error) {
      console.log(error);
    } else {
      setchatcount(data.length);
    }
  };

  return (
    <div className="w-full h-[92vh] overflow-y-scroll text-white p-5 md:p-10 animate-fadeIn">
      <div className="AboutMe">
        <h1 className="text-2xl font-bold mb-5">Welcome, Admin!</h1>
      </div>
      <div className="AboutMe mb-12 md:mb-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="mywork w-full flex items-center gap-4 p-5 border border-gray-700 rounded-xl bg-gray-800 shadow-md">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3.5">
              Message User
            </h2>
            <p className="text-sm text-gray-400">{chatCount}</p>
          </div>
        </div>
        <div className="mywork w-full flex items-center gap-4 p-5 border border-gray-700 rounded-xl bg-gray-800 shadow-md">
          <div>
            <h2 className="text-lg font-semibold text-white mb-3.5">
              Projects
            </h2>
            <p className="text-sm text-gray-400">{projectCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
