import Banner from "../images/banner.svg";
import Clint from "../images/team/clint.png";
import Dhruv from "../images/team/dhruv.png";
import Adrija from "../images/team/adrija.png";
import Pawel from "../images/team/pawel.png";
import Harsh from "../images/team/harsh.png";
import Rumeza from "../images/team/rumeza.png";
import LinkedinBlank from "../images/social_media/linkedin-white.svg";
import MobileBanner from "../images/mobile-banner-2.svg";
import AdvisoryBoard from "../components/aboutpage-components/AdvisoryBoard";
import FadeIn from "../components/main_utils/Fadein";
import "../components/main_utils/utility_css/fadein.css";

const AboutPage = () => {
  const FoundingMember = ({ image, link }) => {
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
          >
            {" "}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div
        className="hidden w-full h-screen bg-cover bg-no-repeat md:flex flex-col items-center justify-center px-20 pb-64 text-white"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <FadeIn>
          <div className="h-1/2 flex flex-col justify-center items-center text-center gap-10 mb-20 md:mb-40 lg:mb-0 lineUp">
            <div className="uppercase border border-white text-lg w-64 py-1 font-light px-4 h-10 rounded-full">
              Introducing Torpedo
            </div>

            <h2 className="text-white font-black text-6xl md:text-9xl uppercase lineUp ">
              meet torpedo
            </h2>
          </div>
        </FadeIn>
      </div>
      <div
        className="flex flex-col md:hidden bg-cover h-screen w-full"
        style={{ backgroundImage: `url('${MobileBanner}')` }}
      >
        <FadeIn>
          <div className="h-1/2 flex flex-col justify-center items-center text-center gap-10 mb-20 lg:mb-0 lineUp">
            <div className="uppercase border border-white text-lg w-64 py-1 font-light px-4 h-10 rounded-full">
              Introducing Torpedo
            </div>

            <h2 className="text-white font-black text-6xl md:text-9xl uppercase lineUp">
              meet torpedo
            </h2>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="flex flex-col items-center justify-center px-5 md:px-20 h-1/2">
          <h2 className="text-4xl font-black text-white mb-10">Our Team</h2>
          <FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 lg:px-20 md:my-10 lg:my-0 lg:px-0">
              <FoundingMember
                image={Dhruv}
                link="https://www.linkedin.com/in/drvgoel/"
              />
              <FoundingMember
                image={Clint}
                link="https://www.linkedin.com/in/clint-c-a7461722b/"
              />
              <FoundingMember
                image={Adrija}
                link="https://www.linkedin.com/in/adrija-ghosh-968384243/"
              />
              <FoundingMember
                image={Pawel}
                link="https://www.linkedin.com/in/pawe%C5%82-plewa-78b398250/"
              />
              <FoundingMember
                image={Rumeza}
                link="https://www.linkedin.com/in/rumeza-fatima-899101229/"
              />
              <FoundingMember
                image={Harsh}
                link="https://www.linkedin.com/in/harsh-bhatt-8638041b1/"
              />
            </div>
          </FadeIn>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="flex flex-col items-center justify-center gap-10 mt-40 md:my-64">
          <h2 className="text-4xl font-black text-white">Meet Our Advisors</h2>
          <AdvisoryBoard />
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutPage;
