"use client";
import React from "react";
import Link from "next/link";

const BridalWearPage = () => {
  // Hero images with their subcategory slugs
  const heroItems = [
    {
      image: "https://i.pinimg.com/736x/28/ab/f9/28abf90e193314ce93fc669d3cd60472.jpg",
      label: "Bridal Lehenga",
      slug: "lehenga",
    },
    {
      image: "https://i.pinimg.com/736x/de/af/90/deaf907b6fd0cefb1fef67049c3b84ad.jpg",
      label: "Engagement Wear",
      slug: "engagement-wear",
    },
    {
      image: "https://i.pinimg.com/1200x/7c/95/9b/7c959b6f16fe241155aa5534e4a2aa4d.jpg",
      label: "Bridal Saree",
      slug: "bridal-saree",
    },
    {
      image: "https://i.pinimg.com/1200x/80/71/09/807109f2c6eb1297e7de76d54b9cee3d.jpg",
      label: "Reception Look",
      slug: "reception-look",
    },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "bridal-lehenga-saree",
      title: "Bridal lehenga / saree",
      image: "https://i.pinimg.com/1200x/1e/51/1c/1e511cf1a2fa0628b75c11a8caed52bd.jpg",
      accent: "#e91e63",
    },
    {
      slug: "engagement-wear",
      title: "Engagement Wear",
      image: "https://i.pinimg.com/736x/b2/3d/02/b23d025e6664bc120cda193b699ad583.jpg",
      accent: "#3f51b5",
    },
    {
      slug: "dupatta-veil",
      title: "Dupatta (veil)",
      image: "https://i.pinimg.com/1200x/07/54/e4/0754e4097b9baf876e76b5c4a62baa3b.jpg",
      accent: "#ff9800",
    },
    {
      slug: "bridal-blouse",
      title: "Bridal blouse",
      image: "https://i.pinimg.com/736x/bc/9b/d8/bc9bd88d6f6016dbfb2e56c8ab28d1ba.jpg",
      accent: "#9c27b0",
    },
    {
      slug: "latkans-for-lehenga",
      title: "Latkans for lehenga",
      image: "https://i.pinimg.com/736x/46/c6/e8/46c6e8ee08b08eb828a3834652fd4e36.jpg",
      accent: "#4caf50",
    },
    {
      slug: "underskirt-petticoat",
      title: "Underskirt / Petticoat",
      image: "https://i.pinimg.com/1200x/92/08/5b/92085b4d45104a67b7e22c140e592a06.jpg",
      accent: "#03a9f4",
    },
    {
      slug: "bridal-heels",
      title: "Bridal heels",
      image: "https://i.pinimg.com/736x/6c/6d/fb/6c6dfb62e3bf749559c6ec18e7eb8df0.jpg",
      accent: "#ff5722",
    },
    {
      slug: "bridal-sandals-flats",
      title: "Bridal sandals/flats",
      image: "https://i.pinimg.com/1200x/f5/d9/de/f5d9debeff36af8063e24e66843e864d.jpg",
      accent: "#8bc34a",
    },
    {
      slug: "hand-clutch-potli-bag",
      title: "Hand clutch / potli bag",
      image: "https://i.pinimg.com/1200x/92/05/ab/9205abc6d4d332d8a697d5d00a0bf7bb.jpg",
      accent: "#009688",
    },
    {
      slug: "bridal-robe-for-makeup",
      title: "Bridal robe for makeup",
      image: "https://i.pinimg.com/1200x/c7/31/7b/c7317baced8628063c6c9ef27f4fb622.jpg",
      accent: "#3f51b5",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-900 via-red-900 to-rose-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-1 mt-2 relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-4 tracking-wide">
              Bridal Collections
            </h1>
            <p className="text-xl text-amber-200 font-light">
              Curated elegance for your special day !
            </p>
          </div>

          {/* Hero Images Grid - Now Clickable */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {heroItems.map((item, index) => (
              <Link
                key={index}
                href={`/bride/all-products?category=bridalwear&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl relative">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Text on the image at bottom */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] text-center">
                    <p className="text-gray-400 text-sm md:text-base backdrop-blur font-medium drop-shadow-md">
                      {item.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Tagline */}
      <div className="bg-gradient-to-r from-rose-900 via-red-800 to-rose-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ TIMELESS ELEGANCE FOR YOUR SPECIAL DAY
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              💍 HANDCRAFTED WITH LOVE & TRADITION
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              👰 WHERE DREAMS MEET REALITY
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ TIMELESS ELEGANCE FOR YOUR SPECIAL DAY
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              💍 HANDCRAFTED WITH LOVE & TRADITION
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              👰 WHERE DREAMS MEET REALITY
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* Featured Collections - Now Clickable */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-rose-900 mb-8 uppercase tracking-wide">
          Featured Collections
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/bride/all-products?category=bridalwear&subCategory=${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2 capitalize">
                    {category.title}
                  </h3>
                  <span
                    className="text-xs px-4 py-2 rounded-full border-2 transition-colors duration-300 inline-block group-hover:text-white"
                    style={{
                      borderColor: category.accent,
                      color: category.accent,
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = category.accent;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = category.accent;
                    }}
                  >
                    EXPLORE
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/736x/ae/9c/cb/ae9ccb74cedbd6c8f547c57fa94a9fec.jpg"
                alt="About"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-rose-900 mb-6 uppercase tracking-wide">
                About Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that every bride deserves to feel like royalty on her
                special day. Our carefully curated collections bring together
                traditional elegance and contemporary style.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From exquisite bridal lehengas to delicate accessories, each
                piece in our collection is chosen with love and attention to
                detail, ensuring that your wedding day is nothing short of
                magical.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-rose-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-rose-900">
                    DAZZLING ELEGANCE
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Timeless Designs</p>
                </div>
                <div>
                  <div className="text-rose-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-rose-900">
                    ULTIMATE COMFORT
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Luxurious Fabrics</p>
                </div>
                <div>
                  <div className="text-rose-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-rose-900">
                    SUSTAINABLE STYLE
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Ethically Sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-rose-50 to-amber-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-rose-900 mb-8 text-center uppercase tracking-wide">
            Complete Bridal Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover an enchanting array of bridal essentials that will make
            your wedding day truly unforgettable. From the perfect lehenga to
            the smallest accessory, we have everything you need to complete your
            bridal look with grace and elegance.
          </p>
          <div className="text-center">
            <Link
              href="/bride/all-products?category=bridalwear"
              className="bg-rose-900 text-white px-8 py-3 rounded-full hover:bg-rose-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL COLLECTIONS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridalWearPage;
