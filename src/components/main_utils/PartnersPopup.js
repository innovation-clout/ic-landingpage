import { useRef, useState, useEffect } from "react";
import Linkedin from "../../images/social_media/linkedin-white.svg";
import Instagram from "../../images/social_media/instagram-white.svg";
import Twitter from "../../images/social_media/twitter-white.svg";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";

const PartnersPopup = ({ isOpen, setisOpen }) => {
  const form = useRef();
  const [isSubmitted, setSubmitted] = useState(false);
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    isSubmitted && setIsAlertVisible(true);

    setTimeout(() => setIsAlertVisible(false), 8000);
  }, [isSubmitted]);

  const resize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [dimension]);

  const SocialIcon = ({ link, Icon }) => {
    return (
      <a
        href={link}
        className="bg-contain bg-no-repeat h-4 w-4 md:h-6 md:w-6 text-white transition duration-500 ease-in-out transform hover:scale-150"
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

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm(
        "service_we3mq79",
        "template_8dzakn1",
        form.current,
        "tldDhwv1XvPcd-kkh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return isOpen ? (
    <div
      className={`${
        (isOpen && "block") || "hidden"
      } fixed w-screen h-screen animated fadeIn faster flex justify-center items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <div className="popup md:w-1/2 lg:w-2/5 h-96 bg-gradient-to-r from-indigo to-purple rounded-xl flex flex-col justify-center text-center items-center relative mx-10 md:mx-0 lg:lg-mx-0">
        <div
          onClick={() => setisOpen(false)}
          className="w-full flex flex-row absolute top-0 left-2 justify-start px-4 text-white text-xl font-light pt-4"
        >
          x
        </div>
        {!isSubmitted ? (
          <div className="w-full">
            <h2 className="uppercase font-extrabold text-2xl text-white">
              partner with us
            </h2>
            <h2 className="fonst-xl font-light tracking-wider mb-3 text-white">
              Interested in becomming an amabassador?
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5 px-10 w-full auto-black"
            >
              <div className="flex flex-col gap-5">
                <div className="bg-white w-full h-10 border-magenta border-2 relative rounded-md">
                  <h2 className="uppercase text-xs bg-magenta text-white font-semibold text-center px-1 rounded absolute left-1 -top-3">
                    email
                  </h2>
                  <input
                    type="email"
                    name="email"
                    className="w-full h-full px-2 py-2 text-black"
                  />
                </div>

                <div className="bg-white w-full h-36 border-magenta border-2 relative rounded-md">
                  <h2 className="uppercase text-xs bg-magenta text-white font-semibold text-center px-1 rounded absolute left-1 -top-3">
                    more about you
                  </h2>
                  <textarea
                    name="message"
                    className="h-full w-full rounded-md px-2 py-2 text-black"
                  />
                </div>
              </div>

              <input
                type={"submit"}
                value="SEND"
                className="font-extrabold tracking-wider bg-gradient-to-r from-purple to-aqua text-white w-full rounded-lg py-2"
              />
            </form>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full my-20 px-10 gap-10">
            <div>
              <h2 className="uppercase font-extrabold text-2xl text-white">
                Thank you for Applying!
              </h2>
              <h2 className="fonst-xl font-light tracking-wider mb-3 text-white">
                We'll reach out to you soon :)
              </h2>
            </div>

            <div className="w-full flex flex-row items-center justify-center justify-content-center gap-3 bg-white bg-opacity-40 rounded-md py-3 px-4 ">
              <h2 className="uppercase text-white text-xs md:text-xl lg:text-3xl font-bold tracking-wider">
                connect with us
              </h2>
              <div className="flex flex-row gap-3 items-center">
                <SocialIcon
                  Icon={Instagram}
                  link={"https://www.instagram.com/torpedo.world/"}
                />

                <div className="flex items-center justify-center">
                  <SocialIcon
                    Icon={Twitter}
                    link={"https://twitter.com/ExecTorpedo"}
                  />
                </div>

                <SocialIcon
                  Icon={Linkedin}
                  link={"https://www.linkedin.com/company/jointorpedo/about/"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`absolute ${
          (isAlertVisible && "block") || "hidden"
        } fixed top-0 left-0`}
      >
        <Confetti
          height={dimension.height}
          width={dimension.width}
      
        />
      </div>
    </div>
  ) : null;
};

export default PartnersPopup;
