import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-blue-500 text-white">
        {/* Hero Image */}
        <img
          src="homeimg.svg" // Replace with the image URL you want to display
          alt="Hero"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 pb-20 pt-10">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Start learning with no limits!
          </h1>
          <p className="text-lg mb-6 text-left max-w-xl ">
            Fill your curiosity and start learning with interactive worksheets,
            engaging games, and exciting lesson plans. Start exploring our
            libraries designed to make learning fun and effective!
          </p>

          <button className="bg-blue-700 text-white px-6 py-3 rounded-full text-xl font-semibold">
            Explore
          </button>
        </div>
      </div>

      {/* Learning Library Section */}
      <div className="bg-white py-20">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our learning library
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            With thousands of digital and printable resources, find the best
            resource for your student.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl font-semibold">
            Dive right in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
