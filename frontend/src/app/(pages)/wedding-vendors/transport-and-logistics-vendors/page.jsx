"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TransportLogisticsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "luxury-car",
      name: "Luxury Car Rental",
      image:
        "https://i.pinimg.com/1200x/5a/79/4a/5a794a7e5d069395b17431e87f9eae48.jpg",
      link: "/luxury-car-rental",
    },
    {
      id: "vintage-car",
      name: "Vintage Car",
      image:
        "https://i.pinimg.com/736x/db/d1/b4/dbd1b4767644fe85a6e2162a1fa441dc.jpg",
      link: "/vintage-car",
    },
    {
      id: "bus-traveller",
      name: "Bus/Traveller",
      image:
        "https://i.pinimg.com/736x/9b/8e/a0/9b8ea053b25177c34d75d42b61548787.jpg",
      link: "/bus-traveller",
    },
    {
      id: "cab",
      name: "Cab Arrangements",
      image:
        "https://i.pinimg.com/1200x/a3/98/34/a39834d7316d7f87cd90401afff2a794.jpg",
      link: "/cab-arrangements",
    },
    {
      id: "parking",
      name: "Parking Vendor",
      image:
        "https://i.pinimg.com/1200x/db/54/49/db5449b9db71eda8231d6f1fd6476623.jpg",
      link: "/parking-vendor",
    },
    {
      id: "logistics",
      name: "Logistics Delivery",
      image:
        "https://i.pinimg.com/1200x/85/0c/4d/850c4dd67e7f062851c1d78a2b15b196.jpg",
      link: "/logistics-delivery",
    },
    {
      id: "luggage",
      name: "Luggage Transport",
      image:
        "https://i.pinimg.com/736x/bf/1a/14/bf1a14efc3f6a81cc990ed992d9b88c6.jpg",
      link: "/luggage-transport",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "luxury-car",
      name: "Luxury Car Rental",
      description:
        "Arrive in style with our premium fleet of luxury vehicles including Mercedes, BMW, Audi, and more for your special day",
      image:
        "https://i.pinimg.com/736x/23/0d/40/230d40c7e5b8ba2b6e37bd71d02536df.jpg",
    },
    {
      id: 2,
      category: "vintage-car",
      name: "Vintage Car Vendor",
      description:
        "Classic and vintage cars that add timeless elegance and royal charm to your wedding celebration",
      image:
        "https://i.pinimg.com/736x/66/ed/62/66ed6219ce04c0dabac072a6e857a411.jpg",
    },
    {
      id: 3,
      category: "bus-traveller",
      name: "Bus/Traveller for Guests",
      description:
        "Comfortable and spacious buses and travellers to transport your guests safely and conveniently",
      image:
        "https://i.pinimg.com/1200x/7f/88/d7/7f88d746e1ff0591dbfdc588c7c04a8c.jpg",
    },
    {
      id: 4,
      category: "cab",
      name: "Cab Arrangements",
      description:
        "Reliable and professional cab services for seamless transportation of family and guests throughout the wedding events",
      image:
        "https://i.pinimg.com/736x/ed/40/5a/ed405a2ba00170d6359e6e9e4d0e0e36.jpg",
    },
    {
      id: 5,
      category: "parking",
      name: "Parking Vendor",
      description:
        "Organized parking management and valet services to ensure smooth vehicle flow and guest convenience",
      image:
        "https://i.pinimg.com/736x/32/10/5d/32105dab31728d71ea19b73c79168a26.jpg",
    },
    {
      id: 6,
      category: "logistics",
      name: "Logistics Delivery Vendor",
      description:
        "Efficient logistics and delivery services for wedding materials, décor items, and equipment transportation",
      image:
        "https://i.pinimg.com/736x/46/06/e6/4606e6ed6db487e57590e5e9e76fc66b.jpg",
    },
    {
      id: 7,
      category: "luggage",
      name: "Luggage Transport Vendor",
      description:
        "Safe and secure luggage transportation services for out-of-town guests and wedding party members",
      image:
        "https://i.pinimg.com/1200x/c0/52/8b/c0528b8186c23e133370181bb316b027.jpg",
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
            Transport & Logistics Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Seamless Movement, Flawless Celebration!
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
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-blue-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-blue-500 transition-colors">
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
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-blue-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-blue-500 transition-colors">
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
              className="bg-blue-100 rounded-t-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
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
                <button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-cyan-500 text-white py-3 rounded-lg hover:from-blue-500 hover:to-cyan-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
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

export default TransportLogisticsPage;