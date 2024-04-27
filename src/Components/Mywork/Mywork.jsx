import React from "react";
import "./Mywork.css";
import "./media-query.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import project1_img from "../../assets/project_1.png";
import project2_img from "../../assets/project_2.png";
import project3_img from "../../assets/project_3.png";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>

      <div className="mywork-container">
        <div className="mywork-box">
          <img src={project1_img} alt="" className="work-img" />
          <p className="work-text">
            A website that makes you guess a random number between 1 to 20.
          </p>
          <a
            href="https://github.com/EshaanGupta1011/GuessTheNumberGame"
            target="blank"
            className="work-link"
          >
            Know more
          </a>
        </div>

        <div className="mywork-box">
          <img src={project2_img} alt="" className="work-img" />
          <p className="work-text">
            Dant Villa Dental Clinic website that users can use to know the
            facilities provided by the doctors. The website not only enhanced
            its visibility, but also attracted many towards oral hygiene.
          </p>
          <a href="https://dantvilla.com/" target="blank" className="work-link">
            Know more
          </a>
        </div>

        <div className="mywork-box">
          <img src={project3_img} alt="" className="work-img" />
          <p className="work-text">
            Machine Learning model that converts sign language to text/speech.
            It aims at social inclusion of speech and hearing impaired
            population.
          </p>
          <a
            href="https://github.com/EshaanGupta1011/Sign2Text"
            target="blank"
            className="work-link"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mywork;
