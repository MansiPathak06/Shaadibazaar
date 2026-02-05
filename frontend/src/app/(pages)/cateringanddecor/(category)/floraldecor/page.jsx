"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Heart,
  Sparkles,
  Camera,
  Phone,
  MapPin,
  Crown,
  Gem,
  FlowerIcon as Flower,
  ArrowRight,
} from "lucide-react";

export default function FloralDecorWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryCategories = [
    { id: "all", name: "All Décor" },
    { id: "stage", name: "Stage Floral" },
    { id: "banquet", name: "Banquet Décor" },
    { id: "mandap", name: "Mandap Design" },
    { id: "furniture", name: "Custom Furniture" },
    { id: "welcome", name: "Welcome Décor" },
    { id: "extra", name: "Special Installations" },
  ];

  const galleryItems = [
    // Stage Floral Décor
    {
      id: 1,
      category: "stage",
      title: "Royal Stage Backdrop",
      subtitle: "Majestic floral arrangements",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340122/floral-gallery-1_oofhxr.jpg",
      size: "large",
    },
    {
      id: 2,
      category: "stage",
      title: "Minimalist Stage Design",
      subtitle: "Clean elegant florals",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340122/floral-gallery-2_uqtyfi.avif",
      size: "medium",
    },
    {
      id: 3,
      category: "stage",
      title: "Traditional Stage Setup",
      subtitle: "Cultural floral elements",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340122/floral-gallery-3_ruvbxu.jpg",
      size: "medium",
    },

    // Banquet Floral Décor
    {
      id: 4,
      category: "banquet",
      title: "Grand Banquet Hall",
      subtitle: "Luxurious table arrangements",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340122/floral-gallery-4_olxtqr.jpg",
      size: "large",
    },
    {
      id: 5,
      category: "banquet",
      title: "Elegant Centerpieces",
      subtitle: "Refined dining décor",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340121/floral-gallery-5_pgbiqu.jpg",
      size: "medium",
    },
    {
      id: 6,
      category: "banquet",
      title: "Floral Table Runners",
      subtitle: "Cascading arrangements",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340121/floral-gallery-6_apm6ta.jpg",
      size: "small",
    },

    // Mandap Floral Décor
    {
      id: 7,
      category: "mandap",
      title: "Traditional Mandap",
      subtitle: "Sacred floral canopy",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340120/floral-gallery-7_bi0bba.jpg",
      size: "wide",
    },
    {
      id: 8,
      category: "mandap",
      title: "Modern Mandap Design",
      subtitle: "Contemporary sacred space",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340121/floral-gallery-8_lgfedu.jpg",
      size: "medium",
    },
    {
      id: 9,
      category: "mandap",
      title: "Floral Arch Mandap",
      subtitle: "Blooming sacred entrance",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340121/floral-gallery-9_gsn441.jpg",
      size: "medium",
    },

    // Custom Furniture
    {
      id: 10,
      category: "furniture",
      title: "Floral Bridal Throne",
      subtitle: "Ornate seating arrangements",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340121/floral-gallery-10_tp513z.jpg",
      size: "large",
    },
    {
      id: 11,
      category: "furniture",
      title: "Decorated Lounge Sets",
      subtitle: "Comfortable floral seating",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340121/floral-gallery-11_fvgplp.jpg",
      size: "medium",
    },

    // Welcome Décor
    {
      id: 12,
      category: "welcome",
      title: "Grand Entrance Arch",
      subtitle: "Welcoming floral gateway",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340120/floral-gallery-12_xmobt1.jpg",
      size: "wide",
    },
    {
      id: 13,
      category: "welcome",
      title: "Floral Welcome Pathway",
      subtitle: "Petal-strewn walkways",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340120/floral-gallery-13_xfftpm.jpg",
      size: "medium",
    },

    // Extra Floral Décor
    {
      id: 14,
      category: "extra",
      title: "Hanging Installations",
      subtitle: "Suspended floral art",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340120/floral-gallery-14_jchjks.jpg",
      size: "tall",
    },
    {
      id: 15,
      category: "extra",
      title: "Photo Booth Backdrops",
      subtitle: "Instagram-worthy setups",
      image:
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340120/floral-gallery-15_m7ae2w.jpg",
      size: "square",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const getGridClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "medium":
        return "col-span-1 row-span-1";
      case "small":
        return "col-span-1 row-span-1";
      case "square":
        return "col-span-1 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="bg-linear-to-br from-rose-50 to-pink-50">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-end min-h-screen overflow-hidden"
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340362/floral-hero_defzwi.jpg"
            alt="Elegant Wedding Flowers"
            className="w-full h-full object-cover"
          />
          {/* linear Overlay */}
          {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20"></div> */}
        </div>

        {/* Content at Bottom */}
        <div className="relative z-10 w-full pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6">
            {/* Decorative floral elements */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-white/40"></div>
              <div className="mx-6 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Flower className="w-6 h-6 text-white" />
              </div>
              <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-white/40"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Where Every Flower
              <br />
              <span className="font-serif italic text-rose-300">
                Tells a Story
              </span>
            </h1>

            {/* Enhanced divider */}
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-rose-300"></div>
              <div className="w-3 h-3 bg-rose-300 rounded-full mx-4"></div>
              <div className="w-16 h-0.5 bg-linear-to-r from-rose-300 to-amber-300"></div>
              <div className="w-3 h-3 bg-amber-300 rounded-full mx-4"></div>
              <div className="w-8 h-0.5 bg-amber-300"></div>
            </div>

            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
              Transforming spaces with blooms, colors, and fragrance to create
              unforgettable celebrations.
            </p>

            <p className="text-rose-300 font-light text-lg mb-8">
              Each petal placed with purpose, every arrangement crafted with
              love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/cateringanddecor/all-services?category=decor">
                <button className="group bg-rose-500 text-white px-8 py-4 rounded-xl hover:bg-rose-600 transition-all duration-300 flex items-center justify-center gap-3 text-sm font-medium shadow-lg hover:shadow-xl">
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                    <Camera size={16} className="text-white" />
                  </div>
                  Explore Our Floral Creations
                </button>
              </Link>

              <Link href="/cateringanddecor/all-services?category=decor">
                <button className="group bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white px-8 py-4 rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 text-sm font-medium">
                  <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                    <Phone size={16} className="text-white" />
                  </div>
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/3 right-12 opacity-30 animate-pulse z-10">
          <div className="w-3 h-3 bg-rose-300 rounded-full"></div>
        </div>
        <div
          className="absolute top-1/2 left-12 opacity-25 animate-pulse z-10"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-1/3 right-1/4 opacity-20 animate-pulse z-10"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-4 h-4 bg-rose-200 rounded-full"></div>
        </div>
      </section>

      {/* About Section */}
      {/* Welcome Decoration Section */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Welcome To{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Floral Decorations
              </span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Create unforgettable first impressions with elegant entrance décor
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340428/floral-about_kqmxe9.avif"
                alt="Welcome Arch"
                className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-medium mb-2">
                  Grand Welcome Arch
                </h3>
                <p className="text-white/90">
                  Majestic floral gateway that welcomes guests
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-light text-gray-800 mb-4">
                  First Moments,{" "}
                  <span className="font-medium text-rose-500">
                    Lasting Memories
                  </span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Your guests' journey begins at the entrance. Our welcome
                  decorations create anticipation and excitement, setting the
                  perfect mood for the celebration ahead.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                  <MapPin className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Entrance Pathways
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Petal-strewn walkways lined with elegant arrangements
                      guide guests to your celebration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                  <Crown className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Welcome Signage
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Personalized floral frames and elegant signage that
                      welcome guests by name.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-lg">
                  <Sparkles className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">
                      Greeting Areas
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Designated spaces with floral arrangements for receiving
                      and greeting guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-8 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              A{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Symphony
              </span>{" "}
              of{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Blooms
              </span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Celebrate amidst a world of color, beauty, and artistry
            </p>
          </div>

          {/* Gallery Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm cursor-pointer font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-rose-50 text-rose-600 hover:bg-rose-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Modern Masonry Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500 ${getGridClasses(
                  item.size
                )}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* linear Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-medium text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">{item.subtitle}</p>
                    <div className="flex items-center mt-3 text-rose-300">
                      <span className="text-xs">View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-rose-500 cursor-pointer text-white px-8 py-4 rounded-lg hover:bg-rose-600 transition flex items-center gap-2 mx-auto">
              <Camera className="w-5 h-5" />
              View Complete Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Popular Wedding Flowers Showcase */}
      <section className="py-24 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Popular{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Wedding Flower
              </span>{" "}
              Varieties
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Find the blooms that tell your story with charm, fragrance, and
              symbolism
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340721/flower-varities-1_qnghkt.jpg"
                  alt="Red Roses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-medium text-xl text-gray-800 mb-1">Roses</h3>
              <p className="text-gray-600 text-xs">Classic & Romantic</p>
            </div>

            <div className="group text-center">
              <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340719/flower-varities-2_x430ew.jpg"
                  alt="White Orchids"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-medium text-xl text-gray-800 mb-1">
                Orchids
              </h3>
              <p className="text-gray-600 text-xs">Exotic & Elegant</p>
            </div>

            <div className="group text-center">
              <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340717/flower-varities-3_tnvtkr.jpg"
                  alt="Pink Peonies"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-medium text-xl text-gray-800 mb-1">
                Peonies
              </h3>
              <p className="text-gray-600 text-xs">Soft & Luxurious</p>
            </div>

            <div className="group text-center">
              <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340713/flower-varities-4_dtbts5.jpg"
                  alt="White Hydrangeas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-medium text-xl text-gray-800 mb-1">
                Hydrangeas
              </h3>
              <p className="text-gray-600 text-xs">Full & Abundant</p>
            </div>

            <div className="group text-center">
              <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340713/flower-varities-5_evu0sr.jpg"
                  alt="White Lilies"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-medium text-xl text-gray-800 mb-1">Lilies</h3>
              <p className="text-gray-600 text-xs">Pure & Sacred</p>
            </div>

            <div className="group text-center">
              <div className="relative overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340714/flower-varities-6_gcp6se.jpg"
                  alt="Mixed Flowers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/10 group-hover:bg-rose-500/20 transition-colors duration-300"></div>
              </div>
              <h3 className="font-medium text-xl text-gray-800 mb-1">
                Mixed Blooms
              </h3>
              <p className="text-gray-600 text-xs">Vibrant & Diverse</p>
            </div>
          </div>

          {/* Seasonal Flower Collections */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340712/flower-varities-7_d0koea.jpg"
                  alt="Spring Flowers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Spring
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Spring Collection
                </h3>
                <p className="text-gray-600 text-sm">
                  Tulips, daffodils, cherry blossoms
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340715/flower-varities-8_zlnp4a.jpg"
                  alt="Summer Flowers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Summer
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Summer Blooms
                </h3>
                <p className="text-gray-600 text-sm">
                  Sunflowers, dahlias, marigolds
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340712/flower-varities-9_odxwdt.jpg"
                  alt="Autumn Flowers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Autumn
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Autumn Harvest
                </h3>
                <p className="text-gray-600 text-sm">
                  Chrysanthemums, asters, roses
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762340711/flower-varities-10_hjkqxv.jpg"
                  alt="Winter Flowers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Winter
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Winter Elegance
                </h3>
                <p className="text-gray-600 text-sm">
                  Poinsettias, amaryllis, evergreens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouquet Gallery Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Bridal{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Bouquet Collection
              </span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Each bouquet tells your story—personal, stylish, and timeless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341039/bridal-bouquet-collection-1_oo2yye.jpg"
                  alt="Classic White Rose Bouquet"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-medium mb-1">
                          Classic White Roses
                        </h3>
                        <p className="text-white/90 text-sm">
                          Timeless elegance
                        </p>
                      </div>
                      <Heart className="w-6 h-6 text-rose-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">
                  Traditional Beauty
                </h3>
                <p className="text-gray-600 text-sm">
                  Pure white roses with baby's breath and satin ribbons
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341040/bridal-bouquet-collection-2_llr80m.jpg"
                  alt="Mixed Flower Bouquet"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-medium mb-1">Garden Mix</h3>
                        <p className="text-white/90 text-sm">
                          Colorful variety
                        </p>
                      </div>
                      <Sparkles className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">
                  Wildflower Romance
                </h3>
                <p className="text-gray-600 text-sm">
                  Mixed seasonal blooms with natural greenery
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341038/bridal-bouquet-collection-3_hpnl8g.jpg"
                  alt="Orchid Bouquet"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-medium mb-1">
                          Exotic Orchids
                        </h3>
                        <p className="text-white/90 text-sm">
                          Modern sophistication
                        </p>
                      </div>
                      <Crown className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-800 mb-2">
                  Tropical Elegance
                </h3>
                <p className="text-gray-600 text-sm">
                  Premium orchids with minimalist styling
                </p>
              </div>
            </div>
          </div>

          {/* Bouquet Styles Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341038/bridal-bouquet-collection-4_tmxgyp.jpg"
                  alt="Cascade Bouquet"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-lg text-gray-800 mb-1">
                Cascade Style
              </h4>
              <p className="text-gray-600 text-xs">Flowing waterfall design</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341036/bridal-bouquet-collection-5_z1qqwj.jpg"
                  alt="Round Bouquet"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-lg text-gray-800 mb-1">
                Round Shape
              </h4>
              <p className="text-gray-600 text-xs">Classic compact design</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341038/bridal-bouquet-collection-6_wgnm4k.jpg"
                  alt="Posy Bouquet"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-lg text-gray-800 mb-1">
                Posy Style
              </h4>
              <p className="text-gray-600 text-xs">Small & delicate</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341037/bridal-bouquet-collection-7_zqi5ur.jpg"
                  alt="Hand-tied Bouquet"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-medium text-lg text-gray-800 mb-1">
                Hand-Tied
              </h4>
              <p className="text-gray-600 text-xs">Natural & organic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage Floral Décor Section */}
      <section className="py-20 px-6 bg-linear-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Center{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Stage
              </span>{" "}
              for{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Your Love
              </span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Create unforgettable moments with a floral stage that radiates
              beauty and emotion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341331/royal-stage-decoration_q9uuzm.jpg"
                alt="Royal Stage Setup"
                className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-medium mb-2">
                  Royal Stage Backdrop
                </h3>
                <p className="text-white/90">
                  Majestic floral arrangements with royal elegance
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Crown className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="text-2xl font-medium text-gray-800 mb-3">
                  Flower Walls & Backdrops
                </h3>
                <p className="text-gray-600 text-sm">
                  Stunning vertical gardens and floral walls that create the
                  perfect backdrop for your special moments.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-rose-500 mb-4" />
                <h3 className="text-2xl font-medium text-gray-800 mb-3">
                  Hanging Installations
                </h3>
                <p className="text-gray-600 text-sm">
                  Ethereal suspended arrangements and chandeliers that add drama
                  and elegance to your stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Section */}

      {/* Custom Furniture Section */}
      <section className="py-20 px-6 bg-linear-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Customized{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                chairs
              </span>{" "}
              and{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                sofas
              </span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Beautifully crafted seating that combines comfort, luxury, and
              floral artistry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341427/bridal-throne_wmudwe.jpg"
                  alt="Bridal Throne"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Crown className="w-6 h-6 text-rose-500 mb-3" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Bridal Throne Sets
                </h3>
                <p className="text-gray-600 text-sm">
                  Ornate seating arrangements fit for royalty, adorned with
                  fresh flowers and luxury fabrics.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341427/lounge-sittong_yd6lg6.jpg"
                  alt="Lounge Seating"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Gem className="w-6 h-6 text-rose-500 mb-3" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Elegant Lounge Sets
                </h3>
                <p className="text-gray-600 text-sm">
                  Comfortable and stylish seating areas perfect for guests to
                  relax and enjoy the celebration.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762341427/decorated-chair_kmtkyc.jpg"
                  alt="Decorated Chairs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Flower className="w-6 h-6 text-rose-500 mb-3" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Floral Chair Covers
                </h3>
                <p className="text-gray-600 text-sm">
                  Transform ordinary chairs with elegant covers, floral accents,
                  and coordinated color schemes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Installations Section */}
      <section className="py-12 px-6 bg-linear-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Create{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Moments
              </span>{" "}
              That{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">
                Wow
              </span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
              Floral designs that wow guests and create picture-perfect moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Crown className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Flower Tunnels
              </h3>
              <p className="text-gray-600 text-sm">
                Enchanting pathways lined with blooms that create magical
                walkways for the couple and guests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Hanging Chandeliers
              </h3>
              <p className="text-gray-600 text-sm">
                Suspended floral masterpieces that add vertical drama and
                elegance to your venue spaces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Camera className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Photo Zones
              </h3>
              <p className="text-gray-600 text-sm">
                Instagram-worthy floral backdrops designed specifically for
                capturing beautiful memories.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Gem className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-xl font-mediu text-gray-800 mb-3">
                Ceiling Drapes
              </h3>
              <p className="text-gray-600 text-sm">
                Ethereal overhead arrangements with flowing fabrics and
                cascading flowers for dramatic effect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
