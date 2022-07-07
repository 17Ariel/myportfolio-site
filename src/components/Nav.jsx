import React, { useRef } from "react";
import Link from "./Link";
import { List } from "react-bootstrap-icons";
// import Sidebar from "./Sidebar";
const Nav = () => {
  const menu = useRef();
  const anchor = useRef();
  const menuAction = () => {
    if (menu.current.classList.contains("left-nav")) {
      menu.current.classList.remove("left-nav");
      menu.current.classList.add("left-0");
    } else {
      menu.current.classList.remove("left-0");
      menu.current.classList.add("left-nav");
    }
  };
  return (
    <>
      <nav className="w-full h-nav z-10 sticky top-0 shadow-sm flex justify-center items-center bg-white gap-36 sm:gap-48 md:gap-80 lg:gap-80 xl:gap-80">
        <h1 className="text-3xl font-semibold flex gap-2">ARIELG</h1>
        <ul className="hidden sm:flex md:flex lg:flex xl:flex justify-center items-center gap-8">
          <Link to="/" name="Home" />
          <Link to="/project" name="Project" />
          <Link to="/about" name="About" />
          <Link to="/contact" name="Contact" />
        </ul>
        <List
          onClick={menuAction}
          className="text-2xl flex sm:hidden md:hidden lg:hidden xl:hidden xxl:hidden cursor-pointer"
        />
      </nav>
      <ul
        ref={menu}
        className="flex left-nav flex-col justify-center items-center fixed gap-16 sm:hidden md:hidden lg:hidden xl:hidden xxl:hidden z-10 bg-white w-full h-full overflow-y-hidden transition duration-1000 ease-in-out">
        <Link to="/" name="Home" anchor={anchor} click={menuAction} />
        <Link to="/project" name="Project" anchor={anchor} click={menuAction} />
        <Link to="/about" name="About" anchor={anchor} click={menuAction} />
        <Link to="/contact" name="Contact" anchor={anchor} click={menuAction} />
      </ul>
    </>
  );
};

export default Nav;
