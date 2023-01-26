import { useRef, useState } from "react";
import Joined from "../../images/comm-joined.svg";
import axios from "axios";

const JoinCommunity = () => {
  const formRef = useRef(null);
  const [isSubmitted, setisSubmitted] = useState(false);

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

  return (
    (isSubmitted && (
      <div className="w-full flex flex-row items-center justify-center justify-content-center md:px-20 lg:px-0">
 <div
        className="w-full bg-contain bg-no-repeat h-20"
        style={{ backgroundImage: `url('${Joined}')` }}
      />
      </div>
     
    )) || (
      <form
        method="post"
        ref={formRef}
        name="call-to-action"
        className="w-full md:border-4 border-white rounded-full flex flex-col md:flex-row py-1 items-center md:items-stretch md:justify-between px-1 auto"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL"
          className="border-2 rounded-full md:border-0 px-4 py-4 md:py-0 md:border-0 md:px-10 md:ml-4 placeholder:text-sm placeholder:md:text-xl placeholder-white placeholder:font-extrabold  placeholder:opacity-75 placeholder:tracking-wide text-white font-bold tracking-wider mx-2 my-5"
        />

        <div className="bg-white w-20 md:w-auto py-3 md:py-0 rounded-full px-5 flex flex-col justify-center text-center">
          <input
            type="submit"
            value="JOIN WAITLIST"
            name="join"
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo to-purple"
          />
        </div>
      </form>
    )
  );
};

export default JoinCommunity;
