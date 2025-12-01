'use client';

import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function CircleCategorySelection() {
  const categories = [
    {
      name: "Home Appliances",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
      items: "8 Items",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "PC & Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      items: "12 Items",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Kitchen Appliances",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400&h=400&fit=crop",
      items: "15 Items",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Phone & Tablet",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      items: "20 Items",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Smart Watches",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "25 Items",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "18 Items",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "30 Items",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      name: "Audio",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "22 Items",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "Cameras",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "16 Items",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "TV & Video",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "14 Items",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span>Popular Categories</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Choose your
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our wide range of products across multiple categories. Find exactly what you need with our quick access repository.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Image Circle with Gradient Ring */}
              <div className="relative mb-5">
                {/* Gradient Ring */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-110`}></div>
                
                {/* Outer Ring */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.gradient} p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow`}>
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-full w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 shadow-xl group-hover:shadow-2xl transition-all duration-500 ring-4 ring-white group-hover:ring-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-all duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Center Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ArrowRight className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                  NEW
                </div>
              </div>

              {/* Category Info Card */}
              <div className="text-center transform group-hover:-translate-y-1 transition-transform duration-300">
                {/* Category Name */}
                <h3 className="text-gray-900 font-bold text-base md:text-lg mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.name}
                </h3>

                {/* Items Count with Icon */}
                <div className="inline-flex items-center gap-1 text-gray-500 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
                  <span>{category.items}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
