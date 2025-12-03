"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChristianBridalJewelleryPage = () => {
const [currentSlide, setCurrentSlide] = useState(0);

// Hero slides data (Christian bride focused)
const heroSlides = [
{
title: "Elegant Christian Bridal Jewellery",
subtitle: "Necklaces | Earrings | Bracelets | Tiaras | Rings",
image:
"https://i.pinimg.com/736x/4d/41/00/4d410002514c0de148970724c507dadc.jpg",
},
{
title: "Graceful White-Gown Sets",
subtitle: "Minimal, classy and timeless pieces for church weddings",
image:
"https://i.pinimg.com/1200x/48/b6/af/48b6af99941cf25e19eecc7e73d076ac.jpg",
},
{
title: "Diamond & Pearl Highlights",
subtitle: "Subtle sparkle to complement your bridal veil",
image:
"https://i.pinimg.com/736x/6b/a3/30/6ba330be3271d9c3a4d003634df26dca.jpg",
},
];

// Christian bridal jewellery categories
const categories = [
{
name: "Earrings",
items: "24 Items",
image:
"https://i.pinimg.com/736x/2d/92/67/2d9267e1b41c1ed144a2c214b98d9882.jpg",
},
{
name: "Necklace",
items: "18 Items",
image:
"https://i.pinimg.com/736x/13/2b/52/132b529955979ef1d5c31987126f110e.jpg",
},
{
name: "Bracelet",
items: "20 Items",
image:
"https://i.pinimg.com/736x/a3/d0/6e/a3d06e3844834b663f494314715798b7.jpg",
},
{
name: "Tiara Accessories",
items: "10 Items",
image:
"https://i.pinimg.com/736x/17/58/c7/1758c7b1c56ea1db1c412446bc6f04a7.jpg",
},
{
name: "Rings",
items: "30 Items",
image:
"https://i.pinimg.com/1200x/64/3c/0c/643c0c918f71c73cfa3860a418b2d03e.jpg",
},
];

// Trending products (Christian bride themed)
const trendingProducts = [
{
name: "Pearl Drop Earrings",
price: "₹9,999",
oldPrice: "₹12,999",
badge: "NEW",
image:
"https://i.pinimg.com/736x/4d/de/6c/4dde6c20977077e2fa375aa7a5ff71a9.jpg",
},
{
name: "Delicate Cross Necklace",
price: "₹14,999",
image:
"https://i.pinimg.com/1200x/04/d5/b4/04d5b48911c3af2679d714465628d149.jpg",
},
{
name: "Crystal Bridal Tiara",
price: "₹7,999",
image:
"https://i.pinimg.com/1200x/29/d9/4e/29d94e9df797fe543f46f89e6bf64f13.jpg",
},
{
name: "Tennis Bracelet",
price: "₹11,999",
oldPrice: "₹15,999",
badge: "NEW",
image:
"https://i.pinimg.com/1200x/16/02/fb/1602fb52cad5459a2d7c20fa9643174d.jpg",
},
{
name: "Solitaire Engagement Ring",
price: "₹19,999",
image:
"https://i.pinimg.com/1200x/2b/87/74/2b8774e9c44f664a217c8595aada50f0.jpg",
},
{
name: "Bridal Necklace & Earrings Set",
price: "₹32,999",
oldPrice: "₹39,999",
badge: "15% OFF",
image:
"https://i.pinimg.com/1200x/28/00/ef/2800ef7b1be2e5390c09ba30e9d959b3.jpg",
},
{
name: "Minimal Wedding Band",
price: "₹8,999",
image:
"https://i.pinimg.com/1200x/d5/29/b4/d529b463cab93e8d2562018d8f893467.jpg",
},
{
name: "Vintage Style Tiara",
price: "₹15,999",
oldPrice: "₹19,999",
badge: "NEW",
image:
"https://i.pinimg.com/1200x/92/ff/26/92ff26c4e2e71c4bc4133f883229c984.jpg",
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
<button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors">
SHOP NOW
</button>
</div>
</div>
</div>
</div>
))}
</div>

text
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

  {/* Popular Categories Section with Scrolling */}
  <div className="py-16 bg-gray-50">
    <div className="max-w-full mx-auto px-8">
      <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
        Popular Christian Bridal Categories
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-8">
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Featured Collections */}
  <div className="max-w-7xl mx-auto px-8 py-16">
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <img
          src="https://i.pinimg.com/1200x/5d/12/ae/5d12aed9a8ed0258ad94e50dd500c589.jpg"
          alt="Church Ceremony Sets"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white text-2xl font-light mb-2">
            Church Ceremony Jewellery Sets
          </h3>
          <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <img
          src="https://i.pinimg.com/736x/94/c6/0b/94c60bd0033acaa87a177bb01194bd05.jpg"
          alt="Diamond & Pearl Bracelets"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white text-2xl font-light mb-2">
            Diamond & Pearl Bracelets
          </h3>
          <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Trending Products */}
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
          <div
            key={index}
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
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <span>EXPLORE FULL COLLECTION</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
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