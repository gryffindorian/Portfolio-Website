import React from "react";
import profile from "./images/cropped_image.png";

export default function About() {
  return (
    <div className="profile" id="about">
      <h2 className="aboutTitle">About Me</h2>
      <div className="innerContainer">
        <div className="leftContainer">
          <p className="intro">
            I am a Ananya Jain, a final year student at NIT Surat, blending tech
            passion with competitive coding finesse. I design and develop the
            web's next big thing! 💻✨🚀
          </p>
        </div>
        <div className="rightContainer">
          <img src={profile} className="profile-pic" alt="" />
        </div>
      </div>
    </div>
  );
}
