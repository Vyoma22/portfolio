import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills & Expertise</h2>
      <p className="skills-subtitle">Technologies and tools I work with</p>

      <div className="skills-wrapper">
        <div className="card">
          <h3>Programming & Web Development</h3>
          <div className="chip-wrapper">
            {["JavaScript", "TypeScript", "React", "Node.js", "Java", "Python", "C++", "PHP", "HTML", "CSS", "Tailwind CSS", "Firebase", "SQL", "MySQL", "Kubernetes", "Docker"].map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Tools & Technologies</h3>
          <div className="chip-wrapper">
            {["VS Code", "Arduino IDE", "GitHub", "Git", "GCP", "RESTful APIs"].map((tool) => (
              <span key={tool} className="chip">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
