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
        "https://i.pinimg.com/1200x/39/53/a3/3953a32d2930946ad62d781a19ecfca7.jpg",
      link: "/welcome-team",
    },
    {
      id: "hostess",
      name: "Hostess Staff",
      image:
        "https://i.pinimg.com/1200x/64/8e/df/648edfbc66654ff098b30cd8c29c2f26.jpg",
      link: "/hostess-staff",
    },
    {
      id: "guest-management",
      name: "Guest Management",
      image:
        "https://i.pinimg.com/736x/9b/20/9a/9b209a232132d1f219ad57389b4e74ed.jpg",
      link: "/guest-management",
    },
    {
      id: "luggage",
      name: "Luggage Handling",
      image:
        "https://i.pinimg.com/736x/07/78/89/077889d748b9c062d19eaafd81f19083.jpg",
      link: "/luggage-handling",
    },
    {
      id: "concierge",
      name: "Concierge Desk",
      image:
        "https://i.pinimg.com/736x/fa/ca/86/faca86b3971b15ba45e39eaf6ce975a6.jpg",
      link: "/concierge-desk",
    },
    {
      id: "room-allocation",
      name: "Room Allocation",
      image:
        "https://i.pinimg.com/1200x/8d/1e/69/8d1e69ff0519f1f677f6193dbc09116b.jpg",
      link: "/room-allocation",
    },
    {
      id: "travel",
      name: "Travel Desk",
      image:
        "https://i.pinimg.com/736x/29/06/0f/29060f79680211528676f5486297bd74.jpg",
      link: "/travel-desk",
    },
    {
      id: "security",
      name: "Security Personnel",
      image:
        "https://i.pinimg.com/736x/56/30/55/5630555809b2673b49516b6fd59987c5.jpg",
      link: "/security-personnel",
    },
    {
      id: "valet",
      name: "Valet Parking",
      image:
        "https://i.pinimg.com/736x/20/37/d8/2037d8a67f0e0e2eee7f83a878e2afc2.jpg",
      link: "/valet-parking",
    },
    {
      id: "guards",
      name: "Uniformed Guards",
      image:
        "https://i.pinimg.com/1200x/d1/9d/ee/d19dee6580746e786c1385c7cc1d55aa.jpg",
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
        "https://i.pinimg.com/1200x/a7/0b/2f/a70b2f68ecd569b8734889847d47e3c2.jpg",
    },
    {
      id: 2,
      category: "hostess",
      name: "Hostess Staff",
      description:
        "Elegant and courteous hostess staff to assist guests, manage reception areas, and ensure smooth coordination",
      image:
        "https://i.pinimg.com/1200x/4a/bd/48/4abd48d5199296d918699e27a79ac837.jpg",
    },
    {
      id: 3,
      category: "guest-management",
      name: "Guest Management Team",
      description:
        "Dedicated team to handle guest check-ins, inquiries, and ensure all attendees have a seamless experience",
      image:
        "https://i.pinimg.com/736x/c5/bf/4b/c5bf4b0c38d188f80f965bf44c343328.jpg",
    },
    {
      id: 4,
      category: "luggage",
      name: "Luggage Handling Staff",
      description:
        "Efficient luggage management service to handle guest belongings with care and professionalism",
      image:
        "https://i.pinimg.com/1200x/de/fa/8f/defa8f2dc2dfcb06894a977ef1ec3f87.jpg",
    },
    {
      id: 5,
      category: "concierge",
      name: "Concierge Desk",
      description:
        "Expert concierge services providing information, assistance, and local recommendations for your guests",
      image:
        "https://i.pinimg.com/736x/6b/5a/d6/6b5ad6f61f2a57c97dffee7815b1f9e3.jpg",
    },
    {
      id: 6,
      category: "room-allocation",
      name: "Room Allocation Team",
      description:
        "Organized room allocation services ensuring guests are accommodated comfortably and efficiently",
      image:
        "https://i.pinimg.com/1200x/44/77/ec/4477ec43f7668a2c483f7bf8ad3c459b.jpg",
    },
    {
      id: 7,
      category: "travel",
      name: "Travel Desk",
      description:
        "Complete travel coordination including transportation arrangements, bookings, and travel assistance",
      image:
        "https://i.pinimg.com/736x/9c/21/4d/9c214d98c53e4b592ea1933443191ebb.jpg",
    },
    {
      id: 8,
      category: "security",
      name: "Security Personnel",
      description:
        "Trained security professionals ensuring safety and peace of mind for all guests throughout the event",
      image:
        "https://i.pinimg.com/736x/c7/94/3c/c7943cf423360c3945320acaeebe680f.jpg",
    },
    {
      id: 9,
      category: "valet",
      name: "Valet Parking Team",
      description:
        "Premium valet parking services providing convenient and secure vehicle management for your guests",
      image:
        "https://i.pinimg.com/736x/25/85/5c/25855c52b5050a067b91a2de1986628f.jpg",
    },
    {
      id: 10,
      category: "guards",
      name: "Uniformed Guards",
      description:
        "Professional uniformed guards maintaining order, security, and assisting with crowd management",
      image:
        "https://i.pinimg.com/1200x/61/84/c5/6184c52bb4893f5bd2f8f4a084e03cc7.jpg",
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
            src=""
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