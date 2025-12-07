"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CateringVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "full-catering",
      name: "Full Catering Service",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
      link: "/full-catering-service",
    },
    {
      id: "live-counters",
      name: "Live Counters Vendor",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
      link: "/live-counters",
    },
    {
      id: "sweet-shop",
      name: "Sweet Shop Vendor",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
      link: "/sweet-shop",
    },
    {
      id: "halwai",
      name: "Halwai",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      link: "/halwai",
    },
    {
      id: "coffee-tea",
      name: "Coffee/Tea Stall",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
      link: "/coffee-tea-stall",
    },
    {
      id: "fruit-stall",
      name: "Fruit Stall",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400",
      link: "/fruit-stall",
    },
    {
      id: "chocolate-fountain",
      name: "Chocolate Fountain",
      image:
        "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400",
      link: "/chocolate-fountain",
    },
    {
      id: "ice-cream",
      name: "Ice Cream Counter",
      image:
        "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400",
      link: "/ice-cream-counter",
    },
    {
      id: "beverages",
      name: "Water & Beverage",
      image:
        "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400",
      link: "/water-beverage",
    },
    {
      id: "buffet-setup",
      name: "Buffet Setup & Staff",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
      link: "/buffet-setup",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "full-catering",
      name: "Full Catering Service",
      description:
        "Complete catering solutions with diverse menu options, professional service, and seamless execution for your grand celebration",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
    },
    {
      id: 2,
      category: "live-counters",
      name: "Live Counters Vendor",
      description:
        "Interactive food stations with live cooking demonstrations, offering fresh and customized dishes prepared right before your guests",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
    },
    {
      id: 3,
      category: "sweet-shop",
      name: "Sweet Shop Vendor",
      description:
        "Traditional and contemporary sweets, mithai boxes, and dessert arrangements that add sweetness to your special moments",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
    },
    {
      id: 4,
      category: "halwai",
      name: "Halwai",
      description:
        "Authentic traditional Indian sweets and snacks prepared with age-old recipes, bringing nostalgia and rich flavors to your celebration",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
    },
    {
      id: 5,
      category: "coffee-tea",
      name: "Coffee/Tea Stall",
      description:
        "Specialty coffee and tea services with baristas, offering premium beverages and refreshing drinks for your guests",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
    },
    {
      id: 6,
      category: "fruit-stall",
      name: "Fruit Stall",
      description:
        "Fresh fruit counters with artistic displays, fruit chaats, and healthy refreshment options for health-conscious guests",
      image:
        "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400",
    },
    {
      id: 7,
      category: "chocolate-fountain",
      name: "Chocolate Fountain Vendor",
      description:
        "Cascading chocolate fountains with assorted dipping options, creating a luxurious and interactive dessert experience",
      image:
        "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400",
    },
    {
      id: 8,
      category: "ice-cream",
      name: "Ice Cream Counter",
      description:
        "Premium ice cream stations with multiple flavors, live sundae bars, and frozen dessert options to delight all ages",
      image:
        "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400",
    },
    {
      id: 9,
      category: "beverages",
      name: "Water & Beverage Supplier",
      description:
        "Complete beverage solutions including packaged water, soft drinks, juices, and refreshment stations throughout the venue",
      image:
        "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400",
    },
    {
      id: 10,
      category: "buffet-setup",
      name: "Buffet Setup & Service Staff",
      description:
        "Professional buffet arrangements with trained service staff ensuring smooth food service and guest satisfaction",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
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
            Catering & Food Service Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Delicious Cuisine, Perfectly Served!
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

export default CateringVendorsPage;