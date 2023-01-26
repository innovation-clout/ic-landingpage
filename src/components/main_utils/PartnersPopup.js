import { useRef } from "react";

import emailjs from "@emailjs/browser";

const PartnersPopup = ({ isOpen, setisOpen }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current)

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
          setisOpen(false)
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
      <div className="popup w-1/2 lg:w-2/5 h-96 bg-gradient-to-r from-indigo to-purple rounded-xl flex flex-col justify-center text-center items-center">
        <div
          onClick={() => setisOpen(false)}
          className="w-full flex flex-row justify-start px-4 text-white text-xl font-light pt-4"
        >
          x
        </div>
        <h2 className="uppercase font-extrabold text-2xl text-white">
          partner with us
        </h2>
        <h2 className="fonst-xl font-light tracking-wider mb-3 text-white">
          Interested in expanding with us?
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 pb-10 px-10 w-full auto-black"
        >
          <div className="flex flex-col gap-5">
            <div className="bg-white w-full h-10 border-magenta border-2 relative rounded-md">
              <h2 className="uppercase text-xs bg-magenta text-white font-semibold text-center px-1 rounded absolute left-1 -top-3">
                email
              </h2>
              <input
                type="email"
                name="email"
                className="w-full h-full px-2 py-2"
              />
            </div>

            <div className="bg-white w-full h-36 border-magenta border-2 relative rounded-md">
              <h2 className="uppercase text-xs bg-magenta text-white font-semibold text-center px-1 rounded absolute left-1 -top-3">
                more about you
              </h2>
              <textarea
                name="message"
                className="h-full w-full rounded-md px-2 py-2"
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
    </div>
  ) : null;
};

export default PartnersPopup;
