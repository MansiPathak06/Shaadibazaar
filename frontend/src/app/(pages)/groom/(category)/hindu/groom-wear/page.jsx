"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const HinduGroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      name: "Sherwani / Achkan",
      image: "https://i.pinimg.com/736x/66/9f/44/669f44f7c86cfb4b941eaa6bec0bad08.jpg",
      slug: "sherwani-achkan"
    },
    {
      name: "Kurta-Pajama",
      image: "https://i.pinimg.com/736x/3d/9d/74/3d9d74c7d539f53417837c7ea62ed8c6.jpg",
      slug: "kurta-pajama"
    },
    {
      name: "Dhoti-Kurta (Traditional)",
      image: "https://i.pinimg.com/1200x/d7/92/c5/d792c5868103e146c37db265fc10fe21.jpg",
      slug: "dhoti-kurta"
    },
    {
      name: "Safa / Turban",
      image: "https://i.pinimg.com/1200x/f9/43/c9/f943c9812e41a8645b69dfca50c44fb3.jpg",
      slug: "safa-turban"
    },
    {
      name: "Stole / Dupatta",
      image: "https://i.pinimg.com/1200x/2e/46/3a/2e463a76fa9e302bb539d5461952e029.jpg",
      slug: "stole-dupatta"
    },
    {
      name: "Sehra",
      image: "https://i.pinimg.com/1200x/44/08/66/440866d45e4aa969a419e7ecb3af559c.jpg",
      slug: "sehra"
    },
    {
      name: "Turban Brooch",
      image: "https://i.pinimg.com/736x/38/d0/16/38d0168d6305feb90bb2e35a9588d5ed.jpg",
      slug: "turban-brooch"
    },
    {
      name: "Mojari / Jutti",
      image: "https://i.pinimg.com/736x/db/ea/36/dbea360f6aee1d5907535e7f054a5948.jpg",
      slug: "mojari-jutti"
    },
    {
      name: "Cufflinks",
      image: "https://i.pinimg.com/736x/07/da/b3/07dab367be661ad21d78553a9c0b8f7c.jpg",
      slug: "cufflinks"
    },
    {
      name: "Wristwatch",
      image: "https://i.pinimg.com/736x/c6/75/c9/c675c9608fe58040ccaabcc13fa1a8c2.jpg",
      slug: "wristwatch"
    },
    {
      name: "Rudraksha / Pearl Mala",
      image: "https://i.pinimg.com/1200x/b4/fd/36/b4fd3684c616c136b646e824ac813902.jpg",
      slug: "rudraksha-mala"
    },
    {
      name: "Perfume / Attar",
      image: "https://i.pinimg.com/736x/1b/2b/da/1b2bda05aca7b9b250de4769025986e2.jpg",
      slug: "perfume-attar"
    }
  ];

  const taglines = [
    "✨ Dress Like a Raja",
    "👑 Your Perfect Hindu Wedding Look",
    "💫 Tradition Meets Elegance",
    "🌟 Celebrate Your Heritage",
    "✨ Authentic Indian Style",
    "👔 Regal Groom Attire",
    "💍 Shubh Vivah, Shubh Pehnaava"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative h-[27vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hindu/groom/hero-banner.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-4 inline-block">
            <Sparkles className="w-12 h-12 text-red-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Hindu Groom Wear & Accessories
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 font-light drop-shadow">
            Celebrate Your Special Day with Authentic Indian Elegance!
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-2 overflow-hidden">
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
              <Link
                key={index}
                href={`/groom/all-products?category=groomwear&subCategory=${category.slug}&religion=hindu`}
                className="shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer relative group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/200/dc2626/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-4">
                  <p className="text-white font-bold text-sm text-center px-2">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Complete Your Hindu Wedding Look!
          </h2>
          <p className="text-xl text-gray-600">
            From traditional Indian attire to sacred accessories!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/groom/all-products?category=groomwear&subCategory=${category.slug}&religion=hindu`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x400/dc2626/ffffff?text=${encodeURIComponent(category.name)}`;
                  }}
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  NEW
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked collections with finest Indian craftsmanship</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Tradition</h3>
              <p className="text-gray-600">Designs that honor Hindu heritage and sacred values</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Collection</h3>
              <p className="text-gray-600">Everything for your sacred Vivah ceremony</p>
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

export default HinduGroomWearPage;