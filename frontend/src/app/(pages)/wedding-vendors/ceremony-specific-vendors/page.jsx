"use client";
import React, { useState, useRef } from "react";
import { Home, ChevronRight as BreadcrumbArrow } from "lucide-react";
import { useRouter } from "next/navigation";

const CeremonyVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  // Category map for vendors → actual backend categories
  const categoryMap = {
    1: "hindu-priest",
    2: "mandap-setup",
    3: "varmala-stage",
    4: "qazi-nikah",
    5: "doli-arrangement",
    6: "walima-setup",
    7: "granthi-ji",
    8: "gurudwara-team",
    9: "pastor-father",
    10: "church-choir",
  };

  const categories = [
    {
      id: "hindu-priest",
      name: "Hindu Priest",
      image: "https://i.pinimg.com/736x/4f/c9/e5/4fc9e57ee86914ca403440deb889a6ef.jpg",
    },
    {
      id: "mandap",
      name: "Mandap Setup",
      image: "https://i.pinimg.com/736x/bf/e4/6d/bfe46d6fc6ca70620a805d803378ade9.jpg",
    },
    {
      id: "varmala",
      name: "Varmala Stage",
      image: "https://i.pinimg.com/736x/a0/d9/80/a0d980722acf383c5ba255936ff3dd75.jpg",
    },
    {
      id: "qazi",
      name: "Qazi for Nikah",
      image: "https://i.pinimg.com/736x/c4/21/16/c421169e86425e7b64e1ddb32ecd7df2.jpg",
    },
    {
      id: "doli",
      name: "Doli Arrangement",
      image: "https://i.pinimg.com/736x/9a/e5/e2/9ae5e27619bfc853e2aaf441c06a34c9.jpg",
    },
    {
      id: "walima",
      name: "Walima Setup",
      image: "https://i.pinimg.com/474x/1c/d5/f5/1cd5f55c78713f11e7dc4f59c3472678.jpg",
    },
    {
      id: "granthi",
      name: "Granthi Ji",
      image: "https://i.pinimg.com/1200x/fb/f8/1d/fbf81d100d13c77558205a311d8e29ad.jpg",
    },
    {
      id: "gurudwara",
      name: "Gurudwara Team",
      image: "https://i.pinimg.com/736x/53/a4/c8/53a4c8538bc22bb704210d78f4ea07bb.jpg",
    },
    {
      id: "pastor",
      name: "Pastor/Father",
      image: "https://i.pinimg.com/1200x/39/8e/72/398e72d81f8727430338633ce965e8e1.jpg",
    },
    {
      id: "choir",
      name: "Church Choir",
      image: "https://i.pinimg.com/736x/7b/27/95/7b2795f5ed2601c5639fdd615f4b503c.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "hindu-priest",
      name: "Hindu Priest (Pandit Ji)",
      description:
        "Experienced and knowledgeable priests who conduct traditional Hindu wedding rituals with devotion and authenticity, ensuring every sacred moment is honored",
      image: "https://i.pinimg.com/736x/c5/0d/5d/c50d5d69fbb57f7d22df6b2033e4ad9b.jpg",
    },
    {
      id: 2,
      category: "mandap-setup",
      name: "Mandap Setup Vendor",
      description:
        "Beautiful and elaborate mandap designs that serve as the sacred centerpiece for your Hindu wedding ceremony, crafted with traditional elements and modern elegance",
      image: "https://i.pinimg.com/736x/c6/42/e3/c642e3610858dd111a18bcecc0312b36.jpg",
    },
    {
      id: 3,
      category: "varmala-stage",
      name: "Varmala Stage Vendor",
      description:
        "Stunning varmala exchange stages with artistic designs and floral arrangements, creating the perfect backdrop for this beautiful wedding moment",
      image: "https://i.pinimg.com/1200x/07/ab/c5/07abc5b7953e6166c5cbb535ff8ce0c1.jpg",
    },
    {
      id: 4,
      category: "qazi-nikah",
      name: "Qazi for Nikah",
      description:
        "Respected and experienced Qazi who conducts the Nikah ceremony with proper Islamic traditions, guiding couples through this sacred union with wisdom and grace",
      image: "https://i.pinimg.com/736x/ac/de/a7/acdea7230a9b712c588d1f980159b1dc.jpg",
    },
    {
      id: 5,
      category: "doli-arrangement",
      name: "Doli Arrangement",
      description:
        "Traditional and beautifully decorated doli arrangements for the bride's departure, adding emotional depth and cultural significance to this special moment",
      image: "https://i.pinimg.com/736x/a3/67/db/a367dba3a832caa48f1509135a54234d.jpg",
    },
    {
      id: 6,
      category: "walima-setup",
      name: "Walima Dinner Setup",
      description:
        "Elegant and sophisticated Walima dinner arrangements with premium décor, seating, and ambiance that celebrates the couple's union with family and friends",
      image: "https://i.pinimg.com/1200x/b1/7b/32/b17b32138d759d5f68c6b910b28eba83.jpg",
    },
    {
      id: 7,
      category: "granthi-ji",
      name: "Granthi Ji",
      description:
        "Dedicated Granthi Ji who performs the Anand Karaj ceremony with spiritual reverence, reciting from the Guru Granth Sahib and blessing the couple's journey together",
      image: "https://i.pinimg.com/1200x/f2/e9/92/f2e992821117eab5d0ec02c120561042.jpg",
    },
    {
      id: 8,
      category: "gurudwara-team",
      name: "Gurudwara Coordination Team",
      description:
        "Professional coordination team that manages all aspects of Gurudwara wedding ceremonies, ensuring smooth execution of rituals and comfortable experience for guests",
      image: "https://i.pinimg.com/736x/7c/85/69/7c8569209bc5bab7f147910b02274250.jpg",
    },
    {
      id: 9,
      category: "pastor-father",
      name: "Pastor / Father",
      description:
        "Compassionate and experienced clergy who officiate Christian wedding ceremonies with heartfelt blessings, guiding couples through their sacred vows before God",
      image: "https://i.pinimg.com/1200x/6f/bd/b1/6fbdb1535dbfa7c1a4eca84d09a5bfc3.jpg",
    },
    {
      id: 10,
      category: "church-choir",
      name: "Church Choir",
      description:
        "Talented choir groups that fill your church wedding with beautiful hymns and spiritual music, creating a divine atmosphere for your special ceremony",
      image: "https://i.pinimg.com/1200x/a7/f7/22/a7f722d8c5e20b894e133c3b3880f916.jpg",
    },
  ];

  const handleCategoryClick = (categoryId) => {
    // Navigate to your working wedding-vendors/[category] route
    router.push(`/wedding-vendors/${categoryId}`);
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

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-1 text-gray-600 hover:text-rose-500 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <BreadcrumbArrow className="w-4 h-4 text-gray-400" />
            <span className="text-rose-500 font-semibold text-lg">
              Ceremony-Specific Vendors
            </span>
          </nav>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-rose-100 rounded-t-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-50 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content + Button */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-800 mb-3 text-center group-hover:text-rose-500 transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-sm font-normal text-gray-800 mb-3">
                    {vendor.description}
                  </p>
                </div>

                {/* Button stays at bottom */}
                <button
                  onClick={() => {
                    router.push(`/wedding-vendors/${categoryMap[vendor.id]}`);
                  }}
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
