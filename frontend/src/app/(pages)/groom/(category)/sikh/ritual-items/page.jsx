"use client";
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SikhRitualItemsPage = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef(null);

  const categories = [
    { 
      id: 1, 
      name: 'Varmala', 
      image: 'https://i.pinimg.com/1200x/7d/c6/4f/7dc64f5140867f13c5fa6e177eb74789.jpg',
      subCategory: 'varmala'
    },
    { 
      id: 2, 
      name: 'Pagri / Handkerchief', 
      image: 'https://i.pinimg.com/736x/a0/19/3e/a0193e73addad5061deee6bf92988b8c.jpg',
      subCategory: 'pagri-handkerchief'
    },
    { 
      id: 3, 
      name: 'Kanga', 
      image: 'https://i.pinimg.com/736x/ee/26/0f/ee260f9bb43107ec5551149b21454652.jpg',
      subCategory: 'kanga'
    },
    { 
      id: 4, 
      name: 'Sweet Boxes', 
      image: 'https://i.pinimg.com/736x/d5/48/cf/d548cf249c18430a3a87c6bca50afb04.jpg',
      subCategory: 'sweet-boxes'
    },
    { 
      id: 5, 
      name: 'Rumala Sahib', 
      image: 'https://i.pinimg.com/1200x/07/ce/50/07ce501ae3be5df6f97fe2442c4091d2.jpg',
      subCategory: 'rumala-sahib'
    },
    { 
      id: 6, 
      name: 'Car Decoration', 
      image: 'https://i.pinimg.com/736x/a2/d4/dc/a2d4dc45f01ae0c8817b1e24d76dbd67.jpg',
      subCategory: 'car-decoration'
    },
    { 
      id: 7, 
      name: 'Garlands', 
      image: 'https://i.pinimg.com/1200x/f9/79/d8/f979d81d875325a4fa1d835e1cbd66ae.jpg',
      subCategory: 'garlands'
    },
    { 
      id: 8, 
      name: 'Gift Suits/Salwar for Bride', 
      image: 'https://i.pinimg.com/1200x/01/d3/a1/01d3a1fa3a755b8f774158028c9885ae.jpg',
      subCategory: 'gift-suits-salwar'
    }
  ];

  // Navigation handlers
  const handleCategoryClick = (subCategory) => {
    router.push(`/groom/all-products?category=sikh-ritual-items&subCategory=${subCategory}`);
  };

  const handleAllProductsClick = () => {
    router.push("/groom/all-products?category=sikh-ritual-items");
  };

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
      <div className="relative h-[30vh] bg-linear-to-r from-orange-100 via-yellow-50 to-orange-100 overflow-hidden bg-[url('/your-image.jpg')] bg-cover bg-center bg-blend-overlay">
        <div className="absolute inset-0 bg-white/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-serif text-orange-900 mb-2">
              Sikh Ritual Items
            </h1>
            <p className="text-lg text-orange-800 font-light mb-6">
              Sacred essentials for your Anand Karaj ceremony
            </p>
            <button
              onClick={handleAllProductsClick}
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors shadow-lg cursor-pointer font-medium"
            >
              Shop All Items
            </button>
          </div>
        </div>

        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCA2MCAwIEwgNjAgNjAgTCAwIDYwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QTU3NCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-serif text-gray-800 mb-2">Our Collections</h2>
          <div className="w-20 h-1 bg-orange-600"></div>
        </div>

        {/* Sliding Categories - NOW CLICKABLE */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-orange-900" />
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
                onClick={() => handleCategoryClick(category.subCategory)}
                className="shrink-0 w-72 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square bg-linear-to-br from-orange-50 to-yellow-50">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-orange-700 transition-colors duration-300">
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
            <ChevronRight className="w-6 h-6 text-orange-900" />
          </button>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-orange-300 opacity-50"
            ></div>
          ))}
        </div>
      </div>

      {/* Featured Section - NOW CLICKABLE */}
      <div className="bg-linear-to-b from-orange-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">Featured Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Authentic Sikh wedding essentials to honor tradition and celebrate your union
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleCategoryClick(item.subCategory)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="aspect-square bg-linear-to-br from-orange-50 to-yellow-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800 mb-1 group-hover:text-orange-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">Starting from ₹999</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleAllProductsClick}
              className="bg-orange-600 text-white px-10 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-lg"
            >
              View All Ritual Items
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-orange-50 to-yellow-50 rounded-2xl p-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-serif text-orange-900 mb-4">
              Sacred Essentials for Your Anand Karaj
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover a comprehensive collection of authentic Sikh ritual items that honor the sanctity of your wedding ceremony. From traditional Rumala Sahib to ceremonial garlands, we offer everything needed to celebrate your union according to Sikh traditions with grace and reverence.
            </p>
            <button
              onClick={handleAllProductsClick}
              className="bg-orange-900 text-white px-10 py-4 rounded-full hover:bg-orange-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium"
            >
              EXPLORE COMPLETE COLLECTION
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SikhRitualItemsPage;