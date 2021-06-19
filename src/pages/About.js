import React from "react";
import "./About.css";
import image from "../images/face.jpg";
import Progress from "../pages/Progress";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="aboutpage" id='about'>
        <div className="about-image">
          <img src={image} alt="men-img" />
        </div>
        <div className="about-content">
          <h6>About</h6>
          <h4>Let me introduce myself.</h4>
          <p>
            Lorem ipsum Exercitation culpa qui dolor consequat exercitation
            fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
            sunt id pariatur Duis laboris amet exercitation veniam labore
            consectetur ea id quis eiusmod.
          </p>
        </div>
      </div>
      <div className="aboutpage-div">
        <div className="profile">
          <h4>Profile</h4>
          <p>
            Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse
            in magna sint minim officia consectetur nisi commodo ea magna
            pariatur nisi cillum.
          </p>
          <h5>FULLNAME:</h5>
          <p>Muhammad Qasim</p>
          <h5>BIRTH DATE:</h5>
          <p>December 17,1999</p>
          <h5>JOB:</h5>
          <p>Freelancer, Frontend Developer</p>
          <h5>WEBSITE:</h5>
          <p>www.kardswebsite.com</p>
          <h5>EMAIL:</h5>
          <p>qasimshabbir181@gmail.com</p>
          <NavLink to="/contect">
            <button>HIRE ME</button>
          </NavLink>
        </div>
        <div className="skills">
          <h4>SKILLS</h4>
          <p>
            Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse
            in magna sint minim officia consectetur nisi commodo ea magna
            pariatur nisi cillum.
          </p>
          <h6>HTML</h6>
          <Progress percentage="90%" />
          <h6>CSS3</h6>
          <Progress percentage="80%" />
          <h6>JQUERY</h6>
          <Progress percentage="70%" />
          <h6>WORDPRESS</h6>
          <Progress percentage="60%" />
          <h6>REACT-JS</h6>
          <Progress percentage="60%" />
          <NavLink to="/resume">
            <button>DOWNLOAD CV</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default About;
