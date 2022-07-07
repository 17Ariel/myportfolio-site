import React from "react";
import { NavLink } from "react-router-dom";
const Link = ({ to, name, anchor, click }) => {
  return (
    <>
      <NavLink
        ref={anchor}
        to={to}
        onClick={click}
        className={({ isActive }) =>
          isActive
            ? "text-black border-b-2 border-b-black"
            : "text-zinc-600 border-b border-b-white"
        }>
        {name}
      </NavLink>
    </>
  );
};

export default Link;
