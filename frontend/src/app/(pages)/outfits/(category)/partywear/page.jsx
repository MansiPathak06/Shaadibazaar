"use client";

import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Star, Sparkles, Crown, Gift, TrendingUp, Loader2 } from "lucide-react";

const CATEGORY_SLUG = "partywear";

const PartyWear = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      category: "/outfits/all-products?category=partywear&subCategory=Designer Gowns"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818997/image6_v5ubh2.jpg",
      title: "Sequined Dresses",
      category: "/outfits/all-products?category=partywear&subCategory=Sequined Dresses"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761818997/image7_kuvsxg.jpg",
      title: "Stylish Indo-Western Sets",
      category: "/outfits/all-products?category=partywear&subCategory=Stylish Indo Western Sets"
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761819000/image8_yajzkw.jpg",
      title: "Classic Suit Sets",
      category: "/outfits/all-products?category=partywear&subCategory=Classical Suit Sets"
    },
  ];

  // Product Categories
  const productCategories = ["ALL", "FEATURED", "POPULAR", "BEST DEALS"];

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

  // Fetch real products from database
  useEffect(() => {
    fetchRealProducts();
  }, []);

  const fetchRealProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/products?category=partywear"
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
  const ALL_PRODUCTS_URL = "/outfits/all-products?category=partywear";

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "ALL"
    ? realProducts
    : realProducts.filter(product =>
      product.subcategory === selectedCategory ||
      product.tags?.includes(selectedCategory)
    );

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
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden mb-8 md:mb-12">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className={`min-w-full h-full relative ${slide.bgColor}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-12 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full items-center">
                  {/* Left Content */}
                  <div className="z-10 space-y-4 sm:space-y-6 py-6 sm:py-8 lg:py-0 order-2 lg:order-1">
                    <div className="inline-block">
                      <span className="bg-rose-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-normal uppercase tracking-wide shadow-lg">
                        {slide.badge}
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-medium text-gray-900 leading-tight">
                      {slide.title}
                    </h1>

                    <Link href={ALL_PRODUCTS_URL}>
                      <button className="flex items-center cursor-pointer gap-2 text-gray-700 font-medium text-base sm:text-lg hover:text-rose-500 transition-colors group mt-4">
                        <span>{slide.subtitle}</span>
                        <span className="text-xl sm:text-2xl group-hover:translate-x-2 transition-transform">
                          →
                        </span>
                      </button>
                    </Link>
                  </div>

                  {/* Right Image */}
                  <div className="relative h-full flex items-center justify-center order-1 lg:order-2 min-h-[250px] sm:min-h-[300px]">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover rounded-xl sm:rounded-2xl shadow-2xl object-center lg:object-top"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 cursor-pointer bg-white/90 hover:bg-white p-2.5 md:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all z-20 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        <button
          onClick={nextSlide}
          className=" absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 cursor-pointer bg-white/90 hover:bg-white p-2.5 md:p-3 rounded-full shadow-xl hover:shadow-2xl transition-all z-20 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
        </button>

        {/* Dots Indicator - Adjusted for all screen sizes */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 sm:h-2 rounded-full transition-all cursor-pointer ${currentSlide === idx
                ? "bg-rose-500 w-6 sm:w-8"
                : "bg-gray-400/70 w-1.5 sm:w-2 hover:bg-gray-500"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating gradient orbs */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-200/25 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ec4899 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
        </div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group relative"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 150}ms`,
                  opacity: 0
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/0 via-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl transform scale-95" />

                {/* Icon container with enhanced animations */}
                <div className="relative mb-6">
                  {/* Outer pulsing ring */}
                  <div className="absolute inset-0 bg-rose-200/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 blur-md" />

                  {/* Rotating border ring */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 animate-spin-slow"
                      style={{ padding: '2px' }}>
                      <div className="w-full h-full rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Main icon circle */}
                  <div className="relative bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-full group-hover:from-rose-500 group-hover:to-pink-600 transition-all duration-500 shadow-lg group-hover:shadow-rose-300 group-hover:shadow-2xl group-hover:scale-110 group-hover:-rotate-6">
                    <feature.icon className="w-8 h-8 text-rose-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping delay-150" />
                </div>

                {/* Content with staggered reveal */}
                <div className="relative space-y-3 transform group-hover:translate-y-1 transition-transform duration-300">
                  <h3 className="text-2xl font-medium text-gray-800 group-hover:text-rose-600 transition-all duration-300 group-hover:tracking-wide">
                    {feature.title}
                  </h3>

                  {/* Animated underline */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto group-hover:w-16 transition-all duration-500 rounded-full" />

                  <p className="text-gray-600 text-md leading-relaxed group-hover:text-gray-800 transition-colors duration-300 px-4">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent dot */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
      </section>

      <style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }

  .delay-150 {
    animation-delay: 150ms;
  }

  .delay-700 {
    animation-delay: 700ms;
  }

  .delay-1000 {
    animation-delay: 1000ms;
  }
`}</style>


      {/* Shop by Categories Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Discover Your <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>style</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your style journey starts here</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {shopCategories.map((category) => (
              <Link href={category.category}
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
                    <h3 className="text-white text-xl font-medium">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Collections */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Trending <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>collection</span>
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
                    <span className="text-sm font-normal text-rose-400 mb-2 block">{collection.items}</span>
                    <h3 className="text-2xl font-medium mb-2">{collection.title}</h3>
                    <p className="text-gray-200 mb-4">{collection.description}</p>
                    <Link href={ALL_PRODUCTS_URL}>
                      <button className="text-white font-normal cursor-pointer hover:text-rose-400 transition-colors flex items-center gap-2">
                        Explore Now <span>→</span>
                      </button>
                    </Link>
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
                  Limited Time <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>offer</span>
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4">
                  WEEK DEAL
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Discover exclusive deals on premium fashion items
                </p>
                <Link href={'/outfits/all-products?category=partywear&subCategory=Trending Collection'}>
                  <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 cursor-pointer rounded-full font-semibold w-fit transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    <span>SHOP NOW</span>
                    <span>→</span>
                  </button></Link>
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
                TOP <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>products</span>
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Discover what's winning hearts</p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-normal uppercase text-sm transition-all duration-300 cursor-pointer ${selectedCategory === category
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="relative h-80 bg-gray-100 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-4 left-4 bg-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                            NEW
                          </span>
                        )}
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />

                        {/* Hover Icons */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(product.id);
                            }}
                            className="bg-white p-2 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-5 h-5 ${favorites.includes(product.id)
                                ? "text-rose-500 fill-rose-500"
                                : "text-rose-500"
                                }`}
                            />
                          </button>
                          <button
                            onClick={(e) => e.preventDefault()}
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
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600 ml-1">
                            ({product.rating || "4.8"})
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
                    </Link>
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
      </section>

      {/* Explore More Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background ambient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative bg-gradient-to-br from-rose-50 via-orange-50 to-pink-50 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 text-center overflow-hidden shadow-2xl hover:shadow-rose-200/50 transition-shadow duration-700 group">

            {/* Animated gradient overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
              style={{
                background: 'linear-gradient(45deg, #fef2f2, #fff7ed, #fce7f3, #fef2f2)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease infinite'
              }}
            />

            {/* Animated mesh gradient orbs */}
            <div className="absolute top-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-bl from-rose-300 via-rose-200 to-transparent rounded-full opacity-30 blur-3xl -mr-32 sm:-mr-40 -mt-32 sm:-mt-40 animate-pulse group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-gradient-to-tr from-orange-300 via-yellow-200 to-transparent rounded-full opacity-30 blur-3xl -ml-24 sm:-ml-32 -mb-24 sm:-mb-32 animate-pulse delay-700 group-hover:scale-125 transition-transform duration-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />

            {/* Floating particles */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-rose-400 rounded-full opacity-60 animate-float" />
            <div className="absolute top-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-50 animate-float delay-500" />
            <div className="absolute bottom-20 left-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-40 animate-float delay-1000" />
            <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-float delay-700" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6 sm:space-y-8">
              {/* Icon/Badge above heading */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full shadow-lg mb-2 transform group-hover:scale-105 transition-transform duration-300">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Limited Time Offer
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4 leading-tight group-hover:scale-105 transition-transform duration-300">
                <span className="inline-block bg-gradient-to-r from-gray-900 via-rose-600 to-gray-900 bg-clip-text text-transparent animate-gradient-x">
                  Explore More
                </span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed px-4 group-hover:text-gray-800 transition-colors duration-300">
                Discover more amazing products and exclusive collections tailored just for you
              </p>

              <Link href={ALL_PRODUCTS_URL}>
                <button className="group/btn relative bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-normal cursor-pointer text-base sm:text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-rose-300/50 inline-flex items-center gap-3 overflow-hidden transform hover:scale-105 hover:-translate-y-1">

                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                  {/* Button glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover/btn:opacity-50 blur-xl transition-opacity duration-500" />

                  <span className="relative z-10">View All Products</span>
                  <span className="relative z-10 text-xl sm:text-2xl group-hover/btn:translate-x-2 transition-transform duration-300">
                    →
                  </span>

                  {/* Orbiting dots */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-0 group-hover/btn:opacity-100 group-hover/btn:animate-ping" />
                </button>
              </Link>

              {/* Trust indicators or additional info */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200/50">
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Easy Returns</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                  <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Secure Checkout</span>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 sm:w-24 h-20 sm:h-24 border-t-4 border-l-4 border-rose-300/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-20 sm:w-24 h-20 sm:h-24 border-b-4 border-r-4 border-orange-300/30 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </section>

      <style jsx>{`
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
      opacity: 0.6;
    }
    50% { 
      transform: translateY(-20px) rotate(180deg); 
      opacity: 0.3;
    }
  }

  @keyframes gradient-x {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-gradient-x {
    background-size: 200% auto;
    animation: gradient-x 3s linear infinite;
  }

  .delay-500 {
    animation-delay: 500ms;
  }

  .delay-700 {
    animation-delay: 700ms;
  }

  .delay-1000 {
    animation-delay: 1000ms;
  }
`}</style>

    </div>
  );
};

export default PartyWear;
