"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

interface CyberpunkTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CyberpunkTitle = ({ children, className }: CyberpunkTitleProps) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Add the animation class after a short delay to trigger the animation after rendering
    const timer = setTimeout(() => {
      setAnimationClass("cyberpunk-animation");
    }, 100);
    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className={`text-5xl md:text-7xl my-7 text-[#f2994a] ${className}`}>
      <h1 className={`${animationClass}`}>{children}</h1>
    </div>
  );
};

CyberpunkTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CyberpunkTitle;
