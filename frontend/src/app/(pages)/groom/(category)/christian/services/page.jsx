"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ChristianGroomServicesPage = () => {
const [currentSlide, setCurrentSlide] = useState(0);

// Hero slides data
const heroSlides = [
{
title: "Christian Groom Services",
subtitle: "Elegant Essentials For Your Sacred Vows",
image:
"https://i.pinimg.com/736x/5a/23/ca/5a23ca5b0bbc27ab70962c1d851136e1.jpg",
},
{
title: "Classic Wedding Styling",
subtitle: "Sharp Suits, Polished Looks, Confident Groom",
image:
"https://i.pinimg.com/1200x/6f/f7/cf/6ff7cf9f7d29e3acd8c19250f8e4ee54.jpg",
},
{
title: "Complete Christian Groom Package",
subtitle: "From Styling To Choir, All In One Place",
image:
"https://i.pinimg.com/736x/fd/26/cf/fd26cfb905083571d15d314af34f03d6.jpg",
},
];

// Groom services categories (from your image)
const categories = [
{
name: "Groom Styling",
items: "Suit, accessories & overall look",
image:
"https://i.pinimg.com/736x/5a/23/ca/5a23ca5b0bbc27ab70962c1d851136e1.jpg",
},
{
name: "Suit Fitting",
items: "Tailored suits & alterations",
image:
"https://i.pinimg.com/736x/28/ac/3b/28ac3b55d55fc14e93dcadab7eb4f291.jpg",
},
{
name: "Groom Portrait Shoot",
items: "Solo, family & couple portraits",
image:
"https://i.pinimg.com/1200x/35/3b/82/353b8244c5eb8853f9289907bb1702d2.jpg",
},
{
name: "Choir / Band",
items: "Church choir & live band",
image:
"https://i.pinimg.com/736x/47/43/ab/4743abc283cb05907a2a13967cc87322.jpg",
},
];

// Featured / trending style services
const trendingServices = [
{
name: "Groom Styling Session",
price: "₹9,999",
oldPrice: "₹12,999",
badge: "POPULAR",
image:
"https://i.pinimg.com/736x/06/b8/cb/06b8cba05a56695e10fa2b8f41c96c65.jpg",
},
{
name: "Premium Suit Fitting",
price: "₹6,999",
image:
"https://i.pinimg.com/736x/5c/5a/d0/5c5ad0f09d6ca26783f3b22be13736e8.jpg",
},
{
name: "Groom Portrait Shoot",
price: "₹19,999",
badge: "NEW",
image:
"https://i.pinimg.com/736x/d1/54/c5/d154c5f5a7e310dcdb91971f7245b978.jpg",
},
{
name: "Complete Christian Groom Package",
price: "₹39,999",
oldPrice: "₹49,999",
badge: "20% OFF",
image:
"https://i.pinimg.com/1200x/2c/d2/19/2cd219e170cc9991a32720acb9d5c461.jpg",
},
{
name: "Classic Suit + Accessories",
price: "₹14,999",
image:
"https://i.pinimg.com/736x/f8/fa/b7/f8fab7c8959825792517caabb40c9102.jpg",
},
{
name: "Church Choir Service",
price: "₹24,999",
oldPrice: "₹29,999",
badge: "TRENDING",
image:
"https://i.pinimg.com/736x/04/65/8f/04658f180cb0ac3aa233317b9dfff6a7.jpg",
},
{
name: "Wedding Band (Reception)",
price: "₹32,999",
badge: "NEW",
image:
"https://i.pinimg.com/1200x/ca/bf/f5/cabff5d5049cf1d7fbc65426239538fd.jpg",
},
{
name: "Pre-Wedding Portrait Session",
price: "₹15,999",
image:
"https://i.pinimg.com/1200x/ae/c2/7b/aec27b164fa12b92748ffa1dfe02356b.jpg",
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
<img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
<div className="max-w-7xl mx-auto px-8 w-full">
<div className="max-w-md">
<p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
CHRISTIAN GROOM SERVICES
</p>
<h1 className="text-5xl font-light text-gray-800 mb-4">
{slide.title}
</h1>
<p className="text-gray-600 mb-6">{slide.subtitle}</p>
<button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors">
BOOK NOW
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
            currentSlide === index ? "bg-orange-600 w-8" : "bg-white/60"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Popular Categories Section with Scrolling */}
  <div className="py-16 bg-gray-50">
    <div className="max-w-full mx-auto px-8">
      <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
        Groom Services
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
          src="https://i.pinimg.com/1200x/7f/4b/31/7f4b31d01b321894de86819d9a02c6cb.jpg"
          alt="Christian Groom Styling"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white text-2xl font-light mb-2">
            Elegant Groom Styling
          </h3>
          <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
            BOOK NOW
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <img
          src="https://i.pinimg.com/1200x/06/7f/d4/067fd4c520b3eabef52ae39700591352.jpg"
          alt="Choir and Band Services"
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-white text-2xl font-light mb-2">
            Premium Choir & Band
          </h3>
          <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Trending Services */}
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
        Featured Christian Groom Services
      </h2>
      <div className="flex justify-center gap-4 mb-12">
        <button className="text-orange-600 border-b-2 border-orange-600 pb-2">
          FEATURED
        </button>
        <button className="text-gray-500 hover:text-gray-800 pb-2">
          MOST POPULAR
        </button>
        <button className="text-gray-500 hover:text-gray-800 pb-2">
          BEST SELLERS
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {trendingServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="relative overflow-hidden">
              {service.badge && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                  {service.badge}
                </div>
              )}
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-md text-gray-800 mb-2">
                {service.name}
              </h3>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-medium text-gray-800">
                  Click here to explore more!
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="group mt-12 relative inline-flex items-center gap-3 bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <span>VIEW ALL ITEMS</span>
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

export default ChristianGroomServicesPage;