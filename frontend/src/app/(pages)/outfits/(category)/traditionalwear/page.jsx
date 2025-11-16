"use client";
import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star, Truck, Award, RefreshCcw, Package, Shield, Clock, Loader2 } from "lucide-react";

const CATEGORY_SLUG = "traditionalwear";

const TraditionalWear = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
      category: "/outfits/all-products?category=traditionalwear&subCategory=Bridal Lehenga"
    },
    {
      id: 2,
      title: "Designer Sarees",
      subtitle: "Don't Miss Out Now!",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839277/image2_tr6ksz.jpg",
      bgColor: "bg-amber-100",
      buttonText: "Shop Now!",
      category: "/outfits/all-products?category=traditionalwear&subCategory=Designer Saree"
    },
    {
      id: 3,
      title: "Bridal Jewelry",
      discount: "Save 30%",
      subtitle: "Collection 2025",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839277/image3_i7afoe.jpg",
      bgColor: "bg-purple-100",
      buttonText: "Shop Now!",
      category: "/accessories/all-products?category=Jewellery"
    },
  ];

  // Product Filters
  const bridalProductFilters = ["ALL", "NEW", "HOT", "BEST DEALS"];
  const groomProductFilters = ["ALL", "NEW", "HOT", "BEST DEALS"];

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
      discount: "Up to 40% OFF",
      category: "/outfits/bridalwear"
    },
    {
      id: 2,
      title: "Designer Sarees",
      description: "Traditional Elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839301/image17_ozybsl.jpg",
      discount: "Starting at $99",
      category: "/outfits/all-products?category=traditionalwear&subCategory=Designer Saree"
    }
  ];

  // NEW: Bridal Showcase Section
  const bridalShowcase = [
    {
      id: 1,
      title: "Red & Gold Bridal Collection",
      subtitle: "Traditional Masterpieces",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460091/traditional-women-wear-1_xvlfal.jpg",
      category: "/outfits/all-products?category=traditionalwear&subCategory=Bridal Collection"
    },
    {
      id: 2,
      title: "Designer Lehenga Range",
      subtitle: "Contemporary Bridal Wear",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460090/traditional-women-wear-2_jzyc1c.jpg",
      category: "/outfits/all-products?category=traditionalwear&subCategory=Lehenga"
    },
    {
      id: 3,
      title: "Silk Saree Collection",
      subtitle: "Timeless Elegance",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761460090/traditional-women-wear-3_js43lu.jpg",
      category: "/outfits/all-products?category=traditionalwear&subCategory=Silk Saree"
    },
  ];

  // NEW: Bridal Categories
  const bridalCategories = [
    {
      id: 1,
      name: "Bridal Lehengas",
      count: "250+ Designs",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839278/image4_r6twps.jpg",
      category_link: '/outfits/all-products?category=traditionalwear&subCategory=Bridal Lehengas'
    },
    {
      id: 2,
      name: "Wedding Sarees",
      count: "180+ Designs",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839284/image7_htstoj.jpg",
      category_link: '/outfits/all-products?category=traditionalwear&subCategory=Wedding Sarees'
    },
    {
      id: 3,
      name: "Bridal Jewelry",
      count: "300+ Pieces",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839309/image18_a3sdkd.jpg",
      category_link: '/accessories/jewellery'
    },

    {
      id: 4,
      name: "Designer Dupattas",
      count: "120+ Styles",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761839310/image19_qoe23c.jpg",
      category_link: '/outfits/all-products?category=traditionalwear&subCategory=Designer Dupattas'
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
        "http://localhost:5000/api/products?category=traditionalwear"
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
  const ALL_PRODUCTS_URL = "/outfits/all-products?category=traditionalwear";

  // Split products: Half for bridal, half for groom
  const midPoint = Math.ceil(realProducts.length / 2);
  const bridalProducts = realProducts.slice(0, midPoint);
  const groomProducts = realProducts.slice(midPoint);

  // Filter bridal products
  const filteredProducts = selectedFilter === "ALL"
    ? bridalProducts
    : bridalProducts.filter(product =>
      product.subcategory === selectedFilter ||
      product.tags?.includes(selectedFilter) ||
      product.featured && selectedFilter === "HOT"
    );

  // Filter groom products
  const filteredGroomProducts = selectedFilter === "ALL"
    ? groomProducts
    : groomProducts.filter(product =>
      product.subcategory === selectedFilter ||
      product.tags?.includes(selectedFilter) ||
      product.featured && selectedFilter === "HOT"
    );

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
              <Link href={"/outfits/all-products?category=traditionalwear&subCategory=Trending Collection"}>
                <button className="bg-transparent border-2 cursor-pointer border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-10  py-4 font-thin transition-all duration-300 flex items-center gap-3 rounded-lg shadow-md hover:shadow-xl">
                  <span>Shop Now!</span>
                  <span>→</span>
                </button>
              </Link>
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
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-16 md:pb-20">
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
                <h3 className="text-xl font-medium text-gray-800 mb-3">
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
            Bridal <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>showcase</span>
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
                  <Link href={item.category}>
                    <button className="bg-rose-500 hover:bg-rose-600 px-8 py-3 rounded-full font-thin cursor-pointer transition-all">
                      View Collection
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Fragment >
        <div className="flex justify-center w-full pt-18 pb-10">

          <Link href={"/outfits/all-products?category=traditionalwear"}>
            <button className="group/btn relative bg-linear-to-r from-rose-500 via-pink-500 to-orange-500 hover:from-rose-600 hover:via-pink-600 hover:to-orange-600 text-white px-14 md:px-20  py-5 md:py-10 cursor-pointer rounded-full font-medium md:text-3xl uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg overflow-hidden">
              <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>

              <span className="relative flex items-center gap-3">
                Shop Top Collection
                <svg className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </Fragment>

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
                  <Link href={card.category}>

                    <button className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white px-8 py-3 rounded-full font-thin transition-colors shadow-md">
                      {card.buttonText}
                    </button>

                  </Link>
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
            Shop By <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Category</span>
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Find What You Love, Faster</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bridalCategories.map((category) => (
            <Link href={category.category_link}>
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
            </Link>
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
                  <span className="bg-rose-500 px-4 py-2 rounded-full text-sm font-normal mb-4 inline-block">
                    {collection.discount}
                  </span>
                  <h3 className="text-4xl font-normal mb-3">{collection.title}</h3>
                  <p className="text-gray-200 mb-6 text-xl">{collection.description}</p>
                  <Link href={collection.category}>
                    <button className="text-white font-thin cursor-pointer hover:text-rose-400 transition-colors flex items-center gap-3 text-lg">
                      Explore Now <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section - BRIDAL */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-4 bg-gradient-to-b from-gray-50 to-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Bridal</span> Collection
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {filteredProducts.map((product) => {
                const images = Array.isArray(product.images)
                  ? product.images
                  : JSON.parse(product.images || "[]");
                const mainImage = images[0] || "/placeholder.jpg";

                return (
                  <Link
                    key={product.id}
                    href={`/outfits/all-products/${product.id}`}
                    className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Product Image */}
                    <div className="relative h-[450px] bg-gray-50 overflow-hidden">
                      {product.featured && (
                        <span className="absolute top-5 left-5 bg-rose-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                          HOT
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span className="absolute top-5 right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                          -{product.discount}%
                        </span>
                      )}
                      <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />

                      {/* Hover Action Buttons */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                        <div className="flex gap-4">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(product.id);
                            }}
                            className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-6 h-6 ${favorites.includes(product.id)
                                ? "text-rose-500 fill-rose-500"
                                : ""
                                }`}
                            />
                          </button>
                          <button
                            onClick={(e) => e.preventDefault()}
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
                        <Star size={16} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm text-gray-600 ml-2">
                          ({product.rating || "4.8"})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-rose-500">
                          {formatINR(product.price)}
                        </span>
                        {product.mrp && product.mrp > product.price && (
                          <span className="text-base text-gray-400 line-through">
                            {formatINR(product.mrp)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <Fragment>
              <div className='flex justify-center pt-20 pb-8'>
                <Link href={`/outfits/all-products?category=traditionalwear&subCategory=Bridal Collection`}>
                  <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                      View Bridal Collection
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

      {/* Groom all Products */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16  bg-linear-to-b from-gray-50 to-white rounded-3xl my-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Groom</span> Collection
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

        {/* Loading or Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {filteredGroomProducts.map((product) => {
                const images = Array.isArray(product.images)
                  ? product.images
                  : JSON.parse(product.images || "[]");
                const mainImage = images[0] || "/placeholder.jpg";

                return (
                  <Link
                    key={product.id}
                    href={`/outfits/all-products/${product.id}`}
                    className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-[450px] bg-gray-50 overflow-hidden">
                      {product.featured && (
                        <span className="absolute top-5 left-5 bg-rose-500 text-white px-4 py-2 rounded-full text-xs font-bold uppercase z-10 shadow-lg">
                          HOT
                        </span>
                      )}
                      {product.discount > 0 && (
                        <span className="absolute top-5 right-5 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold z-10 shadow-lg">
                          -{product.discount}%
                        </span>
                      )}
                      <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100">
                        <div className="flex gap-4">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(product.id);
                            }}
                            className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-6 h-6 ${favorites.includes(product.id)
                                ? "text-rose-500 fill-rose-500"
                                : ""
                                }`}
                            />
                          </button>
                          <button
                            onClick={(e) => e.preventDefault()}
                            className="bg-white p-4 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                            aria-label="Add to cart"
                          >
                            <ShoppingCart className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 min-h-[56px]">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-4">
                        <Star size={16} className="text-amber-400 fill-amber-400" />
                        <span className="text-sm text-gray-600 ml-2">
                          ({product.rating || "4.8"})
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-rose-500">
                          {formatINR(product.price)}
                        </span>
                        {product.mrp && product.mrp > product.price && (
                          <span className="text-base text-gray-400 line-through">
                            {formatINR(product.mrp)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <Fragment>
              <div className='flex justify-center pt-24'>
                <Link href={"/outfits/all-products?category=traditionalwear&subCategory=Groom Collection"}>
                  <button className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900">
                    <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
                      View Groom Collection
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

      {/* Additional Features Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 py-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-300/30 to-yellow-300/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Why <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Choose</span> Us
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Experience the perfect blend of quality, service, and authenticity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:blur-2xl"></div>

              <div className="relative w-full bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-transparent group-hover:-translate-y-2">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-500 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                  <div className="relative bg-linear-to-br from-rose-50 to-orange-50 group-hover:from-white group-hover:to-white rounded-full w-full h-full flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-12 h-12 text-rose-500 group-hover:text-rose-600 transition-all duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="text-2xl font-normal text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
                </p>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12 transform">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-16 h-1 w-full max-w-md mx-auto bg-linear-to-r from-transparent via-rose-300 to-transparent rounded-full"></div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-16 pb-20 ">
        <div className="relative bg-linear-to-r from-rose-100 via-orange-100 to-yellow-100 rounded-3xl p-16 md:p-20 text-center overflow-hidden shadow-2xl group">
          <div className="absolute top-0 right-0 w-72 h-72 bg-rose-300 rounded-full opacity-20 -mr-36 -mt-36 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-yellow-300 rounded-full opacity-20 -ml-28 -mb-28 animate-pulse delay-700"></div>

          <div className="absolute top-20 left-20 animate-bounce delay-300">
            <div className="w-3 h-3 bg-rose-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-32 right-32 animate-bounce delay-500">
            <div className="w-2 h-2 bg-orange-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-40 right-20 animate-bounce delay-1000">
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
          </div>

          <div className="absolute inset-0 bg-linear-to-br from-rose-200/20 via-transparent to-orange-200/20 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-normal text-gray-700 uppercase tracking-wider">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-thin mb-6 bg-linear-to-r from-gray-900 via-rose-700 to-orange-700 bg-clip-text text-transparent animate-fade-in-up">
              Discover More Bridal Collections
            </h2>

            <p className="text-gray-700 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Explore our extensive range of bridal lehengas, wedding sarees, and traditional wear
              for every occasion. <span className="font-medium text-rose-600">Make your special day unforgettable!</span>
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up delay-300">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-normal text-rose-600 mb-1">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Designs</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-normal text-orange-600 mb-1">50K+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Happy Customers</div>
              </div>
              <div className="w-px h-16 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-normal text-yellow-600 mb-1">4.9★</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
              <Link href={ALL_PRODUCTS_URL}>
                <button className="group/btn relative bg-linear-to-r from-rose-500 via-pink-500 to-orange-500 hover:from-rose-600 hover:via-pink-600 hover:to-orange-600 text-white px-14 md:px-20 cursor-pointer py-5 rounded-full font-medium uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg overflow-hidden">
                  <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>

                  <span className="relative flex items-center gap-3">
                    Shop All Collection
                    <svg className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

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

          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500"></div>
        </div>
      </section>
    </div>
  );
};

export default TraditionalWear;
