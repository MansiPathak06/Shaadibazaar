"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ChristianBridalJewelleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data (Christian bride focused)
  const heroSlides = [
    {
      title: "Elegant Christian Bridal Jewellery",
      subtitle: "Necklaces | Earrings | Bracelets | Tiaras | Rings",
      image:
        "https://i.pinimg.com/1200x/69/5f/b8/695fb85839f60ca27ec8d915896a98d6.jpg",
    },
    {
      title: "Graceful White-Gown Sets",
      subtitle: "Minimal, classy and timeless pieces for church weddings",
      image:
        "https://i.pinimg.com/736x/49/8b/ca/498bca1d8ef9878ceac8def935bfea45.jpg",
    },
    {
      title: "Diamond & Pearl Highlights",
      subtitle: "Subtle sparkle to complement your bridal veil",
      image:
        "https://i.pinimg.com/474x/57/6c/b3/576cb37dd7a4acf8c550334f23389413.jpg",
    },
  ];

  // Christian bridal jewellery categories
  const categories = [
    {
      name: "Earrings",
      subCategory: "Earrings",
      items: "24 Items",
      image:
        "https://i.pinimg.com/736x/d3/9a/cc/d39accabd3b130b7e47094dbfc3f4370.jpg",
    },
    {
      name: "Necklace",
      subCategory: "Necklace",
      items: "18 Items",
      image:
        "https://i.pinimg.com/736x/4e/a7/f2/4ea7f21a04152614999d2d1fb6f0e268.jpg",
    },
    {
      name: "Bracelet",
      subCategory: "Bracelet",
      items: "20 Items",
      image:
        "https://i.pinimg.com/736x/ef/7e/8e/ef7e8e7b8b435196b51552a13b24c1ad.jpg",
    },
    {
      name: "Tiara Accessories",
      subCategory: "Tiara Accessories",
      items: "10 Items",
      image:
        "https://i.pinimg.com/1200x/a6/d1/4c/a6d14c94023bd3bcf3832e2f13257064.jpg",
    },
    {
      name: "Rings",
      subCategory: "Rings",
      items: "30 Items",
      image:
        "https://i.pinimg.com/736x/cf/59/df/cf59df021d91cf26bc12720da5531b35.jpg",
    },
  ];

  // Trending products (Christian bride themed)
  const trendingProducts = [
    {
      name: "Pearl Drop Earrings",
      subCategory: "Earrings",
      price: "₹9,999",
      oldPrice: "₹12,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/76/8d/c3/768dc3cfbe53d9d7cf6081fc9b4a3b94.jpg",
    },
    {
      name: "Delicate Cross Necklace",
      subCategory: "Necklace",
      price: "₹14,999",
      image:
        "https://i.pinimg.com/1200x/5f/b2/10/5fb210a3c78608b1b4c0a22bd8bf399c.jpg",
    },
    {
      name: "Crystal Bridal Tiara",
      subCategory: "Tiara Accessories",
      price: "₹7,999",
      image:
        "https://i.pinimg.com/1200x/26/fe/46/26fe465eef4a9805f164ffa4d6cf4836.jpg",
    },
    {
      name: "Tennis Bracelet",
      subCategory: "Bracelet",
      price: "₹11,999",
      oldPrice: "₹15,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/c2/bd/7f/c2bd7f19075fac81e6e32a8098b81a7b.jpg",
    },
    {
      name: "Solitaire Engagement Ring",
      subCategory: "Rings",
      price: "₹19,999",
      image:
        "https://i.pinimg.com/1200x/a9/c5/84/a9c5846ccbc282a384e4fcb3b54f4d01.jpg",
    },
    {
      name: "Bridal Necklace & Earrings Set",
      subCategory: "Necklace",
      price: "₹32,999",
      oldPrice: "₹39,999",
      badge: "15% OFF",
      image:
        "https://i.pinimg.com/736x/ee/ec/88/eeec88a876536c9c68b879e9e3dab0dc.jpg",
    },
    {
      name: "Minimal Wedding Band",
      subCategory: "Rings",
      price: "₹8,999",
      image:
        "https://i.pinimg.com/736x/ae/3c/7e/ae3c7ed39e7c9a4326f930a6245ccc03.jpg",
    },
    {
      name: "Vintage Style Tiara",
      subCategory: "Tiara Accessories",
      price: "₹15,999",
      oldPrice: "₹19,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/ae/28/4d/ae284d12f8cbd524a935d2eee292bb2f.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-[250px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      Christian Bridal Collection
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <Link
                      href="/bride/all-products?category=christian-jewellery"
                      className="inline-block bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-amber-600 w-8" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories Section with Scrolling - NOW CLICKABLE */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Popular Christian Bridal Categories
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <Link
                  key={index}
                  href={`/bride/all-products?category=jewellery&subCategory=${encodeURIComponent(
                    category.subCategory
                  )}`}
                  className="flex-shrink-0 w-40 text-center group cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {category.name.toUpperCase()}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections - NOW CLICKABLE */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/bride/all-products?category=jewellery"
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/736x/02/e3/00/02e3004572e79efe256032b8fa8be2e6.jpg"
              alt="Church Ceremony Sets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Church Ceremony Jewellery Sets
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </span>
            </div>
          </Link>

          <Link
            href="/bride/all-products?category=jewellery&subCategory=Bracelet"
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/1200x/3e/ab/5b/3eab5b74a9ec03672e6bfcd58025ff37.jpg"
              alt="Diamond & Pearl Bracelets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Diamond & Pearl Bracelets
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Trending Products - NOW CLICKABLE */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Trending Christian Bridal Pieces
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              TOP SELLING
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST SELLER
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <Link
                key={index}
                href={`/bride/all-products?category=jewellery&subCategory=${encodeURIComponent(
                  product.subCategory
                )}`}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-base font-semibold text-gray-900">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/bride/all-products?category=jewellery"
              className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>EXPLORE FULL COLLECTION</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ChristianBridalJewelleryPage;
