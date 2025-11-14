"use client";

import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Check, Sparkles, Award, Loader2, Shirt, Gem, Sun, Leaf, Feather } from "lucide-react";
import Link from "next/link";

const CATEGORY_SLUG = "Groom Wear";

const GroomWear = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  // Fabric Guide Data
  const fabricTypes = [
    {
      name: "Wool",
      description: "Classic choice offering durability, breathability, and year-round versatility",
      bestFor: "Corporate events, weddings, all-season wear",
      icon: Shirt,
      category: "/outfits/all-products?category=Outfits&subCategory=Wool"
    },
    {
      name: "Velvet",
      description: "Luxurious textured fabric adding royal elegance to formal occasions",
      bestFor: "Evening events, grand celebrations, winter weddings",
      icon: Gem,
      category: "/outfits/all-products?category=Outfits&subCategory=Velvet"
    },
    {
      name: "Linen",
      description: "Lightweight and breathable, perfect for warm weather with natural wrinkle character",
      bestFor: "Summer weddings, destination ceremonies, outdoor events",
      icon: Sun,
      category: "/outfits/all-products?category=Outfits&subCategory=Linen"
    },
    {
      name: "Bamboo",
      description: "Sustainable fabric with silk-like appearance and moisture-wicking properties",
      bestFor: "Eco-conscious events, spring/autumn ceremonies",
      icon: Leaf,
        category:"/outfits/all-products?category=Outfits&subCategory=Bamboo"
    },
    {
      name: "Wool-Silk Blend",
      description: "Combines structure with subtle sheen for sophisticated formal appeal",
      bestFor: "High-stakes meetings, black-tie events, premium occasions",
      icon: Sparkles,
        category:"/outfits/all-products?category=Outfits&subCategory=Wool Silk Blend"
    },
    {
      name: "Cotton",
      description: "Soft and versatile with neat appearance, suitable for multiple seasons",
      bestFor: "Business casual, daytime events, smart-casual occasions",
      icon: Feather,
        category:"/outfits/all-products?category=Outfits&subCategory=Cotton"
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
      title: "Statement outfits",
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

  // Fetch real products from database
  useEffect(() => {
    fetchRealProducts();
  }, []);

  const fetchRealProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/products?category=groomwear"
      );
      const data = await response.json();

      if (data.success) {
        setRealProducts(data.products);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const formatINR = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // URL for "View More" - Goes to all products list page
  const ALL_PRODUCTS_URL = "/outfits/all-products?category=Groom Wear";

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "ALL"
    ? realProducts
    : realProducts.filter(product =>
      product.subcategory?.toUpperCase() === selectedCategory ||
      product.tags?.toUpperCase().includes(selectedCategory)
    );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="z-10 space-y-6 text-center lg:text-left py-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-gray-900 leading-tight uppercase">
                MODERN
                <br />
                OFFICE ATTIRE
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                Redefining professional style with contemporary elegance and
                sophisticated designs
              </p>
              <Link href={`/outfits/all-products?category=Outfits&subCategory=Trending Collection`}>
                <button className="bg-transparent border-2 border-gray-900 text-gray-900 cursor-pointer hover:bg-gray-900 hover:text-white px-8 py-3 rounded-none font-semibold uppercase tracking-wider transition-all duration-300">
                  Explore Collection
                </button>
              </Link>
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
              <p className="text-2xl font-medium">Bold Jewel Tones</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30"></div>
            <div>
              <p className="text-sm font-medium">HOT STYLE</p>
              <p className="text-2xl font-medium">Relaxed Tailoring</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30"></div>
            <div>
              <p className="text-sm font-medium">MUST-HAVE</p>
              <p className="text-2xl font-medium">Three-Piece Suits</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-white opacity-30"></div>
            <div>
              <p className="text-sm font-medium">ECO-FRIENDLY</p>
              <p className="text-2xl font-medium">Sustainable Fabrics</p>
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
                className={`${category.bgColor} relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group h-64`}
              >
                <div className="absolute inset-0 flex items-center justify-between p-8">
                  <div className="z-10 text-white">
                    <h3 className="text-2xl md:text-3xl font-medium mb-2 uppercase">
                      {category.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-200 mb-4">
                      {category.subtitle}
                    </p>
                    <Link href={ALL_PRODUCTS_URL}>
                      <button className="text-white text-sm font-medium uppercase cursor-pointer">
                        Shop Now →
                      </button>
                    </Link>
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
              why <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>choose</span> our <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>collection</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Curated for Style, Crafted for You</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 hover:border-rose-300 transition-all duration-500 text-center overflow-hidden backdrop-blur-sm hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated gradient background with shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-transparent opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-out rounded-2xl" />

                {/* Radial glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-rose-400 rounded-full blur-3xl" />
                </div>

                {/* Shine effect overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Icon with enhanced animations */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-2xl mb-5 shadow-lg group-hover:shadow-rose-300 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-110 transition-all duration-500">
                  {/* Icon glow ring */}
                  <div className="absolute inset-0 rounded-2xl bg-rose-400 opacity-0 group-hover:opacity-50 blur-md group-hover:scale-125 transition-all duration-500" />

                  {/* Icon with pulse effect */}
                  <div className="relative text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                </div>

                {/* Content with enhanced stagger effect */}
                <div className="relative space-y-3">
                  <h3 className="text-2xl font-medium text-gray-900 mb-3 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-105 group-hover:tracking-wide">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-all duration-300 transform group-hover:translate-y-0.5">
                    {feature.description}
                  </p>

                  {/* Animated underline accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 group-hover:w-16 transition-all duration-500 rounded-full" />
                </div>

                {/* Corner accent decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

                {/* Bottom left particle effect */}
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-rose-200 rounded-full opacity-0 group-hover:opacity-60 blur-sm group-hover:scale-150 transition-all duration-700" />
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
              Fabric <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>guides</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Know your fabrics, perfect your look</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabricTypes.map((fabric, index) => (
              <Link href={fabric.category}
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 hover:border-rose-300 transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-3 hover:scale-[1.02]"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Animated gradient background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/30 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />

                {/* Diagonal shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                {/* Radial glow behind icon */}
                <div className="absolute top-8 left-8 w-32 h-32 bg-rose-300/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />

                {/* Icon with enhanced animations */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-rose-50 to-rose-100 group-hover:from-rose-100 group-hover:to-rose-200 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm group-hover:shadow-rose-200 group-hover:shadow-lg">
                  {/* Pulsing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-rose-400/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-sm" />

                  {/* Icon with dynamic animation */}
                  <Sparkles className="relative w-8 h-8 text-rose-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-12deg] group-hover:drop-shadow-lg" />

                  {/* Orbiting particles */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </div>

                {/* Content with staggered animations */}
                <div className="relative space-y-4 transform group-hover:translate-x-1 transition-transform duration-300">
                  <h3 className="text-4xl font-medium text-gray-900 group-hover:text-rose-600 transition-all duration-300 group-hover:tracking-wide">
                    {fabric.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {fabric.description}
                  </p>

                  {/* Best For section with enhanced styling */}
                  <div className="relative flex items-start gap-3 pt-2 pl-4 border-l-2 border-transparent group-hover:border-rose-300 transition-all duration-500">
                    {/* Icon container with glow */}
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Award className="relative w-5 h-5 text-rose-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12" />
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors flex items-center gap-2">
                        Best For:
                        {/* Animated dot indicator */}
                        <span className="inline-block w-1.5 h-1.5 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                      </p>
                      <p className="text-sm text-rose-600 group-hover:text-rose-700 font-medium transition-all duration-300 group-hover:translate-x-1">
                        {fabric.bestFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl" />

                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-tr-3xl" />

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 group-hover:w-full transition-all duration-700 ease-out rounded-full" />

                {/* Floating particles effect */}
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-rose-300 rounded-full opacity-0 group-hover:opacity-60 group-hover:-translate-y-8 transition-all duration-1000 blur-sm" />
                <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-40 group-hover:-translate-y-12 transition-all duration-1200 delay-100 blur-sm" />
              </Link>

            ))}
          </div>
        </div>
      </section>

      {/* Styling Tips Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-900">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-white tracking-tight uppercase">
              2025 <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>styling</span> Tips
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
                    className="object-cover object-top object-fit group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-medium mb-2 uppercase">
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
                our <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>collection</span>
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Perfect fabric, perfect look</p>
            </div>
            <div className="flex justify-center gap-3 flex-wrap">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 cursor-pointer font-normal cursor-pointer uppercase text-sm transition-all duration-300 ${selectedCategory === category
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchRealProducts}
                className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <div
                      key={product.id}
                      className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-lg"
                    >
                      {/* Product Image */}
                      <div className="relative h-96 bg-gray-50 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 text-xs font-bold uppercase z-10">
                            NEW
                          </span>
                        )}
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="object-cover h-full w-full object-top group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />

                        {/* Hover Icons */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(product.id);
                            }}
                            className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-5 h-5 ${favorites.includes(product.id)
                                ? "text-rose-500 fill-rose-500"
                                : ""
                                }`}
                            />
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
                        <h3 className="text-base font-semibold text-gray-900 mb-2 uppercase line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">
                            {product.rating || "4.8"}
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-rose-500">
                            {formatINR(product.price)}
                          </span>
                          {product.mrp && product.mrp > product.price && (
                            <>
                              <span className="text-sm text-gray-400 line-through">
                                {formatINR(product.mrp)}
                              </span>
                              <span className="text-sm text-red-500 font-medium">
                                -{product.discount}%
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* View More Button */}
              <Fragment>
                <div className='flex justify-center py-16'>
                  <Link href={ALL_PRODUCTS_URL}>
                    <button
                      className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
                    >
                      {/* Background slide effect */}
                      <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

                      {/* Button text */}
                      <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                        View More Products
                        <svg
                          className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </Fragment>
            </>
          )}
        </div>
      </section >

      {/* Testimonials Section */}
      < section className="py-12 bg-gray-50" >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              What <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>our</span> Customers <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>say</span>
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
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Footer Banner Section */}
      < section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-20" >
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 uppercase">
            Style meets Sophistication
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Discover our exclusive collection of premium formal wear designed
            for the modern gentleman
          </p>
          <Link href={ALL_PRODUCTS_URL}
          >
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-none cursor-pointer font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl">
              Shop Now
            </button>
          </Link>
        </div>
      </section >
    </div >
  );
};

export default GroomWear;
