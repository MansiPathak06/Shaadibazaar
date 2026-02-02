"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const ChristianGroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero items with slugs for navigation
  const heroItems = [
    {
      name: "Tuxedo",
      image: "https://i.pinimg.com/1200x/14/b3/d2/14b3d20dd034eca22aa9d6be3814bf8d.jpg",
      slug: "tuxedo"
    },
    {
      name: "3-Piece Suit",
      image: "https://i.pinimg.com/1200x/da/23/a5/da23a5aa231d464530ebc0f521e64b65.jpg",
      slug: "three-piece-suit"
    },
    {
      name: "Tie / Bow Tie",
      image: "https://i.pinimg.com/1200x/0c/ab/99/0cab999e8d139c11a0086ef4b9beb4ab.jpg",
      slug: "tie-bow-tie"
    },
    {
      name: "Boutonniere",
      image: "https://i.pinimg.com/736x/4b/c9/d2/4bc9d21acd9e2c7f7ef91442d4c96daa.jpg",
      slug: "boutonniere"
    }
  ];

  const categories = [
    {
      name: "Tuxedo",
      image: "https://i.pinimg.com/1200x/14/b3/d2/14b3d20dd034eca22aa9d6be3814bf8d.jpg",
      slug: "tuxedo",
      accent: "#1e3a5f"
    },
    {
      name: "3-Piece Suit",
      image: "https://i.pinimg.com/1200x/da/23/a5/da23a5aa231d464530ebc0f521e64b65.jpg",
      slug: "three-piece-suit",
      accent: "#1e40af"
    },
    {
      name: "Tie / Bow Tie",
      image: "https://i.pinimg.com/1200x/0c/ab/99/0cab999e8d139c11a0086ef4b9beb4ab.jpg",
      slug: "tie-bow-tie",
      accent: "#334155"
    },
    {
      name: "Boutonniere",
      image: "https://i.pinimg.com/736x/4b/c9/d2/4bc9d21acd9e2c7f7ef91442d4c96daa.jpg",
      slug: "boutonniere",
      accent: "#1d4ed8"
    },
    {
      name: "Pocket Square",
      image: "https://i.pinimg.com/1200x/1a/7f/7f/1a7f7f11744892425c140be65c09433c.jpg",
      slug: "pocket-square",
      accent: "#475569"
    },
    {
      name: "Leather Shoes",
      image: "https://i.pinimg.com/1200x/d6/a3/8c/d6a38c3cc17309559c2bcbbd0d15de37.jpg",
      slug: "leather-shoes",
      accent: "#1e293b"
    },
    {
      name: "Cufflinks",
      image: "https://i.pinimg.com/1200x/af/1f/91/af1f912dcb1c293096f7ce8ad26f8889.jpg",
      slug: "cufflinks",
      accent: "#2563eb"
    },
    {
      name: "Perfume",
      image: "https://i.pinimg.com/736x/79/60/5f/79605f0c5faabdb316963d15988dc2d5.jpg",
      slug: "perfume",
      accent: "#3b82f6"
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
      <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-1 mt-2 relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-100 mb-4 tracking-wide">
              Groom Collections
            </h1>
            <p className="text-xl text-slate-200 font-light">
              Step Into Forever with Timeless Elegance!
            </p>
          </div>

          {/* Hero Images Grid - Now Clickable */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {heroItems.map((item, index) => (
              <Link
                key={index}
                href={`/groom/all-products?category=christian-groomwear&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/1e3a5f/ffffff?text=${encodeURIComponent(item.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] text-center">
                    <p className="text-gray-400 text-sm md:text-base backdrop-blur font-medium drop-shadow-md">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            {[...taglines, ...taglines].map((tagline, index) => (
              <span key={index} className="text-slate-100 text-sm md:text-base font-light tracking-widest mx-8">
                {tagline}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Circular Sliding Categories - Now Clickable */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our Collections
        </h2>
        <div className="relative h-64 overflow-hidden">
          <div className="flex gap-8 animate-scroll-infinite">
            {[...categories, ...categories].map((category, index) => (
              <Link
                key={index}
                href={`/groom/all-products?category=christian-groomwear&subCategory=${category.slug}`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collections - Now Clickable */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 uppercase tracking-wide">
          Featured Collections
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/groom/all-products?category=christian-groomwear&subCategory=${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/1e3a5f/ffffff?text=${encodeURIComponent(category.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-blue-800 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2 capitalize">
                    {category.name}
                  </h3>
                  <span
                    className="text-xs px-4 py-2 rounded-full border-2 transition-colors duration-300 inline-block group-hover:text-white"
                    style={{
                      borderColor: category.accent,
                      color: category.accent,
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = category.accent;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = category.accent;
                    }}
                  >
                    EXPLORE
                  </span>
                </div>
              </div>
            </Link>
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

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center uppercase tracking-wide">
            Complete Groom Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover an exquisite selection of Christian groom attire that combines timeless elegance with modern sophistication. From classic tuxedos to refined accessories, we offer everything you need for a distinguished wedding day look.
          </p>
          <div className="text-center">
            <Link
              href="/groom/all-products?category=christian-groomwear"
              className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL COLLECTIONS
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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

export default ChristianGroomWearPage;