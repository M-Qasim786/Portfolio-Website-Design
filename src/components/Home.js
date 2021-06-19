import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contect from "../pages/Contect";
const Home = () => {
  return (
    <>
      <div className="homepage" id='home'>
        <div className="homepage-content">
          <h5>HELLO, WORLD.</h5>
          <h1>I'm Muhammad Qasim</h1>
          <h6>| FRONT-END DEVELOPER | UI/UX DESIGNER</h6>
          <NavLink  to="/about">
            <button>More About Me &#8681; </button>
          </NavLink>
          <div className="home-social-media-icon">
            <LinkedInIcon className="home-icons" />
            <InstagramIcon className="home-icons" />
            <GitHubIcon className="home-icons" />
            <FacebookIcon className="home-icons" />
          </div>
        </div>
      </div>
      <About />
      <Resume />
      <Portfolio />
      <Services />
      <Contect />
    </>
  );
};

export default Home;
