import React from "react";
import design, { DesignItem } from "../../utils/design";
import Image from "next/image";

const DesignItemComponent: React.FC<DesignItem> = ({ title, description }) => (
  <>
    <h1 className="text-pink-500">{title}</h1>
    <p className="text-yellow-300">{description}</p>
  </>
);

const DesignLayout = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/3 bg-gray-800 text-blue-400 flex flex-col justify-center items-center">
        <div className="transform -rotate-90">
          <span className="text-3xl">MY DESIGNS</span>
        </div>
        {/* <h4 className="pb-16">MADDAYFX</h4> */}
      </div>
      <div className="flex-1 relative bg-gray-800 text-yellow-300 flex flex-col justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/pen-logo.png')" }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {design.map((item) => (
            <DesignItemComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignLayout;
