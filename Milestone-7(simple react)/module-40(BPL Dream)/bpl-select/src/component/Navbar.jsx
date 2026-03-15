import React from "react";
import logo from "../assets/logo.png"
import doller from "../assets/download.jpeg"

const Navbar = () => {
  return (
    <div>
      <div class="navbar max-w-[1300px] mx-auto">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">
            <img className="w-[60px] h-[60px]" src={logo} alt="" />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <span>6000000</span>
          <span className="">Coin</span>
          <span>
            <img className="w-[20px]" src={doller} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
