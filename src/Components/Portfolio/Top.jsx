import React from "react";
import "./Landing.css";
//import profile from "./images/cropped_image.png";
import { Link } from "react-router-dom";

function Top() {
  return (
    <div className="top-container">
      <h6 className="hey">Hey there!</h6>
      <h1 className="typed1">I'm Ananya Jain</h1>
      <p className="pie typed2">
        a <span className="pro">pro</span>grammer
      </p>
      <Link
        to="https://drive.google.com/file/d/12MMWi1TzpiLmtkexjhjiBdu9O-V1S-Vm/view?usp=drivesdk"
        className="btn1"
      >
        My Resume
      </Link>
      {/* <a
        className="btn1"
        href="https://drive.google.com/file/d/12MMWi1TzpiLmtkexjhjiBdu9O-V1S-Vm/view?usp=drivesdk"
      >
        My Resume
      </a> */}
      <a className="btn2" href="mailto:ananyaj000@gmail.com">
        Contact Me
      </a>
      {/* <img src={profile} className="profile-pic" alt="" /> */}
    </div>
  );
}

export default Top;
