import React from "react";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";

const HomeLogin = () => {
  return (
    <div className="bg-white h-screen">
      <NavbarLogin />
      <div className="relative text-white">
        {/* Hero Image */}
        <img
          src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748017855/homeimg_psgezy.svg" // Replace with the image URL you want to display
          alt="Hero"
          className="w-full h-full object-cover absolute inset-0"
        />

        <div className="relative  max-w-screen-xl mx-auto px-4 pb-12 ">
          <h1 className="text-4xl font-montserrat mb-4 text-center pt-6">
            Start learning with no limits!
          </h1>
          <p className="text-lg mb-6 text-left max-w-xl  pt-4 pl-16 ">
            Fill your curiosity and start learning with interactive worksheets,
            engaging games, and exciting lesson plans. Start exploring our
            libraries designed to make learning fun and effective!
          </p>
          <Link to="/u/worksheets">
            <button className="bg-blue-500 text-white px-20 py-2 ml-16 rounded-full text-xl font-montserrat hover:bg-blue-600">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* Learning Library Section */}
      <div className="">
        <div className="pt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our learning library
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            With thousands of digital and printable resources, find the best
            resource for your student.
          </p>
          <Link to="/u/worksheets">
            <button className="bg-blue-500 text-white px-12 py-2 rounded-full text-xl font-montserrat hover:bg-blue-600">
              Dive right in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeLogin;
