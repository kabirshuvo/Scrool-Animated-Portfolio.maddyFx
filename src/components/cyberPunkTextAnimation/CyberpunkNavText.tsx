"use client";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

interface CyberpunkNavTextProps {
  children: React.ReactNode;
  className?: string;
}

const CyberpunkNavText: React.FC<CyberpunkNavTextProps> = ({
  children,
  className,
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = () => {
    if (titleRef.current) {
      let iterations = 0;

      const interval = setInterval(() => {
        titleRef.current!.innerText = titleRef
          .current!.innerText.split("")
          .map((letter, index) => {
            if (index < iterations) {
              return titleRef.current!.dataset.value![index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iterations >= titleRef.current!.dataset.value!.length)
          clearInterval(interval);

        iterations += 1 / 3;
      }, 30);
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerText = titleRef.current.dataset.value!;
    }
  }, []);

  return (
    <div>
      <h1 ref={titleRef} data-value="MaddyFX" onMouseMove={handleMouseMove}>
        {children}
      </h1>
    </div>
  );
};

CyberpunkNavText.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CyberpunkNavText;
