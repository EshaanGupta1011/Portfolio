import React from "react";
import "./About.css";
import "./media-query.css";
import "../../index.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import row from "../../assets/skills-content.js";

const About = () => {
  const skills = [
    "HTML/CSS",
    "ReactJs",
    "JavaScript",
    "Python",
    "Machine Learning",
    "Figma Designing",
  ];

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-para">
          <p>
            Greetings! My name is Eshaan Gupta and I am currently pursuing
            B.Tech in Artificial Intelligence and Machine Learning from GGSIPU,
            East Delhi Campus, University School of Automation and Robotics.
          </p>
          <p>
            I completed my schooling from Mount St' Mary's School, Delhi Cantt.
            My core interests lie in studying emerging technologies and
            implementing them in this era of technological dynamism.
          </p>
        </div>

        <div className="Marquee">
          <div className="MarqueeGroup">
            {row.map((el) => (
              <div className="ImageGroup" key={el.index}>
                <img src={el} className="Image" />
              </div>
            ))}
          </div>
          <div className="MarqueeGroup">
            {row.map((el) => (
              <div className="ImageGroup" key={el.index}>
                <img src={el} className="Image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
