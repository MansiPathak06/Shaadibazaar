"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Eye, Truck, Star, ShoppingCart, Loader2 } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

const CATEGORY_SLUG = "bridalwear";

const BridalWear = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Women");
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
        "http://localhost:5000/api/products?category=bridalwear"
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
  const ALL_PRODUCTS_URL = "/outfits/all-products?category=bridalwear";

  // Split products: First 4 for "Celebrate Love in Style", Rest for other sections
  const celebrateLoveProducts = realProducts.slice(0, 4);
  const bridalDrapesProducts = realProducts.slice(4, 8);
  const unveilSilkProducts = realProducts.slice(8, 12);
  const glamourProducts = realProducts.slice(12, 16);
  const newArrivalProducts = realProducts.slice(16, 20);
  const shopByEveningProducts = realProducts.slice(20);

  // Hero Banners
  const heroBanners = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761844523/bridal-herobg_flfa2x.jpg",
      title: "Explore Your Dream Bridal Collection!",
      subtitle: "Find the dress that tells your love story — crafted with passion and perfection.",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801525/happiness_pjsoxt.jpg",
      title: "Find the Dress You'll Fall in Love With!",
      subtitle: "Explore enchanting silhouettes and delicate details made just for your special day.",
    },
  ];

  const categories = ["Women", "Baby's", "Men's"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroBanners.length) % heroBanners.length
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-100">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroBanners.map((banner) => (
            <div key={banner.id} className="min-w-full h-full relative">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-2xl">{banner.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-white w-8" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      <div className="min-h-screen bg-white px-30">
        {/* Hero Carousel Section */}

        {/* Celebrate Love in Style Section */}
        <section className="container mx-auto px-4 pt-20">
          <div className="text-center mb-8">
            <div className="text-center mb-12 mt-4">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                Celebrate <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>Love</span> in <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>style</span>
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Elegance That Lasts Forever</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {celebrateLoveProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-80 bg-gray-100 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            HOT
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
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
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{product.rating || "4.8"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rose-500">
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

              <Fragment>
                <div className="flex justify-center py-16">
                  <Link href={`/outfits/all-products?category=bridalwear&subCategory=Trending Collection`}>
                    <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
                      <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                      <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                        View Trending Collection
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
        </section>

        {/* Bridal Drapes Section */}
        <section className="container mx-auto px-4 pt-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Bridal <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>Drapes</span> of <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>Elegance</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Grace That Walks Down the Aisle</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : bridalDrapesProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bridalDrapesProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-80 bg-gray-100 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            NEW
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
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
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{product.rating || "4.8"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rose-500">
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
            </>
          ) : null}
        </section>
        <Fragment>
          <div className="flex justify-center py-16">
            <Link href={ALL_PRODUCTS_URL}>
              <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
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
            </Link>
          </div>
        </Fragment>

        {/* Side Banner Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801550/image23_dfcmp2.jpg"
              alt="Happiness Wearing is Caring"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-6xl font-medium mb-2">
                  HAPPINESS
                </h2>
                <p className="text-xl md:text-2xl">Wearing is caring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unveil the Beauty of Silk Section */}
        <section className="container mx-auto px-4 pt-14">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Unveil the <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>beauty</span> of <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>silk</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Silk That Defines Your Moment</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : unveilSilkProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {unveilSilkProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-80 bg-gray-100 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            NEW
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
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
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{product.rating || "4.8"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rose-500">
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


            </>
          ) : null}
        </section>
        <Fragment>
          <div className="flex justify-center py-16">
            <Link href={`/outfits/all-products?category=bridalwear&subCategory=Silk Clothes`}>
              <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
                <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                  View Featured Collection
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

        {/* Glamour Collection */}
        <section className="container mx-auto px-4 pt-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Woolen <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>Collection</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Designed to Dazzle, Crafted to Impress</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : glamourProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {glamourProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-80 bg-gray-100 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            NEW
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
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
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{product.rating || "4.8"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rose-500">
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

            </>
          ) : null}
        </section>
        <Fragment>
          <div className="flex justify-center py-16">
            <Link href={`/outfits/all-products?category=bridalwear&subCategory=Woollen Clothes`}>
              <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
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
            </Link>
          </div>
        </Fragment>

        {/* New Arrival */}
        <section className="container mx-auto px-4 pt-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              new <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>Arrival</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Fresh Designs. Timeless Impressions</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : newArrivalProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newArrivalProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-80 bg-gray-100 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-3 left-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                            NEW
                          </span>
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
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
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{product.rating || "4.8"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-rose-500">
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
            </>
          ) : null}
        </section>
        <Fragment>
          <div className="flex justify-center py-16">
            <Link href={ALL_PRODUCTS_URL}>
              <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
                <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                  Top Selling
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

        {/* Shop By Evening */}
        <section className="container mx-auto px-4 pt-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Shop By <span className='bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500'>evening</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Designs That Glow as the Night Unfolds</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : shopByEveningProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {shopByEveningProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/outfits/all-products/${product.id}`}
                      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100"
                    >
                      <div className="relative h-80 bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
                        {product.discount > 0 && (
                          <span className="absolute top-4 left-4 bg-linear-to-r from-rose-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg animate-pulse">
                            -{product.discount}% OFF
                          </span>
                        )}

                        {product.featured && (
                          <span className="absolute top-4 left-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white px-3 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg">
                            NEW
                          </span>
                        )}

                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(product.id);
                            }}
                            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 border border-white/20"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-4 h-4 transition-colors ${favorites.includes(product.id)
                                ? "text-rose-500 fill-current"
                                : "text-rose-500"
                                }`}
                            />
                          </button>
                          <button
                            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 border border-white/20"
                            aria-label="Quick view"
                          >
                            <Eye className="w-4 h-4 text-gray-700" />
                          </button>
                          <button
                            className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-xl hover:bg-rose-50 hover:scale-110 transition-all duration-200 border border-white/20"
                            aria-label="Add to cart"
                          >
                            <ShoppingCart className="w-4 h-4 text-rose-500" />
                          </button>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <button className="w-full bg-white/95 backdrop-blur-sm text-gray-800 py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-white transition-all duration-200 shadow-lg border border-white/30">
                            Quick Add to Cart
                          </button>
                        </div>
                      </div>

                      <div className="p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                            {product.category || "Bridal Collection"}
                          </span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 4.5)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                                  }`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                              ({product.reviews || "24"})
                            </span>
                          </div>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 h-14 group-hover:text-rose-600 transition-colors duration-200">
                          {product.name}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {product.description || "Premium quality bridal wear with elegant design and comfortable fit."}
                        </p>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">Sizes:</span>
                            <div className="flex gap-1">
                              {["S", "M", "L"].map((size) => (
                                <span
                                  key={size}
                                  className="w-6 h-6 text-xs flex items-center justify-center border border-gray-200 rounded hover:border-rose-300 hover:bg-rose-50 transition-colors cursor-pointer"
                                >
                                  {size}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-4 h-4 rounded-full bg-rose-400 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                            <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                            <div className="w-4 h-4 rounded-full bg-emerald-400 border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform" />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                              {formatINR(product.price)}
                            </span>
                            {product.mrp && product.mrp > product.price && (
                              <span className="text-sm text-gray-400 line-through">
                                {formatINR(product.mrp)}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-green-600">
                            <Truck className="w-3.5 h-3.5" />
                            <span className="text-xs font-medium">Free Shipping</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <div
                            className={`w-2 h-2 rounded-full ${product.inStock !== false ? "bg-green-400" : "bg-red-400"
                              }`}
                          />
                          <span
                            className={`text-xs font-medium ${product.inStock !== false ? "text-green-600" : "text-red-600"
                              }`}
                          >
                            {product.inStock !== false ? "In Stock" : "Out of Stock"}
                          </span>
                          {product.inStock !== false && (
                            <span className="text-xs text-gray-500">• Only {product.stock || 12} left</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}
        </section>
        <Fragment>
                <div className="flex justify-center py-16">
                  <Link href={ALL_PRODUCTS_URL}>
                    <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
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
                  </Link>
                </div>
              </Fragment>
      </div>
    </>
  );
};

export default BridalWear;
