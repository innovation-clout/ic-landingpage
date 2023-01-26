import LogoBlank from "../../images/logo-text.svg";
import PartnersPopup from "./PartnersPopup";
import CommingSoonPopup from "./CommingSoonPopup";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComming, setIsComming] = useState(false);

  return (
    <header
      className="sticky bg-purple md:bg-gradient-to-r from-purple to-aqua top-0 flex flex-col w-full h-20 bg-cover bg-no-repeat"
      style={{ zIndex: 2 }}
    >
      <div className="flex flex-row items-center gap-3 px-4 lg:px-20 py-3 justify-between items-center text-center font-semibold text-xm text-white">
        <div className="flex flex-row md:gap-5 lg:gap-20 font-semibold text-xs items-center text-center ">
          <a
            className="bg-contain bg-no-repeat h-10 w-36 mt-5"
            style={{
              backgroundImage: `url('${LogoBlank}')`,
            }}
            href="/"
          >{" "}</a>
          <div className="hidden md:flex flex-row gap-5 tracking-wider text-xs">
            <a className="" href="/discover">
              Discover
            </a>
            <a className="" href="/opportunities">
              Opportunities
            </a>
            <div className="" onClick={() => setIsOpen(true)}>
              Partner with us
            </div>
          </div>
        </div>

        <div className="flex flex-row font-bold text-center gap-3">
          <div
            onClick={() => setIsComming(true)}
            className="flex flex-row items-center justify-content-center border-white border-2 text-white text-xs p-2  lg:p-0 md:text-base font-bold rounded-full lg:h-12 lg:w-40 text-center"
          >
            <h2 className="w-full self-center text-center">Playbooks</h2>
          </div>
          <div className=" flex flex-row bg-white text-aqua font-bold text-xs md:text-base p-2 lg:p-0 rounded-full lg:h-12 lg:w-40 text-center">
            <a
              href="https://anchor.fm/clint953"
              className="w-full self-center text-center"
            >
              Podcast
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-row bg-lilac text-xs gap-4 items-center justify-center text-white font-bold">
        <a className="" href="/discover">
          Discover
        </a>
        <a className="" href="/opportunities">
          Opportunities
        </a>
        <div className="" onClick={() => setIsOpen(true)}>
          Partner with us
        </div>
      </div>

      <PartnersPopup isOpen={isOpen} setisOpen={setIsOpen} />
      <CommingSoonPopup isOpen={isComming} setisOpen={setIsComming} />
    </header>
  );
};

export default Header;
