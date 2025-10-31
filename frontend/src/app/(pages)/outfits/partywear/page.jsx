"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Star, Sparkles, Crown, Gift, TrendingUp } from "lucide-react";

const PartyWear = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Hero Carousel Slides
  const heroSlides = [
    {
      id: 1,
      badge: "20% OFF",
      title: "STYLES DRESS",
      subtitle: "Learn More",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818995/image1_t22wip.avif",
      bgColor: "bg-rose-50",
    },
    {
      id: 2,
      badge: "30% OFF",
      title: "ELEGANT COLLECTION",
      subtitle: "Shop Now",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818997/image2_zbqppp.jpg",
      bgColor: "bg-rose-100",
    },
    {
      id: 3,
      badge: "NEW ARRIVALS",
      title: "ROYAL ATTIRE",
      subtitle: "Explore Now",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818996/image3_getxns.jpg",
      bgColor: "bg-amber-100",
    },
    {
      id: 4,
      badge: "LIMITED OFFER",
      title: "TRADITIONAL ELEGANCE",
      subtitle: "Discover More",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818996/image4_ckv06z.jpg",
      bgColor: "bg-emerald-100",
    },
  ];

  // Shop Categories
  const shopCategories = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818996/image5_ymjio2.jpg",
      title: "Designer Gowns",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818997/image6_v5ubh2.jpg",
      title: "Sequined Dresses",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818997/image7_kuvsxg.jpg",
      title: "Stylish Indo-Western Sets",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819000/image8_yajzkw.jpg",
      title: "Classic Suit Sets",
    },
  ];

  // Product Categories
  const productCategories = ["ALL", "FEATURED", "POPULAR", "BEST DEALS"];

  // All Products
  const allProducts = [
    {
      id: 1,
      name: "Shimmer Sequin Gown",
      category: "FEATURED",
      price: 879.99,
      originalPrice: 1249.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819000/image9_dybmuo.jpg",
      badge: "NEW",
    },
    {
      id: 2,
      name: "Velvet Party Blazer",
      category: "POPULAR",
      price: 1129.99,
      originalPrice: 2179.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819001/image10_wmbizf.jpg",
    },
    {
      id: 3,
      name: "Sparkle Mini Dress",
      category: "BEST DEALS",
      price: 1289.99,
      originalPrice: 2139.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819002/image11_y5uhbu.jpg",
      badge: "SALE",
    },
    {
      id: 4,
      name: "Embellished Saree Gown",
      category: "FEATURED",
      price: 2199.99,
      originalPrice: 1259.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819005/image15_bxr2n8.jpg",
    },
    {
      id: 5,
      name: "Men’s Designer Sherwani",
      category: "POPULAR",
      price: 249.99,
      originalPrice: 319.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819006/image14_wpsma1.jpg",
    },
    {
      id: 6,
      name: "Cocktail Evening Dress",
      category: "FEATURED",
      price: 159.99,
      originalPrice: 219.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819005/image15_bxr2n8.jpg",
      badge: "HOT",
    },
    {
      id: 7,
      name: "Stylish Indo-Western Suit",
      category: "BEST DEALS",
      price: 139.99,
      originalPrice: 199.99,
      rating: 4.5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819013/image166_k3ex9b.jpg",
    },
    {
      id: 8,
      name: "Luxury Party Lehenga",
      category: "FEATURED",
      price: 279.99,
      originalPrice: 349.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819007/image17_zugkqt.jpg",
    },
    {
      id: 9,
      name: "Men’s Velvet Tuxedo",
      category: "POPULAR",
      price: 199.99,
      originalPrice: 279.99,
      rating: 5.0,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819007/image18_d5kbxw.jpg",
      badge: "EXCLUSIVE",
    },

  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  // Features
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Handpicked luxury items"
    },
    {
      icon: Crown,
      title: "Exclusive Designs",
      description: "Limited edition pieces"
    },
    {
      icon: Gift,
      title: "Gift Wrapping",
      description: "Complimentary service"
    },
    {
      icon: TrendingUp,
      title: "Trending Styles",
      description: "Latest fashion trends"
    }
  ];

  // Trending Collections
  const trendingCollections = [
    {
      id: 1,
      title: "Night Glamour",
      description: "Dazzle at every party",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819009/image19_rtssx5.jpg",
      items: "25+ Items"
    },
    {
      id: 2,
      title: "Cocktail Hours",
      description: "Sophisticated elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819011/image20_qwkxae.avif",
      items: "30+ Items"
    },
    {
      id: 3,
      title: "Red Carpet Ready",
      description: "Celebrity-inspired looks",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819012/image21_hmwe9b.jpg",
      items: "20+ Items"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden mb-8 md:mb-12">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full h-full relative ${slide.bgColor}`}
            >
              <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
                  {/* Left Content */}
                  <div className="z-10 space-y-6 py-8">
                    <div className="inline-block">
                      <span className="bg-rose-500 text-white px-6 py-2 rounded-md text-sm font-bold uppercase tracking-wide shadow-lg">
                        {slide.badge}
                      </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                    </h1>
                    <button className="flex items-center gap-2 text-gray-700 font-medium text-lg hover:text-rose-500 transition-colors group">
                      <span>{slide.subtitle}</span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </button>
                  </div>

                  {/* Right Image */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-2xl shadow-2xl object-top"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-xl transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${currentSlide === idx
                ? "bg-rose-500 w-8"
                : "bg-gray-400 w-2"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="bg-rose-100 p-5 rounded-full mb-4 group-hover:bg-rose-500 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-rose-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Discover Your Style
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your style journey starts here</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {shopCategories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64 md:h-80"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 object-top transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                    <h3 className="text-white text-xl font-bold">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Trending Collections
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Curated styles for every occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingCollections.map((collection) => (
              <div key={collection.id} className="group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="text-sm font-semibold text-rose-400 mb-2 block">{collection.items}</span>
                    <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                    <p className="text-gray-200 mb-4">{collection.description}</p>
                    <button className="text-white font-semibold hover:text-rose-400 transition-colors flex items-center gap-2">
                      Explore Now <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Week Deal Banner Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-100 to-pink-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* Left Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <span className="text-rose-500 font-semibold text-sm uppercase tracking-wide mb-3">
                  Limited Time Offer
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4">
                  WEEK DEAL
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Discover exclusive deals on premium fashion items
                </p>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold w-fit transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <span>SHOP NOW</span>
                  <span>→</span>
                </button>
              </div>

              {/* Right Image */}
              <div className="relative h-full">
                <Image
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819012/image22_lf5qsi.jpg"
                  alt="Week Deal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                TOP PRODUCTS
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Discover what’s winning hearts</p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold uppercase text-sm transition-all duration-300 cursor-pointer ${selectedCategory === category
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                      {product.badge}
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-5 h-5 text-rose-500" />
                    </button>
                    <button
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5 text-rose-500" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${idx < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                          }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-rose-500">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Explore More Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="relative bg-gradient-to-r from-rose-50 to-orange-50 rounded-3xl p-12 sm:p-16 text-center overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Explore More
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Discover more amazing products and exclusive collections tailored just for you
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-3">
                <span>View All Products</span>
                <span className="text-2xl">→</span>
              </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200 rounded-full opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-200 rounded-full opacity-20 -ml-24 -mb-24"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyWear;