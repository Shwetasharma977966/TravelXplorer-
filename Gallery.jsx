import React from "react";

// second
const india = [
  {
    Image: "/Images/i1.jpg",
    title: "Taj Mahal",
  },
  {
    Image: "/Images/i2.jpg",
    title: "Sri Harmandir Sahib",
  },
  {
    Image: "/Images/i3.jpg",
    title: "Jim Corbett National Park",
  },
  {
    Image: "/Images/i4.jpg",
    title: "Hawa Mahal",
  },
  {
    Image: "/Images/i5.jpg",
    title: "Shimla",
  },
  {
    Image: "/Images/i6.jpg",
    title: "Manali",
  },
  {
    Image: "/Images/i7.jpg",
    title: "Rishikesh",
  },
  {
    Image: "/Images/i8.jpg",
    title: "Jaipur",
  },
  {
    Image: "/Images/i9.jpg",
    title: "Akshardham",
  },
  {
    Image: "/Images/i10.jpg",
    title: "Amritsar",
  },
  {
    Image: "/Images/i11.jpg",
    title: "Mehrangarh Fort",
  },
  {
    Image: "/Images/i12.jpg",
    title: "Amber Palace",
  },
  {
    Image: "/Images/i13.jpg",
    title: "Humayun’s Tomb",
  },
  {
    Image: "/Images/i14.jpg",
    title: "Valley of Flowers National Park",
  },
  {
    Image: "/Images/i15.jpg",
    title: "Mussoorie",
  },
  {
    Image: "/Images/i16.jpg",
    title: "Leh",
  },
  {
    Image: "/Images/i17.jpg",
    title: "Goa",
  },
  {
    Image: "/Images/i18.jpg",
    title: "Ranthambore National Park",
  },
  {
    Image: "/Images/i19.jpg",
    title: "Jodhpur",
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      {/* Page Title */}
      <div className="text-center mb-6 mt-20">
        <h1 className="text-4xl font-extrabold text-gray-800  transition transform duration-300 hover:text-3xl hover:scale-100 hover:bg-black hover:text-white">
          Travel Gallery
        </h1>
        <p className="text-gray-600 mt-3">
          Discover the most beautiful and sacred places around the world.
        </p>
      </div>
      <div className="text-2xl mb-4 font-bold text-center hover:text-pink-900 shadow-lg overflow-hidden cursor-pointer transition transform duration-300 hover:text-3xl hover:scale-100">
        <h1>Top Sights in India</h1>
      </div>

      {/* Gallery Grid */}

      <div className=" container mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10">
        {india.map((city, index) => (
          <div
            key={index}
            className="animate__animated animate__fadeInUp rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-300  hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={city.Image}
              alt={city.title}
              loading="lazy"
              className="animate__animated animate__fadeInRight w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-5 bg-white">
              <h4 className="animate__animated animate__fadeInLeft text-xl font-bold text-gray-800 mb-2">
                {city.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
