"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Users, Calendar } from "lucide-react";

const CulturalTraditionalVenuesPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image:
        "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
      label: "Haveli-style Venues",
      slug: "haveli-style-venues",
    },
    {
      image:
        "https://i.pinimg.com/736x/50/f7/ec/50f7ec7c372b1a6d78745c450c1ca2a0.jpg",
      label: "Royal Palace Venues",
      slug: "royal-palace-venues",
    },
    {
      image:
        "https://i.pinimg.com/736x/50/f7/ec/50f7ec7c372b1a6d78745c450c1ca2a0.jpg",
      label: "Heritage Properties",
      slug: "heritage-properties",
    },
    {
      image:
        "https://i.pinimg.com/736x/67/03/ef/6703ef4b1f4dba26f87a9c1b9f1cd332.jpg",
      label: "Kalyana Mandapam",
      slug: "kalyana-mandapam",
    },
  ];

  const features = [
    { icon: Users, text: "100-3000 Guests", color: "text-amber-300" },
    { icon: MapPin, text: "Heritage Locations", color: "text-orange-300" },
    { icon: Calendar, text: "Traditional Settings", color: "text-yellow-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "haveli-style-venues",
      title: "Haveli-style Wedding Venues",
      image:
        "https://i.pinimg.com/736x/b1/fd/97/b1fd971d0d42a56c183b6e17077211f3.jpg",
      accent: "#d97706",
    },
    {
      slug: "royal-palace-venues",
      title: "Royal Palace Venues",
      image:
        "https://i.pinimg.com/1200x/33/68/f9/3368f983eeafd946d980c91f15c51c20.jpg",
      accent: "#7c2d12",
    },
    {
      slug: "heritage-properties",
      title: "Heritage Properties",
      image:
        "https://i.pinimg.com/1200x/9f/40/f2/9f40f2eb683ab08a3df20f82387e5cfd.jpg",
      accent: "#92400e",
    },
    {
      slug: "rajasthani-dharamshalas",
      title: "Rajasthani Dharamshalas",
      image:
        "https://i.pinimg.com/1200x/52/28/25/522825bf91e8e09c848c9e8d783c9873.jpg",
      accent: "#b45309",
    },
    {
      slug: "kalyana-mandapam",
      title: "Kalyana Mandapam (South India)",
      image:
        "https://i.pinimg.com/736x/ed/be/25/edbe25b54256439d445e5a879930ce55.jpg",
      accent: "#c2410c",
    },
    {
      slug: "traditional-courtyard-venues",
      title: "Traditional Courtyard Venues",
      image:
        "https://i.pinimg.com/736x/60/bd/39/60bd394c51249e65e1b1616e1a88ff79.jpg",
      accent: "#ea580c",
    },
    {
      slug: "cultural-wedding-halls",
      title: "Cultural Wedding Halls",
      image:
        "https://i.pinimg.com/1200x/4c/f1/2e/4cf12e29898c1646395e1cb4971f304e.jpg",
      accent: "#dc2626",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[77vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg"
            alt="Cultural Venues Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-bold text-white mb-3 text-center leading-tight max-w-3xl">
            Celebrating Heritage in
            <br />
            Timeless Grandeur
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            Experience the richness of Indian culture and tradition in venues that embody
            royal elegance and architectural magnificence for your special day.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full"
              >
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
                <span className="text-xs font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Hero Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl w-full">
            {heroItems.map((item, index) => (
              <Link
                key={index}
                href={`/wedding-venues/all-venues?category=cultural-traditional-venues&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl relative">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-2 left-0 right-0 px-2 text-center">
                    <p className="text-white text-[10px] md:text-xs font-semibold drop-shadow-lg">
                      {item.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-2 mt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>

      {/* Marquee Tagline */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ CELEBRATE IN ROYAL HERITAGE & CULTURAL SPLENDOR
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏰 EXPERIENCE TRADITIONAL GRANDEUR
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              🕌 WHERE HISTORY MEETS CELEBRATION
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ CELEBRATE IN ROYAL HERITAGE & CULTURAL SPLENDOR
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏰 EXPERIENCE TRADITIONAL GRANDEUR
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              🕌 WHERE HISTORY MEETS CELEBRATION
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
      <div className="container mx-auto px-40 py-16">
        <h2 className="text-3xl font-bold text-amber-900 mb-8 uppercase tracking-wide">
          Featured Cultural Venue Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/wedding-venues/all-venues?category=cultural-traditional-venues&subCategory=${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                {/* Image */}
                <div className="h-42 md:h-65 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Text */}
                <div className="p-3 text-center">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 capitalize">
                    {category.title}
                  </h3>
                  <span
                    className="text-[10px] px-3 py-1.5 rounded-full border transition-colors duration-300 inline-block group-hover:text-white"
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
                src="https://i.pinimg.com/1200x/65/6b/0e/656b0e4b605f404cb5d5edb30e0b3b76.jpg"
                alt="About Cultural Venues"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6 uppercase tracking-wide">
                About Our Cultural Venues
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Immerse yourself in the rich tapestry of Indian heritage with our 
                carefully curated collection of cultural and traditional wedding venues. 
                From majestic havelis to regal palace settings, each venue tells a 
                story of timeless elegance and architectural splendor.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you dream of a royal Rajasthani celebration, a traditional 
                South Indian ceremony in a Kalyana Mandapam, or an intimate gathering 
                in a heritage property, our venues offer authentic cultural experiences 
                that honor tradition while providing modern amenities for your comfort.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-amber-700 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-amber-900">
                    HERITAGE SPACES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Authentic Architecture</p>
                </div>
                <div>
                  <div className="text-amber-700 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-amber-900">
                    ROYAL LEGACY
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Historical Significance</p>
                </div>
                <div>
                  <div className="text-amber-700 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-amber-900">CULTURAL PRIDE</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Traditional Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center uppercase tracking-wide">
            Complete Cultural Venue Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our extensive collection of cultural and traditional venues 
            that celebrate India's rich heritage. From historic havelis and royal 
            palaces to traditional mandapams and dharamshalas, find the perfect 
            setting that resonates with your cultural values and wedding dreams.
          </p>
          <div className="text-center">
            <Link
              href="/wedding-venues/all-venues?category=cultural-traditional-venues"
              className="bg-amber-900 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL VENUES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalTraditionalVenuesPage;