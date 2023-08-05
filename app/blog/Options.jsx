const Options = () => {
  const blog_categories = [
    "All",
    "Education",
    "Finance",
    "Travel",
    "Healthcare",
    "Achievements",
  ];

  return (
    <div className="max-w-[100vw] min-h-[12vh]  p-2 grid gap-1 place-items-center  grid-cols-3 sm:grid-cols-7">
      {blog_categories.map((item, key) => (
        <div
          key={key}
          className="flex items-center justify-center font-semibold text-md
         text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
        >
          {item}
        </div>
      ))}
    </div>
    // <div className="max-w-[100vw] min-h-[12vh]  p-2 grid gap-1 place-items-center  grid-cols-3 sm:grid-cols-7">
    //   <div
    //     className="flex items-center justify-center font-semibold text-md
    //    text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
    //   >
    //     All
    //   </div>
    //   <div
    //     className="flex items-center justify-center font-semibold text-md
    //    text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
    //   >
    //     Education
    //   </div>
    //   <div
    //     className="flex items-center justify-center font-semibold text-md
    //    text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
    //   >
    //     Finance
    //   </div>
    //   <div
    //     className="flex items-center justify-center font-semibold text-md
    //    text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
    //   >
    //     Travel
    //   </div>
    //   <div
    //     className="flex items-center justify-center font-semibold text-md
    //    text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
    //   >
    //     Healthcare
    //   </div>
    //   <div
    //     className="flex items-center justify-center font-semibold text-md
    //    text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
    //   >
    //     Achievements
    //   </div>
    // </div>
  );
};

export default Options;
