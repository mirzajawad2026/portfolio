import React from "react";
import "../styles/global.css";

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.JS", "Git", "GitHub", "Node.js", "Bootstrap", "Python", "Express.JS"];

  return (
    <section id="skills" data-aos="fade-up">
      <h2 className="section-title">Skills</h2>

      <div className="skills-row">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="skill-pill"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // stagger effect
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
