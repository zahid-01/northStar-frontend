import React, { useState } from "react";
import classes from "./Contact.module.css";
import MotionComponent from "../Header/Animation";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number:", number);
    console.log("Message:", message);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    setName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <MotionComponent>
      <form className={classes.contactForm} onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          name="number"
          placeholder="Your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className={classes.btn}>
          Send Message
        </button>
        {showPopup && <div className={classes.popup}>Message Sent!</div>}
      </form>
    </MotionComponent>
  );
};

export default ContactForm;
