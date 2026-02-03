"use client";
import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const SikhGroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: "Sherwani / Achkan",
      image: "https://i.pinimg.com/736x/0e/77/b5/0e77b5d168001085c61bb72176f83752.jpg"
    },
    {
      name: "Punjabi Suit",
      image: "https://i.pinimg.com/1200x/c4/c6/9d/c4c69d1b94ea143e51f805edf965280a.jpg"
    },
    {
      name: "Turban (Pagri)",
      image: "https://i.pinimg.com/736x/54/db/1f/54db1fc696235044265c8b55f364e1b8.jpg"
    },
    {
      name: "Turban Kalgi",
      image: "https://i.pinimg.com/736x/66/d3/35/66d3356ac8bf9638bb8833823ba44fbf.jpg"
    },
    {
      name: "Kada",
      image: "https://i.pinimg.com/736x/cf/2c/13/cf2c13eac1da175ee654b6ec4f287a38.jpg"
    },
    {
      name: "Kirpan",
      image: "https://i.pinimg.com/736x/9e/09/59/9e09599fd6439a0a97b62936176dbe04.jpg"
    },
    {
      name: "Jutti",
      image: "https://i.pinimg.com/736x/e5/6b/b2/e56bb254ff06d64471aef33e6feb108f.jpg"
    },
    {
      name: "Stole",
      image: "https://i.pinimg.com/1200x/4f/35/a3/4f35a3285bbb84eddc70b66a8e0fef9c.jpg"
    }
  ];

  const taglines = [
    "✨ Dress Like a Sardar",
    "👑 Your Perfect Sikh Wedding Look",
    "💫 Tradition Meets Elegance",
    "🌟 Celebrate Your Heritage",
    "✨ Authentic Punjabi Style",
    "👔 Regal Groom Attire",
    "💍 Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh"
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-[27vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/98/d4/11/98d411da987db560588cdbb653818900.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 inline-block">
            <Sparkles className="w-12 h-12 text-orange-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Sikh Groom Wear & Accessories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 font-light drop-shadow">
            Celebrate Your Special Day with Authentic Punjabi Elegance!
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-linear-to-r from-orange-600 to-red-600 py-2 overflow-hidden">
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
                className="shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer relative group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/200/f97316/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4">
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
            Complete Your Sikh Wedding Look!
          </h2>
          <p className="text-xl text-gray-600">
            From traditional Punjabi attire to sacred accessories!
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
      <div className="bg-linear-to-r from-amber-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked collections with finest Punjabi craftsmanship</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Tradition</h3>
              <p className="text-gray-600">Designs that honor Sikh heritage and values</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Collection</h3>
              <p className="text-gray-600">Everything for your sacred Anand Karaj ceremony</p>
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

export default SikhGroomWearPage;