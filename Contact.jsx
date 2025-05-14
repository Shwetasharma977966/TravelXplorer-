import React from "react";

const Contact = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?travel,nature')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="animate__animated animate__fadeInRight text-white text-4xl md:text-5xl font-bold mb-6 mt-20">
          Get in Touch
        </h1>
        <p className="animate__animated animate__fadeInLeft text-white text-lg mb-8 text-center max-w-2xl">
          Have questions or need assistance with your travel plans? Reach out to
          us, and we'll be happy to help!
        </p>

        <div className="animate__animated animate__fadeInUp bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-lg">
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Address */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Number of visitors
              </label>
              <input
                type="number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the number"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
