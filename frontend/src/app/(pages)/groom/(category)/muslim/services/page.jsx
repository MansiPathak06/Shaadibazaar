"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MuslimGroomServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Muslim Groom Services",
      subtitle: "Complete Essentials For Your Sacred Nikah",
      image:
        "https://i.pinimg.com/1200x/35/45/d9/3545d95b0f1490c96e4f5d8c1ebda993.jpgv",
    },
    
    {
      title: "Traditional Wedding Essentials",
      subtitle: "Everything You Need For Blessed Ceremonies",
      image:
        "https://i.pinimg.com/736x/18/52/64/1852649e05c49f1dae1f61208b934346.jpg",
    },
    {
      title: "Complete Groom Package",
      subtitle: "Make Your Special Day Memorable",
      image:
        "https://i.pinimg.com/1200x/8e/50/3a/8e503ac4de03cc5f4b5fe36ec70c5cfa.jpg",
    },
  ];

  // Groom services categories
  const categories = [
    {
      name: "Groom Makeover",
      items: "Professional Services",
      image:
        "https://i.pinimg.com/736x/08/c9/f1/08c9f1858b3df3e23b60ac657b482c94.jpg",
    },
    {
      name: "Beard Styling",
      items: "Expert Styling",
      image:
        "https://i.pinimg.com/736x/ba/5b/b3/ba5bb3a031cedb9d7e06a4f3393b4399.jpg",
    },
    {
      name: "Arabic Henna",
      items: "Traditional Mehndi",
      image:
        "https://i.pinimg.com/736x/28/5c/2a/285c2af0968e779bc9fc21b255b21afd.jpg",
    },
    {
      name: "Groom Photoshoot",
      items: "Professional Photography",
      image:
        "https://i.pinimg.com/736x/31/fe/c7/31fec7f8418078853845f59ce4ba6348.jpg",
    },
    {
      name: "Car Decoration",
      items: "Wedding Car Styling",
      image:
        "https://i.pinimg.com/736x/19/4f/21/194f21d68486128fc4f6cffc9dba8e80.jpg",
    },
    {
      name: "Baraat Management",
      items: "Complete Planning",
      image:
        "https://i.pinimg.com/1200x/21/20/6d/21206db8e4a1339d341a3c9ef69601a3.jpg",
    },
  ];

  // Trending services
  const trendingServices = [
    {
      name: "Groom Makeover Package",
      price: "₹14,999",
      oldPrice: "₹18,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/736x/05/fb/ce/05fbcee8766d342c40404cf51a17aa7e.jpg",
    },
    {
      name: "Professional Beard Styling",
      price: "₹5,999",
      image:
        "https://i.pinimg.com/1200x/83/26/90/832690b7ad3f09c75b38d4f6314d7ab0.jpg",
    },
    {
      name: "Arabic Henna Design",
      price: "₹3,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/1a/84/c5/1a84c575aded369e180b5499a3906808.jpg",
    },
    {
      name: "Complete Groom Package",
      price: "₹39,999",
      oldPrice: "₹49,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/11/6a/1f/116a1f59a8246ba19c630127b23fac32.jpg",
    },
    {
      name: "Groom Photoshoot",
      price: "₹27,999",
      oldPrice: "₹34,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/1200x/c1/9c/4c/c19c4cb41c21baf323c0d4b47561ea47.jpg",
    },
    {
      name: "Premium Car Decoration",
      price: "₹24,999",
      oldPrice: "₹29,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/26/a3/78/26a37878f0c5524f7b809f408ca14b99.jpg",
    },
    {
      name: "Baraat Management Service",
      price: "₹45,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/1200x/df/39/34/df3934cdaf47ba13b8aed2cda89d7b7d.jpg",
    },
    {
      name: "Luxury Groom Makeover",
      price: "₹24,999",
      oldPrice: "₹29,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/d6/63/b4/d663b439d32ecf8d5628b41bc8f0d429.jpg",
    },
    {
      name: "Traditional Beard Care",
      price: "₹7,999",
      image:
        "https://i.pinimg.com/736x/f3/1f/fa/f31ffa6694112c18833ea6bfa758bd49.jpg",
    },
    {
      name: "Bridal Henna Session",
      price: "₹6,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/736x/4f/e3/8b/4fe38ba21015b9cbda4dab92461ffbb5.jpg",
    },
    {
      name: "Deluxe Car Decoration",
      price: "₹18,999",
      oldPrice: "₹23,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/736x/94/11/73/9411738bd96940af9ebeb19b84d8ff00.jpg",
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
                      MUSLIM GROOM SERVICES
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button className="bg-green-700 text-white px-8 py-3 rounded hover:bg-green-800 transition-colors">
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
                currentSlide === index ? "bg-green-700 w-8" : "bg-white/60"
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
              src="https://i.pinimg.com/1200x/40/6c/e9/406ce91bd026a96c5c0025e8c1095967.jpg"
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
              src="https://i.pinimg.com/1200x/1a/96/d1/1a96d1ffbde2f010ecd46632114da934.jpg"
              alt="Premium Services"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Premium Services Available
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
            <button className="text-green-700 border-b-2 border-green-700 pb-2">
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
            <button className="group mt-12 relative inline-flex items-center gap-3 bg-green-700 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
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

export default MuslimGroomServicesPage;