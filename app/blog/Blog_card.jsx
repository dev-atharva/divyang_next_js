import Image from "next/image";
import sampleimage from "../../public/images/Disabled people.svg";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";

const Blog_card = ( { title,type,caption,body,author,image_url } ) => {
  return (
    <div className="flex flex-col min-w-[20rem] h-[23rem] p-2 border-black border-2 space-y-2 rounded-lg shadow-md shadow-purple-950">
      <div className="w-[100%] h-[50%] border ">
        <Image
          src={sampleimage}
          className="object-fit w-[100%] h-[100%]"
          alt="Blog image"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-start max-w-[9rem] text-sm font-semibold bg-purple-950 text-white py-1 px-3 rounded-xl">
          {type}
        </div>
        <div className="text-black font-bold text-lg mt-2">
          {title}
        </div>
        <div className="flex flex-row  text-lg font-medium text-gray-700 items-center mt-2">
          <HiUserCircle size={30} />
          <span>{author}</span>
        </div>
      </div>
      <div className="flex justify-between flex-row ">
        <span>2022-08-21</span>
        <div className="flex flex-row gap-3">
          <AiOutlineHeart size={20} />
          <AiOutlineShareAlt size={20} />
        </div>
      </div>
    </div>
  );
};

export default Blog_card;
