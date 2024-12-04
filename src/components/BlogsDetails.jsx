import React from 'react';

const BlogDetails = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Section: Logo and Search */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          
          
          <div className="container flex  items-center gap-4">
      <a href="#" className="logo flex items-center space-x-2">
        <span className="logo-text text-3xl font-bold text-black duration-200">
          NectereClub  
        </span>
        {/* Arrow icon */}
        <span className="text-xl text-black transform transition-all duration-200">
          &#8658; 
        </span>
      </a>
      <a href="#" className="logo">
        <span className="logo-text text-center text-2xl font-semibold text-gray-800 duration-200">
          BlogDetails
        </span>
      </a>
      </div>


        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-full pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="20"
            height="20"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="16" y1="16" x2="22" y2="22" />
          </svg>
        </div>
      </div>





      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Article Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">This new JavaScript operator is an absolute game changer</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-sm">5.2K</span>
            <span className="text-gray-500 text-sm">73</span>
          </div>
        </div>

        {/* Article Image */}
        <img
          src="https://img.freepik.com/free-photo/online-blog_53876-123696.jpg"
          alt="JavaScript operator"
          className="w-full h-72 object-cover rounded-lg shadow-md mb-6"
        />

        {/* Article Body */}
        <p className="text-lg text-gray-700 mb-4">
          An amazing new JavaScript operator has arrived and things are not looking too good for try-catch!
          An amazing new JavaScript operator has arrived and things are not looking too good for try-catch!
          An amazing new JavaScript operator has arrived and things are not looking too good for try-catch!
          An amazing new JavaScript operator has arrived and things are not looking too good for try-catch!
          An amazing new JavaScript operator has arrived and things are not looking too good for try-catch!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          With the new <strong className="text-blue-500">safe assignment operator</strong>, you'll stop writing code like this:
        </p>

        {/* Code Block */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <pre>
            <code>
              {`const [err, res] = await fetch('https://codingbeautydev.com');`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
