import React, { useState } from "react";
import "./Resume.css";
import { ResumeItem } from "../data/ResumeItem";
import { EducationItem } from "../data/EducationItem";
const Resume = () => {
  const [items, setsItems] = useState(ResumeItem);
  const [list, setsList] = useState(EducationItem);
  return (
    <>
      <div className="resume-div" id='resume'>
        <div className="credential">
          <h6>RESUME</h6>
          <h4>More of my credentials.</h4>
          <p>
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
        <h5 className="heading">Work Experience</h5>

        {items.map(({ id, title, date, heading, text }) => (
          <div className="work-experi" key={id}>
            <div className="digrees">
              <h6>{title}</h6>
              <p>{date}</p>
            </div>
            <i
              className=" hat-icon fa fa-graduation-cap"
              aria-hidden="true"
            ></i>
            <div className="experience">
              <h6>{heading}</h6>
              <p>{text}</p>
            </div>
          </div>
        ))}

        <h5 className="heading">Education</h5>
        {list.map(({ id, title, date, heading, text }) => (
          <div className="work-experi" key={id}>
            <div className="digrees">
              <h6>{title}</h6>
              <p>{date}</p>
            </div>
            <i
              className=" hat-icon fa fa-graduation-cap"
              aria-hidden="true"
            ></i>
            <div className="experience">
              <h6>{heading}</h6>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Resume;
