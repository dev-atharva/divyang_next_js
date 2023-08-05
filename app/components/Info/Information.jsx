import Info_card from "./Info_card";
import { IoMicOutline } from "react-icons/io5";
import { BiLogoBlogger } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const Information = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  h-[100%] w-[50%] gap-2 place-items-center ">
      <Info_card
        key={1}
        icon={<IoMicOutline size={25} />}
        title="Voice Recognition"
        description="Voice navigation is particulary designed for people with impaired
         vision and people with restricted movements.You can navigate the app with your voice."
      />
      <Info_card
        key={2}
        icon={<BiLogoBlogger size={25} />}
        title="Blogs"
        description="Blog functionality keeps you updated about the existing events
       for diabled people and guide you towards a good well being."
      />
      <Info_card
        key={3}
        icon={<BsPeople size={25} />}
        title="Community"
        description="A diabled individual can have access to an online community on EmpowerAble
       where he/she feels confertable in finding thier voice and the ablity to spread their experiences across the globe. "
      />
      <Info_card
        key={4}
        icon={<HiOutlineSpeakerphone size={25} />}
        title="Text-to-speech"
        description="You can read on screen content on pages and in notofication window using the on screen reader functionality.
      The build in screen reader provides visual and hearing assistance. "
      />
    </div>
  );
};

export default Information;
