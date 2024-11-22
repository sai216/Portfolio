import React from 'react';
import './Hero.css';
import profileImg from '../../assets/man2.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1>Saikiran Goud Tirumani</h1>
        <h2>Full-Stack Developer</h2>
        <p>
          Passionate about crafting innovative solutions with expertise in React, Node.js, Python, MongoDB, and more. Let’s bring your ideas to life!
        </p>
        <button onClick={() => document.getElementById('contact').scrollIntoView()}>Contact Me</button>
      </div>
      <div className="hero_img">
        <img src={profileImg} alt="Saikiran Goud Tirumani" />
      </div>
    </div>
  );
};

export default Hero;
