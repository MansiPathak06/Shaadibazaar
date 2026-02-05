"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UniversalGroomGiftsPage = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides for Universal Groom Gift Items
  const heroSlides = [
    {
      title: "Premium Watch Collections",
      subtitle: "Luxury Groom Gifts | Wedding Essentials | Timeless Elegance",
      image: "https://i.pinimg.com/1200x/ff/44/fe/ff44fea1a26fccca53894f1d908ad082.jpg",
      subCategory: "watch"
    },
    {
      title: "Perfume & Fragrance Sets",
      subtitle: "Signature Scents for the Modern Groom",
      image: "https://i.pinimg.com/736x/01/d8/31/01d8318e4ca6fa9b447b476ecfa57b2e.jpg",
      subCategory: "perfume-set"
    },
    {
      title: "Elegant Accessories",
      subtitle: "Complete Your Wedding Look",
      image: "https://i.pinimg.com/1200x/48/94/8a/48948ab63e1eee2abe049fb57b229375.jpg",
      subCategory: "bracelet"
    },
  ];

  // Categories for Universal Groom Gift Items
  const categories = [
    {
      name: "Watch",
      items: "32 Items",
      image: "https://i.pinimg.com/1200x/bc/6f/b3/bc6fb3db12a1c974958cfe935e7a2809.jpg",
      subCategory: "watch"
    },
    {
      name: "Perfume Set",
      items: "28 Items",
      image: "https://i.pinimg.com/736x/c3/99/96/c39996aafb405dac6cdc52a5e6db3d8f.jpg",
      subCategory: "perfume-set"
    },
    {
      name: "Bracelet",
      items: "25 Items",
      image: "https://i.pinimg.com/1200x/ae/c5/9f/aec59fe1e9b64f6c0f78f98c16ad0b72.jpg",
      subCategory: "bracelet"
    },
    {
      name: "Wallet",
      items: "22 Items",
      image: "https://i.pinimg.com/736x/96/0e/8d/960e8da14252f813da23214e2c323c24.jpg",
      subCategory: "wallet"
    },
    {
      name: "Belt",
      items: "18 Items",
      image: "https://i.pinimg.com/1200x/f2/4c/e6/f24ce6ba52d2be349385be8052a9745c.jpg",
      subCategory: "belt"
    },
    {
      name: "Wallet-Belt Combo",
      items: "20 Items",
      image: "https://i.pinimg.com/1200x/c5/91/89/c591890e292eea616592adf995dece77.jpg",
      subCategory: "wallet-belt-combo"
    },
    {
      name: "Entry Props",
      items: "30 Items",
      image: "https://i.pinimg.com/1200x/17/d6/33/17d633aa3b81c3ec70c434ab43bb7e54.jpg",
      subCategory: "entry-props"
    },
    {
      name: "Gift Sets",
      items: "35 Items",
      image: "https://i.pinimg.com/736x/39/72/78/397278070ed6594cc536969e50eef3c0.jpg",
      subCategory: "gift-sets"
    },
    {
      name: "Cufflinks",
      items: "24 Items",
      image: "https://i.pinimg.com/736x/8a/b5/3c/8ab53c9f2e8f4d7a9c1e2f3b4a5c6d7e.jpg",
      subCategory: "cufflinks"
    },
    {
      name: "Tie & Bow Tie",
      items: "26 Items",
      image: "https://i.pinimg.com/736x/9b/c6/4d/9bc64d8e3f5a6b7c8d9e0f1a2b3c4d5e.jpg",
      subCategory: "tie-bowtie"
    },
    {
      name: "Grooming Kit",
      items: "20 Items",
      image: "https://i.pinimg.com/736x/7c/d8/5e/7cd85e9f4a6b7c8d9e0f1a2b3c4d5e6f.jpg",
      subCategory: "grooming-kit"
    },
    {
      name: "Sunglasses",
      items: "16 Items",
      image: "https://i.pinimg.com/736x/6d/e9/4f/6de94f0a5b6c7d8e9f0a1b2c3d4e5f6a.jpg",
      subCategory: "sunglasses"
    },
  ];

  // Trending Universal Groom Gift Items
  const trendingProducts = [
    {
      name: "Luxury Chronograph Watch",
      price: "₹8,999",
      oldPrice: "₹12,999",
      badge: "NEW",
      image: "https://i.pinimg.com/1200x/93/77/ac/9377acb6ec211a74dee17d157ea0992d.jpg",
      subCategory: "watch"
    },
    {
      name: "Premium Perfume Gift Set",
      price: "₹2,499",
      image: "https://i.pinimg.com/736x/c3/99/96/c39996aafb405dac6cdc52a5e6db3d8f.jpg",
      subCategory: "perfume-set"
    },
    {
      name: "Designer Bracelet",
      price: "₹3,999",
      badge: "25% OFF",
      image: "https://i.pinimg.com/1200x/ae/c5/9f/aec59fe1e9b64f6c0f78f98c16ad0b72.jpg",
      subCategory: "bracelet"
    },
    {
      name: "Leather Wallet Premium",
      price: "₹1,799",
      oldPrice: "₹2,499",
      badge: "NEW",
      image: "https://i.pinimg.com/736x/23/c9/ff/23c9ffe39e30f915d0896ddb47c8bdf6.jpg",
      subCategory: "wallet"
    },
    {
      name: "Wallet-Belt Combo Set",
      price: "₹2,999",
      image: "https://i.pinimg.com/1200x/a0/81/4e/a0814e636390ad0a0fde5006ad70f999.jpg",
      subCategory: "wallet-belt-combo"
    },
    {
      name: "LED Crown Entry Prop",
      price: "₹4,299",
      oldPrice: "₹5,999",
      badge: "25% OFF",
      image: "https://i.pinimg.com/1200x/1f/02/f8/1f02f844d50687e15a7bba82a12de550.jpg",
      subCategory: "entry-props"
    },
    {
      name: "Luxury Gift Hamper",
      price: "₹6,999",
      image: "https://i.pinimg.com/736x/39/72/78/397278070ed6594cc536969e50eef3c0.jpg",
      subCategory: "gift-sets"
    },
    {
      name: "Designer Cufflinks Set",
      price: "₹1,499",
      oldPrice: "₹2,199",
      badge: "NEW",
      image: "https://i.pinimg.com/736x/8a/b5/3c/8ab53c9f2e8f4d7a9c1e2f3b4a5c6d7e.jpg",
      subCategory: "cufflinks"
    },
  ];

  // Navigation handlers - Updated to use /groom/all-products path
  const handleCategoryClick = (subCategory) => {
    router.push(`/groom/all-products?category=universal-groom-gifts&subCategory=${subCategory}`);
  };

  const handleAllProductsClick = () => {
    router.push("/groom/all-products?category=universal-groom-gifts");
  };

  const handleProductClick = (subCategory) => {
    router.push(`/groom/all-products?category=universal-groom-gifts&subCategory=${subCategory}`);
  };

  const handleHeroSlideClick = (subCategory) => {
    router.push(`/groom/all-products?category=universal-groom-gifts&subCategory=${subCategory}`);
  };

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
              <div className="absolute inset-0 bg-linear-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      UNIVERSAL GROOM GIFT ITEMS
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button 
                      onClick={() => handleHeroSlideClick(slide.subCategory)}
                      className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors cursor-pointer"
                    >
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
                currentSlide === index ? "bg-blue-600 w-8" : "bg-white/60"
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
                  key={`category-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCategoryClick(category.subCategory);
                  }}
                  className="shrink-0 w-40 text-center group cursor-pointer hover:z-10"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {category.name.toUpperCase()}
                  </h3>
                  {/* <p className="text-xs text-gray-500">{category.items}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
          Featured Collections
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            onClick={handleAllProductsClick}
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://i.pinimg.com/736x/a0/81/4e/a0814e636390ad0a0fde5006ad70f999.jpg"
              alt="Luxury Gift Collections"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Luxury Gift Collections
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </button>
            </div>
          </div>

          <div 
            onClick={handleAllProductsClick}
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://i.pinimg.com/1200x/93/77/ac/9377acb6ec211a74dee17d157ea0992d.jpg"
              alt="Premium Accessories"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Premium Accessories
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
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2 transition-colors">
              TOP SELLING
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2 transition-colors">
              BEST SELLER
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => handleProductClick(product.subCategory)}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10 font-semibold">
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
                  <h3 className="text-sm text-gray-800 mb-2 font-medium group-hover:text-blue-600 transition-colors">{product.name}</h3>
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
            <button 
              onClick={handleAllProductsClick}
              className="group mt-12 relative inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default UniversalGroomGiftsPage;