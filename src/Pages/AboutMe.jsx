import React from "react";
import Portrait from "./assets/Portrait.jpg";

export default function AboutMe() {
  return (
    <div className="titalcontainer d-flex flex-column align-items-center">
      <div className="aboutme">About me</div>
      <img
        src={Portrait}
        alt="Portrait"
        className="portrait rounded-circle border border-secondary"
      />
      <div className="aboutomar text-center mt-3">
        I am a beginner full-stack developer, experienced in both front-end and
        back-end development. I am passionate about coding and always eager to
        learn new technologies and programming languages. I am determined to
        turn my passion into a successful career, and I am constantly seeking
        opportunities to improve my skills and take on challenging projects. I
        am a quick learner, and I am not afraid to tackle complex problems. I am
        confident that with my dedication and hard work, I can make a positive
        impact in the world of web development.
      </div>
    </div>
  );
}
