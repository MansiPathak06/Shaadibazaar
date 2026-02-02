"use client";
import React, { useRef } from "react";
import { Home, ChevronRight as BreadcrumbArrow } from "lucide-react";
import { useRouter } from "next/navigation";

const ShoppingCostumeVendorsPage = () => {
  const router = useRouter();
  const sliderRef = useRef(null);

  // Map vendor id → category slug (used by "View All" button)
  const categoryMap = {
    1: "bridal-wear",
    2: "groom-wear",
    3: "jewellery-rental",
    4: "artificial-jewellery",
    5: "footwear",
    6: "pagdi-artist",
    7: "turban-veil",
    8: "costume-rental",
  };

  const categories = [
    {
      id: "bridal-wear",
      name: "Bridal Wear Store",
      image:
        "https://i.pinimg.com/736x/4c/ac/3a/4cac3ada4f725b8a51f8e7ccd1dd7439.jpg",
    },
    {
      id: "groom-wear",
      name: "Groom Wear Store",
      image:
        "https://i.pinimg.com/736x/15/5a/8c/155a8c2a82d202b8a846ddc5c56322bb.jpg",
    },
    {
      id: "jewellery-rental",
      name: "Jewellery Rental",
      image:
        "https://i.pinimg.com/1200x/4b/95/28/4b952870595590f1648773e60ea41a28.jpg",
    },
    {
      id: "artificial-jewellery",
      name: "Artificial Jewellery",
      image:
        "https://i.pinimg.com/1200x/5d/ef/cc/5defccad0d6bd09af5ed3946f66ced4f.jpg",
    },
    {
      id: "footwear",
      name: "Footwear Vendor",
      image:
        "https://i.pinimg.com/1200x/e2/df/d2/e2dfd23e3231c9666e2b2f855d5037e4.jpg",
    },
    {
      id: "pagdi-artist",
      name: "Pagdi/Safa Artist",
      image:
        "https://i.pinimg.com/1200x/40/71/fa/4071fa535c59ba59f4e45f868ef24bc7.jpg",
    },
    {
      id: "turban-veil",
      name: "Turban/Veil Vendors",
      image:
        "https://i.pinimg.com/1200x/c3/1c/a4/c31ca438fed65e049151223b8b9bfaa6.jpg",
    },
    {
      id: "costume-rental",
      name: "Costume Rental",
      image:
        "https://i.pinimg.com/1200x/38/a5/07/38a507d1c92cb8cbe6ee0c1b25e93ebd.jpg",
    },
  ];

  const vendors = [
    {
      id: 1,
      category: "bridal-wear",
      name: "Bridal Wear Store",
      description:
        "Exquisite bridal collections featuring traditional and contemporary designs with premium fabrics and intricate embellishments",
      image:
        "https://i.pinimg.com/1200x/e9/d5/28/e9d52855eb7e78e4e942f6c835895503.jpg",
    },
    {
      id: 2,
      category: "groom-wear",
      name: "Groom Wear Store",
      description:
        "Sophisticated groom attire ranging from classic sherwanis to modern suits with impeccable tailoring and style",
      image:
        "https://i.pinimg.com/1200x/95/23/af/9523af51af7a67537119a2cd02c7b54d.jpg",
    },
    {
      id: 3,
      category: "jewellery-rental",
      name: "Jewellery Rental Vendor",
      description:
        "Stunning collection of authentic gold and diamond jewellery sets available for rental to complete your bridal look",
      image:
        "https://i.pinimg.com/1200x/0b/87/f4/0b87f49efa6edfee744409e4f58cccd4.jpg",
    },
    {
      id: 4,
      category: "artificial-jewellery",
      name: "Artificial Jewellery Vendor",
      description:
        "Beautiful artificial jewellery pieces that perfectly mimic traditional designs at affordable prices",
      image:
        "https://i.pinimg.com/736x/c1/56/24/c15624868fcffe2c158492fed5e82ce3.jpg",
    },
    {
      id: 5,
      category: "footwear",
      name: "Footwear Vendor",
      description:
        "Elegant bridal and groom footwear including juttis, mojaris, and designer heels that blend comfort with style",
      image:
        "https://i.pinimg.com/736x/c1/39/c4/c139c4556a7ceaa0f1d433832be710a7.jpg",
    },
    {
      id: 6,
      category: "pagdi-artist",
      name: "Pagdi/Safa Tying Artist",
      description:
        "Expert artists who create stunning traditional pagdi and safa styles with precision and artistic flair",
      image:
        "https://i.pinimg.com/736x/c0/60/85/c060852c22dcac916346aa5ee998c287.jpg",
    },
    {
      id: 7,
      category: "turban-veil",
      name: "Turban/Veil Vendors",
      description:
        "Wide variety of turbans, veils, and dupattas in luxurious fabrics with beautiful embroidery and embellishments",
      image:
        "https://i.pinimg.com/736x/06/6f/80/066f8089f29b805d0c60eda55db24784.jpg",
    },
    {
      id: 8,
      category: "costume-rental",
      name: "Costume Rental for Sangeet",
      description:
        "Vibrant and stylish costume rentals perfect for sangeet performances and theme-based wedding celebrations",
      image:
        "https://i.pinimg.com/736x/6b/84/6c/6b846c2439c163511ec855094e05da99.jpg",
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
            Shopping & Costume Vendors
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl drop-shadow-md">
            Dress to Impress - Your Complete Wedding Shopping Guide!
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
              Shopping & Costume Vendors
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

export default ShoppingCostumeVendorsPage;