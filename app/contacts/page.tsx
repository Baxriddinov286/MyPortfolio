import Image from "next/image";
import React from "react";

export default function Contacts() {
  return (
    <div className="w-full h-[719] mx-auto hom-con  text-white overflow-y-scroll p-10">
      <div className="AboutMe mb-16">
        <h1>Bog’lanish</h1>
        <div className="MyAddres">
          <div className="flex flex-col justify-between items-center gap-2">
            <Image
              src="/Frame 11.svg"
              alt="logo"
              width={59}
              height={50}
              className="rounded-lg"
            />
            <h4>E-pochta</h4>
            <p>dasturchi59@gmail.com</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            {" "}
            <Image
              src="/Frame 11 (2).svg"
              alt="logo"
              width={59}
              height={50}
              className="rounded-lg"
            />
            <h4>Telegram</h4>
            <p>https://t.me/bekzod_baxriddinov</p>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <Image
              src="/Frame 11 (3).svg"
              alt="logo"
              width={59}
              height={50}
              className="rounded-lg"
            />
            <h4>Telefon raqam</h4>
            <p>+998 (91) 646 36 02</p>
          </div>
        </div>
      </div>
      <div className="AboutMe mb-16">
        <h1>So’rov yuborish </h1>
        <div className="request">
          <div>
            <label className="flex flex-col gap-2">
              Ismingiz*
              <input type="text" placeholder="Falonchiyev Falonchi" />
            </label>
            <label className="flex flex-col gap-2">
              Manzilingiz*
              <input type="text" placeholder="misol@gmail.com" />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            Izohingiz*
            <textarea placeholder="O’z izohingizni yozing..."></textarea>
          </label>
          <button>Yuborish</button>
        </div>
      </div>
    </div>
  );
}
