import React from "react";
import "../../app/globals.css";
import Button from "../buttons/Button";
import Magnetic from "../Magnetic";

interface TextAnimationProps {
  value: string;
}

const TextAnimationOne: React.FC<TextAnimationProps> = ({ value }) => {
  return (
    <div className="h-screen flex justify-center items-center -mt-20 relative">
      <Magnetic>
        <p className="textAnimationOne">{value}</p>
      </Magnetic>
      <div>
        <Magnetic>
          <Button variant="primary">Test Button</Button>
        </Magnetic>
      </div>
    </div>
  );
};

export default TextAnimationOne;
