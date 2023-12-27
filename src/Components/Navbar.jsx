import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../assets/logo1.png";
import profilePhoto from "../assets/profilePhoto.jpg";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import home from "../assets/home.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import project from "../assets/project.png";
import menuPhoto from "../assets/menu.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const newRef = useRef(null);

  const location = useLocation();
  console.log(location.pathname);
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    console.log("button clicked");
    setclicked(true);
  };
  const handleOutsideClick = (e) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setclicked(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });
  return (
    <div className="navbar">
      <div className="left">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="contains" ref={newRef}>
        <div
          className={`menu ${clicked ? "hidden" : ""}`}
          onClick={handleClick}
        >
          <img src={menuPhoto} alt="menu" className="menuPhoto" />
        </div>
        <div className={`dropdown ${clicked ? "" : "hidden"}`}>
          <Link
            to="/"
            class={`item ${location.pathname === "/" ? "active-item" : ""}`}
          >
            <img
              src={home}
              alt=""
              class={`small-logo activeImg ${
                location.pathname === "/" ? "active-img" : ""
              }`}
            />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            class={`item ${location.pathname === "about" ? "active-item" : ""}`}
          >
            <img
              src={about}
              alt=""
              class={`small-logo activeImg ${
                location.pathname === "/about" ? "active-img" : ""
              }`}
            />
            <span>About me</span>
          </Link>
          <Link
            to="/project"
            class={`item ${
              location.pathname === "project" ? "active-item" : ""
            }`}
          >
            <img
              src={project}
              alt=""
              class={`small-logo activeImg ${
                location.pathname === "/project" ? "active-img" : ""
              }`}
            />
            <span>Projects</span>
          </Link>
          <Link
            to="contact"
            class={`item ${
              location.pathname === "contact" ? "active-item" : ""
            }`}
          >
            <img
              src={contact}
              alt=""
              class={`small-logo activeImg ${
                location.pathname === "/contact" ? "active-img" : ""
              }`}
            />
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <div className="right ">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="about" className="nav-item">
          About
        </Link>
        <Link to="project" className="nav-item">
          Projects
        </Link>
        <Link to="/contact" className="nav-item">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
