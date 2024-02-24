import React from "react";
import "../../app/globals.css";
import Button from "../buttons/Button";
import Magnetic from "../Magnetic";

interface TextAnimationProps {
  value: string;
}

const TextAnimationOne: React.FC<TextAnimationProps> = ({ value }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center mt-10 sm:-mt-20 relative  text-center font-bold">
      <Magnetic>
        <p className="textAnimationOne leading-none text-[4rem] md:text-[7rem] lg:text-[13rem] ">
          {value}
        </p>
      </Magnetic>
      <div>
        <Magnetic>
          <Button variant="primary" className="mt-16">
            My Typographics
          </Button>
        </Magnetic>
      </div>
    </div>
  );
};

export default TextAnimationOne;
