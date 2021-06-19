import React, { useState } from "react";
import "./Portfolio.css";
import { project } from "../data/Project";
import Modal from "../components/Modal";
const Portfolio = () => {
  const [cards, setCards] = useState(project);
  return (
    <>
      <div className="portfolio-section" id="portfolio">
        <h6>PORTFOLIO</h6>
        <h4>Check Out Some of My Works.</h4>
        <p>
          Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing
          dolore officia nisi aliqua incididunt Ut veniam lorem ipsum
          Consectetur ut in in eu do.
        </p>
      </div>
      <div className="card-div">
        <div className="project-div">
          {cards.map(({ id, image, text, desc }) => (
            <div key={id} className="project">
              <div className="example">
                <img src={image} alt="project=images" />
                <div className="content">
                  <div className="text">{text}</div>
                  <div className="text2">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
