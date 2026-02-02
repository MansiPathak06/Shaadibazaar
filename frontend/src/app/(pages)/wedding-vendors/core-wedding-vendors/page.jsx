"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Home, ChevronRight as BreadcrumbArrow } from "lucide-react";
import { useRouter } from 'next/navigation';

const WeddingVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  // Update category mapping
  const categoryMap = {
    1: 'planner',
    2: 'event',
    3: 'venue',
    4: 'decorator',
    5: 'caterer',
    6: 'photographer',
    7: 'videographer',
    8: 'light',
    9: 'dj',
    10: 'band',
    11: 'ghodi',
    12: 'dhol',
    13: 'fireworks',
    14: 'tent'
  };

  const categories = [
    {
      id: "planner",
      name: "Wedding Planner",
      image: "https://i.pinimg.com/1200x/fc/e6/24/fce62422d53e0f53aac6682509df749f.jpg",
    },
    {
      id: "event",
      name: "Event Manager",
      image: "https://i.pinimg.com/1200x/8f/1a/16/8f1a1635e6ac2c77469d2257e5694d6f.jpg",
    },
    {
      id: "venue",
      name: "Venue Manager",
      image: "https://i.pinimg.com/736x/57/7a/12/577a1271b9daebccea99feb87f2f1ab2.jpg",
    },
    {
      id: "decorator",
      name: "Decorator",
      image: "https://i.pinimg.com/736x/a7/62/bc/a762bced6bef3d9b13ba75388aa659c3.jpg",
    },
    {
      id: "caterer",
      name: "Caterer",
      image: "https://i.pinimg.com/1200x/56/1d/f0/561df0ddacb3d0ddd77ef4dfa6226c9f.jpg",
    },
    {
      id: "photographer",
      name: "Photographer",
      image: "https://i.pinimg.com/1200x/66/77/85/66778594c92a2bf5727c4393c23059b4.jpg",
    },
    {
      id: "videographer",
      name: "Videographer",
      image: "https://i.pinimg.com/736x/26/8c/18/268c186fde4f43f025a503db6df6f28f.jpg",
    },
    {
      id: "light",
      name: "Light & Sound",
      image: "https://i.pinimg.com/736x/e3/34/d4/e334d4ffe873184bfcc6cc177cd53312.jpg",
    },
    {
      id: "dj",
      name: "DJ Setup",
      image: "https://i.pinimg.com/736x/6f/98/b7/6f98b748da55295f92139809b72d0c0b.jpg",
    },
    {
      id: "band",
      name: "Band Baja",
      image: "https://i.pinimg.com/1200x/42/94/a3/4294a34c84bcfa062fbe6d169d4686b3.jpg",
    },
    {
      id: "ghodi",
      name: "Wedding Horse",
      image: "https://i.pinimg.com/736x/21/73/36/21733694ad441a7ce55ef5a890ff60ab.jpg",
    },
    {
      id: "dhol",
      name: "Dhol Team",
      image: "https://i.pinimg.com/736x/38/27/3e/38273ee1c85c86d8f204e189a49b2bb1.jpg",
    },
    {
      id: "fireworks",
      name: "Fireworks",
      image: "https://i.pinimg.com/1200x/25/68/2b/25682b0657067901dbb5b5c7fbbdfe74.jpg",
    },
    {
      id: "tent",
      name: "Tent House",
      image: "https://i.pinimg.com/736x/8e/45/68/8e4568492a10ba340cf836e34e969647.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "planner",
      name: "Wedding Planner",
      description: "Offers complete comprehensive solutions to provide the ultimate blissful wedding experience from the heart",
      image: "https://i.pinimg.com/1200x/fc/e6/24/fce62422d53e0f53aac6682509df749f.jpg",
    },
    {
      id: 2,
      category: "event",
      name: "Event Manager",
      description: "Make families celebrate as we work on your full-service event coordination from start to finish",
      image: "https://i.pinimg.com/1200x/8f/1a/16/8f1a1635e6ac2c77469d2257e5694d6f.jpg",
    },
    {
      id: 3,
      category: "venue",
      name: "Venue Manager",
      description: "Exquisite venues with world-class amenities and spectacular decor to create an unforgettable celebration",
      image: "https://i.pinimg.com/736x/57/7a/12/577a1271b9daebccea99feb87f2f1ab2.jpg",
    },
    {
      id: 4,
      category: "decorator",
      name: "Decorator / Event Decor Stylist",
      description: "Blissful transformation where creative visions meet and bring sophistication to your special ceremony",
      image: "https://i.pinimg.com/736x/a7/62/bc/a762bced6bef3d9b13ba75388aa659c3.jpg",
    },
    {
      id: 5,
      category: "caterer",
      name: "Caterer (Food & Beverages)",
      description: "Soul-tingling cuisine and delicious menu thought-out with authentic flavors to make this celebration special",
      image: "https://i.pinimg.com/1200x/56/1d/f0/561df0ddacb3d0ddd77ef4dfa6226c9f.jpg",
    },
    {
      id: 6,
      category: "photographer",
      name: "Photographer",
      description: "Capturing every precious moment and every emotion beautifully - turning your celebration into timeless memories",
      image: "https://i.pinimg.com/1200x/66/77/85/66778594c92a2bf5727c4393c23059b4.jpg",
    },
    {
      id: 7,
      category: "videographer",
      name: "Videographer",
      description: "Cinematic storytelling that brings your wedding day to life with artistic shots and emotional narratives",
      image: "https://i.pinimg.com/736x/26/8c/18/268c186fde4f43f025a503db6df6f28f.jpg",
    },
    {
      id: 8,
      category: "light",
      name: "Light & Sound Vendor",
      description: "Professional lighting and crystal-clear sound systems to set the perfect ambiance and energy",
      image: "https://i.pinimg.com/736x/b1/37/5f/b1375f788d1f8a3dbe8c6ce7290e3ef6.jpg",
    },
    {
      id: 9,
      category: "dj",
      name: "DJ / DJ Setup Provider",
      description: "High-energy entertainment with premium sound and lighting to keep your guests dancing all night",
      image: "https://i.pinimg.com/1200x/eb/f9/cc/ebf9cc1182a0d47ecf849afa90d49c3f.jpg",
    },
    {
      id: 10,
      category: "band",
      name: "Band Baja Company",
      description: "Traditional brass band performances adding grandeur and festive spirit to your wedding procession",
      image: "https://i.pinimg.com/1200x/42/94/a3/4294a34c84bcfa062fbe6d169d4686b3.jpg",
    },
    {
      id: 11,
      category: "ghodi",
      name: "Ghodi/Wedding Horse Provider",
      description: "Beautifully decorated horses for the groom's baraat entry, creating a royal and memorable entrance",
      image: "https://i.pinimg.com/1200x/26/dd/f8/26ddf8a2720dbf0d2353ef7a18314f64.jpg",
    },
    {
      id: 12,
      category: "dhol",
      name: "Dhol Team",
      description: "Energetic dhol players who bring infectious enthusiasm and traditional beats to your celebration",
      image: "https://i.pinimg.com/736x/9a/e4/d2/9ae4d23861b72d5f987e4e810a0ff86f.jpg",
    },
    {
      id: 13,
      category: "fireworks",
      name: "Fireworks Vendor",
      description: "Spectacular fireworks displays that light up the sky and add magic to your special moments",
      image: "https://i.pinimg.com/736x/f4/21/57/f42157ae6d72f09dee7b4bcb0321d2d6.jpg",
    },
    {
      id: 14,
      category: "tent",
      name: "Tent House Vendor",
      description: "Premium tenting solutions with elegant structures and comfortable seating arrangements",
      image: "https://i.pinimg.com/736x/65/bb/16/65bb161ae79618fe745be4be8d1213a1.jpg",
    },
  ];

  const handleCategoryClick = (categoryId) => {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
            Core Wedding Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Your Dream Wedding, Perfectly Orchestrated!
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
            <BreadcrumbArrow className="w-4 h-4 text-gray-400" />
            <span className="text-rose-500 font-semibold text-lg">Core Wedding Vendors</span>
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
                  onClick={() => router.push(`/wedding-vendors/${categoryMap[vendor.id]}`)}
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
          animation: scroll 10s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default WeddingVendorsPage;
