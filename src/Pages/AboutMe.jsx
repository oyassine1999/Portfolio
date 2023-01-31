import React from "react";
import Portrait from "./assets/Portrait.jpg";


export default function AboutMe() {
  return (
    <div className="titalcontainer">
      <div className="aboutme">About me</div>
      <img src={Portrait} alt="Portrait" />
      <div className="aboutomar">
        Meet Omar, a highly skilled full stack developer who has a passion for
        creating innovative and user-friendly web applications. With a strong
        background in both front-end and back-end development, Omar is able to
        bring projects from concept to reality. He is proficient in a variety of
        programming languages such as JavaScript , and React.js. He is
        experienced in creating responsive and dynamic websites, integrating
        databases, and developing RESTful APIs. Omar's experience with
        full-stack development has enabled him to develop a wide range of
        applications, including e-commerce websites, content management systems,
        and web-based games. He is committed to staying up-to-date with the
        latest web development technologies and is always eager to learn new
        skills.
      </div>
    </div>
  );
}