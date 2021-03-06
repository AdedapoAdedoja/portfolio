import ResumeLink from "./assets/resume.svg";
import Portfolio from "./Portfolio";

function Works() {
  return (
    <div className="bg-black left-0 relative" id="projects">
      <a
        href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:87bee56a-bc42-3a4c-aab2-c58bc3bebf2f#pageNum=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute z-20 right-8 md:right-20 -top-24 animate-spin cursor-pointer">
          <img src={ResumeLink} alt="CV" className="cvLink" />
        </div>
      </a>

      <div className="container mx-auto py-20 px-8 md:px-16 block">
        <h2
          className="font-bold text-white worksHeading"
          style={{ fontSize: "60px" }}
        >
          My Projects
        </h2>
        <Portfolio />
      </div>
    </div>
  );
}

export default Works;
