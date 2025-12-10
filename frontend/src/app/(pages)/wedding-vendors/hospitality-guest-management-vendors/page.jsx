"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const HospitalityVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "welcome",
      name: "Welcome Team",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
      link: "/welcome-team",
    },
    {
      id: "hostess",
      name: "Hostess Staff",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      link: "/hostess-staff",
    },
    {
      id: "guest-management",
      name: "Guest Management",
      image:
        "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400",
      link: "/guest-management",
    },
    {
      id: "luggage",
      name: "Luggage Handling",
      image:
        "https://images.unsplash.com/photo-1565893405730-093332d49d08?w=400",
      link: "/luggage-handling",
    },
    {
      id: "concierge",
      name: "Concierge Desk",
      image:
        "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=400",
      link: "/concierge-desk",
    },
    {
      id: "room-allocation",
      name: "Room Allocation",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
      link: "/room-allocation",
    },
    {
      id: "travel",
      name: "Travel Desk",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
      link: "/travel-desk",
    },
    {
      id: "security",
      name: "Security Personnel",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      link: "/security-personnel",
    },
    {
      id: "valet",
      name: "Valet Parking",
      image:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400",
      link: "/valet-parking",
    },
    {
      id: "guards",
      name: "Uniformed Guards",
      image:
        "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=400",
      link: "/uniformed-guards",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "welcome",
      name: "Welcome Team",
      description:
        "Professional welcome team to greet your guests with warmth and hospitality, creating the perfect first impression",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
    },
    {
      id: 2,
      category: "hostess",
      name: "Hostess Staff",
      description:
        "Elegant and courteous hostess staff to assist guests, manage reception areas, and ensure smooth coordination",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      id: 3,
      category: "guest-management",
      name: "Guest Management Team",
      description:
        "Dedicated team to handle guest check-ins, inquiries, and ensure all attendees have a seamless experience",
      image:
        "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400",
    },
    {
      id: 4,
      category: "luggage",
      name: "Luggage Handling Staff",
      description:
        "Efficient luggage management service to handle guest belongings with care and professionalism",
      image:
        "https://images.unsplash.com/photo-1565893405730-093332d49d08?w=400",
    },
    {
      id: 5,
      category: "concierge",
      name: "Concierge Desk",
      description:
        "Expert concierge services providing information, assistance, and local recommendations for your guests",
      image:
        "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=400",
    },
    {
      id: 6,
      category: "room-allocation",
      name: "Room Allocation Team",
      description:
        "Organized room allocation services ensuring guests are accommodated comfortably and efficiently",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
    },
    {
      id: 7,
      category: "travel",
      name: "Travel Desk",
      description:
        "Complete travel coordination including transportation arrangements, bookings, and travel assistance",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400",
    },
    {
      id: 8,
      category: "security",
      name: "Security Personnel",
      description:
        "Trained security professionals ensuring safety and peace of mind for all guests throughout the event",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
    },
    {
      id: 9,
      category: "valet",
      name: "Valet Parking Team",
      description:
        "Premium valet parking services providing convenient and secure vehicle management for your guests",
      image:
        "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400",
    },
    {
      id: 10,
      category: "guards",
      name: "Uniformed Guards",
      description:
        "Professional uniformed guards maintaining order, security, and assisting with crowd management",
      image:
        "https://images.unsplash.com/photo-1590642916589-592bca10dfbf?w=400",
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
            Hospitality & Guest Management Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Exceptional Service, Memorable Experiences!
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
                  <h3 className="text-2xl font-medium text-gray-800 mb-3 text-center">
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

export default HospitalityVendorsPage;