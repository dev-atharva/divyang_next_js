import {AiOutlineBell} from "react-icons/ai"
const Notification = () => {
  return (
    <div className="min-w-[25px] min-h-[25px] bg-violet-950 text-white rounded-xl">
      <div className="p-3"><AiOutlineBell color="white" size={20}/></div>
    </div>
  );
};

export default Notification;
