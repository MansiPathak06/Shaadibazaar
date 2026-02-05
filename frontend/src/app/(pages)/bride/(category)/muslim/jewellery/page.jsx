"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const BridalJewelleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Gold Earrings For Women",
      subtitle: "Bridal Jewelry | Necklaces | Earrings | Bangles",
      image:
        "https://i.pinimg.com/736x/4d/41/00/4d410002514c0de148970724c507dadc.jpg",
    },
    {
      title: "Elegant Bridal Sets",
      subtitle: "Complete Your Wedding Look",
      image:
        "https://i.pinimg.com/1200x/48/b6/af/48b6af99941cf25e19eecc7e73d076ac.jpg",
    },
    {
      title: "Traditional Ornaments",
      subtitle: "Timeless Beauty For Your Special Day",
      image:
        "https://i.pinimg.com/736x/6b/a3/30/6ba330be3271d9c3a4d003634df26dca.jpg",
    },
  ];

  // Bridal jewellery categories - ONLY the 10 you specified
  const categories = [
    {
      name: "Maang Tikka / Jhoomar",
      subCategory: "Maang Tikka / Jhoomar",
      image:
        "https://i.pinimg.com/736x/2d/92/67/2d9267e1b41c1ed144a2c214b98d9882.jpg",
    },
    {
      name: "Nath",
      subCategory: "Nath",
      image:
        "https://i.pinimg.com/736x/a3/d0/6e/a3d06e3844834b663f494314715798b7.jpg",
    },
    {
      name: "Necklace set",
      subCategory: "Necklace set",
      image:
        "https://i.pinimg.com/1200x/64/3c/0c/643c0c918f71c73cfa3860a418b2d03e.jpg",
    },
    {
      name: "Earrings",
      subCategory: "Earrings",
      image:
        "https://i.pinimg.com/736x/17/58/c7/1758c7b1c56ea1db1c412446bc6f04a7.jpg",
    },
    {
      name: "Bangles",
      subCategory: "Bangles",
      image:
        "https://i.pinimg.com/736x/62/68/6d/62686d5cb53b10a8adc8f10444e5bd97.jpg",
    },
    {
      name: "Hathphool",
      subCategory: "Hathphool",
      image:
        "https://i.pinimg.com/1200x/ec/f7/f3/ecf7f351488ad7d491f3e489e4010522.jpg",
    },
    {
      name: "Payal",
      subCategory: "Payal",
      image:
        "https://i.pinimg.com/1200x/76/6c/13/766c13a92cf490892d04e4af08467364.jpg",
    },
    {
      name: "Rings",
      subCategory: "Rings",
      image:
        "https://i.pinimg.com/736x/e7/c9/6a/e7c96a61cb18721b966bb15efa783386.jpg",
    },
    {
      name: "Nose studs",
      subCategory: "Nose studs",
      image:
        "https://i.pinimg.com/736x/34/26/78/3426789864cdaa1ddeec8a14fa51ecc7.jpg",
    },
    {
      name: "Hair jewellery",
      subCategory: "Hair jewellery",
      image:
        "https://i.pinimg.com/1200x/a5/ab/5b/a5ab5bf58783ccd2c6c1ab62693fa76c.jpg",
    },
  ];

  // Trending products - ONLY the 10 you specified
  const trendingProducts = [
    {
      name: "Maang Tikka / Jhoomar",
      subCategory: "Maang Tikka / Jhoomar",
      price: "₹15,999",
      oldPrice: "₹19,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/4d/de/6c/4dde6c20977077e2fa375aa7a5ff71a9.jpg",
    },
    {
      name: "Nath",
      subCategory: "Nath",
      price: "₹8,999",
      image:
        "https://i.pinimg.com/1200x/29/d9/4e/29d94e9df797fe543f46f89e6bf64f13.jpg",
    },
    {
      name: "Necklace set",
      subCategory: "Necklace set",
      price: "₹9,999",
      image:
        "https://i.pinimg.com/1200x/2b/87/74/2b8774e9c44f664a217c8595aada50f0.jpg",
    },
    {
      name: "Earrings",
      subCategory: "Earrings",
      price: "₹12,999",
      oldPrice: "₹16,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/16/02/fb/1602fb52cad5459a2d7c20fa9643174d.jpg",
    },
    {
      name: "Bangles",
      subCategory: "Bangles",
      price: "₹18,999",
      image:
        "https://i.pinimg.com/1200x/d5/29/b4/d529b463cab93e8d2562018d8f893467.jpg",
    },
    {
      name: "Hathphool",
      subCategory: "Hathphool",
      price: "₹15,999",
      oldPrice: "₹19,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/92/ff/26/92ff26c4e2e71c4bc4133f883229c984.jpg",
    },
    {
      name: "Payal",
      subCategory: "Payal",
      price: "₹45,999",
      oldPrice: "₹55,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/736x/1d/3d/e3/1d3de37008b9d3e12cecc5f7e3d6943d.jpg",
    },
    {
      name: "Rings",
      subCategory: "Rings",
      price: "₹12,999",
      oldPrice: "₹16,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/3d/df/87/3ddf873b5808177eb379f3369c5407c8.jpg",
    },
    {
      name: "Nose studs",
      subCategory: "Nose studs",
      price: "₹8,999",
      image:
        "https://i.pinimg.com/736x/e2/24/76/e2247687f8b0e7f829f2ea27423e17f7.jpg",
    },
    {
      name: "Hair jewellery",
      subCategory: "Hair jewellery",
      price: "₹9,999",
      image:
        "https://i.pinimg.com/736x/ae/39/ba/ae39ba62847db7c717954ebc471db95d.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
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
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      BRIDAL COLLECTION
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <Link
                      href="/bride/all-products?category=jewellery"
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
            Popular Categories
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <Link
                  key={index}
                  href={`/bride/all-products?category=jewellery&subCategory=${encodeURIComponent(
                    category.subCategory
                  )}`}
                  className="shrink-0 w-40 text-center group cursor-pointer"
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

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/bride/all-products?category=jewellery"
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/1200x/5d/12/ae/5d12aed9a8ed0258ad94e50dd500c589.jpg"
              alt="Traditional Sets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Traditional Bridal Sets
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </span>
            </div>
          </Link>

          <Link
            href="/bride/all-products?category=jewellery"
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/736x/94/c6/0b/94c60bd0033acaa87a177bb01194bd05.jpg"
              alt="Gold Filled Bracelets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Best Gold Filled Bracelets
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
            Trending Products
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

export default BridalJewelleryPage;
