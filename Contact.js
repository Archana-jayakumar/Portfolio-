import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Let's connect! Whether it's a project, a job opportunity, or just to say hi, I'm always open to discussions.</p>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p><strong>Email:</strong> <a href="mailto:Archana.j@ust.com">Archana.j@ust.com</a></p>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <p><strong>Phone:</strong> <a href="tel:+919562346005">+91 95623 46005</a></p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p><strong>Location:</strong> Kochi, Kerala, India</p>
        </div>
        <div className="contact-item">
          <FaClock className="icon" />
          <p><strong>Available:</strong> Mon - Fri (9:00 AM - 6:00 PM IST)</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="social-links">
        <h3>Connect with me</h3>
        <a href="https://github.com/Archana-jayakumar" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/archana-j-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      {/* Footer with Insta, Facebook, Twitter */}
      <footer className="footer">
        <p>📞Mobile <FaPhone /> +91 95623 46005</p>
        <div className="footer-icons">
          <a href="https://github.com/Archana-jayakumar" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/archana-j-/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
