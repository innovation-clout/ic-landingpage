import JoinCommunity from "./joinCommunity";

const JoinCommunityPopup = ({ isOpen, setisOpen }) => {
  return (
    <div
      className={`${
        (isOpen && "block") || "hidden"
      } md:hidden fixed w-screen h-screen animated fadeIn faster flex justify-center items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <div className="h-1/4 bg-gradient-to-r from-indigo to-purple rounded-xl flex flex-col justify-center text-center items-center">
        <div
          onClick={() => setisOpen(false)}
          className="w-full flex flex-row justify-start px-4 text-white text-xl font-light pt-2 md:pt-4"
        >
          x
        </div>
        <div className="flex flex-col w-full h-full items-center justify-center pb-10 gap-3 px-5">
          <h2 className="md:text-xl opacity-60 text-white font-extrabold uppercase z-0 tracking-wider">
            accelerate your success
          </h2>
          <JoinCommunity />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityPopup;
