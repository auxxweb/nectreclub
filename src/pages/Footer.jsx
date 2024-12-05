import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"; // Make sure you have react-icons installed

const Footer = () => {
  return (
    <div className="mt-32">
      {/* Footer Container */}
      <div className="flex items-center justify-between overflow-x-hidden lg:px-12 py-6 flex-wrap">
        {/* First Div (Logo) */}
        <div className="flex items-center w-full md:w-1/3 mb-4 lg:mb-0 flex-col ">
          <img src="/logo.png" alt="Logo" className="h-15 lg:w-[220px] justify-center" />
        </div>

        {/* Second Div (Social Media Links) */}
        <div className="flex space-x-6 w-full md:w-1/3 justify-center mb-4 lg:mb-0">
          
          <a href="https://facebook.com" className="text-black">
            <FaFacebookF size={34} />
          </a>
          <a href="https://wa.me" className="text-black">
            <FaWhatsapp size={34} />
          </a>
          <a href="https://instagram.com" className="text-black">
            <FaInstagram size={34} />
          </a>
          <a href="https://linkedin.com" className="text-black">
            <FaLinkedinIn size={34} />
          </a>
          <a href="https://youtube.com" className="text-black">
            <FaYoutube size={34} />
          </a>
        </div>

        {/* Third Div (Description, Email Input, Signup Button) */}
        <div className="flex items-center space-x-4 w-full lg:w-1/3 justify-center">
          <div className="text-black text-[15px] space-x-4 space-y-4 ">
            <h3 className="mx-4">Sign up to be the first to join our exclusive club to access our new contents</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 h-12 border rounded-md border-black"
            />
            <button className="bg-black h-12 font-bold text-white px-6 py-2 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
