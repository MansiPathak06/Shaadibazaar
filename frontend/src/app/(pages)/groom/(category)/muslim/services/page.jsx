"use client";
import React, { useState, useEffect } from "react"; // ✅ Add useEffect
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ Add this


const MuslimGroomServicesPage = () => {
  const router = useRouter(); // ✅ ADD THIS
  const [currentSlide, setCurrentSlide] = useState(0);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ REPLACE WITH YOUR API:
  const fetchMuslimGroomServices = async () => {
    try {
      setLoading(true);
      // Use your existing products API with groomwear filters
      const response = await fetch(
        `http://localhost:5000/api/products?category=groomwear&religion=muslim`
      );

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const result = await response.json();
      setServices(result.products || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      setServices([]); // Fallback to empty array
    } finally {
      setLoading(false);
    }
  };

  // Hero slides data
  const heroSlides = [
    {
      title: "Muslim Groom Services",
      subtitle: "Complete Essentials For Your Sacred Nikah",
      image: "https://i.pinimg.com/1200x/35/45/d9/3545d95b0f1490c96e4f5d8c1ebda993.jpg",
    },
    {
      title: "Traditional Wedding Essentials",
      subtitle: "Everything You Need For Blessed Ceremonies",
      image: "https://i.pinimg.com/736x/18/52/64/1852649e05c49f1dae1f61208b934346.jpg",
    },
    {
      title: "Complete Groom Package",
      subtitle: "Make Your Special Day Memorable",
      image: "https://i.pinimg.com/1200x/8e/50/3a/8e503ac4de03cc5f4b5fe36ec70c5cfa.jpg",
    },
  ];

  // Groom services categories - FIXED with correct subCategory values
  const categories = [
    {
      name: "Groom Makeover",
      items: "Professional Services",
      image: "https://i.pinimg.com/736x/08/c9/f1/08c9f1858b3df3e23b60ac657b482c94.jpg",
      subCategory: "groom-makeover"
    },
    {
      name: "Beard Styling",
      items: "Expert Styling",
      image: "https://i.pinimg.com/736x/ba/5b/b3/ba5bb3a031cedb9d7e06a4f3393b4399.jpg",
      subCategory: "beard-styling"
    },
    {
      name: "Arabic Henna",
      items: "Traditional Mehndi",
      image: "https://i.pinimg.com/736x/28/5c/2a/285c2af0968e779bc9fc21b255b21afd.jpg",
      subCategory: "arabic-henna"
    },
    {
      name: "Groom Photoshoot",
      items: "Professional Photography",
      image: "https://i.pinimg.com/736x/31/fe/c7/31fec7f8418078853845f59ce4ba6348.jpg",
      subCategory: "groom-photoshoot"
    },
    {
      name: "Car Decoration",
      items: "Wedding Car Styling",
      image: "https://i.pinimg.com/736x/19/4f/21/194f21d68486128fc4f6cffc9dba8e80.jpg",
      subCategory: "car-decoration"
    },
    {
      name: "Baraat Management",
      items: "Complete Planning",
      image: "https://i.pinimg.com/1200x/21/20/6d/21206db8e4a1339d341a3c9ef69601a3.jpg",
      subCategory: "baraat-management"
    },
  ];

  // Trending services
  const trendingServices = [
    {
      name: "Groom Makeover Package",
      price: "₹14,999",
      oldPrice: "₹18,999",
      badge: "POPULAR",
      image: "https://i.pinimg.com/736x/05/fb/ce/05fbcee8766d342c40404cf51a17aa7e.jpg",
      subCategory: "groom-makeover"
    },
    {
      name: "Professional Beard Styling",
      price: "₹5,999",
      image: "https://i.pinimg.com/1200x/83/26/90/832690b7ad3f09c75b38d4f6314d7ab0.jpg",
      subCategory: "beard-styling"
    },
    {
      name: "Arabic Henna Design",
      price: "₹3,999",
      badge: "NEW",
      image: "https://i.pinimg.com/1200x/1a/84/c5/1a84c575aded369e180b5499a3906808.jpg",
      subCategory: "arabic-henna"
    },
    {
      name: "Complete Groom Package",
      price: "₹39,999",
      oldPrice: "₹49,999",
      badge: "25% OFF",
      image: "https://i.pinimg.com/1200x/11/6a/1f/116a1f59a8246ba19c630127b23fac32.jpg",
      subCategory: "groom-makeover"
    },
    {
      name: "Groom Photoshoot",
      price: "₹27,999",
      oldPrice: "₹34,999",
      badge: "TRENDING",
      image: "https://i.pinimg.com/1200x/c1/9c/4c/c19c4cb41c21baf323c0d4b47561ea47.jpg",
      subCategory: "groom-photoshoot"
    },
    {
      name: "Premium Car Decoration",
      price: "₹24,999",
      oldPrice: "₹29,999",
      badge: "NEW",
      image: "https://i.pinimg.com/1200x/26/a3/78/26a37878f0c5524f7b809f408ca14b99.jpg",
      subCategory: "car-decoration"
    },
    {
      name: "Baraat Management Service",
      price: "₹45,999",
      badge: "POPULAR",
      image: "https://i.pinimg.com/1200x/df/39/34/df3934cdaf47ba13b8aed2cda89d7b7d.jpg",
      subCategory: "baraat-management"
    },
    {
      name: "Luxury Groom Makeover",
      price: "₹24,999",
      oldPrice: "₹29,999",
      badge: "NEW",
      image: "https://i.pinimg.com/1200x/d6/63/b4/d663b439d32ecf8d5628b41bc8f0d429.jpg",
      subCategory: "groom-makeover"
    },
    {
      name: "Traditional Beard Care",
      price: "₹7,999",
      image: "https://i.pinimg.com/736x/f3/1f/fa/f31ffa6694112c18833ea6bfa758bd49.jpg",
      subCategory: "beard-styling"
    },
    {
      name: "Bridal Henna Session",
      price: "₹6,999",
      badge: "TRENDING",
      image: "https://i.pinimg.com/736x/4f/e3/8b/4fe38ba21015b9cbda4dab92461ffbb5.jpg",
      subCategory: "arabic-henna"
    },
    {
      name: "Deluxe Car Decoration",
      price: "₹18,999",
      oldPrice: "₹23,999",
      badge: "POPULAR",
      image: "https://i.pinimg.com/736x/94/11/73/9411738bd96940af9ebeb19b84d8ff00.jpg",
      subCategory: "car-decoration"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // ✅ REPLACE YOUR CURRENT FUNCTIONS WITH THESE:
  const handleCategoryClick = (subCategory) => {
    router.push(`/groom/all-services?category=muslim-groom-services&subCategory=${subCategory}`);
  };

  const handleAllServicesClick = () => {
    router.push("/groom/all-services?category=muslim-groom-services");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-62.5 overflow-hidden group">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dynamic Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              {/* Animated Content */}
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute"
                    }`}
                >
                  {/* Animated Tag */}
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-500/30 to-green-600/30 backdrop-blur-md border border-emerald-400/40 rounded-full px-4 py-1.5 shadow-lg shadow-emerald-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs text-emerald-100 font-normal tracking-widest">
                        MUSLIM GROOM SERVICES
                      </span>
                    </div>
                  </div>

                  {/* Title with Gradient */}
                  <h1 className="text-4xl md:text-5xl font-medium uppercase text-white mb-3 leading-tight">
                    {slide.title}
                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-green-600 mt-3 rounded-full" />
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base text-gray-200/90 leading-relaxed max-w-lg font-light">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Minimalist */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl hover:bg-white/15 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/10 hover:border-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl hover:bg-white/15 p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/10 hover:border-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>

        {/* Modern Progress Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group/dot relative p-1"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-500 ${currentSlide === index
                  ? "h-2 w-10 bg-gradient-to-r from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/50"
                  : "h-2 w-2 bg-white/30 group-hover/dot:bg-white/50 group-hover/dot:w-4"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* Animated Decorative Elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Slide Counter */}
        <div className="absolute top-6 right-8 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="text-white text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Popular Categories Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-4xl font-medium md:text-5xl uppercase text-center text-gray-800 mb-12">
            Groom <span className="text-green-700">Services</span>
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <div
                  key={index}
                  className="shrink-0 w-40 text-center group cursor-pointer"
                  onClick={() => handleCategoryClick(category.subCategory)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-md font-medium text-gray-800 mb-1">
                    {category.name}
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
          <div
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => handleCategoryClick("groom-makeover")}
          >
            <img
              src="https://i.pinimg.com/1200x/40/6c/e9/406ce91bd026a96c5c0025e8c1095967.jpg"
              alt="Complete Groom Package"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Complete Groom Package
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={handleAllServicesClick}
          >
            <img
              src="https://i.pinimg.com/1200x/1a/96/d1/1a96d1ffbde2f010ecd46632114da934.jpg"
              alt="Premium Services"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
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
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-medium uppercase md:text-5xl text-center text-gray-800 mb-6">
            Featured Groom <span className="text-green-700">Services</span>
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
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => handleCategoryClick(service.subCategory)}
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
                  <h3 className="text-lg text-gray-800 mb-2">{service.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-medium text-gray-800">
                      Click here to explore more!
                    </span>
                  </div>
                  {service.price && (
                    <div className="mt-2 text-lg font-bold text-green-700">
                      {service.price}
                    </div>
                  )}
                  {service.oldPrice && (
                    <div className="text-xs text-gray-500 line-through">
                      {service.oldPrice}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={handleAllServicesClick}
              className="group relative mt-12 inline-flex items-center gap-3 
               px-12 py-4 rounded-full text-lg font-semibold text-white
               bg-gradient-to-r from-green-700 to-green-600
               shadow-lg shadow-green-900/30
               transition-all duration-300
               hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/40
               active:scale-95 overflow-hidden"
            >
              {/* Shine overlay */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-12 translate-x-[-120%] group-hover:translate-x-[120%] transition duration-700" />
              </span>

              {/* Glow ring */}
              <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-4 ring-green-400/30 transition-all duration-300" />

              {/* Text */}
              <span className="relative tracking-wide">VIEW ALL ITEMS</span>

              {/* Icon */}
              <ChevronRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
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