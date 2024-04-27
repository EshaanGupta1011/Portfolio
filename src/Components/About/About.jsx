import React from "react";
import "./About.css";
import "./media-query.css";
import "../../index.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_img from "../../assets/about_img.png";

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
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Greetings! My name is Eshaan Gupta and I am currently pursuing
              B.Tech in Artificial Intelligence and Machine Learning from
              GGSIPU, East Delhi Campus, University School of Automation and
              Robotics.
            </p>
            <p>
              I completed my schooling from Mount St' Mary's School, Delhi
              Cantt. My core interests lie in studying emerging technologies and
              implementing them in this era of technological dynamism.
            </p>
          </div>

          <h4 className="skills-heading">My skill set: </h4>

          <div className="about-skills">
            <div className="about-skill">
              {skills.map((value, index) => (
                <p key={index}> {value} </p>
              ))}
            </div>
          </div>
          <div className="flex-centre"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
