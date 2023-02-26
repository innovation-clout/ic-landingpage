import LogoBlank from "../../images/logo-text.svg";
import PartnersPopup from "./PartnersPopup";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isComming, setIsComming] = useState(false);
  return (
    <header
      className="fixed md:sticky md:bg-gradient-to-r from-purple to-aqua top-0 md:flex flex-col bg-cover h-10 w-10 md:h-20 md:w-auto "
      style={{ zIndex: 2 }}
    >


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
              ambassadors
            </div>
            <a className="" href="/mentors">
              mentors
            </a>
          </div>
        </div>

        <div className="flex flex-row font-bold text-center gap-3">
          <div className=" flex flex-row bg-white text-aqua font-bold text-xs lg:text-base p-2 rounded-full md:px-3 lg:p-0  lg:px-0 lg:h-10 lg:w-40 text-center">
            <a
              href="https://anchor.fm/clint953"
              target={"_blank"}
              rel="noreferrer"
              className="w-full self-center text-center"
            >
              podcast
            </a>
          </div>
          <div className="flex flex-row items-center justify-content-center border-white border-2 text-white text-xs p-2 md:px-3 lg:p-0 lg:text-base font-bold rounded-full lg:h-10 lg:w-40 text-center">
            <a href="/resources" className="w-full self-center text-center">
              resources
            </a>
          </div>
        </div>
      </div>
      <div className={`${isComming && "w-screen h-screen inset-0 z-100 bg-black bg-opacity-70 justify-start items-center " }  flex md:hidden `} onClick={() => setIsComming(!isComming)}>
        <Sidebar setNav={setIsComming} OpenNav={isComming} setIsOpen={setIsOpen} />
      </div>

      <PartnersPopup isOpen={isOpen} setisOpen={setIsOpen} />
    </header>
  );
};

export default Header;
