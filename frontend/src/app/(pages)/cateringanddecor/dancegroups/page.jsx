// pages/choreographer.js or app/choreographer/page.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WeddingChoreographer() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const danceServices = [
    {
      id: 1,
      title: 'SANGEET CEREMONY',
      description: 'Perfect choreography for your sangeet night with custom routines for couples, families, and friends',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542379/SANGEET_CEREMONY_ckgixl.jpg', // Replace with your Cloudinary links
    },
    {
      id: 2,
      title: 'COUPLE DANCE',
      description: 'Romantic and memorable first dance choreography tailored to your love story and favorite songs',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542379/COUPLE_DANCE_oxezo4.jpg',
    },
    {
      id: 3,
      title: 'FAMILY PERFORMANCES',
      description: 'Fun group choreography for families and friends to create unforgettable moments',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542379/FAMILY_PERFORMANCES_n2qwt0.jpg',
    },
    {
      id: 4,
      title: 'RECEPTION EVENTS',
      description: 'Grand reception performances with professional choreography for all age groups',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542379/RECEPTION_EVENTS_t1v2pk.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
      <div 
  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
  style={{ 
    backgroundImage: 'url(https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542379/hero-image_yx5dup.jpg)',
  }}
/>

        
        <div 
          className={`relative z-20 text-center px-4 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wider">
              CREATE MAGICAL
            </h1>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-wider">
              WEDDING MOMENTS
            </h1>
          </div>
          <p className="text-white/90 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            Professional wedding choreography services to make your special day unforgettable
          </p>
          <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            BOOK A CHOREOGRAPHER
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div 
              className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl group"
            >
              <Image
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542379/Wedding_preparation_np0q3n.jpg" // Replace with Cloudinary link
                alt="Wedding preparation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                YOUR JOURNEY TO FLAWLESS CELEBRATIONS
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At ShaadiiBazaar, we understand that every wedding celebration deserves perfect choreography. 
                Our experienced dance instructors work closely with you to create stunning performances that 
                reflect your personality and style.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                From intimate couple dances to grand sangeet performances, we bring creativity, energy, 
                and professionalism to every routine.
              </p>
              <button className="mt-6 text-rose-400 hover:text-rose-500 font-medium flex items-center gap-2 group">
                LEARN MORE 
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
                PLANNING THAT TELLS YOUR STORY
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We believe every dance should tell your unique love story. Our choreographers spend time 
                understanding your vision, musical preferences, and comfort levels to create performances 
                that feel authentic and enjoyable.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you are a trained dancer or have two left feet, we make the process fun, 
                stress-free, and rewarding for everyone involved.
              </p>
            </div>
            <div 
              className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-2xl group order-1 md:order-2"
            >
              <Image
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761542664/Groom_preparation_wtmaoy.jpg" // Replace with Cloudinary link
                alt="Groom preparation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6 tracking-wide">
              OUR SERVICES
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive choreography solutions for every wedding celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {danceServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-serif mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p 
                    className={`text-white/90 leading-relaxed transition-all duration-500 ${
                      activeService === service.id 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-rose-50/30 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">
            WHY CHOOSE US
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💃</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Choreographers</h3>
              <p className="text-gray-600 leading-relaxed">
                Trained professionals with years of experience in wedding choreography and diverse dance styles
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom Routines</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized choreography tailored to your song choices, skill levels, and celebration theme
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Stress-Free Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Flexible scheduling, patient instruction, and fun practice sessions that build confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-rose-400 to-rose-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            READY TO DANCE YOUR WAY TO UNFORGETTABLE MEMORIES?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your choreographer today and make your wedding celebration extraordinary
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-400 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              GET A QUOTE
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-rose-400 transition-all duration-300 transform hover:scale-105">
              VIEW PACKAGES
            </button>
          </div>
        </div>
      </section>

      
      
    </div>
  );
}
