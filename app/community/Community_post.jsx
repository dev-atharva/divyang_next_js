"use client";
import { CgProfile } from "react-icons/cg";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
} from "react-icons/ai";
import Comment from "./Comment";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Community_post = ({ name, content, image_src, type, id, comments }) => {
  const [commentcontent, Setcommentcontent] = useState("");
  const [loading, Setloading] = useState(false);

  const handleComment = async () => {
    try {
      console.log(name);
      Setloading(true);
      const response = await axios.post(`/api/posts/${id}/comments`, {
        content: commentcontent,
      });
      Setcommentcontent("");
      toast.success("Commented successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      Setloading(false);
    }
  };
  return (
    <div
      className="max-w-[85vw] sm:max-w-[50vw] min-h-[35vh] rounded-xl p-2 
    shadow-md shadow-purple-950 flex flex-col gap-2"
    >
      <Toaster />
      <div className="flex flex-row justify-between gap-2 pt-2 px-2">
        <div className="flex flex-row gap-2 text-lg font-semibold ">
          <CgProfile size={25} />
          <span>{name}</span>
        </div>
        <BsBookmark size={25} />
      </div>
      <div className="pt-2 px-3 text-sm font-normal ">{content}</div>
      <div className="w-[100%] h-80 border border-gray-300 overflow-hidden">
        <Image
          src={image_src}
          alt="Description of the image"
          width={500}
          height={500}
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
            className="w-[85%] p-2 bg-transparent border-2 border-black shadow-md rounded-xl"
            placeholder="What's on your mind ?"
            value={commentcontent}
            onChange={(e) => Setcommentcontent(e.target.value)}
          />
          <button
            className="p-2 text-black font-semibold rounded-md shadow-md shadow-black hover:shadow-lg"
            onClick={handleComment}
          >
            {loading ? <>Loading</> : <>Comment</>}
          </button>
        </div>
        <div className="flex flex-row gap-1 px-4 py-1 items-center justify-start">
          <span className="font-semibold">All Comments</span>
          <AiOutlineDown size={20} />
        </div>
        {comments?.map((comment) => (
          <Comment
            key={comment._id}
            id={comment._id}
            name={comment.user.name}
            content={comment.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Community_post;
