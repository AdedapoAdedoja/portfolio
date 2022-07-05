import GroupSvg from "./assets/Group-692.svg";

function Contact() {
  return (
    <div
      className="container mx-auto py-20 px-8 md:px-16 block lg:flex justify-between bg-black overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col">
        <h2
          className="font-bold w-80 text-white worksHeading"
          style={{ fontSize: "60px" }}
        >
          Let's Work Together!
        </h2>
        <div className="divide-y-2 divide-white max-w-3xl space-y-8">
          <div></div>
          <div className="flex justify-between items-center pt-6">
            <div className="text-white font-medium text-lg">
              <a
                href="mailto:olatokunbo.adedoja@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-5 bg-gray-50 rounded-full cursor-pointer">
                  <svg
                    width="20px"
                    height="20px"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    color="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gmail icon</title>
                    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="p-5 bg-gray-50 rounded-full cursor-pointer">
              <a
                href="https://twitter.com/Cute4rmBirth?s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20px"
                  height="20px"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter icon</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
            </div>
            <div className="p-5 bg-gray-50 rounded-full cursor-pointer">
              <a
                href="https://www.linkedin.com/in/adedapo-o-adedoja-112428188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20px"
                  height="20px"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn icon</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
            <div className="p-5 bg-gray-50 rounded-full cursor-pointer">
              <a
                href="https://www.behance.net/adedojaadedapo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  role="img"
                  fill="currentColor"
                  color="#000000"
                >
                  <title>Behance icon</title>
                  <path d="M186.5 293c0 19.3-14 25.4-31.2 25.4h-45.1v-52.9h46c18.6.1 30.3 7.8 30.3 27.5zm-7.7-82.3c0-17.7-13.7-21.9-28.9-21.9h-39.6v44.8H153c15.1 0 25.8-6.6 25.8-22.9zm132.3 23.2c-18.3 0-30.5 11.4-31.7 29.7h62.2c-1.7-18.5-11.3-29.7-30.5-29.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM271.7 185h77.8v-18.9h-77.8V185zm-43 110.3c0-24.1-11.4-44.9-35-51.6 17.2-8.2 26.2-17.7 26.2-37 0-38.2-28.5-47.5-61.4-47.5H68v192h93.1c34.9-.2 67.6-16.9 67.6-55.9zM380 280.5c0-41.1-24.1-75.4-67.6-75.4-42.4 0-71.1 31.8-71.1 73.6 0 43.3 27.3 73 71.1 73 33.2 0 54.7-14.9 65.1-46.8h-33.7c-3.7 11.9-18.6 18.1-30.2 18.1-22.4 0-34.1-13.1-34.1-35.3h100.2c.1-2.3.3-4.8.3-7.2z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6"></div>
        </div>
      </div>
      <div
        className="max-w-3xl border-2 border-white p-24 rounded-full flex items-center object-contain mt-11 lg:mt-0 contactCircle mx-auto lg:mx-0"
        style={{ width: "364px", height: "364px" }}
      >
        <div
          className="flex justify-center items-baseline underline text-white w-full"
          style={{ position: "relative" }}
        >
          <a
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:87bee56a-bc42-3a4c-aab2-c58bc3bebf2f#pageNum=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="right-14">
              <img
                src={GroupSvg}
                alt="Group"
                className="hover:rotate-45 transition duration-300 ease-in-out"
              />
              <div
                style={{
                  textAlign: "center",
                  position: "absolute",
                  left: "50%",
                  bottom: "-55%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                View My Resume
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
