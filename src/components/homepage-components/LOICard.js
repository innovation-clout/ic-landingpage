import "../homepage-components/homepage_css/shine.css";
import "../homepage-components/homepage_css/homepage.css";
import LOI from "../../images/loi.svg";
import Planet2 from "../../images/planets/planet2.svg";
import Planet3 from "../../images/planets/planet3.svg";
import Tilt from "react-parallax-tilt";

const LOICard = () => {
  return (
    <div className="w-full flex justify-center p-20 relative overflow-x-clip">
      <Tilt>
        <div className="glass text-white flex flex-col gap-2 items-start justify-center font-bold transition duration-500 ease-in-out transform hover:scale-105 shadow-lg">
          <p className="text-sm font-light">Backed by</p>
          <a
            href={"https://www.theleagueofinnovators.org/"}
            rel={"noreferrer"}
            target={"_blank"}
            className={`bg-cover w-40 h-12 `}
            style={{ backgroundImage: `url('${LOI}')` }}
          />
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
        className="bg-cover w-[40rem] h-[40rem] absolute top-10 -right-28 opacity-40"
        style={{ backgroundImage: `url('${Planet3}')` }}
      />
      <div
        className="bg-cover w-[27rem] h-64 absolute -top-10 left-10 opacity-50"
        style={{ backgroundImage: `url('${Planet2}')` }}
      />
    </div>
  );
};

export default LOICard;
