"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UniversalBridalGiftsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides for Universal Bridal Gift Items
  const heroSlides = [
    {
      title: "Perfume & Fragrance Sets",
      subtitle: "Luxury Bridal Gifts | Wedding Essentials | Premium Collections",
      image:
        "https://i.pinimg.com/1200x/placeholder1.jpg", // Replace with perfume set Pinterest image
    },
    {
      title: "Jewellery Box Collections",
      subtitle: "Elegant Storage for Precious Moments",
      image:
        "https://i.pinimg.com/1200x/placeholder2.jpg", // Replace with jewellery box image
    },
    {
      title: "Bridal Watch & Accessories",
      subtitle: "Timeless Gifts for the Perfect Day",
      image:
        "https://i.pinimg.com/1200x/placeholder3.jpg", // Replace with bridal watch image
    },
  ];

  // Categories for Universal Bridal Gift Items
  const categories = [
    {
      name: "Perfume Set",
      items: "28 Items",
      image:
        "https://i.pinimg.com/1200x/placeholder4.jpg", // Replace with perfume set image
    },
    {
      name: "Jewellery Box",
      items: "22 Items",
      image:
        "https://i.pinimg.com/736x/placeholder5.jpg", // Replace with jewellery box image
    },
    {
      name: "Bridal Watch",
      items: "18 Items",
      image:
        "https://i.pinimg.com/1200x/placeholder6.jpg", // Replace with bridal watch image
    },
    {
      name: "Makeup Kit",
      items: "35 Items",
      image:
        "https://i.pinimg.com/736x/placeholder7.jpg", // Replace with makeup kit image
    },
    {
      name: "Entry Props",
      items: "30 Items",
      image:
        "https://i.pinimg.com/736x/placeholder8.jpg", // Replace with entry props image
    },
    {
      name: "Customized Hanger",
      items: "20 Items",
      image:
        "https://i.pinimg.com/1200x/placeholder9.jpg", // Replace with customized hanger image
    },
    {
      name: "Couple Photo Frame",
      items: "25 Items",
      image:
        "https://i.pinimg.com/736x/placeholder10.jpg", // Replace with photo frame image
    },
    {
      name: "Gift Hampers",
      items: "32 Items",
      image:
        "https://i.pinimg.com/736x/placeholder11.jpg", // Replace with gift hamper image
    },
  ];

  // Trending Universal Bridal Gift Items
  const trendingProducts = [
    {
      name: "Luxury Perfume Set",
      price: "₹2,499",
      oldPrice: "₹3,299",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/placeholder12.jpg", // Replace with perfume set image
    },
    {
      name: "Designer Jewellery Box",
      price: "₹1,799",
      image:
        "https://i.pinimg.com/1200x/placeholder13.jpg", // Replace with jewellery box
    },
    {
      name: "Bridal Watch Collection",
      price: "₹8,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/placeholder14.jpg", // Replace with bridal watch
    },
    {
      name: "Premium Makeup Kit",
      price: "₹4,299",
      oldPrice: "₹5,499",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/placeholder15.jpg", // Replace with makeup kit
    },
    {
      name: "Floral Entry Props",
      price: "₹1,499",
      image:
        "https://i.pinimg.com/736x/placeholder16.jpg", // Replace with entry props
    },
    {
      name: "Personalized Hanger",
      price: "₹899",
      oldPrice: "₹1,199",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/placeholder17.jpg", // Replace with customized hanger
    },
    {
      name: "Elegant Photo Frame",
      price: "₹1,299",
      image:
        "https://i.pinimg.com/1200x/placeholder18.jpg", // Replace with photo frame
    },
    {
      name: "Bridal Gift Hamper",
      price: "₹5,999",
      oldPrice: "₹7,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/placeholder19.jpg", // Replace with gift hamper
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
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
                      UNIVERSAL BRIDAL GIFT ITEMS
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors">
                      SHOP NOW
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
            Popular Categories
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
              src="https://i.pinimg.com/1200x/placeholder20.jpg"
              alt="Luxury Gift Collections"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Luxury Gift Collections
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/1200x/placeholder21.jpg"
              alt="Personalized Bridal Gifts"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Personalized Bridal Gifts
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Trending Products
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              TOP SELLING
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST SELLER
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>EXPLORE FULL COLLECTION</span>
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

export default UniversalBridalGiftsPage;