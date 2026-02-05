"use client";
import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Mail, Heart, CheckCircle, Calendar, Users, Award, Scissors, Sparkles, Zap, Crown } from 'lucide-react';

const MensGrooming = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedSalon, setSelectedSalon] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const groomingServices = [
    {
      id: 1,
      name: 'HAIRCUT',
      description: 'Professional haircut and styling by expert barbers',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724179/image1_idkn7y.jpg',
      icon: Scissors,
      price: 500,
      duration: '30-45 min',
      popular: true,
      features: ['Consultation', 'Wash & Cut', 'Styling', 'Head Massage']
    },
    {
      id: 2,
      name: 'SHAVE',
      description: 'Traditional hot towel shave for smooth finish',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724216/image2_sxzgzr.jpg',
      icon: Sparkles,
      price: 300,
      duration: '20-30 min',
      popular: true,
      features: ['Hot Towel', 'Premium Cream', 'Close Shave', 'Aftershave']
    },
    {
      id: 3,
      name: 'BEARD TRIM',
      description: 'Expert beard shaping and grooming',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724216/image3_collpu.jpg',
      icon: Award,
      price: 350,
      duration: '25 min',
      popular: true,
      features: ['Shape & Trim', 'Edge Definition', 'Beard Oil', 'Styling']
    },
    {
      id: 4,
      name: 'FACIAL',
      description: 'Deep cleansing facial for glowing skin',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724216/image4_ndfcfx.jpg',
      icon: Sparkles,
      price: 800,
      duration: '45 min',
      popular: false,
      features: ['Deep Cleanse', 'Exfoliation', 'Mask', 'Moisturize']
    },
    {
      id: 5,
      name: 'HAIR COLOR',
      description: 'Professional hair coloring and highlights',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724217/image5_yzfmsa.jpg',
      icon: Zap,
      price: 1500,
      duration: '60-90 min',
      popular: false,
      features: ['Color Consultation', 'Application', 'Treatment', 'Styling']
    },
    {
      id: 6,
      name: 'HEAD MASSAGE',
      description: 'Relaxing head and shoulder massage',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724217/image6_xoflst.jpg',
      icon: Crown,
      price: 400,
      duration: '20 min',
      popular: false,
      features: ['Scalp Massage', 'Shoulder', 'Pressure Points', 'Aromatherapy']
    }
  ];

  const priceList = [
    {
      id: 1, category: 'Haircut Services', items: [
        { name: 'Classic Haircut', price: 500, duration: '30 min' },
        { name: 'Premium Haircut & Styling', price: 800, duration: '45 min' },
        { name: 'Kids Haircut', price: 350, duration: '20 min' },
        { name: 'Hair Wash & Blow Dry', price: 300, duration: '25 min' }
      ]
    },
    {
      id: 2, category: 'Shaving Services', items: [
        { name: 'Traditional Shave', price: 300, duration: '25 min' },
        { name: 'Royal Shave (Hot Towel)', price: 500, duration: '35 min' },
        { name: 'Beard Trim & Shape', price: 350, duration: '25 min' },
        { name: 'Mustache Trim', price: 150, duration: '10 min' }
      ]
    },
    {
      id: 3, category: 'Facial & Treatments', items: [
        { name: 'Gold Facial', price: 1200, duration: '60 min' },
        { name: 'Diamond Facial', price: 1500, duration: '60 min' },
        { name: 'Anti-Aging Treatment', price: 1800, duration: '75 min' },
        { name: 'Basic Cleanup', price: 600, duration: '30 min' }
      ]
    },
    {
      id: 4, category: 'Hair Treatments', items: [
        { name: 'Hair Spa', price: 1000, duration: '45 min' },
        { name: 'Keratin Treatment', price: 3500, duration: '90 min' },
        { name: 'Hair Color (Full)', price: 1500, duration: '90 min' },
        { name: 'Highlights', price: 2000, duration: '120 min' }
      ]
    }
  ];

  const groomPackages = [
    {
      id: 1,
      name: 'Groom Premium Package',
      type: 'Premium',
      badge: 'Most Popular',
      price: 15000,
      originalPrice: 22000,
      description: 'Complete grooming journey for the perfect groom look',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724218/image7_avdvrj.jpg',
      features: [
        '4 pre-wedding grooming sessions',
        'Premium haircut & styling (2 sessions)',
        'Luxury facial treatment (3 sessions)',
        'Beard grooming & shaping (3 sessions)',
        'Traditional hot towel shave',
        'Hair spa & treatment (2 sessions)',
        'Head & shoulder massage (4 sessions)',
        'Manicure & pedicure (2 sessions)',
        'Grooming consultation',
        'Wedding day special grooming',
        'Grooming kit included'
      ],
      duration: '1 month plan',
      sessions: '20+ sessions',
      popular: true
    },
    {
      id: 2,
      name: 'Express Groom Package',
      type: 'Standard',
      price: 8000,
      originalPrice: 12000,
      description: 'Quick pre-wedding grooming essentials',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724220/image8_xtp99d.jpg',
      features: [
        'Premium haircut & styling',
        'Facial treatment (2 sessions)',
        'Beard grooming',
        'Traditional shave',
        'Hair treatment',
        'Head massage',
        'Wedding day grooming',
        'Basic grooming kit'
      ],
      duration: '2 weeks plan',
      sessions: '8 sessions',
      popular: false
    },
    {
      id: 3,
      name: 'Best Man Package',
      type: 'Standard',
      price: 5000,
      originalPrice: 7500,
      description: 'Grooming package for best man and groomsmen',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724220/image9_s4o6yh.jpg',
      features: [
        'Premium haircut',
        'Facial cleanup',
        'Beard trim & styling',
        'Traditional shave',
        'Hair styling',
        'Grooming consultation'
      ],
      duration: 'Single day',
      sessions: '6 services',
      popular: false
    },
    {
      id: 4,
      name: 'Monthly Maintenance',
      type: 'Basic',
      price: 3500,
      originalPrice: 5000,
      description: 'Regular grooming maintenance package',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724221/image10_p4sub6.jpg',
      features: [
        'Haircut (2 sessions)',
        'Beard trim (4 sessions)',
        'Shave (4 sessions)',
        'Basic facial',
        'Head massage (2 sessions)'
      ],
      duration: '1 month',
      sessions: '13 sessions',
      popular: false
    }
  ];

  const salonVendors = [
    {
      id: 1,
      name: 'Trueman Grooming Lounge',
      title: 'Premium Men\'s Salon & Spa',
      experience: '10 years',
      rating: 5.0,
      reviews: 628,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724221/image11_tg2mvc.jpg',
      specialization: ['Groom Packages', 'Haircut', 'Beard Styling'],
      location: 'Connaught Place, Delhi',
      phone: '+91 98765 43240',
      email: 'info@truemangrooming.com',
      clients: 2500,
      availability: 'Available',
      services: 30,
      featured: true,
      startingPrice: 500
    },
    {
      id: 2,
      name: 'The Groom Room',
      title: 'Luxury Grooming Studio',
      experience: '8 years',
      rating: 4.9,
      reviews: 542,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724223/image12_egx6cv.jpg',
      specialization: ['Wedding Grooming', 'Spa', 'Treatments'],
      location: 'Bandra, Mumbai',
      phone: '+91 98765 43241',
      email: 'contact@thegroomroom.com',
      clients: 2100,
      availability: 'Available',
      services: 28,
      featured: true,
      startingPrice: 600
    },
    {
      id: 3,
      name: 'Elite Barber Lounge',
      title: 'Traditional & Modern Grooming',
      experience: '12 years',
      rating: 4.8,
      reviews: 486,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724224/image13_ksiopw.jpg',
      specialization: ['Classic Shave', 'Hair Styling', 'Facials'],
      location: 'Indiranagar, Bangalore',
      phone: '+91 98765 43242',
      email: 'hello@elitebarber.com',
      clients: 1800,
      availability: 'Limited',
      services: 25,
      featured: true,
      startingPrice: 450
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Arjun Mehta',
      role: 'Groom',
      rating: 5,
      comment: 'The groom premium package was perfect! I looked and felt amazing on my wedding day. The team was professional and the services were top-notch.',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724225/image14_rbmavz.jpg',
      date: 'September 2025'
    },
    {
      id: 2,
      name: 'Vikram Singh',
      role: 'Groom',
      rating: 5,
      comment: 'Excellent service! The express package was perfect for my timeline. The haircut and beard styling were exactly what I wanted.',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724225/image15_nzzjod.jpg',
      date: 'October 2025'
    },
    {
      id: 3,
      name: 'Rohan Kapoor',
      role: 'Best Man',
      rating: 5,
      comment: 'Great experience! The best man package made me look sharp for my brother\'s wedding. Highly recommend their services.',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724226/image16_ck0uwz.jpg',
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

  return (
    <div className="min-h-screen  bg-white">
      {/* Hero Section */}
      <div className="relative h-screen px-30 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761724229/image17_nrpieh.jpg"
            alt="Men's Grooming"
            className="w-full h-full object-cover opacity-60 animate-[zoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white animate-[slideUp_1s_ease-out]">
            <div className="flex items-center mb-6">
              <Scissors className="w-10 h-10 text-rose-400 mr-3 animate-pulse" />
              <span className="text-rose-400 font-bold tracking-[0.3em] text-sm">PREMIUM GROOMING</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              MEN'S<br />
              HAIRCUT
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl leading-relaxed">
              Look your absolute best on your special day with our expert grooming services. From classic haircuts to premium groom packages, we've got you covered.
            </p>
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl uppercase tracking-wider">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24  px-30 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              PREMIUM GROOMING SERVICES
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Premium groom grooming for your big day and beyond</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Scissors, title: 'HAIRCUT', desc: 'Professional cuts and styling by expert barbers with years of experience' },
              { icon: Award, title: 'SHAVE', desc: 'Traditional hot towel shaves and beard grooming for the perfect finish' },
              { icon: Sparkles, title: 'MASSAGE', desc: 'Relaxing head and shoulder massages to help you unwind before the big day' },
              { icon: Crown, title: 'TRIM', desc: 'Precision beard trims and mustache styling for a polished appearance' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:border-rose-400 transition-all duration-300 text-center animate-[slideUp_0.6s_ease-out] hover:shadow-xl"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="w-12 h-12 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-30 bg-linear-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              GROOMING SERVICES
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">         Choose from our wide range of professional grooming services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groomingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer animate-[slideUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                      <IconComponent className="w-6 h-6 text-rose-400" />
                    </div>
                    {service.popular && (
                      <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-extralight animate-pulse">
                        POPULAR
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-normal text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-rose-400 font-extralight" />
                        {service.duration}
                      </div>
                      <div className="text-rose-400 font-bold text-2xl">
                        ₹{service.price}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Price List Section */}
      <div className="py-12 bg-white text-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light tracking-tight uppercase text-gray-900">
              PRICE LIST
            </h2>
            <p className="text-gray-600 text-lg tracking-widest uppercase mb-2">
              Transparent pricing for all our services
            </p>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {priceList.map((category, index) => (
              <div
                key={category.id}
                className="bg-white shadow-md hover:shadow-lg p-8 rounded-xl border border-gray-200 transition-all duration-300 animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-medium mb-6 text-rose-500 border-b border-gray-200 pb-4">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-rose-50 transition-colors px-2 rounded"
                    >
                      <div>
                        <p className="font-normal text-gray-800">{item.name}</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1 text-rose-400" />
                          {item.duration}
                        </p>
                      </div>
                      <div className="text-2xl font-light text-rose-500">
                        ₹{item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Packages Section */}
      <div className="py-16 px-30 bg-linear-to-b from-white to-rose-50">
        <div className="container mx-auto px-4 md:px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              GROOM PACKAGES
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">        Complete grooming solutions for grooms and groomsmen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groomPackages.map((pkg, index) => (
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

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <h3 className="text-xl font-medim text-gray-800 mb-2">{pkg.name}</h3>
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
                      <span className="text-3xl font-light text-rose-400">
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
                      <Calendar className="w-3 h-3 mr-1" />
                      {pkg.sessions}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    {pkg.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-rose-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {pkg.features.length > 5 && (
                      <p className="text-xs text-rose-400 font-semibold ml-6">
                        +{pkg.features.length - 5} more services
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

      {/* Featured Salons */}
      <div className="py-20  px-30 bg-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              FEATURED SALONS
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">   Book appointments at our verified grooming partners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {salonVendors.map((salon, index) => (
              <div
                key={salon.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-72 bg-linear-to-br from-rose-100 to-rose-50 overflow-hidden group">
                  <img
                    src={salon.image}
                    alt={salon.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button
                    onClick={() => handleAddToWishlist(salon.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-110 z-10"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${wishlist.includes(salon.id)
                        ? 'text-rose-400 fill-current scale-110'
                        : 'text-gray-400'
                        }`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{salon.rating}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-xs font-extralight shadow-lg animate-pulse">
                    Featured
                  </div>
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-extralight shadow-lg ${salon.availability === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {salon.availability}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-medium text-gray-800 mb-1">{salon.name}</h3>
                  <p className="text-rose-400 font-normal text-sm mb-2">{salon.title}</p>
                  <p className="text-xs text-gray-600 mb-4">{salon.experience} experience</p>

                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                      <span className="truncate">{salon.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                      {salon.clients}+ Happy Clients
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Award className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                      {salon.reviews} Reviews
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Scissors className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                      {salon.services}+ Services
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {salon.specialization.map((spec, idx) => (
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
                      Starting from <span className="text-xl font-bold text-rose-400">₹{salon.startingPrice}</span>
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedSalon(salon)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-extralight transform hover:scale-105 hover:shadow-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20  px-30 bg-linear-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              HAPPY CLIENTS
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">     What our grooms say about their grooming experience</p>
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
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
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

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">{selectedService.name}</h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

              <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>

              <div className="flex items-center justify-between mb-6 pb-6 border-b">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-rose-400" />
                  <span className="font-semibold">{selectedService.duration}</span>
                </div>
                <div className="text-3xl font-bold text-rose-400">
                  ₹{selectedService.price}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-bold text-gray-800 mb-4 text-xl">Service Includes:</h4>
                <div className="space-y-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
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

              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />

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
                <div className="flex gap-4 mt-3">
                  <p className="text-gray-600 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-rose-400" />
                    {selectedPackage.duration}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-rose-400" />
                    {selectedPackage.sessions}
                  </p>
                </div>
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
                      <CheckCircle className="w-6 h-6 mr-3 text-rose-400 shrink-0 mt-0.5" />
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

      {/* Salon Modal */}
      {selectedSalon && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">Salon Details</h3>
                <button
                  onClick={() => setSelectedSalon(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <img
                  src={selectedSalon.image}
                  alt={selectedSalon.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedSalon.name}
                  </h4>
                  <p className="text-rose-400 font-semibold text-lg mb-4">
                    {selectedSalon.title}
                  </p>

                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                    <span className="font-semibold text-xl">{selectedSalon.rating}</span>
                    <span className="text-gray-500 ml-2">({selectedSalon.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700">
                      <strong>Experience:</strong> {selectedSalon.experience}
                    </p>
                    <p className="text-gray-700">
                      <strong>Happy Clients:</strong> {selectedSalon.clients}+
                    </p>
                    <p className="text-gray-700">
                      <strong>Services Offered:</strong> {selectedSalon.services}+
                    </p>
                    <p className="text-gray-700">
                      <strong>Location:</strong> {selectedSalon.location}
                    </p>
                    <p className="text-gray-700">
                      <strong>Starting Price:</strong> <span className="text-2xl font-bold text-rose-400">₹{selectedSalon.startingPrice}</span>
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 mb-3">Specializations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedSalon.specialization.map((spec, idx) => (
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
                  href={`tel:${selectedSalon.phone}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {selectedSalon.phone}
                </a>
                <a
                  href={`mailto:${selectedSalon.email}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {selectedSalon.email}
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                  Book Appointment
                </button>
                <button className="flex-1 bg-white border-2 border-rose-400 text-rose-400 py-3 rounded-lg hover:bg-rose-50 transition-all duration-300 font-semibold text-lg transform hover:scale-105">
                  View Gallery
                </button>
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

export default MensGrooming;
