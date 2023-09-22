import React from "react";
import hero from "../assets/images/smiling04.jpg";
import heroImg from "../assets/images/human-resources-concept-with-hand.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img className="w-full h-screen" src={heroImg} alt="" />
        <div class="absolute inset-0 bg-[rgba(0,0,0,.7)]"></div>
      </div>
    </>
  );
};

export default Hero;
