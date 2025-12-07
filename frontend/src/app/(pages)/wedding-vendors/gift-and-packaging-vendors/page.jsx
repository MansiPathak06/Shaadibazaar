"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const GiftPackagingVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "return-gift",
      name: "Return Gift",
      image: "https://via.placeholder.com/200x200/FFB6C1/FFFFFF?text=Return+Gift",
      link: "/return-gift",
    },
    {
      id: "mehendi-favors",
      name: "Mehendi Favors",
      image: "https://via.placeholder.com/200x200/DDA0DD/FFFFFF?text=Mehendi+Favors",
      link: "/mehendi-favors",
    },
    {
      id: "haldi-token",
      name: "Haldi Token Gift",
      image: "https://via.placeholder.com/200x200/FFD700/FFFFFF?text=Haldi+Token",
      link: "/haldi-token-gift",
    },
    {
      id: "shagun-envelope",
      name: "Shagun Envelope",
      image: "https://via.placeholder.com/200x200/FF69B4/FFFFFF?text=Shagun+Envelope",
      link: "/shagun-envelope",
    },
    {
      id: "gift-packaging",
      name: "Gift Packaging",
      image: "https://via.placeholder.com/200x200/FFC0CB/FFFFFF?text=Gift+Packaging",
      link: "/gift-packaging",
    },
    {
      id: "trousseau-packing",
      name: "Trousseau Packing",
      image: "https://via.placeholder.com/200x200/E6B8E8/FFFFFF?text=Trousseau+Pack",
      link: "/trousseau-packing",
    },
    {
      id: "basket-tray",
      name: "Basket & Tray Decor",
      image: "https://via.placeholder.com/200x200/F8B8D0/FFFFFF?text=Basket+Tray",
      link: "/basket-tray-decor",
    },
    {
      id: "dry-fruit-box",
      name: "Dry Fruit Box",
      image: "https://via.placeholder.com/200x200/FFB347/FFFFFF?text=Dry+Fruit+Box",
      link: "/dry-fruit-box",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "return-gift",
      name: "Return Gift Vendor",
      description:
        "Thoughtful and unique return gifts that leave lasting impressions on your guests with personalized touches",
      image: "https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Return+Gift",
    },
    {
      id: 2,
      category: "mehendi-favors",
      name: "Mehendi Favors Vendor",
      description:
        "Beautiful mehendi ceremony favors with traditional designs and elegant packaging for your special celebration",
      image: "https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Mehendi+Favors",
    },
    {
      id: 3,
      category: "haldi-token",
      name: "Haldi Token Gift Vendor",
      description:
        "Charming haldi ceremony token gifts crafted with care to mark this auspicious pre-wedding ritual",
      image: "https://via.placeholder.com/400x300/FFD700/FFFFFF?text=Haldi+Token",
    },
    {
      id: 4,
      category: "shagun-envelope",
      name: "Shagun Envelope Designer",
      description:
        "Exquisite custom-designed shagun envelopes with intricate patterns and premium materials for gifting",
      image: "https://via.placeholder.com/400x300/FF69B4/FFFFFF?text=Shagun+Envelope",
    },
    {
      id: 5,
      category: "gift-packaging",
      name: "Bride & Groom Gift Packaging Artist",
      description:
        "Luxurious and artistic gift packaging for the bride and groom with elegant presentation and style",
      image: "https://via.placeholder.com/400x300/FFC0CB/FFFFFF?text=Gift+Packaging",
    },
    {
      id: 6,
      category: "trousseau-packing",
      name: "Trousseau Packing Vendor",
      description:
        "Professional trousseau packing services with beautiful arrangements and traditional presentation styles",
      image: "https://via.placeholder.com/400x300/E6B8E8/FFFFFF?text=Trousseau+Pack",
    },
    {
      id: 7,
      category: "basket-tray",
      name: "Basket & Tray Decor Vendor",
      description:
        "Stunning decorative baskets and trays for presenting gifts and sweets with artistic floral arrangements",
      image: "https://via.placeholder.com/400x300/F8B8D0/FFFFFF?text=Basket+Tray",
    },
    {
      id: 8,
      category: "dry-fruit-box",
      name: "Dry Fruit Box Vendor",
      description:
        "Premium dry fruit boxes with elegant designs and quality packaging perfect for gifting on special occasions",
      image: "https://via.placeholder.com/400x300/FFB347/FFFFFF?text=Dry+Fruit+Box",
    },
  ];

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (link) => {
    // In Next.js, you would use: router.push(link)
    console.log("Navigate to:", link);
    // For now, just showing an alert
    alert(`Navigating to ${link}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner with Video Background */}
      <div className="relative h-[50vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1764923082/downloaded-file_5_ihqnjd.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
            Gift & Packaging Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Wrap Your Love with Elegance and Style!
          </p>
        </div>
      </div>

      {/* Category Slider */}
      <div className="bg-white shadow-md py-8 top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative group">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex gap-6 animate-scroll hover:pause-animation"
              >
                {/* Original categories */}
                {categories.map((cat) => (
                  <button
                    key={`original-${cat.id}`}
                    onClick={() => handleCategoryClick(cat.link)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item"
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-rose-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-rose-500 transition-colors">
                      {cat.name}
                    </span>
                  </button>
                ))}

                {/* Duplicate categories for seamless loop */}
                {categories.map((cat) => (
                  <button
                    key={`duplicate-${cat.id}`}
                    onClick={() => handleCategoryClick(cat.link)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item"
                  >
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-rose-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-rose-500 transition-colors">
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-rose-100 rounded-t-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative h-50 overflow-hidden group">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content + Button */}
              <div className="p-6 flex flex-col flex-1">
                {/* Text content takes available space */}
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-800 mb-3">
                    {vendor.name}
                  </h3>
                  <h3 className="text-sm font-normal text-gray-800 mb-3">
                    {vendor.description}
                  </h3>
                </div>

                {/* Button stays at bottom */}
                <button className="w-full mt-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
                  View All →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default GiftPackagingVendorsPage;