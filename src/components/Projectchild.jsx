import React from "react";

const Projectchild = ({ src, title, description, code, live }) => {
  return (
    <div className="flex flex-row gap-8 flex-wrap">
      <img src={src} alt={src} className="h-80 w-project" />
      <div className="flex flex-col gap-4 w-96">
        <h2 className="text-xl">{title}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex gap-4">
          <a
            href={code}
            className="bg-purple-900 border-2 border-purple-900 px-3 py-2 text-white shadow-sm rounded w-36 flex justify-center items-center focus:text-purple-900 focus:bg-white hover:bg-white hover:text-purple-900 cursor-pointer">
            Source Code
          </a>
          <a
            href={live}
            className="text-purple-900 border-2 border-purple-900 px-3 py-2 bg-white shadow-sm rounded w-36 flex justify-center items-center focus:bg-purple-900 focus:text-white hover:text-white hover:bg-purple-900 cursor-pointer">
            See Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projectchild;
