"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, MapPin, Palette, Camera } from "lucide-react";

const DecorativeZonesPage = () => {
  // Hero items with their subcategory slugs
  const heroItems = [
    {
      image: "https://i.pinimg.com/736x/d2/59/4b/d2594b57dd002d3e22c74e7bcb0a1b13.jpg",
      label: "Entrance Gate",
      slug: "entrance-gate",
    },
    {
      image: "https://i.pinimg.com/736x/4f/d1/2c/4fd12ccf0172a46ef835f6a5c855d28a.jpg",
      label: "Mandap / Stage",
      slug: "mandap-stage",
    },
    {
      image: "https://i.pinimg.com/1200x/15/a0/f0/15a0f0826b6d3ecc9104847b74962d5d.jpg",
      label: "Jaimala Stage",
      slug: "jaimala-stage",
    },
    {
      image: "https://i.pinimg.com/1200x/b6/aa/da/b6aada4971e5a7c88c9c060895b28aa7.jpg",
      label: "Couple Seating Area",
      slug: "couple-seating-area",
    },
  ];

  const features = [
    { icon: Palette, text: "Custom Designs", color: "text-pink-300" },
    { icon: Sparkles, text: "Premium Decor", color: "text-purple-300" },
    { icon: Camera, text: "Instagram Worthy", color: "text-fuchsia-300" },
  ];

  // Category collections (bottom section)
  const categories = [
    {
      slug: "entrance-gate",
      title: "Entrance Gate",
      image: "https://i.pinimg.com/736x/d2/59/4b/d2594b57dd002d3e22c74e7bcb0a1b13.jpg",
      accent: "#9333ea",
    },
    {
      slug: "mandap-stage",
      title: "Mandap / Stage",
      image: "https://i.pinimg.com/736x/4f/d1/2c/4fd12ccf0172a46ef835f6a5c855d28a.jpg",
      accent: "#ec4899",
    },
    {
      slug: "jaimala-stage",
      title: "Jaimala Stage",
      image: "https://i.pinimg.com/1200x/15/a0/f0/15a0f0826b6d3ecc9104847b74962d5d.jpg",
      accent: "#8b5cf6",
    },
    {
      slug: "couple-seating-area",
      title: "Couple Seating Area",
      image: "https://i.pinimg.com/1200x/b6/aa/da/b6aada4971e5a7c88c9c060895b28aa7.jpg",
      accent: "#d946ef",
    },
    {
      slug: "mehendi-corner",
      title: "Mehendi Corner",
      image: "https://i.pinimg.com/736x/60/60/49/60604978979eab50a6c7f0ef70302ccf.jpg",
      accent: "#f59e0b",
    },
    {
      slug: "haldi-decor-space",
      title: "Haldi Decor Space",
      image: "https://i.pinimg.com/1200x/e5/4f/52/e54f526656fdb39af2740ef894d5b65e.jpg",
      accent: "#eab308",
    },
    {
      slug: "photo-backdrop-walls",
      title: "Photo Backdrop Walls",
      image: "https://i.pinimg.com/1200x/8d/9c/fd/8d9cfd5202835092fc254ead771c601c.jpg",
      accent: "#06b6d4",
    },
    {
      slug: "lounge-seating-area",
      title: "Lounge Seating Area",
      image: "https://i.pinimg.com/736x/a3/77/2c/a3772c54160160f0014e388bf169399c.jpg",
      accent: "#10b981",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[77vh] overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://via.placeholder.com/1920x1080/9333ea/ffffff?text=Decorative+Zones+Background"
            alt="Decorative Zones Background"
            className="w-full h-full object-cover blur-sm scale-105"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 py-6">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl mt-5 font-bold text-white mb-3 text-center leading-tight max-w-3xl">
            Transform spaces into
            <br />
            magical memories
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 text-center max-w-xl mb-4 leading-relaxed">
            Create stunning decorative zones that capture the essence of your celebration.
            From grand entrances to intimate corners, we bring your vision to life.
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
                href={`/wedding-decorations/all-decor?category=decorative-zones&subCategory=${item.slug}`}
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
              ✨ EXQUISITE DECOR FOR EXTRAORDINARY CELEBRATIONS
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🎨 CREATING PICTURE-PERFECT MOMENTS
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              💫 WHERE DREAMS MEET DESIGN
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ EXQUISITE DECOR FOR EXTRAORDINARY CELEBRATIONS
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              🎨 CREATING PICTURE-PERFECT MOMENTS
            </span>
            <span className="text-purple-100 text-sm md:text-base font-light tracking-widest mx-8">
              💫 WHERE DREAMS MEET DESIGN
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
          Featured Decorative Zone Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/wedding-decorations/all-decor?category=decorative-zones&subCategory=${category.slug}`}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg">
                {/* Image */}
                <div className="h-42 md:h-48 overflow-hidden relative">
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
                src="https://i.pinimg.com/736x/28/5f/ba/285fbacd32bdb3ee3711027fe045ec14.jpg"
                alt="About Decorative Zones"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 uppercase tracking-wide">
                About Our Decorative Zones
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Every corner of your celebration deserves to be picture-perfect. 
                Our decorative zone collections transform ordinary spaces into 
                extraordinary experiences that reflect your unique style and vision.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From grand entrance gates that welcome your guests to intimate 
                mehendi corners and stunning photo backdrops, each zone is 
                thoughtfully designed to create lasting memories and Instagram-worthy 
                moments throughout your special day.
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
                    CREATIVE DESIGNS
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Unique Concepts</p>
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
                    QUALITY ASSURED
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">Premium Materials</p>
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
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-purple-900">PHOTO READY</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Instagram Worthy
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
            Complete Decorative Zone Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive range of decorative zones designed to 
            make every corner of your celebration spectacular. From welcoming 
            entrance gates to cozy lounge areas, we create cohesive designs 
            that tell your unique love story.
          </p>
          <div className="text-center">
            <Link
              href="/wedding-decorations/all-decor?category=decorative-zones"
              className="bg-purple-900 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              EXPLORE ALL ZONES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeZonesPage;