'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';

export default function MiddleSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Mattress",
      price: "₹2,999",
      originalPrice: "₹5,999",
      subtitle: "Wakefit, Sleepwell & more",
      badge: "50% OFF",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&h=300&fit=crop",
      gradient: "from-blue-600 via-blue-700 to-indigo-800"
    },
    {
      title: "Furniture",
      price: "₹4,999",
      originalPrice: "₹9,999",
      subtitle: "Modern & Stylish designs",
      badge: "BESTSELLER",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      gradient: "from-purple-600 via-purple-700 to-pink-800"
    },
    {
      title: "Home Decor",
      price: "₹1,499",
      originalPrice: "₹2,999",
      subtitle: "Beautiful decorative items",
      badge: "NEW",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=300&fit=crop",
      gradient: "from-emerald-600 via-teal-700 to-cyan-800"
    },
    {
      title: "Kitchen",
      price: "₹3,499",
      originalPrice: "₹6,999",
      subtitle: "Premium kitchenware",
      badge: "TRENDING",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop",
      gradient: "from-orange-600 via-red-700 to-rose-800"
    },
    {
      title: "Electronics",
      price: "₹9,999",
      originalPrice: "₹15,999",
      subtitle: "Latest gadgets & more",
      badge: "HOT DEAL",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      gradient: "from-indigo-600 via-blue-700 to-cyan-800"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Slider Container */}
      <div className={`relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-700`}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-8 left-12 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-16 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
        <div className="absolute top-24 right-1/3 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-12 md:px-20 z-10">
          
          {/* Left: Product Info */}
          <div className={`text-white space-y-4 max-w-xl transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              {slides[currentSlide].badge}
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
              {slides[currentSlide].title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(slides[currentSlide].rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/40'}`}
                  />
                ))}
              </div>
              <span className="text-white/90 font-semibold">({slides[currentSlide].rating})</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-black drop-shadow-lg">
                {slides[currentSlide].price}
              </span>
              <span className="text-2xl text-white/60 line-through">
                {slides[currentSlide].originalPrice}
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-white/90 font-medium">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Button */}
            <button className="group mt-6 bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Shop Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Product Image */}
          <div className={`hidden md:block transition-all duration-700 ${isAnimating ? 'opacity-0 scale-90 rotate-6' : 'opacity-100 scale-100 rotate-0'}`}>
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl scale-105 group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-80 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 w-20 h-20 rounded-full flex items-center justify-center font-black text-sm shadow-xl animate-pulse">
                SAVE<br/>50%
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-white/30 disabled:opacity-50 z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border border-white/30 disabled:opacity-50 z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? 'w-12 h-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
