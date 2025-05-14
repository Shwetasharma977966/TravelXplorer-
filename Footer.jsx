import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">TravelXplorer</h2>
          <p className="text-sm text-gray-400 mt-2">
            Discover new places and make memories.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Destinations
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            About Us
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; {new Date().getFullYear()} TravelXplorer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
