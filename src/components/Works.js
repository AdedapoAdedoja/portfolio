import React from "react";
import ResumeLink from "./assets/resume.svg";
import Portfolio from "./Portfolio";

function Works() {
  return (
    <div className="bg-black left-0 relative">
      <div className="absolute z-20 right-8 md:right-20 -top-24 animate-spin cursor-pointer">
        <img src={ResumeLink} alt="CV" className="cvLink" />
      </div>
      <div className="container mx-auto py-20 px-8 md:px-16 block">
        <h2 className="font-bold w-72 text-white" style={{ fontSize: "60px" }}>
          Selected Works
        </h2>
        <Portfolio />
      </div>
    </div>
  );
}

export default Works;
