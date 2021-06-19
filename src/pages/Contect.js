import React from "react";
import "./Contect.css";
import Button from "@material-ui/core/Button";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
// import Modal from '../components/Modal';
const Contect = () => {
  return (
    <>
      <div className="contect-div" id='contect'>
        <div className="contect_content">
          <h6>CONTACT</h6>
          <h4>I'd Love To Hear From You.</h4>
          <p>
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
          <form>
            <input type="text" className="input-field" placeholder="Name" />
            <input type="text" className="input-field" placeholder="Email" />
            <input type="text" className="input-field" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="20"
              rows="6"
              placeholder="Message"
              className="input-field"
            ></textarea>
          </form>
          <Button
            variant="contained"
            color="secondary"
            className="submit-btn mt-4"
          >
            Submit
          </Button>
        </div>
        <div className="contect-social-media-icon">
          <div className="social-icon">
            <RoomIcon className="contect-icons" />
            <h6>WHERE TO FIND ME</h6>
            <p className="contect-text">
              1600 Amphitheatre Parkway Mountain View, CA 94043 US
            </p>
          </div>
          <div className="social-icon">
            <EmailIcon className="contect-icons" />
            <h6>EMAIL ME AT</h6>
            <p className="contect-text">qasimshabbir181@gmail.com</p>
          </div>
          <div className="social-icon">
            <PhoneInTalkIcon className="contect-icons" />
            <h6>WHERE TO FIND ME</h6>
            <p className="contect-text">
              Phone: (+63) 555 1212 Mobile: (+63) 555 0100 Fax: (+63) 555 0101
            </p>
          </div>
        </div>
        <div className="social-div">
          <LinkedInIcon className="footer-icons" />
          <InstagramIcon className="footer-icons" />
          <GitHubIcon className="footer-icons" />
          <FacebookIcon className="footer-icons" />
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#fff",
            margin: "0px",
            padding: "20px 0px",
          }}
        >
          © Copyright 2021 | Design by styleshout | Distributed by themewagon
        </p>
      </div>
      {/* <Modal/> */}
    </>
  );
};

export default Contect;
