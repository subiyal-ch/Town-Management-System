import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Replace with your actual admin credentials
    const adminCredentials = {
      email: "admin@example.com",
      password: "admin123",
    };

    if (
      email === adminCredentials.email &&
      password === adminCredentials.password
    ) {
      // Set authenticated state to true
      setIsAuthenticated(true);

      // Redirect to the home page
      navigate("/home");
    } else {
      // Authentication failed
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('https://your-image-url-here.jpg')", // Replace with your image URL
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Sign In</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
