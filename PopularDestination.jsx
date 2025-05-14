import React from 'react'

const destinations = [
  {
    Image: "/Images/parmana.jpg",
    title: "Sree Padmanabhaswamy Temple",
    description:
      "The Padmanabhaswamy Temple is a Hindu temple dedicated to Vishnu in Thiruvananthapuram, the capital of the state of Kerala, India. It is one of the 108 Divya Desams, considered the sacred abodes of Vishnu in the Sri Vaishnava tradition.",
  },
  {
    Image: "/Images/Somanath.jpg",
    title: "Somnath Temple",
    description:
      "Located in the vibrant state of Gujarat, the Somnath Temple is one of the twelve Jyotirlinga shrines dedicated to Lord Shiva. It has a significant place in",
  },
  {
    Image: "/Images/ramanath.jpg",
    title: "Sri Arulmigu Ramanathaswamy Temple",
    description:
      "Char Dham v t e Jagannath Puri Rameswaram Dwarka Badrinath Ramanathaswamy Temple is a Hindu temple dedicated to the Hindu god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is one of the twelve Jyotirlinga temples.",
  },
  {
    Image: "/Images/lingaraj.jpg",
    title: "Lingaraj Temple",
    description:
      "Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest temples in Bhubaneswar, the capital of the Indian state of Odisha, India. The temple is the most prominent landmark of Bhubaneswar city and one of the major tourist attractions of the state.",
  },
  {
    Image: "/Images/mahabodhi.jpg",
    title: "Mahabodhi Temple",
    description:
      "Situated in Bihar, the Mahabodhi Temple is a UNESCO World Heritage Site, marking the location where Siddhartha Gautama, the Buddha, attained enlightenment under",
  },
  {
    Image: "/Images/ranganatha.jpg",
    title: "Sri Ranganatha Swamy Temple",
    description:
      "Sri Krishna Janmabhoomi temple complex or Krishna Janmasthan temple complex is a collection of Hindu temples built in the area where Lord Krishna is believed to ...",
  },
];

const PopularDestination = () => {
  return (
    <div className="animate__animated animate__fadeInLeft py-12 bg-gray-100">
      <div className=" container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-8">
          Popular Destinations
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={city.Image}
                alt={city.title}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{city.title}</h4>
                <p className="text-gray-600">{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDestination