"use client";
import Link from "next/link";


const Dropdown = () => {
  return (
    <div className="flex flex-col gap-1 item-centre justify-start fixed top-14 left-3 border-2 border-black rounded-lg p-2">
      <Link href="/">Home</Link>
      <Link href="/schemes">Schemes</Link>
      <Link href="/blog">Blogs</Link>
      <Link href="/community">Community</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

export default Dropdown;
