import React from "react";
import Image from "next/image";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});
const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 text-center md:text-right flex flex-col justify-center items-center p-8">
        <div className="text-5xl md:text-7xl my-7 text-[#f2994a]">
          <h1 className={abril.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
        </div>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis
          inventore, nam porro, doloribus provident vitae fugiat nemo atque,
          fuga odio vero eaque temporibus sed recusandae harum suscipit.
          Architecto, voluptatem.
        </p>
        <div className="flex justify-center mt-4 gap-7 text-base md:text-lg">
          <button className="border rounded-3xl px-4 border-slate-900 hover:border-white hover:text-slate-500">
            Go Ahead 1
          </button>
          <button className="border rounded-3xl px-4 border-slate-900 hover:border-white hover:text-slate-500">
            Go Ahead 2
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-64 h-64 md:w-96 md:h-96">
          <Image
            className="object-contain w-full h-full"
            src="/AdobeIllustrator_logo.png"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
