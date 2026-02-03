"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RitualsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const backgroundImages = [
    'https://i.pinimg.com/1200x/90/81/2a/90812a4109da4b27973b02fb537ae36d.jpg',
    'https://i.pinimg.com/1200x/90/f2/e3/90f2e3f7502b1366710ed4744226b000.jpg',
    'https://i.pinimg.com/1200x/b6/39/29/b639290dd7cb75b85f71e469abc2e8eb.jpg',
  ];

  const galleryImages = [
    'https://i.pinimg.com/736x/1b/c1/8a/1bc18a213fe4b8b3103a7e70bc7503fb.jpg',
    'https://i.pinimg.com/1200x/2f/40/e5/2f40e58cffd6ee59a97e36c25dbcfa5c.jpg',
    'https://i.pinimg.com/736x/c6/91/b0/c691b0fcbb03aede0344764f7119ef51.jpg',
  ];

  useEffect(() => {
    setFadeIn(true);
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <div className="w-full bg-white">
      {/* Main Section with Carousel */}
      <div className="relative w-full h-screen max-h-[400px] overflow-hidden rounded-3xl mx-auto my-12 max-w-7xl px-4">
        {/* Image Carousel */}
        <div className="absolute inset-0 rounded-3xl">
          {backgroundImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 rounded-3xl ${
                idx === currentImageIndex ? 'opacity-5' : 'opacity-0'

              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>

        {/* Rose linear Overlay */}
       

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-rose-400 text-gray-800 hover:text-white rounded-full p-3 transition-all duration-300 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-rose-400 text-gray-800 hover:text-white rounded-full p-3 transition-all duration-300 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        {/* Content Container */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            Rituals Made Easy with ShaadiBazaar 🌸
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mb-8 drop-shadow-md leading-relaxed font-light">
            From Maulvi to Pandit, Sikh Granthi to Father — we connect you with the right spiritual guide and provide every ritual essential for your wedding, nikah, or ceremony — all in one place.
          </p>

          {/* CTA Button */}
          <a
            href="/rituals"
            className="inline-block px-8 py-4 bg-white text-rose-400 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-rose-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Explore Rituals →
          </a>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative h-96 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${(idx + 1) * 150}ms`,
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-rose-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg drop-shadow-lg">
                  {['Sacred Moments', 'Spiritual Connection', 'Joyful Celebrations'][idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}