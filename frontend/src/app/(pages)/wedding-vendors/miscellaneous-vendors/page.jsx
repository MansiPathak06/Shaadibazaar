"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const MiscellaneousVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "balloon",
      name: "Balloon Dropping",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400",
      link: "/balloon-dropping",
    },
    {
      id: "coldpyro",
      name: "Cold Pyro",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
      link: "/cold-pyro",
    },
    {
      id: "co2jet",
      name: "CO2 Jet",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
      link: "/co2-jet",
    },
    {
      id: "confetti",
      name: "Confetti Cannon",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400",
      link: "/confetti-cannon",
    },
    {
      id: "fog",
      name: "Fog Machine",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
      link: "/fog-machine",
    },
    {
      id: "bubble",
      name: "Bubble Machine",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      link: "/bubble-machine",
    },
    {
      id: "snow",
      name: "Snow Machine",
      image:
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400",
      link: "/snow-machine",
    },
    {
      id: "puppet",
      name: "Puppet Show",
      image:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=400",
      link: "/puppet-show",
    },
    {
      id: "cardecor",
      name: "Car Decoration",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=400",
      link: "/car-decoration",
    },
    {
      id: "flowershower",
      name: "Flower Shower",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
      link: "/flower-shower",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "balloon",
      name: "Balloon Dropping Setup",
      description:
        "Create magical moments with cascading balloons that drop at the perfect time, adding surprise and joy to your celebration",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600",
    },
    {
      id: 2,
      category: "coldpyro",
      name: "Cold Pyro & Special Effects",
      description:
        "Safe and spectacular cold pyrotechnics and special effects that create stunning visual displays without heat or danger",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
    },
    {
      id: 3,
      category: "co2jet",
      name: "CO2 Jet Vendor",
      description:
        "High-energy CO2 jets that shoot dramatic plumes of white fog, creating an electrifying atmosphere for your celebration",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
    },
    {
      id: 4,
      category: "confetti",
      name: "Confetti Cannon Vendor",
      description:
        "Explosive bursts of colorful confetti that fill the air with celebration, perfect for grand entrances and special moments",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600",
    },
    {
      id: 5,
      category: "fog",
      name: "Fog Machine Vendor",
      description:
        "Professional fog machines that create enchanting, dreamy atmospheres and dramatic effects for your wedding moments",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
    },
    {
      id: 6,
      category: "bubble",
      name: "Bubble Machine Vendor",
      description:
        "Whimsical bubble machines that fill your venue with thousands of floating bubbles, creating a fairytale-like ambiance",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
    },
    {
      id: 7,
      category: "snow",
      name: "Snow Machine Vendor",
      description:
        "Artificial snow machines that transform any venue into a winter wonderland, perfect for romantic and unique celebrations",
      image:
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600",
    },
    {
      id: 8,
      category: "puppet",
      name: "Puppet Show Vendor",
      description:
        "Entertaining puppet shows that delight guests of all ages with captivating stories and colorful characters",
      image:
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600",
    },
    {
      id: 9,
      category: "cardecor",
      name: "Car Decoration Vendor",
      description:
        "Elegant and creative car decorations with flowers, ribbons, and ornaments for the bride, groom, and wedding party vehicles",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600",
    },
    {
      id: 10,
      category: "flowershower",
      name: "Flower Shower Machine Vendor",
      description:
        "Automated flower shower machines that create stunning cascades of fresh petals, adding romance and elegance to your ceremony",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600",
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
            Miscellaneous Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Add That Extra Sparkle to Your Special Day!
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

export default MiscellaneousVendorsPage;