import React, { useState } from "react";
import "./Contact.css";
import "./media-query.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import AnimationComponent from "../Animation/Animation";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [isFormVisible, setFormVisible] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "609c9d25-2835-4f71-b7e8-a5895a395b11");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      setFormVisible(false);
    }
  };

  const onSubmitAgain = () => {
    setFormVisible(true);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-section-left">
          <h1>Let Us Talk</h1>
          <p>
            Great ideas are shared when two human beings talk. Contact me
            through any of the given links below.
          </p>

          <div className="contact-details">
            <a
              href="https://www.linkedin.com/in/eshaan-gupta-0a97a6247/"
              target="blank"
              className="contact-logo-link"
            >
              <div className="contact-detail">
                <ion-icon
                  name="logo-linkedin"
                  className="contact-logo"
                ></ion-icon>
              </div>
            </a>

            <a
              href="https://github.com/EshaanGupta1011"
              target="blank"
              className="contact-logo-link"
            >
              <div className="contact-detail">
                <ion-icon
                  name="logo-github"
                  className="contact-logo"
                ></ion-icon>
              </div>
            </a>

            <a
              href="mailto:eshaan.gupta.33@gmail.com"
              target="blank"
              className="contact-logo-link"
            >
              <div className="contact-detail">
                <ion-icon
                  name="mail-outline"
                  className="contact-logo"
                ></ion-icon>
              </div>
            </a>
          </div>
        </div>

        {isFormVisible ? (
          <form className="contact-section-right" onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              name="name"
            ></input>
            <label htmlFor="">Your Email-id</label>
            <input
              required
              type="email"
              placeholder="Enter your e-mail id"
              name="email"
            ></input>
            <label htmlFor="">Write your message here</label>
            <textarea
              required
              name="message"
              rows="8"
              placeholder="Enter your message..."
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        ) : (
          <div className="form-submitted">
            <AnimationComponent />
            <p className="contact-form-submitted-text">
              Thank you for your submission!
            </p>
            <button onClick={onSubmitAgain} className="submit-again-button">
              Submit Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
