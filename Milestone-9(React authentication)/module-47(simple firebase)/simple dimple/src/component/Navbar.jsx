import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex gap-3">
      <NavLink to='/' className={({isActive})=> isActive ? "border-b-2 rounded-md px-2 border-blue-600":""}>
        <nav>Home</nav>
      </NavLink>

      <NavLink to='login' className={({isActive})=> isActive ? "border-b-2 rounded-md px-2 border-blue-600":""}><nav>Login</nav></NavLink>
    </div>
  );
};

export default Navbar;
