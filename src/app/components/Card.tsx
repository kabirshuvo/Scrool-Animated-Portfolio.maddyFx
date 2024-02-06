import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="relative bg-white h-full p-6 rounded border border-gray-300 transition-transform duration-300 hover:transform hover:scale-105">
      <div className="image relative h-full w-full">
        <p className="new absolute top-3 right-2.5 bg-blue-800 text-white px-2 py-0.5 rounded font-semibold">
          New
        </p>
        <div className="text absolute bottom-3 left-2.5">
          <h3 className="inline-block bg-white px-4 py-2 text-yellow-500 text-lg font-semibold rounded-full border border-gray-300 mb-2">
            {title}
          </h3>
          <p>{description}</p>
        </div>

        <Image
          src={image}
          alt="image"
          //   className="rounded"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="overlay absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default Card;
