import React from 'react';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Photography Website",
    description: "A personal photography gallery to showcase original works with smooth transitions and responsive design.",
    image: "/images/photography.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://github.com/Vyoma22/PhotographyWebsite"
  },
  {
    title: "Multi-Sensor Data Logging System",
    description: "Real-time environmental monitoring system built with C++ and Shell scripting.",
    image: "/images/iot.png",
    tech: ["C++", "Shell", "Arduino"],
    link: "https://github.com/Vyoma22/Alert_and_Monitoring_System"
  },
  {
    title: "To-Do List App",
    description: "A minimalist task tracker for creatives using basic web technologies.",
    image: "/images/tasks.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Vyoma22/SimpleToDoList"
  },
  {
    title: "URL Shortener",
    description: "React + Firebase-based tool to shorten links and generate shareable QR codes.",
    live: "https://urlitmini-e4a803abc7fe.herokuapp.com",
    image: "/images/qr.png",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://github.com/Vyoma22/url-shortener"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="section-subtitle">Check out some of my recent work</p>

      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="project" key={idx}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>
              {proj.description}
              {proj.live && (
                <>
                  <br />
                  🌐 <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-link"
                  >
                    Live App
                  </a>
                </>
              )}
            </p>
            <div className="bubbles">
              {proj.tech.map((tech, i) => (
                <span className="bubble" key={i}>{tech}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              <FaGithub className="icon" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
