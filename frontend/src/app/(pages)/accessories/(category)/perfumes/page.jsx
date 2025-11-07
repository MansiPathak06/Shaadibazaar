'use client'

import React from 'react';
import { Fragment } from 'react';
const HeroSection = () => {
  return (
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
              <button className="bg-linear-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-normal cursor-pointer text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                SHOP NOW
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-normal cursor-pointer text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
                View Catalog
              </button>
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

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};




const ProductCard = () => {
  const products = [
    {
      id: 1,
      name: "Floral Essence Premium",
      price: 89,
      originalPrice: 120,
      rating: 5,
      reviews: 24,
      description: "A delicate blend of jasmine and rose petals",
      discount: "25% OFF",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799680/image3_h971gy.jpg",
      category: "Floral"
    },
    {
      id: 2,
      name: "Black Opium",
      price: 95,
      rating: 4,
      reviews: 18,
      description: "Rich amber and vanilla notes with gold essence",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799680/image4_iyvwib.jpg",
      category: "Luxury"
    },
    {
      id: 3,
      name: "Ruby Red Elegance",
      price: 75,
      rating: 5,
      reviews: 32,
      description: "Bold and passionate with red berry undertones",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799680/image5_m3zp5u.jpg",
      category: "Bold"
    },
    {
      id: 4,
      name: "Amber Sunset",
      price: 110,
      rating: 4,
      reviews: 15,
      description: "Warm amber with hints of citrus and musk",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image6_eiavmr.jpg",
      category: "Warm"
    }
  ];

  return (
    <section className="pt-30 px-4 bg-linear-to-br from-slate-50 to-purple-50">



      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
          Signature <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Scents</span>
        </h2>
        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Where Elegance Meets Essence</p>
      </div>




      <div className="max-w-7xl mx-auto">


        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex h-64 md:h-80">
                {/* Image Section - Left Side */}
                <div className="relative w-1/2 overflow-hidden">
                  {/* Discount Badge */}
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-gradie-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                      {product.discount}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                    {product.category}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300">
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
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
                          <svg
                            key={i}
                            className={`w-4 h-4 ₹{i < product.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-slate-500 font-medium">({product.reviews} reviews)</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl font-medium text-slate-800 leading-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-4">
                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-medium text-slate-800">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-slate-400 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full  bg-linear-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-normal text-lg shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <Fragment>
          <div className='flex justify-center pt-22 pb-8'>
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
      </div>
    </section>
  );
};

const PromoBanner = () => {
  const perfumeImages = [
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image7_fprd9m.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image8_x1d4sm.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image9_a8q6qk.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799681/image10_rrseim.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799682/image11_h0cbpe.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799682/image12_zuyvbr.jpg"
  ];

  return (
    <section className="relative px-4 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="max-w-7xl mx-auto relative py-16">
        {/* Main Heading */}


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Luxury Fragrance <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Collection</span>
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Premium perfumes crafted for modern sophistication</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-gray-800 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-full px-6 py-3 text-sm font-medium shadow-lg">
              <div className="w-3 h-3 bg-rose-400 rounded-full animate-pulse shadow-lg shadow-rose-400/30"></div>
              <span className="uppercase tracking-wider font-bold text-gray-700">Celebrate Your Scent</span>
            </div>

            {/* Main Heading */}
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

            {/* Features */}
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative bg-linear-to-r from-rose-500 via-rose-400 to-rose-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  SHOP NOW
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-rose-600 via-rose-500 to-rose-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105">
                View Collection
              </button>
            </div>

          </div>

          {/* Product Showcase - Right Side */}
          <div className="relative lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-linear-to-br from-rose-100 to-rose-200 rounded-full filter blur-2xl opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-linear-to-br from-gray-100 to-gray-200 rounded-full filter blur-2xl opacity-60"></div>

              {/* Product Grid */}
              <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-3 gap-6">
                  {perfumeImages.map((image, i) => (
                    <div
                      key={i}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100"
                    >
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={image}
                          alt={`Premium Perfume ₹{i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />

                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                        {/* Quick Action Button */}
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <button className="w-full bg-white text-gray-800 py-2 px-3 rounded-xl text-xs font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg">
                            Quick View
                          </button>
                        </div>

                        {/* Discount Badge */}
                        {i < 3 && (
                          <div className="absolute top-2 right-2 bg-linear-to-r from-rose-500 to-rose-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                            25% OFF
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collection Info */}
                <div className="mt-6 text-center">
                  <div className="text-gray-800 font-semibold text-lg mb-2">Premium Collection 2025</div>
                  <div className="text-gray-600 text-sm">Featuring 50+ exclusive fragrances</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


const SpecialOffers = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Rose Garden Elegance",
      originalPrice: 149,
      price: 99,
      discount: "33% OFF",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799685/image13_isgrrg.jpg",
      badge: "Bestseller",
      rating: 5,
      reviews: 127
    },
    {
      id: 2,
      name: "Pink Blossom Sunset",
      originalPrice: 99,
      price: 75,
      discount: "24% OFF",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799686/image14_h24qvw.jpg",
      badge: "Limited Edition",
      rating: 4,
      reviews: 89
    },
    {
      id: 3,
      name: "Midnight Rose Passion",
      originalPrice: 169,
      price: 120,
      discount: "29% OFF",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799687/image15_lqyjl0.jpg",
      badge: "New Arrival",
      rating: 5,
      reviews: 203
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-linear-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden">
      {/* Background Elements */}

      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-pink-200/30 to-rose-300/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-br from-rose-200/30 to-pink-300/30 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}


        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Fragrances</span>
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Experience rose-inspired elegance with a touch of romance</p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <div className="relative">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* linear Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 bg-linear-to-r from-rose-500 to-pink-500 text-white text-xs font-normal px-3 py-1.5 rounded-full shadow-lg">
                    {product.discount}
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-rose-600 text-xs font-normal px-3 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                        <svg className="w-5 h-5 text-slate-700 group-hover/btn:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                        <svg className="w-5 h-5 text-slate-700 group-hover/btn:text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 {i < product.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-xl font-medium text-slate-800 mb-3 leading-tight">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold bg-linear-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                        ₹{product.price}
                      </span>
                      <span className="text-lg text-slate-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-linear-to-r from-rose-500 to-pink-500 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deal Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Big Deal Card */}
          <div className="relative bg-white border border-gray-200 text-gray-800 p-10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-linear-to-br from-rose-50 to-pink-50 opacity-50"></div>

            {/* Floating Rose Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-rose-100 border border-rose-200 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-rose-100 border border-rose-200 rounded-full px-4 py-2 text-sm font-normal text-rose-700">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
                LIMITED TIME OFFER
              </div>

              <h3 className="text-3xl md:text-4xl font-medium leading-tight text-gray-800">
                Rose Collection
                <br />
                <span className="bg-linear-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                  50% OFF
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Save up to 50% on all rose-inspired fragrances. Limited stock available.
              </p>

              <button className="group bg-linear-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-rose-700 transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="flex items-center gap-2">
                  SHOP ROSES
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Best Collection Card */}
          <div className="relative bg-white border border-gray-200 text-gray-800 p-10 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-linear-to-br from-pink-50 to-rose-50 opacity-50"></div>

            {/* Floating Sparkle Icon */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-pink-100 border border-pink-200 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 text-sm font-medium text-pink-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                PREMIUM COLLECTION
              </div>

              <h3 className="text-3xl md:text-4xl font-medium leading-tight text-gray-800">
                Pink Paradise
                <br />
                <span className="bg-linear-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  Buy 2 Get 1 Free
                </span>
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Get 2 premium pink fragrances and receive the 3rd one absolutely free this month.
              </p>

              <button className="group bg-linear-to-r from-yellow-400 to-orange-400 text-gray-800 px-8 py-4 rounded-2xl font-medium text-lg shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 cursor-pointer">
                <span className="flex items-center gap-2">
                  SHOP PINK
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Floral Essence Premium",
      price: 89,
      originalPrice: 120,
      rating: 5,
      reviews: 24,
      description: "Delicate jasmine petals with morning dew essence",
      category: "Bestseller",
      badge: "Limited Edition",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799687/image16_hipydn.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Golden Luxury Scent",
      price: 95,
      rating: 4,
      reviews: 18,
      description: "Rich amber notes with 24k gold infusion",
      category: "Luxury",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799688/image17_wtyi2k.jpg"
    },
    {
      id: 3,
      name: "Ruby Red Elegance",
      price: 75,
      rating: 5,
      reviews: 32,
      description: "Bold red berry fusion with velvet undertones",
      category: "Popular",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799688/image18_qehnrg.jpg"
    },
    {
      id: 4,
      name: "Amber Sunset",
      price: 110,
      rating: 4,
      reviews: 15,
      description: "Warm sunset amber with citrus highlights",
      category: "Premium",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799692/image19_z4fapo.jpg",
      featured: true
    },
    {
      id: 5,
      name: "Midnight Mystery",
      price: 85,
      rating: 5,
      reviews: 28,
      description: "Deep night blooms with mysterious allure",
      category: "New",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799692/image20_wjq3nl.jpg"
    },
    {
      id: 6,
      name: "Vanilla Dreams",
      price: 90,
      rating: 4,
      reviews: 22,
      description: "Creamy vanilla bean with soft musk base",
      category: "Classic",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761799692/image21_ykvhbr.jpg"
    },
  ];

  return (
    <>
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

          {/* Modern Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 grid-auto-rows-[minmax(400px,auto)]">
            {products.map((product) => {
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
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm text-white text-xs font-normal px-3 py-1.5 rounded-full z-10 shadow-lg">
                        {product.category}
                      </div>

                      {/* Special Badge */}
                      {product.badge && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-normal px-3 py-1.5 rounded-full z-10 shadow-lg animate-pulse">
                          {product.badge}
                        </div>
                      )}

                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex gap-4">
                          <button className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                            <svg className="w-6 h-6 text-slate-700 group-hover/btn:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>
                          <button className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                            <svg className="w-6 h-6 text-slate-700 group-hover/btn:text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300 group/btn">
                            <svg className="w-6 h-6 text-slate-700 group-hover/btn:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 2.5M7 13l2.5 2.5m6 5a2 2 0 100-4 2 2 0 000 4zm-8 0a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-6 flex-1 flex flex-col ${isLarge ? 'p-8' : ''}`}>
                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < product.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-slate-500 font-medium">({product.reviews} reviews)</span>
                      </div>

                      {/* Product Name */}
                      <h3 className={`font-medium text-slate-800 mb-3 leading-tight ${isLarge ? 'text-2xl' : 'text-lg'}`}>
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className={`text-slate-600 mb-6 leading-relaxed flex-1 ${isLarge ? 'text-base' : 'text-sm'}`}>
                        {product.description}
                      </p>

                      {/* Price and Action */}
                      <div className="flex items-center justify-between mt-auto gap-4">
                        <div className="flex items-center gap-2">
                          <span className={`font-normal text-slate-800 ${isLarge ? 'text-2xl' : 'text-xl'}`}>
                            ₹{product.price}
                          </span>
                          {product.originalPrice && (
                            <span className={`text-slate-400 line-through ${isLarge ? 'text-lg' : 'text-sm'}`}>
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>

                        <button className={`bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 flex-shrink-0 ${isLarge ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-sm'}`}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className='flex justify-center pt-22'>
            <button
              className="group relative px-10 py-4 bg-neutral-900 text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900 hover:bg-neutral-800 hover:border-neutral-800"
            >
              {/* Button text */}
              <span className="relative z-10 flex items-center gap-3">
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
        </div>
      </section>
    </>
  );
}





function Perfumes() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCard />
      <FeaturedProducts />
      <PromoBanner />
      <SpecialOffers />
    </div>
  );
}

export default Perfumes;