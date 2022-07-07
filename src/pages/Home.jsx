import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-81">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl xxl:text-5xl">
          Hi, Im Ariel
        </h1>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl xxl:text-5xl">
          I develop things in the web
        </h1>
        <div className="bg-blue-400 h-2 w-28 sm:w-36 md:w-48 lg:w-48 xl:w-48 xxl:w-48 md:self-end lg:self-end xl:self-end xxl:self-end relative"></div>
      </div>
    </div>
  );
};

export default Home;
