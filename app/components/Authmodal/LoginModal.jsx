"use client";

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Login_form from "./LoginForm";
import Signup_form from "./Signup_form";

const LoginModal = ({ isopen, onclose }) => {
  const [toggle_login, Settoggle_login] = useState(false);
  if (isopen !== true) {
    return null;
  }
  return (
    <div
      className="absolute z-30 left-0 top-0   min-h-screen min-w-[100vw] flex flex-col
     justify-center items-center bg-gray-800 bg-opacity-75  "
    >
      <div
        className="flex flex-col gap-1  p-1 bg-white min-h-[60vh] min-w-[60vw] rounded-lg transition-all
        duration-700 translate-y-1 delay-150 relative "
      >
        <div className="flex flex-row justify-end relative z-20 m-1  ">
          <AiOutlineClose
            onClick={onclose}
            size={20}
            color="black"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-row">
          <Login_form onclose={onclose} />
          <Signup_form onclose={onclose} />
        </div>
        <div
          className={`absolute top-0 left-0 h-full w-[50%] bg-[#FF416C] rounded-sm text-white flex
            transition duration-300 ease-in-out transform ${
              toggle_login ? "translate-x-full" : "translate-x-0"
            }`}
        >
          {toggle_login === true ? (
            <div className="flex flex-col items-center justify-center gap-y-6 sm:mx-28">
              <div className="flex items-center text-center">
                <h1 className="font-extrabold text-3xl">Hello, Friend!</h1>
              </div>
              <div className="flex flex-row text-center items-center justify-center ">
                <p>
                  Enter your personal details and <br /> start journey with us
                </p>
              </div>
              <button
                onClick={() => Settoggle_login(!toggle_login)}
                className="bg-transparent p-2 border border-white rounded-md 
                 active:scale-110 transition ease-in-out duration-300 "
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-y-6">
              <div>
                <h1 className="font-extrabold text-3xl">Welcome Back !</h1>
              </div>
              <div className="flex flex-row text-center items-center justify-center sm:mx-20">
                <p>
                  To keep connected with us please login
                  <br /> with personal account info
                </p>
              </div>
              <button
                onClick={() => Settoggle_login(!toggle_login)}
                className="bg-transparent p-2 border border-white rounded-md
                  active:scale-110 transition ease-in-out duration-300 "
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
