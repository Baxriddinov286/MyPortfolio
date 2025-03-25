import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="w-full h-[92vh] mx-auto text-white overflow-y-scroll p-5 md:p-10">
      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Men haqimda</h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Men Baxriddinov Bekzod, 15 yoshdaman, Buxoro viloyati, Vobkent
          tumanida tug‘ilganman. Men qiziqarli, ko‘p funksiyalarga ega va kuchli
          dizaynga ega bo‘lgan dasturlar yaratishga qiziqaman.
          <br />
          <br />
          Mening vazifam – foydalanuvchilar uchun qulay, jozibali va tezkor
          veb-saytlar yaratish. Sayt dizayni nafaqat chiroyli, balki intuitiv va
          foydalanishga qulay bo‘lishi muhim. Shuningdek, kodlarni moslashuvchan
          va samarali yozishga e’tibor beraman.
          <br />
          <br />
          Mening maqsadim – veb-sayt foydalanuvchilari uchun har bir elementni
          tushunarli va qulay qilish. Agar loyihalarim sizga qiziq bo‘lsa,
          <strong>Loyihalar</strong> sahifasiga tashrif buyuring! 😊
        </p>
        <Link
          href={"/contacts"}
          className="IfoBtn mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
        >
          Bog’lanish
        </Link>
      </div>
      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Asbob-uskunalar</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5">
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
              alt="Html Logo"
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://raw.githubusercontent.com/Remix-Design/RemixIcon/master/icons/Logos/remixicon-line.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Men nimalar qila olaman
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              img: "/image wrapper.svg",
              title: "Seo",
              desc: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash",
            },
            {
              img: "/image wrapper (1).svg",
              title: "Dizayn",
              desc: "Kuchli dizayn va kichik detallargacha e’tibor berish",
            },
            {
              img: "/image wrapper (2).svg",
              title: "Sifat",
              desc: "Yuqori darajada saytlarni sifatli ishlab chiqish",
            },
            {
              img: "/image wrapper (3).svg",
              title: "Tezkorlik",
              desc: "Qisqa muddat ichida tezkor sayt ishlab chiqish",
            },
          ].map((work, index) => (
            <div
              key={index}
              className="mywork flex items-center gap-4 p-4 border border-gray-700 rounded-lg"
            >
              <Image src={work.img} alt={work.title} width={64} height={64} />
              <div>
                <h2 className="text-lg font-semibold">{work.title}</h2>
                <p className="text-sm text-gray-300">{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="AboutMe mb-12 md:mb-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Mijozlar </h1>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
          <div className="ProgramLogo">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
