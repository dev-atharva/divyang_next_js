import Auth from "./Auth";
import Dropdown from "./Dropdown";
import Links from "./Links";
import Notification from "./Notification";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [hamtoggle, Sethamtoggle] = useState(false);
  return (
    <div className="flex flex-row justify-around items-center  z-10 fixed bg-white   min-w-[100vw] drop-shadow-md border-2 p-1 ">
      <div className="hidden sm:block">
        <Links />
      </div>

      <div
        className="block sm:hidden bg-violet-950 p-2"
        onClick={() => Sethamtoggle(!hamtoggle)}
      >
        <RxHamburgerMenu size={20} color="white" />
      </div>

      <div className=" flex flex-row gap-4">
        <Auth />
        <Notification />
      </div>
      {hamtoggle ? <Dropdown /> : <></>}
    </div>
  );
};

export default Navbar;
