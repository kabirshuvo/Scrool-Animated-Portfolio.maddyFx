import React from "react";

const MyHobbies = () => {
  return (
    <section
      className="h-screen flex justify-center items-center p-4"
      style={{
        backgroundImage: `url('/bg-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.5, // Adjust the opacity value as needed
      }}
    >
      <h1 style={{ color: "white", fontSize: "2rem", textAlign: "center" }}>
        My Hobbies
      </h1>
    </section>
  );
};

export default MyHobbies;
