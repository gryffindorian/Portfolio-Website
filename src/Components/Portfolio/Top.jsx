import React from "react";
import "./Landing.css";
import profile from "./images/cropped_image.png";

function Top() {
  return (
    <div className="top-container">
      <h6 className="hey">Hey there!</h6>
      <h1 className="typed1">I'm Ananya Jain</h1>
      <p className="pie typed2">
        a <span className="pro">pro</span>grammer
      </p>
      <a className="btn1" href="">
        My Resume
      </a>
      <a className="btn2" href="mailto:ananyaj000@gmail.com">
        Contact Me
      </a>
      {/* <img src={profile} className="profile-pic" alt="" /> */}
    </div>
  );
}

export default Top;
