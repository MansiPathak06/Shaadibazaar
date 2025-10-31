"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Check, Sparkles, Award } from "lucide-react";

const GroomWear = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Category Cards
  const categoryCards = [
    {
      id: 1,
      title: "BEYOND TOP SHOP",
      subtitle: "New Styles Added",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816133/image1_kfcjkk.jpg",
      bgColor: "bg-gray-800",
    },
    {
      id: 2,
      title: "MEN OFFICE SUIT",
      subtitle: "Office Collection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816133/image1_kfcjkk.jpg",
      bgColor: "bg-teal-600",
    },
    {
      id: 3,
      title: "YOUR PERSONAL STYLE",
      subtitle: "Customize Your Look",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816134/image3_ojuluy.jpg",
      bgColor: "bg-gray-700",
    },
  ];

  // Product Categories
  const productCategories = ["ALL", "SUITS", "CASUAL", "WEDDING", "BLAZERS", "TUXEDOS", "THREE-PIECE"];

  // All Products (Expanded)
  const allProducts = [
    {
      id: 1,
      name: "Formal Green 3-Piece",
      category: "THREE-PIECE",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816136/image4_ta9yrt.jpg",
    },
    {
      id: 2,
      name: "Casual Denim 3-Piece",
      category: "CASUAL",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816136/image5_qyofn7.jpg",
    },
    {
      id: 3,
      name: "Business Grey Suit",
      category: "SUITS",
      price: 249.99,
      originalPrice: 349.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816137/image6_yonaz9.jpg",
    },
    {
      id: 4,
      name: "Premium Royal Blue",
      category: "WEDDING",
      price: 299.99,
      originalPrice: 399.99,
      rating: 5.0,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816136/image7_ihmxdm.jpg",
      badge: "BEST SELLER",
    },
    {
      id: 5,
      name: "Burgundy Dinner Suit",
      category: "WEDDING",
      price: 279.99,
      originalPrice: 379.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816136/image8_vtskyd.jpg",
    },
    {
      id: 6,
      name: "Classic Black Tuxedo",
      category: "TUXEDOS",
      price: 329.99,
      originalPrice: 449.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816137/image9_ensr4k.jpg",
      badge: "NEW",
    },
    {
      id: 7,
      name: "Formal White Suit",
      category: "WEDDING",
      price: 259.99,
      originalPrice: 359.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816133/image1_kfcjkk.jpg",
    },
    {
      id: 8,
      name: "Navy Blue Blazer",
      category: "BLAZERS",
      price: 179.99,
      originalPrice: 249.99,
      rating: 4.5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816137/image11_gqgwzi.jpg",
    },
    {
      id: 9,
      name: "Emerald Velvet Tuxedo",
      category: "TUXEDOS",
      price: 349.99,
      originalPrice: 479.99,
      rating: 5.0,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816137/image12_erznnr.jpg",
      badge: "TRENDING",
    },
    {
      id: 10,
      name: "Charcoal Grey 3-Piece",
      category: "THREE-PIECE",
      price: 289.99,
      originalPrice: 389.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816139/image13_vmvapo.jpg",
    },
    {
      id: 11,
      name: "Tan Brown Blazer",
      category: "BLAZERS",
      price: 199.99,
      originalPrice: 279.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816139/image14_wskqla.jpg",
    },
    {
      id: 12,
      name: "Midnight Blue Tuxedo",
      category: "TUXEDOS",
      price: 359.99,
      originalPrice: 499.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816138/image15_xyybpo.jpg",
    },
    {
      id: 13,
      name: "Terracotta Wedding Suit",
      category: "WEDDING",
      price: 319.99,
      originalPrice: 429.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816140/image16_ptphb6.jpg",
      badge: "NEW",
    },
    {
      id: 14,
      name: "Light Grey Casual Suit",
      category: "CASUAL",
      price: 169.99,
      originalPrice: 229.99,
      rating: 4.5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761816139/image17_b3qrhp.jpg",
    },
    {
      id: 15,
      name: "Double-Breasted Navy",
      category: "SUITS",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817102/image18_rmbvuj.jpg",
    },
    {
      id: 16,
      name: "Sage Green Linen Suit",
      category: "CASUAL",
      price: 189.99,
      originalPrice: 259.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817102/image19_psnmzv.jpg",
      badge: "SUMMER SPECIAL",
    },
  ];

  // Fabric Guide Data
  const fabricTypes = [
    {
      name: "Wool",
      description: "Classic choice offering durability, breathability, and year-round versatility",
      bestFor: "Corporate events, weddings, all-season wear",
      icon: "🧥",
    },
    {
      name: "Velvet",
      description: "Luxurious textured fabric adding royal elegance to formal occasions",
      bestFor: "Evening events, grand celebrations, winter weddings",
      icon: "👔",
    },
    {
      name: "Linen",
      description: "Lightweight and breathable, perfect for warm weather with natural wrinkle character",
      bestFor: "Summer weddings, destination ceremonies, outdoor events",
      icon: "🌞",
    },
    {
      name: "Bamboo",
      description: "Sustainable fabric with silk-like appearance and moisture-wicking properties",
      bestFor: "Eco-conscious events, spring/autumn ceremonies",
      icon: "🎋",
    },
    {
      name: "Wool-Silk Blend",
      description: "Combines structure with subtle sheen for sophisticated formal appeal",
      bestFor: "High-stakes meetings, black-tie events, premium occasions",
      icon: "✨",
    },
    {
      name: "Cotton",
      description: "Soft and versatile with neat appearance, suitable for multiple seasons",
      bestFor: "Business casual, daytime events, smart-casual occasions",
      icon: "🌾",
    },
  ];

  // Styling Tips
  const stylingTips = [
    {
      title: "Bold Color Choices",
      tip: "Embrace jewel tones like emerald, burgundy, and deep blue for 2025 weddings",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817242/image20_si3onb.jpg",
    },
    {
      title: "Three-Piece Revival",
      tip: "Modern cuts with creative waistcoat fabrics bring old-school charm",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817243/image21_rhpmba.jpg",
    },
    {
      title: "Statement Accessories",
      tip: "Custom cufflinks, lapel pins, and velvet loafers elevate any outfit",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817243/image22_s34znf.jpg",
    },
    {
      title: "Relaxed Tailoring",
      tip: "Softly structured blazers and lightweight fabrics offer comfort without sacrificing style",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817243/image23_zhwhoh.jpg",
    },
  ];

 

  // Why Choose Us Features
  const features = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Premium Fabrics",
      description: "Sourced from the finest mills worldwide",
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Custom Tailoring",
      description: "Perfect fit guaranteed for every body type",
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "2025 Trends",
      description: "Stay ahead with latest fashion innovations",
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "Sustainable Options",
      description: "Eco-friendly bamboo and organic cotton available",
    },
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="z-10 space-y-6 text-center lg:text-left py-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight uppercase">
                MODERN
                <br />
                OFFICE ATTIRE
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                Redefining professional style with contemporary elegance and
                sophisticated designs
              </p>
              <button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-none font-semibold uppercase tracking-wider transition-all duration-300">
                Explore Collection
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex items-end justify-center lg:justify-end">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                <Image
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761817242/image20_si3onb.jpg"
                  alt="Modern Office Attire"
                  fill
                  className="object-contain object-bottom"
                  priority
                  sizes="(max-width: 1024px) 80vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-rose-400 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-rose-400 opacity-20"></div>
      </section>

      {/* 2025 Trends Banner */}
      <section className="bg-rose-500 py-6">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white text-center">
            <div>
              <p className="text-sm font-medium">TRENDING 2025</p>
              <p className="text-lg font-bold">Bold Jewel Tones</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30"></div>
            <div>
              <p className="text-sm font-medium">HOT STYLE</p>
              <p className="text-lg font-bold">Relaxed Tailoring</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30"></div>
            <div>
              <p className="text-sm font-medium">MUST-HAVE</p>
              <p className="text-lg font-bold">Three-Piece Suits</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30"></div>
            <div>
              <p className="text-sm font-medium">ECO-FRIENDLY</p>
              <p className="text-lg font-bold">Sustainable Fabrics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryCards.map((category) => (
              <div
                key={category.id}
                className={`${category.bgColor} relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-64`}
              >
                <div className="absolute inset-0 flex items-center justify-between p-8">
                  <div className="z-10 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase">
                      {category.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 mb-4">
                      {category.subtitle}
                    </p>
                    <button className="text-white text-sm font-semibold uppercase hover:underline">
                      Shop Now →
                    </button>
                  </div>
                  <div className="relative w-32 h-full opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain object-top h-full w-full group-hover:scale-110 transition-transform duration-300"
                      sizes="128px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              why choose our collection
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Curated for Style, Crafted for You</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-rose-200 transition-all duration-300 text-center overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Sliding background effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-50 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-2xl" />

                {/* Icon with floating animation */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 bg-rose-500 text-white rounded-full mb-5 shadow-lg group-hover:shadow-rose-200 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="text-xl group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                </div>

                {/* Content with stagger effect */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fabric Guide Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Fabric Guide
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Know your fabrics, perfect your look</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricTypes.map((fabric, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-rose-200 transition-all duration-300 cursor-pointer"
              >
                {/* Icon with background circle */}
                <div className="w-16 h-16 bg-rose-50 group-hover:bg-rose-100 rounded-full flex items-center justify-center mb-6 transition-colors">
                  <Sparkles className="w-8 h-8 text-rose-500 group-hover:text-rose-600" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-800">
                    {fabric.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {fabric.description}
                  </p>

                  {/* Best For section with icon */}
                  <div className="flex items-start gap-3 pt-2">
                    <Award className="w-4 h-4 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-1">Best For:</p>
                      <p className="text-sm text-rose-600">{fabric.bestFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styling Tips Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">



          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-white tracking-tight uppercase">
              2025 Styling Tips
            </h2>
            <p className="text-white text-lg tracking-widest uppercase mb-2">Stay ahead of the fashion curve with expert styling advice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stylingTips.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-lg font-bold mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">{item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pt-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                our collections
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Perfect fabric, perfect look</p>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 cursor-pointer font-semibold uppercase text-sm transition-all duration-300 ${selectedCategory === category
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-lg"
              >
                {/* Product Image */}
                <div className="relative h-96 bg-gray-50 overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 text-xs font-bold uppercase z-10">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Hover Icons */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <button
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <button
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 bg-white">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 uppercase">
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
        <div className='flex justify-center py-12'>
          <button
            className="group relative px-8 py-3 cursor-pointer bg-neutral-900 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-xl hover:scale-105"
          >
            {/* Button text */}
            <span className="relative z-10 flex items-center gap-2">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              What Our Customers Say
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Stories That Inspire Us Every Day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Corporate Executive",
                review:
                  "The quality and fit are exceptional. Perfect for my business meetings and events.",
                rating: 5,
              },
              {
                name: "Arjun Mehta",
                role: "Groom",
                review:
                  "Wore their emerald velvet tuxedo for my wedding. Absolutely stunning and comfortable!",
                rating: 5,
              },
              {
                name: "Vikram Singh",
                role: "Fashion Enthusiast",
                review:
                  "Love the 2025 collection. Bold colors and modern cuts are exactly what I was looking for.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.review}&quot;
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 uppercase">
            Style Meets Sophistication
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover our exclusive collection of premium formal wear designed
            for the modern gentleman
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-none cursor-pointer font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default GroomWear;
