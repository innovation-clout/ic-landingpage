import Christopher from "../../images/advisors/christopher-advisor.png";
import Eric from "../../images/advisors/eric-advisor.png";
import Steven from "../../images/advisors/steven-advisor.png";
import Damiano from "../../images/advisors/damiano-advisor.png";
import Zach from "../../images/advisors/zach-advisor.png";
import Adam from "../../images/advisors/adam-advisor.png";
import Pranav from "../../images/advisors/pranav-advisor.png";
import TBD from "../../images/advisors/tbd-advisor.png";
import Linkedin from "../../images/social_media/linkedin-white.svg";
import MoreInfo from "../../images/icons/info-icon.svg";

import React, { useState } from "react";

const AdvisoryBoard = () => {
  const AdvisorItem = ({ image, plug, bio, name }) => {
    const [isName, setName] = useState("none");

    return (
      <div className="flex flex-wrap justify-center">
        <a
          className="w-full relative"
          href={plug}
          target="_blank"
          rel={"noreferrer"}
        >
          <img src={image} alt="..." />

          {name && (
            <div className="flex flex-col w-full absolute -bottom-1 px-4">
              <a
                className="bg-contain bg-no-repeat w-6 h-6 text-white"
                style={{
                  backgroundImage: `url('${Linkedin}')`,
                }}
                href={plug}
                target="_blank"
                rel={"noreferrer"}
              >.</a>
              <div className="flex flex-row w-full justify-between items-start text-white">
                <h2 className="text-xl font-extrabold tracking wider pt-2">
                  {name}
                </h2>
                <div
                  onMouseEnter={() => setName(name)}
                  onMouseLeave={() => setName(null)}
                  onClick={() => isName? setName(name) : setName(null)}
                  className=" hover:bg-magenta rounded-md h-12"
                >
                  <div
                    className="bg-contain bg-no-repeat w-10 h-10"
                    style={{
                      backgroundImage: `url('${MoreInfo}')`,
                    }} 
                  />
                </div>
              </div>
            </div>
          )}
        </a>

        <div
          className={`${
           (isName === name && "visible") || "invisible"
          } w-full h-32 bg-magenta z-10 text-truncate text-xs tracking-wider px-1 py-1 text-white font-light shadow-xl `}
        >
          {bio}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-4 my-10 gap-10 justify-center w-full items-center content-center px-10 md:px-20">
      <AdvisorItem
        image={Zach}
        name="Zach Laberge"
        plug={"https://www.linkedin.com/in/zach-laberge-3440621b3/"}
        bio="The young unicorn who started selling watches from Alibaba went on to build a start-up called Frenter at 14 y/o, a company focused on powering the rental space. At 17 y/o, he has raised well over $2,000,000 at a 8 figure evaluation."
      />
      <AdvisorItem
        image={Eric}
        name="Eric Zhu"
        plug={"https://www.linkedin.com/in/ericzhu105/"}
        bio="Eric is a 15 y/o founder and CEO of a start-up called Aviato where they make it easier to pitch to funds than ever before. They have raised $1,000,000 for their seed round of investment and he is also as a General Partner for a venture capital firm called Bachmanity Capital."
      />
      <AdvisorItem
        image={Damiano}
        name="Damiano Quinque"
        plug={"https://www.linkedin.com/in/damiano-quinque-21b03621a/"}
        bio="A young prodigy who co-founded a start-up called Grex, a global community of high-performing students interested in finance, consulting, and tech. They have a wide range of opportunities from big financial firms like Goldman Sachs, JP Morgan, KPMG, McKinsey and more."
      />
      <AdvisorItem
        image={Adam}
        name="Adam Majmudar"
        plug={"https://www.linkedin.com/in/adam-majmudar-24b596194/"}
        bio="An ex professional squash player and a founding engineer at thirdweb, a Web 3.0 company that makes it easier for developers to build Web 3.0 apps. They have raised well over $24,000,000 at an astounding $160,000,000 evaluation. "
      />
      <AdvisorItem
        image={Steven}
        name="Steven Ritchie"
        plug={"https://www.linkedin.com/in/ritchieste/"}
        bio="Steven has led client projects worldwide, such as launching a Neo-bank in Dubai and a cryptocurrency exchange in Canada. After some time in the Cayman Islands, he is now a director at The Knowledge Society, a human accelerator for ambitious teenagers."
      />
      <AdvisorItem
        image={Christopher}
        name="Christopher Alonge"
        plug={"https://thinkglobalschool.org/"}
        bio="Christopher is an Educator at THINK Global School, the world’s first and only traveling high school. He has 3 years of experience in mentoring and leading projects "
      />
      <AdvisorItem
        image={Pranav}
        name="Pranav Menon"
        plug={"https://www.linkedin.com/in/menonpranav/"}
        bio="Pranav built his own A.I. consultancy firm where he helped universities leverage IBM Watson to support prospective students. He is now a director at The Knowledge Society, a human accelerator for ambitious teenagers."
      />
      <AdvisorItem image={TBD} />
    </div>
  );
};

export default AdvisoryBoard;
