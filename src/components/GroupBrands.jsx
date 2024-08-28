import React from 'react';
//import image from '../images/gb1.jpg';
import image1 from '../images/gb1.jpg';
import image2 from '../images/gb2.jpg';
import image3 from '../images/gb3.jpg';
import image4 from '../images/gb4.jpg';
import image5 from '../images/gb5.jpg';
import image6 from '../images/gb6.jpg';


const GroupBrands = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Group Brands</h3>
        <div className="overflow-hidden relative">
          <div className="flex space-x-8 animate-marquee">
            {/* Image Set 1 */}
            {/* <img src={image} alt="Paisabazaar" className="h-10" /> */}
            <img src={image1} alt="PB Partners" className="h-10" />
            <img src={image2} alt="Policybazaar Business" className="h-10" />
            <img src={image3} alt="DocPrime" className="h-10" />
            <img src={image4} alt="QuickFixCars" className="h-10" />
            <img src={image5} alt="MoneyWide" className="h-10" />
            <img src={image6} alt="PB" className="h-10" />

            {/* Duplicate Image Set */}
            {/* <img src={image} alt="Paisabazaar" className="h-10" /> */}
            <img src={image1} alt="PB Partners" className="h-10" />
            <img src={image2} alt="Policybazaar Business" className="h-10" />
            <img src={image3} alt="DocPrime" className="h-10" />
            <img src={image4} alt="QuickFixCars" className="h-10" />
            <img src={image5} alt="MoneyWide" className="h-10" />
            <img src={image6} alt="PB" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupBrands;
