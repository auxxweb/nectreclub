import React, { useState } from "react";
import { submitContactForm } from "../api/axiosApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields");
      return;
    }

    try {
      const response = await submitContactForm({ name, email, phoneNumber: phone, message });

      if (response.status === 201) {
        toast.success("Thank you for your message!");
        setName(""); // Clear the name input field
        setEmail(""); // Clear the email input field
        setPhone(""); // Clear the phone input field
        setMessage(""); // Clear the message input field
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-6 md:p-12">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[500px]">
          <img
            src="https://lightleader.in/wp-content/uploads/2018/11/contactus-background-1024x566.png"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 h-[500px] bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-black focus:border-black sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-black text-white font-bold rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
