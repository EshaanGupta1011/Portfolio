import React from "react";
import "./Mywork.css";
import "./media-query.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import project1_img from "../../assets/project_1.png";
import project2_img from "../../assets/project_2.png";
import project3_img from "../../assets/project_3.png";
import mywork from "../../assets/mywork.js";
import Accordion from "../Accordion/Accordion.jsx";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>

      <div>
        <div className="mywork-cards">
          {mywork.map((value, index) => (
            <div key={index} className="work-card-indv">
              <img src={value.img} alt="" className="work-img" />
              <p className="work-text">{value.text}</p>
              <Accordion items={value.accordionItems} />
              <a href={value.link} target="blank" className="work-link">
                Go to link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mywork;
