// frontend/src/app/(pages)/wedding-vendors/decoration-and-styling-vendors/page.jsx
"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronRight as BreadcrumbArrow } from "lucide-react";

const DecorationStylingVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "stage-decorators",
      name: "Stage Decorators",
      image: "https://i.pinimg.com/1200x/a3/79/6d/a3796de74dc9eaa4e61b3c74eac34bd3.jpg",
    },
    {
      id: "mandap-decorators",
      name: "Mandap/Vedi Decorators",
      image: "https://i.pinimg.com/736x/c2/58/7d/c2587d9d9c93b7af15a73f99e7dc1cd9.jpg",
    },
    {
      id: "haldi-decor",
      name: "Haldi Decor Setup",
      image: "https://i.pinimg.com/736x/fa/46/fe/fa46fee2fd3f27fe892cf8512b52a9cb.jpg",
    },
    {
      id: "mehendi-decor",
      name: "Mehendi Decor",
      image: "https://i.pinimg.com/1200x/b6/17/7c/b6177c624259a27cca48cce33ea83142.jpg",
    },
    {
      id: "floral-decor",
      name: "Floral Decor",
      image: "https://i.pinimg.com/1200x/4a/9b/c5/4a9bc552467136bcb62ef6797e18b450.jpg",
    },
    {
      id: "balloon-decor",
      name: "Balloon Decor",
      image: "https://i.pinimg.com/736x/3d/b5/bc/3db5bcd769a37924b0a3b65cab9711ef.jpg",
    },
    {
      id: "lighting-decor",
      name: "Lighting Decor",
      image: "https://i.pinimg.com/1200x/b0/2a/33/b02a334a9a2cc2704a1aa387b3e86fd9.jpg",
    },
    {
      id: "entrance-decor",
      name: "Entrance Gate Decor",
      image: "https://i.pinimg.com/736x/14/9e/7e/149e7eac43d09e85a2f013cb16e6e933.jpg",
    },
    {
      id: "photobooth-decor",
      name: "Photobooth Decor",
      image: "https://i.pinimg.com/736x/43/e2/69/43e26995c25f4c2a8c39d6751b2dcde3.jpg",
    },
    {
      id: "centerpiece-decor",
      name: "Table Centerpiece",
      image: "https://i.pinimg.com/736x/10/9a/a9/109aa902758df62d701ea6b6dfafd2a5.jpg",
    },
    {
      id: "props-provider",
      name: "Props Provider",
      image: "https://i.pinimg.com/1200x/f1/8a/ab/f18aaba2ac18c2fe00ad66f99c172bb1.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "stage-decorators",
      name: "Stage Decorators",
      description:
        "Stunning stage setups that create the perfect backdrop for your special moments with elegant designs and lighting",
      image: "https://i.pinimg.com/1200x/0e/5d/e4/0e5de4f08c855eb7117b5e20affa20a4.jpg",
    },
    {
      id: 2,
      category: "mandap-decorators",
      name: "Mandap/Vedi Decorators",
      description:
        "Traditional and contemporary mandap designs that blend spirituality with aesthetics for your sacred ceremony",
      image: "https://i.pinimg.com/736x/58/b8/3a/58b83af895ac2a764d6e0744e147812c.jpg",
    },
    {
      id: 3,
      category: "haldi-decor",
      name: "Haldi Decor Setup Vendor",
      description:
        "Vibrant and cheerful haldi ceremony decorations featuring marigolds, colorful drapes, and traditional elements",
      image: "https://i.pinimg.com/736x/d5/41/ce/d541ce392e4e531930feef7fbca7765c.jpg",
    },
    {
      id: 4,
      category: "mehendi-decor",
      name: "Mehendi Decor Vendor",
      description:
        "Beautiful mehendi setup with colorful cushions, umbrellas, and floral arrangements creating a festive atmosphere",
      image: "https://i.pinimg.com/736x/ad/5d/69/ad5d698afb415fe786838438d4bd65e9.jpg",
    },
    {
      id: 5,
      category: "floral-decor",
      name: "Floral Decor Vendor",
      description:
        "Exquisite floral arrangements and installations that add natural beauty and fragrance to your celebration",
      image: "https://i.pinimg.com/1200x/7f/12/42/7f1242acc3533637e515de145c25f3c4.jpg",
    },
    {
      id: 6,
      category: "balloon-decor",
      name: "Balloon Decor Vendor",
      description:
        "Creative balloon artistry with arches, columns, and installations that add whimsy and color to your venue",
      image: "https://i.pinimg.com/1200x/e9/64/aa/e964aa9187229955624628f2b7e43ee7.jpg",
    },
    {
      id: 7,
      category: "lighting-decor",
      name: "Lighting Decor Vendor",
      description:
        "Transformative lighting solutions including fairy lights, chandeliers, and uplighting to create magical ambiance",
      image: "https://i.pinimg.com/736x/b5/d1/40/b5d1408da31f3e615bb06d7a5cfa9904.jpg",
    },
    {
      id: 8,
      category: "entrance-decor",
      name: "Entrance Gate Decor Vendor",
      description:
        "Grand entrance designs with floral arches, drapes, and lighting to welcome guests in style",
      image: "https://i.pinimg.com/736x/ba/93/d4/ba93d455e7d9b4fd24db486318560af2.jpg",
    },
    {
      id: 9,
      category: "photobooth-decor",
      name: "Photobooth Decor Vendor",
      description:
        "Instagram-worthy photobooth setups with creative backdrops, props, and themed decorations for memorable photos",
      image: "https://i.pinimg.com/1200x/3c/07/da/3c07da704d106d2a1db601beef42da96.jpg",
    },
    {
      id: 10,
      category: "centerpiece-decor",
      name: "Table Centerpiece Decor Artist",
      description:
        "Elegant table centerpieces featuring florals, candles, and artistic arrangements to enhance your dining experience",
      image: "https://i.pinimg.com/736x/12/19/35/1219350893e1db3013f5ead9562777eb.jpg",
    },
    {
      id: 11,
      category: "props-provider",
      name: "Props Provider",
      description:
        "Extensive collection of decorative props including vintage items, themed accessories, and customized elements",
      image: "https://i.pinimg.com/1200x/a5/a1/4e/a5a14e2eb1f1d9c3d49aba1e96196b8c.jpg",
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
          <h1 className="text-4xl md:text-6xl font-medium uppercase mb-2 text-center drop-shadow-lg">
            Decoration & Styling Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Transform Your Vision into Breathtaking Reality!
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
                    className="flex flex-col items-center min-w-27.5 shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                    className="flex flex-col items-center min-w-27.5 shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
            <BreadcrumbArrow className="w-4 h-4 text-gray-400" />
            <span className="text-rose-500 font-medium text-lg">Decoration & Styling Vendors</span>
          </nav>
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
                  className="w-full mt-6 bg-linear-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
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

export default DecorationStylingVendorsPage;
