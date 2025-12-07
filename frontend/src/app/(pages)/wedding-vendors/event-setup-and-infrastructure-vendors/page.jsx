"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const EventInfrastructurePage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "tent",
      name: "Tent House",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c313?w=400",
      link: "/tent-house",
    },
    {
      id: "stage",
      name: "Stage Setup",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
      link: "/stage-setup",
    },
    {
      id: "truss",
      name: "Truss & Rigging",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      link: "/truss-rigging",
    },
    {
      id: "led",
      name: "LED Screen",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
      link: "/led-screen",
    },
    {
      id: "generator",
      name: "Generator & Power",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400",
      link: "/generator-power",
    },
    {
      id: "ac",
      name: "Portable AC/Cooler",
      image:
        "https://images.unsplash.com/photo-1631545806609-5e2b94e3ee2c?w=400",
      link: "/portable-ac",
    },
    {
      id: "seating",
      name: "Seating Arrangement",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
      link: "/seating-arrangement",
    },
    {
      id: "linen",
      name: "Table Linen",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400",
      link: "/table-linen",
    },
    {
      id: "carpet",
      name: "Carpeting",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400",
      link: "/carpeting",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "tent",
      name: "Tent House Vendor",
      description:
        "Premium quality tents and canopies for all event sizes, providing weather protection and elegant coverage for your outdoor celebrations with customizable options",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f29da8c313?w=600",
    },
    {
      id: 2,
      category: "stage",
      name: "Stage Setup Vendor",
      description:
        "Professional stage construction and design services with modular systems, ensuring a stunning focal point for performances, speeches, and ceremonies",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600",
    },
    {
      id: 3,
      category: "truss",
      name: "Truss & Rigging Vendor",
      description:
        "Heavy-duty truss systems and rigging solutions for lighting, sound equipment, and decorative elements with certified safety standards and structural integrity",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
    },
    {
      id: 4,
      category: "led",
      name: "LED Screen Supplier",
      description:
        "High-resolution LED display screens in various sizes for live streaming, presentations, and visual displays with crystal-clear picture quality",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
    },
    {
      id: 5,
      category: "generator",
      name: "Generator & Power Backup Supplier",
      description:
        "Reliable power generation and backup solutions ensuring uninterrupted electricity supply for all your event equipment and lighting needs",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600",
    },
    {
      id: 6,
      category: "ac",
      name: "Portable AC/Cooler Vendor",
      description:
        "Climate control solutions with portable air conditioning units and industrial coolers to keep your guests comfortable in any weather conditions",
      image:
        "https://images.unsplash.com/photo-1631545806609-5e2b94e3ee2c?w=600",
    },
    {
      id: 7,
      category: "seating",
      name: "Seating Arrangement Vendor",
      description:
        "Comprehensive seating solutions including chairs, sofas, and benches in various styles from elegant chiavari chairs to comfortable lounge seating",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600",
    },
    {
      id: 8,
      category: "linen",
      name: "Table Linen Provider",
      description:
        "Premium quality tablecloths, runners, napkins, and overlays in diverse colors and fabrics to complement your event theme and decor perfectly",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600",
    },
    {
      id: 9,
      category: "carpet",
      name: "Carpeting Vendor",
      description:
        "Event carpeting and flooring solutions including red carpets, decorative rugs, and artificial grass to enhance aesthetics and comfort for your guests",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600",
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
            Event Setup & Infrastructure Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Complete Infrastructure Solutions for Flawless Events!
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-blue-50 rounded-t-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
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
                <button className="w-full mt-6 bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-3 rounded-lg hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
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

export default EventInfrastructurePage;