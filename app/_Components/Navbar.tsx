"use client";
import Link from "next/link";
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

        <h1
          className="font-medium text-xl cursor-pointer"
          onClick={() => (location.href = "/")}
        >
          Baxriddinov<span className="text-green-500">.Uz</span>
        </h1>
      </div>

      <div className="hidden lg:flex gap-6 font-medium text-lg">
        <Link href="/" className="info ">
          Bosh sahifa
        </Link>
        <Link href="/about" className="info ">
          Haqida
        </Link>
        <Link href="/projects" className="info ">
          Loyihalar
        </Link>
        <Link href="/contacts" className="info ">
          Bog‘lanish
        </Link>
        <Link
          href="https://github.com/Baxriddinov286"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl cursor-pointer"
        >
          <FaGithub className="text-3xl cursor-pointer  " />
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg flex flex-col items-center gap-4 py-4 lg:hidden z-50">
          <Link href="/" className="info " onClick={() => setIsOpen(false)}>
            Bosh sahifa
          </Link>
          <Link
            href="/about"
            className="info "
            onClick={() => setIsOpen(false)}
          >
            Haqida
          </Link>
          <Link
            href="/projects"
            className="info "
            onClick={() => setIsOpen(false)}
          >
            Loyihalar
          </Link>
          <Link
            href="/contacts"
            className="info"
            onClick={() => setIsOpen(false)}
          >
            Bog‘lanish
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl cursor-pointer"
          >
            <FaGithub />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
