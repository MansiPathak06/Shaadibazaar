"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CeremonyVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "hindu-priest",
      name: "Hindu Priest",
      image: "https://via.placeholder.com/200x200?text=Hindu+Priest",
      link: "/hindu-priest",
    },
    {
      id: "mandap",
      name: "Mandap Setup",
      image: "https://via.placeholder.com/200x200?text=Mandap+Setup",
      link: "/mandap-setup",
    },
    {
      id: "varmala",
      name: "Varmala Stage",
      image: "https://via.placeholder.com/200x200?text=Varmala+Stage",
      link: "/varmala-stage",
    },
    {
      id: "qazi",
      name: "Qazi for Nikah",
      image: "https://via.placeholder.com/200x200?text=Qazi",
      link: "/qazi-nikah",
    },
    {
      id: "doli",
      name: "Doli Arrangement",
      image: "https://via.placeholder.com/200x200?text=Doli",
      link: "/doli-arrangement",
    },
    {
      id: "walima",
      name: "Walima Setup",
      image: "https://via.placeholder.com/200x200?text=Walima",
      link: "/walima-setup",
    },
    {
      id: "granthi",
      name: "Granthi Ji",
      image: "https://via.placeholder.com/200x200?text=Granthi+Ji",
      link: "/granthi-ji",
    },
    {
      id: "gurudwara",
      name: "Gurudwara Team",
      image: "https://via.placeholder.com/200x200?text=Gurudwara",
      link: "/gurudwara-team",
    },
    {
      id: "pastor",
      name: "Pastor/Father",
      image: "https://via.placeholder.com/200x200?text=Pastor",
      link: "/pastor-father",
    },
    {
      id: "choir",
      name: "Church Choir",
      image: "https://via.placeholder.com/200x200?text=Choir",
      link: "/church-choir",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "hindu",
      name: "Hindu Priest (Pandit Ji)",
      description:
        "Experienced and knowledgeable priests who conduct traditional Hindu wedding rituals with devotion and authenticity, ensuring every sacred moment is honored",
      image: "https://via.placeholder.com/400x300?text=Hindu+Priest",
    },
    {
      id: 2,
      category: "hindu",
      name: "Mandap Setup Vendor",
      description:
        "Beautiful and elaborate mandap designs that serve as the sacred centerpiece for your Hindu wedding ceremony, crafted with traditional elements and modern elegance",
      image: "https://via.placeholder.com/400x300?text=Mandap+Setup",
    },
    {
      id: 3,
      category: "hindu",
      name: "Varmala Stage Vendor",
      description:
        "Stunning varmala exchange stages with artistic designs and floral arrangements, creating the perfect backdrop for this beautiful wedding moment",
      image: "https://via.placeholder.com/400x300?text=Varmala+Stage",
    },
    {
      id: 4,
      category: "muslim",
      name: "Qazi for Nikah",
      description:
        "Respected and experienced Qazi who conducts the Nikah ceremony with proper Islamic traditions, guiding couples through this sacred union with wisdom and grace",
      image: "https://via.placeholder.com/400x300?text=Qazi",
    },
    {
      id: 5,
      category: "muslim",
      name: "Doli Arrangement",
      description:
        "Traditional and beautifully decorated doli arrangements for the bride's departure, adding emotional depth and cultural significance to this special moment",
      image: "https://via.placeholder.com/400x300?text=Doli",
    },
    {
      id: 6,
      category: "muslim",
      name: "Walima Dinner Setup",
      description:
        "Elegant and sophisticated Walima dinner arrangements with premium décor, seating, and ambiance that celebrates the couple's union with family and friends",
      image: "https://via.placeholder.com/400x300?text=Walima+Setup",
    },
    {
      id: 7,
      category: "sikh",
      name: "Granthi Ji",
      description:
        "Dedicated Granthi Ji who performs the Anand Karaj ceremony with spiritual reverence, reciting from the Guru Granth Sahib and blessing the couple's journey together",
      image: "https://via.placeholder.com/400x300?text=Granthi+Ji",
    },
    {
      id: 8,
      category: "sikh",
      name: "Gurudwara Coordination Team",
      description:
        "Professional coordination team that manages all aspects of Gurudwara wedding ceremonies, ensuring smooth execution of rituals and comfortable experience for guests",
      image: "https://via.placeholder.com/400x300?text=Gurudwara+Team",
    },
    {
      id: 9,
      category: "christian",
      name: "Pastor / Father",
      description:
        "Compassionate and experienced clergy who officiate Christian wedding ceremonies with heartfelt blessings, guiding couples through their sacred vows before God",
      image: "https://via.placeholder.com/400x300?text=Pastor",
    },
    {
      id: 10,
      category: "christian",
      name: "Church Choir",
      description:
        "Talented choir groups that fill your church wedding with beautiful hymns and spiritual music, creating a divine atmosphere for your special ceremony",
      image: "https://via.placeholder.com/400x300?text=Church+Choir",
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
            Ceremony-Specific Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Sacred Rituals, Honored Traditions!
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

export default CeremonyVendorsPage;