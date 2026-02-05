"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Users, Calendar } from "lucide-react";

const PostWeddingVenuesPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image:
        "https://i.pinimg.com/1200x/49/d6/85/49d6859a8ede22c27ff6be4f8145cdb8.jpg",
      label: "Reception Banquets",
      slug: "reception-banquets",
    },
    {
      image:
        "https://i.pinimg.com/1200x/39/6d/79/396d7972665e72563319830a7870f0db.jpg",
      label: "Walima Venues",
      slug: "walima-venues",
    },
    {
      image:
        "https://i.pinimg.com/736x/ba/90/d6/ba90d60e37f9b8cbd5da2747f25c3529.jpg",
      label: "Pagphera Ceremony",
      slug: "pagphera-ceremony-venues",
    },
    {
      image:
        "https://i.pinimg.com/736x/6a/a8/c4/6aa8c453890d963aafc60f1aa33a01bb.jpg",
      label: "Home Lawn Venues",
      slug: "home-lawn-venues",
    },
  ];

  const features = [
    { icon: Users, text: "Intimate to Grand", color: "text-pink-300" },
    { icon: MapPin, text: "Premium Locations", color: "text-purple-300" },
    { icon: Calendar, text: "Flexible Booking", color: "text-fuchsia-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "reception-banquets",
      title: "Reception Banquets",
      image:
        "https://i.pinimg.com/1200x/49/d6/85/49d6859a8ede22c27ff6be4f8145cdb8.jpg",
      accent: "#e91e63",
    },
    {
      slug: "walima-venues",
      title: "Walima Venues",
      image:
        "https://i.pinimg.com/1200x/33/68/f9/3368f983eeafd946d980c91f15c51c20.jpg",
      accent: "#3f51b5",
    },
    {
      slug: "pagphera-ceremony-venues",
      title: "Pagphera Ceremony Venues",
      image:
        "https://i.pinimg.com/1200x/ed/20/f4/ed20f47675d71323e0eb59499e48c1d7.jpg",
      accent: "#ff9800",
    },
    {
      slug: "home-lawn-venues",
      title: "Home Lawn Venues",
      image:
        "https://i.pinimg.com/736x/6a/a8/c4/6aa8c453890d963aafc60f1aa33a01bb.jpg",
      accent: "#9c27b0",
    },
    {
      slug: "dining-halls",
      title: "Dining Halls",
      image:
        "https://i.pinimg.com/736x/da/b3/d7/dab3d7ab973170b6e1d5598a6a30012b.jpg",
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
            src="https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg"
            alt="Post-Wedding Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-bold text-white mb-3 text-center leading-tight max-w-3xl">
            Celebrate Your New Beginning
            <br />
            with Perfect Post-Wedding Venues
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            From reception celebrations to walima ceremonies, find the ideal venue to 
            continue your wedding festivities with elegance and joy.
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
                href={`/venue-and-accommodation/all-venues?category=post-wedding-venues&subCategory=${item.slug}`}
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
              ✨ CELEBRATE YOUR NEW JOURNEY TOGETHER
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🎊 PERFECT VENUES FOR POST-WEDDING FESTIVITIES
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏛️ WHERE CELEBRATIONS CONTINUE
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ CELEBRATE YOUR NEW JOURNEY TOGETHER
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🎊 PERFECT VENUES FOR POST-WEDDING FESTIVITIES
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🏛️ WHERE CELEBRATIONS CONTINUE
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
      <div className="container mx-auto px-4 md:px-8 lg:px-40 py-16">
        <h2 className="text-3xl font-bold text-purple-900 mb-8 uppercase tracking-wide">
          Featured Post-Wedding Venue Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/venue-and-accommodation/all-venues?category=post-wedding-venues&subCategory=${category.slug}`}
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
                src="https://i.pinimg.com/736x/d1/2d/7c/d12d7c4044896bf3fea741335fabd254.jpg"
                alt="About Post-Wedding Venues"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 uppercase tracking-wide">
                About Our Post-Wedding Venues
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Your wedding journey doesn't end with the ceremony. From grand 
                reception banquets to intimate walima gatherings and traditional 
                pagphera ceremonies, we offer the perfect venues to celebrate 
                every special moment after your big day.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Whether you're hosting a lavish reception, a heartfelt walima, 
                or an intimate family gathering at home, our curated collection 
                of post-wedding venues ensures your celebrations continue with 
                the same elegance and joy.
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
                    DIVERSE SPACES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Multiple Options</p>
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
                    VERIFIED VENUES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Quality Assured</p>
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
                  <h4 className="font-semibold text-purple-900">BEST VALUE</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Competitive Pricing
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
            Complete Post-Wedding Venue Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of post-wedding venues designed for 
            receptions, walima ceremonies, pagphera gatherings, and intimate family 
            celebrations. Each venue is carefully selected to make your post-wedding 
            festivities as memorable as your special day.
          </p>
          <div className="text-center">
            <Link
              href="/venue-and-accommodation/all-venues?category=post-wedding-venues"
              className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL VENUES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWeddingVenuesPage;