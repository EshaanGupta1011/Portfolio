import React from "react";
import "./achievement.css";
import "./media-query.css";

const Achievement = () => {
  const achievements = [
    "Academic Excellence Award",
    "3rd Position in HackHound 8.0",
    "Brij Gala Goel Award for Topper in Mathematics",
  ];

  return (
    <div className="section-achievement">
      <h3 id="achievement" className="about-achievement-heading">
        Achievements
      </h3>

      <div className="about-achievements">
        <div className="about-achievement">
          {achievements.map((value, index) => (
            <p key={index} className="achievement-text">
              {" "}
              {value}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievement;
