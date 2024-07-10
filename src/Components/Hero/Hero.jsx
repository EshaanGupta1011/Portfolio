import React from "react";
import "./Hero.css";
import "./media-query.css";
import profile_img from "../../assets/profile_img.jpg";
import about_img from "../../assets/about_img.png";
import resume from "../../assets/EshaanGupta_Resume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero_bg_img"></div>
      <img src={profile_img} alt="" className="profile_img" />
      <h1>
        <span className="surname">Eshaan Gupta</span>
      </h1>
      <p>
        I am a 3rd year student pursuing B.Tech in Artificial Intelligence and
        Machine Learning.
      </p>
      <div className="hero-action">
        <a href={resume} download className="hero-resume-link">
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
