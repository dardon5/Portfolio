import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="title-container">
        <h1 className="background-title">CONTACT</h1>
        <h1 className="main-title">Get In Touch</h1>
      </div>
      <div className="form-container">
        <h1 className="request">Contact Me</h1>
        <div className="form">
          <form>
            <input type="text" className="box-name" placeholder="Name" />
            <input type="email" className="box-email" placeholder="Email" />
            <input type="number" className="box-phone" placeholder="Phone" />
            <input type="number" className="box-phone" placeholder="Phone" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
