import React from "react";
import voids from "../assets/voids.svg";

const Notfound = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-81">
      <img
        src={voids}
        alt="void"
        className="h-32 w-32 md:w-60 lg:w-60 xl:w-60 md:h-60 lg:h-60 xl:h-60"
      />
      <h1 className="text-xl">Page Not Found</h1>
    </div>
  );
};

export default Notfound;
