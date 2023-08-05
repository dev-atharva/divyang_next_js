import { CgProfile } from "react-icons/cg";
import { BsReply } from "react-icons/bs";
const Comment = () => {
  return (
    <div className="flex flex-row items-start p-1 border border-black shadow-md m-2 rounded-md">
      <CgProfile className="mt-3" size={33} />
      <div className="flex flex-col gap-1 p-3 items-start">
        <span className="font-semibold">David</span>
        <p className="text-sm">
          Absolutely agree! 🌟 Inclusivity is the heart of the digital world.
          Lets create spaces that everyone can navigate, regardless of
          abilities. online experience! 👏🌐
          <br /> #DigitalInclusion #AccessibilityMatters
        </p>
        <div className="flex items-center justify-center gap-2">
          <BsReply />
          <span className="font-semibold my-1">Reply Comment</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
