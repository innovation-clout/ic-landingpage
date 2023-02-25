import InfiniteLooper from "./InfiniteLooper";

import Aviato from "../../images/partnerships/aviato.png";
import TGS from "../../images/partnerships/tgs.png";
import TKS from "../../images/partnerships/tks.png";
import Villars from "../../images/partnerships/villars.png";
import ADP from "../../images/partnerships/adp.png";
import JA from "../../images/partnerships/ja.png"
import P100 from "../../images/partnerships/prospect-100.png"
import Frenter from "../../images/partnerships/frenter.png"
import BC from "../../images/partnerships/bc.png"

import "./homepage_css/looper-styles.css";

const PartnerShips = () => {
  const Partner = ({ image, link }) => {
    return (
      <div className="flex flex-wrap justify-center">
        <a className=" w-36 h-36 md:w-48 md:h-48" href={link} target="_blank" rel="noreferrer" >
          <img
            src={image}
            alt="..."
            className="transition rounded-full duration-500 ease-in-out transform hover:scale-105 shadow-lg"
          />
        </a>
      </div>
    );
  };

  return (
    <div id="partners" className="w-screen h-screen flex flex-col items-center justify-center ">
      <h2 className="uppercase text-lg  md:text-2xl tracking-wider font-bold text-center bg-gradient-to-r from-purple to-aqua rounded-lg text-white py-3 background-animate h-12 px-8 flex flex-row items-center text-center">
        our partners
      </h2>
      <InfiniteLooper speed="10" direction="right">
        <div className="flex items-center mx-2 w-full gap-4">
          <Partner image={Aviato} link="https://www.joinaviato.com/" />
          <Partner image={TGS} link="https://thinkglobalschool.org/" />
          <Partner image={ADP} link="https://app.adplist.org/" />
          <Partner image={Villars} link="https://villarsinstitute.org/" />
          <Partner image={TKS} link="https://www.tks.world/" />
          <Partner image={JA} link="https://www.jaworldwide.org/" />
          <Partner image={P100} link="https://www.prospect100.com/" />
          <Partner image={Frenter} link="https://www.frenter.com/" />
          <Partner image={BC} link="https://www.bachmanitycap.com/" />
        </div>
      </InfiniteLooper>
    </div>
  );
};

export default PartnerShips;
