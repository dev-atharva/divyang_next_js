"use client";
import { useState } from "react";
import Community_post from "./Community_post";
import { useEffect } from "react";
import Store from "../../store/store";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const Community_Posts = () => {
  const [loading, Setloading] = useState(false);
  const currentpposttype = Store((state) => state.poststate);
  const posts = Store((state) => state.post);
  const setposts = Store((state) => state.change_post);

  useEffect(() => {
    async function fetchposts() {
      try {
        Setloading(true);
        let response;
        if (currentpposttype === "") {
          response = await axios.get(`/api/posts`);
        } else {
          response = await axios.get(`/api/posts?type=${currentpposttype}`);
          setposts(response.data);
        }
        setposts(response.data);
      } catch (error) {
        toast.error(error.message);
        console.log("")
      } finally {
        Setloading(false);
      }
    }
    fetchposts();
  }, [currentpposttype,setposts]);
  return (
    <div className="flex flex-col gap-2 max-w-[88vw] sm:max-w-[52vw] h-auto">
      <Toaster />
      {!loading ? (
        <>
          {posts?.posts?.map((data_in) => (
            <Community_post
              id={data_in._id}
              key={data_in._id}
              name={data_in.user.name}
              content={data_in.content}
              type={data_in.type}
              image_src={data_in.imageUrl}
              comments={data_in.comments}
            />
          ))}
        </>
      ) : (
        <>Loading ...</>
      )}
    </div>
  );
};

export default Community_Posts;
