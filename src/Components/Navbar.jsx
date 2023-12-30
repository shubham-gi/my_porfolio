import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
// import logo from "../assets/logo1.png";
// import profilePhoto from "../assets/profilePhoto.jpg";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import home from "../assets/home.png";
// import twitter from "../assets/twitter.png";
// import linkedin from "../assets/linkedin.png";
// import instagram from "../assets/instagram.png";
import project from "../assets/project.png";
import menuPhoto from "../assets/menu.png";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
  const newRef = useRef(null);
  const [active, setActive] = useState("");
  
  const [clicked, setclicked] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  const handleClick = () => {
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
  useEffect(() => {
    const onScroll=()=>{
      if(window.scrollY>780){
        setisScrolled(true)
      }
      else setisScrolled(false)
    }
    
    window.addEventListener('scroll',onScroll);
    return () => {
      window.removeEventListener('scroll',onScroll)
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`navbar ${isScrolled?"scroll":''}`}>
      <div className="left ">
        <img src={logo} alt="" className="logo" />
        
      </div>
      <div className="contains" ref={newRef}>
        <div
          className={`menu ${clicked ? "hidden" : ""} ${isScrolled?"dark":''}`}
          onClick={handleClick}
        >
          <img src={menuPhoto} alt="menu" className="menuPhoto" />
        </div>
        <div className={`dropdown ${clicked ? "" : "hidden"} ${isScrolled?"scroll":''}`} >
          <Link
            to="/"
            className={`item ${active === "" ? "active-item" : ""}`}
            onClick={()=>{
              setActive("")
              window.scrollTo(0,0);
            }}
          >
            <img
              src={home}
              alt=""
              className={`small-logo activeImg ${
                active === "" ? "active-img" : ""
              }`}
            />
            <span>Home</span>
          </Link>
          <a
            href="#about"
            className={`item ${active === "about" ? "active-item" : ""}`}
            onClick={()=>{
              setActive('about')
            }}
          >
            <img
              src={about}
              alt=""
              className={`small-logo activeImg ${
                active === "about" ? "active-img" : ""
              }`}
            />
            <span>About me</span>
          </a>
          <a
            href="#project"
            className={`item ${
              active === "project" ? "active-item" : ""
            }`}
            onClick={()=>{
              setActive('project')
            }}
          >
            <img
              src={project}
              alt=""
              className={`small-logo activeImg ${
                active === "project" ? "active-img" : ""
              }`}
            />
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className={`item ${
              active === "contact" ? "active-item" : ""
            }`}
            onClick={()=>{
              setActive('contact')
            }}
          >
            <img
              src={contact}
              alt=""
              className={`small-logo activeImg ${
                active === "contact" ? "active-img" : ""
              }`}
            />
            <span>Contact</span>
          </a>
        </div>
      </div>

      <div className="right ">
        <Link to="/" className={`nav-item ${active===''?'active':''}`} onClick={()=>{
          setActive('')
          window.scrollTo(0,0);
        }}>
          Home
        </Link>
        <a href="#about" className={`nav-item ${active==='about'?'active':''}`} onClick={()=>{
          setActive('about')
        }}>
          About
        </a>
        <a href="#project" className={`nav-item ${active==='project'?'active':''}`} onClick={()=>{
          setActive('project')
        }}>
          Projects
        </a>
        <a href="#contact" className={`nav-item ${active==='contact'?'active':''}`} onClick={()=>{
          setActive('contact')
        }}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
