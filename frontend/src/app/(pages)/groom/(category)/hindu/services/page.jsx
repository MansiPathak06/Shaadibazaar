"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HinduGroomServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Hindu Groom Services",
      subtitle: "Complete Essentials For Your Sacred Wedding",
      image:
        "https://i.pinimg.com/736x/16/05/58/160558ab5eca1ee5200581fa7ea5abb5.jpg",
    },
    {
      title: "Traditional Wedding Essentials",
      subtitle: "Everything You Need For Auspicious Ceremonies",
      image:
        "https://i.pinimg.com/736x/bb/1a/bd/bb1abd6abc65fbe04fd4cbce16daf144.jpg",
    },
    {
      title: "Complete Groom Package",
      subtitle: "Make Your Special Day Memorable",
      image:
        "https://i.pinimg.com/1200x/35/01/f1/3501f18d71327b724339d918b69c1e82.jpg",
    },
  ];

  // Groom services categories
  const categories = [
    {
      name: "Groom Makeup",
      items: "Professional Services",
      image:
        "https://i.pinimg.com/736x/60/cd/2c/60cd2cff47f931c10e54ebd2a2e70a23.jpg",
    },
    {
      name: "Hairstyling",
      items: "Expert Styling",
      image:
        "https://i.pinimg.com/1200x/3a/03/7e/3a037e8a9225b3d979434dcec1758803.jpg",
    },
    {
      name: "Beard Trim/Shave",
      items: "Grooming Services",
      image:
        "https://i.pinimg.com/736x/38/71/4a/38714a9700ac21256997fb86a4e5193e.jpg",
    },
    {
      name: "Ubtan Session",
      items: "Pre-Wedding Ritual",
      image:
        "https://i.pinimg.com/736x/7c/1f/aa/7c1faa3d1ceb125957b31d776247e9df.jpg",
    },
    {
      name: "Groom Photoshoot",
      items: "Professional Photography",
      image:
        "https://i.pinimg.com/1200x/e5/02/23/e50223cb7c6b617e7e49a65914dd9f48.jpg",
    },
    {
      name: "Turban Tying Expert",
      items: "Traditional Styling",
      image:
        "https://i.pinimg.com/736x/cd/d9/64/cdd964ec4b83418af510af54dadc8cdc.jpg",
    },
    {
      name: "Sehra Tying Expert",
      items: "Sehra Decoration",
      image:
        "https://i.pinimg.com/736x/9f/ff/8f/9fff8fb4c1973d80f07771fdbf5c5482.jpg",
    },
    {
      name: "Ghodi Decoration",
      items: "Horse Decoration",
      image:
        "https://i.pinimg.com/736x/4d/06/18/4d0618a3208f0ecb26ad2ce47435440e.jpg",
    },
    {
      name: "Band-Baja",
      items: "Traditional Music",
      image:
        "https://i.pinimg.com/1200x/05/89/9c/05899c2b478ae6a4e4b20cbd3ad00acb.jpg",
    },
    {
      name: "DJ for Baraat",
      items: "Music & Entertainment",
      image:
        "https://i.pinimg.com/1200x/e2/31/3e/e2313e1717a08d1fd527b292b3b3e679.jpg",
    },
  ];

  // Trending services
  const trendingServices = [
    {
      name: "Groom Makeup Package",
      price: "₹12,999",
      oldPrice: "₹15,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/1200x/4b/14/8c/4b148cd77735e99a50156e9970131e8d.jpg",
    },
    {
      name: "Professional Hairstyling",
      price: "₹4,999",
      image:
        "https://i.pinimg.com/736x/03/62/13/03621378c00396cded9be123bc3e5de2.jpg",
    },
    {
      name: "Beard Trim & Shave",
      price: "₹2,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/ce/00/f9/ce00f9d43afd3fc0ce7b8413fba69a1b.jpg",
    },
    {
      name: "Complete Groom Package",
      price: "₹35,999",
      oldPrice: "₹45,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/99/e5/9c/99e59c78d7262514a18145519c5e2b89.jpg",
    },
    {
      name: "Ubtan Session",
      price: "₹6,999",
      image:
        "https://i.pinimg.com/1200x/4d/dd/b3/4dddb3883bad9ca67081ec48aa6ea740.jpg",
    },
    {
      name: "Groom Photoshoot",
      price: "₹25,999",
      oldPrice: "₹32,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/736x/9b/94/1a/9b941ac8437db6a9680971ff73afffe6.jpg",
    },
    {
      name: "Turban Tying Expert",
      price: "₹5,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/b3/0a/43/b30a43718777f8d2a01f62063871b493.jpg",
    },
    {
      name: "Sehra Tying Service",
      price: "₹4,999",
      image:
        "https://i.pinimg.com/1200x/cb/5a/d8/cb5ad8d6e9f956bcc4db877d2983ee47.jpg",
    },
    {
      name: "Ghodi Decoration",
      price: "₹18,999",
      image:
        "https://i.pinimg.com/736x/b7/24/47/b72447e516cf02e735e9e88e7ee441eb.jpg",
    },
    {
      name: "Band-Baja Service",
      price: "₹22,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/1200x/17/fa/7d/17fa7d11915079b2c6deac1d60ae044e.jpg",
    },
    {
      name: "DJ for Baraat",
      price: "₹28,999",
      oldPrice: "₹35,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/1200x/e2/31/3e/e2313e1717a08d1fd527b292b3b3e679.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-[250px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      HINDU GROOM SERVICES
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-orange-600 w-8" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories Section with Scrolling */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Groom Services
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 text-center group cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {category.name.toUpperCase()}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/736x/19/b7/25/19b7252b9c2fb31d7541d69f73764ace.jpg"
              alt="Complete Groom Package"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Complete Groom Package
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/1200x/1e/4f/47/1e4f477c44601df41bf9b743d76326bc.jpg"
              alt="Premium Ritual Items"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Premium Services available
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Featured Groom Services
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-orange-600 border-b-2 border-orange-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              MOST POPULAR
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST SELLERS
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {service.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                      {service.badge}
                    </div>
                  )}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-md text-gray-800 mb-2">{service.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-medium text-gray-800">
                      Click here to explore more!
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="group mt-12 relative inline-flex items-center gap-3 bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>VIEW ALL ITEMS</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HinduGroomServicesPage;