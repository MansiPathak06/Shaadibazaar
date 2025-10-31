"use client";
import { Fragment } from "react";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Truck, Award, RefreshCcw, Package, Shield, Clock } from "lucide-react";


const TraditionalWear = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");

  // Feature Cards
  const features = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8 text-rose-500" />,
      title: "Free Home Delivery",
      description: "Providing free delivery for all products over ₹499",
    },
    {
      id: 2,
      icon: <Award className="w-8 h-8 text-rose-500" />,
      title: "Quality Products",
      description: "We ensure our product quality all of time",
    },
    {
      id: 3,
      icon: <RefreshCcw className="w-8 h-8 text-rose-500" />,
      title: "3 Days Return",
      description: "Our return policy is very easy in only 3 days",
    },
  ];

  // Promotional Banner Cards
  const bannerCards = [
    {
      id: 1,
      title: "Bridal Lehengas",
      discount: "Save 40%",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839280/image1_dufddx.jpg",
      bgColor: "bg-rose-100",
      buttonText: "Shop Now!",
    },
    {
      id: 2,
      title: "Designer Sarees",
      subtitle: "Don't Miss Out Now!",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839277/image2_tr6ksz.jpg",
      bgColor: "bg-amber-100",
      buttonText: "Shop Now!",
    },
    {
      id: 3,
      title: "Bridal Jewelry",
      discount: "Save 30%",
      subtitle: "Collection 2025",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839277/image3_i7afoe.jpg",
      bgColor: "bg-purple-100",
      buttonText: "Shop Now!",
    },
  ];

  // Product Filters
  const bridalProductFilters = ["ALL", "NEW", "HOT", "BEST DEALS"];
  const groomProductFilters = ["ALL", "NEW", "HOT", "BEST DEALS"];

  // Featured Products - EXPANDED WITH MORE BRIDAL WEAR
  const allProducts = [
    {
      id: 1,
      name: "Red Bridal Lehenga Choli",
      price: 295.5,
      originalPrice: 450.0,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839278/image4_r6twps.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 2,
      name: "Maroon Designer Bridal Lehenga",
      price: 325.5,
      originalPrice: 495.0,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839278/image5_s8yvrt.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 3,
      name: "Silk Embroidered Wedding Saree",
      price: 185.5,
      originalPrice: 280.0,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839278/image6_wqprue.jpg",
      badge: "BEST DEALS",
      discount: 34,
    },
    {
      id: 4,
      name: "Pink Bridal Lehenga Set",
      price: 275.5,
      originalPrice: 420.0,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839284/image7_htstoj.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 5,
      name: "Golden Zari Work Bridal Lehenga",
      price: 345.5,
      originalPrice: 520.0,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839286/image8_fwdjwd.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 6,
      name: "Traditional Banarasi Silk Saree",
      price: 165.5,
      originalPrice: 245.0,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839287/image9_tspbgz.jpg",
      discount: 32,
    },
    {
      id: 7,
      name: "Royal Blue Bridal Lehenga",
      price: 305.5,
      originalPrice: 465.0,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839291/image10_ey8h2q.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 8,
      name: "Embroidered Red Wedding Lehenga",
      price: 285.5,
      originalPrice: 425.0,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839292/image11_xnfyrw.jpg",
      badge: "BEST DEALS",
      discount: 33,
    },
    {
      id: 9,
      name: "Designer Pink Bridal Lehenga",
      price: 315.5,
      originalPrice: 475.0,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839293/image12_dzycn2.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 10,
      name: "Peach Silk Bridal Lehenga",
      price: 295.5,
      originalPrice: 440.0,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839294/image13_bsqr2c.jpg",
      badge: "HOT",
      discount: 33,
    },
    {
      id: 11,
      name: "Heavy Zardozi Bridal Lehenga",
      price: 365.5,
      originalPrice: 550.0,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839300/image14_ulf3ji.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 12,
      name: "Mint Green Bridal Lehenga",
      price: 255.5,
      originalPrice: 385.0,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839301/image15_rmasqt.jpg",
      badge: "BEST DEALS",
      discount: 34,
    },
  ];

  // Featured Products - GROOM WEAR COLLECTION
  const GroomAllProducts = [
    {
      id: 1,
      name: "Royal Maroon Sherwani",
      price: 295.5,
      originalPrice: 450.0,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463399/Royal_Maroon_Sherwani_enr37j.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 2,
      name: "Gold Embroidered Wedding Sherwani",
      price: 325.5,
      originalPrice: 495.0,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463399/Gold_Embroidered_Wedding_Sherwani_ybcxit.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 3,
      name: "Ivory Silk Sherwani Set",
      price: 185.5,
      originalPrice: 280.0,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463401/ivory_Silk_Sherwani_Set_smnvdf.jpg",
      badge: "BEST DEALS",
      discount: 34,
    },
    {
      id: 4,
      name: "Black Velvet Jodhpuri Suit",
      price: 275.5,
      originalPrice: 420.0,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463399/Black_Velvet_Jodhpuri_Suit_fkjsth.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 5,
      name: "Beige Bandhgala Suit",
      price: 345.5,
      originalPrice: 520.0,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463400/Beige_Bandhgala_Suit_gxpczd.jpg",
      badge: "NEW",
      discount: 34,
    },
    {
      id: 6,
      name: "Navy Blue Indo-Western Suit",
      price: 165.5,
      originalPrice: 245.0,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463399/Navy_Blue_Indo-Western_Suit_st5lch.jpg",
      discount: 32,
    },
    {
      id: 7,
      name: "Cream Achkan Sherwani",
      price: 305.5,
      originalPrice: 465.0,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463400/Cream_Achkan_Sherwani_v6pzwc.jpg",
      badge: "HOT",
      discount: 34,
    },
    {
      id: 8,
      name: "Burgundy Wedding Jodhpuri",
      price: 285.5,
      originalPrice: 425.0,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463400/Burgundy_Wedding_Jodhpuri_usrudt.jpg",
      badge: "BEST DEALS",
      discount: 33,
    },
  ];

  const filteredProducts =
    selectedFilter === "ALL"
      ? allProducts
      : allProducts.filter((product) => product.badge === selectedFilter);

  const filteredGroomProducts =
    selectedFilter === "ALL"
      ? GroomAllProducts
      : GroomAllProducts.filter((product) => product.badge === selectedFilter);

  // Additional Features
  const additionalFeatures = [
    {
      icon: Package,
      title: "Authentic Products",
      description: "100% genuine traditional wear"
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Safe and encrypted payments"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help you"
    }
  ];

  // Collections Banner - EXPANDED
  const collections = [
    {
      id: 1,
      title: "Bridal Collection",
      description: "Exquisite Wedding Lehengas",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839301/image16_z2tzel.jpg",
      discount: "Up to 40% OFF"
    },
    {
      id: 2,
      title: "Designer Sarees",
      description: "Traditional Elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839301/image17_ozybsl.jpg",
      discount: "Starting at $99"
    }
  ];

  // NEW: Bridal Showcase Section
  const bridalShowcase = [
    {
      id: 1,
      title: "Red & Gold Bridal Collection",
      subtitle: "Traditional Masterpieces",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460091/traditional-women-wear-1_xvlfal.jpg",
    },
    {
      id: 2,
      title: "Designer Lehenga Range",
      subtitle: "Contemporary Bridal Wear",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460090/traditional-women-wear-2_jzyc1c.jpg",
    },
    {
      id: 3,
      title: "Silk Saree Collection",
      subtitle: "Timeless Elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460090/traditional-women-wear-3_js43lu.jpg",
    },
  ];

  // NEW: Bridal Categories
  const bridalCategories = [
    {
      id: 1,
      name: "Bridal Lehengas",
      count: "250+ Designs",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839278/image4_r6twps.jpg",
    },
    {
      id: 2,
      name: "Wedding Sarees",
      count: "180+ Designs",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839284/image7_htstoj.jpg",
    },
    {
      id: 3,
      name: "Bridal Jewelry",
      count: "300+ Pieces",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839309/image18_a3sdkd.jpg",
    },
    {
      id: 4,
      name: "Designer Dupattas",
      count: "120+ Styles",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839310/image19_qoe23c.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50 overflow-hidden mb-12 md:mb-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Content */}
            <div className="z-10 space-y-8 py-10">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-800 italic leading-tight">
                  Stylish & Dashing
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                  Discover our curated collection featuring timeless classics at
                  great prices. From traditional elegance to contemporary
                  fashion, find everything you need for every occasion at very
                  affordable prices.
                </p>
              </div>
              <button className="bg-transparent border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10 py-4 font-thin transition-all duration-300 flex items-center gap-3 rounded-lg shadow-md hover:shadow-xl">
                <span>Shop Now!</span>
                <span>→</span>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative h-full flex items-center justify-center lg:justify-end py-8">
              <div className="relative w-full h-[400px] md:h-[550px] lg:h-[600px]">
                <Image
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460101/traditional-wear-front-imag_vnm3xa.jpg"
                  alt="Stylish & Dashing Traditional Bridal Wear"
                  fill
                  className="object-cover object-top rounded-3xl shadow-2xl"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Circle Elements */}
        <div className="absolute top-12 left-12 w-20 h-20 border-2 border-rose-300 rounded-full opacity-50"></div>
        <div className="absolute bottom-24 left-24 w-16 h-16 bg-rose-200 rounded-full opacity-30"></div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-5 p-8 bg-white rounded-2xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Bridal Showcase Gallery */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Bridal Showcase
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
            Explore our exclusive bridal collection featuring exquisite lehengas, sarees, and accessories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bridalShowcase.map((item) => (
            <div key={item.id} className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl cursor-pointer">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-normal mb-3">{item.title}</h3>
                  <p className="text-gray-200 text-lg mb-5">{item.subtitle}</p>
                  <button className="bg-rose-500 hover:bg-rose-600 px-8 py-3 rounded-full font-thin cursor-pointer transition-all">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banner Cards Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bannerCards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group h-72`}
            >
              <div className="absolute inset-0 flex items-center justify-between p-8">
                {/* Left Content */}
                <div className="z-10 space-y-4">
                  {card.discount && (
                    <span className="inline-block bg-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase shadow-lg">
                      {card.discount}
                    </span>
                  )}
                  <h3 className="text-3xl md:text-4xl font-normal text-gray-800">
                    {card.title}
                  </h3>
                  {card.subtitle && (
                    <p className="text-gray-700">{card.subtitle}</p>
                  )}
                  <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-thin transition-colors shadow-md">
                    {card.buttonText}
                  </button>
                </div>

                {/* Right Image */}
                <div className="relative w-44 h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain rounded-3xl group-hover:scale-110 transition-transform duration-300"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: Bridal Categories Grid */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Shop By Category
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Find What You Love, Faster</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bridalCategories.map((category) => (
            <div key={category.id} className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-normal mb-2">{category.name}</h3>
                  <p className="text-gray-200 text-sm">{category.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections Banner */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {collections.map((collection) => (
            <div key={collection.id} className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                    {collection.discount}
                  </span>
                  <h3 className="text-4xl font-normal mb-3">{collection.title}</h3>
                  <p className="text-gray-200 mb-6 text-xl">{collection.description}</p>
                  <button className="text-white font-thin hover:text-rose-400 transition-colors flex items-center gap-3 text-lg">
                    Explore Now <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-4 bg-gradient-to-b from-gray-50 to-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured Bridal Products
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Handpicked bridal wear, crafted with love and detail</p>
        </div>
        <div className="flex justify-center gap-5 flex-wrap mb-16">
          {bridalProductFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-8 py-4 rounded-full font-medium uppercase text-sm transition-all cursor-pointer duration-300 ${selectedFilter === filter
                ? "bg-rose-500 text-white shadow-xl scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-[450px] bg-gray-50 overflow-hidden">
                {product.badge && (
                  <span className="absolute top-5 left-5 bg-rose-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                    {product.badge}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-5 right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                    -{product.discount}%
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover opbject-top group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-6 h-6" />
                    </button>
                    <button
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${idx < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-rose-500">
                    ₹{product.price}
                  </span>
                  <span className="text-base text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
         <Fragment>
            <div className='flex justify-center pt-20 pb-8'>
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
            </div>
          </Fragment>
      </section>

      {/* Groom all Products */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16  bg-linear-to-b from-gray-50 to-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured Groom Collection
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
            Handpicked groom attire, crafted with elegance and precision
          </p>
        </div>

        <div className="flex justify-center gap-5 flex-wrap mb-16">
          {groomProductFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-8 py-4 rounded-full font-medium uppercase text-sm transition-all cursor-pointer duration-300 ${selectedFilter === filter
                ? "bg-rose-500 text-white shadow-xl scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {filteredGroomProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-[450px] bg-gray-50 overflow-hidden">
                {product.badge && (
                  <span className="absolute top-5 left-5 bg-rose-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                    {product.badge}
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="absolute top-5 right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                    -{product.discount}%
                  </span>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Action Buttons */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <button
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-6 h-6" />
                    </button>
                    <button
                      className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[56px]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-5 h-5 ${idx < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.rating})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-rose-500">
                    ₹{product.price}
                  </span>
                  <span className="text-base text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Fragment>
          <div className='flex justify-center pt-24'>
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
          </div>
        </Fragment>
      </section>

      {/* Additional Features Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 relative overflow-hidden">
        {/* Animated Background Gradient Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Why Choose Us
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">  Experience the perfect blend of quality, service, and authenticity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Gradient Border Card Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>

              {/* Main Card */}
              <div className="relative w-full bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent group-hover:-translate-y-2">
                {/* Icon Container with Gradient Background */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  {/* Gradient Background that appears on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-500 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                  {/* Icon Circle */}
                  <div className="relative bg-linear-to-br from-rose-50 to-orange-50 group-hover:from-white group-hover:to-white rounded-full w-full h-full flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-12 h-12 text-rose-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-normal text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Floating Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12 transform">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="relative mt-16 h-1 w-full max-w-md mx-auto bg-linear-to-r from-transparent via-rose-300 to-transparent rounded-full"></div>
      </section>


      {/* CTA Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 pb-20 ">
        <div className="relative bg-linear-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl group">
          {/* Animated Background Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-300 rounded-full opacity-20 -mr-36 -mt-36 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-300 rounded-full opacity-20 -ml-28 -mb-28 animate-pulse delay-700"></div>

          {/* Floating Sparkle Elements */}
          <div className="absolute top-20 left-20 animate-bounce delay-300">
            <div className="w-3 h-3 bg-rose-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-32 right-32 animate-bounce delay-500">
            <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-1000">
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
          </div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-rose-200/20 via-transparent to-orange-200/20 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

          {/* Content Container */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Limited Time Offer</span>
            </div>

            {/* Heading with Gradient Text */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin mb-6 bg-linear-to-r from-gray-900 via-rose-700 to-orange-700 bg-clip-text text-transparent animate-fade-in-up">
              Discover More Bridal Collections
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Explore our extensive range of bridal lehengas, wedding sarees, and traditional wear
              for every occasion. <span className="font-semibold text-rose-600">Make your special day unforgettable!</span>
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up delay-300">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-1">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Designs</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Customers</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Rating</div>
              </div>
            </div>

            {/* CTA Button with Enhanced Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
              <button className="group/btn relative bg-linear-to-r from-rose-500 via-pink-500 to-orange-500 hover:from-rose-600 hover:via-pink-600 hover:to-orange-600 text-white px-14 py-5 rounded-full font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>

                <span className="relative flex items-center gap-3">
                  Shop Bridal Collection
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>

              {/* Secondary CTA */}
              <button className="group/btn2 relative bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 px-12 py-5 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-rose-300 text-lg">
                <span className="flex items-center gap-3">
                  View Catalog
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn2:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm text-gray-600 animate-fade-in-up delay-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Decorative Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500"></div>
        </div>
      </section>

    </div>
  );
};

export default TraditionalWear;
