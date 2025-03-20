import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="w-full h-[719] mx-auto hom-con  text-white overflow-y-scroll p-10">
      <div className="AboutMe mb-16">
        <h1>Men haqimda</h1>
        <p>
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
        <Link href={"/contacts"} className="IfoBtn">
          Bog’lanish
        </Link>
      </div>
      <div className="AboutMe mb-16">
        <h1>Asbob-uskunalar</h1>
        <div className="grid grid-cols-5 gap-5">
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
      <div className="AboutMe mb-16">
        <h1>Men nimalar qila olaman</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="mywork">
            <Image
              src="/image wrapper.svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
            <div>
              <h2>Seo</h2>
              <p>Qidiruv tizimining natijalarida sayt reytingini yaxshilash</p>
            </div>
          </div>
          <div className="mywork">
            <Image
              src="/image wrapper (1).svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
            <div>
              <h2>Dizayn</h2>
              <p>Kuchli dizayn va kichik detallargacha e’tibor berish </p>
            </div>
          </div>
          <div className="mywork">
            <Image
              src="/image wrapper (2).svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
            <div>
              <h2>Sifat</h2>
              <p>Yuqori darajada saytlarni sifatli ishlab chiqish</p>
            </div>
          </div>
          <div className="mywork">
            <Image
              src="/image wrapper (3).svg"
              alt="Html Logo"
              width={64}
              height={64}
            />
            <div>
              <h2>Tezkorlik</h2>
              <p>Qisqa muddat ichida tezkor sayt ishlab chiqish</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
