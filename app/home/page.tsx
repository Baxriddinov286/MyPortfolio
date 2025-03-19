import React from "react";

export default function Home() {
  return (
    <div className="w-full h-[719] mx-auto hom-con flex flex-col justify-center items-center text-white">
      <h1 className="MyInfo">
        Assalomu alaykum, Men <br />
        <span className="text-green-500">Baxriddinov Bekzod</span>man
      </h1>
      <p className="MyInfo2">
        Natijaga yo‘naltirilgan frontend dasturchiman. Zamonaviy, tezkor <br />{" "}
        va jozibali veb-saytlar yaratishga ixtisoslashganman. Dizayn va <br />
        funksionallikni uyg‘unlashtirib, foydalanuvchilar uchun qulay tajriba{" "}
        <br />
        taqdim etishga harakat qilaman. Har bir loyihada detallar va kreativ{" "}
        <br />
        yondashuv muhim o‘rin tutadi. 🚀
      </p>
      <button className="IfoBtn">Loyihalar</button>
    </div>
  );
}
