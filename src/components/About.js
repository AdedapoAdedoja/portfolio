import MyPic from "./assets/my-pics.jpeg";

function About() {
  return (
    <div
      className="container mx-auto py-20 px-8 md:px-16 block lg:flex justify-between mb-10 overflow-hidden"
      id="about"
    >
      <div className="flex flex-col space-y-12 md:space-y-14 lg:space-y-20 mb-16 md:mb-0">
        <h2
          className="font-bold w-80 skillHeading"
          style={{ fontSize: "60px" }}
        >
          About me
        </h2>
        <div
          className="aboutImg mx-auto lg:mx-0"
          style={{ width: "354px", height: "413px" }}
        >
          <img src={MyPic} alt="Me" />
        </div>
      </div>
      <div
        className="divide-y-2 divide-black space-y-12 about"
        style={{ width: "40%" }}
      >
        <h5 className="text-2xl font-medium md:mt-28 lg:mt-8">
          “I don't just design , I create magic”
        </h5>
        <p className="font-normal text-xl leading-7 py-10">
          As a product designer, accessibility and design are very important to
          me. I enjoy creating amazing web and mobile experiences for small
          businesses and startups.
          <br />
          <br /> I have experience working in teams of various sizes and am a
          seasoned team player with strong communication skills.
          <br />
          <br />I am also an outstanding project manager who consistently offers
          solutions that are visually appealing and user-friendly.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default About;
