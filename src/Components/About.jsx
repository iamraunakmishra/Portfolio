import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
function Contact() {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      console.log("Form Submitted:", formData);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="w-full min-h-screen mt-[-25vh] bg-zinc-900 flex flex-col items-center py-10 px-4">
      <h1 className="text-center text-4xl md:text-5xl text-zinc-400 mb-8">
        Contact Me
      </h1>

      {submitted ? (
        <div className="text-green-500 text-lg font-semibold">
          Thank you for reaching out! I'll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 p-6 rounded-xl shadow-lg w-full max-w-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-purple-500 transition"
          >
            Send Message
          </button>
        </form>
      )}
         <div className="flex gap-6 justify-center mt-5 text-[90px]">
         <a href="https://www.linkedin.com/in/raunak-mishra-11b191252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="" rel="">
         <FaLinkedin />
        </a>
        <a href="mailto:raunakmishra201004@gmail.com">
        <IoMdMail />
        </a>
    </div>
  </div>
  );
}

export default Contact;
