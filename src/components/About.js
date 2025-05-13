import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">Get to know more about my background and journey</p>

      <p className="about-description">
        I’m a full stack developer with a growing interest in cloud-native development and scalable system design.
        I enjoy working across the stack — from building clean frontends to deploying secure, reliable backends in the cloud.
      </p>

      <div className="about-cards">
        <div className="info-card glow">
          <h3>Education</h3>
          <p><strong>Bachelor of Engineering in Software Engineering</strong><br />
            Ontario Tech University (2022–Present)</p>
          <div className="education-highlights">
            <p><strong>Honors & Awards:</strong> Achieved Dean/President List for Semester GPA (2022–2024)</p>
            <p>
              <strong>Relevant Courses:</strong> Computer Networks, Data Structures, Systems Programming, Data Management System,
              Software Architecture & Design, Object Oriented Programming, Design & Analysis of Algorithms, Microprocessors & Computer
              Architecture, Software Quality and Project Management
            </p>
          </div>
        </div>

        <div className="info-card glow">
          <h3>Experience</h3>
          <p><strong>Software and Hardware Intern</strong><br />TRYSL Tech (2021)</p>
          <ul className="experience-list">
            <li>Designed a 2-layer PCB for a heart rate monitor using Multisim and Altium.</li>
            <li>Simulated a telecommunications chip with a 4-person team, reducing errors by 35%.</li>
            <li>Re-engineered circuitry, improving signal accuracy and power efficiency by 20%.</li>
            <li>Validated a chip model that accelerated prototyping by 15%.</li>
          </ul>
          <p><strong>Front Staff</strong><br />Mandarin Restaurant (2022–Present)</p>
          <ul className="experience-list">
            <li>Delivered high-quality customer service in a fast-paced, team-driven environment.</li>
            <li>Trained 4 new staff members to ensure smooth onboarding and operations.</li>
            <li>Handled customer interactions in person and over the phone, assisting with orders and inquiries.</li>
            <li>Demonstrated time management and multitasking by supporting staff across multiple responsibilities.</li>
          </ul>
        </div>
        <div className="info-card glow">
          <h3>Leadership</h3>
          <div className="leadership-tags">
            <span className="tag">Peer Leader</span>
            <span className="tag">International Student Leader</span>
            <span className="tag">Peer Mentor</span>
            <ul className="experience-list">
              <li>Supported 55+ incoming students as a Peer Leader, guiding them through orientation and academic transitions.</li>
              <li>Led and organized 2 campus-wide events as an International Student Leader to foster inclusivity and engagement.</li>
              <li>Mentored 2 students closely as a Peer Mentor, assisting with academic planning and campus integration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
