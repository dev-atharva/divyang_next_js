"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Store from "../../store/store";

const Searchbar = () => {
  const change_schemes = Store((state) => state.change_schemes);
  const [searchtext, Setsearchtext] = useState("");
  const handlesearchsubmit = async () => {
    let response = await axios.get(`/api/schemes/${searchtext}`);
    Setsearchtext("")
    change_schemes(response.data.schemes);
    try {
    } catch (error) {
      console.log("");
    }
  };
  return (
    <div
      className="pt-16 max-w-[100vw] min-h-[20vh]
     flex flex-row justify-center items-center gap-4"
    >
      <input
        value={searchtext}
        onChange={(e) => Setsearchtext(e.target.value)}
        type="text"
        placeholder="Search the schemes"
        className="bg-transparent min-w-[30%]
       text-black p-2 rounded-lg outline-offset-1 outline-black border-2 border-black"
      />
      <button
        className="p-2 bg-purple-950 rounded-lg"
        onClick={handlesearchsubmit}
      >
        <CiSearch color="white" size={23} />
      </button>
    </div>
  );
};

export default Searchbar;
