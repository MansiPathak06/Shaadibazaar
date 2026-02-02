"use client";
import React, { useRef } from "react";
import { Home, ChevronRight as BreadcrumbArrow } from "lucide-react";
import { useRouter } from "next/navigation";

const MiscellaneousVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  // Map vendor id → category slug (used by "View All" button)
  const categoryMap = {
    1: "balloon-dropping",
    2: "cold-pyro",
    3: "co2-jet",
    4: "confetti-cannon",
    5: "fog-machine",
    6: "bubble-machine",
    7: "snow-machine",
    8: "puppet-show",
    9: "car-decoration",
    10: "flower-shower",
  };

  const categories = [
    {
      id: "balloon-dropping",
      name: "Balloon Dropping",
      image:
        "https://i.pinimg.com/736x/47/66/55/4766554ae19547241a92beae8fe8d068.jpg",
    },
    {
      id: "cold-pyro",
      name: "Cold Pyro",
      image:
        "https://i.pinimg.com/736x/0e/3e/ba/0e3eba47e73cc95bbd9d23b82433aebe.jpg",
    },
    {
      id: "co2-jet",
      name: "CO2 Jet",
      image:
        "https://i.pinimg.com/1200x/b8/c4/d0/b8c4d061f363287886074b680558feeb.jpg",
    },
    {
      id: "confetti-cannon",
      name: "Confetti Cannon",
      image:
        "https://i.pinimg.com/736x/2c/a6/70/2ca67045abffa55f798879e53509b293.jpg",
    },
    {
      id: "fog-machine",
      name: "Fog Machine",
      image:
        "https://i.pinimg.com/1200x/94/d2/81/94d281a704f4513ab80110e7ffb48467.jpg",
    },
    {
      id: "bubble-machine",
      name: "Bubble Machine",
      image:
        "https://i.pinimg.com/1200x/e3/b5/6e/e3b56e54236532d401ea938856bbae31.jpg",
    },
    {
      id: "snow-machine",
      name: "Snow Machine",
      image:
        "https://i.pinimg.com/736x/ec/d8/42/ecd8429b1f68e6579cc92dca66737ebd.jpg",
    },
    {
      id: "puppet-show",
      name: "Puppet Show",
      image:
        "https://i.pinimg.com/736x/67/d8/c2/67d8c24342a26dee0258b7049ace9b54.jpg",
    },
    {
      id: "car-decoration",
      name: "Car Decoration",
      image:
        "https://i.pinimg.com/736x/65/60/31/6560310996beef7d1fe5d9b772696a25.jpg",
    },
    {
      id: "flower-shower",
      name: "Flower Shower",
      image:
        "https://i.pinimg.com/736x/0e/94/e2/0e94e2a69fa5c56e13bdb4fb1cb8fe29.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "balloon-dropping",
      name: "Balloon Dropping Setup",
      description:
        "Create magical moments with cascading balloons that drop at the perfect time, adding surprise and joy to your celebration",
      image:
        "https://i.pinimg.com/1200x/fe/d0/b0/fed0b0b0b61c613e172aafc909aa855c.jpg",
    },
    {
      id: 2,
      category: "cold-pyro",
      name: "Cold Pyro & Special Effects",
      description:
        "Safe and spectacular cold pyrotechnics and special effects that create stunning visual displays without heat or danger",
      image:
        "https://i.pinimg.com/1200x/ea/90/48/ea90486fe6ff4f7ef3ced3aeeee90dcf.jpg",
    },
    {
      id: 3,
      category: "co2-jet",
      name: "CO2 Jet Vendor",
      description:
        "High-energy CO2 jets that shoot dramatic plumes of white fog, creating an electrifying atmosphere for your celebration",
      image:
        "https://i.pinimg.com/1200x/c7/fa/45/c7fa45335e6c083a6b8a214267398b22.jpg",
    },
    {
      id: 4,
      category: "confetti-cannon",
      name: "Confetti Cannon Vendor",
      description:
        "Explosive bursts of colorful confetti that fill the air with celebration, perfect for grand entrances and special moments",
      image:
        "https://i.pinimg.com/736x/99/13/37/9913370ad2b3f9f86335e316bda38bed.jpg",
    },
    {
      id: 5,
      category: "fog-machine",
      name: "Fog Machine Vendor",
      description:
        "Professional fog machines that create enchanting, dreamy atmospheres and dramatic effects for your wedding moments",
      image:
        "https://i.pinimg.com/1200x/a7/6f/0c/a76f0cd6296f9ec80f26c5f5af944dac.jpg",
    },
    {
      id: 6,
      category: "bubble-machine",
      name: "Bubble Machine Vendor",
      description:
        "Whimsical bubble machines that fill your venue with thousands of floating bubbles, creating a fairytale-like ambiance",
      image:
        "https://i.pinimg.com/736x/29/2e/52/292e52d4de4cbd210b34996aaeb79505.jpg",
    },
    {
      id: 7,
      category: "snow-machine",
      name: "Snow Machine Vendor",
      description:
        "Artificial snow machines that transform any venue into a winter wonderland, perfect for romantic and unique celebrations",
      image:
        "https://i.pinimg.com/736x/5b/5e/86/5b5e86217c7ed065bf0ef9e8fde1bacf.jpg",
    },
    {
      id: 8,
      category: "puppet-show",
      name: "Puppet Show Vendor",
      description:
        "Entertaining puppet shows that delight guests of all ages with captivating stories and colorful characters",
      image:
        "https://i.pinimg.com/736x/88/31/8b/88318b6377d4121c70d8ef0b1322e66a.jpg",
    },
    {
      id: 9,
      category: "car-decoration",
      name: "Car Decoration Vendor",
      description:
        "Elegant and creative car decorations with flowers, ribbons, and ornaments for the bride, groom, and wedding party vehicles",
      image:
        "https://i.pinimg.com/736x/19/47/e0/1947e010a16004ad1cff5aba4fc6262c.jpg",
    },
    {
      id: 10,
      category: "flower-shower",
      name: "Flower Shower Machine Vendor",
      description:
        "Automated flower shower machines that create stunning cascades of fresh petals, adding romance and elegance to your ceremony",
      image:
        "https://i.pinimg.com/736x/cf/6f/bd/cf6fbdbaf2c595babc7b0f6068f10615.jpg",
    },
  ];

  // Handle category clicks to navigate to specific category page
  const handleCategoryClick = (categoryId) => {
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
              Miscellaneous Vendors
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

                {/* View All Button - Routes to category page */}
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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