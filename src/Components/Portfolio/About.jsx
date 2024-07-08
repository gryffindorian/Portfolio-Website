import React from "react";
import profile from "./images/cropped_image.png";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

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
      {/* <Row
        style={{
          justifyContent: "center",
          paddingBottom: "10px",
          width: "85%",
          height: "430px",
          position: "relative",
          color: "#C499F3",
          paddingTop: "50px",
          marginRight: "0px",
        }}
      >
        <h3
          className="project-heading"
          style={{
            paddingTop: "100px",
            paddingBottom: "20px",
            color: "#854CE6",
          }}
        >
          My Contributions
        </h3>
        <GitHubCalendar
          username="gryffindorian"
          blockSize={12}
          blockMargin={4}
          // color="blue"
          fontSize={14}
        />
      </Row> */}
    </div>
  );
}
