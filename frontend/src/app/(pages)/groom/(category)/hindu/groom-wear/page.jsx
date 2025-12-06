
"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const GroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: "Sherwani / Achkan",
      image: "https://i.pinimg.com/1200x/08/52/86/0852865bef32a5b168c190f27cc1871d.jpg"
    },
    {
      name: "Kurta-Pajama",
      image: "https://i.pinimg.com/736x/a3/ad/e0/a3ade063f790275a02d1e95c60ff52a8.jpg"
    },
    {
      name: "Dhoti-Kurta",
      image: "https://i.pinimg.com/1200x/39/18/2e/39182e12b82a24931eefe339d08a4987.jpg"
    },
    {
      name: "Safa / Turban",
      image: "https://i.pinimg.com/1200x/14/7e/52/147e5251429e9f1e5576a19c2a2a899b.jpg"
    },
    {
      name: "Stole / Dupatta",
      image: "https://i.pinimg.com/1200x/21/c3/32/21c3328e370f0b906511d626f86c3ec0.jpg"
    },
    {
      name: "Sehra",
      image: "https://i.pinimg.com/736x/95/12/4b/95124b812501040acfd4a59c9d9e89dc.jpg"
    },
    {
      name: "Turban Brooch",
      image: "https://i.pinimg.com/736x/0d/a7/a9/0da7a9360a7d63cf392c31c038605e4d.jpg"
    },
    {
      name: "Mojari / Jutti",
      image: "https://i.pinimg.com/736x/e1/4d/66/e14d66a581b524b4a1d8080bf3567432.jpg"
    },
    {
      name: "Cufflinks",
      image: "https://i.pinimg.com/1200x/b5/8b/48/b58b48830b1f9ac13b4729dfe087a24d.jpg"
    },
    {
      name: "Wristwatch",
      image: "https://i.pinimg.com/1200x/09/e7/2b/09e72be546c81d86cdc2185c0fe02b14.jpg"
    },
    {
      name: "Rudraksha / Pearl Mala",
      image: "https://i.pinimg.com/736x/0b/13/1d/0b131d62301c27fc01df9b73d30abc48.jpg"
    },
    {
      name: "Perfume / Attar",
      image: "https://i.pinimg.com/736x/79/21/79/79217913bb0355eef8c15b7d09849fa3.jpg"
    }
  ];

  const taglines = [
    "✨ Dress Like Royalty",
    "👑 Your Perfect Wedding Look",
    "💫 Tradition Meets Elegance",
    "🌟 Make Your Day Unforgettable",
    "✨ Crafted with Love",
    "👔 Sophisticated Groom Style",
    "💍 Your Journey to Perfection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-[27vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/1200x/78/16/62/781662a8459d3076f72e380e7105ea4b.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 inline-block">
            <Sparkles className="w-12 h-12 text-orange-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Groom Wear & Accessories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 font-light drop-shadow">
            Celebrate Your Special Day with Traditional Elegance!
          </p>
          
        </div>

       
      </div>

      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-2 overflow-hidden">
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
                    e.target.src = `https://via.placeholder.com/200/f97316/ffffff?text=${encodeURIComponent(category.name)}`;
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
            Complete Your Wedding Look !
          </h2>
          <p className="text-xl text-gray-600">
            From traditional attire to elegant accessories !
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
                    e.target.src = `https://via.placeholder.com/300x400/f97316/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
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
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked collections with finest craftsmanship</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Traditional Elegance</h3>
              <p className="text-gray-600">Authentic designs that honor your heritage</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Collection</h3>
              <p className="text-gray-600">Everything you need for your perfect day</p>
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

export default GroomWearPage;