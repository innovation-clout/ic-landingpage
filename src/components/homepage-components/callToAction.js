import CallToActionBanner from "../../images/call-to-action.svg";
import { Link} from "react-scroll";
import "./homepage_css/homepage.css";

const CallToAction = () => {
  return (
    <div
      className="bg-cover bg-no-repeat w-full flex my-40"
      style={{
        backgroundImage: `url('${CallToActionBanner}')`,
        height: "35rem",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-aqua font-black text-center ">
          Think Your Idea Has Potential?
        </h2>
        <h2 className="self-center tracking-wider font-light md:text-2xl lg:w-3/4 text-center px-20">
          Join the next generation of innovators. Find opportunities to launch
          your story, accelerate your skills, and build incredible
          relationships.
        </h2>

        <div className="bg-gradient-to-r from-purple to-aqua justify-content-center text-lg font-bold tracking-wider text-center rounded-lg text-white py-3 background-animate h-10 w-48 px-10 flex flex-row items-center text-center">
          <Link
            className="w-full uppercase"
            to="join"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            join now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
