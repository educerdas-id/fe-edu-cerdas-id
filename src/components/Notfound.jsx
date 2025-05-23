import React from "react";
import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <div className="bg-white w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-xl"></span>
        <h1 className="text-[30px] font-bold text-center font-poppins text-black mb-4">
          We Will Launch Soon!{" "}
        </h1>
        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-2xl hover:bg-blue-600">
            Back to Home!{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
