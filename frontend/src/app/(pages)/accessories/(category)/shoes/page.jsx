"use client"

import React, { useState } from 'react';
import { Heart, Star, Truck, DollarSign, Headphones, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Fragment } from 'react';


export default function FootwearShop() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const products = [
    {
      id: 1,
      name: 'Yellow Man Shoes',
      price: 49.00,
      oldPrice: 59.00,
      rating: 4,
      sale: true,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761308854/yellow-man-shooes_cw95ly.jpg'
    },
    {
      id: 2,
      name: 'Light Brown Shoes',
      price: 49.00,
      oldPrice: 59.00,
      rating: 5,
      sale: true,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761308845/brown-shoes_ymxuxs.jpg'
    },
    {
      id: 3,
      name: 'Brown Shoes',
      price: 59.00,
      rating: 4,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761391769/2024_New_Men_s_Sports_Shoes_Men_s_Fashion_Handsome_Casual_Shoes_Lace_Up_Men_s_Shoes_Skateboarding_Shoes_Men_s_Board_Shoes_Personalized_Street_Men_s_Shoes_Shoes_For_Men_cf8krq.jpg'
    },
    {
      id: 4,
      name: 'Nike Air Max 270',
      price: 159.00,
      rating: 5,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761308847/nike-air_trermg.jpg'
    },
    {
      id: 5,
      name: 'Adidas Ultraboost',
      price: 179.00,
      rating: 5,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761308837/adidas-ultraboot_yk1z7d.jpg'
    },
    {
      id: 6,
      name: 'Nike Air Force 1',
      price: 139.00,
      rating: 4,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761391984/nike_air_1_ovm7xy.jpg'
    },
    {
      id: 7,
      name: 'Jordan Retro High',
      price: 199.00,
      rating: 5,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761308850/red-casula_lzlptr.jpg'
    },
    {
      id: 8,
      name: 'Converse Chuck Taylor',
      price: 89.00,
      rating: 4,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761308846/converse-chuck_xudt9k.jpg'
    }
  ];

  const groomcollection = [
    {
      id: 1,
      name: 'Yellow Man Shoes',
      price: 499.00,
      oldPrice: 455.67,
      rating: 4,
      sale: true,
      image: ''
    },

    {
      id: 2,

      name: 'Classic White Sneakers',
      price: 659.00,
      oldPrice: 799.00,
      rating: 4.5,
      sale: true,
      image: ''
    },

    {
      id: 3,
      name: 'Black Running Shoes',
      price: 899.00,
      oldPrice: 1109.00,
      rating: 4.8, sale: true,
      image: ''
    },

    {
      id: 4,
      name: 'Canvas High-Top Sneakers',
      price: 459.00,
      oldPrice: 559.00,
      rating: 4.2, sale: true,
      image: ''
    },

    {
      id: 5,
      name: 'Nike Air Jordan Retro',
      price: 1509.00,
      oldPrice: 1809.00,
      rating: 5.0,
      sale: true,
      image: ''
    },


    {
      id: 6,
      name: 'Leather Casual Loafers',
      price: 759.00,
      oldPrice: 959.00,
      rating: 4.6,
      sale: true,
      image: ''
    }


  ];


  const bridecollection = [
    {
      id: 1,
      name: 'Yellow Man Shoes',
      price: 499.00,
      oldPrice: 455.67,
      rating: 4,
      sale: true,
      image: ''
    },

    {
      id: 2,
      name: 'Classic White Sneakers',
      price: 659.00,
      oldPrice: 799.00,
      rating: 4.5,
      sale: true,
      image: ''
    },

    {
      id: 3,
      name: 'Black Running Shoes',
      price: 899.00,
      oldPrice: 1109.00,
      rating: 4.8,
      sale: true,
      image: ''
    },

    {
      id: 4,
      name: 'Canvas High-Top Sneakers',
      price: 459.00,
      oldPrice: 559.00,
      rating: 4.2,
      sale: true,
      image: ''
    },

    {
      id: 5,
      name: 'Nike Air Jordan Retro',
      price: 1509.00,
      oldPrice: 1809.00,
      rating: 5.0,
      sale: true,
      image: ''
    },

    {
      id: 6,
      name: 'Leather Casual Loafers',
      price: 759.00,
      oldPrice: 959.00,
      rating: 4.6,
      sale: true,
      image: ''
    }

  ];

  const ProductCard = ({ product, showOldPrice = true }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        {product.sale && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded z-10">
            SALE
          </span>
        )}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors z-10"
        >
          <Heart
            size={18}
            className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />

      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
          Heaven Men's Shoes
        </p>
        <h3 className="text-gray-800 font-medium mb-2">{product.name}</h3>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          {showOldPrice && product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-lg font-semibold text-gray-800">
            ₹{product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className=" bg-gray-50">
        <HeroSection />
      </div>


      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Truck size={32} className="text-blue-600" />,
            title: 'FREE SHIPPING & RETURN',
            desc: 'Free shipping on all orders over $99',
            hoverInfo: 'Fast delivery within 2-3 business days. Easy returns within 30 days.',
            color: 'blue'
          },
          {
            icon: <DollarSign size={32} className="text-green-600" />,
            title: 'MONEY BACK GUARANTEE',
            desc: '100% money back guarantee',
            hoverInfo: 'No questions asked refund policy. Your satisfaction is our priority.',
            color: 'green'
          },
          {
            icon: <Headphones size={32} className="text-purple-600" />,
            title: 'ONLINE SUPPORT 24/7',
            desc: '24/7 customer support available',
            hoverInfo: 'Live chat, email, and phone support available round the clock.',
            color: 'purple'
          },
          {
            icon: <Shield size={32} className="text-red-600" />,
            title: 'SECURE PAYMENT',
            desc: 'Your payment information is secure',
            hoverInfo: 'SSL encrypted transactions with multiple payment options.',
            color: 'red'
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-opacity-0 overflow-hidden cursor-pointer"
          >
            {/* Background gradient animation */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color === 'blue' ? 'from-blue-50 to-blue-100' :
              feature.color === 'green' ? 'from-green-50 to-green-100' :
                feature.color === 'purple' ? 'from-purple-50 to-purple-100' :
                  'from-red-50 to-red-100'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

            {/* Animated border */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.color === 'blue' ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600' :
              feature.color === 'green' ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600' :
                feature.color === 'purple' ? 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600' :
                  'bg-gradient-to-r from-red-400 via-red-500 to-red-600'
              } p-0.5`}>
              <div className="bg-white rounded-2xl h-full w-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon with bounce animation */}
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-50 group-hover:bg-white transition-colors duration-300 mb-4 group-hover:animate-bounce">
                {feature.icon}
              </div>

              {/* Title and description */}
              <div className="mb-4">
                <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.desc}
                </p>
              </div>

              {/* Hidden content that appears on hover */}
              <div className="overflow-hidden">
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle size={16} className={`mt-0.5 ${feature.color === 'blue' ? 'text-blue-600' :
                        feature.color === 'green' ? 'text-green-600' :
                          feature.color === 'purple' ? 'text-purple-600' :
                            'text-red-600'
                        }`} />
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {feature.hoverInfo}
                      </p>
                    </div>

                    {/* Call to action */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-gray-800 group-hover:gap-2 transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight size={14} className={`transform group-hover:translate-x-1 transition-transform duration-300 ${feature.color === 'blue' ? 'text-blue-600' :
                        feature.color === 'green' ? 'text-green-600' :
                          feature.color === 'purple' ? 'text-purple-600' :
                            'text-red-600'
                        }`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating particles effect */}
            <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
              <div className={`w-2 h-2 rounded-full animate-ping ${feature.color === 'blue' ? 'bg-blue-400' :
                feature.color === 'green' ? 'bg-green-400' :
                  feature.color === 'purple' ? 'bg-purple-400' :
                    'bg-red-400'
                } absolute top-4 right-4`}></div>
              <div className={`w-1 h-1 rounded-full animate-pulse ${feature.color === 'blue' ? 'bg-blue-500' :
                feature.color === 'green' ? 'bg-green-500' :
                  feature.color === 'purple' ? 'bg-purple-500' :
                    'bg-red-500'
                } absolute top-8 right-8 animation-delay-200`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto pt-16 pb-6 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            step in style
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Showcasing this season’s most loved shoes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Fragment>
          <div className='flex justify-center pt-16'>
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

      {/* Summer Collection */}
      <div className="max-w-7xl mx-auto py-16 px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            the perfect pair collection
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Complementary designs for the modern bride and groom</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop"
              alt="Sport Shoes"
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end">
              <h3 className="text-white text-3xl font-serif p-6">Sport Shoes</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg h-36 flex items-center justify-center hover:bg-amber-800 transition-colors duration-300 cursor-pointer">
              <h3 className="text-white text-3xl font-serif">For Her</h3>
            </div>
            <div className="bg-gray-900 rounded-lg h-36 flex items-center justify-center hover:bg-amber-800 transition-colors duration-300 cursor-pointer">
              <h3 className="text-white text-3xl font-serif">For Him</h3>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=200&fit=crop"
                alt="Women Shoes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=400&h=200&fit=crop"
                alt="Men Shoes"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Groom Colllection */}


      <div className="max-w-7xl mx-auto py-12 px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Groom collection
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">style for the Aisle</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groomcollection.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Fragment>
        <div className='flex justify-center pt-8 pb-12'>
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
      <div className="max-w-7xl mx-auto py-12 px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Bride Collection
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Grace in Every Step</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bridecollection.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Fragment>
        <div className='flex justify-center pt-6 pb-18'>
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
  );
}

const HeroSection = () => {
  return (
    <div className="bg-linear-to-br from-pink-50 to-pink-100 min-h-screen">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Top Content with Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="inline-block bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-extralight">
              NEW ARRIVAL 2025
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none">
              STEP INTO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                STYLE
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-md">
              Discover the perfect blend of comfort and fashion with our exclusive collection designed for modern lifestyles.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-normal cursor-pointer hover:bg-gray-800 transition-all hover:scale-105 shadow-lg">
                Explore Collection
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-normal cursor-pointer border-2 border-gray-200 hover:border-gray-400 transition-all hover:scale-105">
                View Lookbook
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-normal text-gray-900">500+</div>
                <div className="text-sm text-gray-500">Styles Available</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-gray-900">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-normal text-gray-900">4.9★</div>
                <div className="text-sm text-gray-500">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Product Display */}
          <div className="relative">
            {/* Decorative Circle Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full blur-3xl opacity-50"></div>

            {/* Main Product Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="absolute top-6 right-6 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                -30%
              </div>

              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=400&fit=crop&crop=center"
                alt="Featured Shoe"
                className="w-full h-80 object-contain mb-6"
              />

              <div className="space-y-3">
                <h3 className="text-2xl font-medium text-gray-900">Premium Runner X</h3>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-normal text-gray-900">₹1279</span>
                  <span className="text-lg text-gray-400 line-through">₹1399</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-pink-300 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                  <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-gray-300 cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-light text-gray-900">Free Shipping</div>
                  <div className="text-xs text-gray-500">On orders over $100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Categories Section */}
        <div className="space-y-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              shop by category
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Find the perfect pair for every occasion</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Running Shoes */}
            <div className="group bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center"
                    alt="Running Shoes"
                    className="w-full h-48 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-2">Running Shoes</h3>
                <p className="text-gray-600 mb-4">Performance meets comfort</p>

                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-normal hover:bg-gray-900 hover:text-white transition-all group-hover:scale-105 cursor-pointer">
                  Shop Now →
                </button>
              </div>
            </div>

            {/* Casual Sneakers */}
            <div className="group bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop&crop=center"
                    alt="Casual Sneakers"
                    className="w-full h-48 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-2">Casual Sneakers</h3>
                <p className="text-gray-600 mb-4">Everyday style essentials</p>

                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-normal hover:bg-gray-900 hover:text-white transition-all group-hover:scale-105 cursor-pointer">
                  Shop Now →
                </button>
              </div>
            </div>

            {/* Sports Collection */}
            <div className="group bg-gradient-to-br from-gray-100 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop&crop=center"
                    alt="Sports Collection"
                    className="w-full h-48 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-medium text-gray-900 mb-2">Sports Collection</h3>
                <p className="text-gray-600 mb-4">Engineered for athletes</p>

                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-normal hover:bg-gray-900 hover:text-white transition-all group-hover:scale-105 cursor-pointer">
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
