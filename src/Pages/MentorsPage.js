import Banner from "../images/banner.svg";
import ADP from "../images/partnerships/adp.png";
import Torpedo from "../images/torpedo-circle.svg";
import MobileBanner from "../images/mobile-banner-2.svg";
import FadeIn from "../components/main_utils/Fadein";
import "../components/main_utils/utility_css/fadein.css";

const MentorsPage = () => {
  return (
    <div className="w-screen h-full">
      <div
        className="hidden w-screen h-screen bg-cover bg-no-repeat md:flex flex-col items-center justify-center pb-64 px-20 gap-10"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <div className=" md:px-0 md:h-1/2 flex text-white flex-col justify-center items-center text-center gap-10 md:mb-40 lg:mb-0">
          <div className="uppercase tracking-wider border border-white text-xs px-2  text-center md:text-lg py-1 md:px-4 font-light h-10 rounded-full lineUp">
            PARTNERING WITH ADP LIST
          </div>

          <h2 className="text-white font-black text-4xl md:text-7xl lg:text-8xl uppercase lineUp">
            mentors
          </h2>

          <FadeIn>
            <div className="flex flex-row justify-center items-center gap-10 lineUp">
              <div className="flex flex-wrap justify-center">
                <a
                  className="w-16 h-16 md:w-28 md:h-28"
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.adplist.org/"
                >
                  <img
                    src={ADP}
                    alt="..."
                    className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                  />
                </a>
              </div>

              <h2 className="text-xl">x</h2>
              <div className="flex flex-wrap justify-center">
                <div className=" w-16 h-16 md:w-28 md:h-28">
                  <img
                    src={Torpedo}
                    alt="..."
                    className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div
        className="flex flex-col md:hidden bg-cover h-screen w-full justify-center"
        style={{ backgroundImage: `url('${MobileBanner}')` }}
      >
        <div className=" md:px-0 md:h-1/2 flex text-white flex-col justify-center items-center text-center gap-10 mb-96">
          <div className="uppercase tracking-wider border border-white text-xs px-2  text-center md:text-lg py-1 md:px-4 font-light py-2 rounded-full ">
            <h2>PARTNERING WITH ADP LIST</h2>
          </div>

          <h2 className="text-white font-black text-4xl md:text-7xl lg:text-8xl uppercase ">
            mentors
          </h2>
          <div className="flex flex-row justify-center items-center gap-5">
            <div className="flex flex-wrap justify-center">
              <a
                className="w-16 h-16 md:w-28 md:h-28"
                target="_blank"
                rel="noreferrer"
                href="https://app.adplist.org/"
              >
                <img
                  src={ADP}
                  alt="..."
                  className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                />
              </a>
            </div>

            <h2 className="text-xl">x</h2>
            <div className="flex flex-wrap justify-center">
              <div
                className=" w-16 h-16 md:w-28 md:h-28"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Torpedo}
                  alt="..."
                  className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FadeIn>
        <iframe
          className="w-screen h-screen my-20"
          src="https://adplist.org/explore"
          title="ADP LIST"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </FadeIn>
    </div>
  );
};
export default MentorsPage;
