import Banner from "../images/banner.svg";
import ClintCeo from "../images/clint.png";
import DhruvCeo from "../images/dhruv.png";
import LinkedinBlank from "../images/social_media/linkedin-white.svg";
import AdvisoryBoard from "../components/aboutpage-components/AdvisoryBoard";

const AboutPage = () => {
  const CoFounder = ({ image, link }) => {
    return (
      <div class="flex flex-wrap justify-center">
        <div class="w-full relative">
          <img src={image} alt="..." />
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            style={{ backgroundImage: `url('${LinkedinBlank}')` }}
            className="absolute bottom-3 right-2 bg-cover w-6 h-6 transition duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        className="w-full h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center px-20 pb-64 text-white"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <div className="h-1/2 flex flex-col justify-center items-center text-center gap-10 mb-20 lg:mb-0">
          <div className="uppercase border border-white text-lg w-64 py-1 font-light px-4 h-10 rounded-full">
            Introducing Torpedo
          </div>

          <h2 className="text-white font-black text-6xl md:text-9xl uppercase ">
            meet torpedo
          </h2>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row px-5 w-full h-screen gap-10 my-20 lg:gap-64 justify-center lg:px-20">
        <div className="flex flex-col md:grid grid-cols-2 lg:flex lg:flex-col lg:w-1/5 h-full gap-20 md:px-20 md:my-10 lg:my-0 lg:px-0">
          <CoFounder
            image={ClintCeo}
            link="https://www.linkedin.com/in/clint-c-a7461722b/"
          />
          <CoFounder
            image={DhruvCeo}
            link="https://www.linkedin.com/in/drvgoel/"
          />
        </div>

        <div className="flex flex-col justify-center lg:justify-start lg:w-1/3">
          <h2 className="font-black text-purple text-5xl tracking-wider mb-10 md:text-center lg:text-left">
            Our Story
          </h2>
          <h2 className="font-light tracking-wider text-sm md:text-xl text-center lg:text-left">
            Torpedo was founded by two highly ambitious 17 year-olds who wanted
            to maximize their impact in the world. <br />
            <br />
            It’s quite simple, we wanted to solve the world’s greatest problems
            and nurture projects projects that impact billions, through
            collaboration and opportunity.
            <br />
            <br />
            Starting off as innovators at The Knowledge Society, our co-founders
            truly recognized the potential and sheer amount of innovation that
            could be fostered by young change-makers.
            <br />
            <br />
            However, there just aren’t enough tools, resources, and connections
            ready to accommodate the talent, power, and creativity embodied by
            young talented individuals.
            <br />
            <br />
            young talented individuals. You may not believe in young people, but
            we sure do.
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[45rem] md:my-64">
        <h2 className="text-4xl font-black text-magenta">Meet Our Advisors</h2>
        <AdvisoryBoard />
      </div>
    </div>
  );
};

export default AboutPage;
