"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const MuslimGroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: "Sherwani",
      image: "https://i.pinimg.com/1200x/57/6e/86/576e8671ca1a532d14a67d380d2a24a6.jpg"
    },
    {
      name: "Pathani Suit",
      image: "https://i.pinimg.com/736x/bd/21/ec/bd21ec37ea008e8ca33e00d274bf702c.jpg"
    },
    {
      name: "Kurta-Pajama",
      image: "https://i.pinimg.com/736x/f8/ad/62/f8ad62a261fd5305146e4286feccd033.jpg"
    },
    {
      name: "Long Coat / Achkan",
      image: "https://i.pinimg.com/1200x/46/19/c2/4619c293beb07ba13b33e5015735ac8a.jpg"
    },
    {
      name: "Traditional Cap / Topi",
      image: "https://i.pinimg.com/1200x/91/36/03/913603bf9127c8f3073152efae04e026.jpg"
    },
    {
      name: "Mojari / Leather Shoes",
      image: "https://i.pinimg.com/1200x/df/a0/46/dfa0465f7a596a28c1ef5ba9452a41fc.jpg"
    },
    {
      name: "Attar",
      image: "https://i.pinimg.com/1200x/90/7f/9f/907f9f0af6dd2c5334e397ac5926e438.jpg"
    }
  ];

  const taglines = [
    "✨ Dress with Dignity & Grace",
    "🕌 Your Perfect Nikah Look",
    "💫 Tradition Meets Elegance",
    "🌟 Make Your Day Blessed",
    "✨ Crafted with Excellence",
    "👔 Sophisticated Groom Style",
    "💍 Your Journey to Perfection",
    "🌙 Islamic Elegance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative h-[27vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 inline-block">
            <Sparkles className="w-12 h-12 text-emerald-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Muslim Groom Wear & Accessories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 font-light drop-shadow">
            Celebrate Your Nikah with Islamic Elegance!
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-2 overflow-hidden">
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
                    e.target.src = `https://via.placeholder.com/200/10b981/ffffff?text=${encodeURIComponent(category.name)}`;
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
            Complete Your Nikah Look!
          </h2>
          <p className="text-xl text-gray-600">
            From traditional attire to elegant accessories!
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
                    e.target.src = `https://via.placeholder.com/300x400/10b981/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
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
      <div className="bg-gradient-to-r from-emerald-100 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked collections with finest craftsmanship</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Islamic Elegance</h3>
              <p className="text-gray-600">Authentic designs that honor your faith and culture</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Collection</h3>
              <p className="text-gray-600">Everything you need for your blessed day</p>
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
          animation: scroll-infinite 40s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MuslimGroomWearPage;