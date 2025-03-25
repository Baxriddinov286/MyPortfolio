import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="w-full h-[92vh] flex flex-col justify-center items-center text-white text-center px-6 animate-fadeIn">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate-slideDown">
        Assalomu alaykum, Men <br />
        <span className="text-green-500">Baxriddinov Bekzod</span>
      </h1>

      <p className="text-sm sm:text-sm md:text-lg lg:text-xl max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mt-4 leading-relaxed animate-slideUp">
        Natijaga yo‘naltirilgan frontend dasturchiman. Zamonaviy, tezkor{" "}
        <br className="hidden md:inline" />
        va jozibali veb-saytlar yaratishga ixtisoslashganman. Dizayn va{" "}
        <br className="hidden md:inline" />
        funksionallikni uyg‘unlashtirib, foydalanuvchilar uchun qulay tajriba{" "}
        <br className="hidden md:inline" />
        taqdim etishga harakat qilaman. Har bir loyihada detallar va kreativ{" "}
        <br className="hidden md:inline" />
        yondashuv muhim o‘rin tutadi. 🚀
      </p>

      <div className="mt-6 animate-scaleIn">
        <Link
          href={"/projects"}
          className="px-6 py-3 text-sm sm:text-base md:text-lg bg-green-500 hover:bg-green-600 transition rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
        >
          Loyihalar
        </Link>
      </div>
    </div>
  );
}
