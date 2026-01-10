"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const MuslimGroomWearPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero items with slugs for navigation
  const heroItems = [
    {
      name: "Sherwani",
      image: "https://i.pinimg.com/1200x/57/6e/86/576e8671ca1a532d14a67d380d2a24a6.jpg",
      slug: "sherwani"
    },
    {
      name: "Pathani Suit",
      image: "https://i.pinimg.com/736x/bd/21/ec/bd21ec37ea008e8ca33e00d274bf702c.jpg",
      slug: "pathani-suit"
    },
    {
      name: "Kurta-Pajama",
      image: "https://i.pinimg.com/736x/f8/ad/62/f8ad62a261fd5305146e4286feccd033.jpg",
      slug: "kurta-pajama"
    },
    {
      name: "Topi",
      image: "https://i.pinimg.com/1200x/91/36/03/913603bf9127c8f3073152efae04e026.jpg",
      slug: "traditional-cap"
    }
  ];

  const categories = [
    {
      name: "Sherwani",
      image: "https://i.pinimg.com/1200x/57/6e/86/576e8671ca1a532d14a67d380d2a24a6.jpg",
      slug: "sherwani",
      accent: "#10b981"
    },
    {
      name: "Pathani Suit",
      image: "https://i.pinimg.com/736x/bd/21/ec/bd21ec37ea008e8ca33e00d274bf702c.jpg",
      slug: "pathani-suit",
      accent: "#14b8a6"
    },
    {
      name: "Kurta-Pajama",
      image: "https://i.pinimg.com/736x/f8/ad/62/f8ad62a261fd5305146e4286feccd033.jpg",
      slug: "kurta-pajama",
      accent: "#059669"
    },
    {
      name: "Long Coat / Achkan",
      image: "https://i.pinimg.com/1200x/46/19/c2/4619c293beb07ba13b33e5015735ac8a.jpg",
      slug: "long-coat",
      accent: "#0d9488"
    },
    {
      name: "Traditional Cap / Topi",
      image: "https://i.pinimg.com/1200x/91/36/03/913603bf9127c8f3073152efae04e026.jpg",
      slug: "traditional-cap",
      accent: "#06b6d4"
    },
    {
      name: "Mojari / Leather Shoes",
      image: "https://i.pinimg.com/1200x/df/a0/46/dfa0465f7a596a28c1ef5ba9452a41fc.jpg",
      slug: "mojari",
      accent: "#10b981"
    },
    {
      name: "Attar / Perfume",
      image: "https://i.pinimg.com/1200x/90/7f/9f/907f9f0af6dd2c5334e397ac5926e438.jpg",
      slug: "attar",
      accent: "#14b8a6"
    },
    {
      name: "Tasbih / Prayer Beads",
      image: "https://i.pinimg.com/736x/8e/3c/73/8e3c73d9c0a9f3a0e5a5f5f5f5f5f5f5.jpg",
      slug: "tasbih",
      accent: "#059669"
    },
    {
      name: "Cufflinks",
      image: "https://i.pinimg.com/1200x/b5/8b/48/b58b48830b1f9ac13b4729dfe087a24d.jpg",
      slug: "cufflinks",
      accent: "#0d9488"
    },
    {
      name: "Wristwatch",
      image: "https://i.pinimg.com/1200x/09/e7/2b/09e72be546c81d86cdc2185c0fe02b14.jpg",
      slug: "wristwatch",
      accent: "#06b6d4"
    },
    {
      name: "Brooch / Pin",
      image: "https://i.pinimg.com/736x/0d/a7/a9/0da7a9360a7d63cf392c31c038605e4d.jpg",
      slug: "brooch",
      accent: "#10b981"
    },
    {
      name: "Stole / Shawl",
      image: "https://i.pinimg.com/1200x/21/c3/32/21c3328e370f0b906511d626f86c3ec0.jpg",
      slug: "stole",
      accent: "#14b8a6"
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
      <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-900 overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-100 mb-4 tracking-wide">
              Muslim Groom Collections
            </h1>
            <p className="text-xl text-emerald-200 font-light">
              Celebrate Your Nikah with Islamic Elegance!
            </p>
          </div>

          {/* Hero Images Grid - Now Clickable */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {heroItems.map((item, index) => (
              <Link
                key={index}
                href={`/groom/all-products?category=groomwear&subCategory=${item.slug}&religion=muslim`}
                className="relative group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/10b981/ffffff?text=${encodeURIComponent(item.name)}`;
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
      <div className="bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            {[...taglines, ...taglines].map((tagline, index) => (
              <span key={index} className="text-emerald-100 text-sm md:text-base font-light tracking-widest mx-8">
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
                href={`/groom/all-products?category=groomwear&subCategory=${category.slug}&religion=muslim`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collections - Now Clickable */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-emerald-900 mb-8 uppercase tracking-wide">
          Featured Collections
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/groom/all-products?category=groomwear&subCategory=${category.slug}&religion=muslim`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/10b981/ffffff?text=${encodeURIComponent(category.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-emerald-600 text-white text-xs px-2 py-1 rounded">
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

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center uppercase tracking-wide">
            Complete Muslim Groom Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover an exquisite array of Islamic groom essentials that will make your Nikah day truly blessed and unforgettable. From traditional sherwanis to elegant accessories, we have everything you need to complete your groom look with dignity and style.
          </p>
          <div className="text-center">
            <Link
              href="/groom/all-products?category=groomwear&religion=muslim"
              className="bg-emerald-900 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
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

export default MuslimGroomWearPage;
