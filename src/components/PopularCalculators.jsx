import React from "react";
import image from "../images/inv1.jpg";
import image1 from "../images/inv2.jpg";
import image2 from "../images/inv3.jpg";

const PopularCalculators = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-semibold mb-4">Popular calculators</h2>
      <p className="text-gray-600 mb-8">
        Discover our user-friendly calculators tailored to help you make informed financial decisions.
        Our diverse range of insurance calculators ensures you find the perfect fit for your needs.
        Explore the options below to get started.
      </p>

      {/* Grid container for the calculator sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Investment calculators section */}
        <div className="bg-white shadow p-6 rounded-lg flex flex-col items-center">
          <img src={image} alt="Investment" className="w-auto" />
          <h3 className="text-xl font-semibold mb-2">Investment calculators</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 cursor-pointer">SIP Calculator →</li>
            <li className="text-blue-600 cursor-pointer">Income Tax Calculator →</li>
            <li className="text-blue-600 cursor-pointer">ULIP Calculator →</li>
            <li className="text-blue-600 cursor-pointer">NPS Calculator →</li>
          </ul>
        </div>

        {/* Term Insurance calculators section */}
        <div className="bg-white shadow p-6 rounded-lg flex flex-col items-center">
          <img src={image1} alt="Term Insurance" className="w-auto" />
          <h3 className="text-xl font-semibold mb-2">Term Insurance calculators</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 cursor-pointer">Life Insurance Calculator →</li>
            <li className="text-blue-600 cursor-pointer">Term Policy Calculator →</li>
            <li className="text-blue-600 cursor-pointer">Human Life Value Calculator →</li>
            <li className="text-blue-600 cursor-pointer">NRI Term Insurance Calculator →</li>
          </ul>
        </div>

        {/* Policy premium calculators section */}
        <div className="bg-white shadow p-6 rounded-lg flex flex-col items-center">
          <img src={image2} alt="Policy Premium" className="w-auto" />
          <h3 className="text-xl font-semibold mb-2">Policy premium calculators</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 cursor-pointer">Health Insurance Premium Calculator →</li>
            <li className="text-blue-600 cursor-pointer">Car Insurance Calculator →</li>
            <li className="text-blue-600 cursor-pointer">Bike Insurance Calculator →</li>
            <li className="text-blue-600 cursor-pointer">Travel Insurance Calculator →</li>
          </ul>
        </div>
      </div>

      {/* Button to view all calculators */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          View All Calculators
        </button>
      </div>
    </div>
  );
};

export default PopularCalculators;
