import React, { useRef, useState } from "react";
import "./contactForm.scss";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("Send");

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        setFormStatus("Success");
      })
      .catch((error) => {
        console.log(error.text);
        setFormStatus("Error");
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
            {formStatus}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
