"use client";
import React from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Store from "../../../store/store"



const Login_form = ({ onclose }) => {
  const login = Store((state)=>state.login)
  const [user, Setuser] = React.useState({
    email: "",
    password: "",
  });
  const [buttondisabled, Setbuttondisabled] = React.useState(false);
  const [loading, Setloading] = React.useState(false);

  const onLogin = async () => {
    try {
      Setloading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("Login success");
      login()
      onclose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      Setloading(false);
    }
  };

  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      Setbuttondisabled(false);
    } else {
      Setbuttondisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-[55vh] min-w-[50%] flex flex-col gap-y-6  justify-center items-center ">
      <Toaster />
      <h1 className="font-extrabold text-black text-4xl">Sign In</h1>
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
      <div className="text-[#333] text-sm">Forgot the Password ?</div>
      <button
        disabled={buttondisabled}
        onClick={onLogin}
        className="border border-solid border-red-500 bg-red-500 text-white text-xs
       font-bold rounded-2xl py-3 px-12
        uppercase tracking-wider transition-transform duration-80 ease-in w-[70%]"
      >
        {loading ? <>Loading</> : <>Log In</>}
      </button>
    </div>
  );
};

export default Login_form;
