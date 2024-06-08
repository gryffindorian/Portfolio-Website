import React from "react";
import "./Navbar.css";
import logo from "./images/aj-Photoroom.png";
import { useState } from "react";

export default function Navbar() {
  // const count = 1;

  var [count, setCount] = useState(1);

  function Like() {
    setCount(count + 1);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={logo} alt="" />
      </div>
      <div className="like">
        <button onClick={Like} className="btn3">
          💖 {count}
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        {/* <li>
          <a href="#experience">Experience</a>
        </li> */}
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
