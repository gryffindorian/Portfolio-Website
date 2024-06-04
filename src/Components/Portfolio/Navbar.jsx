import React from "react";
import "./Navbar.css";
import logo from "./images/aj-Photoroom.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo-image" src={logo} />
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
