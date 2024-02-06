import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalWrapperProps {
  children: React.ReactNode;
  direction: number;
  height: string;
}

const HorizontalWrapper: React.FC<HorizontalWrapperProps> = ({
  children,
  direction,
  height,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 1],
  });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalWrapper;
