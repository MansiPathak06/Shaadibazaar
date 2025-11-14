"use client";

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star, Loader2 } from "lucide-react";

const CATEGORY_SLUG = "Jewellery";




const Jewellery = () => {
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Hero Section Data
  const heroData = {
    title: "Exquisite Jewellery",
    subtitle: "GIFALA DESIGNER",
    description: "Discover timeless elegance with our curated collection of fine jewellery",
    buttonText: "Shop Best Seller",
    category: "/accessories/all-products?category=Jewellery",
    image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305991/jewelry-hero_d4yak4.jpg",
  };

  // Jewellery Collections (Static - These are collection links)
  const collections = [
    {
      id: 1,
      name: "Bridal Collection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305883/bridal-collection_lmpktm.jpg",
      link: "/collections/bridal",
      category: '/accessories/all-products?category=Jewellery&subCategory=Bridal Collection'
    },
    {
      id: 2,
      name: "Diamond Classics",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305883/diamond-collection_p0wtap.jpg",
      link: "/collections/diamond",
      category: '/accessories/all-products?category=Jewellery&subCategory=Diamond Classics'
    },
    {
      id: 3,
      name: "Gold Elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305215/gold-collection_mfarn4.jpg",
      link: "/collections/gold",
      category: '/accessories/all-products?category=Jewellery&subCategory=Gold Elegance'
    },
    {
      id: 4,
      name: "Pearl Treasures",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305396/pearl-collection_xpybkd.jpg",
      link: "/collections/pearl",
      category: '/accessories/all-products?category=Jewellery&subCategory=Pearl Treasures'
    },
    {
      id: 5,
      name: "Gemstone Beauty",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305544/gemstone-beauty_bhxlfr.jpg",
      link: "/collections/gemstone",
      category: '/accessories/all-products?category=Jewellery&subCategory=Gemstone Beauty'
    },
    {
      id: 6,
      name: "Contemporary",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305543/Contemporary_ptgyjt.jpg",
      link: "/collections/contemporary",
      category: '/accessories/all-products?category=Jewellery&subCategory=Contemporary'
    },
    {
      id: 7,
      name: "Vintage Style",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305546/vintage-style_xgatg3.jpg",
      link: "/collections/vintage",
      category: '/accessories/all-products?category=Jewellery&subCategory=Vintage Style'
    },
    {
      id: 8,
      name: "Temple Jewellery",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761305546/temple-style_pcspeh.jpg",
      link: "/collections/temple",
      category: '/accessories/all-products?category=Jewellery&subCategory=Temple Jewellery'
    },
  ];

  // Fetch real products from database
  useEffect(() => {
    fetchRealProducts();
  }, []);

  const fetchRealProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/products?category=Jewellery"
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
  const ALL_PRODUCTS_URL = "/accessories/all-products?category=Jewellery";       ///////////////////////////////////////////////////////////////////////////////////
  const FEATURED_PRODUCTS_URL = "/accessories/all-products?category=Jewellery&subCategroy=Featured Collection";       ///////////////////////////////////////////////////////////////////////////////////

  // Split products: First 4 for "Best Sellers", Rest for "Jewellery Collection"
  const bestSellers = realProducts.slice(0, 4);
  const jewelleryCollection = realProducts.slice(4, 8);

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroData.image}
            alt="Jewellery Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>

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
              <Link href={heroData.category}>
                <button className="bg-rose-400 cursor-pointer text-white px-8 py-3 rounded-sm font-medium text-sm tracking-wider hover:bg-rose-500 transition-all duration-300 shadow-lg">
                  {heroData.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Best Seller Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 mt-12">
            <div className="text-center md:mb-12">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                shop by <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">seller</span>
              </h2>
              <p className="text-neutral-700 md:text-lg text-sm tracking-widest uppercase mb-2">Your Favorite Sellers, all in one place</p>
            </div>

            {/* <div className="flex justify-center gap-4 md:gap-8 mb-8">
              <button className="text-sm md:text-base font-medium text-gray-800 border-b-2 border-rose-400 pb-2 px-2">
                Women
              </button>
              <button className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-800 pb-2 px-2">
                Bridal
              </button>
              <button className="text-sm md:text-base font-medium text-gray-500 hover:text-gray-800 pb-2 px-2">
                Luxury
              </button>
            </div> */}
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
          ) : bestSellers.length > 0 ? (
            <>
              {/* Best Sellers Grid - First 4 products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
                {bestSellers.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/accessories/all-products/${product.id}`}
                      className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                        {product.featured === true && (
                          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
                            HOT
                          </div>
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{product.rating || "4.8"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-gray-800">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No products available</p>
            </div>
          )}
        </div>
      </section>
      <Fragment>
        <div className='flex justify-center pb-12'>
          <Link href={"/accessories/all-products?category=Jewellery"}>
            <button
              className="group relative md:px-10 px-4 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
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

      {/* Jewellery Categories Section */}
      <section className="md:py-12 py-4 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Jewellery <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">collection</span>
            </h2>
            <p className="text-neutral-700 md:text-lg text-sm tracking-widest uppercase mb-2">
              Discover our stunning range of jewellery crafted to perfection for your special moments
            </p>
          </div>

          {/* Jewellery Collection Grid - Remaining products */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : jewelleryCollection.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
                {jewelleryCollection.map((category) => {
                  const images = Array.isArray(category.images)
                    ? category.images
                    : JSON.parse(category.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={category.id}
                      href={`/accessories/all-products/${category.id}`}
                      className="group relative bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                        {category.feature === true && (
                          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-sm z-10">
                            NEW
                          </div>
                        )}

                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(category.id);
                          }}
                          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10 hover:bg-rose-50 transition-colors"
                          aria-label="Add to favorites"
                        >
                          <Heart
                            size={18}
                            className={
                              favorites.includes(category.id)
                                ? "text-rose-500 fill-rose-500"
                                : "text-gray-600"
                            }
                          />
                        </button>

                        <img
                          src={mainImage}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
                          {category.name}
                        </h3>

                        <div className="flex items-center gap-1 mb-3">
                          <Star size={14} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">{category.rating || "4.8"}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-gray-800">
                            {formatINR(category.price)}
                          </span>
                          {category.mrp && category.mrp > category.price && (
                            <>
                              <span className="text-sm text-gray-400 line-through">
                                {formatINR(category.mrp)}
                              </span>
                              <span className="text-sm text-red-500 font-medium">
                                -{category.discount}%
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
        </div>
      </section>
      <Fragment>
        <div className='flex justify-center pb-16'>
          <Link href={'/accessories/all-products?category=Jewellery&subCategory=Trending Collection'}>
            <button
              className="group relative md:px-10 px-4 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
            >
              {/* Background slide effect */}
              <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

              {/* Button text */}
              <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                Dicosver our Collection
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

      {/* Collections Section (Static) */}
      <section className="md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Discover <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Our Range</span>
            </h2>
            <p className="text-neutral-700 md:text-lg text-sm tracking-widest uppercase mb-2">Where elegance meets sparkle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={collection.category}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

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
    </div>
  );
};

export default Jewellery;
