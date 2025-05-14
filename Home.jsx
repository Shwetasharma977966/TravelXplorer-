import React from 'react'

const Home = () => {
  return (
    <div
      className=" animate__animated animate__fadeInLeft relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/globe.Gif')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Wanderlust Adventures
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Plan Your Trip
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
  );
}

export default Home