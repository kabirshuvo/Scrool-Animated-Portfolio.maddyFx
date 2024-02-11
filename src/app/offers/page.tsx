"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OfferPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 0.8],
    [1, 1.3, 1.5, 1.7]
  );
  return (
    <main className="relative bg-gray-300 min-h-screen overflow-hidden">
      <div
        className="absolute top-4 -left-20"
        style={{ width: "200px", height: "600px" }}
      >
        <Image
          src="https://i.ibb.co/cXt1p1c/pen-logo.webp"
          alt="Feather Image"
          width={400}
          height={600}
        />
      </div>
      <div className="absolute top-6 -right-5 z-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            <div className="bg-slate-600 rounded-full w-2 h-2"></div>
          </div>
        </div>
      </div>
      {/* logo */}
      <div className="flex flex-col items-end pr-20 pt-10">
        <Image
          src="https://i.ibb.co/cXt1p1c/pen-logo.webp"
          alt="Feather Image"
          width={40}
          height={60}
        />
        <p className="text-blue-800 font-semibold ">MADDYFX</p>
      </div>

      {/* headings */}
      <div className=" flex items-center justify-center flex-col">
        <h3 className="text-blue-800 font-semibold text-xl">OFFERS</h3>
        <h1 className="text-4xl font-bold text-slate-800">PROPOSAL</h1>
      </div>

      {/* rotate divs */}
      <motion.div
        ref={ref}
        transition={{
          duration: 0.3,
          scale: {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          },
        }}
        style={{ scale, rotate: -45 }}
        className="relative transition w-80 mx-auto"
      >
        <div className="grid grid-cols-2  justify-center items-center mx-auto mt-28 opacity-90">
          <div className="w-40 h-40 bg-transparent relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              style={{ scale }}
              className="w-16 h-16 rounded-full bg-blue-800 opacity-90 absolute -top-8 -left-4"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="w-4 h-4 rounded-full bg-blue-800 opacity-90  absolute -top-4 left-16"
            ></motion.div>
          </div>
          <div className="w-40 h-40 bg-blue-800"></div>
          <div className="w-40 h-40 bg-blue-800"></div>
          <div className="w-40 h-40 bg-fuchsia-600"></div>
        </div>
        <div className="xs:w-40 sm:w-44 md:w-60  bg-slate-900 text-white rounded-3xl rotate-45 px-4 md:px-12 py-2 text-xs absolute left-1/4 -bottom-14">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="font-semibold">LOREM IPSUM</h3>
            <p className="pb-1">lorem ipsum</p>
            <h3 className="font-semibold">LOREM IPSUM</h3>
            <p>lorem ipsum</p>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, rotate: -90, y: -100 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="w-44 h-44 bg-purple-300 absolute top-1/4 left-1/4 border-[12px] "
        >
          <div className="rotate-45">
            <Image
              src="https://i.ibb.co/R7tgY0b/lion.png"
              alt="Lion Image"
              width={200}
              height={60}
            />
          </div>
        </motion.div>
        <div className="w-28 h-28 bg-sky-400 absolute top-1/3 -right-1/4">
          <h2 className="flex justify-center h-full items-center text-4xl font-bold rotate-45 text-white">
            2024
          </h2>
        </div>
      </motion.div>

      <div className="flex items-center">
        <div className="px-4 pb-2">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
              <div className="bg-slate-600 rounded-full w-2 h-2"></div>
            </div>
          </div>
        </div>
        <div ref={ref} className="text-slate-600 font-semibold pl-2">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Lorem ipsum dolor.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Lorem ipsum.
          </motion.p>
        </div>
        <div className="relative flex-1">
          <div
            className="absolute bottom-2 -right-20 z-30"
            style={{ width: "170px", height: "150px" }}
          >
            <Image
              src="https://i.ibb.co/cXt1p1c/pen-logo.webp"
              alt="Feather Image"
              width={150}
              height={160}
            />
          </div>
          <div className="w-16 h-16 rounded-full bg-blue-800 opacity-90 absolute right-10 -bottom-36 z-10"></div>
          <div className="w-3 h-3 rounded-full bg-blue-800 opacity-90 absolute right-32 top-12 z-10"></div>
        </div>
      </div>
    </main>
  );
};

export default OfferPage;
