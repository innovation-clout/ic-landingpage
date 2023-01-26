import PurpleLogo from "../../images/logo-purple-text.svg";
import Logo from "../../images/logo.svg";
import Instagram from "../../images/social_media/instagram.svg";
import Twitter from "../../images/social_media/twitter.svg";
import Linkedin from "../../images/social_media/linkedin.svg";
import Discord from "../../images/social_media/discord.svg";
import PartnershipsFooter from "./PartnershipsFooter";
import CommingSoonPopup from "./CommingSoonPopup";
import { useState } from "react";

import { Link } from "react-scroll";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const SocialIcon = ({ link, Icon }) => {
    return (
      <a
        href={link}
        className="bg-contain bg-no-repeat h-6 w-6 md:h-8 md:w-8 text-white"
        style={{
          backgroundImage: `url('${Icon}')`,
        }}
      >{" "}</a>
    );
  };
  return (
    <footer className="flex flex-col w-screen bg-cover bg-no-repeat justify-between items-center">
      <div className="flex flex-row w-screen justify-between text-center items-center px-16 text-sm text-lilac font-bold">
        <div className="flex flex-row gap-32 w-1/3 justify-content-center items-center justify-center invisible lg:visible">
          <Link
            to="partners"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Partnerships
          </Link>
          <a className="" href="/discover">
            Discord
          </a>
          <Link to="faq" spy={true} smooth={true} offset={-70} duration={500}>
            FAQ
          </Link>
        </div>

        <Link
          className="bg-contain bg-no-repeat h-10 w-36 md:mb-2 transition duration-500 ease-in-out transform hover:scale-105"
          style={{
            backgroundImage: `url('${PurpleLogo}')`,
          }}
          to="join"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        />

        <div className="flex flex-row gap-32 w-1/3 justify-content-center items-center justify-center invisible lg:visible">
          <div className="" onClick={() => setIsOpen(true)}>
            Playbooks
          </div>
          <a
            target="_blank"
            rel="norefferer"
            href="https://anchor.fm/clint953"
          >
            Podcast
          </a>
          <a className="" href="/discover">
            About
          </a>
        </div>
      </div>

      <div className="block w-full flex flex-row justify-between px-2 md:px-10 lg:hidden text-xs md:text-base py-2 text-lilac font-semibold">
        <Link
          to="partners"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Partnerships
        </Link>
        <a className="" href="/discover">
          Discord
        </a>
        <Link to="faq" spy={true} smooth={true} offset={-70} duration={500}>
          FAQ
        </Link>

        <div className="" onClick={() => setIsOpen(true)}>
          Playbooks
        </div>
        <a
          className=""
          href="https://anchor.fm/clint953"
          target="_blank"
          rel="norefferer"
        >
          Podcast
        </a>
        <a className="" href="/discover">
          About
        </a>
      </div>

      <div className="h-1 w-11/12 bg-gradient-to-r from-purple to-aqua rounded-md" />
      <div className="flex flex-col gap-4 pb-5 md:px-0 md:py-0 md:my-10">
        <div className="flex flex-row h-64 lg:h-72 w-screen items-start justify-between px-5 lg:px-28 mt-10 md:mt-0 md:my-10">
          <div className="flex flex-col items-center justify-content-center items-center md:gap-3">
            <div
              className="bg-contain bg-no-repeat h-36 w-28 md:h-48 md:w-40 mb-2 transition duration-500 ease-in-out transform hover:scale-105"
              style={{
                backgroundImage: `url('${Logo}')`,
              }}
            />
            <h2 className="text-lilac text-sm md:text-lg tracking-wider">
              Still have questions?
            </h2>
            <a
              href="mailto:jointorpedo@gmail.com"
              className="uppercase bg-gradient-to-r from-purple to-aqua px-4 md:px-7 tracking-wider text-sm text-center py-3 rounded-full text-white font-bold "
            >
              send a message
            </a>
          </div>

          <div className="hidden lg:flex h-full flex flex-col items-center justify-end">
            <PartnershipsFooter />
          </div>

          <div className="flex flex-col gap-5 md:gap-20">
            <div className="flex flex-col gap-2 md:gap-5">
              <h2 className="uppercase text-lilac font-bold text-sm md:text-base">
                connect with us
              </h2>
              <div className="flex flex-row gap-3">
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Discord} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="uppercase text-lilac font-bold text-sm md:text-base">
                company
              </h2>
              <div className="flex flex-col gap-2 font-light tracking-wider text-xs md:text-base">
                <a href="/discover" classname="hover:text-lilac">
                  about
                </a>

                <Link
                  classname="hover:text-lilac"
                  to="partners"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  partners
                </Link>
                <Link
                  classname="hover:text-lilac"
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  faq
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden h-full flex flex-col items-center justify-end">
            <PartnershipsFooter />
          </div>
      </div>

      <CommingSoonPopup isOpen={isOpen} setisOpen={setIsOpen} />
    </footer>
  );
};

export default Footer;
