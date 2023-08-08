"use client";

import React from "react";
import AdminNav from "./adminNav";

const AdminPage = () => {
  return (
    <div className="pt-20 h-screen flex items-center justify-center">
      <div className="border shadow-lg shadow-purple-950  h-auto min-w-[50vw] flex flex-col gap-3 items-center rounded-lg">
        <div className="border border-black w-[100%] min-h-[5vh] flex items-center justify-center rounded-lg">
          <h1 className="font-semibold text-xl border">Admin Page</h1>
        </div>
        <AdminNav />
      </div>
    </div>
  );
};

export default AdminPage;
