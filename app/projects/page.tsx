"use client";
import { createClient } from "@/supabase/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Project {
  id?: number;
  img: string;
  name: string;
  level: string;
  library: string[];
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("Portfolio_Project")
      .select("*");
    if (error) {
      console.log(error);
    } else {
      setProjects(data);
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-[92vh] text-white p-5 md:p-10 animate-fadeIn overflow-y-scroll">
      <div className="AboutMe mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Loyihalar</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="ProgramLogo h-60"></div>
            ))
          : projects.map((project) => (
              <div
                key={project.id}
                className="bg project shadow-xl rounded-xl overflow-hidden flex flex-col justify-start"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={`https://tjnkjlpbumtqlylftrkn.supabase.co/storage/v1/object/public/portfolio/${project.img}`}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-xl font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-white text-sm mt-1">{project.level}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.library.map((lib, index) => (
                      <p key={index} className="text-green-700">
                        #{lib}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
