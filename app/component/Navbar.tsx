"use client";

import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "./navbar.css";

const Navbar = () => { 
  const [toggle, isToggle] = useState<boolean>(false);

  const toggleHandler = () => {
    console.log("hello world");
    isToggle(!toggle);
    console.log(toggle);
  };

  return (
    <nav className="bg-slate-700 flex justify-between px-7   items-center  w-full h-[10vh]">
      <div className="logo">
        <h1>{"< Adil malik >"}</h1>
      </div>
      <div className="link-list">
        <ul
          className={` hidden  ${
            toggle ? "show " : "hide"
          } `}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
          <li>
            <a href="./service">Service</a>
          </li>
        </ul>
      </div>

      <button onClick={toggleHandler} className="close">
        {toggle ? <Icon.XLg /> : <Icon.List />}
      </button>
    </nav>
  );
};

export default Navbar;
