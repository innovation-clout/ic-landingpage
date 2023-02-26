import "../homepage-components/homepage_css/homepage.css";
import Rocket from "../../images/3d-rocket.svg";
import RocketPath from "../../images/rocket-path.svg";
import Stars from "../../images/planets/star.svg"
import Star2 from "../../images/planets/star2.svg"
import Moon from "../../images/planets/moon-mini.svg"
import useOnScreen from "../main_utils/useOnScreen";
import { useRef } from "react";
import "../main_utils/footer.css"
import "./homepage_css/homepage.css"
const Process = () => {
  const InfoBlurb = ({ title, description }) => {
    return (
      <div className="flex flex-col gap-2 text-left md:items-center text-white">
        <h2 className="font-bold md:font-extrabold text-xl md:text-2xl">{title}</h2>

        {description}
      </div>
    );
  };

  const rocket = useRef(document.querySelector(".rocket"))

 



  return (
    <div className="flex flex-col h-full lg:h-screen w-full items-center justify-center gap-3 lg:mt-40 md:mb-0">
      <div className="flex flex-row items-center font-black text-white text-left w-full px-5 md:px-40 lg:px-28">
      <div className="flex flex-col">
        <div  className="w-20 h-20 bg-cover rotate" style={{ backgroundImage: `url('${Moon}')`}}/>
        <div className="w-10 h-10 bg-cover" style={{ backgroundImage: `url('${Stars}')`}}/>
      </div>
      <h2 className="text-3xl md:text-4xl flex flex-row items-center font-extrabold md:font-black text-white text-left w-full md:px-10">
      How it works
      </h2>
        
      </div>
      <div className="flex flex-col w-full h-3/4 items-center ">
        <div
          className="hidden md:bg-contain md:bg-no-repeat w-full h-full lg:flex flex-row items-center justify-center text-center"
          style={{ backgroundImage: `url('${RocketPath}')` }}
        >
          <div className="flex flex-col px-5 text-left md:text-center md:flex-row w-full gap-20 items-center justify-center mb-36 md:px-20">
            <InfoBlurb
              title={"Quick Portfolio Set-Up"}
              description={
                <h2 className="font-light text-lg md:text-center ">
                  Plug in your information and build your own centralized career
                  portfolio and personal roadmap within seconds.
                </h2>
              }
            />
            <InfoBlurb
              title={"Portfolio Evaluations"}
              description={
                <h2 className="font-light text-lg md:text-center">
                  Our platform is built to provide a seamless user experience
                  that delivers accurate portfolio evaluations for the current
                  market trends.
                </h2>
              }
            />
            <InfoBlurb
              title={"Launch Ari"}
              description={
                <h2 className="font-light text-lg md:text-center">
                  With access to your own Digital Career advisor, navigating
                  your career path has never been easier.
                </h2>
              }
            />
          </div>
        </div>
        <div
          className="md:bg-contain md:bg-no-repeat w-full h-full flex lg:hidden flex-row items-center justify-center text-center"
        >
          <div className="flex flex-col px-5 text-left md:text-center flex-row w-full gap-16 py-10  relative items-center justify-center mb-36 lg:px-20">
            <InfoBlurb
              title={"Quick Portfolio Set-Up"}
              description={
                <h2 className="font-light text-sm leading-10 md:px-40 md:text-center">
                  Plug in your information and build your own centralized career
                  portfolio and personal roadmap within seconds.
                </h2>
              }
            />
            <div className="w-10 h-10 bg-cover absolute right-16 md:right-40 top-56 md:top-48 floating" style={{ backgroundImage: `url('${Stars}')`}}/>
            <InfoBlurb
              title={"Portfolio Evaluations"}
              description={
                <h2 className="font-light text-sm leading-10  md:px-40 md:text-center">
                  Our platform is built to provide a seamless user experience
                  that delivers accurate portfolio evaluations for the current
                  market trends.
                </h2>
              }
            />
             <div className="w-20 h-20 bg-contain bg-no-repeat absolute right-3 md:left-40 bottom-32 md:bottom-36 floating" style={{ backgroundImage: `url('${Star2}')`, rotate: "-6deg"}}/>
            <InfoBlurb
              title={"Launch Ari"}
              description={
                <h2 className="font-light text-sm leading-10  md:px-40 md:text-center">
                  With access to your own Digital Career advisor, navigating
                  your career path has never been easier.
                </h2>
              }
            />
          </div>
        </div>
        
        <div
        ref={rocket}
          className={`hidden lg:block absolute left-0 w-48 h-48 bg-cover ${useOnScreen(rocket, "30%") && "obj"}`}
          style={{backgroundImage: `url('${Rocket}')` }}
        />
       
       
      </div>
    </div>
  );
};

export default Process;
