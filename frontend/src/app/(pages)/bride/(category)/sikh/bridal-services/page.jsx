"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const SikhBridalServicesPage = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Sikh Bridal Makeup & Beauty",
      subtitle: "Professional Services For Your Anand Karaj",
      image:
        "https://i.pinimg.com/736x/d7/f4/2c/d7f42c86c1f517146c1e56488ae134dc.jpg",
    },
    {
      title: "Complete Sikh Bridal Package",
      subtitle: "Everything You Need For A Perfect Punjabi Wedding",
      image:
        "https://i.pinimg.com/736x/fd/53/ba/fd53ba165a3841938630bd1f3236b170.jpg",
    },
    {
      title: "Expert Artists & Stylists",
      subtitle: "Transform Your Dream Into Reality",
      image:
        "https://i.pinimg.com/736x/bf/2e/8e/bf2e8e718a823d187f097b8f39151141.jpg",
    },
  ];

  // Bridal services categories - ADDED subCategory mapping
  const categories = [
    {
      name: "Sikh Bridal Makeup",
      items: "Premium Services",
      image:
        "https://i.pinimg.com/736x/c4/a0/62/c4a062383b4900d59fcb94665361a9a7.jpg",
      subCategory: "bridal-makeup"
    },
    {
      name: "Chooda Ceremony Expert",
      items: "Traditional Rituals",
      image:
        "https://i.pinimg.com/1200x/07/24/3f/07243f857b53dbfdd28e189c9a2f10b1.jpg",
      subCategory: "chooda-ceremony"
    },
    {
      name: "Kaleera Photoshoot",
      items: "Memorable Moments",
      image:
        "https://i.pinimg.com/736x/a6/02/ae/a602ae94a81fd15fdf7f450ca7e1b824.jpg",
      subCategory: "kaleera-photoshoot"
    },
    {
      name: "Mehendi Artist",
      items: "Traditional Art",
      image:
        "https://i.pinimg.com/1200x/a8/ad/1a/a8ad1a1459825d6b895975b5122951bd.jpg",
      subCategory: "mehendi-artist"
    },
    {
      name: "Hair Accessories",
      items: "Traditional Adornments",
      image:
        "https://i.pinimg.com/736x/de/41/74/de4174e0f14ec4067bde0fc18b8d7d11.jpg",
      subCategory: "hair-accessories"
    },
    {
      name: "Doli Arrangement",
      items: "Traditional Send-off",
      image:
        "https://i.pinimg.com/736x/a3/67/db/a367dba3a832caa48f1509135a54234d.jpg",
      subCategory: "doli-arrangement"
    },
    {
      name: "Bhangra Team",
      items: "Celebration & Entertainment",
      image:
        "https://i.pinimg.com/736x/f7/5e/92/f75e928de149d8b01cf6ee74cf4fc040.jpg",
      subCategory: "bhangra-team"
    },
  ];

  // Trending services - ADDED subCategory mapping
  const trendingServices = [
    {
      name: "Sikh Bridal Makeup",
      price: "₹28,999",
      oldPrice: "₹32,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/1200x/86/67/bc/8667bccb1d49906f2894f5080afe1034.jpg",
      subCategory: "bridal-makeup"
    },
    {
      name: "Chooda Ceremony Expert",
      price: "₹12,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/736x/4c/a2/ac/4ca2acdbcc1030cf16d5a4241ea6ed37.jpg",
      subCategory: "chooda-ceremony"
    },
    {
      name: "Kaleera Photoshoot",
      price: "₹18,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/ec/f3/00/ecf3001fcf8036ce65a90a3c0e6d095e.jpg",
      subCategory: "kaleera-photoshoot"
    },
    {
      name: "Mehendi Artist",
      price: "₹15,999",
      image:
        "https://i.pinimg.com/736x/2d/25/ad/2d25adb76ceacef936435e57fd1e1e59.jpg",
      subCategory: "mehendi-artist"
    },
    {
      name: "Hair Accessories Styling",
      price: "₹8,999",
      oldPrice: "₹11,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/736x/75/b4/ca/75b4ca8a0eabe73c13141cf75e4c00e8.jpg",
      subCategory: "hair-accessories"
    },
    {
      name: "Doli Arrangement",
      price: "₹22,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/736x/fa/9c/32/fa9c323ee01c41edfb00b23feaa8098f.jpg",
      subCategory: "doli-arrangement"
    },
    {
      name: "Bhangra Team Performance",
      price: "₹35,999",
      oldPrice: "₹42,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/cd/9e/d0/cd9ed0d476daf3bb847a701ebc57ba69.jpg",
      subCategory: "bhangra-team"
    },
    {
      name: "Complete Bridal Package",
      price: "₹65,999",
      oldPrice: "₹79,999",
      badge: "BEST VALUE",
      image:
        "https://i.pinimg.com/736x/60/29/5d/60295d53d13a0e5b53ae5dcf464e2dd7.jpg",
      subCategory: "bridal-makeup"
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

  // 👇 NEW NAVIGATION FUNCTIONS
  const handleCategoryClick = (subCategory) => {
    router.push(`/bride/all-services?category=sikh-bridal-services&subCategory=${subCategory}`);
  };

  const handleAllServicesClick = () => {
    router.push("/bride/all-services?category=sikh-bridal-services");
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
                      SIKH BRIDAL SERVICES
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button 
                      onClick={handleAllServicesClick}
                      className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors cursor-pointer"
                    >
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

      {/* Popular Categories Section - ADDED onClick */}
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
                  onClick={() => handleCategoryClick(category.subCategory)}
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

      {/* Featured Collections - ADDED onClick */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => handleCategoryClick("bridal-makeup")}
          >
            <img
              src="https://i.pinimg.com/736x/03/19/5e/03195e2aabb0f811239cc3a445ce73d5.jpg"
              alt="Complete Sikh Bridal Package"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Complete Sikh Bridal Package
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>

          <div 
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => handleCategoryClick("chooda-ceremony")}
          >
            <img
              src="https://i.pinimg.com/736x/45/bd/24/45bd249ae59dc3a172b2ab6e16a318e2.jpg"
              alt="Chooda & Kaleera Ceremony"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Chooda & Kaleera Ceremony
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Services - ADDED onClick */}
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
                onClick={() => handleCategoryClick(service.subCategory)}
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
                      Click here to explore more!
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={handleAllServicesClick}
              className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
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

export default SikhBridalServicesPage;