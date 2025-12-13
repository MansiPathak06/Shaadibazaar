'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MiddleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

const slides = [
  {
    title: "Jewellery",
    price: "Starting at ₹2,999",
    subtitle: "Bridal gold, diamond & imitation jewellery",
    image: "https://i.pinimg.com/1200x/e6/85/d5/e685d5100f680666552f648b16c5e5b9.jpg",
    link: "/products/jewellery"
  },
  {
    title: "Bridal Lehenga",
    price: "Starting at ₹4,999",
    subtitle: "Designer bridal wear for every style",
    image: "https://i.pinimg.com/1200x/9b/b4/76/9bb4760d94433c09c137d3aa02794181.jpg",
    link: "/products/bridal-lehenga"
  },
  {
    title: "Groom Accessories",
    price: "Starting at ₹1,499",
    subtitle: "Pagdi, sehra, brooch, kalgi & more",
    image: "https://i.pinimg.com/1200x/2c/7b/a1/2c7ba129eb002363d9420e4d8a6bef9b.jpg",
    link: "/products/groom-accessories"
  },
  {
    title: "Makeup Artist",
    price: "Starting at ₹3,499",
    subtitle: "Bridal, party & HD makeup packages",
    image: "https://i.pinimg.com/1200x/3f/12/f5/3f12f585444d763cc58802e5f7a07fc1.jpg",
    link: "/services/makeup-artist"
  },
  {
    title: "Wedding Venue",
    price: "Starting at ₹9,999",
    subtitle: "Banquet halls, lawns & destination venues",
    image: "https://i.pinimg.com/1200x/7c/94/77/7c9477dc7b139d45868aa0a3dd74b65d.jpg",
    link: "/venues"
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
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl px-2">
      {/* Slider Container */}
      <div className="relative h-50 md:h-84 bg-gradient-to-r from-rose-200 to-amber-300 rounded-2xl overflow-hidden">
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
                    className="group inline-flex items-center gap-3 bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
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
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-rose-600" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-rose-600" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-8 bg-rose-600 shadow-lg' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
