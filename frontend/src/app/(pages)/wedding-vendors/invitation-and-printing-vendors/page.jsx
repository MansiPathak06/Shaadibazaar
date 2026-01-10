// frontend/src/app/(pages)/wedding-vendors/invitation-and-printing-vendors/page.jsx
"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const InvitationPrintingVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "card-printing",
      name: "Card Printing Shop",
      image: "https://i.pinimg.com/1200x/46/06/2d/46062dd48a2537a5781af5404dfb2f6e.jpg",
    },
    {
      id: "digital-invitation",
      name: "Digital Invitation Designer",
      image: "https://i.pinimg.com/1200x/ee/3f/ea/ee3fea9f057e6e39b87106a88c7191b6.jpg",
    },
    {
      id: "ecard-video",
      name: "E-card Video Maker",
      image: "https://i.pinimg.com/1200x/72/42/4c/72424c8f94355e489472d2c221e915ec.jpg",
    },
    {
      id: "whatsapp-invitation",
      name: "WhatsApp Invitation Designer",
      image: "https://i.pinimg.com/1200x/9d/08/0a/9d080a088b4f13a6999e78921c43074c.jpg",
    },
    {
      id: "box-invitation",
      name: "Box Invitation Vendor",
      image: "https://i.pinimg.com/736x/b1/73/ab/b173ab105b4114d011c66e99684bc99a.jpg",
    },
    {
      id: "gift-hamper",
      name: "Gift Hamper Packaging",
      image: "https://i.pinimg.com/1200x/65/73/59/657359bfc7caee58baab3af362aaea18.jpg",
    },
    {
      id: "welcome-board",
      name: "Welcome Board Designer",
      image: "https://i.pinimg.com/1200x/70/d7/ca/70d7cac01a3197b90fe961906706f193.jpg",
    },
    {
      id: "flex-printing",
      name: "Flex/Vinyl Printing",
      image: "https://i.pinimg.com/1200x/cd/a0/e3/cda0e39428984a198243cb6b2dbd310f.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "card-printing",
      name: "Card Printing Shop",
      description:
        "Premium wedding card printing services with exquisite designs, luxury paper stocks, and elegant finishes for your special invitations",
      image: "https://i.pinimg.com/1200x/43/b1/93/43b1934999cc9241a4d699b9118f1afa.jpg",
    },
    {
      id: 2,
      category: "digital-invitation",
      name: "Digital Invitation Designer",
      description:
        "Creative digital invitation designs that beautifully capture your wedding theme with stunning graphics and personalized touches",
      image: "https://i.pinimg.com/1200x/8e/42/71/8e4271e4b8b95f24c01a0866b1be9cdd.jpg",
    },
    {
      id: 3,
      category: "ecard-video",
      name: "E-card Video Maker",
      description:
        "Animated video invitations that bring your wedding story to life with cinematic effects and captivating music",
      image: "https://i.pinimg.com/1200x/c3/dc/40/c3dc40a9ab5d71a932d7d80d2c5c36e0.jpg",
    },
    {
      id: 4,
      category: "whatsapp-invitation",
      name: "WhatsApp Invitation Designer",
      description:
        "Eye-catching WhatsApp invitation designs optimized for mobile viewing with interactive elements and easy sharing options",
      image: "https://i.pinimg.com/736x/25/bc/23/25bc2396093d1092d9afb4fb2776ed76.jpg",
    },
    {
      id: 5,
      category: "box-invitation",
      name: "Box Invitation Vendor",
      description:
        "Luxurious boxed invitations with creative packaging, premium materials, and unforgettable presentation for distinguished guests",
      image: "https://i.pinimg.com/736x/c8/79/0b/c8790ba78f0921f05c3c7bcb3aa00982.jpg",
    },
    {
      id: 6,
      category: "gift-hamper",
      name: "Gift Hamper Packaging",
      description:
        "Elegant gift hamper solutions with beautiful packaging, curated contents, and personalized arrangements for wedding guests",
      image: "https://i.pinimg.com/1200x/e8/f6/28/e8f628712a077aae1fddf2d168a8801c.jpg",
    },
    {
      id: 7,
      category: "welcome-board",
      name: "Welcome Board Designer",
      description:
        "Custom-designed welcome boards featuring beautiful calligraphy, floral accents, and personalized messages for your venue entrance",
      image: "https://i.pinimg.com/1200x/50/6e/07/506e073d7d50c864bdd19f985e40f874.jpg",
    },
    {
      id: 8,
      category: "flex-printing",
      name: "Flex/Vinyl Printing Vendor",
      description:
        "Large format flex and vinyl printing services for banners, backdrops, signage, and decorative displays at your wedding venue",
      image: "https://i.pinimg.com/736x/90/d3/f7/90d3f76283edaeefed17ed222f3409ab.jpg",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    router.push(`/wedding-vendors/${categoryId}`);
  };

  const handleViewAllClick = (categoryId) => {
    router.push(`/wedding-vendors/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-1 text-gray-600 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Invitation & Printing Vendors</span>
          </nav>
        </div>
      </div>

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
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                <button 
                  onClick={() => handleViewAllClick(vendor.category)}
                  className="w-full mt-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
                >
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

export default InvitationPrintingVendorsPage;
