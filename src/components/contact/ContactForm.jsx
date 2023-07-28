import React, { useRef } from "react";
import "./contactForm.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yr728p2",
        "template_czg0jvi",
        form.current,
        "xsjkPa0kVD3RyEags"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} ref={form}>
        <div className="input-container">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="user_name"
            required
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="user_email"
            required
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            required
          />
        </div>
        <div className="send-button-container">
          <button className="send-button" type="submit" value="Send">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
