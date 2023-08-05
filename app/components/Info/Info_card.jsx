const Info_card = ({ icon, title, description }) => {
  return (
    <div
      className=" h-[33vh] w-[90vw] sm:w-[24vw] 
     cursor-pointer group perspective  text-white text-center "
    >
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 ">
        <div
          className="absolute backface-hidden w-full h-full bg-purple-950 rounded-lg
         flex justify-center items-center flex-col font-bold text-xl "
        >
          {icon}
          {title}
        </div>
        <div
          className="absolute my-rotate-y-180 backface-hidden w-full h-full
         overflow-hidden bg-purple-950 rounded-lg flex items-center justify-center p-2 text-lg font-semibold"
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Info_card;
