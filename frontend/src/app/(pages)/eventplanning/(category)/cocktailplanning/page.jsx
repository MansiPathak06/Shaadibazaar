"use client";
import React, { useState } from 'react';
import { Sparkles, Music, Wine, Camera, Utensils, Star } from 'lucide-react';

export default function CocktailPlanning() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Wine,
      title: "Premium Bar Setup",
      description: "Curated cocktail menus with expert mixologists and stunning bar displays"
    },
    {
      icon: Music,
      title: "Entertainment & DJ",
      description: "Live performances, DJ services, and dance floor arrangements"
    },
    {
      icon: Utensils,
      title: "Gourmet Catering",
      description: "Exquisite finger foods, live counters, and fusion cuisine"
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional coverage capturing every memorable moment"
    },
    {
      icon: Sparkles,
      title: "Décor & Lighting",
      description: "Elegant themes with ambient lighting and floral arrangements"
    },
    {
      icon: Star,
      title: "Complete Event Management",
      description: "End-to-end planning and coordination for a stress-free experience"
    }
  ];

  const gallery = [
    {
      type: "image",
      url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761826674/cocktail-gallery-image-1_guxdjs.jpg",
      title: "Elegant Cocktail Setup"
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761826673/cocktail-gallery-image-2_uk7caq.jpg",
      title: "Premium Bar Counter"
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761826673/cocktail-gallery-image-3_wnkjig.jpg",
      title: "Dance Floor Ambiance"
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761826674/cocktail-gallery-image-4_w9gokn.jpg",
      title: "Gourmet Appetizers"
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761826673/cocktail-gallery-image-5_rtqdgk.jpg",
      title: "Stunning Décor"
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761826673/cocktail-gallery-image-6_cq7dpi.jpg",
      title: "Floral Arrangements"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        {/* Hero Section with Video Background */}
        <div className="relative h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761826675/watermarked_preview_tumkoo.mp4"
              type="video/mp4"
            />
          </video>

          {/* Reduced Pink Overlay - Changed from 90% to 40% opacity */}
          <div className="absolute inset-0 bg-linear-to-r from-rose-400/40 to-pink-500/40 z-10"></div>

          {/* Additional subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20 z-10"></div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
            <div className="text-center space-y-6 animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-medium tracking-tight drop-shadow-lg ">
                Cocktail Planning
              </h1>
              <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto drop-shadow-md">
                Where Elegance Meets Celebration
              </p>
              <div className="flex gap-4 justify-center mt-8">
                <button className="bg-white text-rose-400 px-8 py-4 rounded-full font-light cursor-pointer text-lg hover:bg-rose-50 transition-all transform hover:scale-105 shadow-xl">
                  Plan Your Event
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-light cursor-pointer text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>

      </div>

      {/* About Section */}
      {/* <div className="py-20 px-4 bg-linear-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto text-center">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Perfectly Planned Cocktails
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">  At ShaadiBazaar, we craft stylish cocktail celebrations</p>
          </div> 
        </div>
      </div> */}

      {/* Services Section */}
      <div className="py-22 px-4 bg-white">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Our Premium Services
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Elevating Every Celebration with Excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${activeService === idx
                  ? 'bg-rose-400 text-white shadow-2xl'
                  : 'bg-rose-50 text-gray-800 hover:bg-rose-100'
                  }`}
              >
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-medium mb-3">{service.title}</h3>
                <p className={`text-sm ${activeService === idx ? 'text-white' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="py-20 px-2 bg-linear-to-b from-rose-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Experience the Magic
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Experience the Magic of Perfection</p>
          </div>

          {/* Autoplay Video Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-linear-to-br from-rose-100 to-pink-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761826678/126932-737187476_large_btskby.mp4"
                type="video/mp4"
              />
            </video>

            {/* Subtle Overlay for Better Visibility */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>

          </div>
        </div>

      </div>

      {/* Gallery Section */}
      <div className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                     Our Portfolio
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Celebrations Captured Beautifully</p>
            </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-rose-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-2xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 px-4 bg-linear-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
      
          </h2>

          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                      What Our Clients Say
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Stories of Joy and Trust</p>
            </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-rose-400 text-rose-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "ShaadiBazaar made our cocktail party absolutely spectacular! Every detail was perfect."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-400 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-800">Priya & Rahul</p>
                    <p className="text-sm text-gray-500">Delhi Wedding</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-20 px-4 bg-linear-to-r from-rose-400 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold">Ready to Plan Your Perfect Cocktail?</h2>
          <p className="text-xl">
            Let's create an unforgettable celebration together. Get in touch with our expert planners today!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-rose-400 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-all transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Call: +91-XXXXXXXXXX
            </button>
          </div>
        </div>
      </div> */}


    </div>
  );
}