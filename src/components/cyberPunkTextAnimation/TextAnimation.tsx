"use client";
import React, { useEffect, useRef } from "react";
import "../../app/globals.css";
import { useScroll, motion } from "framer-motion";

interface TextAnimationProps {
  value: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ value }) => {
  const element = useRef<HTMLParagraphElement>(null); // Correctly typed ref
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start .9", "start .25"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e: any) => console.log(e));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* <div className="h-screen"></div> */}
      <motion.p
        className="textAnimation"
        ref={element}
        style={{ opacity: scrollYProgress }}
      >
        {value}
      </motion.p>
      {/* <div className="h-screen"></div> */}
    </div>
  );
};

export default TextAnimation;
