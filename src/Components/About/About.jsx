import React from "react";
import "./About.css";
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

  const achievements = [
    "Academic Excellence Award",
    "3rd Position in HackHound 8.0",
    "Brij Gala Goel Award for Topper in Mathematics",
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
              Greetings! My name is Eshaan Gupta and i am currently pursuing
              B.Tech in Artificial Intelligence and Machine Learning from
              GGSIPU, East Delhi Campus, University School of Automation and
              Robotics.
            </p>
            <p>
              I completed my schooling from Mount St' Mary's School, Delhi
              Cantt. I love to work on new technologies and learn to evolve in
              this everchanging technical world.
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

      <h3 id="experience" className="about-achievement-heading">
        Experience
      </h3>

      <div className="about-experience">
        <div className="about-experience-card">
          <p className="experience-heading"> 6 months Intership</p>
          <p className="experience-text">
            Served as a intern in dant villa dental clinic and made the clinic's
            website from scratch using HTML/CSS and JavaScript
          </p>
        </div>

        <div className="about-experience-card">
          <p className="experience-heading">Core Photographer at Darpan</p>
          <p className="experience-text">
            As a member of the The Darpan, the photography and media team of
            GGSIPU, EDC, USAR, I have covered many events that have happened in
            the college
          </p>
        </div>

        <div className="about-experience-card">
          <p className="experience-heading">
            {" "}
            The General Secretary of The Matrix Clan
          </p>
          <p className="experience-text">
            The Matrix Clan is the technical club of Mount St' Mary's School. I
            had the privealage to serve as the General Secretary for the year
            2022-2023
          </p>
        </div>

        <div className="about-experience-card">
          <p className="experience-heading">The Matrix Ecomm Buzz organiser</p>
          <p className="experience-text">
            As the General Secretary, I along with my team organised a technical
            competition. I was the incharge of A/V Sync and Digital Imaging and
            Photography competition
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
