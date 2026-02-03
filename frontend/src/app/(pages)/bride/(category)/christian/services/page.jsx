"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

const ChristianBridalPage = () => {
  const router = useRouter();
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // Categories with subCategory mapping added
  const categories = [
    { 
      name: 'Bridal Makeup & Hair', 
      items: 45, 
      image: 'https://i.pinimg.com/736x/c6/c1/7a/c6c17ad5650f10b7033550859752fcf9.jpg',
      subCategory: 'bridal-makeup'
    },
    { 
      name: 'Gown Tailoring', 
      items: 32, 
      image: 'https://i.pinimg.com/736x/80/ac/32/80ac320ce4768c005c872a7df4b15128.jpg',
      subCategory: 'gown-tailoring'
    },
    { 
      name: 'Manicure & Nails', 
      items: 28, 
      image: 'https://i.pinimg.com/736x/e0/2a/df/e02adfe185d4420081631a3c4f1f763a.jpg',
      subCategory: 'manicure-nails'
    },
    { 
      name: 'Bridal Photoshoot', 
      items: 38, 
      image: 'https://i.pinimg.com/1200x/a8/6c/95/a86c95cea8d04f15a32210e30a8bb3c5.jpg',
      subCategory: 'bridal-photoshoot'
    },
    { 
      name: 'Church Choir', 
      items: 15, 
      image: 'https://i.pinimg.com/736x/87/42/7d/87427d49d83a5ae182e27b81bb8c10f2.jpg',
      subCategory: 'church-choir'
    },
    { 
      name: 'Wedding Planner', 
      items: 22, 
      image: 'https://i.pinimg.com/736x/1c/9c/75/1c9c75e023dd7b360fd27ee8705f6572.jpg',
      subCategory: 'wedding-planner'
    },
    { 
      name: 'Bridal Bouquet', 
      items: 35, 
      image: 'https://i.pinimg.com/736x/54/74/dc/5474dcfa1d4460961738ac3da0ab217c.jpg',
      subCategory: 'bridal-bouquet'
    },
    { 
      name: 'Wedding Veil', 
      items: 25, 
      image: 'https://i.pinimg.com/1200x/b8/b2/27/b8b22721c6dc4abde9c60f582a8cd455.jpg',
      subCategory: 'wedding-veil'
    },
    { 
      name: 'Bridal Accessories', 
      items: 40, 
      image: 'https://i.pinimg.com/1200x/17/ea/f1/17eaf1ede8babc3f2173162256decc0a.jpg',
      subCategory: 'bridal-accessories'
    },
    { 
      name: 'Wedding Invitations', 
      items: 30, 
      image: 'https://i.pinimg.com/1200x/ec/ef/c9/ecefc95160bfe9936d528fd09300489d.jpg',
      subCategory: 'wedding-invitations'
    }
  ];

  // 👇 NEW NAVIGATION FUNCTIONS
  const handleCategoryClick = (subCategory) => {
    router.push(`/bride/all-services?category=christian-bridal-services&subCategory=${subCategory}`);
  };

  const handleAllServicesClick = () => {
    router.push("/bride/all-services?category=christian-bridal-services");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-8 px-4 mx-15 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/736x/9d/02/0d/9d020d09b72a9deda93e12045c91e483.jpg" 
            alt="Christian Bridal Services Background"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay for better visibility */}
          <div className="absolute inset-0 bg-linear-to-r from-white/15 via-blue-50/70 to-purple-50/75"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 leading-tight drop-shadow-sm">
              Christian Bridal Services
              <span className="text-xl md:text-2xl text-blue-700 ml-2">& Wedding Essentials</span>
            </h1>
            <p className="text-gray-700 text-base mb-4 max-w-xl font-medium">
              Discover exquisite bridal services crafted with elegance and grace for your special day
            </p>
            <button 
              onClick={handleAllServicesClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Services
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
          <h2 className="text-2xl font-serif text-gray-800">Browse Services</h2>
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
        

        {/* Category Grid - ADDED onClick */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {(showAllCategories ? categories : categories.slice(0, 5)).map((category, index) => (
            <div 
              key={index}
              onClick={() => handleCategoryClick(category.subCategory)}
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
                <p className="text-sm text-gray-500">({category.items} Options)</p>
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
              {showAllCategories ? 'View Less' : 'View More Services'}
            </button>
          </div>
        )}

        {/* Featured Services Section - ADDED onClick */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Bridal Makeup Card */}
          <div 
            onClick={() => handleCategoryClick('bridal-makeup')}
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.pinimg.com/1200x/dc/3e/3d/dc3e3d296b565d735d5ca36b5e893880.jpg" 
              alt="Premium Bridal Makeup"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-blue-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                PREMIUM PACKAGE
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Bridal Makeup & Hair
              </h3>
              <button className="text-white font-medium text-sm hover:text-blue-200 transition-colors flex items-center gap-2">
                Book Now →
              </button>
            </div>
          </div>

          {/* Gown Tailoring Card */}
          <div 
            onClick={() => handleCategoryClick('gown-tailoring')}
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.pinimg.com/1200x/df/48/ff/df48ff6643b0997b78b9cf1a59c430c2.jpg" 
              alt="Custom Gown Tailoring"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-purple-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                CUSTOM DESIGN
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Gown Tailoring
              </h3>
              <button className="text-white font-medium text-sm hover:text-blue-200 transition-colors flex items-center gap-2">
                Book Now →
              </button>
            </div>
          </div>

          {/* Wedding Planner Card */}
          <div 
            onClick={() => handleCategoryClick('wedding-planner')}
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.pinimg.com/736x/ce/a5/08/cea508866f75e704cd7daa5cf242b65f.jpg" 
              alt="Wedding Planning Services"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-pink-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                FULL SERVICE
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Wedding Planner
              </h3>
              <button className="text-white font-medium text-sm hover:text-blue-200 transition-colors flex items-center gap-2">
                Book Now →
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

      {/* Shop by Package Section - ADDED onClick */}
      <div className="mb-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-blue-600 text-md font-medium mb-2">Curated Packages</p>
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Wedding Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed wedding packages tailored to make your special day unforgettable
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6 px-25">
          {/* Complete Wedding Package Card */}
          <div 
            onClick={handleAllServicesClick}
            className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="text-4xl mb-4">👰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Wedding Package</h3>
            <p className="text-gray-600 text-sm mb-4">Everything you need for the perfect wedding</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Bridal Makeup & Hair Styling
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Custom Gown Tailoring
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Professional Photography
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Wedding Planning Services
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
              View Package Details →
            </button>
          </div>

          {/* Bridal Beauty Package Card */}
          <div 
            onClick={() => handleCategoryClick('bridal-makeup')}
            className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="text-4xl mb-4">💄</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Bridal Beauty Package</h3>
            <p className="text-gray-600 text-sm mb-4">Look stunning on your special day</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Pre-Wedding Skin Care
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Bridal Makeup Session
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Hair Styling & Trials
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Manicure & Pedicure
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
              View Package Details →
            </button>
          </div>

          {/* Church Ceremony Package Card */}
          <div 
            onClick={() => handleCategoryClick('church-choir')}
            className="bg-linear-to-br from-purple-50 to-violet-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="text-4xl mb-4">⛪</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Church Ceremony Package</h3>
            <p className="text-gray-600 text-sm mb-4">Sacred services for your holy union</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Church Choir Arrangements
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Ceremony Decorations
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Wedding Music Selection
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Ceremony Coordination
              </li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md">
              View Package Details →
            </button>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">300+</div>
              <div className="text-sm text-gray-600">Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">5K+</div>
              <div className="text-sm text-gray-600">Happy Brides</div>
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

export default ChristianBridalPage;