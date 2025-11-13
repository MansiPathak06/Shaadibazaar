'use client';

import { useState } from 'react';
import { Heart, MapPin, Plane, Camera, Users, Sparkles, Calendar, Shield, Award, Globe, Mountain, Palmtree, Building2, Castle, Phone, Mail, ChevronLeft, ChevronRight, Utensils, Music, Play, Star, Check } from 'lucide-react';

export default function DestinationWedding() {
  const [activeDestination, setActiveDestination] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const destinations = [
    {
      name: "Udaipur, Rajasthan",
      icon: Castle,
      badge: "Royal Palace",
      description: "Royal palaces and serene lakes create a fairytale setting",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896212/udaypur-hero_ebamps.jpg",
      // video: "https://res.cloudinary.com/dewxpvl5s/video/upload/v1761908317/goa-destination-video_t6m6ou.mp4",
      highlights: ["Lake Pichola Views", "City Palace", "Heritage Hotels", "Royal Venues"],
      galleries: [
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895493/udaypur-image-1_z0nash.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895492/udaypur-image-2_jqlxxa.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895492/udaypur-image-3_u6u0ko.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895492/udaypur-image-4_wj8xvo.jpg"
      ],
      features: [
        { icon: Castle, label: "Lake Pichola Views" },
        { icon: Sparkles, label: "City Palace" },
        { icon: Building2, label: "Heritage Hotels" },
        { icon: Camera, label: "Royal Venues" }
      ]
    },
    {
      name: "Goa",
      icon: Palmtree,
      badge: "Beach Paradise",
      description: "Beach paradise with sun, sand, and tropical vibes",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895492/goa-hero_vw6lwm.jpg",
      // video: "",
      highlights: ["Beach Ceremonies", "Sunset Weddings", "Beachfront Resorts", "Ocean Views"],
      galleries: [
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895489/goa-image-1_dslrzo.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895489/goa-image-2_gjvrml.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895489/goa-image-3_ccynjp.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895488/goa-image-4_bhdspg.jpg"
      ],
      features: [
        { icon: Palmtree, label: "Beach Ceremonies" },
        { icon: Sparkles, label: "Sunset Weddings" },
        { icon: Building2, label: "Beach Resorts" },
        { icon: Camera, label: "Ocean Views" }
      ]
    },
    {
      name: "Jaipur, Rajasthan",
      icon: Building2,
      badge: "Pink City",
      description: "Pink city charm with magnificent forts and palaces",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895488/jaipur-hero_da36nr.jpg",
      // video: "",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Desert Ceremonies"],
      galleries: [
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895486/jaipur-image-1_w8bdak.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895485/jaipur-image-2_fxlbdt.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895485/jaipur-image-3_swjba4.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895485/jaipur-image-4_sud1kp.jpg"
      ],
      features: [
        { icon: Building2, label: "Amber Fort" },
        { icon: Castle, label: "City Palace" },
        { icon: Sparkles, label: "Hawa Mahal" },
        { icon: Camera, label: "Desert Events" }
      ]
    },
    {
      name: "Kerala Backwaters",
      icon: Palmtree,
      badge: "Tropical Haven",
      description: "Tranquil waterways surrounded by lush greenery",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909872/kerala_hero_urdpei.jpg",
      highlights: ["Houseboat Weddings", "Backwater Resorts", "Traditional Venues", "Nature Setting"],
      galleries: [
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909871/kerala-gallery-1_fgrtcp.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909871/kerala-gallery-2_aityjb.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909871/kerala-gallery-3_vnytch.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909870/kerala-gallery-4_hjsxvy.jpg"
      ],
      features: [
        { icon: Palmtree, label: "Houseboat Weddings" },
        { icon: Building2, label: "Backwater Resorts" },
        { icon: Sparkles, label: "Traditional Venues" },
        { icon: Camera, label: "Nature Setting" }
      ]
    },

    {
      name: "Shimla & Manali",
      icon: Mountain,
      badge: "Hill Station",
      description: "Majestic mountains and scenic hill stations",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909654/shimla-hero_rhrkcj.jpg",
      highlights: ["Mountain Views", "Snow Ceremonies", "Valley Resorts", "Adventures"],
      galleries: [
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909461/shimla-and-manai-1_xz2xhd.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909461/shimla-and-manai-2_z4g5ch.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909461/shimla-and-manai-3_ofzetb.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909461/shimla-and-manai-4_y1hvd8.jpg"
      ],
      features: [
        { icon: Mountain, label: "Mountain Views" },
        { icon: Sparkles, label: "Snow Ceremonies" },
        { icon: Building2, label: "Valley Resorts" },
        { icon: Camera, label: "Adventures" }
      ]
    },

    {
      name: "International Destinations",
      icon: Globe,
      badge: "Worldwide",
      description: "Exotic locations across Europe, Asia, and beyond",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761909051/international-wedding_rbm5py.jpg",
      // video: "",
      highlights: ["Dubai", "Bali", "Thailand", "Europe Castles"],
      galleries: [
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761908913/international-wedding-1_fjubbj.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761908914/international-wedding-2_bvbiza.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761908916/international-wedding-3_cqnwnm.jpg",
        "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761908914/international-wedding-4_mcaszn.jpg"
      ],
      features: [
        { icon: Globe, label: "Dubai" },
        { icon: Palmtree, label: "Bali" },
        { icon: Building2, label: "Thailand" },
        { icon: Castle, label: "Europe Castles" }
      ]
    }
  ];

  const packages = [
    {
      name: "Royal Package",
      price: "₹25-35 Lakhs",
      guests: "200-300",
      features: ["3 Day Wedding", "Palace/Fort Venue", "Luxury Accommodation", "Premium Catering", "Celebrity Entertainment", "Premium Photography", "Full Decoration", "Guest Transportation"]
    },
    {
      name: "Premium Package",
      price: "₹15-25 Lakhs",
      guests: "100-200",
      features: ["2 Day Wedding", "Premium Venue", "Comfortable Stay", "Multi-cuisine Catering", "Live Entertainment", "Professional Photography", "Complete Decoration", "Local Transport"]
    },
    {
      name: "Classic Package",
      price: "₹8-15 Lakhs",
      guests: "50-100",
      features: ["1-2 Day Wedding", "Beautiful Venue", "Standard Accommodation", "Quality Catering", "DJ & Music", "Photography Coverage", "Elegant Decoration", "Basic Transport"]
    }
  ];

  const weddingGallery = [
    { type: 'video', src: "https://res.cloudinary.com/dewxpvl5s/video/upload/v1761906315/destination-wedding-content-video-1_rviaeu.mp4", title: "Royal Celebration" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905558/destination-wedding-gallery-content-2_jayzmg.jpg", title: "Beach Ceremony" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905555/destination-wedding-gallery-content-3_apr5mw.jpg", title: "Palace Wedding" },
    { type: 'video', src: "https://res.cloudinary.com/dewxpvl5s/video/upload/v1761907798/destination-wedding-video-3_adlt4j.mp4", title: "Romantic Moments" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905552/destination-wedding-gallery-content-5_nredqu.jpg", title: "Grand Entrance" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905552/destination-wedding-gallery-content-6_xa4gvj.jpg", title: "Destination Bliss" },
    { type: 'video', src: "https://res.cloudinary.com/dewxpvl5s/video/upload/v1761910534/destination-wedding-videos_wemrzr.mp4", title: "Special Moments" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905549/destination-wedding-gallery-content-8_gl6ysx.jpg", title: "Cultural Rituals" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905548/destination-wedding-gallery-content-9_sfiv4j.jpg", title: "Couple Portrait" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905548/destination-wedding-gallery-content-10_croozi.jpg", title: "Reception Decor" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905547/destination-wedding-gallery-content-11_t08ntl.jpg", title: "Mandap Setup" },
    { type: 'image', src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761905547/destination-wedding-gallery-content-12_a66rot.jpg", title: "Traditional Ceremony" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % weddingGallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + weddingGallery.length) % weddingGallery.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761899638/destination-wedding-page-hero_y4gh8u.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <Plane className="w-24 h-24 text-rose-400 mb-6 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-medium text-white mb-6">
            Destination Weddings
          </h1>
          <p className="text-3xl md:text-4xl text-rose-400 mb-8 font-medium">
            Say "I Do" in Paradise
          </p>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl">
            Create unforgettable memories at breathtaking destinations across India and the world
          </p>
          <div className="flex gap-4">
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-4 rounded-full text-xl font-light cursor-pointer transition-all transform hover:scale-105 shadow-2xl">
              Explore Destinations
            </button>
            <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white px-10 py-4 rounded-full text-xl font-light cursor-pointer transition-all transform hover:scale-105">
              View Packages
            </button>
          </div>
        </div>
      </div>

      {/* Why Destination Wedding Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Why Choose a Destination Wedding?
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> Transform your special day into an extraordinary vacation experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Unique Experience", desc: "Create memories in stunning locations that guests will never forget" },
              { icon: Users, title: "Quality Time", desc: "Spend multiple days celebrating with your closest friends and family" },
              { icon: Camera, title: "Stunning Backdrops", desc: "Natural beauty provides breathtaking photo opportunities" },
              { icon: Heart, title: "Intimate Celebration", desc: "Smaller guest lists mean more meaningful connections" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-rose-400">
                <item.icon className="w-14 h-14 text-rose-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations - ALL CARDS WITH NEW DESIGN */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Popular Destinations
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Trusted by thousands of happy brides for their special day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <div
                key={i}
                onClick={() => setActiveDestination(i)}
                className={`relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-rose-400/30 transition-all duration-500 group bg-white cursor-pointer transform hover:scale-105 ${activeDestination === i ? 'ring-4 ring-rose-400 scale-105' : ''
                  }`}
              >
                {/* Main image with parallax effect */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-400 to-rose-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                    {(() => {
                      const IconComponent = dest.icon;
                      return <IconComponent className="w-5 h-5" />;
                    })()}
                    <span className="font-extralight text-sm">{dest.badge}</span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-1 flex items-center gap-2">
                      {dest.name}
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-rose-400 animate-pulse" />
                    </h3>
                    <p className="text-rose-300 text-sm">{dest.description}</p>
                  </div>
                </div>

                {/* Content area */}
                <div className="p-6">
                  {/* Mini gallery preview */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {dest.galleries.map((img, j) => (
                      <div key={j} className="relative aspect-square rounded-lg overflow-hidden group/img cursor-pointer">
                        <img
                          src={img}
                          alt={`${dest.name} view ${j + 1}`}
                          className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-rose-400/0 group-hover/img:bg-rose-400/20 transition-colors flex items-center justify-center">
                          <Camera className="w-4 h-4 md:w-6 md:h-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
                    {dest.features.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 bg-rose-50 px-2 md:px-3 py-2 rounded-lg hover:bg-rose-100 transition-colors">
                        <item.icon className="w-4 h-4 text-rose-400 flex-shrink-0" />
                        <span className="text-xs md:text-sm font-medium text-gray-700 truncate">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 cursor-pointer bg-gradient-to-r from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 text-white px-4 py-3 rounded-xl font-normal transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
                      Get Quote
                    </button>
                    <button className="px-4 py-3 bg-rose-50 cursor-pointer hover:bg-rose-100 text-rose-600 rounded-xl transition-all duration-300 transform hover:scale-105">
                      <Play className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Wedding Gallery Slider */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Our Destination Weddings
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Moments we've captured across beautiful locations</p>
          </div>
          <div className="relative">
            <div className="relative h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {weddingGallery[currentSlide].type === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  key={currentSlide}
                >
                  <source src={weddingGallery[currentSlide].src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={weddingGallery[currentSlide].src}
                  alt={weddingGallery[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-3xl font-medium text-white mb-2">{weddingGallery[currentSlide].title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {weddingGallery[currentSlide].type === 'video' && (
                        <Play className="w-6 h-6 text-rose-400" />
                      )}
                      <span className="text-rose-400 font-semibold">
                        {currentSlide + 1} / {weddingGallery.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
          <div className="flex gap-3 mt-8 overflow-x-auto pb-4">
            {weddingGallery.map((item, i) => (
              <div
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`relative flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${currentSlide === i ? 'ring-4 ring-rose-400 scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-black">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ) : (
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Wedding Packages
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Choose the perfect package for your celebration</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                onClick={() => setSelectedPackage(i)}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all transform hover:-translate-y-2 cursor-pointer ${selectedPackage === i ? 'ring-4 ring-rose-400 scale-105' : ''
                  }`}
              >
                <div className={`p-6 ${i === 1 ? 'bg-rose-400' : 'bg-gray-800'} text-white`}>
                  <h3 className="text-3xl font-medium mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-normal mb-1">{pkg.price}</p>
                  <p className="text-lg opacity-90">{pkg.guests} Guests</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {pkg.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className="w-6 h-6 text-rose-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-xl font-light transition-all">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="relative pb-32 pt-20 px-4 overflow-hidden">
        {/* Animated Background Gradients */}
    

        <div className="max-w-7xl mx-auto relative z-10">
        
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                Complete Wedding Management
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">      We handle everything from start to finish</p>
            </div>


          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Plane,
                title: "Travel Arrangements",
                desc: "Seamless flight bookings, airport transfers, and private transportation coordination for guests",
                color: "rose",
                gradient: "from-rose-500 to-pink-500"
              },
              {
                icon: Building2,
                title: "Luxury Accommodation",
                desc: "Handpicked 5-star hotels, heritage properties, and exclusive destination venues",
                color: "pink",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: Camera,
                title: "Photography & Films",
                desc: "Award-winning cinematography, drone coverage, and premium photo documentation",
                color: "rose",
                gradient: "from-rose-600 to-rose-400"
              },
              {
                icon: Utensils,
                title: "Gourmet Catering",
                desc: "Multi-cuisine dining with celebrity chefs, live counters, and signature menus",
                color: "pink",
                gradient: "from-pink-600 to-pink-400"
              },
              {
                icon: Music,
                title: "Entertainment",
                desc: "Celebrity performers, international DJs, live bands, and cultural showcases",
                color: "rose",
                gradient: "from-rose-500 to-red-400"
              },
              {
                icon: Sparkles,
                title: "Bespoke Decoration",
                desc: "Dramatic drapery, sculptural florals, custom lighting, and immersive installations",
                color: "pink",
                gradient: "from-pink-500 to-rose-400"
              },
              {
                icon: Calendar,
                title: "Event Orchestration",
                desc: "End-to-end planning, real-time coordination, and seamless timeline execution",
                color: "rose",
                gradient: "from-rose-600 to-pink-500"
              },
              {
                icon: Users,
                title: "Guest Experience",
                desc: "24/7 concierge, personalized hospitality, and VIP guest management services",
                color: "pink",
                gradient: "from-pink-600 to-rose-500"
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-rose-100/60 hover:border-rose-300 transition-all duration-700 hover:shadow-2xl hover:shadow-rose-200/60 hover:-translate-y-3 cursor-pointer overflow-hidden"
                style={{
                  animationDelay: `${i * 50}ms`
                }}
              >
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container with Enhanced Animation */}
                  <div className="mb-6 inline-flex items-center justify-center">
                    <div className={`relative p-5 bg-gradient-to-br ${service.gradient} rounded-2xl group-hover:rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg group-hover:shadow-xl`}>
                      <service.icon className="w-9 h-9 text-white relative z-10" strokeWidth={1.5} />

                      {/* Pulsing Ring Effect */}
                      <div className="absolute inset-0 rounded-2xl group-hover:rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                    </div>
                  </div>

                  {/* Title with Gradient on Hover */}
                  <h3 className="font-medium text-gray-900 mb-4 text-xl md:text-2xl tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-rose-600 group-hover:to-pink-600 transition-all duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-md leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                    {service.desc}
                  </p>

                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-rose-400/10 rounded-full blur-2xl group-hover:bg-rose-400/20 group-hover:scale-150 transition-all duration-700"></div>

                <div className="absolute -top-8 -left-8 w-24 h-24 bg-pink-400/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-full transition-all duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials with Photos */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Happy Couples
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Stories from our destination weddings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                names: "Riya & Karan",
                location: "Udaipur Palace Wedding",
                image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761897014/destination-wedding-testimonial-1_gs2te4.jpg",
                text: "Our palace wedding in Udaipur was beyond magical! ShaadiBAzaar made our dream destination wedding come true with flawless execution."
              },
              {
                names: "Priya & Arjun",
                location: "Goa Beach Wedding",
                image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761897014/destination-wedding-testimonial-2_fleecc.jpg",
                text: "The beach wedding in Goa was absolutely perfect! Every sunset moment was captured beautifully. Highly recommend!"
              },
              {
                names: "Neha & Rohan",
                location: "Jaipur Fort Wedding",
                image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761897013/destination-wedding-testimonial-3_ieypj1.jpg",
                text: "Our royal wedding at Jaipur was a fairy tale! The team handled 250 guests seamlessly. Worth every penny!"
              },
              {
                names: "Anjali & Vikram",
                location: "Kerala Backwaters",
                image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761897013/destination-wedding-testimonial-4_l2t4u3.jpg",
                text: "The serene backwater wedding was intimate and beautiful. ShaadiBAzaar's attention to detail was impressive!"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={testimonial.image}
                    alt={testimonial.names}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-rose-400 text-white px-4 py-2 rounded-full font-semibold">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-medium text-gray-800 mb-2">{testimonial.names}</h4>
                  <p className="text-rose-400 font-normal mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {testimonial.location}
                  </p>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Planning Timeline
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your journey to the perfect destination wedding</p>
          </div>

          <div className="space-y-8">
            {[
              { month: "9-12 Months Before", title: "Initial Planning", tasks: ["Choose destination", "Set budget", "Create guest list", "Book venue"] },
              { month: "6-9 Months Before", title: "Vendor Selection", tasks: ["Book photographers", "Select caterers", "Choose decorators", "Plan entertainment"] },
              { month: "3-6 Months Before", title: "Details & Logistics", tasks: ["Send invitations", "Book accommodations", "Arrange travel", "Finalize menu"] },
              { month: "1-3 Months Before", title: "Final Touches", tasks: ["Confirm all vendors", "Create schedule", "Guest coordination", "Rehearsal planning"] },
              { month: "Wedding Week", title: "Celebration Time", tasks: ["Vendor coordination", "Guest welcome", "Event execution", "Enjoy your day!"] }
            ].map((phase, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start cursor-pointer">
                <div className="flex-shrink-0 w-full md:w-40 text-left md:text-right">
                  <div className="bg-rose-400 text-white px-4 py-2 rounded-lg font-light inline-block">
                    {phase.month}
                  </div>
                </div>
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className="w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-lg"></div>
                  {i < 4 && <div className="absolute left-3 top-6 w-0.5 h-20 bg-rose-200"></div>}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-medium text-gray-800 mb-3">{phase.title}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.tasks.map((task, j) => (
                      <li key={j} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-rose-400 mr-2 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
