import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextWrapperProps {
  children: ReactNode;
}

const TextWrapper: React.FC<TextWrapperProps> = ({ children }) => {
  const text = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: [0, 1],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p
        className="text-5xl flex flex-col justify-center gap-3"
        style={{ opacity, x, color: colorChange }}
      >
        {children}
      </motion.p>
    </div>
  );
};

const TextSection: React.FC = () => {
  return (
    <section>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
      <TextWrapper>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </TextWrapper>
    </section>
  );
};

export default TextSection;
