"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const EntertainmentVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "singer",
      name: "Live Singer",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/live-singer",
    },
    {
      id: "sufi",
      name: "Sufi Band",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/sufi-band",
    },
    {
      id: "qawwali",
      name: "Qawwali Group",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/qawwali-group",
    },
    {
      id: "folk",
      name: "Folk Dance Groups",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/folk-dance",
    },
    {
      id: "instrumental",
      name: "Instrumental Band",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/instrumental-band",
    },
    {
      id: "anchor",
      name: "Anchor / Emcee",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/anchor-emcee",
    },
    {
      id: "choreographer",
      name: "Choreographer",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/choreographer",
    },
    {
      id: "dj-dance",
      name: "DJ & Dance Floor",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/dj-dance-floor",
    },
    {
      id: "led",
      name: "LED Wall Provider",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/led-wall",
    },
    {
      id: "sound",
      name: "Sound System",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/sound-system",
    },
    {
      id: "celebrity",
      name: "Celebrity Performer",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/celebrity-performer",
    },
    {
      id: "fire",
      name: "Fire Act / Jugglers",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/fire-act",
    },
    {
      id: "kids",
      name: "Kids Entertainment",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
      link: "/kids-entertainment",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "singer",
      name: "Live Singer",
      description:
        "Professional vocalists who bring soulful melodies and enchanting performances to mesmerize your guests",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 2,
      category: "sufi",
      name: "Sufi Band",
      description:
        "Mystical Sufi music that touches the soul with spiritual melodies and traditional instruments",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 3,
      category: "qawwali",
      name: "Qawwali Group",
      description:
        "Authentic Qawwali performances with powerful vocals and rhythmic harmonium creating divine ambiance",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 4,
      category: "folk",
      name: "Folk Dance Groups",
      description:
        "Traditional folk dancers showcasing regional culture with vibrant costumes and energetic performances",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 5,
      category: "instrumental",
      name: "Instrumental Band",
      description:
        "Skilled musicians creating magical atmospheres with instrumental melodies from classical to contemporary",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 6,
      category: "anchor",
      name: "Anchor / Emcee",
      description:
        "Charismatic hosts who keep your event flowing smoothly with engaging commentary and crowd interaction",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 7,
      category: "choreographer",
      name: "Choreographer",
      description:
        "Expert dance directors who create stunning performances and teach memorable routines for your special day",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 8,
      category: "dj-dance",
      name: "DJ & Dance Floor Provider",
      description:
        "Complete DJ setups with premium dance floors, lighting effects, and music that keeps everyone moving",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 9,
      category: "led",
      name: "LED Wall Provider",
      description:
        "High-resolution LED screens for live displays, photo slideshows, and creating immersive visual experiences",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 10,
      category: "sound",
      name: "Sound System Vendor",
      description:
        "Professional audio equipment with crystal-clear sound quality ensuring every word and note is heard perfectly",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 11,
      category: "celebrity",
      name: "Celebrity Performer",
      description:
        "Star-studded performances by renowned artists that make your celebration truly extraordinary and unforgettable",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 12,
      category: "fire",
      name: "Fire Act Artist / Jugglers",
      description:
        "Thrilling fire performances and skilled juggling acts that add excitement and wow-factor to your event",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
    },
    {
      id: 13,
      category: "kids",
      name: "Kids Entertainment Team",
      description:
        "Engaging activities, games, and performances specially designed to keep young guests entertained and happy",
      image:
        "https://i.pinimg.com/736x/e8/9c/3a/e89c3a8f5e9e8c5f5e5f5e5f5e5f5e5f.jpg",
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
            Entertainment Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Unforgettable Performances for Your Special Day!
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
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-purple-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-purple-500 transition-colors">
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
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md group-hover/item:shadow-xl transition-all border-4 border-white group-hover/item:border-purple-300">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 group-hover/item:text-purple-500 transition-colors">
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
              className="bg-purple-100 rounded-t-full rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
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
                <button className="w-full mt-6 bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-3 rounded-lg hover:from-purple-500 hover:to-indigo-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
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

export default EntertainmentVendorsPage;