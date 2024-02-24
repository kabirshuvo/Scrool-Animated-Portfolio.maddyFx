import React from "react";
import Image from "next/image";
import Link from "next/link";
import MySkills from "../my-skills/page";
import ProjectDisplay from "@/components/projects/ProjectDisplay";

const DesignsPage = () => {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[1280px]">
          <h1 className="text-[50px] text-white font-semibold">
            Designing Fabrics & Creating Visuals <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Transforming Ideas into Art
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Explore a decade-long journey of innovation and creativity,
            showcasing a diverse range of design projects spanning textile
            engineering and graphic design domains. From conceptualization to
            execution, each project reflects a unique blend of technical
            expertise and artistic flair, pushing the boundaries of traditional
            design practices.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Design Gallery 1
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Design Gallery 2
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Design Gallery 3
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/#"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Design Gallery 1
        </Link>

        <Link
          href="/#"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Design Gallery 2
        </Link>
        <Link
          href="/#"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Design Gallery 3
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />

      <section className="w-screen h-screen relative">
        <h1>Second Section</h1>
      </section>
      <ProjectDisplay />
      <MySkills />
    </main>
  );
};

export default DesignsPage;
