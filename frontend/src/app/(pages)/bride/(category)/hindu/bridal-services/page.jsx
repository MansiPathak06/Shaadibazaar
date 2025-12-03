"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BridalServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Bridal Makeup & Beauty",
      subtitle: "Professional Services For Your Special Day",
      image:
        "https://i.pinimg.com/736x/df/0d/eb/df0debcd311781ac295dc4fb379a52d4.jpg",
    },
    {
      title: "Complete Bridal Package",
      subtitle: "Everything You Need For A Perfect Wedding",
      image:
        "https://i.pinimg.com/1200x/4f/89/ed/4f89edbb64befd5f56578b4ac7130939.jpg",
    },
    {
      title: "Expert Artists & Stylists",
      subtitle: "Transform Your Dream Into Reality",
      image:
        "https://i.pinimg.com/736x/93/2e/8a/932e8a5ba888556a99883ce4fa575f6a.jpg",
    },
  ];

  // Bridal services categories
  const categories = [
    {
      name: "Bridal Makeup (HD/Airbrush)",
      items: "Premium Services",
      image:
        "https://i.pinimg.com/1200x/4a/72/f7/4a72f7640852deaa02e9d5ece467ebd5.jpg",
    },
    {
      name: "Bridal Hairstyle",
      items: "Expert Styling",
      image:
        "https://i.pinimg.com/1200x/33/b5/4a/33b54a15eb71618b07f5284034421f42.jpg",
    },
    {
      name: "Mehendi Artist",
      items: "Traditional Art",
      image:
        "https://i.pinimg.com/736x/d3/53/32/d35332d3efe5ae4578735e5009989483.jpg",
    },
    {
      name: "Pre-Bridal Package",
      items: "Complete Care",
      image:
        "https://i.pinimg.com/1200x/1e/42/d3/1e42d327b264bd4377b9e1b173cae3a7.jpg",
    },
    {
      name: "Spa & Facial",
      items: "Relaxation & Glow",
      image:
        "https://i.pinimg.com/1200x/8c/9f/a7/8c9fa7dbc6e87d9a2d83c5bf0acf7874.jpg",
    },
    {
      name: "Ubtan Ceremony Setup",
      items: "Traditional Rituals",
      image:
        "https://i.pinimg.com/736x/ba/2f/ef/ba2fef4e969cc81ffd9f492680112850.jpg",
    },
    {
      name: "Bridal Photoshoot",
      items: "Professional Photography",
      image:
        "https://i.pinimg.com/736x/07/2e/22/072e22cacc647ba3fb1ad13dbe7929ee.jpg",
    },
    {
      name: "Saree Draping Artist",
      items: "Perfect Pleats",
      image:
        "https://i.pinimg.com/736x/0b/83/45/0b83452c904e01aa6991791f4140c40e.jpg",
    },
    {
      name: "Lehenga Pinning Expert",
      items: "Flawless Fitting",
      image:
        "https://i.pinimg.com/736x/e6/24/1e/e6241e3135200ee7abcf7afeb4e19981.jpg",
    },
  ];

  // Trending services
  const trendingServices = [
    {
      name: "Bridal Makeup (HD/Airbrush)",
      price: "₹25,999",
      oldPrice: "₹29,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/1200x/ad/cf/0c/adcf0c8813ca543ee0b4428bc858af4b.jpg",
    },
    {
      name: "Bridal Hairstyle",
      price: "₹8,999",
      image:
        "https://i.pinimg.com/1200x/42/1e/6c/421e6c836556c740823f642b4d53e840.jpg",
    },
    {
      name: "Mehendi Artist",
      price: "₹15,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/51/1e/67/511e6764416f9e3aef92eb84cdb0d93c.jpg",
    },
    {
      name: "Pre-Bridal Package",
      price: "₹45,999",
      oldPrice: "₹55,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/736x/e3/b0/4f/e3b04f6a2ac298df797b88b43a5e1638.jpg",
    },
    {
      name: "Spa & Facial",
      price: "₹12,999",
      image:
        "https://i.pinimg.com/1200x/26/e4/d2/26e4d2cf52534582c6fe7734cbb28b66.jpg",
    },
    {
      name: "Ubtan Ceremony Setup",
      price: "₹18,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/1200x/63/b5/97/63b597c6b1529a18c4a5522428d1affa.jpg",
    },
    {
      name: "Bridal Photoshoot",
      price: "₹35,999",
      oldPrice: "₹42,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/6a/c2/8d/6ac28d1342af096b2b22891837f683e2.jpg",
    },
    {
      name: "Saree Draping Artist",
      price: "₹5,999",
      image:
        "https://i.pinimg.com/1200x/53/7e/33/537e33ba39e0e66021d22787007b6f65.jpg",
    },
    {
      name: "Lehenga Pinning Expert",
      price: "₹4,999",
      image:
        "https://i.pinimg.com/736x/1c/2a/e1/1c2ae1612addc1e99ff083087fd26af6.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-[250px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      BRIDAL SERVICES
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors">
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-amber-600 w-8" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories Section with Scrolling */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Popular Services
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 text-center group cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {category.name.toUpperCase()}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/1200x/da/50/3b/da503bdc0dbd46fc3de989f924401a6a.jpg"
              alt="Complete Bridal Package"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Complete Bridal Package
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/1200x/13/42/f5/1342f5fbb86ee9c2b30b649e0da2056f.jpg"
              alt="Premium Makeup Services"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Premium Makeup Services
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Services */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Trending Services
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              MOST BOOKED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST RATED
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {service.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                      {service.badge}
                    </div>
                  )}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-md text-gray-800 mb-2">{service.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-medium text-gray-800">
                     Click hhere to explore more!
                    </span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>VIEW ALL SERVICES</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BridalServicesPage;