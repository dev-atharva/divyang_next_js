"use client"

import Community_options from "./Community_options";
import Posting_Form from "./Posting_Form";
import Community_Posts from "./Community_Posts";

const page = () => {
  return (
    <div className=" pt-16 flex flex-col sm:flex-row gap-1 space-y-3 sm:space-x-3 items-center sm:items-start justify-center">
      <Community_options />
      <div className="min-h-[100vh] flex flex-col gap-3 ">
        <Posting_Form />
        {/* <Community_post /> */}
        <Community_Posts />
      </div>
    </div>
  );
};

export default page;
