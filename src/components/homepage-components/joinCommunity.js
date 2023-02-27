import { useRef, useState, useEffect } from "react";
import Instagram from "../../images/social_media/instagram-white.svg";
import Twitter from "../../images/social_media/twitter-white.svg";
import Linkedin from "../../images/social_media/linkedin-white.svg";
import axios from "axios";
import Confetti from "react-confetti";

const JoinCommunity = () => {
  const formRef = useRef(null);
  const [isSubmitted, setisSubmitted] = useState(false);

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

  const submitHandler = (e) => {
    e.preventDefault();
    setisSubmitted(true);

    axios
      .post(
        "https://sheet.best/api/sheets/85974a40-e48d-4f1f-9930-1b4cb8f827d8",
        new FormData(formRef.current)
      )
      .then((response) => {
        console.log(response);
      });
  };

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

  return (
    (isSubmitted && (
      <div className="w-full flex flex-row items-center justify-center justify-content-center gap-3 bg-white bg-opacity-40 rounded-md py-3">
        <h2 className="uppercase text-xs md:text-xl lg:text-3xl font-bold tracking-wider">
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
        <div
          className={`absolute ${
            (isAlertVisible && "block") || "hidden"
          } fixed top-0 left-0`}
        >
          <Confetti height={dimension.height} width={dimension.width} />
        </div>
      </div>
    )) || (
      <form
        method="post"
        ref={formRef}
        name="call-to-action"
        className="w-5/6 lg:w-full border-4 border-white rounded-xl flex flex-row py-1 items-center items-stretch justify-between px-1 auto"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL"
          className="w-2/3 lg:w-auto rounded-full border-0 px-4 py-0 placeholder:text-sm placeholder:lg:text-xl placeholder-white placeholder:font-extrabold  placeholder:opacity-75 placeholder:tracking-wide text-white font-bold tracking-wider md:mx-2 md:my-5"
        />

        <div className="bg-white w-20 md:w-auto py-3 md:py-0 md:text-sm lg:text-base rounded-xl px-5 flex flex-col justify-center text-center">
          <input
            type="submit"
            value="JOIN TORPEDO"
            name="join"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo to-purple"
          />
        </div>
      </form>
    )
  );
};

export default JoinCommunity;
