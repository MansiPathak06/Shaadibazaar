"use client";
import React, { useState, useRef } from "react";
<<<<<<< HEAD
import { ChevronLeft, ChevronRight as BreadcrumbArrow, Home } from "lucide-react";
=======
import { useRouter } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
>>>>>>> 3cc04b20ed1d998a550991e32d5f6cf86d08862a

const PhotographyMediaVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "traditional-photography",
      name: "Traditional Photography",
      image:
        "https://i.pinimg.com/1200x/43/bc/b5/43bcb5d61f8287ff8b7b029c8bf09f0e.jpg",
      link: "/traditional-photography",
    },
    {
      id: "candid",
      name: "Candid Photography",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      link: "/candid-photography",
    },
    {
      id: "drone",
      name: "Drone Camera Operator",
      image:
        "https://i.pinimg.com/736x/c1/4d/a0/c14da01b3f35f3be360b8adbfad4fc27.jpg",
      link: "/drone-camera",
    },
    {
      id: "cinematic",
      name: "Cinematic Videography",
      image:
        "https://i.pinimg.com/736x/42/26/91/422691e09e79e96b7075ef306a9c2d07.jpg",
      link: "/cinematic-videography",
    },
    {
      id: "livestream",
      name: "LED Live Streaming",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      link: "/led-livestreaming",
    },
    {
      id: "reel",
      name: "Wedding Reel Creator",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400",
      link: "/wedding-reel-creator",
    },
    {
      id: "editing",
      name: "Photo Editing & Album",
      image:
        "https://i.pinimg.com/736x/1e/41/63/1e416367adbed8e867540981117a8a8f.jpg",
      link: "/photo-editing-album",
    },
    {
      id: "360camera",
      name: "360° Camera Booth",
      image:
        "https://i.pinimg.com/736x/5c/4a/33/5c4a337d9a058c51ba10359d9b72b634.jpg",
      link: "/360-camera-booth",
    },
    {
      id: "photobooth",
      name: "Photobooth with Props",
      image:
        "https://i.pinimg.com/1200x/b3/1c/18/b31c1864046a65dc8f3bb76acf272821.jpg",
      link: "/photobooth-props",
    },
    {
      id: "polaroid",
      name: "Instant Print Polaroid",
      image:
        "https://i.pinimg.com/1200x/83/96/65/8396657fc32672823d77d1ae531e0e07.jpg",
      link: "/instant-print-polaroid",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "traditional-photography",
      name: "Traditional Photography",
      description:
        "Classic and timeless photography capturing formal portraits and traditional wedding moments with elegance and grace",
      image:
        "https://i.pinimg.com/1200x/43/bc/b5/43bcb5d61f8287ff8b7b029c8bf09f0e.jpg",
    },
    {
      id: 2,
      category: "candid-photography",
      name: "Candid Photography",
      description:
        "Natural and spontaneous moments captured beautifully, telling your wedding story through genuine emotions and expressions",
      image:
        "https://i.pinimg.com/1200x/f0/fe/dc/f0fedc1c36059b6dc1b043d312f9e44a.jpg",
    },
    {
      id: 3,
      category: "drone-camera-operator",
      name: "Drone Camera Operator",
      description:
        "Breathtaking aerial shots and cinematic overhead views that add a stunning perspective to your wedding coverage",
      image:
        "https://i.pinimg.com/736x/c1/4d/a0/c14da01b3f35f3be360b8adbfad4fc27.jpg",
    },
    {
      id: 4,
      category: "cinematic-videography",
      name: "Cinematic Videography",
      description:
        "Hollywood-style wedding films with artistic direction, perfect color grading, and emotional storytelling that feels like a movie",
      image:
        "https://i.pinimg.com/736x/42/26/91/422691e09e79e96b7075ef306a9c2d07.jpg",
    },
    {
      id: 5,
      category: "livestream-stream",
      name: "LED Live Streaming Team",
      description:
        "Professional live streaming services with LED screens allowing distant loved ones to witness your special moments in real-time",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    },
    {
      id: 6,
      category: "reel-creator",
      name: "Wedding Reel Creator",
      description:
        "Trendy and engaging wedding reels for social media, capturing highlights in short, shareable, and creative video formats",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    },
    {
      id: 7,
      category: "editing-vendor",
      name: "Photo Editing & Album Vendor",
      description:
        "Professional post-production services with retouching, color correction, and beautifully designed albums to treasure forever",
      image:
        "https://i.pinimg.com/736x/1e/41/63/1e416367adbed8e867540981117a8a8f.jpg",
    },
    {
      id: 8,
      category: "360camera",
      name: "360° Camera Booth",
      description:
        "Interactive 360-degree video booth creating stunning slow-motion rotating videos that wow your guests and go viral",
      image:
        "https://i.pinimg.com/736x/5c/4a/33/5c4a337d9a058c51ba10359d9b72b634.jpg",
    },
    {
      id: 9,
      category: "photobooth",
      name: "Photobooth with Props",
      description:
        "Fun and entertaining photo booth with creative props and backdrops, giving guests instant memories and entertainment",
      image:
        "https://i.pinimg.com/1200x/b3/1c/18/b31c1864046a65dc8f3bb76acf272821.jpg",
    },
    {
      id: 10,
      category: "polaroid",
      name: "Instant Print Polaroid Team",
      description:
        "Nostalgic instant photography service providing guests with immediate physical prints as memorable wedding favors",
      image:
        "https://i.pinimg.com/1200x/83/96/65/8396657fc32672823d77d1ae531e0e07.jpg",
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
            <span className="text-gray-900 font-medium">Photography & Media Vendors</span>
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
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-medium uppercase mb-2 text-center drop-shadow-lg">
            Photography & Media Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Capturing Every Precious Moment, Creating Timeless Memories!
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
<<<<<<< HEAD
                    onClick={() => handleCategoryClick(cat.link)}
                    className="flex flex-col items-center min-w-27.5 shrink-0 transition-all hover:scale-105 group/item"
=======
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
>>>>>>> 3cc04b20ed1d998a550991e32d5f6cf86d08862a
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
<<<<<<< HEAD
                    onClick={() => handleCategoryClick(cat.link)}
                    className="flex flex-col items-center min-w-27.5 shrink-0 transition-all hover:scale-105 group/item"
=======
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
>>>>>>> 3cc04b20ed1d998a550991e32d5f6cf86d08862a
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
            <span className="text-rose-500 font-medium text-lg">Photography & Media Vendors</span>
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
<<<<<<< HEAD
                <button className="w-full mt-6 bg-linear-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
=======
                <button 
                  onClick={() => handleViewAllClick(vendor.category)}
                  className="w-full mt-6 bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
                >
>>>>>>> 3cc04b20ed1d998a550991e32d5f6cf86d08862a
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

export default PhotographyMediaVendorsPage;