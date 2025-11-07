"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Add this import
import { Heart, Star } from "lucide-react";
import { Fragment } from "react";

const CATEGORY_SLUG = "jewellery"; 

const Jewellery = () => {
  const [favorites, setFavorites] = useState([]);

  const jewelleryCategories = [
    {
      id: 1,
      name: 'Diamond Jewellery',
      description: 'Exquisite diamonds that sparkle forever',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370332/diamond-jewellery_xrxjzh.jpg',
      alt: 'Diamond Jewellery Collection',
      badge: 'HOT',
      rating: '4.8',
      price: '2,49,999',
      originalPrice: '2,99,999',
      discount: '-17%'
    },
    {
      id: 2,
      name: 'Kassu Mallai',
      description: 'Traditional temple jewellery designs',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370332/Kassu-Mallai_kn8hm1.jpg',
      alt: 'Kassu Mallai Jewellery',
      badge: 'NEW',
      rating: '4.7',
      price: '1,89,999',
      originalPrice: '2,49,999',
      discount: '-24%'
    },
    {
      id: 3,
      name: 'Filigree Jewellery',
      description: 'Intricate handcrafted silver artistry',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370332/Filigree-Jewellery_bnhih5.jpg',
      alt: 'Filigree Jewellery Collection',
      rating: '4.6',
      price: '45,999',
      originalPrice: '59,999',
      discount: '-23%'
    },
    {
      id: 4,
      name: 'Antique Jewellery',
      description: 'Timeless vintage elegance',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370332/Antique-Jewellery_i56hxm.jpg',
      alt: 'Antique Jewellery Collection',
      badge: 'SALE',
      rating: '4.9',
      price: '3,49,999',
      originalPrice: '4,99,999',
      discount: '-30%'
    },
    {
      id: 5,
      name: 'Navratna Jewellery',
      description: 'Nine sacred gemstones collection',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370333/Navratna-Jewellery_mqbfnl.jpg',
      alt: 'Navratna Jewellery',
      rating: '4.7',
      price: '1,25,999',
      originalPrice: '1,59,999',
      discount: '-21%'
    },
    {
      id: 6,
      name: 'Meenakari Jewellery',
      description: 'Colorful enamel work masterpieces',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370332/Meenakari-Jewellery_cpwxyc.jpg',
      alt: 'Meenakari Jewellery Collection',
      badge: 'HOT',
      rating: '4.8',
      price: '89,999',
      originalPrice: '1,19,999',
      discount: '-25%'
    },
    {
      id: 7,
      name: 'Artificial Jewellery',
      description: 'Affordable fashion for every occasion',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761370332/Artificial-Jewellery_eni8lo.jpg',
      alt: 'Artificial Jewellery Collection',
      badge: 'NEW',
      rating: '4.5',
      price: '12,999',
      originalPrice: '18,999',
      discount: '-32%'
    }
  ];


  // Hero Section Data
  const heroData = {
    title: "Exquisite Jewellery",
    subtitle: "GIFALA DESIGNER",
    description: "Discover timeless elegance with our curated collection of fine jewellery",
    buttonText: "Shop Best Seller",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305991/jewelry-hero_d4yak4.jpg",
  };

  // Featured Products - Best Sellers
  const bestSellers = [
    {
      id: 1,
      name: "Diamond Necklace Set",
      price: "₹2,49,999",
      originalPrice: "₹2,99,999",
      discount: "-17%",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending1_edrd0n.jpg",
      badge: "HOT",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Gold Earrings",
      price: "₹45,999",
      originalPrice: "₹55,999",
      discount: "-18%",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending2_frlpp4.jpg",
      badge: "HOT",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Pearl Bracelet",
      price: "₹32,999",
      originalPrice: "₹39,999",
      discount: "-17%",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending3_vvlofx.jpg",
      badge: "HOT",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Ruby Ring",
      price: "₹78,999",
      originalPrice: "₹95,999",
      discount: "-18%",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761304670/trending4_a7xgcj.jpg",
      badge: "HOT",
      rating: 4.9,
    },
  ];

  // Jewellery Collections
  const collections = [
    {
      id: 1,
      name: "Bridal Collection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305883/bridal-collection_lmpktm.jpg",
      link: "/collections/bridal",
    },
    {
      id: 2,
      name: "Diamond Classics",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305883/diamond-collection_p0wtap.jpg",
      link: "/collections/diamond",
    },
    {
      id: 3,
      name: "Gold Elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305215/gold-collection_mfarn4.jpg",
      link: "/collections/gold",
    },
    {
      id: 4,
      name: "Pearl Treasures",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305396/pearl-collection_xpybkd.jpg",
      link: "/collections/pearl",
    },
    {
      id: 5,
      name: "Gemstone Beauty",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305544/gemstone-beauty_bhxlfr.jpg",
      link: "/collections/gemstone",
    },
    {
      id: 6,
      name: "Contemporary",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305543/Contemporary_ptgyjt.jpg",
      link: "/collections/contemporary",
    },
    {
      id: 7,
      name: "Vintage Style",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305546/vintage-style_xgatg3.jpg",
      link: "/collections/vintage",
    },
    {
      id: 8,
      name: "Temple Jewellery",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305546/temple-style_pcspeh.jpg",
      link: "/collections/temple",
    },
  ];

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Build the single destination URL once
  const ALL_PRODUCTS_URL = "/accessories/all-products?category=jewellery";

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroData.image}
            alt="Jewellery Collection"
            className="w-full h-full object-cover"
          // onError={(e) => {
          //   e.target.src =
          //     "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80";
          // }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <p className="text-rose-400 text-sm md:text-base font-medium tracking-widest mb-2 uppercase">
                {heroData.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
                {heroData.title}
              </h1>
              <div className="w-20 h-0.5 bg-rose-400 mb-6"></div>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-md">
                {heroData.description}
              </p>
              <button className="bg-rose-400 text-white px-8 py-3 rounded-sm font-medium text-sm tracking-wider hover:bg-rose-500 transition-all duration-300 shadow-lg">
                {heroData.buttonText}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Best Seller Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 mt-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                shop by <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">seller</span>
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your Favorite Sellers, all in one place</p>
            </div>

            <div className="flex justify-center gap-4 md:gap-8 mb-8">
              <button className="text-sm md:text-base font-medium text-gray-800 border-b-2 border-rose-400 pb-2 px-2">
                Women
              </button>
              <button className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-800 pb-2 px-2">
                Bridal
              </button>
              <button className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-800 pb-2 px-2">
                Luxury
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.map((product) => (
              <Link
                key={product.id}  // ✅ Fix: key goes here
                href={`/accessories/${product.id}`} // ✅ Fix: href goes here
                className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* ✅ Product Image Container */}
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">

                  {/* ✅ Badge (if product has one) */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* ✅ Favorite (Heart) Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // ✅ Prevent Link navigation when clicking heart
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10 hover:bg-rose-50 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={18}
                      className={
                        favorites.includes(product.id)
                          ? "text-rose-500 fill-rose-500"
                          : "text-gray-600"
                      }
                    />
                  </button>

                  {/* ✅ Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    // onError={(e) => {
                    //   e.target.src =
                    //     "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400";
                    // }}
                  />
                </div>

                {/* ✅ Product Info */}
                <div className="p-4">
                  {/* ✅ Product Name */}
                  <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  {/* ✅ Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={14} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>

                  {/* ✅ Price, Discount, Original Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                    <span className="text-sm text-red-500 font-medium">
                      {product.discount}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Fragment>
          <div className='flex justify-center py-18'>
            <Link href={ALL_PRODUCTS_URL} prefetch={false}></Link>
            <button
              className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
            >
              {/* Background slide effect */}
              <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              {/* Button text */}
              <Link href={ALL_PRODUCTS_URL} prefetch={false}>
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
              </Link>
            </button>
          </div>
        </Fragment>
      </section>

      {/* Jewellery Categories Section */}
      <section className=" px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Jewellery <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">collection</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> Discover our stunning range of jewellery crafted to perfection for your special moments</p>
          </div>

          {/* Jewellery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {jewelleryCategories.map((category) => (
              <div
                key={category.id}
                className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                 <Link
                key={category.id}
                href={ALL_PRODUCTS_URL}
                prefetch={false}
                className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              ></Link>
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                  {/* HOT Badge */}
                  {category.badge && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-sm z-10">
                      {category.badge}
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(category.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10 hover:bg-rose-50 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <svg
                      className={`w-5 h-5 ${favorites.includes(category.id) ? "text-rose-500 fill-rose-500" : "text-gray-600"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Product Image */}
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
                    {category.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600">{category.rating || "4.8"}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">
                      ₹{category.price}
                    </span>
                    {category.originalPrice && (
                      <>
                        <span className="text-sm text-gray-400 line-through">
                          ₹{category.originalPrice}
                        </span>
                        <span className="text-sm text-red-500 font-medium">
                          {category.discount}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Bottom CTA */}
          <Fragment>
            <div className='flex justify-center py-18'>
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

      {/* Collections Section */}
      <section className="pt-8 pb-30 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Discover <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Our Range</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Where elegance meets sparkle</p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={collection.link}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Collection Image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                // onError={(e) => {
                //   e.target.src =
                //     "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500";
                // }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Collection Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-base md:text-lg font-medium text-center">
                    {collection.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <Fragment>
        <div className='flex justify-center py-18'>
          <button
            className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
          >

            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

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
      </Fragment> */}
    </div>
  );
};

export default Jewellery;
