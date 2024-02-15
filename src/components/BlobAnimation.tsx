"use client";

import { useEffect, useState } from "react";
import "../app/globals.css";
const BlobAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="blob" style={{ left: position.x, top: position.y }}></div>
      <div id="blur"></div>
    </>
  );
};

export default BlobAnimation;
