import React from 'react';
import './About.css';
import profileImg from '../../assets/man2.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about_left">
        <img src={profileImg} alt="Saikiran Goud Tirumani" />
      </div>
      <div className="about_right">
        <h2>About Me</h2>
        <h3>I'm Saikiran Goud Tirumani, a Passionate Full-Stack Developer</h3>
        <p>
          With a Master’s in Computer Science from Missouri University of Science and Technology, I specialize in designing scalable, innovative solutions. My expertise spans a range of programming languages, databases, and frameworks, including Python, React, Node.js, MongoDB, and Firebase.
        </p>
        <p>
          I have experience as a Software Developer Intern at Radical AI, where I collaborated on full-stack development of AI-driven applications. I also have a strong teaching background, mentoring students in programming and software development. My academic projects reflect a keen focus on real-time communication, efficient algorithms, and accessibility.
        </p>
        <button>Contact Me</button>
      </div>
    </section>
  );
};

export default About;
