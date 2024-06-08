import React from "react";
import "./Landing.css";
//import profile from "./images/cropped_image.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Top() {
  setInterval(getTime, 1000);
  const curr = new Date().toLocaleTimeString();
  var [Time, setTime] = useState(curr);

  function getTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="top-container">
      <h4 className="hey">
        Hey there!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h4>
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
      <h1 className="timer">{Time}</h1>
    </div>
  );
}

export default Top;
