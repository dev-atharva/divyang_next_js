import { CgProfile } from "react-icons/cg";
import { AiOutlineCamera } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

const Posting_Form = () => {
  return (
    <div className="flex flex-col gap-2 min-w-[50vw] min-h-[5vh] border-2 shadow-purple-950 p-2 shadow-md rounded-lg">
      <div className="flex flex-row gap-2 items-center justify-start px-2">
        <CgProfile size={30} />
        <input
          className="w-[95%] p-2 bg-transparent border-2 border-black shadow-md rounded-xl"
          placeholder="What's on your mind ?"
        />
      </div>
      <div className="flex justify-between gap-3 mt-1">
        <div className="flex flex-row gap-4 mx-4 my-1">
          <AiOutlineCamera size={27} />
          <BsEmojiSmile size={27} />
          <AiOutlinePaperClip size={27} />
        </div>

        <button className="py-1 px-3  p bg-transparent rounded-md shadow-md shadow-black text-md font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default Posting_Form;
