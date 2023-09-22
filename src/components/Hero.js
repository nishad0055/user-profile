import React from "react";
import heroImg from "../assets/images/smiling04.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <img className="w-full h-screen" src={heroImg} alt="" />
        <div class="absolute inset-0 bg-[rgba(0,0,0,.4)]"></div>
      </div>
    </>
  );
};

export default Hero;
