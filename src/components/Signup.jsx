import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after login

const Signup = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // For error notification
  const navigate = useNavigate(); // Hook to navigate to other routes

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: check if both fields are filled
    if (!username || !password) {
      setError("Both username and password are required!");
      return;
    }

    // Example authentication logic (you can replace with API call)
    if (username === "user" && password === "123") {
      navigate("/");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src="eduCerdas.svg" alt="Logo" className="w-16 h-16" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm mt-2">
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
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

export default Signup;
