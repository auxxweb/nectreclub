import React from "react";

const Request = () => {
  return (
    <div
      className="bg-black relative mt-44 lg:w-[59rem] px-4 mx-auto h-[24rem] py-6 rounded-[50px] flex flex-col justify-center items-center"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(169, 169, 169, 0.2) 1px, transparent 1px),  /* Vertical dotted lines */
          linear-gradient(to bottom, rgba(169, 169, 169, 0.2) 2px, transparent 2px)  /* Horizontal dashed lines */
        `,
        backgroundSize: '80px 80px',  // Adjust the size of the grid cells
        backgroundPosition: '0 0, 0 0',  // Ensure proper positioning of the lines
        zIndex: 1,
      }}
    >
      <h1 className="text-white xs:text-[40px] sm:text-[50px] font-canva-sans font-semibold text-center z-10">
        Take the first step toward your next <br />
        breakthrough—join the club today
      </h1>
      <button className="bg-blue-400 w-[250px] h-14 text-white text-[30px] font-semibold rounded-[35px] text-center flex justify-center items-center mt-4">
        Request Access
      </button>
    </div>
  );
};

export default Request;
