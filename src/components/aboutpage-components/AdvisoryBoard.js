import ADVISORS from "./Advisors";
import Linkedin from "../../images/social_media/linkedin-white.svg";
import MoreInfo from "../../images/icons/info-icon.svg";
import CustomCarousel from "../main_utils/CustomCarousel";
import carouselBreakpoints from "../main_utils/CarouselBreakpoints"

import React, { useState } from "react";

const AdvisoryBoard = () => {
  const AdvisorItem = ({ image, plug, bio, name }) => {
    const [isName, setName] = useState("none");

    return (
      <div className="flex flex-wrap justify-center">
        <div className="w-5/6  relative">
          <img src={image} alt="..." />

          {name && (
            <div className="flex flex-col w-full absolute -bottom-1 px-1 md:px-4">
              <a
                className="bg-contain bg-no-repeat w-3 h-3 md:w-6 md:h-6 text-white"
                style={{
                  backgroundImage: `url('${Linkedin}')`,
                }}
                href={plug}
                target="_blank"
                rel={"noreferrer"}
              >
                .
              </a>
              <div className="flex flex-row w-full justify-between items-center md:items-start text-white h-10 lg:h-[3.5rem]">
                <div className="text-xs flex items-center h-full lg:text-lg font-extrabold  tracking-wider ">
                  <h2>{name}</h2>
                </div>
                <div

                 
                  className=" lg:hover:bg-magenta rounded-md flex flex-col items-center justify-center h-full lg:mb-"
                >
                  <div
                    className="bg-contain bg-no-repeat w-4 h-4 md:h-5 md:w-5 lg:w-10 lg:h-10"
                    style={{
                      backgroundImage: `url('${MoreInfo}')`,
                    }}
                    onMouseEnter={() => setName(name)}
                  onMouseLeave={() => setName(null)}
                    onClick={() =>
                    isName === "none" ? setName(name) : setName("none")
                  }
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={`${
            (isName === name && "visible") || "invisible"
          } w-full h-32 bg-magenta z-10 text-truncate text-xs md:text-base text-center tracking-wider px-1 py-1 text-white font-light shadow-xl `}
        >
          {bio}
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen px-10 md:px-20 relative">

    <div className="hidden lg:block">
    <CustomCarousel
        breakpoints={carouselBreakpoints(4, 4, 3, 2)}
        length={"w-full px-10"}
        position={{right: "0rem", top: "10rem"}}
      >
      {ADVISORS.map((advisor) => <AdvisorItem
          image={advisor.image}
          name={advisor.name}
          plug={advisor.plug}
          bio={advisor.bio}
        />)}
        
      </CustomCarousel>
    </div>
    <div className="hidden md:block lg:hidden">
    <CustomCarousel
        breakpoints={carouselBreakpoints(4, 4, 3, 2)}
        length={"w-full px-10"}
        position={{right: "0rem", top: "6rem"}}
      >
      {ADVISORS.map((advisor) => <AdvisorItem
          image={advisor.image}
          name={advisor.name}
          plug={advisor.plug}
          bio={advisor.bio}
        />)}
        
      </CustomCarousel>
    </div>
    <div className="block md:hidden">
    <CustomCarousel
        breakpoints={carouselBreakpoints(4, 4, 3, 2)}
        length={"w-full"}
        position={{right: "0rem", top: "4rem"}}
      >
      {ADVISORS.map((advisor) => <AdvisorItem
          image={advisor.image}
          name={advisor.name}
          plug={advisor.plug}
          bio={advisor.bio}
        />)}
        
      </CustomCarousel>
    </div>
     

    </div>
  );
};

export default AdvisoryBoard;
