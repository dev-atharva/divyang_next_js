"use client";
import Store from "../../store/store";

const Community_options = () => {
  const change_post_state = Store((state) => state.change_post_state);
  const handelstate_change = async (newstate) => {
    change_post_state(newstate);
  };
  const community_options = [
    "Neurological",
    "Skin",
    "Mobility",
    "Hearing",
    "Multiple",
    "Vision",
  ];

  return (
    <>
      <div className="hidden sm:block">
        <div
          className="flex flex-col gap-2  border-1
     border-gray-700 shadow-md shadow-purple-950 rounded-lg min-w-[12vw] h-auto "
        >
          <div
            onClick={() => handelstate_change("")}
            className="flex items-center justify-center gap-2 text-black font-semibold text-lg cursor-pointer   pt-1"
          >
            Communities
          </div>
          <hr className="border-t-2 border-black w-full" />
          {community_options.map((community, index) => (
            <div
              onClick={() => handelstate_change(community)}
              key={index}
              className="flex items-center  px-4 py-1 text-md font-medium text-gray-700 cursor-pointer"
            >
              {community}
            </div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
        <div className="max-w-[100vw] min-h-[12vh]  p-2 grid gap-1 place-items-center  grid-cols-3 sm:grid-cols-7">
          {community_options.map((item, key) => (
            <div
              onClick={() => handelstate_change(item)}
              key={key}
              className="flex items-center justify-center font-semibold text-md
         text-black px-1 py-1 border-2 border-black rounded-xl hover:bg-black hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Community_options;
