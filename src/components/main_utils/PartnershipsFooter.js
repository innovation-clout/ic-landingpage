import Aviato from "../../images/partnerships/aviato.png";
import TGS from "../../images/partnerships/tgs.png";
import TKS from "../../images/partnerships/tks.png";
import Villars from "../../images/partnerships/villars.png";
import ADP from "../../images/partnerships/adp.png";
import JA from "../../images/partnerships/ja.png";
import Grex from "../../images/partnerships/grex.jpeg";
import Frenter from "../../images/partnerships/frenter.png";

const PartnershipsFooter = () => {
  const MiniPartners = ({ image, link }) => {
    return (
      <div className="flex flex-wrap justify-center">
        <a className="w-8 h-8" href={link}>
          <img
            src={image}
            alt="..."
            className="transition rounded-xl duration-500 ease-in-out transform hover:scale-105 border-2 border-black  drop-shadow-2xl"
          />
        </a>
      </div>
    );
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-indigo [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] font-bold">© Partnerships</h2>
      <div className="flex flex-row gap-2">
        <MiniPartners image={Aviato} link="https://www.joinaviato.com/" />
        <MiniPartners image={TGS} link="https://thinkglobalschool.org/" />
        <MiniPartners image={ADP} link="https://app.adplist.org/" />
        <MiniPartners image={Villars} link="https://villarsinstitute.org/" />
        <MiniPartners image={TKS} link="https://www.tks.world/" />
        <MiniPartners image={JA} link="https://www.jaworldwide.org/" />
        <MiniPartners image={Grex} link="https://www.grex-careers.com/" />
        <MiniPartners image={Frenter} link="https://www.frenter.com/" />
      </div>
      <h2 className="text-indigo [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">Question & Prosper</h2>
    </div>
  );
};

export default PartnershipsFooter;
