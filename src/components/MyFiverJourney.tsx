import Image from "next/image";
import React from "react";

const MyFiverJourney = () => {
  return (
    <section
      className="h-screen flex justify-center items-center p-4"
      style={{
        backgroundImage: `url('/images/fiverLogoImageBG.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
        MyFiverJourney
      </h1>
    </section>
  );
};

export default MyFiverJourney;
