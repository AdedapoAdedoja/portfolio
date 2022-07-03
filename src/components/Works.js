import ResumeLink from "./assets/resume.svg";
import Portfolio from "./Portfolio";

function Works() {
  return (
    <div className="bg-black left-0 relative" id="projects">
      <a
        href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:f37c4f5a-16ed-3605-ba7e-b4b17bb57f0f"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute z-20 right-8 md:right-20 -top-24 animate-spin cursor-pointer">
          <img src={ResumeLink} alt="CV" className="cvLink" />
        </div>
      </a>

      <div className="container mx-auto py-20 px-8 md:px-16 block">
        <h2
          className="font-bold w-72 text-white worksHeading"
          style={{ fontSize: "60px" }}
        >
          Selected Works
        </h2>
        <Portfolio />
      </div>
    </div>
  );
}

export default Works;
