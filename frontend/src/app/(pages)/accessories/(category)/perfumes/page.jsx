"use client";

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Heart, Star, Loader2 } from "lucide-react";

const CATEGORY_SLUG = "perfumes";

const Perfumes = () => {
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch real products from database
  useEffect(() => {
    fetchRealProducts();
  }, []);

  const fetchRealProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/products?category=perfumes"
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

  // Split products: First 4 for "Signature Scents", Next 6 for "The Essence of Elegance", Next 3 for "Featured Fragrances"
  const signatureScents = realProducts.slice(0, 4);
  const essenceProducts = realProducts.slice(4, 10);
  const featuredFragrances = realProducts.slice(10, 13);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-slate-50 via-purple-50 to-yellow-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center pt-16">
            {/* Product Info - Left Side */}
            <div className="space-y-8 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2 text-sm font-medium text-purple-700 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                EXCLUSIVE ONLINE DEAL
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-linear-to-r from-purple-600 via-purple-700 to-yellow-600 bg-clip-text text-transparent">
                    Up To 75%
                  </span>
                  <br />
                  <span className="text-slate-800 font-light">
                    Off Premium
                  </span>
                  <br />
                  <span className="text-slate-600 font-normal text-4xl md:text-6xl">
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>perfumes</span>
                  </span>
                </h1>
              </div>

              {/* Offer Details */}
              <div className="space-y-4">
                <div className="text-xl md:text-2xl text-slate-600">
                  Free shipping on orders over{' '}
                  <span className="font-light text-yellow-600 text-2xl md:text-3xl">
                    ₹990
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    30-day returns
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Handcrafted quality
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Premium materials
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/accessories/all-products?category=perfumes">
                  <button className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white px-12 md:px-50 py-4 rounded-2xl font-normal cursor-pointer text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    SHOP NOW
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Collage - Right Side */}
            <div className="relative lg:order-2">
              <div className="relative">
                {/* Main Large Image Container */}
                <div className="relative h-[600px] w-full max-w-lg mx-auto">
                  {/* CSS Grid Layout for Image Collage */}
                  <div className="grid grid-cols-6 grid-rows-6 gap-3 h-full w-full">
                    {/* Large Featured Image - Top */}
                    <div className="col-span-6 row-span-3 relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-linear-to-br from-purple-100 to-pink-50 opacity-20"></div>
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image1_khrwa5.jpg"
                        alt="Premium Hair Accessories Collection"
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay Text */}
                      <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-1">Premium Collection</h3>
                          <p className="text-sm opacity-90">Handcrafted with love</p>
                        </div>
                      </div>
                      {/* Sale Badge */}
                      <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        75% OFF
                      </div>
                    </div>

                    {/* Bottom Left Image */}
                    <div className="col-span-3 row-span-3 relative rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799692/image22_qhbrqx.jpg"
                        alt="Gold Leaf Hair Accessories"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="text-sm font-medium">Gold Collection</p>
                      </div>
                    </div>

                    {/* Bottom Right Image */}
                    <div className="col-span-3 row-span-3 relative rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799680/image2_kzmeku.jpg"
                        alt="Floral Hair Accessories"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <p className="text-sm font-medium">Floral Design</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-400 rounded-full opacity-20"></div>

                  {/* Small Floating Badges */}
                  <div className="absolute top-8 -left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="text-xs font-semibold text-purple-700">New Arrival</div>
                  </div>

                  <div className="absolute bottom-16 -right-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="text-xs font-semibold text-yellow-700">Best Seller</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Scents Section - Dynamic */}
      <section className="pt-30 px-4 bg-linear-to-br from-slate-50 to-purple-50">
        <div className="text-center mb-16 mt-12">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Signature <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Scents</span>
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Where Elegance Meets Essence</p>
        </div>

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
        ) : signatureScents.length > 0 ? (
          <>
            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {signatureScents.map((product) => {
                const images = Array.isArray(product.images)
                  ? product.images
                  : JSON.parse(product.images || "[]");
                const mainImage = images[0] || "/placeholder.jpg";

                return (
                  <div
                    key={product.id}
                    className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="flex h-64 md:h-80">
                      {/* Image Section - Left Side */}
                      <div className="relative w-1/2 overflow-hidden">
                        {/* Discount Badge */}
                        {product.discount && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-normal px-3 py-1.5 rounded-full z-10 shadow-lg">
                            {product.discount}%
                          </div>
                        )}

                        {/* Featured Badge */}
                        {product.featured && (
                          <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                            Featured
                          </div>
                        )}

                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />

                        {/* Hover Actions */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex gap-3">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleFavorite(product.id);
                              }}
                              className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                            >
                              <Heart
                                size={20}
                                className={
                                  favorites.includes(product.id)
                                    ? "text-rose-500 fill-rose-500"
                                    : "text-slate-700"
                                }
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Content Section - Right Side */}
                      <div className="w-1/2 p-8 flex flex-col justify-between">
                        {/* Top Section */}
                        <div className="space-y-4">
                          {/* Rating */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={
                                    i < (product.rating || 4)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-slate-300"
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-sm text-slate-500 font-normal">
                              ({product.reviews || 0} reviews)
                            </span>
                          </div>

                          {/* Product Name */}
                          <h3 className="text-2xl font-medium text-slate-800 leading-tight">
                            {product.name}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                            {product.description || "Premium quality perfume"}
                          </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="space-y-4">
                          {/* Price */}
                          <div className="flex items-center gap-3">
                            <span className="text-3xl font-medium text-slate-800">
                              {formatINR(product.price)}
                            </span>
                            {product.mrp && product.mrp > product.price && (
                              <span className="text-lg text-slate-400 line-through">
                                {formatINR(product.mrp)}
                              </span>
                            )}
                          </div>

                          {/* Action Button */}
                          <Link href={`/accessories/all-products/${product.id}`}>
                            <button className="w-full bg-linear-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-normal text-lg shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                              Buy Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No products available</p>
          </div>
        )}

        {/* Load More Button */}
        <Fragment>
          <div className='flex justify-center pt-22 pb-8'>
            <Link href={'/accessories/all-products?category=perfumes'}>
              <button
                className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
              >
                <div className="absolute inset-0 transform -translate-x-full cursor-pointer group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                  View Trending Products
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
      </section>

      {/* The Essence of Elegance Section - Dynamic Bento Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-purple-50/30 to-yellow-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              The <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Essence</span> of <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Elegance</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Let your scent tell a story of passion and allure
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : essenceProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-auto-rows-[minmax(400px,auto)]">
              {essenceProducts.map((product, index) => {
                const images = Array.isArray(product.images)
                  ? product.images
                  : JSON.parse(product.images || "[]");
                const mainImage = images[0] || "/placeholder.jpg";
                const isLarge = product.featured;
                const cardClass = isLarge ? "md:col-span-2 md:row-span-2" : "";

                return (
                  <div
                    key={product.id}
                    className={`group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] h-full ${cardClass}`}
                  >
                    <div className="h-full flex flex-col">
                      {/* Image Section */}
                      <div className={`relative overflow-hidden ${isLarge ? 'h-80' : 'h-48'} flex-shrink-0`}>
                        {/* Featured Badge */}
                        {product.featured && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-normal px-3 py-1.5 rounded-full z-10 shadow-lg animate-pulse">
                            Featured
                          </div>
                        )}

                        {/* Discount Badge */}
                        {product.discount && (
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm text-white text-xs font-normal px-3 py-1.5 rounded-full z-10 shadow-lg">
                            {product.discount}% OFF
                          </div>
                        )}

                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>

                      {/* Content Section */}
                      <div className={`p-6 flex-1 flex flex-col ${isLarge ? 'p-8' : ''}`}>
                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={20}
                                className={
                                  i < (product.rating || 4)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-slate-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-sm text-slate-500 font-medium">
                            ({product.reviews || 0} reviews)
                          </span>
                        </div>

                        {/* Product Name */}
                        <h3 className={`font-medium text-slate-800 mb-3 leading-tight ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                          {product.name}
                        </h3>

                        {/* Description */}
                        <p className={`text-slate-600 mb-6 leading-relaxed flex-1 ${isLarge ? 'text-base' : 'text-sm'} line-clamp-2`}>
                          {product.description || "Premium quality perfume"}
                        </p>

                        {/* Price and Action */}
                        <div className="flex items-center justify-between mt-auto gap-4">
                          <div className="flex items-center gap-2">
                            <span className={`font-normal text-slate-800 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                              {formatINR(product.price)}
                            </span>
                            {product.mrp && product.mrp > product.price && (
                              <span className={`text-slate-400 line-through ${isLarge ? 'text-lg' : 'text-sm'}`}>
                                {formatINR(product.mrp)}
                              </span>
                            )}
                          </div>
                          <Link href={`/accessories/all-products/${product.id}`}>
                            <button className={`bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-medium cursor-pointer shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 flex-shrink-0 ${isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-sm'}`}>
                              Buy Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}

          {/* Bottom CTA Section */}
          <div className='flex justify-center pt-22'>
            <Link href={'/accessories/all-products?category=perfumes'}>
              <button
                className="group relative px-10 py-4 cursor-pointer bg-neutral-900 text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Our Collection
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
        </div>
      </section>

      {/* Luxury Fragrance Collection Section (Static Promo Banner) */}
      <section className="relative px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Luxury Fragrance <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Collection</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Premium perfumes crafted for modern sophistication</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-gray-800 lg:order-1">
              <div className="inline-flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-full px-6 py-3 text-sm font-medium shadow-lg">
                <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse shadow-lg shadow-rose-400/30"></div>
                <span className="uppercase tracking-wider font-bold text-gray-700">Celebrate Your Scent</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-gray-800">Save</span>{' '}
                  <span className="bg-linear-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent font-black text-6xl md:text-8xl">
                    25%
                  </span>
                  <br />
                  <span className="text-gray-700 font-light text-3xl md:text-4xl">
                    On All Premium
                  </span>
                  <br />
                  <span className="bg-linear-to-r from-gray-600 via-gray-700 to-gray-600 bg-clip-text text-transparent font-light text-3xl md:text-4xl">
                    Collections
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center border border-green-200">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Free worldwide shipping</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Limited time offer</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center border border-purple-200">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Authentic products</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">30-day returns</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/accessories/all-products?category=perfumes">
                  <button className="group relative bg-linear-to-r from-rose-500 via-rose-400 to-rose-500 text-white px-10 md:px-60 cursor-pointer py-5 rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Trending Collection
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-rose-500 to-rose-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>
            </div>

            {/* Product Showcase - Right Side */}
            <div className="relative lg:order-2">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-linear-to-br from-rose-100 to-rose-200 rounded-full filter blur-2xl opacity-60"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-linear-to-br from-gray-100 to-gray-200 rounded-full filter blur-2xl opacity-60"></div>

                <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image7_fprd9m.jpg",
                      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image8_x1d4sm.jpg",
                      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image9_a8q6qk.jpg",
                      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image10_rrseim.jpg",
                      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799682/image11_h0cbpe.jpg",
                      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799682/image12_zuyvbr.jpg"
                    ].map((image, i) => (
                      <div
                        key={i}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100"
                      >
                        <div className="aspect-[3/4] relative overflow-hidden">
                          <img
                            src={image}
                            alt={`Premium Perfume ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />

                          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <button className="w-full bg-white text-gray-800 py-2 px-3 rounded-xl text-xs font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
                              Quick View
                            </button>
                          </div>

                          {i < 3 && (
                            <div className="absolute top-2 right-2 bg-linear-to-r from-rose-500 to-rose-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                              25% OFF
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-gray-800 font-medium text-lg md:text-xl mb-2">Premium Collection 2025</div>
                    <div className="text-gray-600 text-sm">Featuring 50+ exclusive fragrances</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fragrances Section - Dynamic */}
      <section className="relative py-24 px-4 bg-linear-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-pink-200/30 to-rose-300/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-br from-rose-200/30 to-pink-300/30 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Featured <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Fragrances</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Experience rose-inspired elegance with a touch of romance</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : featuredFragrances.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {featuredFragrances.map((product) => {
                const images = Array.isArray(product.images)
                  ? product.images
                  : JSON.parse(product.images || "[]");
                const mainImage = images[0] || "/placeholder.jpg";

                return (
                  <div
                    key={product.id}
                    className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="relative">
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

                        {product.discount && (
                          <div className="absolute top-4 left-4 bg-linear-to-r from-rose-500 to-pink-500 text-white text-xs font-normal px-3 py-1.5 rounded-full shadow-lg">
                            {product.discount}% OFF
                          </div>
                        )}

                        {product.featured && (
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-rose-600 text-xs font-normal px-3 py-1.5 rounded-full shadow-lg">
                            Bestseller
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < (product.rating || 4)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-slate-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-sm text-slate-500">({product.reviews || 0})</span>
                        </div>

                        <h3 className="text-xl font-medium text-slate-800 mb-3 leading-tight">
                          {product.name}
                        </h3>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                              {formatINR(product.price)}
                            </span>
                            {product.mrp && product.mrp > product.price && (
                              <span className="text-lg text-slate-400 line-through">
                                {formatINR(product.mrp)}
                              </span>
                            )}
                          </div>
                        </div>

                        <Link href={`/accessories/all-products/${product.id}`}>
                          <button className="w-full bg-linear-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-medium cursor-pointer shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02]">
                            Buy Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className='flex justify-center pt-22'>
          <Link href={'/accessories/all-products?category=perfumes'}>
            <button
              className="group relative px-10 py-4 cursor-pointer bg-neutral-900 text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Our Featured Collection
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
      </section>
    </div>
  );
};

export default Perfumes;
