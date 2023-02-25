import LogoBlank from "../../images/logo-purple-text.svg";
import Mic from "../../images/mic.svg";
import Toggle from "../../images/toggle.svg";

const Sidebar = ({ setNav, OpenNav, setIsOpen }) => {

  return (
    <>
      {OpenNav ? (
        <></>
      ) : (
        <div
          className={`h-10 w-10 bg-cover fixed top-1 left-3`}
          style={{ backgroundImage: `url('${Toggle}')` }}
          onClick={() => setNav(!OpenNav)}
        />
      )}

      <div
        className={`top-0 left-0 w-1/2 bg-white flex fixed h-full z-40 pt-6 ease-in-out duration-300 ${
          OpenNav ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
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
    </>
  );
};

export default Sidebar;
