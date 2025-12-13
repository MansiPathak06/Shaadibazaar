"use client";
import React, { useState } from 'react';
import { ChevronRight, Play, HelpCircle } from 'lucide-react';


export default function ServicesShowcase({ 
  categories = [
    {
      id: 1,
      title: "Wedding Planning",
      subtitle: "Featured",
      description: "Crafting unforgettable moments with meticulous attention to every detail.",
      media: "https://i.pinimg.com/1200x/88/7e/7e/887e7e905567eeacb8df14dd90f39f30.jpg",
      isVideo: false,
      link: "#wedding-planning"
    },
    {
      id: 2,
      title: "The Explore Event Road Trip",
      subtitle: "Future Travel",
      description: "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
      media: "https://i.pinimg.com/1200x/49/e4/27/49e427e830fff83f59c50768ea6f6b22.jpg",
      isVideo: false,
      link: "#event-planning"
    },
    {
      id: 3,
      title: "Exploring the Land of the Living Skies",
      subtitle: "Destination",
      description: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.",
      media: "https://i.pinimg.com/736x/2c/9c/4c/2c9c4ce2dec7769ca1363032ec6e148f.jpg",
      isVideo: false,
      link: "#destination-weddings"
    }
  ]
}) {
  const [hoveredId, setHoveredId] = useState(null);


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blurred Background Image Layer */}
      {/* <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat  scale-110"
          style={{
            backgroundImage: "url('https://i.pinimg.com/1200x/fa/df/ab/fadfab33c3a4c40cdd6852ea8ca9b873.jpg')"
          }}
        ></div>
      </div> */}

      {/* Blurred Background Image Overlay with linear */}
      <div 
        className="absolute inset-0 z-1 bg-cover bg-center bg-no-repeat blur-sm "
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/04/41/36/044136e00eea1f8a89083d6370c758ef.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 "></div>
      </div>

      {/* Background accent circles */}
      <div className="absolute inset-0 pointer-events-none z-2">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-widest text-rose-600 uppercase font-semibold mb-2">
            Explore Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Stylish Events.<br />Seamless Execution
          </h1>
        </div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mb-12">
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${category.media}')`,
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
              </div>


              {/* Video Play Overlay (if applicable) */}
              {category.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-white/90 rounded-full p-4 backdrop-blur-sm">
                    <Play className="w-8 h-8 text-rose-600 fill-rose-600" />
                  </div>
                </div>
              )}


              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                {/* Subtitle & Accent */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <p className="text-xs tracking-widest text-white/80 uppercase font-semibold">
                      {category.subtitle}
                    </p>
                    <div className="w-8 h-0.5 bg-linear-to-r from-rose-400 to-transparent"></div>
                  </div>
                </div>


                {/* Title & Description */}
                <div className="transform transition-transform duration-500 group-hover:translate-y-0">
                  <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight mb-3">
                    {category.title}
                  </h2>
                  <p className="text-sm text-white/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </div>


              {/* Action Button - Corner */}
              <a
                href={category.link}
                aria-label={`View ${category.title} details`}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-rose-600 shadow-lg transform transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-rose-400 hover:text-white hover:scale-110 z-30"
              >
                <HelpCircle className="w-5 h-5" />
              </a>


              {/* Hover indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-rose-400 via-rose-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"></div>
            </div>
          ))}
        </div>


        {/* Global CTA */}
        <div className="flex justify-center">
          <a
            href="#explore-all"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-rose-400 to-rose-500 text-white font-semibold shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-rose-500 hover:to-rose-600 group"
          >
            Explore All Services
            <ChevronRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}