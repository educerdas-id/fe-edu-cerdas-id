import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="relative text-white">
        <img
          src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017855/homeimg_psgezy.svg" // Replace with the image URL you want to display
          alt="Hero"
          className="md:w-full md:h-full h-[380px] object-cover absolute inset-0 fade-in" // Add the fade-in class
        />

        <div className="relative max-w-screen-xl mx-auto px-4 pb-12">
          <h1 className="text-2xl md:text-4xl font-montserrat mb-4 px-16 md:px-0 text-center pt-6 slide-up">
            Start learning with no limits!
          </h1>

          <p className="text-sm md:text-lg mb-6 text-center font-montserrat md:text-left max-w-xl pt-4 px-4 md:px-0 md:pl-16 slide-up">
            Fill your curiosity and start learning with interactive worksheets,
            engaging games, and exciting lesson plans. Start exploring our
            libraries designed to make learning fun and effective!
          </p>

          <Link to="/signup">
            <button className="bg-blue-500 text-white px-16 md:px-20 py-2 ml-20 md:ml-16 rounded-full text- md:text-xl font-montserrat hover:bg-blue-600 ">
              Explore
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white pb-10">
        <div className="pt-20 text-center">
          {/* Library Title with slide-up animation */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 slide-up">
            Our learning library
          </h2>

          <p className="text-lg text-gray-600 mb-10 slide-up bg-white">
            With thousands of digital and printable resources, find the best
            resource for your student.
          </p>

          <Link to="/signup">
            <button className="bg-blue-500 text-white px-12 py-2 rounded-full text-xl font-montserrat hover:bg-blue-600 ">
              Dive right in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
