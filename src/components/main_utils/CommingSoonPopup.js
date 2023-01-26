

const CommingSoonPopup = ({ isOpen, setisOpen }) => {
  

  return isOpen ? (
    <div
      className={`${
        (isOpen && "block") || "hidden"
      } fixed w-screen h-screen animated fadeIn faster flex justify-center items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <div className="popup lg:w-1/5 h-36 bg-gradient-to-r from-indigo to-purple rounded-xl flex flex-col justify-center text-center items-center">
        <div
          onClick={() => setisOpen(false)}
          className="w-full flex flex-row justify-start px-4 text-white text-xl font-light pt-2 md:pt-4"
        >
          x
        </div>
        <div className="flex w-full h-full items-center justify-center pb-10">
        <h2 className="uppercase font-extrabold text-xl md:text-2xl text-white px-10 lg:px-0">
          comming soon
        </h2>
        </div>



       
      </div>
    </div>
  ) : null;
};

export default CommingSoonPopup;
