"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";

const AdditionalSupportServicesPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "insurance",
      name: "Event Insurance",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop",
      link: "/event-insurance",
    },
    {
      id: "fire-safety",
      name: "Fire Safety Team",
      image: "https://i.pinimg.com/1200x/b6/05/57/b6055778474cda49a7bedfe720634502.jpg",
      link: "/fire-safety",
    },
    {
      id: "crowd",
      name: "Crowd Management",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
      link: "/crowd-management",
    },
    {
      id: "drone",
      name: "Drone Permission",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
      link: "/drone-permission",
    },
    {
      id: "license",
      name: "License Coordinator",
      image: "https://i.pinimg.com/1200x/0c/41/36/0c413633cacf1351bf1a8917b374b797.jpg",
      link: "/license-coordinator",
    },
    {
      id: "cleaning",
      name: "Cleaning Team",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
      link: "/cleaning-team",
    },
    {
      id: "sanitization",
      name: "Sanitization Team",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=400&fit=crop",
      link: "/sanitization-team",
    },
    {
      id: "medical",
      name: "Medical Emergency",
      image: "https://i.pinimg.com/736x/85/e0/cd/85e0cdbb16c84e2eed582143df8743ba.jpg",
      link: "/medical-emergency",
    },
  ];

  const services = [
    {
      id: 1,
      category: "insurance",
      name: "Event Insurance Agent",
      description:
        "Comprehensive insurance coverage to protect your event from unforeseen circumstances and provide peace of mind for your special day",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      category: "fire-safety",
      name: "Fire Safety Team",
      description:
        "Professional fire safety personnel equipped with modern firefighting equipment to ensure complete safety compliance and emergency preparedness",
      image: "https://i.pinimg.com/1200x/b6/05/57/b6055778474cda49a7bedfe720634502.jpg",
    },
    {
      id: 3,
      category: "crowd",
      name: "Crowd Management",
      description:
        "Experienced crowd control specialists who ensure smooth guest flow, organized entry-exit, and maintain order throughout your event",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      category: "drone",
      name: "Drone Permission Handler",
      description:
        "Expert assistance in obtaining necessary drone permits and coordinating with authorities for aerial photography and videography permissions",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      category: "license",
      name: "Government License Coordinator",
      description:
        "Streamlined coordination for all government approvals, permits, and licenses required for your event to ensure full legal compliance",
      image: "https://i.pinimg.com/1200x/0c/41/36/0c413633cacf1351bf1a8917b374b797.jpg",
    },
    {
      id: 6,
      category: "cleaning",
      name: "Cleaning & Housekeeping Team",
      description:
        "Professional housekeeping staff maintaining impeccable cleanliness throughout your event, from pre-event setup to post-event cleanup",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      category: "sanitization",
      name: "Sanitization Team",
      description:
        "Specialized sanitization services ensuring hygienic conditions with regular disinfection of high-touch areas and restroom facilities",
      image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=600&h=400&fit=crop",
    },
    {
      id: 8,
      category: "medical",
      name: "Medical Emergency Staff",
      description:
        "Trained medical professionals and paramedics on standby with first-aid equipment to handle any medical emergencies during your event",
      image: "https://i.pinimg.com/736x/85/e0/cd/85e0cdbb16c84e2eed582143df8743ba.jpg",
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
            Additional Support Services
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Professional Support for a Safe & Seamless Event Experience
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
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-blue-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-blue-600 transition-colors">
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
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-blue-600 transition-colors">
                      {cat.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-blue-50 rounded-t-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative h-50 overflow-hidden group">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content + Button */}
              <div className="p-6 flex flex-col flex-1">
                {/* Text content takes available space */}
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-800 mb-3 text-center">
                    {service.name}
                  </h3>

                  <h3 className="text-sm font-normal text-gray-800 mb-3">
                    {service.description}
                  </h3>
                </div>

                {/* Button stays at bottom */}
                <button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-3 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
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

export default AdditionalSupportServicesPage;