import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo_2.png";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="nav-logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          className="nav-mob-close"
          onClick={closeMenu}
          src={menu_close}
          alt=""
        />
        <li className="nav-menu-items">
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <hr className="nav-underline" /> : <></>}
        </li>
        <li className="nav-menu-items">
          <AnchorLink className="anchor-link" offset={100} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <hr className="nav-underline" /> : <></>}
        </li>
        <li className="nav-menu-items">
          <AnchorLink className="anchor-link" offset={100} href="#achievement">
            <p onClick={() => setMenu("achievements")}>Achievements</p>
          </AnchorLink>
          {menu === "achievements" ? <hr className="nav-underline" /> : <></>}
        </li>
        <li className="nav-menu-items">
          <AnchorLink className="anchor-link" offset={100} href="#experience">
            <p onClick={() => setMenu("experiences")}>Experience</p>
          </AnchorLink>
          {menu === "experiences" ? <hr className="nav-underline" /> : <></>}
        </li>
        <li className="nav-menu-items">
          <AnchorLink className="anchor-link" offset={100} href="#work">
            <p onClick={() => setMenu("work")}>My Work</p>
          </AnchorLink>
          {menu === "work" ? <hr className="nav-underline" /> : <></>}
        </li>
        <li className="nav-menu-items">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <hr className="nav-underline" /> : <></>}
        </li>
      </ul>

      <a
        href="https://www.linkedin.com/in/eshaan-gupta-0a97a6247/"
        target="blank"
        className="nav-connect-btn"
      >
        <div className="nav-connect">Connect With Me</div>
      </a>
    </div>
  );
};

export default Navbar;
