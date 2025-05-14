import React from "react";

const About = () => {
  return (
    <div className="container mx-auto w-9/12 mt-28 text-center my-12">
      {/* Our Story Section */}
      <div className="animate__animated animate__fadeInLeft bg-green-100 py-6 px-4 sm:px-8 md:px-11 mb-5 rounded-full transform transition duration-300 hover:scale-105 hover:bg-green-300 hover:text-white ">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Our Story of Tourism
        </h2>
        <p className="text-xl md:text-xl">
          Welcome to our religious tourism website! We are dedicated to guiding
          you through some of the world's most sacred destinations. Explore
          historic sites, temples, churches, and other religious landmarks that
          have inspired countless individuals over the centuries.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="animate__animated animate__fadeInRight bg-green-100 py-6 px-4 sm:px-8 md:px-11 mb-5 rounded-full transform transition duration-300 hover:scale-105 hover:bg-green-300 hover:text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-xl md:text-xl">
          Our mission is to provide meaningful travel experiences that enrich
          your spiritual journey and deepen your understanding of diverse
          cultures and traditions.
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="animate__animated animate__fadeInLeft bg-green-100 py-6 px-4 sm:px-8 md:px-11 mb-5 rounded-full transform transition duration-300 hover:scale-105 hover:bg-green-300 hover:text-white">
        <h2 className="text-xl md:text-2xl font-bold mb-4">What We Offer</h2>
        <p className="text-xl md:text-xl">
          Whether you are planning a pilgrimage, seeking inspiration, or simply
          curious about the spiritual heritage of different communities, our
          platform is here to guide you.
        </p>
      </div>
    </div>
  );
};

export default About;
