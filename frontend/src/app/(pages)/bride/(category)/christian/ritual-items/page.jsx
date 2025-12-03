"use client";
import React, { useState } from 'react';

const ChristianBridalItemsPage = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const categories = [
    { name: 'Wedding Rings', items: 42, image: 'https://via.placeholder.com/400x400/E8D5C4/8B4513?text=Wedding+Rings' },
    { name: 'Holy Bible', items: 28, image: 'https://via.placeholder.com/400x400/F5E6D3/8B4513?text=Holy+Bible' },
    { name: 'Bridal Bouquet', items: 35, image: 'https://via.placeholder.com/400x400/FFE5E5/8B4513?text=Bridal+Bouquet' },
    { name: 'Unity Candle Set', items: 24, image: 'https://via.placeholder.com/400x400/FFF8E7/8B4513?text=Unity+Candle' },
    { name: 'Car Decoration', items: 18, image: 'https://via.placeholder.com/400x400/F0F8FF/8B4513?text=Car+Decor' },
    { name: 'Flower Basket', items: 31, image: 'https://via.placeholder.com/400x400/FFF0F5/8B4513?text=Flower+Basket' },
    { name: 'Wedding Veil', items: 22, image: 'https://via.placeholder.com/400x400/FFFACD/8B4513?text=Wedding+Veil' },
    { name: 'Ring Pillow', items: 19, image: 'https://via.placeholder.com/400x400/E6E6FA/8B4513?text=Ring+Pillow' },
    { name: 'Communion Set', items: 16, image: 'https://via.placeholder.com/400x400/FAFAD2/8B4513?text=Communion+Set' },
    { name: 'Church Aisle Decor', items: 27, image: 'https://via.placeholder.com/400x400/FFF5EE/8B4513?text=Aisle+Decor' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-8 px-4 mx-15 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://via.placeholder.com/1920x400/F5F5DC/8B4513?text=Christian+Wedding+Background" 
            alt="Christian Wedding Ritual Items Background"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-blue-50/70 to-purple-50/75"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 leading-tight drop-shadow-sm">
              Christian Bridal Collection
              <span className="text-xl md:text-2xl text-blue-700 ml-2">& Sacred Essentials</span>
            </h1>
            <p className="text-gray-700 text-base mb-4 max-w-xl font-medium">
              Discover elegant wedding essentials blessed with grace and tradition
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Shop Now
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-10 w-24 h-24 bg-blue-300/40 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-4 right-32 w-28 h-28 bg-purple-300/40 rounded-full blur-3xl z-0"></div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif text-gray-800">Shop by Category</h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {(showAllCategories ? categories : categories.slice(0, 5)).map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden h-[300px] shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">({category.items} Items)</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        {categories.length > 5 && (
          <div className="flex justify-center mb-12">
            <button 
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              {showAllCategories ? 'View Less' : 'View More Categories'}
            </button>
          </div>
        )}

        {/* Featured Products Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Premium Wedding Rings Card */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://via.placeholder.com/600x600/F5E6D3/8B4513?text=Premium+Wedding+Rings" 
              alt="Premium Wedding Rings"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-blue-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                25% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Premium Wedding Rings
              </h3>
              <button className="text-white font-medium text-sm hover:text-blue-200 transition-colors flex items-center gap-2">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Unity Candle Set Card */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://via.placeholder.com/600x600/FFF8E7/8B4513?text=Unity+Candle+Set" 
              alt="Unity Candle Set"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-purple-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                30% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Unity Candle Set
              </h3>
              <button className="text-white font-medium text-sm hover:text-blue-200 transition-colors flex items-center gap-2">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Bridal Bouquet Card */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://via.placeholder.com/600x600/FFE5E5/8B4513?text=Elegant+Bridal+Bouquet" 
              alt="Elegant Bridal Bouquet"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-pink-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                20% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Elegant Bridal Bouquet
              </h3>
              <button className="text-white font-medium text-sm hover:text-blue-200 transition-colors flex items-center gap-2">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Settings Icon (decorative) */}
      <div className="fixed top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Shop by Occasion Section */}
      <div className="mb-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-blue-600 text-md font-medium mb-2">Curated Collections</p>
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Shop by Occasion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find everything you need for your blessed moments with our carefully curated occasion-based collections!
          </p>
        </div>

        {/* Occasion Cards */}
        <div className="grid md:grid-cols-3 gap-6 px-25">
          {/* Church Wedding Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-4xl mb-4">⛪</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Church Wedding</h3>
            <p className="text-gray-600 text-sm mb-4">Complete collection for the sacred ceremony</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Wedding Rings & Bands
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Holy Bible & Prayer Books
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Unity Candle Sets
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Bridal Bouquets
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
              Explore Church Wedding →
            </button>
          </div>

          {/* Reception Card */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-4xl mb-4">🎊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Reception Celebration</h3>
            <p className="text-gray-600 text-sm mb-4">Everything for your grand celebration</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Car Decoration Kits
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Flower Arrangements
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Table Centerpieces
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Decorative Accessories
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
              Explore Reception →
            </button>
          </div>

          {/* Baptism & Communion Card */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-4xl mb-4">🕊️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Baptism & Communion</h3>
            <p className="text-gray-600 text-sm mb-4">Sacred items for holy sacraments</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Baptism Candles
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Communion Sets
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Holy Water Fonts
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Religious Decor
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
              Explore Sacraments →
            </button>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">400+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">8K+</div>
              <div className="text-sm text-gray-600">Happy Couples</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ChristianBridalItemsPage;