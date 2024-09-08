import React from "react";
import "./About.css";
import profilePhoto from "../assets/aboutphoto.png";
import {web,mobile,backend,next} from '../assets/tech'
const cv = require("../assets/resume-v2.pdf");
const About = () => {
  return (
    <div className="about">
      <span id="about"></span>
      <div className="aboutme">
        <p>About me</p>
      </div>
      {/* <div className="myself">
        Hi there, I am Shubham. I am Full Stack web developer, volleyball player and I would like
        to share with you some of my ideas.
      </div> */}
      <div className="introduction">
        <div className="introCol1">
          <div className="aboutBackground">
            About
          </div>
          {/* <p className="subHeading">Introduction</p> */}
          <p className="mainHeading">About Me.</p>
          <p className="subHeading">
            I'm a web developer with experience in JavaScript, and expertise in
            frameworks like Next.Js, React, Node.js and Express.Js . I'm a quick learner and collaborate
            closely with other fellowmates to create efficient, scalable, and
            user-friendly solutions that solve real-world problems. Let's work
            together to bring your ideas to life!
          </p>
          <a href={cv} target="_self" className="primary">
            Download CV
          </a>
        </div>
        <img src={profilePhoto} alt="profilePhoto" className="introCol2" />
      </div>
      <div className="tech">
        <div className="tech-item">
          <img src={next} alt="" className="tech-img"/>
          <p className="tech-name">NextJs <br /> Developer</p>
        </div>
        <div className="tech-item">
          <img src={web} alt="" className="tech-img"/>
          <p className="tech-name">Web <br /> Developer</p>
        </div>
        <div className="tech-item">
          <img src={mobile} alt="" className="tech-img"/>
          <p className="tech-name">ReactJs <br /> Developer</p>
        </div>
        <div className="tech-item">
          <img src={backend} alt="" className="tech-img"/>
          <p className="tech-name">Backend <br /> Developer</p>
        </div>
      </div>
      <div className="ongoingProj">
        <div className="item1">
          <p className="number">5+</p>
          
          <p className="subheading1">Total Projects</p>
        </div>
        <div className="item1">
          <p className="number">1</p>
          
          <p className="subheading1">Ongoing Projects</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
