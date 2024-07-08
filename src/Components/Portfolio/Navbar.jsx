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
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="logo">
        <img className="logo-image" src={logo} alt="" />
      </div>

      <button onClick={Like} className="btn3">
        💖 {count}
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav-links navbar-nav ml-auto">
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
      </div>
    </nav>
  );
}
