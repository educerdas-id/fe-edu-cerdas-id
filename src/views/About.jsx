import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-full h-screen flex items-center justify-center">
        <h1>Welcome to the About Page!</h1>
      </div>
    </div>
  );
};

export default About;
