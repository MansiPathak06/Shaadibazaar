"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Heart, Star } from 'lucide-react';

const SikhGroomWearPage = () => {
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
      image: "https://i.pinimg.com/736x/0e/77/b5/0e77b5d168001085c61bb72176f83752.jpg",
      slug: "sherwani-achkan"
    },
    {
      name: "Punjabi Suit",
      image: "https://i.pinimg.com/1200x/c4/c6/9d/c4c69d1b94ea143e51f805edf965280a.jpg",
      slug: "punjabi-suit"
    },
    {
      name: "Turban",
      image: "https://i.pinimg.com/736x/54/db/1f/54db1fc696235044265c8b55f364e1b8.jpg",
      slug: "turban-pagri"
    },
    {
      name: "Kalgi",
      image: "https://i.pinimg.com/736x/66/d3/35/66d3356ac8bf9638bb8833823ba44fbf.jpg",
      slug: "turban-kalgi"
    }
  ];

  const categories = [
    {
      name: "Sherwani / Achkan",
      image: "https://i.pinimg.com/736x/0e/77/b5/0e77b5d168001085c61bb72176f83752.jpg",
      slug: "sherwani-achkan",
      accent: "#f97316"
    },
    {
      name: "Punjabi Suit",
      image: "https://i.pinimg.com/1200x/c4/c6/9d/c4c69d1b94ea143e51f805edf965280a.jpg",
      slug: "punjabi-suit",
      accent: "#dc2626"
    },
    {
      name: "Turban (Pagri)",
      image: "https://i.pinimg.com/736x/54/db/1f/54db1fc696235044265c8b55f364e1b8.jpg",
      slug: "turban-pagri",
      accent: "#d97706"
    },
    {
      name: "Turban Kalgi",
      image: "https://i.pinimg.com/736x/66/d3/35/66d3356ac8bf9638bb8833823ba44fbf.jpg",
      slug: "turban-kalgi",
      accent: "#ea580c"
    },
    {
      name: "Kada",
      image: "https://i.pinimg.com/736x/cf/2c/13/cf2c13eac1da175ee654b6ec4f287a38.jpg",
      slug: "kada",
      accent: "#f59e0b"
    },
    {
      name: "Kirpan",
      image: "https://i.pinimg.com/736x/9e/09/59/9e09599fd6439a0a97b62936176dbe04.jpg",
      slug: "kirpan",
      accent: "#ef4444"
    },
    {
      name: "Jutti",
      image: "https://i.pinimg.com/736x/e5/6b/b2/e56bb254ff06d64471aef33e6feb108f.jpg",
      slug: "jutti",
      accent: "#c2410c"
    },
    {
      name: "Stole",
      image: "https://i.pinimg.com/1200x/4f/35/a3/4f35a3285bbb84eddc70b66a8e0fef9c.jpg",
      slug: "stole",
      accent: "#b45309"
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
      <div className="relative bg-linear-to-r from-orange-900 via-red-900 to-orange-900 overflow-hidden">
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
            <h1 className="text-5xl md:text-6xl uppercase font-medium text-amber-100 mb-4 tracking-wide">
              Sikh Groom Collections
            </h1>
            <p className="text-xl text-amber-200 font-light">
              Celebrate Your Anand Karaj with Authentic Punjabi Elegance!
            </p>
          </div>

          {/* Hero Images Grid - Now Clickable */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {heroItems.map((item, index) => (
              <Link
                key={index}
                href={`/groom/all-products?category=sikh-groomwear&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-3/4 overflow-hidden rounded-lg shadow-2xl relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/f97316/ffffff?text=${encodeURIComponent(item.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

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
      <div className="bg-linear-to-r from-orange-900 via-red-800 to-orange-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            {[...taglines, ...taglines].map((tagline, index) => (
              <span key={index} className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
                {tagline}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Circular Sliding Categories - Now Clickable */}
      <div className="py-16 bg-white">
        <h2 className="text-4xl md:text-5xl uppercase font-medium text-center mb-12 text-gray-800">
          Explore Our Collections
        </h2>
        <div className="relative h-64 overflow-hidden">
          <div className="flex gap-8 animate-scroll-infinite">
            {[...categories, ...categories].map((category, index) => (
              <Link
                key={index}
                href={`/groom/all-products?category=sikh-groomwear&subCategory=${category.slug}`}
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
                  <p className="text-white font-normal text-sm text-center px-2">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collections - Now Clickable */}
      <div className="container mx-auto px-4 mb-9">
        <h2 className="text-4xl md:text-5xl font-medium text-orange-900 mb-8 uppercase tracking-wide">
          <span className='text-gray-900'>Featured</span> <span className='text-orange-600'>Collection</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/groom/all-products?category=sikh-groomwear&subCategory=${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-3/4 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x400/f97316/ffffff?text=${encodeURIComponent(category.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-medium text-lg text-gray-800 mb-2 capitalize">
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
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-800 uppercase">
              Why <span className='text-orange-600'>Choose</span> Our <span className='text-orange-600'>Collection</span>
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Crafted with devotion, designed with tradition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="group bg-white/70 backdrop-blur-md border border-orange-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="w-18 h-18 bg-linear-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Sparkles className="w-9 h-9 text-white" />
              </div>

              <h3 className="text-2xl font-normal text-gray-800 mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Handpicked collections crafted with finest Punjabi artistry and premium fabrics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white/70 backdrop-blur-md border border-orange-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="w-18 h-18 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Star className="w-9 h-9 text-white fill-white" />
              </div>

              <h3 className="text-2xl font-normal text-gray-800 mb-3">
                Authentic Tradition
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Designs rooted in Sikh heritage, honoring culture and sacred values.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white/70 backdrop-blur-md border border-orange-200 rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="w-18 h-18 bg-linear-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <Heart className="w-9 h-9 text-white" />
              </div>

              <h3 className="text-2xl font-normal text-gray-800 mb-3">
                Complete Collection
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Everything you need for your sacred Anand Karaj ceremony in one place.
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* Collections Info Section */}
      <div className="container mx-auto px-4 ">
        <div className="bg-white rounded-2xl p-12 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-medium text-orange-900 mb-8 text-center uppercase tracking-wide">
            Complete <span className='text-orange-600'>Sikn</span> Groom <span className='text-orange-600'>Collections</span>
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover an exquisite array of traditional Sikh groom essentials that will make your Anand Karaj truly unforgettable. From majestic sherwanis and vibrant Punjabi suits to sacred Kakars and elegant accessories, we have everything you need to honor your heritage with style and dignity.
          </p>
          <div className="text-center">
            <Link
              href="/groom/all-products?category=sikh-groomwear"
              className="bg-orange-900 text-white px-8 py-3 rounded-full hover:bg-orange-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
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

export default SikhGroomWearPage;