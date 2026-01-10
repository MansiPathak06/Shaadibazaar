"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ ADD THIS

const SikhGroomServicesPage = () => {
  const router = useRouter(); // ✅ ADD THIS
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Sikh Groom Services",
      subtitle: "Complete Essentials For Your Sacred Anand Karaj",
      image:
        "https://i.pinimg.com/736x/2f/8b/7c/2f8b7ce2122cdf841e1b908faac2065d.jpg",
    },
    {
      title: "Traditional Sikh Wedding Services",
      subtitle: "Everything You Need For Your Blessed Union",
      image:
        "https://i.pinimg.com/736x/e3/a9/fc/e3a9fc70268b1cf01c5481384bbdd52e.jpg",
    },
    {
      title: "Complete Groom Package",
      subtitle: "Make Your Special Day Unforgettable",
      image:
        "https://i.pinimg.com/1200x/87/bc/00/87bc00000e5e0924323aa97773e18bac.jpg",
    },
  ];

  // Groom services categories
  const categories = [
    {
      name: "Turban Expert",
      items: "Professional Turban Tying",
      image:
        "https://i.pinimg.com/1200x/b3/0a/43/b30a43718777f8d2a01f62063871b493.jpg",
      subCategory: "turban-expert", // ✅ ADD THIS
    },
    {
      name: "Beard Setting",
      items: "Traditional Beard Grooming",
      image:
        "https://i.pinimg.com/1200x/6a/d8/06/6ad8067e4311cdc48ac3bc991eb58a04.jpg",
      subCategory: "beard-setting", // ✅ ADD THIS
    },
    {
      name: "Groom Photoshoot",
      items: "Professional Photography",
      image:
        "https://i.pinimg.com/1200x/9b/e7/4d/9be74d0b06288d55dd74b6f570ab9513.jpg",
      subCategory: "groom-photoshoot", // ✅ ADD THIS
    },
    {
      name: "Dhol/Nagara",
      items: "Traditional Percussion",
      image:
        "https://i.pinimg.com/736x/35/75/42/35754262f025dfa4a799a1c02304c660.jpg",
      subCategory: "dhol-nagara", // ✅ ADD THIS
    },
    {
      name: "Bhangra Group",
      items: "Live Dance Performance",
      image:
        "https://i.pinimg.com/1200x/c7/fc/40/c7fc40e2e87e7caf23ababc21d97c7aa.jpg",
      subCategory: "bhangra-group", // ✅ ADD THIS
    },
    {
      name: "Groom Makeup",
      items: "Professional Services",
      image:
        "https://i.pinimg.com/1200x/a4/f2/1d/a4f21d7fce67f88522a7913f851e38bb.jpg",
      subCategory: "groom-makeup", // ✅ ADD THIS
    },
    {
      name: "Hairstyling",
      items: "Expert Hair Care",
      image:
        "https://i.pinimg.com/736x/7d/e0/79/7de079213ce731c30b5c77c45ac45466.jpg",
      subCategory: "hairstyling", // ✅ ADD THIS
    },
    {
      name: "Ghodi Decoration",
      items: "Horse Decoration",
      image:
        "https://i.pinimg.com/736x/68/e8/0c/68e80c06f8ed1ded7aa1dec6e38ab484.jpg",
      subCategory: "ghodi-decoration", // ✅ ADD THIS
    },
    {
      name: "Band-Baja",
      items: "Traditional Music",
      image:
        "https://i.pinimg.com/1200x/30/44/d0/3044d0bff4c87f4521ef3098e2ec4ece.jpg",
      subCategory: "band-baja", // ✅ ADD THIS
    },
    {
      name: "DJ for Baraat",
      items: "Music & Entertainment",
      image:
        "https://i.pinimg.com/736x/2b/7f/ed/2b7fedfdc7977be41791719ff9c6b5fb.jpg",
      subCategory: "dj-baraat", // ✅ ADD THIS
    },
  ];

  // Trending services
  const trendingServices = [
    {
      name: "Turban Tying Expert",
      price: "₹6,999",
      oldPrice: "₹8,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/1200x/63/b1/9c/63b19cb745f263388c5ac613bfadaeaf.jpg",
      subCategory: "turban-expert", // ✅ ADD THIS
    },

    {
      name: "Professional Beard Setting",
      price: "₹4,999",
      image:
        "https://i.pinimg.com/736x/45/95/5b/45955bb7a9c60d26622f9e0ffad841f7.jpg",
      subCategory: "beard-setting", // ✅ ADD THIS
    },
    {
      name: "Groom Photoshoot",
      price: "₹25,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/42/c3/0a/42c30a25effb843a8ca85386468fcf3a.jpg",
      subCategory: "groom-photoshoot", // ✅ ADD THIS
    },
    {
      name: "Complete Groom Package",
      price: "₹38,999",
      oldPrice: "₹48,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/5c/54/ba/5c54ba89ec2c99650bdea23db4a1d66e.jpg",
      subCategory: "groom-makeup", // ✅ ADD THIS
    },
    {
      name: "Dhol Service",
      price: "₹8,999",
      image:
        "https://i.pinimg.com/736x/65/7b/d0/657bd090f22f8f15e72997289ea91688.jpg",
      subCategory: "dhol-nagara", // ✅ ADD THIS
    },
    {
      name: "Nagara Players",
      price: "₹12,999",
      oldPrice: "₹15,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/1200x/b1/ce/f4/b1cef45dbc826eb7f63abfe7a7b9cfd9.jpg",
      subCategory: "dhol-nagara", // ✅ ADD THIS
    },
    {
      name: "Bhangra Group Performance",
      price: "₹35,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/736x/9a/ba/90/9aba90bd8353762daa8ca7049fd1d8e3.jpg",
      subCategory: "bhangra-group", // ✅ ADD THIS
    },
    {
      name: "Groom Makeup Package",
      price: "₹12,999",
      image:
        "https://i.pinimg.com/1200x/16/4c/24/164c24f3f78e93238f62dd6ace50c95b.jpg",
      subCategory: "groom-makeup", // ✅ ADD THIS
    },
    {
      name: "Professional Hairstyling",
      price: "₹5,999",
      image:
        "https://i.pinimg.com/736x/14/fe/29/14fe2921664b16e86773ace696d5405f.jpg",
      subCategory: "hairstyling", // ✅ ADD THIS
    },
    {
      name: "Ghodi Decoration",
      price: "₹18,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/69/b0/89/69b089243b03feb6ae72d26399effaaa.jpg",
      subCategory: "ghodi-decoration", // ✅ ADD THIS
    },
    {
      name: "Band-Baja Service",
      price: "₹22,999",
      oldPrice: "₹28,999",
      badge: "TRENDING",
      image:
        "https://i.pinimg.com/736x/9b/93/7f/9b937fb477137477480083d054cd16d1.jpg",
      subCategory: "band-baja", // ✅ ADD THIS
    },
    {
      name: "DJ for Baraat",
      price: "₹28,999",
      badge: "POPULAR",
      image:
        "https://i.pinimg.com/736x/c2/a5/ff/c2a5ffd4099b6569d09a7e9e52e629ad.jpg",
      subCategory: "dj-baraat", // ✅ ADD THIS
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
  // ✅ ADD THESE TWO FUNCTIONS
  const handleCategoryClick = (subCategory) => {
    router.push(
      `/groom/all-services?category=sikh-groom-services&subCategory=${subCategory}`
    );
  };

  const handleAllServicesClick = () => {
    router.push("/groom/all-services?category=sikh-groom-services");
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
                      SIKH GROOM SERVICES
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button
                      onClick={handleAllServicesClick}
                      className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors cursor-pointer"
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
                currentSlide === index ? "bg-orange-600 w-8" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories Section with Scrolling */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Sikh Groom Services
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

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => handleCategoryClick("groom-makeup")}
          >
            <img
              src="https://i.pinimg.com/1200x/2b/6d/f1/2b6df132298c0cb8c001837adf2e79a4.jpg"
              alt="Complete Groom Package"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Complete Sikh Groom Package
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                BOOK NOW
              </button>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={handleAllServicesClick}
          >
            <img
              src="https://i.pinimg.com/736x/95/99/1b/95991be48633da6a14439544e07a8b39.jpg"
              alt="Premium Services"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Premium Anand Karaj Services
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
            Featured Sikh Groom Services
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-orange-600 border-b-2 border-orange-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              MOST POPULAR
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST SELLERS
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
              onClick={handleAllServicesClick} // ✅ ADD THIS
              className="group mt-12 relative inline-flex items-center gap-3 bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            ></button>
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

export default SikhGroomServicesPage;
