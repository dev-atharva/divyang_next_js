import Image from "next/image";
import Information_banner from "../../../public/images/Volunteering-rafiki.svg";

const Info_banner = () => {
  return (
    <div className="flex justify-center items-center h-[30vh] w-[90vw] mb-12 mt-2 sm:mb-0 sm:h-[100%] sm:w-[50%] p-1 ">
      <Image
        className="object-cover"
        alt="Information banner"
        src={Information_banner}
      />
    </div>
  );
};

export default Info_banner;
