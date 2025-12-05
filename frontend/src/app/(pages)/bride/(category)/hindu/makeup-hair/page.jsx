"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const BridalMakeupHairAccessoriesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data (you can change images later)
  const heroSlides = [
    {
      title: "Bridal Hair Extensions",
      subtitle: "Clip-ins | Tape-ins | Volumizers For Dreamy Bridal Hairstyles",
      image:
        "https://i.pinimg.com/736x/a9/26/78/a92678971361e8f9ef2e63fbe38e684c.jpg",
    },
    {
      title: "Glam Bridal Makeup",
      subtitle: "HD, Airbrush & Long-Lasting Bridal Makeup Looks",
      image:
        "https://i.pinimg.com/736x/8d/ec/44/8dec44685e5dfe58daad8874a950012a.jpg",
    },
    {
      title: "Statement Hair Accessories",
      subtitle: "Tiaras, Bun Accessories & Pins To Complete Your Look",
      image:
        "https://i.pinimg.com/1200x/aa/eb/d1/aaebd100b52bd9395e13952384326a31.jpg",
    },
  ];

  // Categories with category and subCategory mapping for URL params
  const categories = [
    {
      name: "Hair Extensions",
      items: "24 Styles",
      image:
        "https://i.pinimg.com/736x/e7/74/11/e77411dcddd07b9f07b01fa1441ef08b.jpg",
      category: "makeup-hair",
      subCategory: "hair-extensions",
    },
    {
      name: "Bun Accessories",
      items: "18 Designs",
      image:
        "https://i.pinimg.com/736x/2c/78/c7/2c78c7a7163174589deab0849e873820.jpg",
      category: "makeup-hair",
      subCategory: "bun-accessories",
    },
    {
      name: "Hair Tiara",
      items: "16 Styles",
      image:
        "https://i.pinimg.com/736x/3b/81/51/3b815103e75d07ba7dbc23b54626bae0.jpg",
      category: "makeup-hair",
      subCategory: "hair-tiara",
    },
    {
      name: "Makeup Setting Spray",
      items: "10 Products",
      image:
        "https://i.pinimg.com/1200x/7c/1f/0c/7c1f0cca6c4cb66a556f8634f38fe1e9.jpg",
      category: "makeup-hair",
      subCategory: "makeup-setting-spray",
    },
    {
      name: "Nail Extensions",
      items: "20 Sets",
      image:
        "https://i.pinimg.com/736x/0c/38/dd/0c38dddbf562834a8d96b3869a0c1622.jpg",
      category: "makeup-hair",
      subCategory: "nail-extensions",
    },
    {
      name: "Nail Art Kit",
      items: "14 Kits",
      image:
        "https://i.pinimg.com/1200x/66/62/3f/66623ff5948127d6486d6134b85f60b6.jpg",
      category: "makeup-hair",
      subCategory: "nail-art-kit",
    },
  ];

  // Trending products adapted to new theme
  const trendingProducts = [
    {
      name: "Clip-In Hair Extensions",
      price: "₹7,999",
      oldPrice: "₹9,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/a5/28/ca/a528caf4839c84636fc28b5dd376c9eb.jpg",
      category: "makeup-hair",
      subCategory: "hair-extensions",
    },
    {
      name: "Volumizing Bun Extension",
      price: "₹4,499",
      image:
        "https://i.pinimg.com/1200x/e8/a6/ea/e8a6eaa81468be527ef1a2bec1bde89a.jpg",
      category: "makeup-hair",
      subCategory: "bun-accessories",
    },
    {
      name: "Crystal Bridal Tiara",
      price: "₹5,999",
      image:
        "https://i.pinimg.com/1200x/69/7f/af/697fafdeab98e32b64a20076e8afad26.jpg",
      category: "makeup-hair",
      subCategory: "hair-tiara",
    },
    {
      name: "Long-Lasting Setting Spray",
      price: "₹1,299",
      oldPrice: "₹1,799",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/71/d7/8d/71d78d4a54f70e0b0a414495cac76919.jpg",
      category: "makeup-hair",
      subCategory: "makeup-setting-spray",
    },
    {
      name: "French Nail Extensions",
      price: "₹2,499",
      image:
        "https://i.pinimg.com/1200x/ad/74/e3/ad74e3f453551bacbacbf149eb4fec2b.jpg",
      category: "makeup-hair",
      subCategory: "nail-extensions",
    },
    {
      name: "3D Bridal Nail Art Kit",
      price: "₹1,899",
      oldPrice: "₹2,299",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/e6/b9/2a/e6b92aad9e4aafd2e7f938edccf59423.jpg",
      category: "makeup-hair",
      subCategory: "nail-art-kit",
    },
    {
      name: "Soft Curls Hair Extensions",
      price: "₹8,499",
      image:
        "https://i.pinimg.com/1200x/da/21/23/da2123586c30b57ba30255f2b00ccc57.jpg",
      category: "makeup-hair",
      subCategory: "hair-extensions",
    },
    {
      name: "Pearl Bun Accessory Set",
      price: "₹3,299",
      oldPrice: "₹3,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/0b/40/c6/0b40c6f13950203bae1302d65a043f03.jpg",
      category: "makeup-hair",
      subCategory: "bun-accessories",
    },
    {
      name: "Rose Gold Tiara",
      price: "₹6,499",
      image:
        "https://i.pinimg.com/1200x/0e/a1/db/0ea1db366cf6ce69dfd1cf3337b5fd62.jpg",
      category: "makeup-hair",
      subCategory: "hair-tiara",
    },
    {
      name: "Chrome Nail Extension Set",
      price: "₹3,499",
      oldPrice: "₹4,299",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/eb/f8/b6/ebf8b6215e6d8237a57ffd761ca9069b.jpg",
      category: "makeup-hair",
      subCategory: "nail-extensions",
    },
    {
      name: "Hydrating Makeup Fixer",
      price: "₹1,099",
      image:
        "https://i.pinimg.com/736x/2b/d4/1c/2bd41caeb7748dfb4ea8acd754a71dba.jpg",
      category: "makeup-hair",
      subCategory: "makeup-setting-spray",
    },
    {
      name: "Bridal Nail Art Toolkit",
      price: "₹2,199",
      oldPrice: "₹2,799",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/ff/c5/08/ffc50884c9060d11f27159be3f838f33.jpg",
      category: "makeup-hair",
      subCategory: "nail-art-kit",
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
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      BRIDAL MAKEUP & HAIR
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* Popular Categories Section with Grid Layout for Clickability */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Popular Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/bride/all-products?category=${encodeURIComponent(
                  category.category
                )}&subCategory=${encodeURIComponent(category.subCategory)}`}
                className="flex-shrink-0 text-center group cursor-pointer"
              >
                <div className="relative mb-4 overflow-hidden rounded-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full aspect-square object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 mb-1">
                  {category.name.toUpperCase()}
                </h3>
                <p className="text-xs text-gray-500">{category.items}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Collections with Links */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/bride/all-products?category=makeup-hair&subCategory=hair-extensions"
            className="relative overflow-hidden rounded-lg group cursor-pointer block"
          >
            <img
              src="https://i.pinimg.com/736x/2c/2b/52/2c2b52dbf606d270784643721584d4d2.jpg"
              alt="Bridal Hair & Extensions"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Signature Bridal Hair & Extensions
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                VIEW LOOKBOOK
              </span>
            </div>
          </Link>

          <Link
            href="/bride/all-products?category=makeup-hair&subCategory=makeup-setting-spray"
            className="relative overflow-hidden rounded-lg group cursor-pointer block"
          >
            <img
              src="https://i.pinimg.com/1200x/ad/cf/0c/adcf0c8813ca543ee0b4428bc858af4b.jpg"
              alt="Airbrush Bridal Makeup"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                HD & Airbrush Bridal Makeup Packages
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                EXPLORE PACKAGES
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Trending Products with Links */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Trending Makeup & Hair Picks
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              MOST LOVED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BRIDAL FAVOURITES
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <Link
                key={index}
                href={`/bride/all-products?category=${encodeURIComponent(
                  product.category
                )}&subCategory=${encodeURIComponent(product.subCategory)}`}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow block"
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
                  <h3 className="text-sm text-gray-800 mb-1">{product.name}</h3>
                 
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/bride/all-products?category=makeup-hair">
              <button className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>EXPLORE FULL BRIDAL RANGE</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridalMakeupHairAccessoriesPage;
