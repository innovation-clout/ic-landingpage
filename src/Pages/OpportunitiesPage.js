import Banner from "../images/banner.svg";
import MobileBanner from "../images/mobile-banner-2.svg"
import "../components/main_utils/utility_css/fadein.css"
const OppertunitiesPage = () => {
  return (
    <div className="w-screen h-full">
      <div
        className="hidden w-screen h-screen bg-cover bg-no-repeat md:flex flex-col items-center justify-center pb-64 px-20 gap-10"
        style={{ backgroundImage: `url('${Banner}')` }}
      >
        <div className=" md:px-0 md:h-1/2 flex text-white flex-col justify-center items-center text-center gap-10 md:mb-40 lg:mb-0">
          <div className="uppercase tracking-wider border border-white text-xs px-2  text-center md:text-lg py-1 md:px-4 font-light h-10 rounded-full lineUp ">
          ENDLESS POSSIBILITIES WITHIN YOUR REACH
          </div>

          <h2 className="text-white font-black text-4xl md:text-7xl lg:text-9xl uppercase lineUp ">
            opportunities
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:hidden bg-cover h-screen w-full justify-center "   style={{ backgroundImage: `url('${MobileBanner}')` }}>
      <div className=" md:px-0 md:h-1/2 flex text-white flex-col justify-center items-center text-center gap-10 mb-96">
          <div className="uppercase tracking-wider border border-white text-xs px-2 text-center justify-center md:text-lg flex px-4 font-light py-2 rounded-full">
          <h2>ENDLESS POSSIBILITIES WITHIN YOUR REACH</h2>
          </div>

          <h2 className="text-white font-black text-4xl md:text-7xl lg:text-9xl uppercase ">
            opportunities
          </h2>
        </div>
       
      </div>
      <div className="uppercase text-3xl text-lilac font-black pb-40 md:py-40 w-full flex justify-center">
        comming soon
      </div>
    </div>
  );
};

export default OppertunitiesPage;
