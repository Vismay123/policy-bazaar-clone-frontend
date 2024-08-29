import React, { useState, useEffect } from 'react';

const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
  '/images/banner3.jpg',
  '/images/banner4.jpg',
  '/images/banner5.jpg',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-auto h-[100px] overflow-hidden flex justify-center mb-10"> {/* Added margin-bottom */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 33.33}%)`, width: '300%' }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-[400px] h-[100px] flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 flex space-x-2"> {/* Adjusted bottom position */}
        {images.slice(0, images.length - 2).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
