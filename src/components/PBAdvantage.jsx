import React from 'react';
import image from "../images/img1.jpg";

const PBAdvantage = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">PB Advantage</h2>
        <p className="mt-4 text-lg text-gray-600">
  When you buy insurance from us, you get more than just financial safety. <br />
  You also get: our promise of simplifying complex insurance terms and conditions, <br />
  quick stress-free claims, instant quotes from top insurers, <br />
  and being present for you in the toughest of times.
</p>

        <a href="#" className="text-blue-600 hover:underline mt-2 block">
          Know more
        </a>

        {/* Display the first uploaded image */}
        <div className="mt-20">
          <img 
            src={image} 
            alt="PB Advantage Details" 
            className="mx-auto w-[10000px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PBAdvantage;
