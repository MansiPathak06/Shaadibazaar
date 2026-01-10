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
        "https://i.pinimg.com/1200x/c4/21/83/c42183a20b9d2bbdebdf0bcea8718ad2.jpg",
      link: "/tent-house",
    },
    {
      id: "stage",
      name: "Stage Setup",
      image:
        "https://i.pinimg.com/1200x/f8/8a/d7/f88ad798d7d542e5e511e915537deaab.jpg",
      link: "/stage-setup",
    },
    {
      id: "truss",
      name: "Truss & Rigging",
      image:
        "https://i.pinimg.com/736x/89/2b/cc/892bcc284cb29bbd326cdd4efceadc21.jpg",
      link: "/truss-rigging",
    },
    {
      id: "led",
      name: "LED Screen",
      image:
        "https://i.pinimg.com/1200x/0d/12/69/0d1269c40f23e68d52e9ae8d826a9eb0.jpg",
      link: "/led-screen",
    },
    {
      id: "generator",
      name: "Generator & Power",
      image:
        "https://i.pinimg.com/736x/75/30/10/753010077e42c29f97d1aef38ac0c4bd.jpg",
      link: "/generator-power",
    },
    {
      id: "ac",
      name: "Portable AC/Cooler",
      image:
        "https://i.pinimg.com/736x/ed/83/bc/ed83bc4dd2a568c92f5709379bcee7ac.jpg",
      link: "/portable-ac",
    },
    {
      id: "seating",
      name: "Seating Arrangement",
      image:
        "https://i.pinimg.com/1200x/1f/d1/8f/1fd18f12a12f589235f337409aaadc66.jpg",
      link: "/seating-arrangement",
    },
    {
      id: "linen",
      name: "Table Linen",
      image:
        "https://i.pinimg.com/736x/a0/53/01/a05301bc1397833d1ed859fbe9670c1b.jpg",
      link: "/table-linen",
    },
    {
      id: "carpet",
      name: "Carpeting",
      image:
        "https://i.pinimg.com/1200x/8c/67/b2/8c67b22b4956da2a20a79f4bfe6968de.jpg",
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
        "https://i.pinimg.com/736x/69/27/00/692700e25b11ff377ef33ddaaf32a503.jpg",
    },
    {
      id: 2,
      category: "stage",
      name: "Stage Setup Vendor",
      description:
        "Professional stage construction and design services with modular systems, ensuring a stunning focal point for performances, speeches, and ceremonies",
      image:
        "https://i.pinimg.com/1200x/79/1a/ea/791aeaa2b5e3c177e644f41e2f9f2f6d.jpg",
    },
    {
      id: 3,
      category: "truss",
      name: "Truss & Rigging Vendor",
      description:
        "Heavy-duty truss systems and rigging solutions for lighting, sound equipment, and decorative elements with certified safety standards and structural integrity",
      image:
        "https://i.pinimg.com/736x/c5/e6/e4/c5e6e43d838fd41790b328bcd4aa91fd.jpg",
    },
    {
      id: 4,
      category: "led",
      name: "LED Screen Supplier",
      description:
        "High-resolution LED display screens in various sizes for live streaming, presentations, and visual displays with crystal-clear picture quality",
      image:
        "https://i.pinimg.com/736x/c6/43/24/c6432485f119f94bd03b9373a6391fa7.jpg",
    },
    {
      id: 5,
      category: "generator",
      name: "Generator & Power Backup Supplier",
      description:
        "Reliable power generation and backup solutions ensuring uninterrupted electricity supply for all your event equipment and lighting needs",
      image:
        "https://i.pinimg.com/1200x/b6/dd/6a/b6dd6a776a59453ed327ce5f318bfac8.jpg",
    },
    {
      id: 6,
      category: "ac",
      name: "Portable AC/Cooler Vendor",
      description:
        "Climate control solutions with portable air conditioning units and industrial coolers to keep your guests comfortable in any weather conditions",
      image:
        "https://i.pinimg.com/736x/b8/e1/fe/b8e1fe7b2b56f30b0e488ea6998bdea5.jpg",
    },
    {
      id: 7,
      category: "seating",
      name: "Seating Arrangement Vendor",
      description:
        "Comprehensive seating solutions including chairs, sofas, and benches in various styles from elegant chiavari chairs to comfortable lounge seating",
      image:
        "https://i.pinimg.com/736x/98/62/00/98620029bd4ee47c7e9f36deb24c1fe9.jpg",
    },
    {
      id: 8,
      category: "linen",
      name: "Table Linen Provider",
      description:
        "Premium quality tablecloths, runners, napkins, and overlays in diverse colors and fabrics to complement your event theme and decor perfectly",
      image:
        "https://i.pinimg.com/736x/b8/a9/99/b8a999f9e90ec5c918710a6050be05e1.jpg",
    },
    {
      id: 9,
      category: "carpet",
      name: "Carpeting Vendor",
      description:
        "Event carpeting and flooring solutions including red carpets, decorative rugs, and artificial grass to enhance aesthetics and comfort for your guests",
      image:
        "https://i.pinimg.com/1200x/bd/a8/77/bda877253ce0f84f6e2bce6bee01244b.jpg",
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