"use client";
import "../globals.css";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="asd w-full h-[50]  flex justify-between items-center p-4 bg text-white">
      <div className="flex items-center gap-3 ">
        <RxHamburgerMenu className="text-3xl cursor-pointer" />
        <h1 className="font-medium text-xl cursor-pointer">
          Baxriddinov<span className="text-green-500 ">.Uz</span>
        </h1>
      </div>
      <div className="flex gap-4 font-medium text-lg">
        <h2 className="info">Bosh sahifa</h2>
        <h2 className="info">Haqida</h2>
        <h2 className="info">Loyihalar</h2>
        <h2 className="info">Bog’lanish</h2>
        <FaGithub className="text-3xl cursor-pointer  " />
      </div>
    </div>
  );
};

export default Navbar;
