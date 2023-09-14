import React, { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Number:", number);
    console.log("Message:", message);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    setFirstName("");
    setLastName("");
    setNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-blue-500 p-4 sm:p-6 md:p-8 lg:p-10">
      <form className="text-white" onSubmit={handleSubmit}>
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
          Contact Us
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-3 mb-4 w-full sm:w-1/2"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-3 mb-4 w-full sm:w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-3 mb-4 w-full sm:w-1/2"
        />
        <input
          type="number"
          name="number"
          placeholder="Your Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-3 mb-4 w-full sm:w-1/2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-white text-blue-500 border border-blue-500 rounded py-2 px-3 mb-4 w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white rounded py-2 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          Send Message
        </button>
        {showPopup && (
          <div className="text-white mt-4 bg-blue-500 p-2 rounded">
            Message Sent!
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
