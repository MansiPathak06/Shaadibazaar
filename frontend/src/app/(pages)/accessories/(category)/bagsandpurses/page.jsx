"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Star, ArrowRight, Loader2 } from "lucide-react";
import { Fragment } from "react";

const CATEGORY_SLUG = "Bags And Purse";

const BagsAndPurses = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Hero Banner Data
  const heroBanners = [
    {
      id: 1,
      title: "BETTER WITH AGE",
      subtitle: "Premium leather bags that last a lifetime",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306332/bags-hero-1_xqggxf.jpg",
    },
    {
      id: 2,
      title: "BORN IN THE USA",
      subtitle: "Handcrafted with American craftsmanship",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306333/bags-hero-2_hwa3j7.jpg",
    },
    {
      id: 3,
      title: "MAKE IT YOUR OWN",
      subtitle: "Personalize your perfect bag",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306334/bags-hero-3_dozxze.jpg",
    },
  ];

  // Product Categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "tote", name: "Tote Bags" },
    { id: "backpack", name: "Backpacks" },
    { id: "clutch", name: "Clutches" },
    { id: "crossbody", name: "Crossbody Bags" },
    { id: "messenger", name: "Messenger Bags" },
    { id: "accessories", name: "Accessories" },
  ];

  // Full Product Line
  const fullLineProducts = [
    {
      id: 1,
      name: "Tote Bags",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306595/tote-bag_cz0wg9.jpg",
      category: "tote",
      categorylink: '/accessories/all-products?category=Tote Bags'
    },
    {
      id: 2,
      name: "Backpacks",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306606/backpack_o3guva.jpg",
      category: "backpack",
      categorylink: '/accessories/all-products?category=Backpacks'
    },
    {
      id: 3,
      name: "Clutches and Pouches",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306648/clutch_pigsrw.jpg",
      category: "clutch",
      categorylink: '/accessories/all-products?category=Clutches and Pouches'
    },
    {
      id: 4,
      name: "Crossbody",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306680/crossbody_yvktqh.jpg",
      category: "crossbody",
      categorylink: '/accessories/all-products?category=Crossbody'
    },
    {
      id: 5,
      name: "Messenger Bags",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306695/messenger_uqjlar.jpg",
      category: "messenger",
      categorylink: '/accessories/all-products?category=Messenger Bags'
    },
    {
      id: 6,
      name: "Accessories",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306715/accessories_ipthcg.jpg",
      category: "accessories",
      categorylink: '/accessories/all-products?category=Accessories'
    },
  ];

  const Accessories_Images = [
    {
      id: 1,
      link: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306326/accessory-1_-_Copy_frdjjs.jpg"
    },
    {
      id: 2,
      link: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306328/accessory-2_-_Copy_gib64a.jpg"
    },
    {
      id: 3,
      link: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306327/accessory-3_-_Copy_ixiidu.jpg"
    },
    {
      id: 4,
      link: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306329/accessory-4_dkt5fk.jpg"
    },
  ];

  useEffect(() => {
    fetchRealProducts();
  }, []);

  const fetchRealProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/products?category=Bags And Purse"
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

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const formatINR = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const ALL_PRODUCTS_URL = "/accessories/all-products?category=Bags And Purse";

  const filteredProducts = activeCategory === "all"
    ? realProducts
    : realProducts.filter((p) =>
      p.subcategory === activeCategory ||
      p.tags?.includes(activeCategory)
    );

  return (
    <>
      <div className="w-full">
        {/* Hero Banner Section - Bags & Purses */}
        <section className="relative w-full py-16 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium uppercase tracking-wide">
                    Wedding Collection
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                  Elegant Bags & Purses
                  <span className="block text-rose-600 mt-2">
                    For Your Special Day
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Discover our exquisite collection of bridal clutches, potli
                  bags, and designer handbags that perfectly complement your
                  wedding attire. From traditional to contemporary styles.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href={ALL_PRODUCTS_URL}>
                    <button className="px-8 py-4 bg-rose-600 text-white cursor-pointer rounded-lg font-light hover:bg-rose-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                      Shop Now
                    </button>
                  </Link>
                  <button className="px-8 py-4 bg-white text-rose-600 border-2 cursor-pointer border-rose-600 rounded-lg font-light hover:bg-rose-50 transition-colors duration-300">
                    View Lookbook
                  </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-normal text-rose-600">500+</p>
                    <p className="text-sm text-gray-600">Designs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-normal text-rose-600">Premium</p>
                    <p className="text-sm text-gray-600">Quality</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-normal text-rose-600">Fast</p>
                    <p className="text-sm text-gray-600">Delivery</p>
                  </div>
                </div>
              </div>

              {/* Right Content - Image Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Large Featured Image */}
                  <div className="col-span-2 relative overflow-hidden rounded-2xl shadow-2xl group">
                    <div className="aspect-[16/9] relative">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306493/featured-bridal-clutch_zpqqmm.jpg"
                        alt="Featured Bridal Clutch"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-rose-900/40 to-transparent group-hover:from-rose-900/60 transition-all duration-300"></div>
                      <div className="absolute bottom-4 left-4 z-10">
                        <p className="text-white font-medium text-xl">
                          Featured Bridal Clutch
                        </p>
                        <p className="text-rose-100 text-sm">
                          Premium Collection
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Small Images */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <div className="aspect-square relative">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306438/potli-bags_hc88f2.jpg"
                        alt="Potli Bags Collection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-amber-900/40 to-transparent group-hover:from-amber-900/60 transition-all duration-300"></div>
                      <div className="absolute bottom-3 left-3 z-10">
                        <p className="text-white font-medium text-sm">
                          Potli Bags
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <div className="aspect-square relative">
                      <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761306367/designer-bags_hmjz0d.jpg"
                        alt="Designer Bags Collection"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-pink-900/40 to-transparent group-hover:from-pink-900/60 transition-all duration-300"></div>
                      <div className="absolute bottom-3 left-3 z-10">
                        <p className="text-white font-medium text-sm">
                          Designer Bags
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Full Line Section */}
        <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                our <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>full line</span>
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Handcrafted bags and accessories for every occasion</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {fullLineProducts.map((product) => (
                <Link
                  key={product.id}
                  href={product.categorylink}
                  className="group text-center"
                >
                  <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden mb-3 shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Made With Love Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761307498/craftsman-working_ebyoxg.jpg"
                  alt="Made with love in San Francisco"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800";
                  }}
                />
              </div>

              {/* Right: Content */}
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-8 md:p-12 rounded-2xl text-white shadow-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 uppercase">
                  MADE WITH LOVE IN SAN FRANCISCO
                </h2>
                <p className="text-base md:text-lg mb-6 text-rose-50 leading-relaxed">
                  All our products are handcrafted with precision and passion by
                  skilled artisans. Each piece tells a story of dedication,
                  quality, and timeless craftsmanship.
                </p>
                <Link href={ALL_PRODUCTS_URL}>
                  <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-normal cursor-pointer hover:bg-rose-50 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    VIEW MORE
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Just Off The Line - Featured Products */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center ">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                  just <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>of</span> the <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>line </span>
                </h2>
                <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Discover our latest handcrafted collections</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
                  {filteredProducts.map((product) => {
                    const images = Array.isArray(product.images)
                      ? product.images
                      : JSON.parse(product.images || "[]");
                    const mainImage = images[0] || "/placeholder.jpg";

                    return (
                      <Link
                        key={product.id}
                        href={`/accessories/all-products/${product.id}`}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                      >
                        {/* Product Image */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                          <img
                            src={mainImage}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.target.src = "/placeholder.jpg";
                            }}
                          />

                          {/* Badge */}
                          {product.featured && (
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rose-500 text-xs font-extralight text-white shadow-lg">
                              BESTSELLER
                            </div>
                          )}
                          {product.discount > 0 && (
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500 text-xs font-extralight text-white shadow-lg">
                              SALE
                            </div>
                          )}

                          {/* Quick Action Buttons */}
                          <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleFavorite(product.id);
                              }}
                              className="bg-white p-2 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-all duration-300"
                            >
                              <Heart
                                size={18}
                                className={favorites.includes(product.id) ? "fill-rose-500" : ""}
                              />
                            </button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-4 md:p-5">
                          <h3 className="text-base md:text-lg font-medium text-gray-900 mb-2 group-hover:text-rose-600 transition-colors line-clamp-2">
                            {product.name}
                          </h3>

                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={14}
                                  className={
                                    i < Math.floor(product.rating || 4.5)
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              ({product.rating || "4.5"})
                            </span>
                          </div>

                          {/* Price and Cart */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-xl md:text-2xl font-light text-rose-600">
                                {formatINR(product.price)}
                              </span>
                              {product.mrp && product.mrp > product.price && (
                                <span className="text-sm text-gray-400 line-through">
                                  {formatINR(product.mrp)}
                                </span>
                              )}
                            </div>
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="bg-rose-500 text-white p-2 md:p-3 rounded-full hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                            >
                              <ShoppingCart size={18} />
                            </button>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <Fragment>
                  <div className='flex justify-center py-16'>
                    <Link href={'/accessories/all-products?category=Trending Collection'}>
                      <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
                        <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                        <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                          DIscover our trending Bags 
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

        {/* Max Protection Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-rose-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4 uppercase">
                  MAX PROTECTION
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  Our bags are designed with durability in mind. Premium
                  materials and reinforced stitching ensure your belongings stay
                  safe and secure, no matter where life takes you.
                </p>
                <Link
                  href='/'
                  className="inline-flex items-center gap-2 text-rose-600 font-normal cursor-pointer hover:text-rose-700 transition-colors group"
                >
                  Visit site
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>

              {/* Right: Product Grid */}
              <div className="grid grid-cols-2 gap-4">
                {Accessories_Images.map((item) => (
                  <div
                    key={item.id}
                    className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img
                      src={item.link}
                      alt={`Accessory ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BagsAndPurses;
