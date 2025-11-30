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
      name: "Wireless Mouse",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Phone Case",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Digital Scale",
      image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      name: "Phone Cover",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      name: "Power Bank",
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      name: "USB Charger",
      image: "https://images.unsplash.com/photo-1591290619762-cca85d3b5e9f?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
    },
    {
      id: 9,
      name: "Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
    },
    {
      id: 10,
      name: "Laptop Stand",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop"
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
              Up to 55% off | Electronics & accessories from Amazon Launchpad
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
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / getVisibleCount()}%` }}
                >
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="aspect-square bg-white rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
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