import React from "react";
import { NavLink } from "react-router";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1"></div>
      <div className="flex flex-1 gap-5 justify-center items-center">
        <NavLink to="/" className={({isActive})=> (isActive ? "bg-base-200 px-4 py-2 rounded-lg text-black font-semibold": "text-gray-600")}>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> (isActive ? "bg-base-200 px-4 py-2 rounded-lg text-black font-semibold": "text-gray-600")}>About</NavLink>
        <NavLink to="/career" className={({isActive})=> (isActive ? "bg-base-200 px-4 py-2 rounded-lg text-black font-semibold": "text-gray-600")}>Career</NavLink>
      </div>
      <div className="flex flex-1 justify-end items-center gap-5">
        <FaUserAlt size={25}/>
        <button className="btn btn-primary px-7">LogIn</button>
      </div>
    </div>
  );
};

export default Navbar;
