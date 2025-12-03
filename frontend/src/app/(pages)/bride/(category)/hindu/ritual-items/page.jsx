"use client";
import React, { useState } from 'react';

const RitualItemsPage = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const categories = [
    { name: 'Mehendi Cones', items: 25, image: 'https://i.pinimg.com/1200x/13/93/6a/13936a6f5571a4e2925f76e0a02c6904.jpg' },
    { name: 'Chooda (if tradition follows)', items: 18, image: 'https://i.pinimg.com/736x/48/f1/07/48f107cd30cc73a60259c9172b1f69e8.jpg' },
    { name: 'Kalire', items: 32, image: 'https://i.pinimg.com/736x/0e/e7/36/0ee7362893ae0b5a5f147c24e2e04269.jpg' },
    { name: 'Varmala', items: 15, image: 'https://i.pinimg.com/736x/49/23/4e/49234e6679632498956352261063de39.jpg' },
    { name: 'Pooja Thali', items: 28, image: 'https://i.pinimg.com/1200x/00/06/df/0006df0a75bc07e13a73437f7b09d455.jpg' },
    { name: 'Sindoor Box', items: 22, image: 'https://i.pinimg.com/736x/98/70/0e/98700e4c8ddf5c72c19a5b72f417fe37.jpg' },
    { name: 'Mangalsutra', items: 35, image: 'https://i.pinimg.com/1200x/32/d2/6e/32d26e87619efeda044db31d707f836c.jpg' },
    { name: 'Kanyadaan Items', items: 12, image: 'https://i.pinimg.com/1200x/21/4c/7e/214c7e21260f8a75daa98319d1947743.jpg' },
    { name: 'Coconut', items: 40, image: 'https://i.pinimg.com/736x/01/93/26/019326772e3e5fa777193372bbe84668.jpg' },
    { name: 'Cloth for Muhurat', items: 14, image: 'https://i.pinimg.com/1200x/c0/9f/8a/c09f8ac9b1728005843312974ba71544.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-8 px-4 mx-15 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://i.pinimg.com/1200x/b0/4c/bd/b04cbd4200fe4fdc619d52a56f47037d.jpg" 
      alt="Traditional Ritual Items Background"
      className="w-full h-full object-cover"
    />
    {/* Lighter overlay for better visibility */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/15 via-amber-50/70 to-orange-50/75"></div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 leading-tight drop-shadow-sm">
        Traditional Ritual Items
        <span className="text-xl md:text-2xl text-amber-700 ml-2">& Sacred Collection</span>
      </h1>
      <p className="text-gray-700 text-base mb-4 max-w-xl font-medium">
        Discover authentic ritual essentials crafted with devotion and tradition
      </p>
      <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
        Shop Now
      </button>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute top-4 right-10 w-24 h-24 bg-amber-300/40 rounded-full blur-3xl z-0"></div>
  <div className="absolute bottom-4 right-32 w-28 h-28 bg-orange-300/40 rounded-full blur-3xl z-0"></div>
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
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              {showAllCategories ? 'View Less' : 'View More Categories'}
            </button>
          </div>
        )}

        {/* Featured Products Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Premium Mangalsutra Card */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://i.pinimg.com/736x/eb/bc/f2/ebbcf2e5d4622e8c295b8c4dfa725af3.jpg" 
              alt="hadi ubtan"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-amber-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                30% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Haldi Ubtan
              </h3>
              <button className="text-white font-medium text-sm hover:text-amber-200 transition-colors flex items-center gap-2">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Sacred Pooja Thali Card */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://i.pinimg.com/736x/ce/14/4b/ce144beeaf0a7d667f415df49b7de1af.jpg" 
              alt="Sacred Pooja Thali"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-orange-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                25% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Sacred Pooja Thali
              </h3>
              <button className="text-white font-medium text-sm hover:text-amber-200 transition-colors flex items-center gap-2">
                Shop Now →
              </button>
            </div>
          </div>

          {/* Traditional Kalire Card */}
          <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <img 
              src="https://i.pinimg.com/1200x/97/7e/cc/977ecc7e6a1823d9025bfeefc2b8e8ff.jpg" 
              alt="Traditional Kalire"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-yellow-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                35% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Traditional Kalire
              </h3>
              <button className="text-white font-medium text-sm hover:text-amber-200 transition-colors flex items-center gap-2">
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
    <p className="text-amber-600 text-md font-medium mb-2">Curated Collections</p>
    <h2 className="text-4xl font-serif text-gray-800 mb-4">Shop by Occasion</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Find everything you need for your special moments with our carefully curated occasion-based collections!
    </p>
  </div>

  {/* Occasion Cards */}
  <div className="grid md:grid-cols-3 gap-6 px-25">
    {/* Wedding Card */}
    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
      <div className="text-4xl mb-4">💑</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Wedding Essentials</h3>
      <p className="text-gray-600 text-sm mb-4">Complete collection for the big day</p>
      <ul className="space-y-2 mb-6">
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Bridal Mehendi Sets
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Mangalsutra & Sindoor
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Kalire & Chooda
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Varmala & Garlands
        </li>
      </ul>
      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
        Explore Wedding Items →
      </button>
    </div>

    {/* Engagement Card */}
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
      <div className="text-4xl mb-4">💍</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Engagement Ceremony</h3>
      <p className="text-gray-600 text-sm mb-4">Everything for your special milestone</p>
      <ul className="space-y-2 mb-6">
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Ring Ceremony Trays
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Roka Ceremony Kits
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Tilak Essentials
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Decorative Items
        </li>
      </ul>
      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
        Explore Engagement →
      </button>
    </div>

    {/* Festive Card */}
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
      <div className="text-4xl mb-4">🪔</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Festive Celebrations</h3>
      <p className="text-gray-600 text-sm mb-4">Sacred items for every occasion</p>
      <ul className="space-y-2 mb-6">
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Diwali Pooja Kits
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Karwa Chauth Thali
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Navratri Essentials
        </li>
        <li className="text-sm text-gray-700 flex items-center gap-2">
          <span className="text-amber-600">✓</span> Festival Decor
        </li>
      </ul>
      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
        Explore Festive →
      </button>
    </div>
  </div>

  {/* Stats Banner */}
  <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <div className="text-3xl font-bold text-amber-600 mb-1">500+</div>
        <div className="text-sm text-gray-600">Products</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-amber-600 mb-1">10K+</div>
        <div className="text-sm text-gray-600">Happy Customers</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-amber-600 mb-1">4.9★</div>
        <div className="text-sm text-gray-600">Average Rating</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
        <div className="text-sm text-gray-600">Years Experience</div>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default RitualItemsPage;