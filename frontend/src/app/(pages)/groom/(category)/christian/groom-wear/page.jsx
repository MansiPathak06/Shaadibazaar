"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const ChristianGroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: "Tuxedo",
      image: "https://i.pinimg.com/564x/your-image-1.jpg"
    },
    {
      name: "3-Piece Suit",
      image: "https://i.pinimg.com/564x/your-image-2.jpg"
    },
    {
      name: "Tie / Bow Tie",
      image: "https://i.pinimg.com/564x/your-image-3.jpg"
    },
    {
      name: "Boutonniere",
      image: "https://i.pinimg.com/564x/your-image-4.jpg"
    },
    {
      name: "Pocket Square",
      image: "https://i.pinimg.com/564x/your-image-5.jpg"
    },
    {
      name: "Leather Shoes",
      image: "https://i.pinimg.com/564x/your-image-6.jpg"
    },
    {
      name: "Cufflinks",
      image: "https://i.pinimg.com/564x/your-image-7.jpg"
    },
    {
      name: "Perfume",
      image: "https://i.pinimg.com/564x/your-image-8.jpg"
    }
  ];

  const taglines = [
    "✨ Timeless Elegance",
    "👔 Classic Gentleman Style",
    "💫 Refined & Sophisticated",
    "🌟 Walk Down the Aisle in Style",
    "✨ Modern Meets Classic",
    "💍 Dressed to Perfection",
    "👑 Your Perfect Wedding Look"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[27vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 inline-block">
            <Sparkles className="w-12 h-12 text-blue-300 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Groom Wear & Accessories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 font-light drop-shadow">
            Step Into Forever with Timeless Elegance!
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-slate-700 to-blue-900 py-2 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...taglines, ...taglines].map((tagline, index) => (
            <span key={index} className="text-white text-sm font-semibold mx-6">
              {tagline}
            </span>
          ))}
        </div>
      </div>

      {/* Circular Sliding Categories */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our Collections
        </h2>
        <div className="relative h-64 overflow-hidden">
          <div className="flex gap-8 animate-scroll-infinite">
            {[...categories, ...categories].map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer relative group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/200/1e3a5f/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4">
                  <p className="text-white font-bold text-sm text-center px-2">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Complete Your Wedding Look!
          </h2>
          <p className="text-xl text-gray-600">
            From classic suits to elegant accessories!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x400/1e3a5f/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute top-2 right-2 bg-blue-800 text-white text-xs px-2 py-1 rounded">
                  NEW
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-gradient-to-r from-slate-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Finest fabrics with impeccable tailoring</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Classic Elegance</h3>
              <p className="text-gray-600">Timeless styles for your special day</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Collection</h3>
              <p className="text-gray-600">Everything for the perfect gentleman look</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 20s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ChristianGroomWearPage;
