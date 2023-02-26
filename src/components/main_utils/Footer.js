import Instagram from "../../images/social_media/instagram.svg";
import Twitter from "../../images/social_media/twitter.svg";
import Linkedin from "../../images/social_media/linkedin.svg";
import Moon from "../../images/planets/moon.svg";
import Rocket from "../../images/rocket-main.svg";
import Text from "../../images/launch-career.svg";
import Text2 from "../../images/launch-career-purple.svg";
import "./utility_css/footer.css";
import FooterBg from "../../images/footer-bg.svg";
import { Link } from "react-scroll";

const Footer = () => {
  const SocialIcon = ({ link, Icon }) => {
    return (
      <a
        href={link}
        className="bg-contain bg-no-repeat h-6 w-6 md:h-8 md:w-8 text-white"
        target={"_blank"}
        rel="noreferrer"
        style={{
          backgroundImage: `url('${Icon}')`,
        }}
      >
        {" "}
      </a>
    );
  };

  const HaveQuestion = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-center tracking-wider md:text-2xl font-semibold">
          Have Questions?
        </h2>

        <a
          href="mailto:jointorpedo@gmail.com"
          class="bg-gradient-to-r from-purple to-aqua px-7 tracking-wider text-sm md:text-lg text-center py-3 rounded-md text-white"
        >
          send a message
        </a>
      </div>
    );
  };

  const Links = () => {
    return (
      <div className="w-full flex flex-row items-center justify-center gap-2 font-semibold py-2x">
        <a href="/discover">about</a>
        <div className="w-1 h-1 bg-aqua rounded-full" />
        <Link
          to="partners"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          partnerships
        </Link>
        <div className="w-1 h-1 bg-aqua rounded-full" />
        <a href="https://anchor.fm/clint953" target={"_blank"} rel="noreferrer">podcast</a>
      </div>
    );
  };
  return (
    <footer
      className={`${
        (window.location.pathname === "/resources") ||
        (window.location.pathname === "/mentors" && "bg-white text-purple") ||
        "bg-navy text-white"
      } flex flex-col w-full justify-between items-center`}
    >
      <div className="flex flex-row w-full justify-center text-center items-center px-16 text-sm text-lilac font-bold">
        <div className="flex flex-row gap-5 items-center justify-center my-2">
          <SocialIcon Icon={Instagram} link={"https://www.instagram.com/torpedo.world/"} />

          <div className="flex items-center justify-center mt-2">
            <SocialIcon Icon={Twitter} link={"https://twitter.com/ExecTorpedo"} />
          </div>

          <SocialIcon Icon={Linkedin} link={"https://www.linkedin.com/company/jointorpedo/about/"}/>
        </div>
      </div>

      <div className="h-1 w-11/12 bg-gradient-to-r from-purple to-aqua rounded-md" />
      <div className="flex flex-col gap-4 md:px-0 md:py-0 w-screen">
        <div className="hidden md:flex flex-col h-72 w-full items-center relative overflow-clip px-20">
          <Links />
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col items-center text-center justify-center gap-3 pb-10">
              <div
                className="h-48 w-48 bg-cover"
                style={{ backgroundImage: `url('${Rocket}')` }}
              />
              <h2
                className="uppercase text-xl font-bold"
                style={{ letterSpacing: "1rem" }}
              >
                torpedo
              </h2>
            </div>

            <div
              className="hidden lg:block bg-cover bg-no-repeat rotate absolute lg:left-[17rem] lg:-bottom-[20rem] xl:-bottom-[20rem] xl:left-[30rem]"
              style={{
                backgroundImage: `url('${Moon}')`,
                width: "30rem",
                height: "30rem",
              }}
            />

            <div className="flex flex-col items-center justify-center gap-3 mr-3 mb-10">
              <div
                className="bg-cover w-64 h-10 bg-no-repeat hidden lg:block "
                style={{
                  backgroundImage: `url('${(
                    ((window.location.pathname === "/resources" ||
                      window.location.pathname === "/mentors")) &&
                      Text2) ||
                    Text
                  }')`,
                }}
              />
            </div>

            <HaveQuestion />
          </div>
        </div>

        <div
          className="flex flex-col md:hidden bg-contain bg-no-repeat flex-row h-48 w-full overflow-clip"
          style={{
            backgroundImage: `url('${FooterBg}')`,
          }}
        >
          <Links />
          <div className="flex flex-row">
            <div
              className="h-40 w-40 bg-cover"
              style={{ backgroundImage: `url('${Rocket}')` }}
            />
            <HaveQuestion />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
