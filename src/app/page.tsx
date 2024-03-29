import Image from "next/image";

import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import HeroSection2D from "@/components/HeroSection2D";
import MyFiverJourney from "@/components/MyFiverJourney";
import MyHobbies from "@/components/MyHobbies";
// import Footer from "@/components/Footer";
import ImageCardTwo from "@/components/image-gallery/ImageCardTwo";
import TextAnimation from "@/components/cyberPunkTextAnimation/TextAnimation";
import ImageCardsOne from "@/components/image-gallery/ImageCardsOne";
import TextAnimationOne from "@/components/cyberPunkTextAnimation/TextAnimationOne";
import HeroSection3D from "@/components/HeroSection3D";
import WordByWordTextAnimation from "@/components/cyberPunkTextAnimation/WordByWordTextAnimation";
import BlobAnimation from "@/components/BlobAnimation";
import Footer from "@/components/Footer";
import ProjectDisplay from "@/components/projects/ProjectDisplay";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

const Paragraph =
  "My Fiver Journey. In the year of 1965 when I was not in the world then my Grandpa Was dreamed that I'm working for fiver.";

const Words = "Lets make  great work together.";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen">
      <HeroSection2D />
      <ImageCardsOne />
      <TextAnimationOne value={Words} />
      <ImageCardsOne />
      <WordByWordTextAnimation value={Paragraph} />
      <MyFiverJourney />
      <ImageCardTwo />
      <TextAnimation value={Paragraph} />
      <ProjectDisplay />
      <MyHobbies />
      <TextAnimation value={Paragraph} />
    </main>
  );
}
