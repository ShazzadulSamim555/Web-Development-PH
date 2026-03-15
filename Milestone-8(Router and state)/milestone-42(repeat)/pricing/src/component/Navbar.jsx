import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "/services" },
  { id: 3, name: "Tickets", path: "/tickets" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "About Us", path: "/about" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = navLinks.map((link) => <Link link={link}></Link>);

  return (
    <div className="flex justify-between items-center mx-5">
      <span onClick={() => setMenu(!menu)} className="md:hidden flex gap-3">
        {menu ? <X /> : <Menu></Menu>}
        <ul className={`md:hidden bg-blue-50 p-3 rounded-lg space-y-1 ${menu? "top-10": "-top-40"} absolute duration-1000`}>
            {
                links
            }
        </ul>
      </span>

      <div>
        <h3 className="text-xl font-semibold">Custom</h3>
      </div>

      <ul className="md:flex hidden">{links}</ul>

      <button className="btn btn-dash btn-primary">sign in</button>
    </div>
  );
};

export default Navbar;
