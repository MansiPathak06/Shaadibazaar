"use client";

import React, { useState } from "react";

import { Star, ShoppingBag, Heart, Sparkles, Crown, Flower2 } from "lucide-react";
import { Fragment } from "react";




const HairAccessoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories Data
  const categories = [
    { id: "all", name: "All Accessories", icon: Sparkles },
    { id: "tiaras", name: "Tiaras & Crowns", icon: Crown },
    { id: "combs", name: "Hair Combs", icon: Sparkles },
    { id: "pins", name: "Hair Pins", icon: Sparkles },
    { id: "vines", name: "Hair Vines", icon: Flower2 },
    { id: "headbands", name: "Headbands", icon: Crown },
  ];

  // Products Data
  const products = [
    {
      id: 1,
      name: "Pearl Bridal Tiara",
      category: "tiaras",
      price: "₹2,499",
      originalPrice: "₹4,999",
      rating: 4.8,
      reviews: 156,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307706/tiara-1_xced8a.jpg",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Crystal Hair Vine",
      category: "vines",
      price: "₹1,799",
      originalPrice: "₹3,499",
      rating: 4.9,
      reviews: 203,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307719/vine-1_e18gc2.jpg",
      badge: "Trending",
    },
    {
      id: 3,
      name: "Floral Hair Comb",
      category: "combs",
      price: "₹1,299",
      originalPrice: "₹2,599",
      rating: 4.7,
      reviews: 89,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307740/comb-1_z25hhd.jpg",
      badge: null,
    },
    {
      id: 4,
      name: "Gold Hair Pins Set",
      category: "pins",
      price: "₹899",
      originalPrice: "₹1,799",
      rating: 4.6,
      reviews: 124,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307764/pins-1_ysao0l.jpg",
      badge: null,
    },
    {
      id: 5,
      name: "Rose Gold Crown",
      category: "tiaras",
      price: "₹3,299",
      originalPrice: "₹5,999",
      rating: 4.9,
      reviews: 178,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307774/crown-1_idfotx.jpg",
      badge: "Premium",
    },
    {
      id: 6,
      name: "Vintage Headband",
      category: "headbands",
      price: "₹1,599",
      originalPrice: "₹2,999",
      rating: 4.5,
      reviews: 95,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307890/headband-1_j67ynt.jpg",
      badge: null,
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>


      <div className="w-full bg-white">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                  <Crown className="w-5 h-5 text-rose-600" />
                  <span className="text-sm font-medium text-rose-600 uppercase tracking-wide">
                    Bridal Collection 2025
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                  Exquisite Hair
                  <span className="block text-rose-600 mt-2">
                    Accessories
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Discover our stunning collection of bridal hair accessories. From elegant tiaras to delicate hair vines, find the perfect piece to complete your wedding look.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-8 py-4 bg-rose-600 text-white rounded-lg font-normal cursor-pointer hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Shop Now
                  </button>
                  <button className="px-8 py-4 bg-white text-rose-600 border-2 border-rose-600 rounded-lg font-normal cursor-pointer hover:bg-rose-50 transition-all duration-300">
                    View Lookbook
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-normal text-rose-600 mb-1">500+</div>
                    <div className="text-sm text-gray-600">Designs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-normal text-rose-600 mb-1">4.8★</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-normal text-rose-600 mb-1">10K+</div>
                    <div className="text-sm text-gray-600">Happy Brides</div>
                  </div>
                </div>
              </div>

              {/* Right Image Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Main Large Image */}
                  <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl group">
                    <div className="aspect-[16/10]">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307951/hero-main_dwvxjr.jpg"
                        alt="Bridal Hair Accessories"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-rose-900/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-medium mb-1">Premium Collection</h3>
                        <p className="text-rose-100">Handcrafted with love</p>
                      </div>
                    </div>
                  </div>

                  {/* Small Images */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <div className="aspect-square">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307953/hero-2_mavcfr.jpg"
                        alt="Tiaras"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      // onError={(e) => {
                      //   e.target.src = "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400";
                      // }}
                      />
                      <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-rose-900/40 transition-colors duration-300"></div>
                      <div className="absolute bottom-3 left-3 text-white font-medium text-sm">
                        Tiaras
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <div className="aspect-square">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307951/hero-3_yolhio.jpg"
                        alt="Hair Vines"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      // onError={(e) => {
                      //   e.target.src = "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400";
                      // }}
                      />
                      <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-rose-900/40 transition-colors duration-300"></div>
                      <div className="absolute bottom-3 left-3 text-white font-medium text-sm">
                        Hair Vines
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter Section */}


        {/* Products Grid Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
          <div className="max-w-7xl mx-auto">



            <div className="text-center mt-10 ">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                featured collection
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Handpicked accessories to complete your bridal look</p>
            </div>

            <section className="bg-white pt-8 pb-16 border-b border-gray-200 sticky top-0 z-40 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-normal cursor-pointer  transition-all duration-300 shadow-sm hover:shadow-md ${activeCategory === category.id
                          ? "bg-rose-600 text-white"
                          : "bg-rose-50 text-rose-700 hover:bg-rose-100"
                          }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-rose-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    // onError={(e) => {
                    //   e.target.src = "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500";
                    // }}
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-rose-600 text-white text-xs font-extralight rounded-full">
                        {product.badge}
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-rose-600 hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      <Heart className="w-5 h-5" />
                    </button>

                    {/* Quick Add Button */}
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white text-rose-600 font-normal rounded-lg shadow-lg opacity-0 group-hover:opacity-100 hover:bg-rose-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-medium text-gray-700">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-normal text-rose-600">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                        50% OFF
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Fragment>
            <div className='flex justify-center pt-16 pb-6'>
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

        {/* Why Choose Us Section */}
        <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                why brides love us
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Trusted by thousands of happy brides for their special day</p>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

              <div className="group relative overflow-hidden bg-white border border-neutral-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 bg-neutral-900 text-white flex items-center justify-center">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 tracking-wide uppercase">
                    Premium Quality
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Handcrafted with finest materials and attention to detail
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white border border-neutral-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 bg-neutral-900 text-white flex items-center justify-center">
                    <Crown className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 tracking-wide uppercase">
                    Unique Designs
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Exclusive collection you won't find anywhere else
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white border border-neutral-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 bg-neutral-900 text-white flex items-center justify-center">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 tracking-wide uppercase">
                    Made with Love
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Each piece crafted with care for your perfect day
                  </p>
                </div>
              </div>

              <div className="group relative overflow-hidden bg-white border border-neutral-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 bg-neutral-900 text-white flex items-center justify-center">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-light text-neutral-900 tracking-wide uppercase">
                    Fast Delivery
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light">
                    Quick shipping to ensure you get it on time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HairAccessoriesPage;
