import React from "react";
import WorkCta from "./assets/work-cta.svg";
import Portfolio1 from "./assets/Mask-Group-01.png";
import Portfolio2 from "./assets/iMac.png";
import Portfolio3 from "./assets/Mask-Group-02.png";
import Portfolio4 from "./assets/iMac-2-1.png";
import Portfolio5 from "./assets/FeelBetr.png";
import Portfolio6 from "./assets/Sams-Folio.png";
import Portfolio7 from "./assets/squire.png";
import Portfolio8 from "./assets/Mask-Group-03.png";

function Portfolio() {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y-2 divide-white">
      <div className="hidden"></div>
      <div className="overflow-hidden">
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Amoto Health</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <a href="!#">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="!#">
          <img src={Portfolio1} alt="Work-1" className="max-w-sm max-h-96" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Amoto Health</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <a href="!#">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="!#" className="w-96 max-h-96">
          <img src={Portfolio2} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">EMIS</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <a href="!#">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="!#">
          <img src={Portfolio3} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Alumates</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website &#40;Coming Soon&#41;
            </p>
          </div>
          <a href="!#">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="!#">
          <img src={Portfolio4} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">FeelBetr</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src={WorkCta}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio5} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Sam's Portfolio</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src={WorkCta}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio6} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Squire</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website &#40;Coming Soon&#41;
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src={WorkCta}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio7} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">EatBetr</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src={WorkCta}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio8} alt="Work-1" />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
