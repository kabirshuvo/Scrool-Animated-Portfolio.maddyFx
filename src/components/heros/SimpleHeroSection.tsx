"use client";

import React, { useRef, useEffect } from "react";
import "../../../styles/simpleHeroSection.css";

const SimpleHeroSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    if (leftRef.current) {
      const p =
        ((e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) /
          window.innerWidth) *
        100;

      leftRef.current.style.width = `${p}%`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleOnMove);
    document.addEventListener("touchmove", handleOnMove);

    return () => {
      document.removeEventListener("mousemove", handleOnMove);
      document.removeEventListener("touchmove", handleOnMove);
    };
  }, []);

  return (
    <div className="h-screen">
      <div id="left-side" className="side" ref={leftRef}>
        <h2 className="title">
          Today is going to be <span className="fancyWord">awesome</span>
        </h2>
      </div>
      <div id="right-side" className="side">
        <h2 className="title">
          Today is going to be <span className="fancyWord"> wonderful </span>{" "}
        </h2>
      </div>
    </div>
  );
};

export default SimpleHeroSection;
