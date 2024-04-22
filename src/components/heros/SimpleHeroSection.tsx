import React from "react";
import "../../../styles/simpleHeroSection.css";

const SimpleHeroSection = () => {
  return (
    <div>
      <div id="left-slide" className="slide">
        <h2 className="title">Today is going to be awesome</h2>
      </div>
      <div id="right-slide" className="slide">
        <h2 className="title">Today is going to be wonderful</h2>
      </div>
    </div>
  );
};

export default SimpleHeroSection;
