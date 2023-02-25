import LogoBlank from "../../images/logo-purple-text.svg";
import Mic from "../../images/mic.svg"

const Sidebar = ({ openNav, setNav, setIsOpen, i }) => {
  return openNav ? (
    <div
      className={` w-screen h-screen flex md:hidden justify-start items-center inset-0 z-100 bg-black bg-opacity-70  `}
    >
      <div className={`w-1/2 h-screen fixed bg-white flex flex-col text-center items-center transition duration-500 ease-in-out transform ease-in-out transition-all duration-300  duration-300 ${ openNav ? 'translate-x-0' : '-translate-x-full'}`}>
        <div
          onClick={() => setNav(false)}
          className="w-full flex flex-row justify-end px-4 text-black text-xl font-light pt-2"
        >
          x
        </div>
        <div className="flex flex-col h-full px-2 gap-10 tracking-wider text-black text-sm items-start">
          <a
            className="bg-contain bg-no-repeat h-10 w-36 mt-5"
            style={{
              backgroundImage: `url('${LogoBlank}')`,
            }}
            href="/"
          >
            {" "}
          </a>
          <div className="ml-3 flex flex-col items-start gap-8 h-full">
            <div className="flex flex-col gap-8 items-start">
              <a className="" href="/discover">
                Discover
              </a>
              <a className="" href="/opportunities">
                Opportunities
              </a>
              <div className="" onClick={() => setIsOpen(true)}>
              Ambassadors
              </div>
              <a className="" href="/mentors">
                Mentors
              </a>
              <a href="/resources" className="">
                Resources
              </a>
              <div className="w-full flex flex-row items-center gap-2">
              <a
                href="https://anchor.fm/clint953"
                target={'_blank'}
                rel={"noreferrer"}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple to-aqua"
              >
                Podcast
              </a>
              <div className="w-6 h-6 bg-contain bg-no-repeate" style={{backgroundImage: `url('${Mic}')`}} />
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Sidebar;
