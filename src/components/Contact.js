import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">Always happy to connect and collaborate.</p>

      <div className="contact-content">
        <div className="contact-info-card">
          <h3>Get in Touch</h3>
          <p><strong>Email</strong></p>
          <p><a href="mailto:vyomajshah@gmail.com">vyomajshah@gmail.com</a></p>

          <p><strong>Social Media</strong></p>
          <div className="social-icons">
            <a href="https://github.com/Vyoma22" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vyoma-shah-24b249231/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:vyomajshah@gmail.com"><FaEnvelope /></a>
          </div>

          <p><strong>Location</strong></p>
          <p>Toronto, Ontario, Canada</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
