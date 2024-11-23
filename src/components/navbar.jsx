import React, { useEffect, useState } from "react";
import "../index.css"; // Ensure Tailwind is imported and working

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLinksVisible, setIsLinksVisible] = useState(false);
  const [logoBackground, setLogoBackground] = useState("transparent");
  const [logo, setLogo] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Detect scroll position
      if (window.scrollY > 0) {
        setLogoBackground("white");
        setLogo("black");
        setIsLinksVisible(false); // Hide dropdown on scroll
      } else {
        setLogoBackground("transparent");
        setLogo("white");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener
  }, []);

  const handleMouseEnter = () => {
    if (!isScrolled) {
      setLogoBackground("black"); // Change background to black only in non-scrolled state
      setLogo("white");
    }
    setIsLinksVisible(true); // Show the dropdown menu
  };

  const handleMouseLeave = () => {
    if (!isScrolled) {
      setLogoBackground("transparent"); // Reset background for non-scrolled state
      setLogo("white");
    } else {
      setLogo("black");
    }
    setIsLinksVisible(false); // Hide the dropdown menu
  };

  return (
    <div>
      <nav
        className={`navbar ease-in-out fixed top-0 left-0 w-full z-50 ${
          isScrolled ? "text-black p-4" : "bg-transparent text-white"
        } transition-colors duration-300`}
      >
        <div
          className={`flex ${
            isScrolled ? "flex-row items-center justify-between" : "flex-col"
          } w-full`}
          style={{
            backgroundColor: logoBackground,
            transition: "background-color 0.3s ease",
            color: logo,
          }}
        >
          {/* Scrolled Layout */}
          {isScrolled ? (
            <div className="flex w-full items-center justify-between px-4 h-16">
              {/* Menu Button */}
              <button
                className={`px-4 rounded font-canva-sans hover:font-bold ${
                  isScrolled ? "text-black xs:text-[10px] sm:text-[15px]" : "text-white"
                }`}
                onMouseEnter={handleMouseEnter}
              >
                Menu
              </button>

              {/* Logo */}
              <div
                className="font-canva-sans text-center font-bold xs:text-[12px] sm:text-[15px] md:text-[50px] tracking-wide"
                style={{ color: logo }}
              >
                NectereClub
              </div>

              {/* Links */}
              <div
                className={`flex gap-4 font-canva-sans ${
                  isScrolled ? "text-black xs:text-[12px] sm:text-[15px]" : "text-white"
                }`}
              >
                <a href="#blog" className="hover:font-bold">Blog</a>
                <a href="#resources" className="hover:font-bold">Resources</a>
                <a href="#login" className="hover:font-bold">Login</a>
              </div>
            </div>
          ) : (
            // Non-Scrolled Layout
            <>
              {/* Logo */}
              <div
                className={`font-canva-sans navbar-logo ${
                  isScrolled
                    ? "text-black font-bold xl:text-[40px] lg:tracking-[5px]"
                    : "text-white font-bold xs:text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] xl:text-[170px] lg:tracking-[30px] lg:ml-[20px] justify-center flex "
                }`}
              >
                NectereClub
              </div>

              {/* Menu and Links */}
              <div className="flex justify-between w-full px-4">
                <button
                  className={`px-4 rounded font-canva-sans hover:scale-110 transition-transform duration-200 hover:font-bold${
                    isScrolled ? "text-black " : "text-white"
                  }`}
                  onMouseEnter={handleMouseEnter}
                >
                  Menu
                </button>
                <div
                  className={`flex gap-4 font-canva-sans  ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  <a href="#blog" className="hover:scale-110 transition-transform duration-200 hover:font-bold">Blog</a>
                  <a href="#resources" className="hover:scale-110 transition-transform duration-200 hover:font-bold">Resources</a>
                  <a href="#login" className="hover:scale-110 transition-transform duration-200 hover:font-bold">Login</a>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Dropdown */}
        {isLinksVisible && (
          <div
            className="font-canva-sans grid grid-cols-4 gap-4 items-center p-4 text-white bg-black transition-all duration-300 ease-in-out overflow-auto max-h-[11rem]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-center">
              <a href="#request-submit" className="py-2 block">
                Request Submit
              </a>
              <a href="#request-submit" className="py-2 block">
                Request Submit
              </a>
              <a href="#request-submit" className="py-2 block">
                Request Submit
              </a>
            </div>
            <div className="text-center">
              <a href="#home" className="py-2 block">
                Home
              </a>
              <a href="#home" className="py-2 block">
                Home
              </a>
              <a href="#home" className="py-2 block">
                Home
              </a>
            </div>
            <div className="text-center">
              <a href="#services" className="py-2 block">
                Services
              </a>
              <a href="#services" className="py-2 block">
                Services
              </a>
              <a href="#services" className="py-2 block">
                Services
              </a>
            </div>
            <div className="text-center">
              <a href="#about" className="py-2 block">
                About
              </a>
              <a href="#about" className="py-2 block">
                About
              </a>
              <a href="#about" className="py-2 block">
                About
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
