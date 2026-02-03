"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const AccommodationVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "hotel",
      name: "Hotel Booking Agents",
      image:
        "https://i.pinimg.com/736x/55/e8/cd/55e8cdd2f3fe64fe237433e3c40f5e89.jpg",
      link: "/hotel-booking",
    },
    {
      id: "guesthouse",
      name: "Guest House Provider",
      image:
        "https://i.pinimg.com/1200x/28/a1/55/28a1552cf058234d49c76e3b99fec34a.jpg",
      link: "/guest-house",
    },
    {
      id: "resort",
      name: "Resort Booking",
      image:
        "https://i.pinimg.com/736x/80/f2/8c/80f28c830d9d9ed05cac8db7d5e9e4b5.jpg",
      link: "/resort-booking",
    },
    {
      id: "villa",
      name: "Villa / Farmhouse Provider",
      image:
        "https://i.pinimg.com/736x/9b/83/6a/9b836a37fb82f8f033e8969d4d212715.jpg",
      link: "/villa-farmhouse",
    },
    {
      id: "homestay",
      name: "Homestay Vendor",
      image:
        "https://i.pinimg.com/1200x/6e/96/b3/6e96b315b680544797ce031a60257e5f.jpg",
      link: "/homestay",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "hotel",
      name: "Hotel Booking Agents",
      description:
        "Professional hotel booking services offering luxurious accommodations with world-class amenities for your wedding guests",
      image:
        "https://i.pinimg.com/736x/55/e8/cd/55e8cdd2f3fe64fe237433e3c40f5e89.jpg",
    },
    {
      id: 2,
      category: "guesthouse",
      name: "Guest House Provider",
      description:
        "Comfortable and cozy guest house arrangements providing homely atmosphere and personalized service for your guests",
      image:
        "https://i.pinimg.com/1200x/28/a1/55/28a1552cf058234d49c76e3b99fec34a.jpg",
    },
    {
      id: 3,
      category: "resort",
      name: "Resort Booking",
      description:
        "Exclusive resort bookings with breathtaking views and premium facilities to make your wedding celebration memorable",
      image:
        "https://i.pinimg.com/736x/80/f2/8c/80f28c830d9d9ed05cac8db7d5e9e4b5.jpg",
    },
    {
      id: 4,
      category: "villa",
      name: "Villa / Farmhouse Provider",
      description:
        "Spacious villas and farmhouses offering privacy and elegance with beautiful landscapes for intimate celebrations",
      image:
        "https://i.pinimg.com/736x/9b/83/6a/9b836a37fb82f8f033e8969d4d212715.jpg",
    },
    {
      id: 5,
      category: "homestay",
      name: "Homestay Vendor",
      description:
        "Authentic homestay experiences providing warm hospitality and local charm for guests seeking a personal touch",
      image:
        "https://i.pinimg.com/1200x/6e/96/b3/6e96b315b680544797ce031a60257e5f.jpg",
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
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center drop-shadow-lg">
            Accommodation Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Comfortable Stays for Your Wedding Guests!
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
                    onClick={() => handleCategoryClick(cat.link)}
                    className="flex flex-col items-center min-w-[110px] shrink-0 transition-all hover:scale-105 group/item"
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
                    className="flex flex-col items-center min-w-[110px] shrink-0 transition-all hover:scale-105 group/item"
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
                <button className="w-full mt-6 bg-linear-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
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

export default AccommodationVendorsPage;