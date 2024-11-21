import React from "react";
import { Link } from "react-router-dom";

function NavItem({ text, link }) {
  return (
    <Link to={link}>
      <li className="text-3xl font-bold hover:text-red-600 cursor-pointer">
        {text}
      </li>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-black px-[3rem] p-[2rem] flex justify-between items-center ">
      <div>
        <h1 className="text-5xl font-bold text-white hover:text-red-600 cursor-pointer">
          <Link to={"/"}>HIS</Link>
        </h1>
        <p className="text-gray-400 font-semibold text-2xl">
          Home Inventory System
        </p>
      </div>
      <ul className="flex text-white gap-[4rem]">
        {/* <NavItem text="Home" link={"/"} /> */}
        <NavItem text="Inventory" link={"/inventory"} />
        <NavItem text="Profile" link={"/profile"} />
      </ul>
    </nav>
  );
}
