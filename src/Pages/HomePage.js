import Banner from "../images/banner.svg";
import MobileBanner from "../images/mobile-banner.svg"
import PartnerShips from "../components/homepage-components/partnerships";
import CallToAction from "../components/homepage-components/callToAction";
import MobileCallToAction from "../components/homepage-components/mobileCallToAction";
import JoinCommunity from "../components/homepage-components/joinCommunity";
import Process from "../components/homepage-components/Process";
import Astro from "../images/astronaut.svg"
import AstroMobile from "../images/mobile-astro.svg"
import DoubleArrow from "../images/double-arrow.svg"
import JoinCommunityPopup from "../components/homepage-components/joinCommunityPopup";

import "../components/homepage-components/homepage_css/homepage.css"
import { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex flex-col w-full h-full bg-navy" id="join">
      <div
        className="hidden w-full h-screen bg-cover bg-no-repeat md:flex flex-col lg:flex-row py-20 px-10 lg:px-20"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <div className="flex flex-col w-full lg:w-2/3 gap-4 ">
          <h2 className="text-4xl text-center md:text-left md:text-5xl lg:text-7xl font-bold text-white">
            The career advisor you’ve been wishing for
          </h2>
          <div className="flex flex-col w-3/5 py-8 md:py-10 md:gap-5">
            <h2 className="text-xl lg:text-3xl opacity-60 text-white font-extrabold uppercase z-0 tracking-wider">
              accelerate your success
            </h2>
            <JoinCommunity />
          </div>
        </div>

        <div className="floating absolute bg-cover w-96 h-96 right-0" style={{ backgroundImage: `url('${Astro}')` }}/>
      </div>

      <div className="flex flex-col md:hidden bg-cover h-screen w-full"   style={{ backgroundImage: `url('${MobileBanner}')` }}>
      <div className="floating absolute bg-cover w-72 h-72 right-28 top-10" style={{ backgroundImage: `url('${AstroMobile}')` }}/>
      <div className="flex flex-col gap-8">
      <h2 className="text-4xl text-center tracking-wider font-bold text-white mt-64 mx-10">
        Let the opportunities come to you. 
          </h2>
          <div className="bg-lilac h-16 mx-20 rounded-xl flex flex-row justify-center items-center" onClick={() => setIsOpen(true)}>
            <h2 className="uppercase text-white font-extrabold text-2xl">join now</h2>
            <div className="bg-cover w-12 h-12" style={{ backgroundImage: `url('${DoubleArrow}')` }} />
          </div>
          
            <JoinCommunityPopup isOpen={isOpen} setisOpen={setIsOpen}/>
      </div>
       
      </div>

      <Process />

      <PartnerShips />

      <div className="hidden md:flex">
      <CallToAction />
      </div>

      <div className="flex md:hidden mb-40">
      <MobileCallToAction />
      </div>


    </div>
  );
}

export default HomePage;
