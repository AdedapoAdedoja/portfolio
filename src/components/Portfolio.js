import FindalyzeMobile from "./assets/findalyze-mobile.jpg";
import FindalyzeWeb from "./assets/findalyze-web.jpg";
import Photography from "./assets/photography.jpg";
import Portfolio1 from "./assets/portfolio.jpg";
import Regenate from "./assets/regenate.svg";
import Todo from "./assets/todo.jpg";
import WorkCta from "./assets/work-cta.svg";

function Portfolio() {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y-2 divide-white">
      <div className="hidden"></div>
      <div className="overflow-hidden">
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Regenate</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <a href="https://www.figma.com/proto/Cf2wfYK5hrLujN4yXwFQp1/Regenate-Project?node-id=520%3A537&scaling=scale-down&page-id=0%3A1&starting-point-node-id=520%3A537">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://www.figma.com/proto/Cf2wfYK5hrLujN4yXwFQp1/Regenate-Project?node-id=520%3A537&scaling=scale-down&page-id=0%3A1&starting-point-node-id=520%3A537">
          <img
            src={Regenate}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Findalyze</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <a href="https://www.figma.com/proto/4kIU22R8xBOQXU8nAnAeEG/Findalyze-Mobile?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a
          href="https://www.figma.com/proto/4kIU22R8xBOQXU8nAnAeEG/Findalyze-Mobile?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1"
          className="w-96 max-h-96"
        >
          <img
            src={FindalyzeMobile}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Findalyze</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <a href="https://www.figma.com/proto/MuIq8pfznWjSGFs85Dmnsr/Findalyze-Project?node-id=3%3A2&scaling=min-zoom&page-id=0%3A1">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://www.figma.com/proto/MuIq8pfznWjSGFs85Dmnsr/Findalyze-Project?node-id=3%3A2&scaling=min-zoom&page-id=0%3A1">
          <img
            src={FindalyzeWeb}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Portfolio Design</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Website Application
            </p>
          </div>
          <a href="https://www.figma.com/proto/eSiVt5C54Adn4lTeeRLQ8f/Portfolio-Design?node-id=2%3A3&scaling=min-zoom&page-id=0%3A1">
            <img
              src={WorkCta}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://www.figma.com/proto/eSiVt5C54Adn4lTeeRLQ8f/Portfolio-Design?node-id=2%3A3&scaling=min-zoom&page-id=0%3A1">
          <img
            src={Portfolio1}
            alt="Work-1"
            style={{ width: "350px", height: "360px", objectFit: "center" }}
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Photo</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <div>
            <a href="https://www.figma.com/proto/B8pJRsFPm5e4GZ5Gkkn4vz/Photo-Profile?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1">
              <img
                src={WorkCta}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="https://www.figma.com/proto/B8pJRsFPm5e4GZ5Gkkn4vz/Photo-Profile?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1">
          <img
            src={Photography}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Todo</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="https://www.figma.com/proto/GnA8YEKlACEmJwH81h25pA/Todo-App-Design?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1">
              <img
                src={WorkCta}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="https://www.figma.com/proto/GnA8YEKlACEmJwH81h25pA/Todo-App-Design?node-id=2%3A2&scaling=min-zoom&page-id=0%3A1">
          <img
            src={Todo}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
