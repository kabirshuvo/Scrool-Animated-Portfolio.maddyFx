import Image from "next/image";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import MyFiverJourney from "@/components/MyFiverJourney";
import MyHobbies from "@/components/MyHobbies";
import Footer from "@/components/Footer";
import ImageCardTwo from "@/components/image-gallery/ImageCardTwo";
import TextAnimation from "@/components/cyberPunkTextAnimation/TextAnimation";
import ImageCardsOne from "@/components/image-gallery/ImageCardsOne";
import TextAnimationOne from "@/components/cyberPunkTextAnimation/TextAnimationOne";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen">
      <HeroSection />
      <ImageCardsOne />
      <MyFiverJourney />
      <ImageCardTwo />
      <TextAnimationOne />
      <MyHobbies />
      <TextAnimation />
      <Footer />
    </main>
  );
}
