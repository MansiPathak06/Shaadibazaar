'use client'

import React, { useState } from 'react';
import { UtensilsCrossed, Flower2, Lightbulb, Gift, Sparkles, ArrowRight } from 'lucide-react';

const CateringCollection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Wedding Catering',
      description: 'Exquisite culinary experiences crafted for your special day with personalized menus',
      icon: UtensilsCrossed,
      video: 'https://cdn.pixabay.com/video/2015/10/27/1192-143842659_large.mp4',
      features: ['Custom Menus', 'Live Stations', 'International Cuisine', 'Professional Staff'],
      color: 'bg-rose-500'
    },
    {
      id: 2,
      title: 'Floral Decor',
      description: 'Breathtaking floral arrangements that transform venues into enchanting spaces',
      icon: Flower2,
      video: 'https://cdn.pixabay.com/video/2025/05/10/278182_tiny.mp4',
      features: ['Fresh Flowers', 'Custom Designs', 'Centerpieces', 'Bouquets'],
      color: 'bg-pink-500'
    },
    {
      id: 3,
      title: 'Stage Decoration',
      description: 'Stunning stage setups that create the perfect backdrop for your memorable moments',
      icon: Sparkles,
      video: 'https://cdn.pixabay.com/video/2019/11/22/29338-374868363_large.mp4',
      features: ['Grand Stages', 'Backdrops', 'Draping', 'Custom Themes'],
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Lighting',
      description: 'Magical ambiance through professional lighting design that sets the perfect mood',
      icon: Lightbulb,
      video: 'https://cdn.pixabay.com/video/2022/07/01/122739-726192561_large.mp4',
      features: ['LED Lighting', 'Uplighting', 'Dance Floor', 'Outdoor Lighting'],
      color: 'bg-amber-500'
    },
    {
      id: 5,
      title: 'Furniture Rental',
      description: 'Premium furniture pieces to complement your event aesthetic and guest comfort',
      icon: Gift,
      video: 'https://cdn.pixabay.com/video/2024/12/12/246411_large.mp4',
      features: ['Elegant Seating', 'Tables', 'Lounge Sets', 'Bar Counters'],
      color: 'bg-blue-500'
    },
    {
      id: 6,
      title: 'Theme Decor',
      description: 'Complete thematic transformations bringing your vision to life with attention to detail',
      icon: Sparkles,
      video: 'https://cdn.pixabay.com/video/2024/07/24/222831_large.mp4',
      features: ['Custom Themes', 'Props', 'Signage', 'Photo Booths'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="bg-linear-to-b from-white to-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            "Plan the Art of Celebration"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Where fine dining meets stunning décor"
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 5;
            
            return (
              <div
                key={service.id}
                className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  isLarge ? 'md:col-span-2 md:row-span-1' : ''
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Video Container */}
                <div className={`relative overflow-hidden ${isLarge ? 'h-96' : 'h-96'}`}>
                  <video
                    src={service.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* linear Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-6 right-6 ${service.color} p-4 rounded-2xl shadow-xl transform group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features - Show on hover */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      hoveredService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/90 text-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 group-hover:gap-3">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

    
      </div>
    </div>
  );
};

export default CateringCollection;
