// frontend/src/app/(pages)/wedding-vendors/catering-and-food-service-vendors/page.jsx
"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronRight as BreadcrumbArrow } from "lucide-react";

const CateringVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "full-catering",
      name: "Full Catering Service",
      image: "https://i.pinimg.com/736x/e5/19/ff/e519ffe5cba6baa9f4e400f8bae00460.jpg",
    },
    {
      id: "live-counters",
      name: "Live Counters Vendor",
      image: "https://i.pinimg.com/1200x/4f/b9/d8/4fb9d86fff5e345587603b4b8746a9ef.jpg",
    },
    {
      id: "sweet-shop",
      name: "Sweet Shop Vendor",
      image: "https://i.pinimg.com/736x/06/54/9b/06549b8109d1e550766bf750a4c81410.jpg",
    },
    {
      id: "halwai",
      name: "Halwai",
      image: "https://i.pinimg.com/1200x/5d/e1/85/5de185847b0ab191826cd44ee67515c8.jpg",
    },
    {
      id: "coffee-tea",
      name: "Coffee/Tea Stall",
      image: "https://i.pinimg.com/1200x/b1/89/51/b18951434d0980a585c3931a4165f04e.jpg",
    },
    {
      id: "fruit-stall",
      name: "Fruit Stall",
      image: "https://i.pinimg.com/736x/83/0f/e4/830fe437aaf4dec26bf59cf09e8f3c3f.jpg",
    },
    {
      id: "chocolate-fountain",
      name: "Chocolate Fountain",
      image: "https://i.pinimg.com/736x/c0/3c/96/c03c96c9b37b4c3c21fecb6c594d3f94.jpg",
    },
    {
      id: "ice-cream",
      name: "Ice Cream Counter",
      image: "https://i.pinimg.com/736x/55/09/0f/55090fd2a9321a625d85b016bfae3c89.jpg",
    },
    {
      id: "beverages",
      name: "Water & Beverage",
      image: "https://i.pinimg.com/1200x/36/92/4a/36924a7aad4d353e795d9ab1ba8711fe.jpg",
    },
    {
      id: "buffet-setup",
      name: "Buffet Setup & Staff",
      image: "https://i.pinimg.com/736x/99/91/c2/9991c20d1b47768922bcf8bd0e3c3acf.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "full-catering",
      name: "Full Catering Service",
      description:
        "Complete catering solutions with diverse menu options, professional service, and seamless execution for your grand celebration",
      image: "https://i.pinimg.com/1200x/c1/19/92/c11992607f0e64b51f63bba8fdad1ff5.jpg",
    },
    {
      id: 2,
      category: "live-counters",
      name: "Live Counters Vendor",
      description:
        "Interactive food stations with live cooking demonstrations, offering fresh and customized dishes prepared right before your guests",
      image: "https://i.pinimg.com/1200x/fe/bb/60/febb60bd0b7a753aa4195454fba6e560.jpg",
    },
    {
      id: 3,
      category: "sweet-shop",
      name: "Sweet Shop Vendor",
      description:
        "Traditional and contemporary sweets, mithai boxes, and dessert arrangements that add sweetness to your special moments",
      image: "https://i.pinimg.com/736x/48/76/4f/48764fe3522563cdff861593d5a68ded.jpg",
    },
    {
      id: 4,
      category: "halwai",
      name: "Halwai",
      description:
        "Authentic traditional Indian sweets and snacks prepared with age-old recipes, bringing nostalgia and rich flavors to your celebration",
      image: "https://i.pinimg.com/736x/36/63/91/36639136ab91da85255560c4e969485c.jpg",
    },
    {
      id: 5,
      category: "coffee-tea",
      name: "Coffee/Tea Stall",
      description:
        "Specialty coffee and tea services with baristas, offering premium beverages and refreshing drinks for your guests",
      image: "https://i.pinimg.com/736x/77/93/2d/77932da8a2a5d2d01c872ea58e2cd10d.jpg",
    },
    {
      id: 6,
      category: "fruit-stall",
      name: "Fruit Stall",
      description:
        "Fresh fruit counters with artistic displays, fruit chaats, and healthy refreshment options for health-conscious guests",
      image: "https://i.pinimg.com/1200x/5f/b1/16/5fb1164ab2b6aa28e27164ac4dcd1a64.jpg",
    },
    {
      id: 7,
      category: "chocolate-fountain",
      name: "Chocolate Fountain Vendor",
      description:
        "Cascading chocolate fountains with assorted dipping options, creating a luxurious and interactive dessert experience",
      image: "https://i.pinimg.com/1200x/3a/d6/a3/3ad6a38d6c6fef4a194b0bfded6d92f9.jpg",
    },
    {
      id: 8,
      category: "ice-cream",
      name: "Ice Cream Counter",
      description:
        "Premium ice cream stations with multiple flavors, live sundae bars, and frozen dessert options to delight all ages",
      image: "https://i.pinimg.com/736x/88/ee/87/88ee8731fabdd3d37e5d8718dfb4586a.jpg",
    },
    {
      id: 9,
      category: "beverages",
      name: "Water & Beverage Supplier",
      description:
        "Complete beverage solutions including packaged water, soft drinks, juices, and refreshment stations throughout the venue",
      image: "https://i.pinimg.com/736x/80/39/90/8039904113f39daa19943f6110a493dc.jpg",
    },
    {
      id: 10,
      category: "buffet-setup",
      name: "Buffet Setup & Service Staff",
      description:
        "Professional buffet arrangements with trained service staff ensuring smooth food service and guest satisfaction",
      image: "https://i.pinimg.com/736x/12/8c/83/128c830d080584643bb030e59a738bdb.jpg",
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
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-medium mb-2 text-center drop-shadow-lg uppercase">
            Catering & Food Service Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Delicious Cuisine, Perfectly Served!
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
                    className="flex flex-col items-center min-w-[110px] shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                    className="flex flex-col items-center min-w-[110px] shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
            <BreadcrumbArrow className="w-4 h-4 text-gray-400" />
            <span className="text-rose-500 font-medium text-lg">Entertainment Vendors</span>
          </nav>
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
                  className="w-full mt-6 bg-linear-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
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

export default CateringVendorsPage;
