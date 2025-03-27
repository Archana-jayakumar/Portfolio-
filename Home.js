import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>HEY THERE! 👋</h1>
        <h2>I'm Archana Jayakumar</h2>
        <div className="hero-buttons">
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a <strong>dynamic and innovative B.Tech graduate</strong> in Computer Science with a passion for 
          <strong> web development</strong> and <strong>UI/UX design</strong>. Proficient in 
          <strong> Python, Java, C, and JavaScript</strong>, I specialize in creating engaging digital experiences.
          My problem-solving skills, adaptability, and teamwork abilities make me an effective contributor in any collaborative environment.
        </p>
        <Link to="/about" className="btn">Read More</Link>

        {/* Download Resume Section */}
        <h2>Download My Resume</h2>
        <a href="/ARCHANA-J.pdf" download="ARCHANA-J.pdf" className="btn">
          Download Resume
        </a>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <ul>
          <li>💻 Frontend: React, HTML, CSS, JavaScript</li>
          <li>🛠 Backend: Node.js</li>
          <li>🗄️ Databases: MongoDB, MySQL, SQL, Oracle</li>
          <li>🎨 UI/UX: Figma, Adobe XD</li>
          <li>🔧 Tools: Git, GitHub, VS Code, Jupyter Notebook, Anaconda</li>
          <li>🔡 Languages: Python, C, Java, HTML/CSS, JavaScript</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="job">
          <h3>Developer 1 Software Engineer - UST Global</h3>
          <p><strong>Trivandrum | July 2024 - Present</strong></p>
          <ul>
            <li>Providing 24/7 production support</li>
            <li>Incident resolution and performance monitoring</li>
            <li>Collaboration with cross-functional teams</li>
            <li>ServiceNow for incident documentation & management</li>
          </ul>
        </div>

        <div className="job">
          <h3>Software Intern (UI/UX Designer) - Vexvo Pvt. Ltd.</h3>
          <p><strong>Ernakulam, Kerala | May 2023 - July 2023</strong></p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="degree">
          <h3>B.Tech in Computer Science</h3>
          <p><strong>Muthoot Institute of Technology and Science</strong> | APJAKTU University (2020-2024)</p>
          <p>CGPA: 7.8</p>
        </div>

        <div className="degree">
          <h3>Biomaths (12th Grade)</h3>
          <p><strong>ST George's Higher Secondary School</strong> | Kerala State Board (2018-2020)</p>
          <p>Secured 92% in state board exams.</p>
        </div>

        <div className="degree">
          <h3>High School (10th Grade)</h3>
          <p><strong>ST George Higher Secondary School</strong> | Kerala State Board (2017-2018)</p>
          <p>Secured 100% in state board exams.</p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h2>Certifications</h2>
        <ul>
          <li>✅ Business English Certificate Preliminary - Cambridge Assessment</li>
          <li>✅ Robotic Process Automation Certification - CTS-ICT Tech-For-All</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>🔗 MITS Career Connector (Mini Project)</h3>
          <p>A platform for students to explore career opportunities, prepare for interviews, and seek guidance from seniors.</p>
          <a href="https://github.com/Archana-jayakumar/MITS-CAREER-CONNECTOR" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>🔗 Snake Detection System (KTU Funded Project)</h3>
          <p>An AI-powered system using thermal imaging to detect and alert users about the presence of snakes.</p>
          <a href="https://github.com/Archana-jayakumar/SNAKE-DETECTION-SYSTEM-" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>🔗 WhatsApp Chat Viewer (Tink-Her-Hack)</h3>
          <p>A tool that converts exported WhatsApp chats into a user-friendly format for easy reading.</p>
          <a href="https://github.com/anittapm1708/whatsapp-chat-viewer" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className="project-card">
          <h3>🔗 Tech-Agro (Hackathon Project)</h3>
          <p>An online platform that connects farmers with buyers, built for Magnathon.</p>
          <a href="https://github.com/Archana-jayakumar/tech-agro" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
