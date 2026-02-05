"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Users, Calendar } from "lucide-react";

const OutdoorVenuesPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image: "https://i.pinimg.com/736x/b5/b4/fb/b5b4fb79dabef9b8e4f5c25de73d2366.jpg",
      label: "Open Lawns",
      slug: "open-lawns",
    },
    {
      image: "https://i.pinimg.com/1200x/a7/68/76/a768767aa1225659cd111547a87bfb39.jpg",
      label: "Wedding Gardens",
      slug: "wedding-gardens",
    },
    {
      image: "https://i.pinimg.com/736x/77/6d/bd/776dbd46a6adaa3b2f1589bbae7b4fa4.jpg",
      label: "Farmhouses",
      slug: "farmhouses",
    },
    {
      image: "https://i.pinimg.com/1200x/e6/61/7a/e6617a023e77ab70ad023ab51bf4f161.jpg",
      label: "Resort Lawns",
      slug: "resort-lawns",
    },
  ];

  const features = [
    { icon: Users, text: "100-5000 Guests", color: "text-green-300" },
    { icon: MapPin, text: "Scenic Locations", color: "text-emerald-300" },
    { icon: Calendar, text: "Seasonal Bookings", color: "text-teal-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "open-lawns",
      title: "Open Lawns",
      image: "https://i.pinimg.com/1200x/36/7d/31/367d31111a8156af8fea237881740158.jpg",
      accent: "#4caf50",
    },
    {
      slug: "wedding-gardens",
      title: "Wedding Gardens",
      image: "https://i.pinimg.com/1200x/4c/ca/aa/4ccaaae25d614c0e2a57c004b967ffdf.jpg",
      accent: "#8bc34a",
    },
    {
      slug: "farmhouses",
      title: "Farmhouses",
      image: "https://i.pinimg.com/736x/ce/44/b1/ce44b12fd02c9d179454844b494c06dc.jpg",
      accent: "#ff9800",
    },
    {
      slug: "resort-lawns",
      title: "Resort Lawns",
      image: "https://i.pinimg.com/1200x/ba/60/27/ba6027d1ddfa96036dbc5a403cfe5c82.jpg",
      accent: "#00bcd4",
    },
    {
      slug: "club-lawns",
      title: "Club Lawns",
      image: "https://i.pinimg.com/1200x/1c/a6/48/1ca648f55bf4609fbe5e1eaa7cad3a5d.jpg",
      accent: "#009688",
    },
    {
      slug: "poolside-lawns",
      title: "Poolside Lawns",
      image: "https://i.pinimg.com/736x/b6/fe/db/b6fedbaa5fa68a79abb6f2c7dc61f1ad.jpg",
      accent: "#03a9f4",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[77vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/bf/f3/4c/bff34c2085a150f82ded232ce33ccfb5.jpg"
            alt="Outdoor Venue Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-bold text-white mb-3 text-center leading-tight max-w-3xl">
            Celebrate Under the Sky
            <br />
            Nature's Perfect Canvas
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            Experience the magic of open-air celebrations with breathtaking natural
            settings. From lush gardens to elegant lawns, create unforgettable
            memories surrounded by nature's beauty.
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
                href={`/venue-and-accommodation/all-venues?category=outdoor-venues&subCategory=${item.slug}`}
                className="relative group"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-xl relative bg-gray-200">
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
      <div className="bg-linear-to-r from-green-900 via-emerald-700 to-green-800 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-green-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ BREATHTAKING OUTDOOR SETTINGS FOR YOUR SPECIAL DAY
            </span>
            <span className="text-green-100 text-sm md:text-base font-light tracking-widest mx-8">
              🌿 CELEBRATE AMIDST NATURE'S BEAUTY
            </span>
            <span className="text-green-100 text-sm md:text-base font-light tracking-widest mx-8">
              🌺 WHERE NATURE MEETS ELEGANCE
            </span>
            <span className="text-green-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ BREATHTAKING OUTDOOR SETTINGS FOR YOUR SPECIAL DAY
            </span>
            <span className="text-green-100 text-sm md:text-base font-light tracking-widest mx-8">
              🌿 CELEBRATE AMIDST NATURE'S BEAUTY
            </span>
            <span className="text-green-100 text-sm md:text-base font-light tracking-widest mx-8">
              🌺 WHERE NATURE MEETS ELEGANCE
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
      <div className="container mx-auto px-4 md:px-40 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-8 uppercase tracking-wide">
          Featured Outdoor Venue Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/venue-and-accommodation/all-venues?category=outdoor-venues&subCategory=${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                {/* Image */}
                <div className="h-42 md:h-65 overflow-hidden relative bg-gray-200">
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
                src="https://i.pinimg.com/736x/71/1b/14/711b14b10a22c65f759b8c758eb8b156.jpg"
                alt="About Outdoor Venues"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-green-900 mb-6 uppercase tracking-wide">
                About Our Outdoor Venues
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Discover the enchantment of open-air celebrations with our
                handpicked collection of outdoor wedding venues. Each location
                offers a unique blend of natural beauty and elegant amenities
                perfect for creating magical moments.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From sprawling open lawns to romantic wedding gardens and luxury
                resort settings, our outdoor venues provide the perfect backdrop
                for your dream celebration. Experience the freedom of open spaces
                combined with world-class facilities and stunning natural scenery.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-green-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-green-900">
                    SCENIC BEAUTY
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Natural Settings</p>
                </div>
                <div>
                  <div className="text-green-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-green-900">
                    PREMIUM FACILITIES
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Modern Amenities</p>
                </div>
                <div>
                  <div className="text-green-600 mb-2">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-green-900">FLEXIBLE SPACES</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Customizable Layouts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center uppercase tracking-wide">
            Complete Outdoor Venue Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our extensive range of outdoor venues perfect for weddings,
            receptions, and special celebrations. From open lawns to luxury
            farmhouses, experience the beauty of nature combined with exceptional
            hospitality for your dream outdoor wedding.
          </p>
          <div className="text-center">
            <Link
              href="/wedding-venues/all-venues?category=outdoor-venues"
              className="bg-green-900 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL OUTDOOR VENUES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutdoorVenuesPage;