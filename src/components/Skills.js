import CopyWriting from "./assets/Creative-Writing.png";
import Prototyping from "./assets/Design-Systems.png";
import InteractionDesign from "./assets/Interaction-Design.png";
import StoryTelling from "./assets/Storytelling.png";
import UxResearch from "./assets/User-Research.png";
import VisualDesign from "./assets/visual-design.png";

function Skills() {
  return (
    <div
      className="container mx-auto py-20 px-8 md:px-16 block md:flex justify-between lg:items-center relative"
      id="skills"
    >
      <div className="text-gray-800 flex flex-col space-y-24 md:space-y-32 lg:space-y-52 mb-5 md:mb-0">
        <h2
          className="font-bold w-80 skillHeading"
          style={{ fontSize: "60px" }}
        >
          Skills & Experience
        </h2>
        <div className="my-2 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-2">
            <img
              src={VisualDesign}
              alt="Visual Design"
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto"
            />
            <p className="text-base font-medium text-center mx-auto">
              Visual Design
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <img
              src={InteractionDesign}
              alt="Interaction Design"
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto"
            />
            <p className="text-base font-medium text-center mx-auto">
              Interaction Design
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <img
              src={Prototyping}
              alt="Prototyping"
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto"
            />
            <p className="text-base font-medium text-center mx-auto">
              Prototyping
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <img
              src={UxResearch}
              alt="UX Research"
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto"
            />
            <p className="text-base font-medium text-center mx-auto">
              UX Research
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <img
              src={StoryTelling}
              alt="Storytelling"
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto"
            />
            <p className="text-base font-medium text-center mx-auto">
              Storytelling
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <img
              src={CopyWriting}
              alt="UX Copywriting"
              className="w-12 h-12 lg:w-16 lg:h-16 mx-auto"
            />
            <p className="text-base font-medium mx-auto">UX Copywriting</p>
          </div>
        </div>
      </div>
      <div
        className="divide-y-2 divide-black space-y-5 experience"
        style={{ width: "45%" }}
      >
        <h5 className="text-base font-medium uppercase">Experience</h5>
        <div
          className="flex justify-between py-12"
          style={{ display: "grid", gridTemplateColumns: "30% 70%" }}
        >
          <h5 className="text-base font-medium">Apr 2022 - Present</h5>
          <div className="flex flex-col">
            <h3 className="text-3xl font-medium">UI/UX Trainee</h3>
            <h5 className="text-base font-medium text-gray-500">
              Regenate, Germany
            </h5>
          </div>
        </div>
        <div
          className="flex justify-between py-12"
          style={{ display: "grid", gridTemplateColumns: "30% 70%" }}
        >
          <h5 className="text-base font-medium">July 2021 - Dec 2021</h5>
          <div className="flex flex-col">
            <h3 className="text-3xl font-medium">
              IT Project Management Intern
            </h3>
            <h5 className="text-base font-medium text-gray-500">
              IBM / Kyndryl Global Services, Poland
            </h5>
          </div>
        </div>
        <div className="flex justify-between py-12"></div>
      </div>
    </div>
  );
}

export default Skills;
