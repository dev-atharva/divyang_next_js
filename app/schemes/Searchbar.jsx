"use client"
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div
      className="pt-16 max-w-[100vw] min-h-[20vh]
     flex flex-row justify-center items-center gap-4"
    >
      <input
        type="text"
        placeholder="Search the schemes"
        className="bg-transparent min-w-[30%]
       text-black p-2 rounded-lg outline-offset-1 outline-black border-2 border-black"
      />
      <button className="p-2 bg-purple-950 rounded-lg">
        <CiSearch color="white" size={23} />
      </button>
    </div>
  );
};

export default Searchbar;
