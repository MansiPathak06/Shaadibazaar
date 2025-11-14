"use client";

import React, { useState } from "react";

import {
  Heart,
  Star,
  Phone,
  ChevronRight,
  Check,
  Car,
  Camera,
  Sparkles,
  Utensils,
  Carrot,  // Alternative for Horse/Baggi
  TreePine, Mail  // Alternative for Elephant
} from "lucide-react";

const WeddingServices = () => {
  const [favorites, setFavorites] = useState([]);

  // Main Wedding Services
  const weddingServices = [
    {
      id: 1,
      name: "Wedding Choreographer",
      description: "Professional dance choreography for sangeet, engagement & wedding ceremonies",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371986/Wedding-Choreographer_l42wmh.jpg",
      alt: "Wedding Choreographer",
      price: "₹15,000 - ₹50,000",
      rating: 4.9,
      reviews: 156,
      badge: "Popular",
      features: ["Sangeet Choreography", "Couple Dance", "Group Performances", "Kids Dance"]
    },
    {
      id: 2,
      name: "Dhol Players",
      description: "Traditional dhol players to add energy and excitement to your baraat & celebrations",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/Dhol-Players_kq0rcp.jpg",
      alt: "Dhol Players",
      price: "₹8,000 - ₹25,000",
      rating: 4.8,
      reviews: 203,
      badge: "Trending",
      features: ["Baraat Entry", "Reception", "Mehendi Night", "Professional Artists"]
    },
    {
      id: 3,
      name: "Doli on Hire",
      description: "Elegant and beautifully decorated doli for bride's grand departure",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/Doli-on-Hire_jtccnn.jpg",
      alt: "Doli on Hire",
      price: "₹12,000 - ₹35,000",
      rating: 4.7,
      reviews: 98,
      badge: "Premium",
      features: ["Traditional Design", "Flower Decoration", "Lighting", "Bearers Included"]
    },
    {
      id: 4,
      name: "Tent House",
      description: "Luxurious tent setups for wedding venues, receptions & outdoor celebrations",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371984/Tent-House_mxyn8w.jpg",
      alt: "Tent House Services",
      price: "₹50,000 - ₹5,00,000",
      rating: 4.9,
      reviews: 287,
      badge: "Best Seller",
      features: ["Complete Setup", "Lighting & Decor", "Furniture", "Climate Control"]
    },
    {
      id: 5,
      name: "Horses on Hire",
      description: "Royal horses for groom's grand baraat entry with traditional decorations",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/Horses-on-Hire_wzg0il.jpg",
      alt: "Horses on Hire",
      price: "₹18,000 - ₹60,000",
      rating: 4.8,
      reviews: 142,
      badge: "Royal",
      features: ["Decorated Horse", "Handler Included", "Traditional Attire", "Photo Session"]
    },
    {
      id: 6,
      name: "Band Baja",
      description: "Traditional wedding band with musicians for a grand celebration",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/Dhol-Players_kq0rcp.jpg",
      alt: "Wedding Band Baja",
      price: "₹20,000 - ₹80,000",
      rating: 4.9,
      reviews: 176,
      badge: "Popular",
      features: ["Live Musicians", "Traditional Instruments", "Baraat Music", "Custom Songs"]
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      id: 1,
      name: "Baggi / Carriage",
      icon: Carrot,  // Using Carrot as placeholder
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/baggi_vxum60.jpg",
    },
    {
      id: 2,
      name: "Elephant on Hire",
      icon: TreePine,  // Using TreePine as placeholder
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/elephant_yailiq.jpg",
    },
    {
      id: 3,
      name: "Vintage Car",
      icon: Car,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371986/vintage-car_iyue7s.jpg",
    },
    {
      id: 4,
      name: "Fireworks",
      icon: Sparkles,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371981/fireworks_ok3rev.jpg",
    },
    {
      id: 5,
      name: "Catering Services",
      icon: Utensils,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371980/catering-services_l1xnfb.jpg",
    },
    {
      id: 6,
      name: "Photography",
      icon: Camera,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371984/photography_lr8kc9.jpg",
    },
  ];

  const toggleFavorite = (serviceId) => {
    setFavorites((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761371986/wedding-services_f2mepo.jpg"
            alt="Wedding Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <p className="text-rose-400 text-sm md:text-base font-normal tracking-widest mb-3 uppercase">
                Complete Wedding Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Premium <br /> Wedding Services
              </h1>
              <div className="w-24 h-1 bg-rose-400 mb-6"></div>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                Make your special day unforgettable with our professional wedding services.
                From choreography to grand entries, we make every moment magical.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-rose-400 text-white px-8 py-3 rounded-lg font-light hover:bg-rose-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Services
                </button>
                <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-lg font-light hover:bg-white hover:text-rose-400 transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="pb-16 pt-26 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Featured Wedding <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Services</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">  Choose from our wide range of professional services to make your wedding celebration grand and memorable</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300 transform hover:-translate-y-2"
              >
                {service.badge && (
                  <div className="absolute top-4 left-4 z-20 bg-rose-400 text-white text-xs font-extralight px-3 py-1.5 rounded-full shadow-lg">
                    {service.badge}
                  </div>
                )}

                <button
                  onClick={() => toggleFavorite(service.id)}
                  className="absolute top-4 right-4 z-20 bg-white p-2.5 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart
                    size={18}
                    className={
                      favorites.includes(service.id)
                        ? "text-rose-500 fill-rose-500"
                        : "text-gray-600"
                    }
                  />
                </button>

                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
     
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-rose-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-rose-50 text-rose-600 px-3 py-1 rounded-full font-extralight"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-amber-400 fill-amber-400" />
                      <span className="text-sm font-light text-gray-800">{service.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({service.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-lg font-extralight text-rose-400">{service.price}</p>
                    </div>
                    <button className="bg-rose-400 text-white px-5 py-2.5 cursor-pointer rounded-lg font-extralight hover:bg-rose-500 transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg">
                      Book Now
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      {/* Enhanced Additional Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Top Badge */}
            <span className="inline-block bg-rose-100 text-rose-500 px-4 py-2 rounded-full text-sm font-extralight mb-4 uppercase tracking-wide">
              Additional Services
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-4">
              Complete Your
              <span className="block mt-2 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Perfect Wedding
              </span>
            </h2>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-24 h-1 bg-rose-400"></div>
              <div className="w-12 h-1 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>

            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our complete range of premium wedding services designed to make every moment magical
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image Layer */}
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
  
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/60 to-transparent group-hover:from-rose-600/95 group-hover:via-rose-500/60 transition-all duration-500"></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl border-2 border-white/20 backdrop-blur-sm"></div>
                  </div>

                  {/* Icon Container with Animation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:-translate-y-16">
                    <div className="relative">
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Icon Background Circle */}
                      <div className="relative bg-white/10 backdrop-blur-md p-4 md:p-5 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-2xl group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Service Name */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 group-hover:bottom-16">
                    <h3 className="text-white text-sm md:text-base font-medium drop-shadow-lg text-center leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Hover Action Button */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white cursor-pointer text-rose-500 px-6 py-2.5 rounded-full font-thin text-sm hover:bg-rose-50 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 hover:gap-3 group/btn">
                      <span>View Details</span>
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Corner Badge (Optional - for "Popular" or "New") */}
                  {index === 0 && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
                      <Star size={12} className="fill-white" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-rose-100 text-rose-400 px-4 py-2 rounded-full text-sm font-extralight mb-4 uppercase">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-6">
                Your <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Dream Wedding</span>, Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Priority</span>
              </h2>
              <div className="w-24 h-1 bg-rose-400 mb-6"></div>
              <p className="text-gray-600 text-lg mb-8">
                We bring years of experience and dedication to make your wedding day extraordinary.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Professional Team",
                    description: "Experienced professionals dedicated to your special day"
                  },
                  {
                    title: "Affordable Pricing",
                    description: "Transparent pricing with no hidden charges"
                  },
                  {
                    title: "Custom Packages",
                    description: "Tailored services to match your requirements"
                  },
                  {
                    title: "24/7 Support",
                    description: "Always available to assist you"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761372281/wedding-celebration_ufevxn.jpg"
                  alt="Wedding Celebration"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-400/20 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-rose-400/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Enhanced CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-rose-400 to-pink-500">
          {/* Animated Blob 1 */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          {/* Animated Blob 2 */}
          <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          {/* Animated Blob 3 */}
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Sparkles size={16} className="animate-pulse" />
            <span className="font-extralight">Limited Time Offer</span>
          </div>

          {/* Main Heading with Gradient Text */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
            Ready to Plan Your
            <span className="block mt-2 bg-gradient-to-r from-white via-rose-50 to-white bg-clip-text text-transparent animate-pulse">
              Dream Wedding?
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-white/95 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us today and let's make your special day unforgettable.
            <span className="block mt-2 font-normal">Book now and get 15% off on combo packages!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <button className="group relative bg-white text-rose-500 px-10 py-4 rounded-xl font-bold text-lg hover:bg-rose-50 transition-all duration-300 shadow-2xl hover:shadow-rose-200/50 transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
              {/* Button Shine Effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>

              <div className="relative flex items-center gap-3">
                <div className="bg-rose-500 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  <Phone size={20} />
                </div>
                <span className="font-light">Call Us Now</span>
              </div>
            </button>

            <button className="group relative bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-rose-500 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-3 overflow-hidden">
              {/* Border Gradient Animation */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              <div className="relative flex items-center gap-3">
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-light">Request Quote</span>
              </div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Check size={16} className="text-white" />
              </div>
              <span>500+ Happy Couples</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Check size={16} className="text-white" />
              </div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                <Star size={16} className="text-yellow-300 fill-yellow-300" />
              </div>
              <span>4.9/5 Rating</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-2xl mx-auto">
            <p className="text-white/90 mb-4 font-medium">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-white hover:text-rose-100 transition-colors group">
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="font-semibold text-lg">+91 98765 43210</span>
              </a>
              <div className="hidden sm:block w-px h-8 bg-white/30"></div>
              <a href="mailto:wedding@example.com" className="flex items-center gap-3 text-white hover:text-rose-100 transition-colors group">
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-semibold text-lg">wedding@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingServices;
