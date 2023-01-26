import React from "react";

const Advantages = ({ number, title, description, width}) => {

  return (
    <div
      className={`bg-gradient-to-r from-magenta to-lilac rounded-md w-full h-full relative p-1 transition duration-500 ease-in-out transform hover:scale-105`}
    >
      <div className="bg-white rounded-md w-full h-full">
        <div className="w-16 h-16 text-center justify-content-center items-center font-black text-white flex text-4xl bg-gradient-to-r from-magenta to-lilac rounded-full absolute -top-10 left-3">
          <h2 className="w-full text-center">{number}</h2>
        </div>

        <div className="flex flex-col gap-3 text-center font-bold py-10 items-center justify-content-center px-10 ">
          <h2 className="w-full text-center text-lg">{title}</h2>
          <div className="w-full text-center text-base font-light">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
