'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShowCase4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Card Printing Shop",
      image: "https://i.pinimg.com/736x/39/2d/79/392d792470fe6d68b6032adae8e70051.jpg"
    },
    {
      id: 2,
      name: "Shagun Envelope Designer",
      image: "https://i.pinimg.com/1200x/0b/dc/84/0bdc8446d6c9cd8cb7d91399e42f1938.jpg"
    },
    {
      id: 3,
      name: "Halwai",
      image: "https://i.pinimg.com/736x/fb/22/fa/fb22fa68921b965ac0bea185b199df42.jpg"
    },
    {
      id: 4,
      name: "Bus/Traveller for guests",
      image: "https://i.pinimg.com/736x/dc/8e/29/dc8e297bf30e3d2d76cfe1a138698747.jpg"
    },
    {
      id: 5,
      name: "Drone Camera Operator",
      image: "https://i.pinimg.com/1200x/1d/2b/c9/1d2bc99c7796e1e95575ac81e454d2f0.jpg"
    },
    {
      id: 6,
      name: "Jewellery rental vendor",
      image: "https://i.pinimg.com/736x/54/01/19/540119c374221f3566fe56942c98bc9e.jpg"
    },
    {
      id: 7,
      name: "Rental Bistar Set",
      image: "https://i.pinimg.com/1200x/3e/f3/b6/3ef3b65bc209351f892bd0856bf0d614.jpg"
    },
    {
      id: 8,
      name: "Crockery Items",
      image: "https://i.pinimg.com/736x/9f/53/57/9f5357d3a3ac96f7e3f9cca06b71c270.jpg"
    },
    {
      id: 9,
      name: "Spa & Salon Services",
      image: "https://i.pinimg.com/1200x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.jpg"
    },
    {
      id: 10,
      name: "Light & Sound Vendor",
      image: "https://i.pinimg.com/1200x/00/8b/ad/008bad053d96c40933751559aaf25cc8.jpg"
    }
  ];

  // Auto slide effect (right to left)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = products.length - getVisibleCount();
          return prevIndex <= 0 ? maxIndex : prevIndex - 1;
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
      const maxIndex = products.length - getVisibleCount();
      return prevIndex < maxIndex ? prevIndex + 1 : maxIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : 0;
    });
  };

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
             Top Wedding Services, Handpicked for You !
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
          {/* Previous Button (now goes right) */}
          <button
            onClick={handlePrevious}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all ${
              currentIndex >= products.length - getVisibleCount() ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={currentIndex >= products.length - getVisibleCount()}
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
                  className="flex-shrink-0 px-2"
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

          {/* Next Button (now goes left) */}
          <button
            onClick={handleNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={currentIndex === 0}
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