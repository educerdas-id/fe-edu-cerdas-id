import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle the link click
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set active link for animation
    setIsMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <div className="bg-white pt-4 md:pt-0 font-montserrat md:border-b-2 md:border-black sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex justify-start">
          <img
            src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748143990/eduCerdas_m6bhbw.svg"
            alt="Logo"
            className="xl:h-24 pl-2 h-10 md:h-18 lg:h-20 select-none pointer-events-none"
          />
        </div>

        <div>
          <div className="flex-grow flex justify-center select-none ">
            <div className="relative w-48 md:w-full md:pt-6">
              <input
                type="text"
                placeholder="Search"
                className="pl-16  md:pl-10 rounded-3xl pr-4 py-1 placeholder-[#49454F] border bg-[#ECE6F0] w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-2 md:translate-y-1 text-[#49454F]" />
            </div>
          </div>
          <div className="hidden sm:flex justify-center pt-6 px-16 select-none ">
            <ul className="flex space-x-10 text-[16px] text-black font-montserrat ">
              <li>
                <Link
                  to="/"
                  className={`relative hover:text-black ${
                    activeLink === "Home" ? "text-black" : ""
                  } `}
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform ${
                      activeLink === "Home" ? "scale-x-100" : "scale-x-0"
                    } transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/worksheets"
                  className={`relative hover:text-black ${
                    activeLink === "worksheets" ? "text-black" : ""
                  }`}
                  onClick={() => handleLinkClick("worksheets")}
                >
                  Worksheets
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform ${
                      activeLink === "worksheets" ? "scale-x-100" : "scale-x-0"
                    } transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className={`relative hover:text-black ${
                    activeLink === "games" ? "text-black" : ""
                  }`}
                  onClick={() => handleLinkClick("games")}
                >
                  Games
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform ${
                      activeLink === "games" ? "scale-x-100" : "scale-x-0"
                    } transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/video-lesson"
                  className={`relative hover:text-black ${
                    activeLink === "video-lesson" ? "text-black" : ""
                  }`}
                  onClick={() => handleLinkClick("video-lesson")}
                >
                  Video Lesson
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform ${
                      activeLink === "video-lesson"
                        ? "scale-x-100"
                        : "scale-x-0"
                    } transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`relative hover:text-black ${
                    activeLink === "about" ? "text-black" : ""
                  }`}
                  onClick={() => handleLinkClick("about")}
                >
                  About Us
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transform ${
                      activeLink === "about" ? "scale-x-100" : "scale-x-0"
                    } transition-transform duration-300`}
                  ></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden sm:flex items-center space-x-8 pb-5">
          {/* Log In Button */}
          <Link to="/login">
            <button
              className={`${
                activeLink === "login"
                  ? "bg-black text-white"
                  : "text-[#49454F]"
              } hover:text-blue-600`}
            >
              Log In
            </button>
          </Link>
          {/* Sign Up Button */}
          <Link to="/sign-up">
            <button
              className={`${
                activeLink === "signup"
                  ? "bg-black text-white"
                  : "bg-blue-500 text-white"
              } px-4 py-1 rounded-2xl hover:bg-blue-600`}
            >
              Sign Up
            </button>
          </Link>
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="sm:hidden flex items-center pr-6 ">
          <FaBars
            className="text-2xl cursor-pointer text-black"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white fixed inset-0 flex flex-col items-start`}
      >
        <div className="flex justify-between items-center w-full pb-5 pr-6 pt-6">
          <div className="pl-2">
            <img
              src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748143990/eduCerdas_m6bhbw.svg"
              alt="Logo"
              className="h-10"
            />
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <Link to="/login">
              <button className="bg-[#F3F3F3] px-4 py-1 rounded-2xl hover:text-blue-600">
                Log In
              </button>
            </Link>

            <Link to="/sign-up">
              <button className="bg-blue-500 text-white px-4 py-1 rounded-2xl hover:bg-blue-600">
                Sign Up
              </button>
            </Link>
          </div>

          <div>
            <FaTimes
              className="text-2xl cursor-pointer ml-4 text-black"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>

        <ul className="space-y-6 text-lg font-montserrat text-black font-semibold text-[22px] pt-2 w-full">
          <li className="border-b-[1px] border-t-[1px] border-black w-full pb-6 pt-6">
            <Link
              to="/"
              className={`relative hover:text-grey ${
                activeLink === "Home" ? "text-black" : ""
              } pl-10 `}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </Link>
          </li>
          <li className="border-b-[1px]  border-black w-full pb-6">
            <Link
              to="/worksheets"
              className={`relative hover:text-black ${
                activeLink === "Worksheets" ? "text-black" : ""
              } pl-10 `}
              onClick={() => handleLinkClick("Worksheets")}
            >
              Worksheets
            </Link>
          </li>
          <li className="border-b-[1px] border-black w-ful pb-6">
            <Link
              to="/games"
              className={`relative hover:text-black ${
                activeLink === "Games" ? "text-black" : ""
              } pl-10`}
              onClick={() => handleLinkClick("Games")}
            >
              Games
            </Link>
          </li>
          <li className="border-b-[1px] border-black w-full pb-6">
            <Link
              to="/video-lesson"
              className={`relative hover:text-black ${
                activeLink === "Video Lesson" ? "text-black" : ""
              } pl-10`}
              onClick={() => handleLinkClick("Video Lesson")}
            >
              Video Lesson
            </Link>
          </li>
          <li className="border-b-[1px] border-black w-full pb-6">
            <Link
              to="/about"
              className={`relative hover:text-black ${
                activeLink === "About" ? "text-black" : ""
              } pl-10`}
              onClick={() => handleLinkClick("About")}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
