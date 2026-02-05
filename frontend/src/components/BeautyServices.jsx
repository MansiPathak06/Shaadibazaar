"use client";
import React, { useState } from 'react';
import { Sparkles, Scissors, Palette, Hand, Bath, Flower2, ArrowRight, Info } from 'lucide-react';

const BeautyServices = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const serviceGroups = [
    {
      id: 1,
      title: "Bridal Elegance",
      services: [
        { name: "Bridal Makeup", icon: Palette, desc: "Professional makeup artistry" },
        { name: "Hair Styling", icon: Scissors, desc: "Elegant hairstyles" }
      ],
      images: [
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop"
      ],
      linear: "from-rose-300 to-pink-400",
      hoverlinear: "from-rose-400 to-pink-500"
    },
    {
      id: 2,
      title: "Traditional Beauty",
      services: [
        { name: "Mehendi Artists", icon: Hand, desc: "Intricate mehendi designs" },
        { name: "Nail Art", icon: Flower2, desc: "Stunning nail designs" }
      ],
      images: [
        "https://i.pinimg.com/1200x/ea/7e/80/ea7e800cefd4427bfed87bd2388b5436.jpg",
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=250&fit=crop"
      ],
      linear: "from-pink-300 to-rose-400",
      hoverlinear: "from-pink-400 to-rose-500"
    },
    {
      id: 3,
      title: "Wellness & Grooming",
      services: [
        { name: "Spa Services", icon: Bath, desc: "Luxurious spa treatments" },
        { name: "Grooming", icon: Sparkles, desc: "Complete grooming services" }
      ],
      images: [
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=250&fit=crop",
        "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=250&fit=crop"
      ],
      linear: "from-rose-300 to-rose-400",
      hoverlinear: "from-rose-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-4 animate-pulse">
          <Sparkles className="w-7 h-7 text-rose-400" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold bg-linear-to-r from-rose-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
           “Plan Your Perfect Look”
          </h1>
          <Sparkles className="w-7 h-7 text-rose-400" />
        </div>
        <p className="text-xl sm:text-2xl font-light text-gray-600 mb-3 italic">
         Effortlessly Beautiful, Effortlessly You
        </p>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-rose-400 to-transparent mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At <span className="font-semibold text-rose-500">ShaadiBazaar</span>, we bring your wedding beauty dreams to life with our comprehensive suite of services
        </p>
        
       

        {/* Info Panel */}
        {showInfo && (
          <div className="mt-6 bg-white rounded-2xl p-6 shadow-2xl border-2 border-rose-200 max-w-3xl mx-auto transform transition-all duration-500 animate-in">
            <h3 className="text-xl font-serif font-bold text-rose-500 mb-3">Why Choose ShaadiBazaar?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  Professional Excellence
                </h4>
                <p className="text-gray-600 text-xs">Certified and experienced beauty professionals</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  Premium Products
                </h4>
                <p className="text-gray-600 text-xs">Internationally acclaimed beauty products</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  Customized Services
                </h4>
                <p className="text-gray-600 text-xs">Tailored beauty solutions for your unique style</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-gray-800 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                  Complete Packages
                </h4>
                <p className="text-gray-600 text-xs">All-inclusive packages for wedding parties</p>
              </div>
            </div>
            <button
              onClick={() => setShowInfo(false)}
              className="mt-4 text-rose-500 font-medium hover:text-rose-600 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* Services Grid - 3 Combined Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceGroups.map((group) => (
            <div
              key={group.id}
              className="group relative transform transition-all duration-700 hover:scale-105"
              onMouseEnter={() => setHoveredService(group.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Container */}
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-90">
                {/* linear Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${hoveredService === group.id ? group.hoverlinear : group.linear} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3 group-hover:text-rose-500 transition-colors duration-300">
                    {group.title}
                  </h3>

                  {/* Services List */}
                  <div className="space-y-2 mb-4">
                    {group.services.map((service, idx) => {
                      const Icon = service.icon;
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`shrink-0 w-8 h-8 rounded-lg bg-linear-to-br ${group.linear} flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-md font-semibold text-gray-800">{service.name}</h4>
                            <p className="text-md text-gray-600">{service.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Images Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {group.images.map((img, idx) => (
                      <div key={idx} className="aspect-video rounded-lg overflow-hidden group-hover:shadow-md transition-all duration-300">
                        <img 
                          src={img} 
                          alt={`${group.title} ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <button className="flex items-center justify-between gap-2 w-full px-4 py-2.5 bg-linear-to-r from-rose-400 to-pink-400 text-white rounded-full font-medium text-sm hover:from-rose-500 hover:to-pink-500 transition-all duration-300 transform hover:translate-x-1 shadow-md hover:shadow-lg group/btn">
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation: animate-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BeautyServices;
