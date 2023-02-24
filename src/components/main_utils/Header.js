import LogoBlank from "../../images/logo-text.svg";
import PartnersPopup from "./PartnersPopup";
import CommingSoonPopup from "./CommingSoonPopup";
import Toggle from "../../images/toggle.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isComming, setIsComming] = useState(false);
  return (
    <header
      className="fixed md:sticky md:bg-gradient-to-r from-purple to-aqua top-0 md:flex flex-col bg-cover h-10 w-10 md:h-20 md:w-auto "
      style={{ zIndex: 2}} >
      <div className={`h-10 w-10 bg-cover md:hidden ${!isComming && "flex" || "hidden"}`} style={{backgroundImage: `url('${Toggle}')` }} onClick={() => setIsComming(true)} />
      
      <div className="hidden md:flex flex-row items-center gap-3 px-4 lg:px-20 py-3 justify-between items-center text-center font-semibold text-xm text-white">
        <div className="flex flex-row md:gap-5 lg:gap-20 font-semibold text-xs items-center text-center ">
          <a
            className="bg-contain bg-no-repeat h-10 w-36 mt-5"
            style={{
              backgroundImage: `url('${LogoBlank}')`,
            }}
            href="/"
          >
            {" "}
          </a>
          <div className="hidden md:flex flex-row gap-5 tracking-wider text-xs">
            <a className="" href="/discover">
              discover
            </a>
            <a className="" href="/opportunities">
              opportunities
            </a>
            <div className="" onClick={() => setIsOpen(true)}>
              partnerships
            </div>
            <a className="" href="/mentors">
              mentors
            </a>
          </div>
        </div>

        <div className="flex flex-row font-bold text-center gap-3">
          <div className=" flex flex-row bg-white text-aqua font-bold text-xs md:text-base p-2 lg:p-0 rounded-full lg:h-10 lg:w-40 text-center">
            <a
              href="https://anchor.fm/clint953"
              className="w-full self-center text-center"
            >
              podcast
            </a>
          </div>
          <div className="flex flex-row items-center justify-content-center border-white border-2 text-white text-xs p-2  lg:p-0 md:text-base font-bold rounded-full lg:h-10 lg:w-40 text-center">
            <a href="/resources" className="w-full self-center text-center">
              resources
            </a>
          </div>
        </div>
      </div>

      <Sidebar openNav={isComming} setNav={setIsComming} setIsOpen={setIsOpen} />
      <PartnersPopup isOpen={isOpen} setisOpen={setIsOpen} />
    </header>
  );
};

export default Header;
