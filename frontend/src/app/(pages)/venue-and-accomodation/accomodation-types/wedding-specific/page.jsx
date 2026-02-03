"use client";
import React from "react";
import Link from "next/link";
import { Home, Users, Calendar, Heart } from "lucide-react";

const WeddingAccommodationPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image:
        "https://i.pinimg.com/1200x/85/65/d6/8565d66c8dd90813b4e2a7f5f377032c.jpg",
      label: "Baraat Accommodation",
      slug: "baraat-accommodation-block",
    },
    {
      image:
        "https://i.pinimg.com/1200x/e7/c8/42/e7c842ba90aa9a6533de8c0c5974601f.jpg",
      label: "Bride's Family Block",
      slug: "brides-family-accommodation-block",
    },
    {
      image:
        "https://i.pinimg.com/1200x/0f/6e/20/0f6e202acf9c613baabcb50cba0c44a7.jpg",
      label: "Groom's Suite",
      slug: "grooms-suite",
    },
    {
      image:
        "https://i.pinimg.com/736x/98/a8/a7/98a8a7791ba6a9e440fb1443f93dd16b.jpg",
      label: "Bridal Makeup Room",
      slug: "bridal-makeup-room",
    },
  ];

  const features = [
    { icon: Home, text: "Premium Rooms", color: "text-pink-300" },
    { icon: Users, text: "Group Bookings", color: "text-purple-300" },
    { icon: Calendar, text: "Multi-Day Stays", color: "text-fuchsia-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "baraat-accommodation-block",
      title: "Baraat Accommodation Block",
      image:
        "https://i.pinimg.com/1200x/85/65/d6/8565d66c8dd90813b4e2a7f5f377032c.jpg",
      accent: "#e91e63",
    },
    {
      slug: "brides-family-accommodation-block",
      title: "Bride's Family Accommodation Block",
      image:
        "https://i.pinimg.com/1200x/e7/c8/42/e7c842ba90aa9a6533de8c0c5974601f.jpg",
      accent: "#3f51b5",
    },
    {
      slug: "grooms-suite",
      title: "Groom's Suite",
      image:
        "https://i.pinimg.com/1200x/0f/6e/20/0f6e202acf9c613baabcb50cba0c44a7.jpg",
      accent: "#ff9800",
    },
    {
      slug: "bridal-makeup-room",
      title: "Bridal Makeup Room",
      image:
        "https://i.pinimg.com/1200x/ae/dc/8e/aedc8eaa2ce619473916b184d23aff46.jpg",
      accent: "#9c27b0",
    },
    {
      slug: "grooms-dressing-room",
      title: "Groom's Dressing Room",
      image:
        "https://i.pinimg.com/736x/cb/9c/df/cb9cdfa45c963415585167b7e5adcb40.jpg",
      accent: "#4caf50",
    },
    {
      slug: "vip-guest-rooms",
      title: "VIP Guest Rooms",
      image:
        "https://i.pinimg.com/736x/0e/ea/0c/0eea0cb05994e078b9783b79e9e0f879.jpg",
      accent: "#03a9f4",
    },
    {
      slug: "hospitality-lounge",
      title: "Hospitality Lounge",
      image:
        "https://i.pinimg.com/1200x/d6/15/41/d6154123743431057f62ec5b63878747.jpg",
      accent: "#ff5722",
    },
    {
      slug: "command-center-room",
      title: "Command Center Room",
      image:
        "https://i.pinimg.com/1200x/54/58/38/5458381e70a20a9b209bae3babfe09ea.jpg",
      accent: "#607d8b",
    },
    {
      slug: "changing-rooms",
      title: "Changing Rooms",
      image:
        "https://i.pinimg.com/736x/c2/d8/d6/c2d8d681807bb76f5084e4b6f3f96a57.jpg",
      accent: "#e91e63",
    },
    {
      slug: "haldi-mehendi-venue-rooms",
      title: "Haldi/Mehendi Venue Rooms",
      image:
        "https://i.pinimg.com/736x/29/a4/dc/29a4dc8e13b57e7d5803223f29eb0a1f.jpg",
      accent: "#ffc107",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[77vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg"
            alt="Wedding Accommodation Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-bold text-white mb-3 text-center leading-tight max-w-3xl">
            Comfort & Convenience for
            <br />
            Your Wedding Celebrations
          </h1>
          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            Premium accommodation spaces designed for wedding parties, guests, and
            special pre-wedding ceremonies. Make every moment memorable with the
            perfect rooms.
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
                href={`/wedding-venues/all-venues?category=wedding-accommodation&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl relative">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* linear overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

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
      <div className="bg-linear-to-r from-amber-900 via-grey-700 to-amber-800 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ LUXURIOUS STAYS FOR YOUR SPECIAL DAY
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏨 COMFORT MEETS CELEBRATION
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              💝 SPACES DESIGNED FOR WEDDING PARTIES
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ LUXURIOUS STAYS FOR YOUR SPECIAL DAY
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏨 COMFORT MEETS CELEBRATION
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              💝 SPACES DESIGNED FOR WEDDING PARTIES
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
        <h2 className="text-3xl font-bold text-purple-900 mb-8 uppercase tracking-wide">
          Featured Accommodation Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/wedding-venues/all-venues?category=wedding-accommodation&subCategory=${category.slug}`}
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                src="https://i.pinimg.com/1200x/5f/48/2c/5f482c3d40a52a5c160b22ac20131590.jpg"
                alt="About Wedding Accommodation"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 uppercase tracking-wide">
                About Our Accommodation
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We understand that wedding celebrations require more than just a
                venue. Our comprehensive accommodation options ensure that your
                guests, family members, and wedding party have the perfect spaces
                to prepare, relax, and celebrate.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From luxurious bridal suites to spacious baraat accommodation
                blocks, each space is designed to provide comfort and convenience
                during your special celebrations. Whether it's getting ready rooms,
                VIP guest accommodations, or dedicated ceremony spaces, we have
                everything you need.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-purple-600 mb-2">
                    <Heart className="w-12 h-12 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-purple-900">
                    LUXURY SPACES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Premium Comfort</p>
                </div>
                <div>
                  <div className="text-purple-600 mb-2">
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
                  <h4 className="font-semibold text-purple-900">
                    VERIFIED ROOMS
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Quality Assured</p>
                </div>
                <div>
                  <div className="text-purple-600 mb-2">
                    <Users className="w-12 h-12 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-purple-900">GROUP FRIENDLY</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Flexible Bookings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center uppercase tracking-wide">
            Complete Accommodation Solutions
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our extensive range of wedding accommodation options perfect
            for the entire wedding party. From baraat blocks to bridal makeup
            rooms, VIP guest suites to ceremony preparation spaces, we provide
            every type of accommodation you need for a seamless wedding experience.
          </p>
          <div className="text-center">
            <Link
              href="/wedding-venues/all-venues?category=wedding-accommodation"
              className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL ACCOMMODATIONS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingAccommodationPage;