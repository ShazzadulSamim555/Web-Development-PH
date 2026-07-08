import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-2">
        <img src={logo} alt="" />
        <p className="text-gray-500 font-semibold">Journalism Without Fear & Favour</p>
        <p className="font-semibold text-accent">
          <span className="text-black font-semibold">{format(new Date(),"EEEE, ")}</span>
          <span>{format(new Date(),"MMMM dd yyyy")}</span>
        </p>
      </section>
    </div>
  );
};

export default Header;
