import React from "react";
import PopularDestination from "./PopularDestination";


const Front = () => {
  return (
    <>
      <div
        className=" animate__animated animate__fadeInLeft relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/train.Gif')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Explore the world with us
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Discover new destinations, experience different cultures, and make
            unforgettable memories.
          </p>
          <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
      <PopularDestination />
    </>
  );
};

export default Front;
