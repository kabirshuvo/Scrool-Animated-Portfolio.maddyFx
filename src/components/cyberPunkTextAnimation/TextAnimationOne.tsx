import React from "react";

import "../../app/globals.css";

interface TextAnimationProps {
  value: string;
}

const TextAnimationOne: React.FC<TextAnimationProps> = ({ value }) => {
  return (
    <div className="h-screen flex justify-center">
      <p className="textAnimationOne">{value}</p>
    </div>
  );
};

export default TextAnimationOne;
