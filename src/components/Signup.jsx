import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !username || !password || !confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newUser = {
      name,
      username,
      password,
    };

    console.log("User Registered:", newUser);

    setError("");
    setSuccess("Registration successful! Redirecting...");

    setTimeout(() => {
      navigate("/u");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 font-montserrat">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img
            src="https://res.cloudinary.com/dncuggzvl/image/upload/v1748143990/eduCerdas_m6bhbw.svg"
            alt="educerdas.id"
            className="h-20 mt-4 mb-6"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full py-3 border pl-6 text-black placeholder:font-montserrat bg-[#ECE6F0] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder:text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full py-3 border pl-6 text-black placeholder:font-montserrat bg-[#ECE6F0] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder:text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-3 border pl-6 text-black placeholder:font-montserrat bg-[#ECE6F0] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder:text-sm"
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full py-3 border pl-6 text-black placeholder:font-montserrat bg-[#ECE6F0] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 placeholder:text-sm"
            />
          </div>

          {error && (
            <div className="text-red-500 text-xs text-center justify-center">
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="text-black text-xs text-center justify-center">
              <p>{success}</p>{" "}
              <span className="loading loading-spinner loading-md"></span>
            </div>
          )}

          <div className="flex justify-center items-center pt-16">
            <button
              type="submit"
              className="px-16 py-3 bg-[#ECE6F0] text-sm text-black rounded-3xl hover:bg-[#E8E2EC] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
