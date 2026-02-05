"use client";
import React from "react";
import Link from "next/link";
import { Shield, Users, MapPin, Clock } from "lucide-react";

const UtilitySpacesPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image:
        "https://i.pinimg.com/736x/4c/b1/58/4cb15821eeb77cffc9180ecf2cd9ca6c.jpg",
      label: "Washrooms",
      slug: "washrooms",
    },
    {
      image:
        "https://i.pinimg.com/736x/96/9d/6c/969d6cdddd23d32014aed3b08e202296.jpg",
      label: "Changing Rooms",
      slug: "changing-rooms",
    },
    {
      image:
        "https://i.pinimg.com/1200x/4d/8d/86/4d8d8679fa09f8a00dbb56f5271744c7.jpg",
      label: "Security Room",
      slug: "security-room",
    },
    {
      image:
        "https://i.pinimg.com/736x/67/03/ef/6703ef4b1f4dba26f87a9c1b9f1cd332.jpg",
      label: "Lost & Found Counter",
      slug: "lost-found-counter",
    },
  ];

  const features = [
    { icon: Shield, text: "24/7 Security", color: "text-blue-300" },
    { icon: MapPin, text: "Strategic Locations", color: "text-green-300" },
    { icon: Clock, text: "Always Accessible", color: "text-amber-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "washrooms",
      title: "Washrooms",
      image:
        "https://i.pinimg.com/736x/4c/b1/58/4cb15821eeb77cffc9180ecf2cd9ca6c.jpg",
      accent: "#2196f3",
    },
    {
      slug: "changing-rooms",
      title: "Changing Rooms",
      image:
        "https://i.pinimg.com/736x/96/9d/6c/969d6cdddd23d32014aed3b08e202296.jpg",
      accent: "#9c27b0",
    },
    {
      slug: "security-room",
      title: "Security Room",
      image:
        "https://i.pinimg.com/1200x/4d/8d/86/4d8d8679fa09f8a00dbb56f5271744c7.jpg",
      accent: "#f44336",
    },
    {
      slug: "lost-found-counter",
      title: "Lost & Found Counter",
      image:
        "https://i.pinimg.com/1200x/54/c4/d9/54c4d95f59dce49d5883304320f08840.jpg",
      accent: "#ff9800",
    },
    {
      slug: "registration-desk",
      title: "Registration Desk",
      image:
        "https://i.pinimg.com/1200x/cd/fc/06/cdfc06fbc428f868bfe6db1e5b9f208f.jpg",
      accent: "#4caf50",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[77vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg"
            alt="Utility Spaces Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-medium text-white mb-3 text-center leading-tight max-w-3xl uppercase">
            Essential Facilities for
            <br />
            Your Comfort & Security
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            Well-maintained utility spaces designed to ensure convenience, safety, and 
            seamless event management for all your guests and staff.
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
                href={`/wedding-venues/all-venues?category=utility-spaces&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-3/4 overflow-hidden rounded-lg shadow-xl relative">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* linear overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-2 left-0 right-0 px-2 text-center">
                    <p className="text-white text-[10px] md:text-xs font-normal drop-shadow-lg">
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
      <div className="bg-linear-to-r from-blue-900 via-cyan-800 to-blue-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ ESSENTIAL FACILITIES FOR YOUR EVENT
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              🛡️ SAFETY & COMFORT GUARANTEED
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏢 PROFESSIONAL UTILITY SPACES
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ ESSENTIAL FACILITIES FOR YOUR EVENT
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              🛡️ SAFETY & COMFORT GUARANTEED
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏢 PROFESSIONAL UTILITY SPACES
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
        <h2 className="text-3xl font-medium text-blue-900 mb-8 uppercase tracking-wide">
          Featured Utility Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/wedding-venues/all-venues?category=utility-spaces&subCategory=${category.slug}`}
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
                src="https://i.pinimg.com/736x/86/83/16/868316124b59c68666f6624359840c6f.jpg"
                alt="About Utility Spaces"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase tracking-wide">
                About Our Utility Spaces
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We understand that the success of any event depends not just on 
                the main venue, but also on well-equipped utility spaces that ensure 
                comfort, safety, and smooth operations throughout your celebration.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From clean and modern washrooms to secure changing rooms and 
                professional registration desks, each utility space has been 
                designed with attention to detail to provide convenience and peace 
                of mind for you and your guests.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-blue-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-blue-900">
                    MODERN FACILITIES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Clean & Updated</p>
                </div>
                <div>
                  <div className="text-blue-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-blue-900">
                    SECURE SPACES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Safety First</p>
                </div>
                <div>
                  <div className="text-blue-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-blue-900">24/7 ACCESS</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Always Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center uppercase tracking-wide">
            Complete Utility Space Solutions
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of utility spaces designed to support 
            your event operations. From guest amenities to staff facilities and 
            security infrastructure, we provide everything needed for a seamless 
            and successful event experience.
          </p>
          <div className="text-center">
            <Link
              href="/wedding-venues/all-venues?category=utility-spaces"
              className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL FACILITIES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilitySpacesPage;