import Image from "next/image";
import React from "react";

const MyFiverJourney = () => {
  return (
    <section
      className="h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `url('/images/fiverLogoImageBG.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        opacity: 0.4,
      }}
    >
      <h1
        className="z-10"
        style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
      >
        MyFiverJourney
      </h1>
    </section>
  );
};

export default MyFiverJourney;
