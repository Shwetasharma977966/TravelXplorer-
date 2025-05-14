import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert(`Logged in with Email: ${email}`);
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Form Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="animate__animated animate__fadeInRight text-white text-4xl md:text-5xl font-bold mb-6 mt-20">
          Login
        </h1>
        <p className="animate__animated animate__fadeInLeft text-white text-lg mb-8 text-center max-w-2xl">
          Enter your credentials to access your account.
        </p>

        <div className="animate__animated animate__fadeInUp bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-lg">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
