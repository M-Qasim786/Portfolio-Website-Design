import React, { useState } from "react";
import { CarasoulItem } from "../data/CarasoulItem";
import "./Services.css";

const Services = () => {
  const [item, setItem] = useState(CarasoulItem);
  return (
    <>
      <div className="color">
    
        <h6> h</h6>{" "}
      </div>
      <div className="services-div" id='services'>
        <div className="services-content">
          <div className="text">
            <h6>SERVICES</h6>
            <h4>What Can I Do For You?</h4>
            <p>
              Lorem ipsum Do commodo in proident enim in dolor cupidatat
              adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
              ipsum Consectetur ut in in eu do.
            </p>
          </div>
          <div className="carrousel">
            <input type="radio" name="slides" id="radio-1" checked />
            <input type="radio" name="slides" id="radio-3" />
            <input type="radio" name="slides" id="radio-4" />
            <input type="radio" name="slides" id="radio-5" />
            <input type="radio" name="slides" id="radio-6" />
            <input type="radio" name="slides" id="radio-7" />

            <ul className="slides">
              {item.map(({ id, icon, heading, text }) => (
                <li className="slide" key={id}>
                  <i
                    className=" carasoul-icon fa fa-globe"
                    aria-hidden="true"
                  ></i>
                  {/* <span>{icon}</span> */}
                  <h5>{heading}</h5>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <div className="slidesNavigation">
              <label for="radio-1" id="dotForRadio-1"></label>
              <label for="radio-3" id="dotForRadio-3"></label>
              <label for="radio-4" id="dotForRadio-4"></label>
              <label for="radio-5" id="dotForRadio-5"></label>
              <label for="radio-6" id="dotForRadio-6"></label>
              <label for="radio-7" id="dotForRadio-7"></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
