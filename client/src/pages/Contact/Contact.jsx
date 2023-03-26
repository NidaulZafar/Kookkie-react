import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  function handleInputChange(event) {
    setMessage(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Code to submit the message goes here
    console.log(`Message submitted: ${message}`);
  }

  const buttonClass = message
    ? "outer filled-form-button"
    : "outer empty-form-button";

  return (
    <div className="container">
      <h3> Contact Us</h3>
      <p>We'd love to hear from you!</p>
      <p>
        Do you have any suggestions on how to improve our features? Or would you
        like to share how you enjoyed your cooking session? Feel free to do so
        in the form below.
      </p>
      <p>
        In case you wish your favourite recipe to be on our platform, feel free
        to email it to us on contact@kookkie.com
      </p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Type your message below</label>
        <textarea value={message} onChange={handleInputChange} />
        <button type="submit" className={buttonClass}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
