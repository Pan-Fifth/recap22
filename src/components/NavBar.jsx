import React from "react";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <div className="bg-emerald-200 h-12 px-8 flex justify-center items-center shadow-md">
      <div className="flex gap-6 font-semibold">
        <NavLink to="/" className="hover:text-rose-600">Home</NavLink>
        <NavLink to="register" className="hover:text-rose-600">Register</NavLink>
        <NavLink to="post" className="hover:text-rose-600">Post</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
