"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import AddBlog from "./add-blogs";
import AddScheme from "./add-schemes";

const AdminNav = () => {

  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showAddScheme, setShowAddScheme] = useState(false);

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setShowAddBlog(!showAddBlog)}>Add Blog</button>
        </li>
        <li>
        <button onClick={() => setShowAddScheme(!showAddScheme)}>Add Scheme</button>
        </li>
      </ul>

      {showAddBlog && <AddBlog />}

      {showAddScheme && <AddScheme />}
    </nav>
  );
};

export default AdminNav;