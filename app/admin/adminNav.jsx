"use client";

import React, { useState } from "react";
import AddBlog from "./add-blogs";
import AddScheme from "./add-schemes";

const AdminNav = () => {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showAddScheme, setShowAddScheme] = useState(false);

  return (
    <div>
      <div className="w-[100%] min-h-[10vh] flex flex-row items-center justify-center p-2 gap-2">
        <button
          onClick={() => setShowAddBlog(!showAddBlog)}
          className="text-white font-semibold text-lg rounded-lg bg-rose-500 p-2"
        >
          Add Blog
        </button>
        <button
          onClick={() => setShowAddScheme(!showAddScheme)}
          className="text-white font-semibold text-lg rounded-lg bg-rose-500 p-2"
        >
          Add Scheme
        </button>
      </div>

      {showAddBlog ? <AddBlog /> : <></>}

      {showAddScheme ? <AddScheme /> : <></>}
    </div>
  );
};

export default AdminNav;
