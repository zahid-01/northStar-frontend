import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    //Khan write the logic here
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-12 mb-8 shadow-md">
      <div className="container mx-auto px-4">
        <div className=" max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Stay up-to-date with our latest products, offers, and news.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-60 px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubscribe}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
