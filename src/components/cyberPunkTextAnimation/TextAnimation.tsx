import React from "react";

import "../../app/globals.css";

interface TextAnimationProps {
  value: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ value }) => {
  return (
    <div className="h-screen flex justify-center">
      <p className="textAnimation">{value}</p>
    </div>
  );
};

export default TextAnimation;
