"use client";

import { useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { motion } from "framer-motion"
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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{"< Adil malik >"}</h1>
        </motion.div>
      </div>
      <div className="link-list">
        <ul
          className={` hidden  ${toggle ? "show " : "hide"
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
