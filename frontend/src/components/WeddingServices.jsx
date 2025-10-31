"use client";
import React, { useState } from 'react';
import { ChevronRight, Utensils, Flower2, Lightbulb, Sofa, Sparkles, Palette, Play } from 'lucide-react';

const WeddingServices = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const services = [
    {
      id: 'catering',
      title: 'Wedding Catering',
      icon: Utensils,
      description: 'Exquisite culinary experiences crafted to perfection',
      videoUrl: 'https://cdn.pixabay.com/video/2015/10/27/1192-143842659_large.mp4',
      gradient: 'from-rose-400 to-pink-500'
    },
    {
      id: 'floral',
      title: 'Floral Decor',
      icon: Flower2,
      description: 'Enchanting floral arrangements for your dream wedding',
      videoUrl: 'https://cdn.pixabay.com/video/2024/11/21/242464_large.mp4',
      gradient: 'from-rose-500 to-red-500'
    },
    {
      id: 'stage',
      title: 'Stage Decoration',
      icon: Sparkles,
      description: 'Stunning stage designs that create unforgettable moments',
      videoUrl: 'https://cdn.pixabay.com/video/2019/11/22/29338-374868363_large.mp4',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'lighting',
      title: 'Lightning',
      icon: Lightbulb,
      description: 'Magical lighting setups that set the perfect ambiance',
      videoUrl: 'https://cdn.pixabay.com/video/2022/07/01/122739-726192561_large.mp4',
      gradient: 'from-rose-600 to-pink-600'
    },
    {
      id: 'furniture',
      title: 'Furniture Rental',
      icon: Sofa,
      description: 'Premium furniture collections for elegant styling',
      videoUrl: 'https://cdn.pixabay.com/video/2024/12/12/246411_large.mp4',
      gradient: 'from-pink-400 to-rose-500'
    },
    {
      id: 'theme',
      title: 'Theme Decor',
      icon: Palette,
      description: 'Bespoke themed decorations tailored to your vision',
      videoUrl: 'https://cdn.pixabay.com/video/2024/07/24/222831_large.mp4',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12 animate-fade-in">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-5 py-2 rounded-full text-base font-bold shadow-lg">
            ShaadiBazaar Services
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 bg-clip-text text-transparent">
          Crafting Moments, Serving Memories
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Complete Wedding Solutions for Your Perfect Day !!
        </p>
      </div>

      {/* Services Grid - Compact 2-Column */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={service.id}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Video Section - Auto-playing */}
                <div className="relative aspect-video bg-black">
                  <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={service.videoUrl} type="video/mp4" />
                  </video>
                  
                  {/* Subtle overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content Section with Minimal Padding */}
                <div className="p-2 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`p-3 bg-gradient-to-br ${service.gradient} rounded-lg transform transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="text-white" size={16} strokeWidth={2} />
                      </div>
                      <h3 className="text-base font-bold text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {service.description}
                  </p>
                  
                  <button className={`flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold text-md hover:shadow-lg transform transition-all duration-300 hover:scale-105`}>
                    Explore
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    
        

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default WeddingServices;
