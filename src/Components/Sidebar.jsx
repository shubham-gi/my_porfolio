import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import profilePhoto from "../assets/profilePhoto.jpg";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import home from "../assets/home.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import project from "../assets/project.png";
import menuPhoto from "../assets/menu.png";
const Sidebar = () => {
  const [isMobile, setisMobile] = useState(false);
  const [menu, setmenu] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setisMobile(mediaQuery.matches);
    const handleMediaChange = (e) => {
      setisMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <div className="sideContainer">
      <div className={`menu `}>
        <img src={menuPhoto} alt="menu" className="menuPhoto" />
      </div>
    </div>
  );
};

export default Sidebar;
