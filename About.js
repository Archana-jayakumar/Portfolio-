import React from "react";
import "./About.css";
import profilePic from "./profile.jpg"; // Add an image in the assets folder

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hey, I'm Archana Jayakumar</h1>
        <p>
          A passionate <strong>Software Engineer</strong> specializing in <strong>Full Stack Web Development</strong> &
          <strong> UI/UX Design</strong>.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="timeline">
        <h2>My Journey</h2>
        <div className="timeline-item">
          <span className="date">2024 - Present</span>
          <h3>Developer 1 Software Engineer | UST Global</h3>
          <p>Production Support Role | ServiceNow | 24/7 Support</p>
        </div>
        <div className="timeline-item">
          <span className="date">2023</span>
          <h3>UI/UX Designer | Vexvo Pvt. Ltd.</h3>
          <p>Front-End Development | User-Centered Design</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skill-bar">
          <p>React.js</p>
          <div className="progress"><span style={{ width: "85%" }}></span></div>
        </div>
        <div className="skill-bar">
          <p>Python</p>
          <div className="progress"><span style={{ width: "90%" }}></span></div>
        </div>
        <div className="skill-bar">
          <p>JavaScript</p>
          <div className="progress"><span style={{ width: "80%" }}></span></div>
        </div>
        <div className="skill-bar">
          <p>Java</p>
          <div className="progress"><span style={{ width: "75%" }}></span></div>
        </div>
        <div className="skill-bar">
          <p>C programming</p>
          <div className="progress"><span style={{ width: "90%" }}></span></div>
        </div>
        <div className="skill-bar">
          <p>HTML/CSS</p>
          <div className="progress"><span style={{ width: "90%" }}></span></div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="fun-facts">
        <h2>More About Me</h2>
        <ul>
          <li>📚 I love to read</li>
          <li>⚛️ Love watching Anime</li>
          <li>✈️ Enjoy traveling & exploring new cultures</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
