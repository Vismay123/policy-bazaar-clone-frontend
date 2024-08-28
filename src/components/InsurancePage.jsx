import React from 'react';
import { useState } from "react"; // Import useState

import image4 from "../images/img3.jpg";
import image1 from "../images/logo.jpg";
import image2 from "../images/img6.jpg";
import image3 from "../images/img7.jpg";

const InsurancePage = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [image1, image2, image3]; // Array of image paths

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div className="bg-white-50 min-h-min">
      {/* Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 h-20" >
          <div className="flex items-center">
            <img src="https://etimg.etb2bimg.com/photo/92142828.cms" alt="PolicyBazaar Logo" className="h-60 w-auto" />
            
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">Insurance Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Renew Your Policy</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Claim</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Support</a>
          </div>
          <div className="flex space-x-4">
            <button className="text-blue-600 border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white">
              Talk to Expert
            </button>
            <button className="text-blue-600 border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-600 hover:text-white">
              Sign in
            </button>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto p-6 flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <section className="lg:w-1/2">
  <h2 className="text-5xl font-normal mb-4 leading-tight">
    Let’s find you the <span className="text-blue-600">Best Insurance</span>
  </h2>
    <img src={image4} alt="50+ insurers and quick, easy & hassle-free icons" className="max-w-sm" ></img>
</section>

      {/* Right Section */}
      <section className="lg:w-1/2 flex justify-center">
        <div className="relative bg-white shadow-md rounded-lg p-1 max-w-mid">
          <img src={slides[currentSlide]} alt="Insurance Plan" className="h-64 w-full object-cover rounded-lg" />
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={prevSlide}
              className="bg-gray-300 text-gray-700 rounded-full p-2 hover:bg-gray-400"
            >
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-300 text-gray-700 rounded-full p-2 hover:bg-gray-400"
            >
            </button>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default InsurancePage;
