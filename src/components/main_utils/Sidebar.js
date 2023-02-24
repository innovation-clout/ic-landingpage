import LogoBlank from "../../images/logo-purple-text.svg";

const Sidebar = ({ openNav, setNav, setIsOpen, i }) => {
  return openNav ? (
    <div
      className={`w-screen h-screen flex justify-start items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <div className="w-1/2 h-screen bg-white flex flex-col text-center items-center">
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
          <div className="ml-3 flex flex-col items-start gap-8 h-full justify-between">
          <div className="flex flex-col gap-8 items-start">
          <a className="" href="/discover">
              Discover
            </a>
            <a className="" href="/opportunities">
              Opportunities
            </a>
            <div className="" onClick={() => setIsOpen(true)}>
              Partnerships
            </div>
            <a className="" href="/mentors">
              Mentors
            </a>
          </div>
            
            <div className="flex flex-col gap-4 mb-4">
              <div className="bg-gradient-to-r from-purple to-aqua justify-content-center font-bold tracking-wider text-center rounded-lg text-white py-3 background-animate px-10 flex flex-row items-center text-center">
                <a
                  href="https://anchor.fm/clint953"
                  className="w-full self-center text-center"
                >
                  podcast
                </a>
              </div>

              <div className="border-aqua border-2 justify-content-center font-bold tracking-wider text-aqua text-center rounded-lg text-white py-3 background-animate px-8 flex flex-row items-center text-center">
                <a href="/resources" className="w-full self-center text-center">
                  resources
                </a>
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
