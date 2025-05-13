import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-name">
            <span className="gradient-text">Vyoma Shah</span>
          </h1>
          <h2 className="hero-title">Building creative solutions through code</h2>
          <p className="hero-description">
            Welcome to my portfolio — I'm Vyoma Shah, a software engineering student driven by curiosity and a love for building real-world solutions through code.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-right">
          <img src="/images/profile.jpg" alt="Vyoma Shah" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
