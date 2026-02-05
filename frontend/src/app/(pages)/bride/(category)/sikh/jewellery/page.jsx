"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const SikhBridalJewelleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data
  const heroSlides = [
    {
      title: "Sikh Bridal Jewellery Collection",
      subtitle: "Kaleere | Chooda | Maang Tikka | Necklaces | Bangles",
      image:
        "https://i.pinimg.com/1200x/80/c0/30/80c0302b866d0dce3e2d2f489b4448f2.jpg",
    },
    {
      title: "Elegant Bridal Sets",
      subtitle: "Complete Your Wedding Look",
      image:
        "https://i.pinimg.com/736x/aa/46/8d/aa468d3aa61b51efca912e7407b07ddf.jpg",
    },
    {
      title: "Traditional Punjabi Ornaments",
      subtitle: "Timeless Beauty For Your Special Day",
      image:
        "https://i.pinimg.com/1200x/1c/e8/97/1ce897304c53edc30faa369f07ec23cc.jpg",
    },
  ];

  // Sikh bridal jewellery categories
  const categories = [
    {
      name: "Kaleere",
      subCategory: "Kaleere",
      items: "18 Items",
      image:
        "https://i.pinimg.com/736x/ab/1b/05/ab1b05003310ad659286f6091fe82015.jpg",
    },
    {
      name: "Chooda",
      subCategory: "Chooda",
      items: "25 Items",
      image:
        "https://i.pinimg.com/736x/27/ea/4e/27ea4ea9f4a1c5c30b137f1a6601a0e1.jpg",
    },
    {
      name: "Maang Tikka",
      subCategory: "Maang Tikka",
      items: "20 Items",
      image:
        "https://i.pinimg.com/1200x/bb/f1/67/bbf167f57d02b46812fe2cbd70a9b589.jpg",
    },
    {
      name: "Tikka & Matha Patti",
      subCategory: "Tikka & Matha Patti",
      items: "15 Items",
      image:
        "https://i.pinimg.com/736x/64/8a/3c/648a3ca798a0c8dd94427c36edda4bd9.jpg",
    },
    {
      name: "Earrings",
      subCategory: "Earrings",
      items: "40 Items",
      image:
        "https://i.pinimg.com/736x/ce/0f/a1/ce0fa15cd21f2d5c52fe01143575a84a.jpg",
    },
    {
      name: "Necklace Set",
      subCategory: "Necklace Set",
      items: "30 Items",
      image:
        "https://i.pinimg.com/1200x/4e/93/c7/4e93c7e4bab23bc573fd690bbac7fcd7.jpg",
    },
    {
      name: "Bangles",
      subCategory: "Bangles",
      items: "35 Items",
      image:
        "https://i.pinimg.com/736x/07/89/73/0789734436efde99cacddca67d43b0cf.jpg",
    },
    {
      name: "Kada",
      subCategory: "Kada",
      items: "22 Items",
      image:
        "https://i.pinimg.com/1200x/36/f3/84/36f38491a0041d6043b8836b553dd14b.jpg",
    },
    {
      name: "Payal",
      subCategory: "Payal",
      items: "18 Items",
      image:
        "https://i.pinimg.com/736x/c9/62/ab/c962aba3374b8b22db490c6770106f4e.jpg",
    },
    {
      name: "Nath",
      subCategory: "Nath",
      items: "24 Items",
      image:
        "https://i.pinimg.com/736x/ac/7a/3f/ac7a3f635f07cca1dc2e9416614333ac.jpg",
    },
    {
      name: "Hair Accessories",
      subCategory: "Hair Accessories",
      items: "16 Items",
      image:
        "https://i.pinimg.com/736x/18/b7/7e/18b77e128b17d1c694f5fce81544a773.jpg",
    },
  ];

  // Trending products
  const trendingProducts = [
    {
      name: "Kaleere",
      subCategory: "Kaleere",
      price: "₹12,999",
      oldPrice: "₹15,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/49/ce/3f/49ce3f3493e4f8ea85af7c1e8bdbce5a.jpg",
    },
    {
      name: "Bridal Chooda",
      subCategory: "Chooda",
      price: "₹18,999",
      image:
        "https://i.pinimg.com/736x/2f/65/19/2f65193020775f959516d93ade718953.jpg",
    },
    {
      name: "Maang Tikka",
      subCategory: "Maang Tikka",
      price: "₹8,999",
      image:
        "https://i.pinimg.com/1200x/ac/52/0a/ac520a2014a9f76cfbb28a94a78db857.jpg",
    },
    {
      name: "Matha Patti",
      subCategory: "Tikka & Matha Patti",
      price: "₹14,999",
      oldPrice: "₹18,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/02/79/3b/02793b08c7d8699ca57fa97220224aea.jpg",
    },
    {
      name: "Jhumka Earrings",
      subCategory: "Earrings",
      price: "₹9,999",
      image:
        "https://i.pinimg.com/736x/da/c3/8f/dac38fd7109a0ea0b18abadd2cf25e06.jpg",
    },
    {
      name: "Kundan Necklace Set",
      subCategory: "Necklace Set",
      price: "₹35,999",
      oldPrice: "₹42,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/736x/f0/ed/4f/f0ed4fd946e3922c65606a387d11424e.jpg",
    },
    {
      name: "Gold Bangles",
      subCategory: "Bangles",
      price: "₹22,999",
      image:
        "https://i.pinimg.com/1200x/a9/35/41/a935416a05fd52f77e1a1e07400e431f.jpg",
    },
    {
      name: "Traditional Kada",
      subCategory: "Kada",
      price: "₹16,999",
      oldPrice: "₹19,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/e0/54/81/e054817503d7d7f2511c15634070174f.jpg",
    },
    {
      name: "Silver Payal",
      subCategory: "Payal",
      price: "₹11,999",
      image:
        "https://i.pinimg.com/736x/1d/3d/e3/1d3de37008b9d3e12cecc5f7e3d6943d.jpg",
    },
    {
      name: "Bridal Nath",
      subCategory: "Nath",
      price: "₹7,999",
      oldPrice: "₹9,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/736x/26/37/0d/26370d2309d19d97af3405cb80f8a99f.jpg",
    },
    {
      name: "Hair Accessories",
      subCategory: "Hair Accessories",
      price: "₹5,999",
      image:
        "https://i.pinimg.com/1200x/3d/e8/6d/3de86de424c92714c77aa9a5a1367740.jpg",
    },
    {
      name: "Designer Kaleere Set",
      subCategory: "Kaleere",
      price: "₹15,999",
      oldPrice: "₹19,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/61/a9/4d/61a94dbe410ebe2d323d35b3d275cab9.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-[250px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      SIKH BRIDAL COLLECTION
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <Link
                      href="/bride/all-products?category=jewellery"
                      className="inline-block bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors"
                    >
                      SHOP NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-amber-600 w-8" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories Section with Scrolling - NOW CLICKABLE */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Popular Categories
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <Link
                  key={index}
                  href={`/bride/all-products?category=jewellery&subCategory=${encodeURIComponent(
                    category.subCategory
                  )}`}
                  className="shrink-0 w-40 text-center group cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {category.name.toUpperCase()}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections - NOW CLICKABLE */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/bride/all-products?category=sikh-jewellery"
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/736x/22/18/0b/22180b2e8a6d19a38dac9a298a84ff6d.jpg"
              alt="Traditional Sikh Sets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Traditional Sikh Bridal Sets
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </span>
            </div>
          </Link>

          <Link
            href="/bride/all-products?category=jewellery&subCategory=Kaleere"
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src="https://i.pinimg.com/1200x/49/ce/3f/49ce3f3493e4f8ea85af7c1e8bdbce5a.jpg"
              alt="Kaleere & Chooda"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Kaleere & Chooda Collection
              </h3>
              <span className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Trending Products - NOW CLICKABLE */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Trending Products
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              TOP SELLING
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST SELLER
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <Link
                key={index}
                href={`/bride/all-products?category=jewellery&subCategory=${encodeURIComponent(
                  product.subCategory
                )}`}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm text-gray-800 mb-2">{product.name}</h3>
                  
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/bride/all-products?category=jewellery"
              className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>EXPLORE FULL COLLECTION</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
          animation: marquee 10s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SikhBridalJewelleryPage;
