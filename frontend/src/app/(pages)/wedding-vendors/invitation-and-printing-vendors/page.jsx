"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const InvitationPrintingVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "card-printing",
      name: "Card Printing Shop",
      image: "https://via.placeholder.com/400x400?text=Card+Printing",
      link: "/card-printing",
    },
    {
      id: "digital-invitation",
      name: "Digital Invitation Designer",
      image: "https://via.placeholder.com/400x400?text=Digital+Invitation",
      link: "/digital-invitation",
    },
    {
      id: "ecard-video",
      name: "E-card Video Maker",
      image: "https://via.placeholder.com/400x400?text=E-card+Video",
      link: "/ecard-video",
    },
    {
      id: "whatsapp-invitation",
      name: "WhatsApp Invitation Designer",
      image: "https://via.placeholder.com/400x400?text=WhatsApp+Invitation",
      link: "/whatsapp-invitation",
    },
    {
      id: "box-invitation",
      name: "Box Invitation Vendor",
      image: "https://via.placeholder.com/400x400?text=Box+Invitation",
      link: "/box-invitation",
    },
    {
      id: "gift-hamper",
      name: "Gift Hamper Packaging",
      image: "https://via.placeholder.com/400x400?text=Gift+Hamper",
      link: "/gift-hamper",
    },
    {
      id: "welcome-board",
      name: "Welcome Board Designer",
      image: "https://via.placeholder.com/400x400?text=Welcome+Board",
      link: "/welcome-board",
    },
    {
      id: "flex-printing",
      name: "Flex Printing / Vinyl Printing Vendor",
      image: "https://via.placeholder.com/400x400?text=Flex+Printing",
      link: "/flex-printing",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "card-printing",
      name: "Card Printing Shop",
      description:
        "Premium wedding card printing services with exquisite designs, luxury paper stocks, and elegant finishes for your special invitations",
      image: "https://via.placeholder.com/400x400?text=Card+Printing",
    },
    {
      id: 2,
      category: "digital-invitation",
      name: "Digital Invitation Designer",
      description:
        "Creative digital invitation designs that beautifully capture your wedding theme with stunning graphics and personalized touches",
      image: "https://via.placeholder.com/400x400?text=Digital+Invitation",
    },
    {
      id: 3,
      category: "ecard-video",
      name: "E-card Video Maker",
      description:
        "Animated video invitations that bring your wedding story to life with cinematic effects and captivating music",
      image: "https://via.placeholder.com/400x400?text=E-card+Video",
    },
    {
      id: 4,
      category: "whatsapp-invitation",
      name: "WhatsApp Invitation Designer",
      description:
        "Eye-catching WhatsApp invitation designs optimized for mobile viewing with interactive elements and easy sharing options",
      image: "https://via.placeholder.com/400x400?text=WhatsApp+Invitation",
    },
    {
      id: 5,
      category: "box-invitation",
      name: "Box Invitation Vendor",
      description:
        "Luxurious boxed invitations with creative packaging, premium materials, and unforgettable presentation for distinguished guests",
      image: "https://via.placeholder.com/400x400?text=Box+Invitation",
    },
    {
      id: 6,
      category: "gift-hamper",
      name: "Gift Hamper Packaging",
      description:
        "Elegant gift hamper solutions with beautiful packaging, curated contents, and personalized arrangements for wedding guests",
      image: "https://via.placeholder.com/400x400?text=Gift+Hamper",
    },
    {
      id: 7,
      category: "welcome-board",
      name: "Welcome Board Designer",
      description:
        "Custom-designed welcome boards featuring beautiful calligraphy, floral accents, and personalized messages for your venue entrance",
      image: "https://via.placeholder.com/400x400?text=Welcome+Board",
    },
    {
      id: 8,
      category: "flex-printing",
      name: "Flex Printing / Vinyl Printing Vendor",
      description:
        "Large format flex and vinyl printing services for banners, backdrops, signage, and decorative displays at your wedding venue",
      image: "https://via.placeholder.com/400x400?text=Flex+Printing",
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
            Invitation & Printing Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Beautiful Invitations That Set the Perfect Tone!
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

export default InvitationPrintingVendorsPage;