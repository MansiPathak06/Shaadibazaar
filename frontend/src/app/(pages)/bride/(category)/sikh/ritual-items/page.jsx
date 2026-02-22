"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SikhRitualItemsPage = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const categories = [
    { name: 'Rumala Sahib Set', items: 28, image: 'https://i.pinimg.com/1200x/4f/cf/c3/4fcfc39b8727ffafaf31b11a0be69aa4.jpg', slug: 'rumala-sahib-set' },
    { name: 'Sweet Boxes', items: 35, image: 'https://i.pinimg.com/1200x/b0/59/71/b05971141a3c69325f2a6d0e4daeb597.jpg', slug: 'sweet-boxes' },
    { name: 'Coconut', items: 40, image: 'https://i.pinimg.com/736x/db/1f/91/db1f916a3300ea4e5937a42b87f3bc40.jpg', slug: 'coconut' },
    { name: 'Chooda Ceremony Items', items: 22, image: 'https://i.pinimg.com/736x/ac/f8/9d/acf89d89fd71ae8baf8c1488ea9ceba8.jpg', slug: 'chooda-ceremony-items' },
    { name: 'Varmala', items: 18, image: 'https://i.pinimg.com/736x/82/3b/9e/823b9ec961728e490051088ed34948a0.jpg', slug: 'varmala' },
    { name: 'Gift Sets', items: 45, image: 'https://i.pinimg.com/1200x/9a/c8/7c/9ac87c7ad1c7ee6003fe281d0f57c1e6.jpg', slug: 'gift-sets' },
    { name: 'Flower Chadar', items: 25, image: 'https://i.pinimg.com/1200x/44/6d/c7/446dc7c0aa73f76bbebfb2067025078f.jpg', slug: 'flower-chadar' },
    { name: 'Rumaal', items: 30, image: 'https://i.pinimg.com/736x/32/63/5f/32635fbcbd9dec910df5a56a5697c210.jpg', slug: 'rumaal' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-8 px-4 mx-15 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/2e/a3/e4/2ea3e41c04b3771472c31531eca12cfa.jpg" 
            alt="Traditional Sikh ritual-items Background"
            className="w-full h-full object-cover"
          />
          {/* Lighter overlay for better visibility */}
          <div className="absolute inset-0 bg-linear-to-r from-white/15 via-blue-50/70 to-orange-50/75"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2 leading-tight drop-shadow-sm">
              Sikh ritual-items
              <span className="text-xl md:text-2xl text-orange-700 ml-2">& Sacred Collection</span>
            </h1>
            <p className="text-gray-700 text-base mb-4 max-w-xl font-medium">
              Discover authentic Anand Karaj essentials crafted with devotion and tradition
            </p>
            <Link 
              href="/bride/all-products?category=ritual-items"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-10 w-24 h-24 bg-orange-300/40 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-4 right-32 w-28 h-28 bg-blue-300/40 rounded-full blur-3xl z-0"></div>
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
            <Link 
              key={index}
              href={`/bride/all-products?category=ritual-items&subCategory=${encodeURIComponent(category.slug)}`}
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
                
              </div>
            </Link>
          ))}
        </div>

        {categories.length > 5 && (
          <div className="flex justify-center mb-12">
            <button 
              onClick={() => setShowAllCategories(prev => !prev)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm hover:shadow-md"
            >
              {showAllCategories ? "View Less" : "View More Categories"}
            </button>
          </div>
        )}

        {/* Featured Products Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Rumala Sahib Card */}
          <Link 
            href="/bride/all-products?category=ritual-items&subCategory=rumala-sahib-set"
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.pinimg.com/1200x/e3/33/6d/e3336d546110a1eb70daa68ef8d5416e.jpg" 
              alt="Premium Rumala Sahib"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-orange-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                30% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Premium Rumala Sahib
              </h3>
              <span className="text-white font-medium text-sm hover:text-orange-200 transition-colors flex items-center gap-2">
                Shop Now →
              </span>
            </div>
          </Link>

          {/* Flower Chadar Card */}
          <Link 
            href="/bride/all-products?category=ritual-items&subCategory=flower-chadar"
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.pinimg.com/1200x/1f/b0/3c/1fb03c0808f1511e09ec468846702c25.jpg" 
              alt="Elegant Flower Chadar"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-blue-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                25% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Elegant Flower Chadar
              </h3>
              <span className="text-white font-medium text-sm hover:text-orange-200 transition-colors flex items-center gap-2">
                Shop Now →
              </span>
            </div>
          </Link>

          {/* Chooda Set Card */}
          <Link 
            href="/bride/all-products?category=ritual-items&subCategory=chooda-ceremony-items"
            className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src="https://i.pinimg.com/736x/5d/6c/5a/5d6c5a2763e3583283aefd836a976dcc.jpg" 
              alt="Traditional Chooda Set"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute top-50 bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-white/10">
              <div className="bg-pink-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                35% OFF
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                Traditional Chooda Set
              </h3>
              <span className="text-white font-medium text-sm hover:text-orange-200 transition-colors flex items-center gap-2">
                Shop Now →
              </span>
            </div>
          </Link>
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
          <p className="text-orange-600 text-md font-medium mb-2">Curated Collections</p>
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Shop by Occasion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find everything you need for your sacred Sikh ceremonies with our carefully curated occasion-based collections!
          </p>
        </div>

        {/* Occasion Cards */}
        <div className="grid md:grid-cols-3 gap-6 px-25">
          {/* Anand Karaj Card */}
          <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-4xl mb-4">🙏</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Anand Karaj Essentials</h3>
            <p className="text-gray-600 text-sm mb-4">Complete collection for the sacred wedding</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Rumala Sahib Sets
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Flower Chadar
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Varmala & Garlands
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Coconut & Offerings
              </li>
            </ul>
            <Link 
              href="/bride/all-products?category=ritual-items"
              className="block w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md text-center"
            >
              Explore Anand Karaj Items →
            </Link>
          </div>

          {/* Chooda Ceremony Card */}
          <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Chooda Ceremony</h3>
            <p className="text-gray-600 text-sm mb-4">Everything for this beautiful tradition</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Traditional Chooda Sets
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Kalire Collections
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Ceremony Rumaal
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Gift Presentation Sets
              </li>
            </ul>
            <Link 
              href="/bride/all-products?category=ritual-items&subCategory=chooda-ceremony-items"
              className="block w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md text-center"
            >
              Explore Chooda Items →
            </Link>
          </div>

          {/* Festive & Gurpurab Card */}
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-4xl mb-4">🪔</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gurpurab & Festive</h3>
            <p className="text-gray-600 text-sm mb-4">Sacred items for every celebration</p>
            <ul className="space-y-2 mb-6">
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Gurpurab Decorations
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Langar Essentials
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Sweet Distribution Boxes
              </li>
              <li className="text-sm text-gray-700 flex items-center gap-2">
                <span className="text-orange-600">✓</span> Festival Gift Sets
              </li>
            </ul>
            <Link 
              href="/bride/all-products?category=ritual-items"
              className="block w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors group-hover:shadow-md text-center"
            >
              Explore Festive Items →
            </Link>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">450+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">8K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">12+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SikhRitualItemsPage;
