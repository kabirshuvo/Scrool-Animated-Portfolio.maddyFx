import Image from "next/image";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex min-h-screen  ">
      <div className=" text-3xl w-1/2 text-right flex flex-col justify-center items-center">
        <div className="text-7xl my-7">
          <h1 className={abril.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis
          inventore, nam porro, doloribus provident vitae fugiat nemo atque,
          fuga odio vero eaque temporibus sed recusandae harum suscipit.
          Architecto, voluptatem.
        </p>
        <div className="flex justify-center mt-4 gap-7 text-lg ">
          <button className="border rounded-3xl px-4 border-slate-900 hover:border-white hover:text-slate-500">
            Go Ahead 1
          </button>
          <button className="border rounded-3xl px-4 border-slate-900 hover:border-white hover:text-slate-500">
            Go Ahead 2
          </button>
        </div>
      </div>
      <div className=" justify-center flex items-center w-1/2">
        <Image
          src="/AdobeIllustrator_logo.png"
          width={300}
          height={30}
          alt="Hero Image"
        />
      </div>
    </main>
  );
}
