import React from "react";
import "../styles/global.css";
import aboutImg from "../assets/images/about-me.webp"; 

function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-image" data-aos="zoom-in">
          <img src={aboutImg} alt="About Me" />
        </div>

        <div className="about-content" data-aos="fade-left">
          <p className="about-text">
            Hi! I’m Mirza Muhammad Jawad Ali Kazmi, a 14-year-old aspiring web
            developer. I’m passionate about coding and love creating websites
            and interactive applications. I’m skilled in HTML, CSS, JavaScript, 
            React.JS, Next.js, Typescript, Node.JS and python I’m exploring React to make 
            dynamic, user-friendly web experiences. I enjoy learning by building 
            real projects and experimenting with new ideas. My goal is to grow as 
            a web developer, work on meaningful projects, and continue improving my
            skills while having fun in the process.
          </p>

          <div className="about-info">
            <span>Intermediate</span>
            <span>React Enthusiast</span>
            <span>Based in Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
