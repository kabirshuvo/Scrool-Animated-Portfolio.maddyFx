"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface WordByWordTextAnimationProps {
  value: string;
}

const WordByWordTextAnimation: React.FC<WordByWordTextAnimationProps> = ({
  value,
}) => {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start .9", "start .25"],
  });

  const words = value.split(" ");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="WordByWordTextAnimation" ref={element}>
        {words.map((word, i) => {
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: any; // Adjust type as needed
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default WordByWordTextAnimation;
