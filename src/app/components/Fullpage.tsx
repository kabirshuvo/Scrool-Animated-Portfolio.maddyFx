import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Fullpage: React.FC = () => {
  const secRef = useRef<HTMLDivElement>(null);

  // ScrollYProgress is a value between 0 and 1
  const { scrollYProgress } = useScroll({
    //target is the element that we want to track
    target: secRef,
    offset: [0, 1],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  return (
    <div ref={secRef} className="relative">
      <motion.div
        className="image w-full h-[1000px] overflow-hidden"
        style={{
          scale,
          x: xTransform,
        }}
      >
        <Image
          src="/images/rover.jpg"
          alt="rover"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded border border-gray-300 transition-all duration-300 hover:border-orange-500"
        />
      </motion.div>
    </div>
  );
};

export default Fullpage;
