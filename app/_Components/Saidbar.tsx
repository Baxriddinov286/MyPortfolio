import Image from "next/image";
import React from "react";
import "../globals.css";

export default function Saidbar() {
  return (
    <div className="w-[288] h-[719] mx-auto bg1">
      <div className="border border-gray-700 w-full p-3.5 SadibarLogo">
        <Image
          src="/photo_2025-03-12_20-58-07.jpg"
          alt="logo"
          width={259}
          height={260}
          className="rounded-lg"
        />
        <h1>Bekzod Baxriddinov</h1>
        <div className="SaidbarBtn">
          <button>Veb dasturchi</button>
        </div>
      </div>
      <div className="p-3.5 space-y-4">
        <div className="MyAdrees">
          <Image
            src="/Frame 11.svg"
            alt="logo"
            width={59}
            height={50}
            className="rounded-lg"
          />
          <div>
            <h4>E-pochta</h4>
            <h2>dasturchi59@gmail.com</h2>
          </div>
        </div>
        <div className="MyAdrees">
          <Image
            src="/Frame 11 (1).svg"
            alt="logo"
            width={59}
            height={50}
            className="rounded-lg"
          />
          <div>
            <h4>Github</h4>
            <h2>dasturchi59@gmail.com</h2>
          </div>
        </div>
        <div className="MyAdrees">
          <Image
            src="/Frame 11 (2).svg"
            alt="logo"
            width={59}
            height={50}
            className="rounded-lg"
          />
          <div className="overflow-hidden">
            <h4>Telegram</h4>
            <h2>https://t.me/bekzod_baxriddinov</h2>
          </div>
        </div>
        <div className="MyAdrees">
          <Image
            src="/Frame 11 (3).svg"
            alt="logo"
            width={59}
            height={50}
            className="rounded-lg"
          />
          <div>
            <h4>Telefon raqam</h4>
            <h2>+998 (91) 646 36 02</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
