import React from "react";
import MyPic from "./assets/me-1.jpg";

function About() {
  return (
    <div className="container mx-auto py-20 px-8 md:px-16 block lg:flex justify-between mb-10 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-14 lg:space-y-20 mb-16 md:mb-0">
        <h2
          className="font-bold w-80 skillHeading"
          style={{ fontSize: "60px" }}
        >
          About me
        </h2>
        <div className="aboutImg" style={{ width: "454px", height: "513px" }}>
          <img src={MyPic} alt="Me" />
        </div>
      </div>
      <div
        className="divide-y-2 divide-black space-y-12 experience"
        style={{ width: "60%" }}
      >
        <h5 className="text-2xl font-medium mt-8">
          “Blinder, scholar, coder, dreamer... and the rest”
        </h5>
        <p className="font-normal text-xl leading-7 py-10">
          I love creating things, and watching them come alive. I love making
          people happier through design. I love telling stories that inspire the
          world to have courage and lead with kindness. My driving force is
          empathy.
          <br /> <br /> When I’m not designing and telling stories, I’m watching
          movies! I think cinema is the single greatest thing man has invented.
          <br />
          <br />
          My post-tech dream is to retire to a quiet little Island somewhere
          sunny, spend my days writing scripts for independent filmmakers. Maybe
          make a few cartoons as well. <br />
          <br />I live in a little corner of the world called Abuja.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default About;
