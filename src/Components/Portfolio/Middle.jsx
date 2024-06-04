import React from "react";
import "./Landing.css";
import SkillSection from "./SkillSection";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import { projectDetails } from "./projectDetails";

//import profile from "./images/cropped_image.png";

function Middle() {
  return (
    <>
      <div className="middle-container">
        <About />

        <hr />

        <SkillSection />

        <div className="projectDiv" id="projects">
          <h2 className="projectTitle">My Projects</h2>
          {projectDetails.map((projects) => (
            <Projects
              key={projects.id}
              title={projects.title}
              description={projects.description}
              image={projects.image}
              tags={projects.tags}
              github={projects.github}
            />
          ))}
        </div>
        {/* <div className="skill-row s1">
          <img className="girl" src="images/programmer.png" alt="" />
          <h3>Programmer</h3>
          <p style={{ color: "white" }}>
            I am a C++ programmer. I have a profound knowledge of DSA and OOPs.
            I am also a developer ,Frontend development is my forte, making
            websites not just functional but visually appealing.{" "}
          </p>
        </div>
        <div className="skill-row s2">
          <img className="boy" src="images/host.png" alt="hosting-img" />
          <h3>Communication</h3>
          <p style={{ color: "white" }}>
            People fancy me for my speaking skills. Whether I'm hosting,
            spinning speeches, anchoring events, or even playing the interviewer
            at guest lectures, I like to turn words into a captivating symphony.
            It's not just my talent; it's my joy ride, and I guarantee you'll
            want a ticket! 🎙️🌟
          </p>
        </div>
        <div className="skill-row s3">
          <img className="cr" src="images/cr.png" alt="" />
          <h3> Content Writing</h3>
          <p style={{ color: "white" }}>
            I enjoy writing engaging captions, blogs, and articles. Passionately
            dedicated to turning words into meaningful and conceptual writings
            during leisure. 🖋️📖
          </p>
        </div> */}

        <hr />

        <Contact />
      </div>
    </>
  );
}

export default Middle;
