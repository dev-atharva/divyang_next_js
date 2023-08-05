"use client";

import { AiOutlineUser } from "react-icons/ai";

import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoginModal from "../Authmodal/LoginModal";
import Store from "../../../store/store";

const Auth = () => {
  const isLoggedIn = Store((state) => state.isLoggedIn);
  const logout = Store((state) => state.logout);
  const login = Store((state) => state.login);
  const [logintoggle, Setloggin] = React.useState(false);
  const openModal = () => {
    Setloggin(true);
  };
  const closeModal = () => {
    Setloggin(false);
  };
  const onlogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout success");
      logout();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      {isLoggedIn ? (
        <div
          className="cursor-pointer border-black min-h-[25px] items-center flex justify-center  bg-purple-950 border-2 rounded-xl p-2"
          onClick={onlogout}
        >
          <BiLogOut size={20} color="white" />
        </div>
      ) : (
        <div
          className="cursor-pointer border-black border-2 min-h-[25px] items-center flex justify-center rounded-xl bg-purple-950 p-2"
          onClick={openModal}
        >
          <AiOutlineUser size={20} color="white" />
        </div>
      )}
      <LoginModal isopen={logintoggle} onclose={closeModal} />
    </>
  );
};

export default Auth;
