"use client";
import React, { useRef } from "react";

const BrideGroomBeautyVendorsPage = () => {
  const sliderRef = useRef(null);

  const categories = [
    {
      id: "bridal-makeup",
      name: "Bridal Makeup Artist",
      image: "https://via.placeholder.com/400x400?text=Bridal+Makeup",
      link: "/bridal-makeup-artist",
    },
    {
      id: "groom-makeup",
      name: "Groom Makeup Artist",
      image: "https://via.placeholder.com/400x400?text=Groom+Makeup",
      link: "/groom-makeup-artist",
    },
    {
      id: "hair-stylist",
      name: "Hair Stylist",
      image: "https://via.placeholder.com/400x400?text=Hair+Stylist",
      link: "/hair-stylist",
    },
    {
      id: "saree-draper",
      name: "Saree Draper / Lehenga Pinning",
      image: "https://via.placeholder.com/400x400?text=Saree+Draper",
      link: "/saree-draper",
    },
    {
      id: "mehendi",
      name: "Mehendi Artist",
      image: "https://via.placeholder.com/400x400?text=Mehendi+Artist",
      link: "/mehendi-artist",
    },
    {
      id: "nail-tech",
      name: "Nail Technician",
      image: "https://via.placeholder.com/400x400?text=Nail+Tech",
      link: "/nail-technician",
    },
    {
      id: "spa-salon",
      name: "Spa & Salon Services",
      image: "https://via.placeholder.com/400x400?text=Spa+Salon",
      link: "/spa-salon",
    },
    {
      id: "pre-bridal",
      name: "Pre-bridal Package",
      image: "https://via.placeholder.com/400x400?text=Pre-bridal",
      link: "/pre-bridal-package",
    },
    {
      id: "hijab-stylist",
      name: "Hijab/Headgear Stylist",
      image: "https://via.placeholder.com/400x400?text=Hijab+Stylist",
      link: "/hijab-stylist",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "bridal-makeup",
      name: "Bridal Makeup Artist",
      description:
        "Expert bridal makeup artists creating stunning looks that enhance your natural beauty and last throughout your special day",
      image: "https://via.placeholder.com/400x500?text=Bridal+Makeup",
    },
    {
      id: 2,
      category: "groom-makeup",
      name: "Groom Makeup Artist",
      description:
        "Professional grooming services for grooms ensuring you look your absolute best with subtle, camera-ready makeup",
      image: "https://via.placeholder.com/400x500?text=Groom+Makeup",
    },
    {
      id: 3,
      category: "hair-stylist",
      name: "Hair Stylist",
      description:
        "Creative hair styling experts who craft elegant updos, flowing curls, and personalized hairstyles for your celebration",
      image: "https://via.placeholder.com/400x500?text=Hair+Stylist",
    },
    {
      id: 4,
      category: "saree-draper",
      name: "Saree Draper / Lehenga Pinning Artist",
      description:
        "Skilled artisans who drape sarees perfectly and secure lehengas flawlessly for a graceful, comfortable fit all day",
      image: "https://via.placeholder.com/400x500?text=Saree+Draper",
    },
    {
      id: 5,
      category: "mehendi",
      name: "Mehendi Artist",
      description:
        "Traditional and contemporary mehendi designs with intricate patterns that tell your unique love story beautifully",
      image: "https://via.placeholder.com/400x500?text=Mehendi",
    },
    {
      id: 6,
      category: "nail-tech",
      name: "Nail Technician",
      description:
        "Professional nail art and manicure services creating stunning designs that complement your bridal look perfectly",
      image: "https://via.placeholder.com/400x500?text=Nail+Tech",
    },
    {
      id: 7,
      category: "spa-salon",
      name: "Spa & Salon Services",
      description:
        "Comprehensive beauty treatments including facials, massages, and relaxation therapies for pre-wedding pampering",
      image: "https://via.placeholder.com/400x500?text=Spa+Salon",
    },
    {
      id: 8,
      category: "pre-bridal",
      name: "Pre-bridal Package Vendor",
      description:
        "Complete pre-wedding beauty packages including skincare, treatments, and grooming for radiant, glowing skin",
      image: "https://via.placeholder.com/400x500?text=Pre-bridal",
    },
    {
      id: 9,
      category: "hijab-stylist",
      name: "Hijab/Headgear Stylist",
      description:
        "Specialized stylists creating elegant hijab and headgear arrangements that blend tradition with contemporary fashion",
      image: "https://via.placeholder.com/400x500?text=Hijab+Stylist",
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
    console.log("Navigate to:", link);
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
            Bride & Groom Beauty Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Look Your Absolute Best on Your Special Day !
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          animation: scroll 20s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrideGroomBeautyVendorsPage;