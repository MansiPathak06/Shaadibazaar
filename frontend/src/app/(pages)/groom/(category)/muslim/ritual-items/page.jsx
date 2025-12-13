"use client";
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MuslimGroomRitualItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 1, name: 'Mehr Amount', image: 'https://i.pinimg.com/736x/b9/c4/5b/b9c45b236c2ed5c071f96c8ae24d9a8f.jpg' },
    { id: 2, name: 'Quran', image: 'https://i.pinimg.com/736x/5b/07/a2/5b07a22eb399bb2628d2ca00cd488d8c.jpg' },
    { id: 3, name: 'Tasbeeh', image: 'https://i.pinimg.com/736x/d3/dd/7c/d3dd7c4f5c4c494770c0ed83ef4ca268.jpg'},
    { id: 4, name: 'Signature Pen', image: 'https://i.pinimg.com/1200x/55/1f/5a/551f5a9aa3b9546cc436857a2356af36.jpg' },
    { id: 5, name: 'Nikahnama Folder', image: 'https://i.pinimg.com/736x/3f/b5/84/3fb5840b2b4a1b9b98bd7c3c947ed021.jpg' },
    { id: 6, name: 'Dry Fruits & Sweets', image: 'https://i.pinimg.com/736x/07/4b/16/074b16f07e618926366044300c00a54a.jpg' },
    { id: 7, name: 'Groom Welcome Stole', image: 'https://i.pinimg.com/1200x/13/18/ff/1318ff7ed7a236acb7cf7c4c3dcf73c2.jpg' },
    { id: 8, name: 'Varmala (if required)', image: 'https://i.pinimg.com/736x/d0/69/4c/d0694cedefc094787479aa6798609b67.jpg' }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      const newPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Slim Banner */}
      <div className="relative h-[30vh] bg-gradient-to-r from-emerald-100 via-teal-50 to-emerald-100 overflow-hidden bg-cover bg-center bg-blend-overlay">
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif text-emerald-900 mb-2">
              Nikah Ritual Items
            </h1>
            <p className="text-lg text-emerald-800 font-light">
              Sacred essentials for the groom's special day
            </p>
          </div>
        </div>

        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCA2MCAwIEwgNjAgNjAgTCAwIDYwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJDNUYyRCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-serif text-gray-800 mb-2">Our Collections</h2>
          <div className="w-20 h-1 bg-emerald-600"></div>
        </div>

        {/* Sliding Categories */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-emerald-900" />
          </button>

          {/* Categories Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-72 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-emerald-50 to-teal-50">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-emerald-700 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-emerald-900" />
          </button>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-emerald-300 opacity-50"
            ></div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-gradient-to-b from-emerald-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Featured Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked ritual items to make your Nikah ceremony truly memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="aspect-square bg-gradient-to-br from-emerald-50 to-teal-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-500">Starting from ₹999</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuslimGroomRitualItems;