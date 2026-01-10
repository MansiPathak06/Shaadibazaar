// frontend/src/app/(pages)/wedding-vendors/entertainment-vendors/page.jsx
"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const EntertainmentVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "live-singer",
      name: "Live Singer",
      image: "https://i.pinimg.com/736x/19/be/43/19be43ad868b901396c6aac18ba5cca8.jpg",
    },
    {
      id: "sufi-band",
      name: "Sufi Band",
      image: "https://i.pinimg.com/1200x/00/b9/aa/00b9aa64c4f7e060d2d88e62c45987d2.jpg",
    },
    {
      id: "qawwali-group",
      name: "Qawwali Group",
      image: "https://i.pinimg.com/736x/2e/15/b1/2e15b10a9e4129fd3a5c0e668a46145d.jpg",
    },
    {
      id: "folk-dance",
      name: "Folk Dance Groups",
      image: "https://i.pinimg.com/1200x/b5/e4/9c/b5e49c4d9689d52af22b1138d495a1b9.jpg",
    },
    {
      id: "instrumental-band",
      name: "Instrumental Band",
      image: "https://i.pinimg.com/736x/f8/b4/c8/f8b4c83674f4faaf58433c59f1f2132b.jpg",
    },
    {
      id: "anchor-emcee",
      name: "Anchor / Emcee",
      image: "https://i.pinimg.com/1200x/68/36/0f/68360f467266f089fc9e3505c0cc07a0.jpg",
    },
    {
      id: "choreographer",
      name: "Choreographer",
      image: "https://i.pinimg.com/736x/fd/2c/57/fd2c57a247d0bb9baca0151dae98437b.jpg",
    },
    {
      id: "dj-dance-floor",
      name: "DJ & Dance Floor",
      image: "https://i.pinimg.com/736x/c9/57/4f/c9574f874183e8a7054053ffbec2df7a.jpg",
    },
    {
      id: "led-wall",
      name: "LED Wall Provider",
      image: "https://i.pinimg.com/736x/23/6f/b9/236fb9142ffa5fa53b8c5ffd039d3e5c.jpg",
    },
    {
      id: "sound-system",
      name: "Sound System",
      image: "https://i.pinimg.com/1200x/fa/80/73/fa8073312e772a6fbf1c0ec2c2f307b5.jpg",
    },
    {
      id: "celebrity-performer",
      name: "Celebrity Performer",
      image: "https://i.pinimg.com/1200x/46/9b/b3/469bb37a63b588c5233ad61c05637605.jpg",
    },
    {
      id: "fire-act",
      name: "Fire Act / Jugglers",
      image: "https://i.pinimg.com/1200x/0a/8a/bc/0a8abc0c27a3e52cb19e6b77f6900436.jpg",
    },
    {
      id: "kids-entertainment",
      name: "Kids Entertainment",
      image: "https://i.pinimg.com/1200x/21/ea/53/21ea5358bc32ea291f006d23f3feab74.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "live-singer",
      name: "Live Singer",
      description:
        "Professional vocalists who bring soulful melodies and enchanting performances to mesmerize your guests",
      image: "https://i.pinimg.com/736x/e5/d6/44/e5d644d61e71bef9f96704cf533eb947.jpg",
    },
    {
      id: 2,
      category: "sufi-band",
      name: "Sufi Band",
      description:
        "Mystical Sufi music that touches the soul with spiritual melodies and traditional instruments",
      image: "https://i.pinimg.com/1200x/96/12/98/961298283a0ad830c180c402070a2db5.jpg",
    },
    {
      id: 3,
      category: "qawwali-group",
      name: "Qawwali Group",
      description:
        "Authentic Qawwali performances with powerful vocals and rhythmic harmonium creating divine ambiance",
      image: "https://i.pinimg.com/1200x/88/7e/4c/887e4c95c17d19d0f3d616128d5068f7.jpg",
    },
    {
      id: 4,
      category: "folk-dance",
      name: "Folk Dance Groups",
      description:
        "Traditional folk dancers showcasing regional culture with vibrant costumes and energetic performances",
      image: "https://i.pinimg.com/736x/42/f1/18/42f118d2bc40deb10cdc117e9e9ff6c5.jpg",
    },
    {
      id: 5,
      category: "instrumental-band",
      name: "Instrumental Band",
      description:
        "Skilled musicians creating magical atmospheres with instrumental melodies from classical to contemporary",
      image: "https://i.pinimg.com/1200x/c0/85/3d/c0853da258fb21e892f386ff3fd12c2f.jpg",
    },
    {
      id: 6,
      category: "anchor-emcee",
      name: "Anchor / Emcee",
      description:
        "Charismatic hosts who keep your event flowing smoothly with engaging commentary and crowd interaction",
      image: "https://i.pinimg.com/1200x/68/36/0f/68360f467266f089fc9e3505c0cc07a0.jpg",
    },
    {
      id: 7,
      category: "choreographer",
      name: "Choreographer",
      description:
        "Expert dance directors who create stunning performances and teach memorable routines for your special day",
      image: "https://i.pinimg.com/736x/fd/2c/57/fd2c57a247d0bb9baca0151dae98437b.jpg",
    },
    {
      id: 8,
      category: "dj-dance-floor",
      name: "DJ & Dance Floor Provider",
      description:
        "Complete DJ setups with premium dance floors, lighting effects, and music that keeps everyone moving",
      image: "https://i.pinimg.com/736x/ee/7b/93/ee7b93f7581e80dde73d3fc10382c4ba.jpg",
    },
    {
      id: 9,
      category: "led-wall",
      name: "LED Wall Provider",
      description:
        "High-resolution LED screens for live displays, photo slideshows, and creating immersive visual experiences",
      image: "https://i.pinimg.com/1200x/90/a3/f2/90a3f22793890f4e17b233bb259866d4.jpg",
    },
    {
      id: 10,
      category: "sound-system",
      name: "Sound System Vendor",
      description:
        "Professional audio equipment with crystal-clear sound quality ensuring every word and note is heard perfectly",
      image: "https://i.pinimg.com/1200x/a9/7c/9e/a97c9e9dd5fbc558992252d44124ec92.jpg",
    },
    {
      id: 11,
      category: "celebrity-performer",
      name: "Celebrity Performer",
      description:
        "Star-studded performances by renowned artists that make your celebration truly extraordinary and unforgettable",
      image: "https://i.pinimg.com/736x/33/a9/36/33a93665af894ec121d3622e9f60e795.jpg",
    },
    {
      id: 12,
      category: "fire-act",
      name: "Fire Act Artist / Jugglers",
      description:
        "Thrilling fire performances and skilled juggling acts that add excitement and wow-factor to your event",
      image: "https://i.pinimg.com/1200x/0a/8a/bc/0a8abc0c27a3e52cb19e6b77f6900436.jpg",
    },
    {
      id: 13,
      category: "kids-entertainment",
      name: "Kids Entertainment Team",
      description:
        "Engaging activities, games, and performances specially designed to keep young guests entertained and happy",
      image: "https://i.pinimg.com/1200x/82/0c/b6/820cb6d187ed06459301febc7d9215ca.jpg",
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
              className="flex items-center gap-1 text-gray-600 hover:text-purple-500 transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">Entertainment Vendors</span>
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
            Entertainment Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Unforgettable Performances for Your Special Day!
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
                    onClick={() => handleCategoryClick(cat.id)}
                    className="flex flex-col items-center min-w-[110px] flex-shrink-0 transition-all hover:scale-105 group/item cursor-pointer"
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
                  className="w-full mt-6 bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-3 rounded-lg hover:from-purple-500 hover:to-indigo-600 transition-all duration-300 font-medium shadow-md hover:shadow-lg cursor-pointer"
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

export default EntertainmentVendorsPage;
