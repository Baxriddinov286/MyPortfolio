import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Saidbar from "./_Components/Saidbar";
import Navbar from "./_Components/Navbar";
// import localFont from "next/font/local";

// const MyFOnt = localFont({
//   src: "/public/fonts/NeueMachina-Ultrabold.otf",
//   display: "swap",
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Baxriddinov.uz",
  description: "Frontend Dasturchi | Bekzod Baxriddinov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg`}
      >
        <div className="max-w-[1535.3px] mx-auto ">
          <div className="mb-[56]">
            <Navbar />
          </div>
          <div className="flex">
            <Saidbar />
            <div className="w-full hom-con">{children}</div>
          </div>
        </div>{" "}
      </body>
    </html>
  );
}
