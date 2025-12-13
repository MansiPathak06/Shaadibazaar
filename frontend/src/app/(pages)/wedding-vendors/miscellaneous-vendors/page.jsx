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
        "https://i.pinimg.com/736x/47/66/55/4766554ae19547241a92beae8fe8d068.jpg",
      link: "/balloon-dropping",
    },
    {
      id: "coldpyro",
      name: "Cold Pyro",
      image:
        "https://i.pinimg.com/736x/0e/3e/ba/0e3eba47e73cc95bbd9d23b82433aebe.jpg",
      link: "/cold-pyro",
    },
    {
      id: "co2jet",
      name: "CO2 Jet",
      image:
        "https://i.pinimg.com/1200x/b8/c4/d0/b8c4d061f363287886074b680558feeb.jpg",
      link: "/co2-jet",
    },
    {
      id: "confetti",
      name: "Confetti Cannon",
      image:
        "https://i.pinimg.com/736x/2c/a6/70/2ca67045abffa55f798879e53509b293.jpg",
      link: "/confetti-cannon",
    },
    {
      id: "fog",
      name: "Fog Machine",
      image:
        "https://i.pinimg.com/1200x/94/d2/81/94d281a704f4513ab80110e7ffb48467.jpg",
      link: "/fog-machine",
    },
    {
      id: "bubble",
      name: "Bubble Machine",
      image:
        "https://i.pinimg.com/1200x/e3/b5/6e/e3b56e54236532d401ea938856bbae31.jpg",
      link: "/bubble-machine",
    },
    {
      id: "snow",
      name: "Snow Machine",
      image:
        "https://i.pinimg.com/736x/ec/d8/42/ecd8429b1f68e6579cc92dca66737ebd.jpg",
      link: "/snow-machine",
    },
    {
      id: "puppet",
      name: "Puppet Show",
      image:
        "https://i.pinimg.com/736x/67/d8/c2/67d8c24342a26dee0258b7049ace9b54.jpg",
      link: "/puppet-show",
    },
    {
      id: "cardecor",
      name: "Car Decoration",
      image:
        "https://i.pinimg.com/736x/65/60/31/6560310996beef7d1fe5d9b772696a25.jpg",
      link: "/car-decoration",
    },
    {
      id: "flowershower",
      name: "Flower Shower",
      image:
        "https://i.pinimg.com/736x/0e/94/e2/0e94e2a69fa5c56e13bdb4fb1cb8fe29.jpg",
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
        "https://i.pinimg.com/1200x/fe/d0/b0/fed0b0b0b61c613e172aafc909aa855c.jpg",
    },
    {
      id: 2,
      category: "coldpyro",
      name: "Cold Pyro & Special Effects",
      description:
        "Safe and spectacular cold pyrotechnics and special effects that create stunning visual displays without heat or danger",
      image:
        "https://i.pinimg.com/1200x/ea/90/48/ea90486fe6ff4f7ef3ced3aeeee90dcf.jpg",
    },
    {
      id: 3,
      category: "co2jet",
      name: "CO2 Jet Vendor",
      description:
        "High-energy CO2 jets that shoot dramatic plumes of white fog, creating an electrifying atmosphere for your celebration",
      image:
        "https://i.pinimg.com/1200x/c7/fa/45/c7fa45335e6c083a6b8a214267398b22.jpg",
    },
    {
      id: 4,
      category: "confetti",
      name: "Confetti Cannon Vendor",
      description:
        "Explosive bursts of colorful confetti that fill the air with celebration, perfect for grand entrances and special moments",
      image:
        "https://i.pinimg.com/736x/99/13/37/9913370ad2b3f9f86335e316bda38bed.jpg",
    },
    {
      id: 5,
      category: "fog",
      name: "Fog Machine Vendor",
      description:
        "Professional fog machines that create enchanting, dreamy atmospheres and dramatic effects for your wedding moments",
      image:
        "https://i.pinimg.com/1200x/a7/6f/0c/a76f0cd6296f9ec80f26c5f5af944dac.jpg",
    },
    {
      id: 6,
      category: "bubble",
      name: "Bubble Machine Vendor",
      description:
        "Whimsical bubble machines that fill your venue with thousands of floating bubbles, creating a fairytale-like ambiance",
      image:
        "https://i.pinimg.com/736x/29/2e/52/292e52d4de4cbd210b34996aaeb79505.jpg",
    },
    {
      id: 7,
      category: "snow",
      name: "Snow Machine Vendor",
      description:
        "Artificial snow machines that transform any venue into a winter wonderland, perfect for romantic and unique celebrations",
      image:
        "https://i.pinimg.com/736x/5b/5e/86/5b5e86217c7ed065bf0ef9e8fde1bacf.jpg",
    },
    {
      id: 8,
      category: "puppet",
      name: "Puppet Show Vendor",
      description:
        "Entertaining puppet shows that delight guests of all ages with captivating stories and colorful characters",
      image:
        "https://i.pinimg.com/736x/88/31/8b/88318b6377d4121c70d8ef0b1322e66a.jpg",
    },
    {
      id: 9,
      category: "cardecor",
      name: "Car Decoration Vendor",
      description:
        "Elegant and creative car decorations with flowers, ribbons, and ornaments for the bride, groom, and wedding party vehicles",
      image:
        "https://i.pinimg.com/736x/19/47/e0/1947e010a16004ad1cff5aba4fc6262c.jpg",
    },
    {
      id: 10,
      category: "flowershower",
      name: "Flower Shower Machine Vendor",
      description:
        "Automated flower shower machines that create stunning cascades of fresh petals, adding romance and elegance to your ceremony",
      image:
        "https://i.pinimg.com/736x/cf/6f/bd/cf6fbdbaf2c595babc7b0f6068f10615.jpg",
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