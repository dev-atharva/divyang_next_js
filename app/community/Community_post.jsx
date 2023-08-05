import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import Post_image from "../../public/images/Disabled people.svg";
import Comment from "./Comment";
import Image from "next/image";

const Community_post = () => {
  return (
    <div
      className="max-w-[85vw] sm:max-w-[50vw] min-h-[35vh] rounded-xl p-2 
    shadow-md shadow-purple-950 flex flex-col gap-2"
    >
      <div className="flex flex-row justify-between gap-2 pt-2 px-2">
        <div className="flex flex-row gap-2 text-lg font-semibold ">
          <CgProfile size={25} />
          <span>David</span>
        </div>
        <BsBookmark size={25} />
      </div>
      <div className="pt-2 px-3 text-sm font-normal ">
        🌼 Embracing inclusivity: Let us ensure that our digital spaces are
        designed with accessibility in mind. By making simple changes like
        adding alt text to images, providing captions for videos, and using
        clear language, we can create a more inclusive online environment for
        people with disabilities.💙
        <br /> #DigitalAccessibility #InclusionMatters
      </div>
      <div className="w-[100%] h-80 border border-gray-300 overflow-hidden">
        <Image
          src={Post_image}
          alt="Description of the image"
          className="object-fit w-[100%] h-[100%]"
        />
      </div>
      <div className="flex flex-row items-center justify-around gap-3 p-2 ">
        <div className="flex flex-row gap-2 font-semibold ">
          <AiOutlineLike size={25} />
          <span className="hidden sm:block">Like</span>
        </div>
        <div className="flex flex-row gap-2 font-semibold ">
          <AiOutlineDislike size={25} />
          <span className="hidden sm:block">Dislike</span>
        </div>
        <div className="flex flex-row gap-2 font-semibold ">
          <AiOutlineComment size={25} />
          <span className="hidden sm:block">Comment</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center justify-start px-2">
          <CgProfile size={30} />
          <input
            className="w-[95%] p-2 bg-transparent border-2 border-black shadow-md rounded-xl"
            placeholder="What's on your mind ?"
          />
        </div>
        <div className="flex flex-row gap-1 px-4 py-1 items-center justify-start">
          <span className="font-semibold">All Comments</span>
          <AiOutlineDown size={20} />
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default Community_post;
