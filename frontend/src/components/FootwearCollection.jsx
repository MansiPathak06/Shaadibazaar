"use client";

import React from "react";
import Link from "next/link";

const FootwearCollection = () => {
  const featuredBrands = [
    {
      title: "Steve Madden",
      description: "A trendy global footwear brand known for its bold, fashion-forward designs that blend street style with chic sophistication.",
      image: "https://i.pinimg.com/736x/50/08/bd/5008bd630bddce99fd84cffadfc88b84.jpg",
      link: "/footwear/steve-madden",
      tag: "Trending",
    },
    {
      title: "Aldo",
      description: "This classic shape and pretty color make for a chic, yet sophisticated look.",
      image: "https://i.pinimg.com/736x/bc/1b/9e/bc1b9eb0a748ec71453263fec5150750.jpg",
      link: "/footwear/aldo",
      tag: "New Arrival",
    },
    {
      title: "Bata",
      description: "A trusted global footwear brand offering affordable, durable, and comfortable shoes for everyday wear.",
      image: "https://i.pinimg.com/1200x/6f/d8/47/6fd84769968ae5a835efaff6a1ed1bae.jpg",
      link: "/footwear/bata",
      tag: "Best Seller",
    },
  ];

  const categories = [
    {
      name: "Heels",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400",
      link: "/footwear/heels",
      count: "120+ Styles"
    },
    {
      name: "Flats",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400",
      link: "/footwear/flats",
      count: "95+ Styles"
    },
    {
      name: "Sandals",
      image: "https://plus.unsplash.com/premium_photo-1676225678979-80df276a983e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZGFsc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "/footwear/sandals",
      count: "80+ Styles"
    },
    {
      name: "Boots",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400",
      link: "/footwear/boots",
      count: "65+ Styles"
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white via-rose-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero Section with Modern Typography */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-rose-500 text-sm font-semibold tracking-[0.3em] uppercase">
              Premium Collection
            </span>
          </div>
          <h1 className="text-6xl md:text-4xl lg:text-5xl font-serif  text-gray-900 mb-6">
            Step Into <span className="text-rose-500">Elegance</span>

          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover luxury footwear from world-renowned brands, crafted for style and comfort
          </p>
        </div>

        {/* Featured Brands - Asymmetric Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredBrands.map((brand, index) => (
            <Link
              key={index}
              href={brand.link}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              {/* Image Container */}
              <div className={`relative ${index === 0 ? "h-[600px]" : "h-[290px]"} overflow-hidden`}>
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className="bg-rose-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                    {brand.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">
                    {brand.title}
                  </h3>
                  <p className={`text-gray-200 text-sm md:text-base leading-relaxed mb-4 ${index === 0 ? "block" : "hidden md:block"
                    }`}>
                    {brand.description}
                  </p>

                  {/* Shop Button */}
                  <div className="inline-flex items-center text-white font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    <span>Shop Now</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Shop by Category Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-10">
            <div className="text-center ">
              <div className="inline-block mb-4">
                <span className="text-rose-500 text-sm font-semibold tracking-[0.3em] uppercase">
                  Step into your style
                </span>
              </div>
              <h1 className="text-6xl md:text-4xl lg:text-5xl font-serif  text-gray-900 mb-6">
                Find Your <span className="text-rose-500">Category</span>

              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                Step into comfort and style with every category.
              </p>
            </div>

            <Link
              href="/footwear/all"
              className="hidden md:inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 font-semibold group"
            >
              View All
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Category Grid with Hover Effects */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-2xl font-bold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{category.count}</p>

                    {/* Animated Underline */}
                    <div className="w-12 h-1 bg-rose-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FootwearCollection;
