import { useState } from "react";
import "./contact.scss";
import ContactForm from "./ContactForm";
import { Person, Mail } from "@material-ui/icons";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="title-container">
        <h1 className="background-title">CONTACT</h1>
        <h1 className="main-title">Get In Touch</h1>
      </div>
      <div className="info-container">
        <ContactForm />

        <div className="contact-info">
          <div className="email-number">
            <div className="logos-container">
              <a
                href="https://github.com/dardon5/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/github-logo.png" alt="Github Logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-dardon-30b850195/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="assets/linkedin.png" alt="Github Logo" />
              </a>
            </div>
            <div className="itemContainer">
              <p>
                <span>Phone: </span>
                +1 (210) 913-5006
              </p>
            </div>
            <div className="itemContainer">
              <p>
                <span>Email: </span>
                alejandro_dardon@hotmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
