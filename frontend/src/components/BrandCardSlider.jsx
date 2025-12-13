'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedBrandsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const slides = [
    {
      id: 1,
      brand: 'Android',
      title: 'Every shot has a story',
      subtitle: '50MP Camera',
      bgColor: 'bg-gradient-to-br from-gray-800 to-gray-900',
      image: '🤖',
      buttonText: 'Explore Now'
    },
    {
      id: 2,
      brand: 'boat',
      title: "INDIA'S #1",
      subtitle: 'Enigma Gem & Daze',
      description: 'Emergency SOS Always Ready',
      price: '₹2,799',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-800',
      image: '⌚',
      buttonText: 'Shop Now'
    },
    {
      id: 3,
      brand: 'SAMSUNG',
      title: 'Galaxy S24',
      subtitle: 'Galaxy AI ✨',
      description: 'India\'s top selling android smartphone',
      price: '₹40,999',
      originalPrice: '₹74,999',
      bgColor: 'bg-gradient-to-br from-green-800 to-green-950',
      image: '📱',
      buttonText: 'Buy Now'
    },
    {
      id: 4,
      brand: 'Apple',
      title: 'iPhone 15 Pro',
      subtitle: 'Titanium. So strong. So light.',
      description: 'A17 Pro chip. Game‑changing performance',
      price: '₹1,34,900',
      bgColor: 'bg-gradient-to-br from-slate-700 to-slate-900',
      image: '🍎',
      buttonText: 'Buy Now'
    },
    {
      id: 5,
      brand: 'OnePlus',
      title: 'OnePlus 12',
      subtitle: 'Smooth Beyond Belief',
      description: 'Snapdragon 8 Gen 3',
      price: '₹64,999',
      bgColor: 'bg-gradient-to-br from-red-700 to-red-900',
      image: '📲',
      buttonText: 'Explore'
    },
    {
      id: 6,
      brand: 'Sony',
      title: 'WH-1000XM5',
      subtitle: 'Industry Leading Noise Cancellation',
      description: 'Premium sound quality',
      price: '₹29,990',
      bgColor: 'bg-gradient-to-br from-indigo-700 to-indigo-900',
      image: '🎧',
      buttonText: 'Shop Now'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlide = Math.max(0, slides.length - cardsPerView);

  useEffect(() => {
    if (maxSlide === 0) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [maxSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  const totalDots = maxSlide + 1;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Featured Brands</h2>
      
      <div className="relative">
        {/* Slides Container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id} 
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className={`${slide.bgColor} p-6 md:p-8 rounded-2xl h-[400px] flex flex-col justify-between text-white relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 right-6 text-8xl">{slide.image}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-xs font-semibold mb-3 tracking-wider uppercase opacity-90">
                      {slide.brand}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl mb-2 opacity-90">
                      {slide.subtitle}
                    </p>
                    {slide.description && (
                      <p className="text-sm md:text-base mb-2 opacity-80">
                        {slide.description}
                      </p>
                    )}
                  </div>

                  {/* Price and CTA */}
                  <div className="relative z-10">
                    {slide.price && (
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-2xl md:text-3xl font-bold">{slide.price}</span>
                        {slide.originalPrice && (
                          <span className="text-base md:text-lg line-through opacity-60">{slide.originalPrice}</span>
                        )}
                      </div>
                    )}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm md:text-base">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {maxSlide > 0 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white shadow-lg text-gray-800 p-2 rounded-full transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white shadow-lg text-gray-800 p-2 rounded-full transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}