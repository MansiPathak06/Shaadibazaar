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
      image: "https://i.pinimg.com/736x/4a/86/a1/4a86a1e8a9b27a95574051996516d08e.jpg",
      video: "https://cdn.coverr.co/videos/coverr-palace-architecture-9735/1080p.mp4",
      highlights: ["Lake Pichola Views", "City Palace", "Heritage Hotels", "Royal Venues"],
      galleries: [
        "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=200&h=150&fit=crop"
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
      image: "https://i.pinimg.com/736x/2c/9c/4c/2c9c4ce2dec7769ca1363032ec6e148f.jpg",
      video: "https://cdn.coverr.co/videos/coverr-tropical-beach-sunset-7815/1080p.mp4",
      highlights: ["Beach Ceremonies", "Sunset Weddings", "Beachfront Resorts", "Ocean Views"],
      galleries: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=200&h=150&fit=crop"
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
      image: "https://i.pinimg.com/736x/08/c3/44/08c34423ea011e5e4b4632e313ca161f.jpg",
      video: "https://cdn.coverr.co/videos/coverr-ancient-architecture-6234/1080p.mp4",
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Desert Ceremonies"],
      galleries: [
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1528181304800-259b08848526?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=200&h=150&fit=crop"
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
      image: "https://i.pinimg.com/736x/93/a6/be/93a6be1baa163b827dac54b70844d481.jpg",
      video: "https://cdn.coverr.co/videos/coverr-boat-in-water-4692/1080p.mp4",
      highlights: ["Houseboat Weddings", "Backwater Resorts", "Traditional Venues", "Nature Setting"],
      galleries: [
        "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=150&fit=crop"
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
      image: "https://i.pinimg.com/736x/65/8d/28/658d2843323583632056d480ba1aaff8.jpg",
      video: "https://cdn.coverr.co/videos/coverr-mountain-landscape-8234/1080p.mp4",
      highlights: ["Mountain Views", "Snow Ceremonies", "Valley Resorts", "Adventure Activities"],
      galleries: [
        "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=200&h=150&fit=crop"
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
      image: "https://i.pinimg.com/1200x/42/ff/3a/42ff3ae488454d02615a20936bea8fef.jpg",
      video: "https://cdn.coverr.co/videos/coverr-airplane-flying-over-clouds-2156/1080p.mp4",
      highlights: ["Dubai", "Bali", "Thailand", "Europe Castles"],
      galleries: [
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=200&h=150&fit=crop",
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=200&h=150&fit=crop"
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
    { type: 'video', src: "https://assets.mixkit.co/videos/40601/40601-720.mp4", title: "Royal Celebration" },
    { type: 'image', src: "https://i.pinimg.com/1200x/91/d1/43/91d14312fe153c17f584172f167e79b7.jpg", title: "Beach Ceremony" },
    { type: 'image', src: "https://i.pinimg.com/1200x/e1/94/3e/e1943e20b449965602b0dfd42c2156fe.jpg", title: "Palace Wedding" },
    { type: 'video', src: "https://video-previews.elements.envatousercontent.com/38df18ba-19e0-4be9-b45e-b441c8f54ee0/watermarked_preview/watermarked_preview.mp4", title: "Romantic Moments" },
    { type: 'image', src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop", title: "Grand Entrance" },
    { type: 'image', src: "https://i.pinimg.com/1200x/c9/62/af/c962af1118ca04572f1ceb86e6265492.jpg", title: "Destination Bliss" },
    { type: 'video', src: "https://cdn.coverr.co/videos/coverr-wedding-rings-5623/1080p.mp4", title: "Special Moments" },
    { type: 'image', src: "https://i.pinimg.com/1200x/72/5c/14/725c14d8cc7a76c1e2822bfbcf23348e.jpg", title: "Cultural Rituals" },
    { type: 'image', src: "https://i.pinimg.com/1200x/bf/aa/94/bfaa94eb538c93c3d7ac715f499ea54a.jpg", title: "Couple Portrait" },
    { type: 'image', src: "https://i.pinimg.com/1200x/2c/24/c8/2c24c8bf0ae49aaf6274c783b7440a3a.jpg", title: "Reception Decor" },
    { type: 'image', src: "https://i.pinimg.com/736x/93/23/25/9323255abd1379503d5f30b87f236439.jpg", title: "Mandap Setup" },
    { type: 'image', src: "https://i.pinimg.com/736x/ca/95/d5/ca95d511aa49b80272a9388e4b69a503.jpg", title: "Traditional Ceremony" }
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
            <source src="https://assets.mixkit.co/videos/40591/40591-720.mp4" type="video/mp4" />
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
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 flex items-center gap-2">
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
                    <button className="flex-1 bg-gradient-to-r from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base">
                      Get Quote
                    </button>
                    <button className="px-4 py-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl transition-all duration-300 transform hover:scale-105">
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
            <Camera className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Destination Weddings</h2>
            <p className="text-xl text-gray-600">Moments we've captured across beautiful locations</p>
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
                  <h3 className="text-3xl font-bold text-white mb-2">{weddingGallery[currentSlide].title}</h3>
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
            <Award className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Wedding Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your celebration</p>
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
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold mb-1">{pkg.price}</p>
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
                  <button className="mt-8 w-full bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold transition-all">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Complete Wedding Management</h2>
            <p className="text-xl text-gray-600">We handle everything from start to finish</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Travel Arrangements", desc: "Flight bookings and transfers" },
              { icon: Building2, title: "Accommodation", desc: "Luxury hotels and resorts" },
              { icon: Camera, title: "Photography", desc: "Professional photo & video" },
              { icon: Utensils, title: "Catering", desc: "Multi-cuisine dining" },
              { icon: Music, title: "Entertainment", desc: "Live music and DJ" },
              { icon: Sparkles, title: "Decoration", desc: "Themed decor setup" },
              { icon: Calendar, title: "Event Planning", desc: "Complete coordination" },
              { icon: Users, title: "Guest Management", desc: "Full guest services" }
            ].map((service, i) => (
              <div key={i} className="bg-rose-50 p-6 rounded-xl hover:bg-rose-100 transition-all transform hover:scale-105">
                <service.icon className="w-10 h-10 text-rose-400 mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Photos */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Star className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Happy Couples</h2>
            <p className="text-xl text-gray-600">Stories from our destination weddings</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                names: "Riya & Karan",
                location: "Udaipur Palace Wedding",
                image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
                text: "Our palace wedding in Udaipur was beyond magical! ShaadiBAzaar made our dream destination wedding come true with flawless execution."
              },
              {
                names: "Priya & Arjun",
                location: "Goa Beach Wedding",
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
                text: "The beach wedding in Goa was absolutely perfect! Every sunset moment was captured beautifully. Highly recommend!"
              },
              {
                names: "Neha & Rohan",
                location: "Jaipur Fort Wedding",
                image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
                text: "Our royal wedding at Jaipur was a fairy tale! The team handled 250 guests seamlessly. Worth every penny!"
              },
              {
                names: "Anjali & Vikram",
                location: "Kerala Backwaters",
                image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
                text: "The serene backwater wedding was intimate and beautiful. ShaadiBAzaar's attention to detail was impressive!"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-64">
                  <img
                    src={testimonial.image}
                    alt={testimonial.names}
                    className="w-full h-full object-cover"
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
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{testimonial.names}</h4>
                  <p className="text-rose-400 font-semibold mb-4 flex items-center">
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
            <Calendar className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Planning Timeline</h2>
            <p className="text-xl text-gray-600">Your journey to the perfect destination wedding</p>
          </div>
          <div className="space-y-8">
            {[
              { month: "9-12 Months Before", title: "Initial Planning", tasks: ["Choose destination", "Set budget", "Create guest list", "Book venue"] },
              { month: "6-9 Months Before", title: "Vendor Selection", tasks: ["Book photographers", "Select caterers", "Choose decorators", "Plan entertainment"] },
              { month: "3-6 Months Before", title: "Details & Logistics", tasks: ["Send invitations", "Book accommodations", "Arrange travel", "Finalize menu"] },
              { month: "1-3 Months Before", title: "Final Touches", tasks: ["Confirm all vendors", "Create schedule", "Guest coordination", "Rehearsal planning"] },
              { month: "Wedding Week", title: "Celebration Time", tasks: ["Vendor coordination", "Guest welcome", "Event execution", "Enjoy your day!"] }
            ].map((phase, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full md:w-40 text-left md:text-right">
                  <div className="bg-rose-400 text-white px-4 py-2 rounded-lg font-bold inline-block">
                    {phase.month}
                  </div>
                </div>
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className="w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-lg"></div>
                  {i < 4 && <div className="absolute left-3 top-6 w-0.5 h-20 bg-rose-200"></div>}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{phase.title}</h3>
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
