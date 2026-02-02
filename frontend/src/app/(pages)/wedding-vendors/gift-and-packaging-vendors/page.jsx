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
      image: "https://i.pinimg.com/736x/bd/5b/ee/bd5bee0a101bfc27b4cbe8548c11a96c.jpg",
    },
    {
      id: "mehendi-favors",
      name: "Mehendi Favors",
      image: "https://i.pinimg.com/736x/76/19/97/76199713092a488ae064700f964a1435.jpg",
    },
    {
      id: "haldi-token",
      name: "Haldi Token Gift",
      image: "https://i.pinimg.com/1200x/de/e9/74/dee9747d0d2fa0f1c95e4aa86961dfbd.jpg",
    },
    {
      id: "shagun-envelope",
      name: "Shagun Envelope",
      image: "https://i.pinimg.com/1200x/51/24/1c/51241c952404e7537c122399142cb7bb.jpg",
    },
    {
      id: "gift-packaging",
      name: "Gift Packaging",
      image: "https://i.pinimg.com/736x/11/cd/2f/11cd2f2c767775569bb191c6e701437d.jpg",
    },
    {
      id: "trousseau-packing",
      name: "Trousseau Packing",
      image: "https://i.pinimg.com/736x/b5/06/20/b50620eb3d32fa627742405490c3442d.jpg",
    },
    {
      id: "basket-tray",
      name: "Basket & Tray Decor",
      image: "https://i.pinimg.com/736x/fe/ad/44/fead44fb924a23039d14098fee6d4cc2.jpg",
    },
    {
      id: "dry-fruit-box",
      name: "Dry Fruit Box",
      image: "https://i.pinimg.com/736x/b5/29/e6/b529e6f8763d4e8fc7f78019b6210e39.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "return-gift",
      name: "Return Gift Vendor",
      description:
        "Thoughtful and unique return gifts that leave lasting impressions on your guests with personalized touches",
      image: "https://i.pinimg.com/736x/bd/5b/ee/bd5bee0a101bfc27b4cbe8548c11a96c.jpg",
    },
    {
      id: 2,
      category: "mehendi-favors",
      name: "Mehendi Favors Vendor",
      description:
        "Beautiful mehendi ceremony favors with traditional designs and elegant packaging for your special celebration",
      image: "https://i.pinimg.com/736x/76/19/97/76199713092a488ae064700f964a1435.jpg",
    },
    {
      id: 3,
      category: "haldi-token",
      name: "Haldi Token Gift Vendor",
      description:
        "Charming haldi ceremony token gifts crafted with care to mark this auspicious pre-wedding ritual",
      image: "https://i.pinimg.com/1200x/de/e9/74/dee9747d0d2fa0f1c95e4aa86961dfbd.jpg",
    },
    {
      id: 4,
      category: "shagun-envelope",
      name: "Shagun Envelope Designer",
      description:
        "Exquisite custom-designed shagun envelopes with intricate patterns and premium materials for gifting",
      image: "https://i.pinimg.com/1200x/51/24/1c/51241c952404e7537c122399142cb7bb.jpg",
    },
    {
      id: 5,
      category: "gift-packaging",
      name: "Bride & Groom Gift Packaging Artist",
      description:
        "Luxurious and artistic gift packaging for the bride and groom with elegant presentation and style",
      image: "https://i.pinimg.com/736x/11/cd/2f/11cd2f2c767775569bb191c6e701437d.jpg",
    },
    {
      id: 6,
      category: "trousseau-packing",
      name: "Trousseau Packing Vendor",
      description:
        "Professional trousseau packing services with beautiful arrangements and traditional presentation styles",
      image: "https://i.pinimg.com/736x/b5/06/20/b50620eb3d32fa627742405490c3442d.jpg",
    },
    {
      id: 7,
      category: "basket-tray",
      name: "Basket & Tray Decor Vendor",
      description:
        "Stunning decorative baskets and trays for presenting gifts and sweets with artistic floral arrangements",
      image: "https://i.pinimg.com/736x/fe/ad/44/fead44fb924a23039d14098fee6d4cc2.jpg",
    },
    {
      id: 8,
      category: "dry-fruit-box",
      name: "Dry Fruit Box Vendor",
      description:
        "Premium dry fruit boxes with elegant designs and quality packaging perfect for gifting on special occasions",
      image: "https://i.pinimg.com/736x/b5/29/e6/b529e6f8763d4e8fc7f78019b6210e39.jpg",
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
