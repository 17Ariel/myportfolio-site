import React from "react";
import { Linkedin, Instagram, Github } from "react-bootstrap-icons";
const Nav = () => {
  return (
    <>
      <nav className="w-full h-nav z-10 sticky top-0 shadow-sm flex justify-center items-center bg-white gap-20 sm:gap-40 md:gap-52 lg:gap-72 xl:gap-96 ">
        <h1 className="font-semibold text-3xl text-purple-900">ARIELG</h1>
        <ul className="flex justify-center items-center gap-7 sm:gap-9 md:gap-10 lg:gap-12 xl:gap-16">
          <Linkedin className="text-2xl hover:text-purple-900" />
          <Github className="text-2xl hover:text-purple-900" />
          <Instagram className="text-2xl hover:text-purple-900" />
        </ul>
      </nav>
    </>
  );
};

export default Nav;
