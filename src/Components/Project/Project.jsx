import React from "react";
import "./Project.css";
import { projects } from "../data";

const Project = () => {
  return (
    <section className="project" id="projects">
      <h2 className="project-header">My Portfolio</h2>
      <p className="project-intro">Here are some of the projects I’ve worked on, showcasing my skills in software development, design, and problem-solving.</p>
      <div className="project-items">
        {projects.map(({ image, title, text }, index) => (
          <div className="item" key={index}>
            <div className="info">
              <h4>{title}</h4>
              <p>{text}</p>
              <a href="#" className="view-project">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
