"use client";
import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Mail, Heart, CheckCircle, Calendar, Users, Award, Sparkles, Camera, TrendingUp } from 'lucide-react';

const MehndiArtist = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const mehndiCategories = [
    {
      id: 1,
      name: 'Bridal Mehndi',
      description: 'Intricate and elaborate designs for the bride',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723436/bridal-mehndi_csdjqj.jpg',
      icon: Sparkles,
      designs: 150,
      price: '₹5,000 - ₹25,000'
    },
    {
      id: 2,
      name: 'Arabic Mehndi',
      description: 'Bold and contemporary Arabic patterns',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723435/Arabeic-ehndi_d3lmhz.jpg',
      icon: TrendingUp,
      designs: 120,
      price: '₹1,500 - ₹8,000'
    },
    {
      id: 3,
      name: 'Traditional Indian',
      description: 'Classic intricate Indian bridal designs',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723432/traditional-indian-mehndi_zupkcs.jpg',
      icon: Award,
      designs: 200,
      price: '₹3,000 - ₹15,000'
    },
    {
      id: 4,
      name: 'Modern Minimalist',
      description: 'Contemporary simple elegant patterns',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723431/modern-minimilest_xlw6zd.jpg',
      icon: Camera,
      designs: 80,
      price: '₹1,000 - ₹5,000'
    }
  ];

  const mehndiArtists = [
    {
      id: 1,
      name: 'Fatima Khan',
      title: 'Master Bridal Mehndi Artist',
      experience: '15 years',
      rating: 5.0,
      reviews: 582,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723431/fatima_xqvrib.jpg',
      specialization: ['Bridal Mehndi', 'Arabic Design', 'Traditional'],
      location: 'Delhi NCR',
      phone: '+91 98765 43220',
      email: 'fatima.khan@shhaadibazaar.com',
      portfolio: 800,
      availability: 'Available',
      languages: ['Hindi', 'Urdu', 'English'],
      startingPrice: 5000,
      featured: true
    },
    {
      id: 2,
      name: 'Priya Mehta',
      title: 'Celebrity Mehndi Designer',
      experience: '12 years',
      rating: 4.9,
      reviews: 456,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723428/priya_ffnyme.jpg',
      specialization: ['Modern Designs', 'Bridal', 'Rajasthani'],
      location: 'Mumbai',
      phone: '+91 98765 43221',
      email: 'priya.mehta@shhaadibazaar.com',
      portfolio: 650,
      availability: 'Available',
      languages: ['Hindi', 'English', 'Marathi'],
      startingPrice: 6000,
      featured: true
    },
    {
      id: 3,
      name: 'Ayesha Siddiqui',
      title: 'Arabic Mehndi Specialist',
      experience: '10 years',
      rating: 4.8,
      reviews: 389,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723427/ayesha_zcqnho.jpg',
      specialization: ['Arabic', 'Gulf Style', 'Contemporary'],
      location: 'Hyderabad',
      phone: '+91 98765 43222',
      email: 'ayesha.siddiqui@shhaadibazaar.com',
      portfolio: 520,
      availability: 'Limited',
      languages: ['Hindi', 'Urdu', 'Telugu'],
      startingPrice: 4000,
      featured: false
    },
    {
      id: 4,
      name: 'Simran Kaur',
      title: 'Traditional Bridal Expert',
      experience: '14 years',
      rating: 4.9,
      reviews: 512,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723427/simran-kaur_jrrtu5.jpg',
      specialization: ['Punjabi Design', 'Indo-Arabic', 'Bridal'],
      location: 'Chandigarh',
      phone: '+91 98765 43223',
      email: 'simran.kaur@shhaadibazaar.com',
      portfolio: 720,
      availability: 'Available',
      languages: ['Punjabi', 'Hindi', 'English'],
      startingPrice: 5500,
      featured: true
    },
    {
      id: 5,
      name: 'Zainab Ahmed',
      title: 'Premium Henna Artist',
      experience: '11 years',
      rating: 4.8,
      reviews: 423,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723425/zanib_ymwmbb.jpg',
      specialization: ['Moroccan Style', 'Glitter Mehndi', 'Colored Henna'],
      location: 'Bangalore',
      phone: '+91 98765 43224',
      email: 'zainab.ahmed@shhaadibazaar.com',
      portfolio: 480,
      availability: 'Available',
      languages: ['English', 'Kannada', 'Urdu'],
      startingPrice: 4500,
      featured: false
    },
    {
      id: 6,
      name: 'Neha Sharma',
      title: 'Bridal Mehndi Designer',
      experience: '9 years',
      rating: 4.7,
      reviews: 356,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723421/hena_nwjpin.jpg',
      specialization: ['Rajasthani', 'Minimalist', 'Floral Patterns'],
      location: 'Jaipur',
      phone: '+91 98765 43225',
      email: 'neha.sharma@shhaadibazaar.com',
      portfolio: 410,
      availability: 'Available',
      languages: ['Hindi', 'English'],
      startingPrice: 3500,
      featured: false
    }
  ];

  const packages = [
    {
      id: 1,
      name: 'Bridal Complete Package',
      type: 'Premium',
      badge: 'Most Popular',
      price: 18000,
      originalPrice: 28000,
      description: 'Full bridal mehndi experience with premium designs',
      features: [
        'Full hands & feet intricate design',
        'Pre-mehndi skin preparation',
        'Premium organic henna cones',
        'Personal design consultation',
        'Custom name & date incorporation',
        'Bridal motifs & symbols',
        'After-care kit included',
        'Touch-up service next day',
        'Photography-ready designs',
        'Up to 8 hours service'
      ],
      duration: 'Full day coverage',
      popular: true,
      includes: 'Bride only'
    },
    {
      id: 2,
      name: 'Family Package',
      type: 'Standard',
      price: 12000,
      originalPrice: 18000,
      description: 'Complete mehndi service for family members',
      features: [
        'Mehndi for 10 people',
        'Hands front & back designs',
        'Arabic & traditional styles',
        'Quality henna cones',
        'Design variety options',
        '4-5 hours service',
        'Basic touch-up available'
      ],
      duration: 'Half day',
      popular: false,
      includes: '10 people'
    },
    {
      id: 3,
      name: 'Bridesmaid Special',
      type: 'Standard',
      price: 8000,
      originalPrice: 12000,
      description: 'Beautiful designs for bridesmaids and close friends',
      features: [
        'Mehndi for 5 bridesmaids',
        'Front hands design',
        'Arabic or simple patterns',
        'Quality henna',
        'Matching design theme',
        '3 hours service'
      ],
      duration: 'Half day',
      popular: false,
      includes: '5 people'
    },
    {
      id: 4,
      name: 'Quick Party Mehndi',
      type: 'Basic',
      price: 5000,
      originalPrice: 7500,
      description: 'Fast and elegant designs for party guests',
      features: [
        'Simple elegant designs',
        'Front hand only',
        'Quick application',
        'Good quality henna',
        'Up to 15 guests',
        '2-3 hours service'
      ],
      duration: 'Express service',
      popular: false,
      includes: 'Up to 15 guests'
    }
  ];

  const designGallery = [
    {
      id: 1,
      category: 'Bridal',
      title: 'Intricate Bridal Design',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723420/gallery-1_jqj8fy.jpg',
      artist: 'Fatima Khan',
      likes: 1250
    },
    {
      id: 2,
      category: 'Arabic',
      title: 'Bold Arabic Pattern',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723414/gallery-2_nu6ycw.jpg',
      artist: 'Ayesha Siddiqui',
      likes: 980
    },
    {
      id: 3,
      category: 'Traditional',
      title: 'Classic Rajasthani',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723411/gallery-3_rvn6yy.jpg',
      artist: 'Neha Sharma',
      likes: 1120
    },
    {
      id: 4,
      category: 'Modern',
      title: 'Minimalist Chic',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723411/gallery-3_rvn6yy.jpg',
      artist: 'Priya Mehta',
      likes: 856
    },
    {
      id: 5,
      category: 'Bridal',
      title: 'Traditional Bridal Full',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723409/gallery-7_tj96qb.jpg',
      artist: 'Simran Kaur',
      likes: 1340
    },
    {
      id: 6,
      category: 'Arabic',
      title: 'Contemporary Arabic',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723410/gallery-6_xnslbj.jpg',
      artist: 'Zainab Ahmed',
      likes: 742
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Riya Patel',
      role: 'Bride',
      rating: 5,
      comment: 'Fatima\'s work is absolutely breathtaking! The intricate details and beautiful color made my bridal mehndi perfect. It lasted for weeks!',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723407/riya_ubvrni.jpg',
      date: 'September 2025'
    },
    {
      id: 2,
      name: 'Aisha Rahman',
      role: 'Bride',
      rating: 5,
      comment: 'The bridal package was worth every penny. Priya created a stunning design that got so many compliments at my wedding. Highly recommended!',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723407/sia_ae9gqi.jpg',
      date: 'October 2025'
    },
    {
      id: 3,
      name: 'Meera Singh',
      role: 'Bridesmaid',
      rating: 5,
      comment: 'Beautiful Arabic designs for all the bridesmaids. The artist was professional, quick, and the designs were gorgeous!',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761723407/anjali_svgjeu.jpg',
      date: 'August 2025'
    }
  ];

  const handleAddToWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(id => id !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
    }
  };

  const filteredDesigns = activeCategory === 'all'
    ? designGallery
    : designGallery.filter(design => design.category.toLowerCase() === activeCategory.toLowerCase());

  const featuredArtists = mehndiArtists.filter(artist => artist.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative px-20 h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/97/ff/90/97ff90e7481a2ded7e719b9e2414dfbb.jpg"
            alt="Mehndi Art"
            className="w-full h-full object-cover opacity-70 animate-[zoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white animate-[slideUp_1s_ease-out]">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-rose-400 mr-3 animate-pulse" />
              <span className="text-rose-400 font-semibold tracking-wider text-lg">ARTISTRY IN HENNA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              EXQUISITE<br />
              <em className="font-light">MEHNDI</em><br />
              DESIGNS
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Transform your hands into masterpieces with our expert mehndi artists. From traditional bridal designs to contemporary Arabic patterns, we create art that celebrates your special moments.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                BOOK ARTIST NOW
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 border-2 border-white">
                VIEW GALLERY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mehndi Categories */}
      <div className="py-20 px-20">
        <div className="container mx-auto px-4 md:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              EXPLORE MEHNDI STYLES
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">From traditional to modern, find the perfect style for your celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mehndiCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-[slideUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 text-rose-400" />
                    </div>
                    <h3 className="text-2xl font-medium mb-2">{category.name}</h3>
                    <p className="text-gray-200 mb-4 text-sm">{category.description}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                      <span className="text-rose-400 font-thin">{category.price}</span>
                      <span className="text-sm text-gray-300">{category.designs}+ designs</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Artists */}
      <div className="py-12 px-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              FEATURED MEHNDI ARTISTS
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">   Book our top-rated mehndi artists for your special day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-80 bg-gradient-to-br from-rose-100 to-rose-50 overflow-hidden group">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button
                    onClick={() => handleAddToWishlist(artist.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-110 z-10"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${wishlist.includes(artist.id)
                          ? 'text-rose-400 fill-current scale-110'
                          : 'text-gray-400'
                        }`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{artist.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    Featured
                  </div>
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${artist.availability === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {artist.availability}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-medium text-gray-800 mb-1">{artist.name}</h3>
                  <p className="text-rose-400 font-light text-md mb-2">{artist.title}</p>
                  <p className="text-xs text-gray-600 mb-4">{artist.experience} experience</p>

                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      <span className="truncate">{artist.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      {artist.portfolio}+ Brides Served
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Award className="w-3 h-3 mr-2 text-rose-400 flex-shrink-0" />
                      {artist.reviews} Reviews
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {artist.specialization.slice(0, 2).map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">
                      Starting from <span className="text-xl font-bold text-rose-400">₹{artist.startingPrice.toLocaleString()}</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedArtist(artist)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-extralight cursor-pointer transform hover:scale-105 hover:shadow-lg"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="py-20 px-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              MEHNDI PACKAGES
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">          Choose the perfect package for your celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col animate-[slideUp_0.6s_ease-out] hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {pkg.badge && (
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-rose-400 text-white px-4 py-2 rounded-bl-2xl text-sm font-semibold shadow-lg animate-pulse">
                      {pkg.badge}
                    </div>
                  </div>
                )}

                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{pkg.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-extralight ${pkg.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                        pkg.type === 'Standard' ? 'bg-pink-100 text-pink-600' :
                          'bg-gray-100 text-gray-600'
                      }`}>
                      {pkg.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline mb-1">
                      <span className="text-3xl font-normal text-rose-400">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 flex items-center mb-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {pkg.duration}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {pkg.includes}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-rose-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 5 && (
                      <p className="text-xs text-rose-400 font-semibold ml-6">
                        +{pkg.features.length - 5} more features
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-light transform hover:scale-105 hover:shadow-lg"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Gallery */}
      <div className="py-6 px-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 animate-[fadeIn_1s_ease-out]">

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                DESIGN GALLERY
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> Browse our stunning collection of mehndi designs</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'bridal', 'arabic', 'traditional', 'modern'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-light transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                      ? 'bg-rose-400 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-rose-50 border-2 border-gray-200'
                    }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDesigns.map((design, index) => (
              <div
                key={design.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedDesign(design)}
              >
                <div className="relative h-85 overflow-hidden">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-medium mb-2">{design.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">By {design.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm">
                      <Heart className="w-4 h-4 mr-1 fill-current" />
                      {design.likes} likes
                    </span>
                    <span className="text-xs bg-rose-400 px-3 py-1 rounded-full">
                      {design.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 px-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              HAPPY CLIENTS
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">            Read what our brides say about their mehndi experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-rose-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-rose-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Artist Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">Artist Profile</h3>
                <button
                  onClick={() => setSelectedArtist(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-full h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedArtist.name}
                  </h4>
                  <p className="text-rose-400 font-semibold text-lg mb-4">
                    {selectedArtist.title}
                  </p>

                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                    <span className="font-semibold text-xl">{selectedArtist.rating}</span>
                    <span className="text-gray-500 ml-2">({selectedArtist.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700">
                      <strong>Experience:</strong> {selectedArtist.experience}
                    </p>
                    <p className="text-gray-700">
                      <strong>Portfolio:</strong> {selectedArtist.portfolio}+ Brides Served
                    </p>
                    <p className="text-gray-700">
                      <strong>Languages:</strong> {selectedArtist.languages.join(', ')}
                    </p>
                    <p className="text-gray-700">
                      <strong>Location:</strong> {selectedArtist.location}
                    </p>
                    <p className="text-gray-700">
                      <strong>Starting Price:</strong> <span className="text-2xl font-bold text-rose-400">₹{selectedArtist.startingPrice.toLocaleString()}</span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 mb-3">Specializations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedArtist.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-semibold"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <a
                  href={`tel:${selectedArtist.phone}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {selectedArtist.phone}
                </a>
                <a
                  href={`mailto:${selectedArtist.email}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {selectedArtist.email}
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                  Book This Artist
                </button>
                <button className="flex-1 bg-white border-2 border-rose-400 text-rose-400 py-3 rounded-lg hover:bg-rose-50 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {selectedPackage.name}
                  </h3>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${selectedPackage.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                      selectedPackage.type === 'Standard' ? 'bg-pink-100 text-pink-600' :
                        'bg-gray-100 text-gray-600'
                    }`}>
                    {selectedPackage.type}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-600 mb-6 text-lg">{selectedPackage.description}</p>

              <div className="mb-6 pb-6 border-b">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-bold text-rose-400">
                    ₹{selectedPackage.price.toLocaleString()}
                  </span>
                  <span className="ml-3 text-xl text-gray-400 line-through">
                    ₹{selectedPackage.originalPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-600 flex items-center mt-2">
                  <Clock className="w-5 h-5 mr-2 text-rose-400" />
                  Duration: {selectedPackage.duration}
                </p>
                <p className="text-gray-600 flex items-center mt-2">
                  <Users className="w-5 h-5 mr-2 text-rose-400" />
                  Includes: {selectedPackage.includes}
                </p>
                <div className="mt-3 bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block font-semibold">
                  Save ₹{(selectedPackage.originalPrice - selectedPackage.price).toLocaleString()}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4 text-xl">Package Includes:</h4>
                <div className="space-y-3">
                  {selectedPackage.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start animate-[slideRight_0.5s_ease-out]"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <CheckCircle className="w-6 h-6 mr-3 text-rose-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                Book This Package
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Design Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]" onClick={() => setSelectedDesign(null)}>
          <div className="max-w-4xl w-full animate-[scaleUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-rose-400 transition-colors"
              >
                ×
              </button>
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="bg-white p-6 rounded-b-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedDesign.title}</h3>
                <p className="text-gray-600 mb-2">Artist: <span className="text-rose-400 font-semibold">{selectedDesign.artist}</span></p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-gray-600">
                    <Heart className="w-5 h-5 mr-2 text-rose-400 fill-current" />
                    {selectedDesign.likes} likes
                  </span>
                  <span className="bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedDesign.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default MehndiArtist;
