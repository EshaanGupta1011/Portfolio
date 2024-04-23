import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero_bg_img"></div>
      <img src={profile_img} alt="" className="profile_img" />
      <h1>
        <span className="surname">Eshaan Gupta</span>
      </h1>
      <p>I am a 2nd year student persuing my B.Tech in AI and ML.</p>
      <div className="hero-action">
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
