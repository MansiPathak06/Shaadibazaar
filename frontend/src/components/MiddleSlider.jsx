'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MiddleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      title: "Mattress",
      price: "₹2,999",
      subtitle: "Wakefit, Sleepwell & more",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&h=400&fit=crop",
      link: "/products/mattress"
    },
    {
      title: "Furniture",
      price: "₹4,999",
      subtitle: "Modern & Stylish designs",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=400&fit=crop",
      link: "/products/furniture"
    },
    {
      title: "Home Decor",
      price: "₹1,499",
      subtitle: "Beautiful decorative items",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=400&fit=crop",
      link: "/products/home-decor"
    },
    {
      title: "Kitchen",
      price: "₹3,499",
      subtitle: "Premium kitchenware",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=400&fit=crop",
      link: "/products/kitchen"
    },
    {
      title: "Electronics",
      price: "₹9,999",
      subtitle: "Latest gadgets & more",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop",
      link: "/products/electronics"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleShopNow = (link) => {
    router.push(link);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl my-8 px-4">
      {/* Slider Container */}
      <div className="relative h-80 md:h-96 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-4 left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-8 right-12 w-8 h-8 bg-yellow-400 rounded-full opacity-70 animate-pulse delay-100"></div>
        <div className="absolute bottom-12 left-1/4 w-10 h-4 bg-yellow-400 rounded-full opacity-50 rotate-45"></div>
        <div className="absolute top-16 right-1/3 w-12 h-4 bg-yellow-400 rounded-full opacity-50 rotate-12"></div>
        
        {/* Slides */}
        <div className="relative h-full flex items-center justify-center px-4 md:px-16">
          <div className="relative w-full max-w-5xl">
            {/* Product Image with Overlay Content */}
            <div className="relative w-full h-64 md:h-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Image */}
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              
              {/* Content Overlay on Image */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 text-white z-10">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                    {slides[currentSlide].title}
                  </h2>
                  <p className="text-4xl md:text-6xl font-extrabold mb-2 text-yellow-400 drop-shadow-lg">
                    From {slides[currentSlide].price}
                  </p>
                  <p className="text-lg md:text-xl opacity-90 mb-6 drop-shadow-md">
                    {slides[currentSlide].subtitle}
                  </p>
                  
                  {/* Button in front of image */}
                  <button
                    onClick={() => handleShopNow(slides[currentSlide].link)}
                    className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Slide Indicator Badge */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-blue-600 shadow-lg' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
