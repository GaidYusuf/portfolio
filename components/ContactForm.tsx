"use client"; // Add this line at the top of your file

import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Gaid'
    }, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
      .then((response) => {
        setIsSubmitted(true); // Set to true on successful submission
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        // Handle errors if needed
        console.error('Error sending message:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow h-32 resize-none"
        />
      </div>
      <button 
        type="submit"
        disabled={isSubmitted} // Disable button if form is submitted
        className={`px-6 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear ${isSubmitted ? 'bg-green-500 hover:bg-green-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-400'}`}
      >
        {isSubmitted ? 'Sent' : 'Send a message'}
      </button>
    </form>
  );
};

export default ContactForm;
