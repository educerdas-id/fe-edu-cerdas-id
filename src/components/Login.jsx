import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Both username and password are required!");
      return;
    }

    if (username === "user" && password === "123") {
      navigate("/u");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 font-montserrat md:px-0 px-6">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm ">
        <div className="flex justify-center mb-6">
          <img
            src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748143990/eduCerdas_m6bhbw.svg"
            alt="educerdas.id"
            className=" h-20 mt-4 mb-6"
          />
        </div>

        <form onSubmit={handleSubmit} className=" space-y-3">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            ></label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full  py-3  border text-black pl-6 placeholder:font-montserrat placeholder:text-sm rounded-3xl bg-[#ECE6F0] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium pl-4 "
            ></label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-3 border pl-6 text-black placeholder:font-montserrat bg-[#ECE6F0] rounded-3xl  focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder:text-sm"
            />
          </div>

          {error && (
            <div className="text-red-500 text-xs text-center justify-center">
              <p>{error}</p>
            </div>
          )}

          <div className="flex justify-center items-center pt-16">
            <button
              type="submit"
              className="px-16 py-3  bg-[#ECE6F0] text-sm  text-black rounded-3xl hover:bg-[#E8E2EC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login!
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="/sign-up" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
