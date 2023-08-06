"use client";
import { publicRuntimeConfig } from "../../next.config";
import { CgProfile } from "react-icons/cg";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Posting_Form = () => {
  const fileInputRef = useRef(null);
  const [dropdowntoggle, Setdropdowntoggle] = useState(false);
  const [emojiboxtoggle, Setemojiboxtoggle] = useState(false);
  const [type_post, Settypepost] = useState("Multiple");
  const [loading, Setloading] = useState(false);
  const [content, Setcontent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const handleRemoveClick = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async () => {
    try {
      Setloading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "qhbxrfjg");
      const response_cloudinary = await fetch(
        `https://api.cloudinary.com/v1_1/dcyo1ji8f/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response_cloudinary.json();

      const response = await axios.post("/api/posts", {
        type: type_post,
        content: content,
        imageUrl: data.secure_url,
      });
      handleRemoveClick();
      Setcontent("");
      Settypepost("Multiple");
      toast.success("Successfully created post");
    } catch (error) {
      toast.error(error.message);
    } finally {
      Setloading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 min-w-[50vw] min-h-[5vh] border-2 shadow-purple-950 p-2 shadow-md rounded-lg">
      <Toaster />
      <div className="flex flex-row gap-2 items-center justify-start px-2">
        <CgProfile size={30} />
        <input
          value={content}
          onChange={(e) => Setcontent(e.target.value)}
          className="w-[95%] p-2 bg-transparent border-2 border-black shadow-md rounded-xl"
          placeholder="What's on your mind ?"
        />
      </div>
      <div className="flex justify-between gap-3 mt-1">
        <div className="flex flex-row gap-4 mx-4 my-1">
          <div className="relative">
            <BsEmojiSmile
              onClick={() => Setemojiboxtoggle(!emojiboxtoggle)}
              size={27}
              className="cursor-pointer"
            />
            {emojiboxtoggle && (
              <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                <Picker
                  data={data}
                  onEmojiSelect={(e) => Setcontent(content.concat(e.native))}
                />
              </div>
            )}
          </div>

          <AiOutlinePaperClip
            onClick={() => fileInputRef.current.click()}
            size={27}
            className="cursor-pointer"
          />
          {selectedFile ? (
            <div className="flex flex-row gap-2 items-center">
              {selectedFile.name}
              <AiOutlineCloseCircle
                className="cursor-pointer"
                onClick={handleRemoveClick}
                size={20}
              />
            </div>
          ) : (
            <></>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="flex flex-row gap-3">
          <div className="relative">
            <button
              onClick={() => Setdropdowntoggle(!dropdowntoggle)}
              className="bg-transparent px-5 py-2 rounded-md focus:outline-none shadow-md shadow-black font-semibold"
            >
              {type_post}
            </button>
            {dropdowntoggle && (
              <div className="absolute  bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => Settypepost("Neurological")}
                  >
                    Neurological
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => Settypepost("Skin")}
                  >
                    Skin
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => Settypepost("Mobility")}
                  >
                    Mobility
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => Settypepost("Vision")}
                  >
                    Vision
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => Settypepost("Hearing")}
                  >
                    Hearing
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => Settypepost("Multiple")}
                  >
                    Multiple
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="py-1 px-3 bg-transparent rounded-md shadow-md shadow-black text-md font-bold"
          >
            {loading ? <>Loading</> : <>POST</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posting_Form;
