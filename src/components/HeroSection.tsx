import React from "react";
import Image from "next/image";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import CyberpunkTitle from "./cyberPunkTextAnimation/CyberpunkTitle";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});
const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 text-center md:text-right flex flex-col justify-center items-center p-8">
        <div className="text-5xl md:text-7xl my-7 text-[#f2994a]">
          <CyberpunkTitle>
            This is the first test of hero text animation
          </CyberpunkTitle>
        </div>
        <p className="text-base md:text-lg">
          Adobe Illustrator is my professional Identity. I am thank full to
          Adobe and hats of to behind the scean peoples. About a decade{" "}
          <span>I am</span> Kamrul Hasan Experienched thousands of People I
          worked for, I am also proudly thanking you for giving me the{" "}
          {/* <span className="flex gap-7">
            <FaRocket />
           
          </span> */}
          Experiences . And happyly Welcoming you in my <br />
          <a href="#">Experience Showcase.</a>
        </p>
        <div className="flex justify-center mt-4 gap-7 text-base md:text-lg">
          <button className="border rounded-3xl px-4 border-slate-700 text-slate-900 hover:border-white hover:text-slate-500 transition-all duration-500 ease-in-out hover:shadow-2xl">
            Go Ahead 1
          </button>
          <button className="border rounded-3xl px-4 border-slate-700 text-slate-900 hover:border-white hover:text-slate-500 transition-all duration-500 ease-in-out hover:shadow-2xl">
            Go Ahead 2
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center ">
        <div className="border border-white p-8">
          <div className="w-64 h-64 md:w-96 md:h-96 ">
            <Image
              className="object-contain w-full h-full"
              src="/AdobeIllustrator_logo.png"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
