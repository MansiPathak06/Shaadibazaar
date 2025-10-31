// pages/lounges.jsx or app/lounges/page.jsx (depending on your Next.js version)

'use client'; // Remove this line if using pages directory

import { useState } from 'react';
import Image from 'next/image';

export default function Lounges() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const loungeServices = [
    {
      id: 1,
      title: 'Luxury Wedding Lounge Setup',
      category: 'luxury',
      description: 'Premium lounge arrangements with plush seating, elegant drapery, and sophisticated decor to create an intimate space for your guests.',
      features: ['Velvet Sofas', 'Crystal Chandeliers', 'Custom Drapery', 'Ambient Lighting'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458121/Luxury_Wedding_Lounge_Setup_hm3klh.jpg'
    },
    {
      id: 2,
      title: 'Boho Chic Lounge',
      category: 'boho',
      description: 'Relaxed bohemian-style lounge with rattan furniture, textured cushions, and natural elements for a laid-back wedding vibe.',
      features: ['Rattan Furniture', 'Moroccan Poufs', 'Hanging Lanterns', 'Macrame Accents'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/Boho_Chic_Lounge_i88vsb.jpg'
    },
    {
      id: 3,
      title: 'Traditional Lounge',
      category: 'traditional',
      description: 'Classic Indian wedding lounge with traditional seating, vibrant colors, and cultural elements that honor your heritage.',
      features: ['Low Seating', 'Colorful Cushions', 'Traditional Decor', 'Cultural Elements'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458125/Traditional_Lounge_jyyneb.jpg'
    },
    {
      id: 4,
      title: 'Modern Minimalist Lounge',
      category: 'modern',
      description: 'Contemporary lounge design with clean lines, neutral colors, and sleek furniture for a sophisticated ambiance.',
      features: ['Modern Sofas', 'Geometric Decor', 'Minimalist Design', 'LED Lighting'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458122/Modern_Minimalist_Lounge_pmx6yj.jpg'
    },
    {
      id: 5,
      title: 'Garden Lounge',
      category: 'outdoor',
      description: 'Outdoor lounge setup perfect for garden weddings with natural elements, floral arrangements, and comfortable seating.',
      features: ['Outdoor Furniture', 'Floral Decor', 'Natural Elements', 'Weather Protection'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/Garden_Lounge_f9hno0.jpg'
    },
    {
      id: 6,
      title: 'Royal Palace Lounge',
      category: 'luxury',
      description: 'Regal lounge setup inspired by royal palaces with gold accents, ornate furniture, and luxurious fabrics.',
      features: ['Gold Accents', 'Ornate Furniture', 'Silk Fabrics', 'Crown Molding'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458125/Royal_Palace_Lounge_ona4sj.jpg'
    }
  ];

  const whyChooseUs = [
    {
      icon: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/Customized_Designs_ezqiry.jpg',
      title: 'Customized Designs',
      description: 'Every lounge is tailored to match your wedding theme and personal style preferences.'
    },
    {
      icon: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458123/Premium_Furniture_teocov.jpg',
      title: 'Premium Furniture',
      description: 'High-quality, comfortable furniture sourced from top vendors to ensure guest comfort.'
    },
    {
      icon: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458123/Professional_Setup_v6b3ty.jpg',
      title: 'Professional Setup',
      description: 'Expert team handles complete setup, styling, and breakdown with attention to detail.'
    },
    {
      icon: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458120/Lighting_Design_wtaio2.jpg',
      title: 'Lighting Design',
      description: 'Sophisticated lighting solutions to create the perfect ambiance for your celebration.'
    },
    {
      icon: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/Complete_Package_vg4hee.jpg',
      title: 'Complete Package',
      description: 'All-inclusive packages with furniture, decor, lighting, and coordination services.'
    },
    {
      icon: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458122/On-Time_Delivery_ge5oda.jpg',
      title: 'On-Time Delivery',
      description: 'Reliable service with punctual setup and professional execution for your special day.'
    }
  ];

  const galleryImages = [
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/image1_h8gnzl.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/image2_gvtkmj.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458116/image3_dbshwc.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458117/image4_kxzqr4.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458117/image5_af5u1v.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458117/image6_nknam4.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458119/image7_op9aq7.jpg',
    'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761458120/image8_g0ph3w.jpg'
  ];

  const filteredServices = selectedCategory === 'all' 
    ? loungeServices 
    : loungeServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761457068/downloaded-file_qc5mq3.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
              Wedding Lounge Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light">
              Create Perfect Relaxation Spaces for Your Guests
            </p>
            <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8">
              Transform your wedding venue with elegant lounge setups that provide comfort, 
              style, and the perfect atmosphere for your guests to relax and celebrate
            </p>
            <button className="bg-white text-rose-500 px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold 
              hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Welcome to ShadiBazaar Lounges
            </h2>
            <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At ShadiBazaar, we specialize in creating stunning lounge spaces that add elegance and 
              comfort to your wedding celebration. Our expertly designed lounge setups provide your guests 
              with a cozy retreat to relax, socialize, and enjoy the festivities in style.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600">Weddings Served</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-600">Lounge Designs</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Filter Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Our Lounge Collections
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {[
              { label: 'All Lounges', value: 'all' },
              { label: 'Luxury', value: 'luxury' },
              { label: 'Boho', value: 'boho' },
              { label: 'Traditional', value: 'traditional' },
              { label: 'Modern', value: 'modern' },
              { label: 'Outdoor', value: 'outdoor' }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedCategory(filter.value)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base
                  ${selectedCategory === filter.value
                    ? 'bg-rose-400 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-rose-100'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 
                  transition-all duration-300 hover:shadow-2xl"
              >
                {/* Cloudinary Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority={service.id <= 3}
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-rose-500">
                    {service.category.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <span className="text-rose-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-rose-400 text-white py-3 rounded-lg font-semibold 
                    hover:bg-rose-500 transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Experience Our Work
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Video Card 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <video
                controls
                className="w-full h-64 md:h-80 object-cover"
                poster="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761459157/Luxury_Lounge_Setup_ncqbba.jpg"
              >
                <source src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761458860/downloaded-file_1_icd3vh.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl">Luxury Lounge Setup</h3>
                <p className="text-white/90 text-sm">Complete setup process & final result</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <video
                controls
                className="w-full h-64 md:h-80 object-cover"
                poster="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761459110/Boho_Chic_Design_um54ru.jpg"
              >
                <source src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761458993/downloaded-file_2_yilcyc.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl">Boho Chic Design</h3>
                <p className="text-white/90 text-sm">Behind the scenes & guest experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Why Choose ShadiBazaar?
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-lg 
                  transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Lounge Gallery
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((imageUrl, index) => (
              <div
                key={index}
                className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg 
                  transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <Image
                  src={imageUrl}
                  alt={`Lounge Gallery ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Simple Process
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: '02', title: 'Design', desc: 'We create a customized lounge plan' },
              { step: '03', title: 'Setup', desc: 'Professional installation on your big day' },
              { step: '04', title: 'Enjoy', desc: 'Relax while we handle everything' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-rose-400 text-white rounded-full flex items-center 
                  justify-center text-2xl md:text-3xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-r from-rose-400 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready to Create Your Dream Lounge?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
            Let us help you design the perfect relaxation space for your wedding guests. 
            Contact us today for a free consultation and quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-white text-rose-500 px-8 md:px-10 py-3 md:py-4 rounded-full 
              font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book Consultation
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 md:px-10 
              py-3 md:py-4 rounded-full font-semibold hover:bg-white hover:text-rose-500 transition-all 
              duration-300 transform hover:scale-105">
              View Packages
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-white">
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">📞</span>
              <span className="text-sm md:text-base">+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">📧</span>
              <span className="text-sm md:text-base">info@shadibazaar.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl">💬</span>
              <span className="text-sm md:text-base">WhatsApp Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
