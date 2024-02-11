import Image from "next/image";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import HeroSection from "@/components/HeroSection";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <HeroSection />
    </main>
  );
}
