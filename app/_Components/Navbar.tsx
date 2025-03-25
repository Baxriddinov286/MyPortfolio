"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex justify-between items-center px-6  text-white z-50 bg">
      <div className="flex items-center gap-3">
        <button
          className="text-3xl cursor-pointer hidden lg:block"
          onClick={() => (location.href = "/")}
        >
          ☰
        </button>

        <button
          className="text-3xl cursor-pointer lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <h1 className="font-medium text-xl cursor-pointer">
          Baxriddinov<span className="text-green-500">.Uz</span>
        </h1>
      </div>

      <div className="hidden lg:flex gap-6 font-medium text-lg">
        <a href="/" className="info ">
          Bosh sahifa
        </a>
        <a href="/about" className="info ">
          Haqida
        </a>
        <a href="/projects" className="info ">
          Loyihalar
        </a>
        <a href="/contacts" className="info ">
          Bog‘lanish
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl cursor-pointer"
        >
          <FaGithub className="text-3xl cursor-pointer  " />
        </a>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 lg:hidden z-50">
          <a href="/" className="info " onClick={() => setIsOpen(false)}>
            Bosh sahifa
          </a>
          <a href="/about" className="info " onClick={() => setIsOpen(false)}>
            Haqida
          </a>
          <a
            href="/projects"
            className="info "
            onClick={() => setIsOpen(false)}
          >
            Loyihalar
          </a>
          <a
            href="/contacts"
            className="hover:text-green-500 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Bog‘lanish
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl cursor-pointer"
          >
            🖥
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
