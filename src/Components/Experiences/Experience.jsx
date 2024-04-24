import React from "react";
import "./experience.css";
import "./media-query.css";
import experience from "../../assets/experience.js";

const Experience = () => {
  return (
    <div className="section-experience">
      <h3 id="experience" className="experience-heading">
        Experience
      </h3>

      <div className="experience-card-grid">
        <div className="experience-card">
          {experience.map((value, index) => (
            <div key={index} className="experience-card-indv">
              <p className="experience-card-heading">{value.title}</p>
              <p className="experience-text">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
