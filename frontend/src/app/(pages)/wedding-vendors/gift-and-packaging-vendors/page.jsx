// frontend/src/app/(pages)/wedding-vendors/gift-and-packaging-vendors/page.jsx
"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const GiftPackagingVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "return-gift",
      name: "Return Gift",
      image: "https://i.pinimg.com/736x/e5/8f/76/e58f76c8a0a8e8d6c3b0f3e0e4e1c5e5.jpg",
    },
    {
      id: "mehendi-favors",
      name: "Mehendi Favors",
      image: "https://i.pinimg.com/736x/7d/3e/8a/7d3e8a8c9f3d8e4f3c1b2a9d8e7f6c5d.jpg",
    },
    {
      id: "haldi-token",
      name: "Haldi Token Gift",
      image: "https://i.pinimg.com/736x/9b/2c/4d/9b2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e.jpg",
    },
    {
      id: "shagun-envelope",
      name: "Shagun Envelope",
      image: "https://i.pinimg.com/736x/3f/7e/2d/3f7e2d4c5b6a7e8f9d0c1b2a3e4f5d6c.jpg",
    },
    {
      id: "gift-packaging",
      name: "Gift Packaging",
      image: "https://i.pinimg.com/736x/8d/5c/3b/8d5c3b2a1f0e9d8c7b6a5f4e3d2c1b0a.jpg",
    },
    {
      id: "trousseau-packing",
      name: "Trousseau Packing",
      image: "https://i.pinimg.com/736x/6c/4d/2e/6c4d2e3f5a7b8c9d0e1f2a3b4c5d6e7f.jpg",
    },
    {
      id: "basket-tray",
      name: "Basket & Tray Decor",
      image: "https://i.pinimg.com/736x/2a/5b/8c/2a5b8c9d0e1f2a3b4c5d6e7f8a9b0c1d.jpg",
    },
    {
      id: "dry-fruit-box",
      name: "Dry Fruit Box",
      image: "https://i.pinimg.com/736x/1e/9f/7d/1e9f7d8c6b5a4e3d2c1b0a9f8e7d6c5b.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "return-gift",
      name: "Return Gift Vendor",
      description:
        "Thoughtful and unique return gifts that leave lasting impressions on your guests with personalized touches",
      image: "https://i.pinimg.com/1200x/a3/d4/5e/a3d45e6f7a8b9c0d1e2f3a4b5c6d7e8f.jpg",
    },
    {
      id: 2,
      category: "mehendi-favors",
      name: "Mehendi Favors Vendor",
      description:
        "Beautiful mehendi ceremony favors with traditional designs and elegant packaging for your special celebration",
      image: "https://i.pinimg.com/1200x/5b/7c/9d/5b7c9d0e1f2a3b4c5d6e7f8a9b0c1d2e.jpg",
    },
    {
      id: 3,
      category: "haldi-token",
      name: "Haldi Token Gift Vendor",
      description:
        "Charming haldi ceremony token gifts crafted with care to mark this auspicious pre-wedding ritual",
      image: "https://i.pinimg.com/1200x/8f/2d/6c/8f2d6c5b4a3e2d1c0b9a8f7e6d5c4b3a.jpg",
    },
    {
      id: 4,
      category: "shagun-envelope",
      name: "Shagun Envelope Designer",
      description:
        "Exquisite custom-designed shagun envelopes with intricate patterns and premium materials for gifting",
      image: "https://i.pinimg.com/1200x/7d/9e/3f/7d9e3f2c1b0a9f8e7d6c5b4a3e2d1c0b.jpg",
    },
    {
      id: 5,
      category: "gift-packaging",
      name: "Bride & Groom Gift Packaging Artist",
      description:
        "Luxurious and artistic gift packaging for the bride and groom with elegant presentation and style",
      image: "https://i.pinimg.com/1200x/4c/8d/2e/4c8d2e5f7a9b0c1d2e3f4a5b6c7d8e9f.jpg",
    },
    {
      id: 6,
      category: "trousseau-packing",
      name: "Trousseau Packing Vendor",
      description:
        "Professional trousseau packing services with beautiful arrangements and traditional presentation styles",
      image: "https://i.pinimg.com/1200x/9e/3d/7f/9e3d7f8c6b5a4e3d2c1b0a9f8e7d6c5b.jpg",
    },
    {
      id: 7,
      category: "basket-tray",
      name: "Basket & Tray Decor Vendor",
      description:
        "Stunning decorative baskets and trays for presenting gifts and sweets with artistic floral arrangements",
      image: "https://i.pinimg.com/1200x/2f/6c/9d/2f6c9d0e1f2a3b4c5d6e7f8a9b0c1d2e.jpg",
    },
    {
      id: 8,
      category: "dry-fruit-box",
      name: "Dry Fruit Box Vendor",
      description:
        "Premium dry fruit boxes with elegant designs and quality packaging perfect for gifting on special occasions",
      image: "https://i.pinimg.com/1200x/6b/4e/8d/6b4e8d9c0a1f2e3d4c5b6a7f8e9d0c1b.jpg",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    router.push(`/wedding-vendors/${categoryId}`);
  };

  const handleViewAllClick = (categoryId) => {
    router.push(`/wedding-vendors/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-1 text-gray-600 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Gift & Packaging Vendors</span>
          </nav>
        </div>
      </div>

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
        <div className="max-w-full mx-auto px-4">
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
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                  <h3 className="text-2xl font-medium text-gray-800 mb-3 text-center">
                    {vendor.name}
                  </h3>
                  <h3 className="text-sm font-normal text-gray-800 mb-3">
                    {vendor.description}
                  </h3>
                </div>

                {/* Button stays at bottom */}
                <button 
                  onClick={() => handleViewAllClick(vendor.category)}
                  className="w-full mt-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
                >
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
          animation: scroll 20s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default GiftPackagingVendorsPage;
