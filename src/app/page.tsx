"use client";

import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

import Image from "next/image";
import HorizontalWrapper from "./components/HorizontalWrapper";
import SectionLayout from "./components/SectionLayout";
import { cards } from "./utils/cards";
import Card from "./components/Card";
import Fullpage from "./components/Fullpage";
import TextSection from "./TextSection";
import ZoomSection from "./components/ZoomSection";

export default function Home() {
  const video = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: [0, 1],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );
  return (
    <main className="min-h-screen w-full">
      <SectionLayout>
        <HorizontalWrapper height="40rem" direction={-1400}>
          <div className="grid grid-cols-5 gap-4 cards">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </HorizontalWrapper>
      </SectionLayout>

      <Fullpage />

      <SectionLayout>
        <HorizontalWrapper height="40rem" direction={1400}>
          <div className="grid grid-cols-5 gap-4 cards" style={{ right: 0 }}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </HorizontalWrapper>
      </SectionLayout>

      <SectionLayout>
        <TextSection />
      </SectionLayout>

      <SectionLayout>
        <motion.div
          className="video"
          ref={video}
          style={{
            opacity,
            scale,
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/ACaX2X_ZHbM"
            title="MaddyFX Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </SectionLayout>

      <SectionLayout>
        <ZoomSection />
      </SectionLayout>

      <SectionLayout>
        <TextSection />
      </SectionLayout>
    </main>
  );
}
