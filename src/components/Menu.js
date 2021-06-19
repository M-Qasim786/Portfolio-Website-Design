import React from "react";
// import { NavLink } from "react-router-dom";
import {HashLink as NavLink} from 'react-router-hash-link';
import "./Menu.css";
const Menu = () => {
  return (
    <>
      <nav role="navigation" >
        
        <div id="menuToggle">
          
          <input type="checkbox" />
          
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <NavLink  smooth
                className="nav-links"
                activeClassName="active-class"
                to="#home"
                exact
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink smooth
                className="nav-links"
                activeClassName="active-class"
                to="#about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink smooth
                className="nav-links"
                activeClassName="active-class"
                to="#resume"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink smooth
                className="nav-links"
                activeClassName="active-class"
                to="#portfolio"
              >
                Portfolio
              </NavLink>
            </li>
           
            <li>
              <NavLink smooth
                className="nav-links"
                activeClassName="active-class"
                to="#services"
              >
                Services
              </NavLink>
            </li>
           
           
            <li>
              <NavLink smooth
                className="nav-links"
                activeClassName="active-class"
                to="#contect"
              >
                Contect
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
