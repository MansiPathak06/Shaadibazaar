"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShoppingCart, ChevronLeft, ChevronRight, Star, Clock, MapPin, Heart, Share2 } from 'lucide-react';

const PreWeddingPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { 
      name: 'Pre-bridal Package', 
      items: '15 Packages', 
      image: 'https://i.pinimg.com/736x/ff/a1/f2/ffa1f2edb50196451f35ad564dcb4c1e.jpg',
      description: 'Complete beauty transformation for your special day',
      subCategory: 'pre-bridal-package'
    },
    { 
      name: 'Spa Services', 
      items: '20 Treatments', 
      image: 'https://i.pinimg.com/736x/e9/ae/70/e9ae708944a296977491e4dcd0199c53.jpg',
      description: 'Relaxation and rejuvenation therapy',
      subCategory: 'spa-services'
    },
    { 
      name: 'Facial Treatments', 
      items: '12 Options', 
      image: 'https://i.pinimg.com/736x/86/a8/05/86a805c94bec1f6ba8c7fba054b5959b.jpg',
      description: 'Glowing skin for your big day',
      subCategory: 'facial-treatments'
    },
    { 
      name: 'Manicure & Pedicure', 
      items: '18 Styles', 
      image: 'https://i.pinimg.com/736x/5a/2d/a2/5a2da272f5d641418635146a8ea293c7.jpg',
      description: 'Perfect hands and feet grooming',
      subCategory: 'manicure-pedicure'
    },
    { 
      name: 'Nail Extensions', 
      items: '25 Designs', 
      image: 'https://i.pinimg.com/736x/8f/54/89/8f5489c49480b58d145077f7dd54a588.jpg',
      description: 'Stunning nail art and extensions',
      subCategory: 'nail-extensions'
    },
    { 
      name: 'Hair Coloring', 
      items: '30 Shades', 
      image: 'https://i.pinimg.com/1200x/23/02/82/2302823f50fecfb378d3195c0834776d.jpg',
      description: 'Transform your look with vibrant colors',
      subCategory: 'hair-coloring'
    }
  ];

  const featuredPackages = [
    {
      name: 'Ultimate Bridal Glow Package',
      discount: '30% OFF',
      originalPrice: '$599',
      price: '$419',
      tag: 'Most Popular',
      image: 'https://i.pinimg.com/736x/2f/ac/29/2fac29140b3e78f3e7bf6540e565c219.jpg',
      services: ['Full Body Spa', 'Facial Treatment', 'Manicure & Pedicure', 'Hair Styling'],
      duration: '6 Hours',
      rating: 4.9,
      subCategory: 'pre-bridal-package'
    },
    {
      name: 'Luxury Pre-Wedding Spa Retreat',
      discount: '25% OFF',
      originalPrice: '$799',
      price: '$599',
      tag: 'Premium Choice',
      image: 'https://i.pinimg.com/1200x/4a/57/1f/4a571fe4b3f4f8eece5395f8354fd21f.jpg',
      services: ['Aromatherapy', 'Body Massage', 'Steam Bath', 'Skin Polishing'],
      duration: '8 Hours',
      rating: 4.8,
      subCategory: 'spa-services'
    }
  ];

  const services = [
    {
      name: 'Bridal Gold Facial',
      category: 'Facial',
      price: '$89',
      duration: '90 min',
      rating: 4.9,
      reviews: 234,
      image: 'https://i.pinimg.com/736x/2f/5d/cf/2f5dcfd75256fc8578b3d9734edfc248.jpg',
      salon: 'Bella Beauty Studio',
      location: 'Downtown',
      bestseller: true,
      subCategory: 'facial-treatments'
    },
    {
      name: 'Full Body Spa Therapy',
      category: 'Spa',
      price: '$129',
      duration: '120 min',
      rating: 4.8,
      reviews: 189,
      image: 'https://i.pinimg.com/1200x/01/64/33/0164335901e7bcb07c6b2e7e30280c1d.jpg',
      salon: 'Serenity Spa',
      location: 'Uptown',
      subCategory: 'spa-services'
    },
    {
      name: 'Luxury Gel Manicure & Pedicure',
      category: 'Manicure & Pedicure',
      price: '$65',
      duration: '75 min',
      rating: 4.7,
      reviews: 312,
      image: 'https://i.pinimg.com/736x/d6/30/04/d63004813c51215d0ffccf8efe5ffd23.jpg',
      salon: 'Nail Paradise',
      location: 'City Center',
      trending: true,
      subCategory: 'manicure-pedicure'
    },
    {
      name: 'Acrylic Nail Extensions - Bridal',
      category: 'Nail Extensions',
      price: '$95',
      duration: '120 min',
      rating: 4.9,
      reviews: 278,
      image: 'https://i.pinimg.com/1200x/3c/b7/bb/3cb7bb2b4c7bc6653846d20cb6c49450.jpg',
      salon: 'Glamour Nails',
      location: 'Mall Road',
      subCategory: 'nail-extensions'
    },
    {
      name: 'Balayage Hair Coloring',
      category: 'Hair Coloring',
      price: '$149',
      duration: '180 min',
      rating: 4.8,
      reviews: 156,
      image: 'https://i.pinimg.com/736x/02/ee/cf/02eecf92ff19ca06b3b7086f631b9628.jpg',
      salon: 'Hair Haven',
      location: 'Fashion District',
      bestseller: true,
      subCategory: 'hair-coloring'
    },
    {
      name: 'Diamond Facial with Massage',
      category: 'Facial',
      price: '$119',
      duration: '100 min',
      rating: 4.9,
      reviews: 201,
      image: 'https://i.pinimg.com/736x/c7/41/3e/c7413e1f7fcd0c04471b9b5b9287c9f1.jpg',
      salon: 'Elite Beauty',
      location: 'Downtown',
      subCategory: 'facial-treatments'
    },
    {
      name: 'Aromatherapy Spa Package',
      category: 'Spa',
      price: '$159',
      duration: '150 min',
      rating: 4.7,
      reviews: 143,
      image: 'https://i.pinimg.com/736x/b1/53/b6/b153b64c37217537d29946c4cf24caac.jpg',
      salon: 'Tranquil Touch',
      location: 'Spa District',
      subCategory: 'spa-services'
    },
    {
      name: 'French Manicure & Spa Pedicure',
      category: 'Manicure & Pedicure',
      price: '$55',
      duration: '60 min',
      rating: 4.6,
      reviews: 267,
      image: 'https://i.pinimg.com/1200x/a6/12/95/a612952fe2a4516f5461ddcb78229129.jpg',
      salon: 'Polished Perfection',
      location: 'Westside',
      subCategory: 'manicure-pedicure'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      service: 'Ultimate Bridal Package',
      rating: 5,
      comment: 'Absolutely amazing experience! The pre-bridal package made me feel like a princess. Every detail was perfect.',
      image: 'https://i.pinimg.com/1200x/c6/9b/71/c69b711faef902370793cd623380e145.jpg',
      date: '2 days ago'
    },
    {
      name: 'Ananya Desai',
      service: 'Spa & Facial Combo',
      rating: 5,
      comment: 'The spa treatment was so relaxing and the facial gave me the glow I wanted for my wedding. Highly recommend!',
      image: '',
      date: '1 week ago'
    },
    {
      name: 'Riya Patel',
      service: 'Nail Extensions & Hair Color',
      rating: 5,
      comment: 'The nail extensions were gorgeous and lasted through all my wedding events. The hair color was exactly what I envisioned.',
      image: 'https://i.pinimg.com/736x/c7/48/71/c748710e9a9682b542203136314421b9.jpg',
      date: '2 weeks ago'
    }
  ];

  // Navigation handlers
  const handleCategoryClick = (subCategory) => {
    router.push(`/bride/all-services?category=pre-wedding-services&subCategory=${subCategory}`);
  };

  const handleAllServicesClick = () => {
    router.push("/bride/all-services?category=pre-wedding-services");
  };

  const handleServiceClick = (subCategory) => {
    router.push(`/bride/all-services?category=pre-wedding-services&subCategory=${subCategory}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                Pre-Wedding Beauty Services
              </span>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Look Your Best on
                <br />
                <span className="text-yellow-300">Your Special Day</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Comprehensive pre-wedding beauty treatments and wellness packages designed to make you shine. From luxurious spa sessions to expert hair and nail services.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={handleAllServicesClick}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 hover:text-purple-700 transition-colors shadow-lg cursor-pointer"
                >
                  Book Now
                </button>
                <button 
                  onClick={handleAllServicesClick}
                  className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer"
                >
                  View Packages
                </button>
              </div>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-purple-200">Happy Brides</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-purple-200">Services</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-purple-200">Rating</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img 
                  src="https://i.pinimg.com/736x/c4/a0/62/c4a062383b4900d59fcb94665361a9a7.jpg" 
                  alt="Pre-Wedding Beauty"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Star className="text-purple-600" fill="currentColor" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">Trusted by 500+ Brides</div>
                      <div className="text-sm text-gray-600">Rated 4.9/5 ★★★★★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Services</h2>
          <p className="text-gray-600 text-lg">Choose from our wide range of pre-wedding beauty treatments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.subCategory)}
              className="group bg-white rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.items}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-purple-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Services 
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Packages */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Bridal Packages</h2>
            <div className="flex gap-2">
              <button className="p-3 border border-gray-300 rounded-full hover:bg-purple-100 hover:border-purple-300 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="p-3 border border-gray-300 rounded-full hover:bg-purple-100 hover:border-purple-300 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPackages.map((pkg, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(pkg.subCategory)}
                className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <span className="absolute top-6 right-6 bg-yellow-400 text-purple-800 text-sm font-bold px-4 py-2 rounded-full z-10 shadow-lg">
                  {pkg.tag}
                </span>
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="text-yellow-500 fill-yellow-500" size={20} />
                      <span className="font-bold text-gray-800">{pkg.rating}</span>
                      <span className="text-gray-600 text-sm">(500+ reviews)</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{pkg.name}</h3>
                    <div className="space-y-2 mb-6">
                      {pkg.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="text-purple-600" size={20} />
                      <span className="text-gray-700 font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl font-bold text-purple-700">{pkg.price}</span>
                      <span className="text-xl text-gray-500 line-through">{pkg.originalPrice}</span>
                      <span className="bg-pink-500 text-white text-sm px-3 py-1 rounded-full font-bold">
                        {pkg.discount}
                      </span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg">
                      Book This Package
                    </button>
                  </div>
                  <div className="relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid with Filters */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular Services</h2>
            <div className="flex gap-3">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveTab('bestseller')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === 'bestseller' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Bestsellers
              </button>
              <button 
                onClick={() => setActiveTab('trending')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeTab === 'trending' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Trending
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(service.subCategory)}
                className="bg-white rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {service.bestseller && (
                    <span className="absolute top-3 left-3 bg-yellow-400 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">
                      Bestseller
                    </span>
                  )}
                  {service.trending && (
                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Trending
                    </span>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart size={18} className="text-gray-700" />
                    </button>
                    <button 
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <Share2 size={18} className="text-gray-700" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="font-semibold text-gray-800">{service.rating}</span>
                      <span className="text-xs text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3rem]">
                    {service.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin size={16} className="text-purple-500" />
                      <span>{service.salon}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} className="text-purple-500" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-purple-700">{service.price}</div>
                      <div className="text-xs text-gray-500">{service.location}</div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.subCategory);
                    }}
                    className="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <ShoppingCart size={18} />
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 mb-16 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Pre-Wedding Services?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="text-yellow-300" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Expert Professionals</h3>
                    <p className="text-purple-100">Certified beauty experts with years of bridal experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="text-pink-300" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Personalized Packages</h3>
                    <p className="text-purple-100">Customized treatments tailored to your unique needs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Flexible Scheduling</h3>
                    <p className="text-purple-100">Book appointments that fit your wedding timeline</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Premium Locations</h3>
                    <p className="text-purple-100">Multiple salons and spas across the city</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://i.pinimg.com/1200x/8e/e0/e1/8ee0e14032c2fc23be6e7fc01ce182cf.jpg" 
                alt="Happy Bride"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Brides Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real brides</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.comment}</p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Begin Your Bridal Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your pre-wedding beauty services today and get ready to shine on your special day. Our expert team is here to make you look and feel amazing.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={handleAllServicesClick}
              className="bg-purple-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg text-lg cursor-pointer"
            >
              Book Consultation
            </button>
            <button 
              onClick={handleAllServicesClick}
              className="border-2 border-purple-600 text-purple-600 px-10 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg cursor-pointer"
            >
              View All Packages
            </button>
          </div>
          <p className="text-gray-600 mt-6">
            ✨ Special offer: Get 20% off on your first booking! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreWeddingPage;