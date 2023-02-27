import "../homepage-components/homepage_css/shine.css";
import "../homepage-components/homepage_css/homepage.css";
import LOI from "../../images/loi.svg";
import Planet2 from "../../images/planets/planet2.svg";
import Planet3 from "../../images/planets/planet3.svg";
import Tilt from "react-parallax-tilt";

const LOICard = () => {
  return (
    <div className="w-full flex justify-center p-20 relative overflow-x-clip mb-20 md:mb-0 md:p-0 lg:p-20">
      <Tilt>
        <div className="glass -top-56 -left-20 md:absolute lg:static text-white flex flex-col gap-2 items-start justify-center font-bold transition duration-500 ease-in-out transform hover:scale-105 shadow-lg">
          <p className="text-sm font-light">Backed by</p>
          <a
            href={"https://www.theleagueofinnovators.org/"}
            rel={"noreferrer"}
            target={"_blank"}
            className={`bg-cover w-40 h-12 text-xs `}
            style={{ backgroundImage: `url('${LOI}')` }}
          >.</a>
          <a
            href={"https://www.1517fund.com/"}
            rel={"noreferrer"}
            target={"_blank"}
            className="font-extrabold text-xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-aqua"
          >
            1517 fund
          </a>
        </div>
      </Tilt>

      <div
        className="bg-cover w-[40rem] h-[40rem] absolute lg:top-2 lg:-right-28 opacity-40 hidden lg:flex"
        style={{ backgroundImage: `url('${Planet3}')` }}
      />
      <div
        className="bg-cover w-[27rem] h-64 absolute lg:-top-10 lg:left-10 opacity-50 hidden lg:flex"
        style={{ backgroundImage: `url('${Planet2}')` }}
      />
    </div>
  );
};

export default LOICard;
