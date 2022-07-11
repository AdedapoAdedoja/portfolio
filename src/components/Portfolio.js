import FindalyzeMobile from "./assets/findalyze-mobile-removebg.png";
import FindalyzeWeb from "./assets/findalyze-web.jpg";
import Nivea from "./assets/nivea-app.jpg";
import Portfolio1 from "./assets/portfolio.jpg";
import Regenate from "./assets/regenate.svg";
import Youtube from "./assets/youtube.png";

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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=e8D6wayVBaw"
          >
            <img
              src={Youtube}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/gallery/147876767/Regenate-Web-Interface-Design"
        >
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=tqLWVv6Pb_8"
          >
            <img
              src={Youtube}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/gallery/147899075/Home-Page-for-Findalyze-Mobile"
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=401hQN8qHHQ"
          >
            <img
              src={Youtube}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/gallery/147870583/Touch-up-design-for-Findalyze-website?tracking_source=for_you_feed_user_published"
        >
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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=ehdT19LW52w"
          >
            <img
              src={Youtube}
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/gallery/147902317/UIUX-Portfolio-design-templates"
        >
          <img
            src={Portfolio1}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
      {/* <div>
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
      </div> */}
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Nivea Clone</h3>
            <p className="text-white opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=KH-8OFiHhgg"
            >
              <img
                src={Youtube}
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/gallery/147855301/Mobile-Interface-for-Nivea"
        >
          <img
            src={Nivea}
            alt="Work-1"
            style={{ width: "350px", height: "360px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
