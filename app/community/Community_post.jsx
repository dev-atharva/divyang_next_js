"use client";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineComment,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import Comment from "./Comment";
import Image from "next/image";
import { useEffect, useState } from "react";
import Store from "../../store/store";
import { toast } from "react-hot-toast";
import axios from "axios";

const Community_post = ({ name, content, image_src, type, id, comments }) => {
  const posts = Store((state) => state.post);
  const setposts = Store((state) => state.change_post);
  const [commentcontent, Setcommentcontent] = useState("");
  const [liked, setliked] = useState(false);
  const [disliked, setdisliked] = useState(false);
  const [iscommenting, Setiscommenting] = useState(false);
  const [iscommentshowing, Setiscommentshowing] = useState(false);
  const [loading, Setloading] = useState(false);

  const handleComment = async () => {
    try {
      Setloading(true);
      const response = await axios.post(`/api/posts/${id}/comments`, {
        content: commentcontent,
      });
      setposts([...posts, response.data.post]);
      Setcommentcontent("");
      toast.success("Commented successfully");
    } catch (error) {
      // toast.error(error.message);
      console.log("");
    } finally {
      Setloading(false);
    }
  };

  const handlelike_toggle = async () => {
    setliked(true);
    setdisliked(false);
  };
  const handledislike_toggle = async () => {
    setliked(false);
    setdisliked(true);
  };

  const handledislike = async () => {
    try {
      handledislike_toggle();
      const response = await axios.post(`/api/posts/${id}/dislike`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handlelike = async () => {
    try {
      handlelike_toggle();
      const response = await axios.post(`/api/posts/${id}/like`);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    async function getisliked() {
      try {
        let response = await axios.get(`/api/posts/${id}/like`);
        setliked(response.data.hasliked);
      } catch (error) {
        toast.error("You are not signed in ");
      }
    }
    async function getdislikes() {
      try {
        let response = await axios.get(`/api/posts/${id}/dislike`);
        setdisliked(response.data.hasdisliked);
      } catch (error) {
        toast.error("You are not signed in ");
      }
    }
    getisliked();
    getdislikes();
  }, [id]);

  return (
    <div
      className="max-w-[85vw] sm:max-w-[50vw] min-h-[35vh] rounded-xl p-2 
    shadow-md shadow-purple-950 flex flex-col gap-2"
    >
      <div className="flex flex-row justify-between gap-2 pt-2 px-2">
        <div className="flex flex-row gap-2 text-lg font-semibold ">
          <CgProfile size={25} />
          <span>{name}</span>
        </div>
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
        <div
          className="flex flex-row gap-2 font-semibold cursor-pointer "
          onClick={() => handlelike()}
        >
          {liked ? (
            <AiFillLike size={25} color="blue" />
          ) : (
            <AiOutlineLike size={25} />
          )}
          <span className="hidden sm:block">Like</span>
        </div>
        <div
          className="flex flex-row gap-2 font-semibold cursor-pointer"
          onClick={() => handledislike()}
        >
          {disliked ? (
            <AiFillDislike size={25} color="red" />
          ) : (
            <AiOutlineDislike size={25} />
          )}
          <span className="hidden sm:block">Dislike</span>
        </div>
        <div
          className="flex flex-row gap-2 font-semibold cursor-pointer "
          onClick={() => Setiscommenting(!iscommenting)}
        >
          <AiOutlineComment size={25} />
          <span className="hidden sm:block">Comment</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {iscommenting ? (
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
        ) : (
          <></>
        )}
        {iscommentshowing ? (
          <>
            <div
              className="flex flex-row gap-1 px-4 py-1 items-center justify-start cursor-pointer"
              onClick={() => Setiscommentshowing(!iscommentshowing)}
            >
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
          </>
        ) : (
          <div
            className="flex flex-row gap-1 px-4 py-1 items-center justify-start cursor-pointer"
            onClick={() => Setiscommentshowing(!iscommentshowing)}
          >
            <span className="font-semibold">All Comments</span>
            <AiOutlineUp size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Community_post;
