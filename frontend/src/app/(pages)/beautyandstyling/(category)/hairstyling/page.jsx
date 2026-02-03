"use client";
import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Mail, Heart, CheckCircle, Calendar, Users, Sparkles } from 'lucide-react';

const HairStyling = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const hairServices = [
    {
      id: 1,
      title: 'Bridal Hair Services',
      description: 'Complete bridal hair transformation with premium products and expert styling techniques for your special day',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722232/bridal-haircut-service_z5n1gk.jpg',
      services: [
        'Pre-bridal hair treatments',
        'Traditional bun styling',
        'Open hair with curls',
        'Braided hairstyles',
        'Floral hair accessories setup',
        'Touch-up service'
      ],
      price: '₹8,000 - ₹15,000',
      duration: '3-4 hours'
    },
    {
      id: 2,
      title: 'Special Services',
      description: 'Elevate your look with premium coloring, highlights, and specialized treatments for lasting shine and volume',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722231/special-service_xhekgq.jpg',
      services: [
        'Balayage & highlights',
        'Fashion color treatments',
        'Root touch-up',
        'Ombre styling',
        'Hair glossing',
        'Keratin treatments'
      ],
      price: '₹5,000 - ₹12,000',
      duration: '2-3 hours'
    },
    {
      id: 3,
      title: 'Style',
      description: 'Classic to contemporary hairstyles crafted perfectly for every wedding function and ceremony',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722230/style_uvfimu.jpg',
      services: [
        'Classic updo',
        'Messy bun styling',
        'Vintage waves',
        'Modern sleek styles',
        'Half-up half-down',
        'Bohemian braids'
      ],
      price: '₹3,000 - ₹8,000',
      duration: '1.5-2 hours'
    }
  ];

  const stylistExperts = [
    {
      id: 1,
      name: 'Priya Sharma',
      title: 'Lead Bridal Hair Specialist',
      experience: '12 years',
      rating: 4.9,
      reviews: 342,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722229/priya-sharma_njbxd8.jpg',
      specialization: ['Bridal Styling', 'Traditional Buns'],
      location: 'Delhi NCR',
      phone: '+91 98765 43210',
      email: 'priya.sharma@shhaadibazaar.com',
      portfolio: 500,
      availability: 'Available',
      languages: ['Hindi', 'English', 'Punjabi']
    },
    {
      id: 2,
      name: 'Anjali Verma',
      title: 'Celebrity Hair Stylist',
      experience: '15 years',
      rating: 5.0,
      reviews: 428,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722228/anjali-verma_mduqzg.jpg',
      specialization: ['Modern Styles', 'Color Specialist'],
      location: 'Mumbai',
      phone: '+91 98765 43211',
      email: 'anjali.verma@shhaadibazaar.com',
      portfolio: 650,
      availability: 'Available',
      languages: ['Hindi', 'English', 'Marathi']
    },
    {
      id: 3,
      name: 'Meera Kapoor',
      title: 'Traditional Bridal Expert',
      experience: '10 years',
      rating: 4.8,
      reviews: 298,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722228/meera-kapoor_oh9u0c.jpg',
      specialization: ['South Indian Styles', 'Gajra Setting'],
      location: 'Bangalore',
      phone: '+91 98765 43212',
      email: 'meera.kapoor@shhaadibazaar.com',
      portfolio: 420,
      availability: 'Limited',
      languages: ['Kannada', 'Tamil', 'English']
    },
    {
      id: 4,
      name: 'Simran Kaur',
      title: 'Punjabi Bridal Specialist',
      experience: '8 years',
      rating: 4.9,
      reviews: 256,
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722227/simam-kaur_w7e6nl.jpg',
      specialization: ['Paranda Styling', 'Punjabi Buns'],
      location: 'Chandigarh',
      phone: '+91 98765 43213',
      email: 'simran.kaur@shhaadibazaar.com',
      portfolio: 380,
      availability: 'Available',
      languages: ['Punjabi', 'Hindi', 'English']
    }
  ];

  const packages = [
    {
      id: 1,
      name: 'Bride Complete Package',
      type: 'Premium',
      badge: 'Most Popular',
      price: 25000,
      originalPrice: 35000,
      description: 'Complete bridal hair journey from pre-wedding to reception',
      features: [
        '3 pre-bridal treatments',
        'Hair spa & deep conditioning',
        'Engagement ceremony styling',
        'Mehndi function styling',
        'Sangeet night glamour look',
        'Wedding day premium styling',
        'Reception elegant updo',
        'Complimentary hair accessories',
        'Touch-up artist on standby',
        'Premium hair products'
      ],
      duration: 'Full wedding coverage',
      popular: true
    },
    {
      id: 2,
      name: 'Bridesmaid Package',
      type: 'Standard',
      price: 5000,
      originalPrice: 7000,
      description: 'Perfect styling for bridesmaids and close family members',
      features: [
        'Consultation session',
        'Hair wash & conditioning',
        'Professional styling',
        'Curling or straightening',
        'Hair spray & setting',
        'Small accessories included',
        'Pre-event trial'
      ],
      duration: '2-3 functions',
      popular: false
    },
    {
      id: 3,
      name: 'Guest Styling Package',
      type: 'Basic',
      price: 2500,
      originalPrice: 3500,
      description: 'Quick and elegant styling for wedding guests',
      features: [
        'Quick consultation',
        'Hair blow-dry',
        'Simple elegant styling',
        'Basic curls or waves',
        'Hair setting spray',
        'Express service'
      ],
      duration: 'Single function',
      popular: false
    },
    {
      id: 4,
      name: 'Mother of Bride/Groom',
      type: 'Premium',
      price: 8000,
      originalPrice: 11000,
      description: 'Sophisticated and age-appropriate elegant styling',
      features: [
        'Personalized consultation',
        'Hair treatment session',
        'Classic elegant styling',
        'Saree-compatible bun styles',
        'Gajra & accessories setting',
        '2 function styling',
        'Touch-up service'
      ],
      duration: 'Main ceremonies',
      popular: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rhea Malhotra',
      role: 'Bride',
      rating: 5,
      comment: 'Absolutely stunning work! Priya transformed my hair into a masterpiece. The bridal bun lasted all day and looked perfect in every photo.',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722227/reha_qjqkxo.jpg',
      date: 'September 2025'
    },
    {
      id: 2,
      name: 'Kavya Reddy',
      role: 'Bride',
      rating: 5,
      comment: 'The complete bridal package was worth every penny. From pre-wedding treatments to reception styling, everything was flawless.',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722227/kavya_wdwevk.jpg',
      date: 'August 2025'
    },
    {
      id: 3,
      name: 'Simran Singh',
      role: 'Bridesmaid',
      rating: 5,
      comment: 'Beautiful curls that lasted through the entire sangeet night. Professional service and amazing results!',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722226/simran_sv9fe3.jpg',
      date: 'October 2025'
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722227/exceptional-hairstyles_dlkwlc.jpg"
            alt="Exceptional Hairstyles"
            className="w-full h-full object-cover opacity-60 animate-[zoom_20s_ease-in-out_infinite]"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white animate-[slideUp_1s_ease-out]">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-rose-400 mr-3 animate-pulse" />
              <span className="text-rose-400 font-semibold tracking-wider">BRIDAL EXCELLENCE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              CRAFTING<br />
              <em className="font-light">EXCEPTIONAL</em><br />
              HAIRSTYLES
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl leading-relaxed">
              Transform your bridal look with our expert hair styling services. From traditional buns to contemporary waves, we create perfection for your special day.
            </p>
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              BOOK CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 ">
        <div className="container mx-auto px-4 md:px-8">

          <div className="text-center mb-18 mt-4">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Classic cuts, bold colors
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">        From timeless updos to modern styles, we bring your wedding vision to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hairServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-[slideUp_0.6s_ease-out] cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-serif mb-4 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-4">
                    {service.services.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-1 text-rose-400 shrink-0" />
                        <span className="text-sm text-gray-200">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-600">
                    <div>
                      <p className="text-rose-400 font-semibold text-lg">{service.price}</p>
                      <p className="text-sm text-gray-300 flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </p>
                    </div>
                    <button className="bg-rose-400 hover:bg-rose-500 text-white px-6 py-2 rounded-md font-light cursor-pointer transition-all duration-300 transform hover:scale-105">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="pb-20 pt-8 bg-white">
        <div className="container mx-auto px-4 md:px-8">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">

              WEDDING HAIR PACKAGES
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> Complete hair styling solutions for every member of your wedding party</p>
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
                    <h3 className="text-xl font-light text-gray-800 mb-2">{pkg.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-thin ${pkg.type === 'Premium' ? 'bg-rose-100 text-rose-600' :
                      pkg.type === 'Standard' ? 'bg-pink-100 text-pink-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                      {pkg.type}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="mb-4">
                    <div className="flex items-baseline mb-1">
                      <span className="text-3xl font-bold text-rose-400">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {pkg.duration}
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
                        +{pkg.features.length - 5} more features
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-extralight cursor-pointer transform hover:scale-105 hover:shadow-lg"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stylists Section */}
      <div className="py-20 bg-linear-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl animate-[slideRight_1s_ease-out]">
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761722226/hair-styling_qnlsed.jpg"
                alt="Hair Styling"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="animate-[slideLeft_1s_ease-out]">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                YOUR COMMUNITY HAIR SALON
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our expert team of bridal hair specialists brings years of experience and passion to create stunning hairstyles for your special day. From traditional to contemporary, we master every style with precision and care.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Each stylist is specially trained in bridal hair artistry, understanding the nuances of different hair types, face shapes, and cultural styling traditions to deliver a look that is uniquely yours.
              </p>
              <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-md font-extralight cursor-pointer transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Stylist
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stylistExperts.map((stylist, index) => (
              <div
                key={stylist.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col animate-[slideUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-72 bg-linear-to-br from-rose-100 to-rose-50 overflow-hidden group">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  /> 
                  <button
                    onClick={() => handleAddToWishlist(stylist.id)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-all duration-300 transform hover:scale-110 z-10"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${wishlist.includes(stylist.id)
                        ? 'text-rose-400 fill-current scale-110'
                        : 'text-gray-400'
                        }`}
                    />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg animate-[slideRight_0.5s_ease-out]">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{stylist.rating}</span>
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-extralight shadow-lg ${stylist.availability === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {stylist.availability}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{stylist.name}</h3>
                  <p className="text-rose-400 font-normal text-sm mb-2">{stylist.title}</p>
                  <p className="text-xs text-gray-600 mb-3">{stylist.experience} experience</p>

                  <div className="space-y-1 mb-3 flex-grow">
                    <div className="flex items-center text-gray-600 text-xs">
                      <MapPin className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                      <span className="truncate">{stylist.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users className="w-3 h-3 mr-2 text-rose-400 shrink-0" />
                      {stylist.portfolio}+ Brides
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {stylist.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto">
                  <button
                    onClick={() => setSelectedStylist(stylist)}
                    className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-light cursor-pointer transform hover:scale-105 hover:shadow-lg"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-8">
  
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                      HEAR FROM OUR HAPPY CLIENTS
              </h2>
              <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">              Real brides sharing their beautiful experiences with our hair styling services</p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-linear-to-br from-rose-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-[slideUp_0.6s_ease-out]"
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
                    <Star
                      key={idx}
                      className="w-5 h-5 text-yellow-400 fill-current animate-[spin_2s_ease-in-out_infinite]"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    />
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

      {/* Stylist Modal */}
      {selectedStylist && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-screen overflow-y-auto animate-[scaleUp_0.3s_ease-out]">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-gray-800">Stylist Profile</h3>
                <button
                  onClick={() => setSelectedStylist(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-all duration-300 hover:rotate-90"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <img
                  src={selectedStylist.image}
                  alt={selectedStylist.name}
                  className="w-full h-80 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                />
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedStylist.name}
                  </h4>
                  <p className="text-rose-400 font-semibold text-lg mb-4">
                    {selectedStylist.title}
                  </p>

                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-2" />
                    <span className="font-semibold text-xl">{selectedStylist.rating}</span>
                    <span className="text-gray-500 ml-2">({selectedStylist.reviews} reviews)</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-gray-700">
                      <strong>Experience:</strong> {selectedStylist.experience}
                    </p>
                    <p className="text-gray-700">
                      <strong>Portfolio:</strong> {selectedStylist.portfolio}+ Happy Brides
                    </p>
                    <p className="text-gray-700">
                      <strong>Languages:</strong> {selectedStylist.languages.join(', ')}
                    </p>
                    <p className="text-gray-700">
                      <strong>Location:</strong> {selectedStylist.location}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 mb-3">Specializations:</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedStylist.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full font-semibold hover:bg-rose-100 transition-colors duration-300"
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
                  href={`tel:${selectedStylist.phone}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {selectedStylist.phone}
                </a>
                <a
                  href={`mailto:${selectedStylist.email}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-all duration-300 text-lg transform hover:translate-x-2"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {selectedStylist.email}
                </a>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="flex-1 bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg">
                  Book Appointment
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

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
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

export default HairStyling;
