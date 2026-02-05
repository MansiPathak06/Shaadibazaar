"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Users, Calendar } from "lucide-react";

const DestinationWeddingVenuesPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image:
        "https://i.pinimg.com/736x/a1/cf/89/a1cf89b38042fc5f1fb1672063093cc1.jpg",
      label: "Beach Resorts",
      slug: "beach-resorts",
    },
    {
      image:
        "https://i.pinimg.com/736x/c1/10/e8/c110e84f060fb678085404637a2be9c1.jpg",
      label: "Palace Hotels",
      slug: "palace-hotels",
    },
    {
      image:
        "https://i.pinimg.com/1200x/05/fb/0e/05fb0e639fc5f3373433f4a8594bea54.jpg",
      label: "Hill Resorts",
      slug: "hill-resorts",
    },
    {
      image:
        "https://i.pinimg.com/1200x/d9/5e/a6/d95ea6cbb324335dd8eb1a99274888bc.jpg",
      label: "Desert Camps",
      slug: "desert-camps",
    },
  ];

  const features = [
    { icon: Users, text: "Exotic Locations", color: "text-pink-300" },
    { icon: MapPin, text: "Dream Destinations", color: "text-purple-300" },
    { icon: Calendar, text: "All-Inclusive Packages", color: "text-fuchsia-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "beach-resorts",
      title: "Beach Resorts (Goa, Kerala)",
      image:
        "https://i.pinimg.com/1200x/6e/97/8f/6e978fabb958c5c4fa891f2b82c53f49.jpg",
      accent: "#e91e63",
    },
    {
      slug: "palace-hotels",
      title: "Palace Hotels (Rajasthan)",
      image:
        "https://i.pinimg.com/736x/7a/e3/28/7ae3287d8c8e257abf52822e97ee46b2.jpg",
      accent: "#3f51b5",
    },
    {
      slug: "hill-resorts",
      title: "Hill Resorts (Nainital, Manali, Mussoorie)",
      image:
        "https://i.pinimg.com/736x/8e/7f/68/8e7f689b109986c05ada50c75d259482.jpg",
      accent: "#ff9800",
    },
    {
      slug: "desert-camps",
      title: "Desert Camps (Jaisalmer)",
      image:
        "https://i.pinimg.com/736x/35/c5/53/35c553dfa7441da5b7b837cf869b5a34.jpg",
      accent: "#9c27b0",
    },
    {
      slug: "luxury-international-resorts",
      title: "Luxury International Resorts (Dubai, Bali, Thailand)",
      image:
        "https://i.pinimg.com/736x/33/4a/4c/334a4c9c6760f1efaea3cd114256f1f2.jpg",
      accent: "#4caf50",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[77vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/59/47/75/59477586d4cd30d51871a454ab9db6b9.jpg"
            alt="Destination Wedding Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-bold text-white mb-3 text-center leading-tight max-w-3xl">
            Dream Destinations for
            <br />
            Your Perfect Wedding
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            From pristine beaches to royal palaces, discover breathtaking venues
            across India and beyond for your unforgettable destination wedding.
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
                href={`/wedding-venues/all-venues?category=destination-wedding-venues&subCategory=${item.slug}`}
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
              ✨ EXOTIC DESTINATIONS FOR MAGICAL CELEBRATIONS
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🌴 SAY I DO IN PARADISE
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏰 ROYAL PALACES TO TROPICAL BEACHES
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ EXOTIC DESTINATIONS FOR MAGICAL CELEBRATIONS
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🌴 SAY I DO IN PARADISE
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏰 ROYAL PALACES TO TROPICAL BEACHES
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
          Featured Destination Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/wedding-venues/all-venues?category=destination-wedding-venues&subCategory=${category.slug}`}
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
                src="https://i.pinimg.com/1200x/1f/4f/12/1f4f1214d15fcdf270058cf2d08518ce.jpg"
                alt="About Destination Venues"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 uppercase tracking-wide">
                About Our Destination Venues
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Transform your wedding into an unforgettable journey with our
                handpicked collection of stunning destination venues. From the
                sun-kissed beaches of Goa and Kerala to the majestic palaces of
                Rajasthan, we bring you the most breathtaking locations.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you dream of a serene hill station ceremony in Manali, a
                romantic desert celebration in Jaisalmer, or a luxurious
                international wedding in Dubai, Bali, or Thailand, we have the
                perfect destination to make your special day extraordinary.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-purple-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-purple-900">
                    EXOTIC LOCATIONS
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Stunning Destinations</p>
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
                    CURATED RESORTS
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Premium Selection</p>
                </div>
                <div>
                  <div className="text-purple-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-purple-900">ALL-INCLUSIVE</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Complete Packages
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
            Discover Dream Destinations
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our curated collection of breathtaking destination wedding
            venues across India and international locations. From beachfront
            ceremonies to royal palace celebrations, create memories that will
            last a lifetime in the world's most spectacular settings.
          </p>
          <div className="text-center">
            <Link
              href="/wedding-venues/all-venues?category=destination-wedding-venues"
              className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL DESTINATIONS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationWeddingVenuesPage;