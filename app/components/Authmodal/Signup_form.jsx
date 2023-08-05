"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup_form = ({ onclose }) => {
  const [loading, Setloading] = React.useState(false);
  const [buttondisabled, Setbuttondisabled] = useState(false);
  const [confirmpassword, Setconfirmpassword] = useState("");
  const [user, Setuser] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const onsignup = async () => {
    try {
      Setloading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Logout success");
      onclose();
    } catch (error) {
      console.log("Logout failed", error.message);
      toast.error(error.message);
    } finally {
      Setloading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      Setbuttondisabled(false);
    } else if (user.password === confirmpassword) {
      Setbuttondisabled(false);
    } else {
      Setbuttondisabled(true);
    }
  }, [user, confirmpassword]);

  return (
    <div className="min-h-[55vh] min-w-[50%] flex flex-col gap-y-3  justify-center items-center ">
      <Toaster />
      <h1 className="font-extrabold text-black text-4xl">Sign Up</h1>
      <input
        id="name"
        value={user.name}
        onChange={(e) => Setuser({ ...user, name: e.target.value })}
        className="bg-[#eee] border-none p-2 w-[70%] text-black"
        type="text"
        placeholder="Name"
        required
      />
      <input
        id="email"
        value={user.email}
        onChange={(e) => Setuser({ ...user, email: e.target.value })}
        className="bg-[#eee] border-none p-2 w-[70%] text-black"
        type="email"
        placeholder="Email"
        required
      />
      <input
        id="password"
        value={user.password}
        onChange={(e) => Setuser({ ...user, password: e.target.value })}
        className="bg-[#eee] border-none p-2 w-[70%] text-black"
        type="password"
        placeholder="Password"
        required
      />
      <input
        id="confirm_password"
        value={confirmpassword}
        onChange={(e) => Setconfirmpassword(e.target.value)}
        className="bg-[#eee] border-none p-2 w-[70%] text-black"
        type="password"
        placeholder="Confirm Password"
        required
      />

      <button
        disabled={buttondisabled}
        onClick={onsignup}
        className="border border-solid border-red-500 bg-red-500 text-white text-xs
       font-bold rounded-2xl py-3 px-12
        uppercase tracking-wider transition-transform duration-80 ease-in w-[70%]"
      >
        {loading ? <>Loading</> : <>Sign Up</>}
      </button>
    </div>
  );
};

export default Signup_form;
