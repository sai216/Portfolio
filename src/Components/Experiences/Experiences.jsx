import React from "react";
import "./Experiences.css";
import { experiences } from "../data";

const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <h2 className="experiences-header">My Professional Experiences</h2>
      <p className="experiences-text">
        Here are some of the key roles I've had in my career.
      </p>
      <div className="experiences-container">
        {experiences.map(({ icon, role, company, period, responsibilities }, index) => (
          <div key={index} className="experience-card">
            <div className="experience-icon">{icon}</div>
            <div className="experience-content">
              <h3 className="experience-role">{role}</h3>
              <h4 className="experience-company">{company}</h4>
              <p className="experience-period">{period}</p>
              <ul className="experience-responsibilities">
                {responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="experiences-button-container">
      <a href="#" className="experiences">View Experiences</a >
     
        <a href="/Resume_Saikiran_Tirumani.pdf" download className="experiences-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Experiences;
