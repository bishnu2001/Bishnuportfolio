import React from "react";
import "./About.css";
import Bishnu from "../../assets/bishnuabout.jpg";
import { BiAward } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Bishnu} alt="bishnu" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BiAward className="about_icon" />
              <h5>Experience</h5>
              <small>2.5+ years of Experience</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Projects completed</small>
            </article>
          </div>
          <p>
            Experienced Software Engineer with over 2.5 years of expertise in
            the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in
            optimizing software performance, developing new features, and
            managing both frontend and backend development. Demonstrated ability
            to work independently or within teams to deliver scalable,
            high-performance applications. Strong experience in integrating APIs
            and third-party services, enhancing application architecture, and
            ensuring seamless functionality across the development lifecycle.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
