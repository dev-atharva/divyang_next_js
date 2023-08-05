const Stats = () => {
  return (
    <div className="flex flex-row justify-center items-center max-w-[100vw] min-h-[25vh] py-7 sm:px-2  ">
      <div
        className="flex flex-col  sm:flex-row gap-4 min-h-[25vh] min-w-[60vw] sm:min-w-[75vw] bg-gradient-to-l
       from-purple-800 to-purple-900 text-white rounded-md p-4 items-center "
      >
        <div className="flex flex-col gap-2 p-2  ">
          <h1 className="text-2xl font-extrabold mb-2">450,000</h1>
          <h2 className="text-lg font-bold mb-1">PAGE VIEWS</h2>
          <p className="font-semibold text-md">
            24% more than the last month, 33% more
            <br /> than the last year
          </p>
        </div>
        <div className="hidden lg:block border-l border-gray-400 h-[20vh]"></div>
        <div className="lg:hidden border-t border-gray-400 w-[50vw]"></div>
        {/* <div className=" w-[50vw] border-t  sm:h-[20vh] sm:border-l border-gray-400"></div> */}
        <div className="flex flex-col gap-2 p-2 ml-2  ">
          <h1 className="text-2xl font-extrabold mb-2">2,100</h1>
          <h2 className="text-lg font-bold mb-1">NEW USERS</h2>
          <p className="font-semibold text-md">
            14% more than last month, new user engagement
            <br /> upto 6%
          </p>
        </div>
        <div className="hidden lg:block border-l border-gray-400 h-[20vh]"></div>
        <div className="lg:hidden border-t border-gray-400 w-[50vw]"></div>
        {/* <div className=" w-[50vw] border-t sm:h-[20vh] sm:border-l border-gray-400"></div> */}
        <div className="flex flex-col gap-2  p-2 ">
          <h1 className="text-2xl font-extrabold mb-2">1,500</h1>
          <h2 className="text-lg font-bold mb-1">SCHEMES AVAILED</h2>
          <p className="font-semibold text-md">
            30% more than the last month, 70% more
            <br /> than the last year
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
