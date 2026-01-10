"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";

const BrideGroomBeautyVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  // Category mapping for navigation
  const categoryMap = {
    1: "bridal-makeup",
    2: "groom-makeup",
    3: "hair-stylist",
    4: "saree-draper",
    5: "mehendi",
    6: "nail-tech",
    7: "spa-salon",
    8: "pre-bridal",
    9: "hijab-stylist",
  };

  const categories = [
    {
      id: "bridal-makeup",
      name: "Bridal Makeup Artist",
      image: "https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg",
    },
    {
      id: "groom-makeup",
      name: "Groom Makeup Artist",
      image: "https://i.pinimg.com/736x/22/12/b8/2212b8d4b6fd60de6b972b4d468938b8.jpg",
    },
    {
      id: "hair-stylist",
      name: "Hair Stylist",
      image: "https://i.pinimg.com/736x/73/dd/4d/73dd4dfdfde767a0c8fb2738a0af54ff.jpg",
    },
    {
      id: "saree-draper",
      name: "Saree Draper / Lehenga Pinning",
      image: "https://i.pinimg.com/736x/15/88/af/1588af2e0905f63a499a48989c80b81f.jpg",
    },
    {
      id: "mehendi",
      name: "Mehendi Artist",
      image: "https://i.pinimg.com/1200x/ea/7e/80/ea7e800cefd4427bfed87bd2388b5436.jpg",
    },
    {
      id: "nail-tech",
      name: "Nail Technician",
      image: "https://i.pinimg.com/474x/21/5d/ab/215dab6eff414e1f14d3238405b3ff19.jpg",
    },
    {
      id: "spa-salon",
      name: "Spa & Salon Services",
      image: "https://i.pinimg.com/736x/f8/a4/be/f8a4be723372a672a93896e2478a1a75.jpg",
    },
    {
      id: "pre-bridal",
      name: "Pre-bridal Package",
      image: "https://i.pinimg.com/736x/9f/e0/2e/9fe02ee06110644899ff414f3ba75cca.jpg",
    },
    {
      id: "hijab-stylist",
      name: "Hijab/Headgear Stylist",
      image: "https://i.pinimg.com/736x/6c/c3/46/6cc346d8439ae84b3242ecc4c0e72326.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "bridal-makeup",
      name: "Bridal Makeup Artist",
      description:
        "Expert bridal makeup artists creating stunning looks that enhance your natural beauty and last throughout your special day",
      image: "https://i.pinimg.com/1200x/49/8e/fd/498efdae882161544ec04d199bfe9bf8.jpg",
    },
    {
      id: 2,
      category: "groom-makeup",
      name: "Groom Makeup Artist",
      description:
        "Professional grooming services for grooms ensuring you look your absolute best with subtle, camera-ready makeup",
      image: "https://i.pinimg.com/736x/17/15/c1/1715c16a3cc36f456270a1754b793596.jpg",
    },
    {
      id: 3,
      category: "hair-stylist",
      name: "Hair Stylist",
      description:
        "Creative hair styling experts who craft elegant updos, flowing curls, and personalized hairstyles for your celebration",
      image: "https://i.pinimg.com/1200x/e7/72/f3/e772f305cee161462e43a816f62d45df.jpg",
    },
    {
      id: 4,
      category: "saree-draper",
      name: "Saree Draper / Lehenga Pinning Artist",
      description:
        "Skilled artisans who drape sarees perfectly and secure lehengas flawlessly for a graceful, comfortable fit all day",
      image: "https://i.pinimg.com/736x/db/c4/55/dbc4553b46d49179489046532fd5f0b2.jpg",
    },
    {
      id: 5,
      category: "mehendi",
      name: "Mehendi Artist",
      description:
        "Traditional and contemporary mehendi designs with intricate patterns that tell your unique love story beautifully",
      image: "https://i.pinimg.com/736x/bd/a9/6d/bda96df7d043fccbd701f64bbf8a40a0.jpg",
    },
    {
      id: 6,
      category: "nail-tech",
      name: "Nail Technician",
      description:
        "Professional nail art and manicure services creating stunning designs that complement your bridal look perfectly",
      image: "https://i.pinimg.com/1200x/8c/ef/97/8cef970448e7d1bf84ebec3ea185bfb7.jpg",
    },
    {
      id: 7,
      category: "spa-salon",
      name: "Spa & Salon Services",
      description:
        "Comprehensive beauty treatments including facials, massages, and relaxation therapies for pre-wedding pampering",
      image: "https://i.pinimg.com/1200x/6a/60/e1/6a60e1ab5dab56bccbce0dd4ce73a3bd.jpg",
    },
    {
      id: 8,
      category: "pre-bridal",
      name: "Pre-bridal Package Vendor",
      description:
        "Complete pre-wedding beauty packages including skincare, treatments, and grooming for radiant, glowing skin",
      image: "https://i.pinimg.com/736x/ef/d9/c6/efd9c6b927b438dfa38e4f93af6fbdbd.jpg",
    },
    {
      id: 9,
      category: "hijab-stylist",
      name: "Hijab/Headgear Stylist",
      description:
        "Specialized stylists creating elegant hijab and headgear arrangements that blend tradition with contemporary fashion",
      image: "https://i.pinimg.com/736x/e4/33/28/e43328428ec65959911b4b6152984b72.jpg",
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
            <span className="text-gray-900 font-medium">Bride & Groom Beauty Vendors</span>
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
            Bride & Groom Beauty Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Look Your Absolute Best on Your Special Day!
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

export default BrideGroomBeautyVendorsPage;
