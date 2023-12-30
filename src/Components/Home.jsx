import React from "react";
// import { background1, background2, background3 } from "../assets/background";
import "./Home.css";
const Home = () => {
  // useEffect(() => {
  //   const main=document.querySelector('.main')
  //   const mainBefore=window.getComputedStyle(main,'::before')
  //   mainBefore.setProperty('background',background1)
  //   console.log(mainBefore)
  //   return () => {

  //   };
  // }, []);
  return (
    <>
      <div className="main">
        <div className="intro">
          <p className="fullname">
            <span id="firstname">Shubham</span> Joshi
          </p>
          <p className="iam">I am a Web Developer</p>
        </div>
        <a className="slider" href="#about">
          <div className="sliderIn"></div>
        </a>
      </div>
    </>
  );
};

export default Home;
