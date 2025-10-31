"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Star, Truck, Shield, Headphones, RefreshCw, Award, Package, Sparkles } from "lucide-react";

const KidsOutfits = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Category Cards
  const categories = [
    {
      id: 1,
      name: "Girls",
      description: "Spring Collection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761466206/Girls_outfit_tm0aoz.jpg",
      bgColor: "bg-pink-200",
    },
    {
      id: 2,
      name: "Boys",
      description: "Summer Collection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465706/boys_vzenzk.jpg",
      bgColor: "bg-blue-200",
    },
    {
      id: 3,
      name: "Babies",
      description: "Cute & Cozy",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465704/babies_mffvmu.jpg",
      bgColor: "bg-yellow-400",
    },
  ];

  // Products with categories - MASSIVELY EXPANDED
  const allProducts = [
    // Accessories
    {
      id: 1,
      name: "Kids Jewelry Set - Colorful Accessories",
      category: "Accessories",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465703/Kids_Jewelry_Set_-_Colorful_Accessories-main_rqzls5.jpg",
      colors: ["#FFB6C1", "#87CEEB", "#FFF"],
      thumbnail: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465701/Kids_Jewelry_Set_-_Colorful_Accessories-thumbnail_r6myfi.jpg",
    },
    {
      id: 9,
      name: "Colorful Hair Clips Set",
      category: "Accessories",
      price: 14.99,
      originalPrice: 19.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465700/Colorful_Hair_Clips_Set_mro7so.jpg",
    },
    {
      id: 10,
      name: "Kids Sunglasses Collection",
      category: "Accessories",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465699/Kids_Sunglasses_Collection_zlyppl.jpg",
    },
    {
      id: 15,
      name: "Cartoon Character Backpack",
      category: "Accessories",
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465698/Cartoon_Character_Backpack_h9pzza.jpg",
    },
    {
      id: 16,
      name: "Cute Kids Watch",
      category: "Accessories",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465697/Cute_Kids_Watch_rjfoo6.jpg",
    },
    // Clothes
    {
      id: 2,
      name: "Boy's Casual T-Shirt",
      category: "Clothes",
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465696/Boy_s_Casual_T-Shirt_nuj6jb.jpg",
    },
    {
      id: 3,
      name: "Colorful Kids T-Shirt",
      category: "Clothes",
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.3,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465694/Colorful_Kids_T-Shirt_dnib41.jpg",
    },
    {
      id: 4,
      name: "Girl's Stylish Top",
      category: "Clothes",
      price: 18.99,
      originalPrice: 25.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465694/oy_s_Stylish_Top_ks8q6h.jpg",
    },
    {
      id: 5,
      name: "Boy's Denim Jeans",
      category: "Clothes",
      price: 15.99,
      originalPrice: 22.99,
      rating: 4.4,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465692/Boy_s_Denim_Jeans_npio2u.jpg",
    },
    {
      id: 6,
      name: "Girl's Summer Dress",
      category: "Clothes",
      price: 21.99,
      originalPrice: 29.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465691/Girl_s_Summer_Dress_q2bfp8.jpg",
    },
    {
      id: 7,
      name: "Kids Sneakers Collection",
      category: "Clothes",
      price: 16.99,
      originalPrice: 23.99,
      rating: 4.5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465690/Kids_Sneakers_Collection_jmsvzb.jpg",
    },
    {
      id: 11,
      name: "Girl's Party Dress",
      category: "Clothes",
      price: 34.99,
      originalPrice: 44.99,
      rating: 4.8,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465688/Girl_s_Party_Dress_kh4gpi.jpg",
    },
    {
      id: 12,
      name: "Boy's Hoodie",
      category: "Clothes",
      price: 27.99,
      originalPrice: 37.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465687/Boy_s_Hoodie_cd3pa8.jpg",
    },
    {
      id: 17,
      name: "Girl's Floral Dress",
      category: "Clothes",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.7,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465686/Girl_s_Floral_Dress_n6rg30.jpg",
    },
    {
      id: 18,
      name: "Boy's Sports Outfit",
      category: "Clothes",
      price: 33.99,
      originalPrice: 43.99,
      rating: 4.6,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465685/Boy_s_Sports_Outfit_enlu1n.jpg",
    },
    // New Collection
    {
      id: 8,
      name: "New Summer Outfit",
      category: "New Collection",
      price: 28.99,
      originalPrice: 38.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465684/New_Summer_Outfit_sltbq6.jpg",
    },
    {
      id: 13,
      name: "Trendy Kids Jacket",
      category: "New Collection",
      price: 39.99,
      originalPrice: 54.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465682/Trendy_Kids_Jacket_juodep.jpg",
    },
    {
      id: 14,
      name: "Designer Kids Set",
      category: "New Collection",
      price: 45.99,
      originalPrice: 59.99,
      rating: 5.0,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465681/Designer_Kids_Set_exzp0r.jpg",
    },
    {
      id: 19,
      name: "Premium Kids Collection",
      category: "New Collection",
      price: 52.99,
      originalPrice: 69.99,
      rating: 4.9,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465680/Premium_Kids_Collection_utu9hd.jpg",
    },
  ];

  const categories_filter = ["All", "Accessories", "Clothes", "New Collection"];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  // Features - ENHANCED
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected payments"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated support team"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  // Featured Collections - EXPANDED
  const featuredCollections = [
    {
      id: 1,
      title: "Summer Essentials",
      description: "Light & Breezy",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465679/Summer_Essentials_ylm3vr.jpg",
      discount: "40% OFF"
    },
    {
      id: 2,
      title: "Back to School",
      description: "Smart & Stylish",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465678/Back_to_School_k3yszz.jpg",
      discount: "30% OFF"
    }
  ];

  // NEW: Trending Kids Fashion
  const trendingFashion = [
    {
      id: 1,
      title: "Casual Wear",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465677/Casual_Wear_hdt7v9.jpg",
    },
    {
      id: 2,
      title: "Party Dresses",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465676/Party_Dresses_ucnr0j.jpg",
    },
    {
      id: 3,
      title: "Sports Wear",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465675/Sports_Wear_m1h4n5.jpg",
    },
    {
      id: 4,
      title: "Winter Collection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465674/Winter_Collection_b6ytte.jpg",
    },
  ];

  // NEW: Additional Features
  const additionalFeatures = [
    { icon: Award, title: "Quality Materials", description: "Soft & comfortable fabrics" },
    { icon: Package, title: "Gift Packaging", description: "Free gift wrapping available" },
    { icon: Sparkles, title: "Trendy Designs", description: "Latest fashion updates" },
  ];

  // NEW: Age Groups
  const ageGroups = [
    {
      id: 1,
      title: "Newborn (0-12 months)",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465673/Newborn_0-12_months_gtbpze.jpg",
      count: "150+ Items"
    },
    {
      id: 2,
      title: "Toddler (1-3 years)",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465674/Toddler_1-3_years_kmgjek.jpg",
      count: "200+ Items"
    },
    {
      id: 3,
      title: "Kids (4-8 years)",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465673/Kids_4-8_years_i1mnl5.jpg",
      count: "300+ Items"
    },
    {
      id: 4,
      title: "Teens (9-14 years)",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465673/Teens_9-14_years_t3z8lv.jpg",
      count: "250+ Items"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] md:h-[650px] lg:h-[700px] bg-linear-to-r from-rose-50 to-orange-50 overflow-hidden mb-12 md:mb-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
            {/* Left Content */}
            <div className="z-10 space-y-8 py-10">
              <div className="inline-block">
                <span className="bg-rose-500 text-white px-6 py-3 rounded-full text-sm font-thin shadow-lg">
                  70% SALE OFF
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-normal capitalize text-gray-800 leading-tight">
                Summer vibes
                <br />
                <span className="text-rose-500 capitalize">holiday mode on</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed">
                Explore the perfect outfit for every occasion with style and
                comfort in mind. Shop now and save big!
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-thin transition-all duration-300 shadow-xl hover:shadow-2xl">
                Shop Now
              </button>
            </div>

            <div className="relative flex justify-center py-8">
              <div className="relative w-[400px] h-[500px]">
                <Image
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761477125/kids_outfit_ikqvcz.jpg"
                  alt="Summer vibes kids fashion"
                  fill
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  priority
                />
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose-200 rounded-full opacity-50 animate-bounce"></div>
                <div className="absolute bottom-6 -right-6 w-14 h-14 bg-yellow-200 rounded-full opacity-50 animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-8 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-rose-400/20 via-pink-400/20 to-orange-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 -z-10"></div>

                {/* Card Container */}
                <div className="relative w-full bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-rose-200 group-hover:-translate-y-3">
                  {/* Icon Container */}
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-rose-300 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700 ease-out"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-orange-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 delay-100 ease-out"></div>

                    {/* Icon Background */}
                    <div className="relative bg-linear-to-br from-rose-100 via-pink-100 to-orange-100 group-hover:from-rose-200 group-hover:via-pink-200 group-hover:to-orange-200 rounded-full w-full h-full flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <feature.icon className="w-10 h-10 text-rose-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110" />
                    </div>

                    {/* Floating Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-rotate-12">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-24 h-1 bg-linear-to-r from-rose-500 via-pink-500 to-orange-500 rounded-full transition-all duration-500"></div>

                  {/* Corner Decorations */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-ping"></div>
                </div>

                {/* Connecting Line (visible on larger screens) */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-5 w-10 h-0.5 bg-linear-to-r from-rose-300 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* NEW: Shop By Age Group */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Shop By Age
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">  Find the perfect fit for your little ones at every stage</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ageGroups.map((group) => (
              <div key={group.id} className="group relative h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-8 left-6 right-6 text-white">
                    <h3 className="text-2xl font-normal mb-2">{group.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{group.count}</p>
                    <button className="bg-rose-500 hover:bg-rose-600 px-6 py-2 rounded-full font-thin transition-all text-sm">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Shop By Category
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Tiny Trends for Every Little Star</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${category.bgColor} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative h-80`}
              >
                <div className="absolute inset-0 flex items-center justify-between p-8">
                  <div className="z-10 space-y-4">
                    <h3 className="text-4xl font-normal text-gray-800 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-gray-700 text-xl mb-5">
                      {category.description}
                    </p>
                    <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-thin hover:bg-gray-100 transition-colors shadow-md">
                      See More
                    </button>
                  </div>
                  <div className="relative w-44 h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      sizes="176px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Trending Kids Fashion Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Trending Kids Fashion
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Adorable Looks, Fresh Trends!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingFashion.map((item) => (
              <div key={item.id} className="group relative h-96 rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-normal">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections Banner */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="relative h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-thin mb-4 inline-block">
                    {collection.discount}
                  </span>
                  <h3 className="text-4xl font-normal mb-3">{collection.title}</h3>
                  <p className="text-xl mb-6">{collection.description}</p>
                  <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-thin hover:bg-gray-100 cursor-pointer transition-colors">
                    Shop Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Collections Section */}
      <section className="py-20 md:py-24 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                New Collections
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Discover our handpicked selection of the latest kids fashion trends</p>
            </div>
            <div className="flex justify-center gap-5 flex-wrap">
              {categories_filter.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-4 rounded-full font-thin transition-all duration-300 ${selectedCategory === category
                    ? "bg-rose-500 text-white shadow-xl scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Wishlist & Cart Icons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-6 h-6 text-rose-500" />
                    </button>
                    <button
                      className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-6 h-6 text-rose-500" />
                    </button>
                  </div>

                  {/* Thumbnail Preview (for first product) */}
                  {product.thumbnail && (
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {[1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className="w-14 h-14 bg-white rounded-lg border-2 border-gray-300 overflow-hidden cursor-pointer hover:border-rose-500 transition-colors"
                        >
                          <Image
                            src={product.thumbnail}
                            alt={`Thumbnail ${idx}`}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-base font-normal text-gray-800 mb-3 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
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
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl font-bold text-rose-500">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <span className="text-base text-gray-400 line-through">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Color Options */}
                  {product.colors && (
                    <div className="flex gap-2">
                      {product.colors.map((color, idx) => (
                        <button
                          key={idx}
                          className="w-7 h-7 rounded-full border-2 border-gray-300 hover:border-rose-500 transition-colors"
                          style={{ backgroundColor: color }}
                          aria-label={`Select color ${color}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="relative py-16 md:py-20 bg-linear-to-r from-rose-50 to-orange-50 overflow-hidden">
        {/* Animated Background Blobs - Organic Shapes Trend */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-rose-300/30 to-pink-300/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-linear-to-br from-orange-300/30 to-yellow-300/30 rounded-[30%_70%_70%_30%/30%_60%_40%_70%] filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-linear-to-br from-pink-300/20 to-orange-300/20 rounded-[70%_30%_50%_50%/40%_50%_60%_50%] filter blur-3xl animate-blob animation-delay-4000"></div>

        {/* Decorative Elements with Motion */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-rose-400 rounded-full opacity-40 animate-float"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-float animation-delay-2000"></div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 150}ms`,
                  opacity: 0
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-linear-to-br from-rose-400/0 via-pink-400/0 to-orange-400/0 group-hover:from-rose-400/20 group-hover:via-pink-400/20 group-hover:to-orange-400/20 rounded-3xl blur-2xl transition-all duration-700 -z-10"></div>

                {/* Main Card with Glass Morphism */}
                <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-rose-200/50 group-hover:-translate-y-4 overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

                  {/* Decorative Corner linear */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-rose-200/30 to-orange-200/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Icon Container with Advanced Effects */}
                  <div className="relative mx-auto w-24 h-24 mb-6">
                    {/* Pulsing Rings */}
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-rose-400 to-orange-400 opacity-20 animate-ping-slow"></div>
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-rose-400 to-orange-400 opacity-10 animate-ping-slow animation-delay-1000"></div>

                    {/* Main Icon Background */}
                    <div className="relative bg-linear-to-br from-white via-rose-50 to-orange-50 rounded-full w-full h-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border border-rose-100/50">
                      <feature.icon className="w-12 h-12 text-rose-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-linear-to-br from-rose-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-12">
                      <span className="relative z-10">{index + 1}</span>
                    </div>
                  </div>

                  {/* Content with Improved Typography */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent with Animation */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-32 h-1.5 bg-linear-to-r from-rose-500 via-pink-500 to-orange-500 rounded-t-full transition-all duration-500"></div>

                  {/* Sparkle Effects */}
                  <div className="absolute top-6 right-6 w-2 h-2 bg-rose-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-twinkle"></div>
                  <div className="absolute bottom-8 left-6 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-twinkle"></div>
                </div>

                {/* Connecting Line (for larger screens) */}
                {index < additionalFeatures.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-6 w-12 h-0.5 bg-linear-to-r from-rose-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute right-0 w-2 h-2 bg-rose-400 rounded-full -translate-y-[3px] animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* CSS for Custom Animations */}
        <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes twinkle {
      0%, 100% { opacity: 0; transform: scale(0); }
      50% { opacity: 1; transform: scale(1); }
    }
    @keyframes ping-slow {
      75%, 100% { transform: scale(2); opacity: 0; }
    }
    .animate-blob { animation: blob 7s infinite; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
    .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
  `}</style>
      </section>



      {/* CTA Section */}
      <section className="py-12 md:py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16">
          <div className="relative bg-linear-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-thin text-gray-900 mb-6">
                Explore More Collections
              </h2>
              <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Discover our extensive range of kids fashion for every age and occasion
              </p>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-14 py-5 rounded-full font-thin uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg">
                Shop All Products
              </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-rose-300 rounded-full opacity-20 -mr-36 -mt-36"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-300 rounded-full opacity-20 -ml-28 -mb-28"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsOutfits;