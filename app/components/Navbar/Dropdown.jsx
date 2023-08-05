"use client";
import Link from "next/link";


const Dropdown = ({Sethamtoggle}) => {
  return (
    <div className="flex flex-col gap-1 item-centre justify-start fixed top-14 left-3 border-2 bg-white rounded-lg p-2">
      <Link onClick={() => Sethamtoggle(false)} href="/">Home</Link>
      <Link onClick={() => Sethamtoggle(false)} href="/schemes">Schemes</Link>
      <Link onClick={() => Sethamtoggle(false)} href="/blog">Blogs</Link>
      <Link onClick={() => Sethamtoggle(false)} href="/community">Community</Link>
      <Link onClick={() => Sethamtoggle(false)} href="/about">About</Link>
    </div>
  );
};

export default Dropdown;
