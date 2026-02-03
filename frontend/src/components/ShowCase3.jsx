'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShowCase3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "AC/Non-AC Banquets",
      image: "https://i.pinimg.com/736x/19/3a/da/193ada461bdba32a1382906adbf7e932.jpg"
    },
    {
      id: 2,
      name: "Resort Lawns",
      image: "https://i.pinimg.com/1200x/31/3b/fc/313bfcd9657d614fb1ed8d18306e527b.jpg"
    },
    {
      id: 3,
      name: "Temples",
      image: "https://i.pinimg.com/736x/2c/d0/9c/2cd09c7d49aa0c3ff71df844929ed49d.jpg"
    },
    {
      id: 4,
      name: "Churches",
      image: "https://i.pinimg.com/1200x/8b/51/ce/8b51ce95f758c6090c0619bab85d5c9e.jpg"
    },
    {
      id: 5,
      name: "Gurudwaras",
      image: "https://i.pinimg.com/736x/1d/d9/3c/1dd93cc2ee06645daed7770bcfbc7236.jpg"
    },
    {
      id: 6,
      name: "Nikah Hall",
      image: "https://i.pinimg.com/1200x/4b/a1/ed/4ba1eda75452de467ccbec81d9e1549b.jpg"
    },
    {
      id: 7,
      name: "5-Star Hotels",
      image: "https://i.pinimg.com/1200x/3c/ad/92/3cad925df90cbeaa7e728d75eefda0fe.jpg"
    },
    {
      id: 8,
      name: "Engagement halls",
      image: "https://i.pinimg.com/1200x/ec/dd/f4/ecddf46c9536dccae3d2d36fe4ea770d.jpg"
    },
    {
      id: 9,
      name: "Reception Venues",
      image: "https://i.pinimg.com/736x/28/ad/9c/28ad9ce48d602d99c961aa68037cc9db.jpg"
    },
    {
      id: 10,
      name: "Beach Resorts",
      image: "https://i.pinimg.com/736x/a1/cf/89/a1cf89b38042fc5f1fb1672063093cc1.jpg"
    }
  ];

  // Auto slide effect
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = products.length - getVisibleCount();
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isHovered, products.length]);

  // Get visible count based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 6; // xl
      if (window.innerWidth >= 1024) return 5; // lg
      if (window.innerWidth >= 768) return 4; // md
      if (window.innerWidth >= 640) return 3; // sm
      return 2; // mobile
    }
    return 6;
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : 0;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = products.length - getVisibleCount();
      return prevIndex < maxIndex ? prevIndex + 1 : maxIndex;
    });
  };

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Luxury Wedding Venues & Comfortable Stays !
            </h2>
          </div>
          <a 
            href="#" 
            className="text-blue-600 hover:text-blue-700 font-semibold whitespace-nowrap hover:underline"
          >
            Explore more
          </a>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Products Slider */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / getVisibleCount())}%)`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / getVisibleCount()}%` }}
                >
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="aspect-square bg-white rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all ${
              currentIndex >= products.length - getVisibleCount() ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={currentIndex >= products.length - getVisibleCount()}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: products.length - getVisibleCount() + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}