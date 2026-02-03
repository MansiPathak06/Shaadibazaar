'use client';

import { useState } from 'react';
import { Heart, Calendar, Users, Camera, Music, Utensils, Gift, Sparkles, Phone, Mail, MapPin, CheckCircle, Star } from 'lucide-react';

export default function WeddingPlanning() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Calendar,
      title: "Complete Wedding Planning",
      description: "From engagement to reception, we handle every detail of your special day with care and precision.",
      features: ["Timeline Management", "Vendor Coordination", "Budget Planning"]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional photography and cinematic videography services.",
      features: ["Pre-wedding Shoots", "Candid Photography", "Drone Coverage"]
    },
    {
      icon: Music,
      title: "Entertainment & Music",
      description: "Create the perfect ambiance with DJs, live bands, and traditional performers for your celebration.",
      features: ["Live Bands", "DJ Services", "Traditional Performers"]
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description: "Delight your guests with exquisite cuisines from traditional to contemporary menus.",
      features: ["Multi-cuisine Options", "Live Counters", "Custom Menus"]
    },
    {
      icon: Users,
      title: "Venue Selection",
      description: "Find the perfect venue that matches your vision and accommodates all your guests comfortably.",
      features: ["Indoor & Outdoor", "Destination Weddings", "Palace & Heritage"]
    },
    {
      icon: Gift,
      title: "Decoration & Themes",
      description: "Transform your venue into a dream setting with stunning decor and personalized themes.",
      features: ["Floral Arrangements", "Lighting Design", "Stage Setup"]
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      text: "ShaadiBazaar made our dream wedding come true! Every detail was perfect.",
      rating: 5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810603/priyaandrahul_quxaes.jpg"
    },
    {
      name: "Sneha & Arjun",
      text: "Professional, creative, and absolutely wonderful to work with. Highly recommend!",
      rating: 5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810603/snehaandarjun_lq3vze.jpg"
    },
    {
      name: "Anjali & Vikram",
      text: "They handled everything seamlessly. Our guests are still raving about the wedding!",
      rating: 5,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810601/anjaliandvikram_flpajp.jpg"
    }
  ];

  const portfolioImages = [
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810600/portfolio-image-1_qkkv43.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810600/portfolio-image-2_k4ojsa.jpg",

    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810600/portfolio-image-3_qpffog.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810600/portfolio-image-4_nrmbpu.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810599/portfolio-image-5_xemef7.jpg",
    "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761810599/portfolio-image-6_lammir.jpg"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761810601/189858-886618183_large_muikob.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <Heart className="w-20 h-20 text-rose-400 mb-6 animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-medium text-white mb-6">
            Shaadi<span className="text-rose-400">Bazaar</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 max-w-3xl">
            Creating Magical Moments, One Wedding at a Time
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl">
            Your dream wedding deserves the perfect planning. Let us turn your vision into an unforgettable celebration.
          </p>
          <button className="bg-rose-400 hover:bg-rose-500 text-white px-12 py-4 rounded-full text-xl font-light cursor-pointer transition-all transform hover:scale-105 shadow-2xl">
            Start Planning Your Dream Wedding
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-rose-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-linear-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Why Choose ShaadiBazaar?
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">     We bring years of expertise and passion to make your special day absolutely perfect</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Expert Planners", desc: "Experienced team with 500+ successful weddings" },
              { icon: CheckCircle, title: "Stress-Free Planning", desc: "We handle everything so you can enjoy your journey" },
              { icon: Heart, title: "Personalized Touch", desc: "Every wedding is unique and crafted with love" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl cursor-pointer transition-all transform hover:-translate-y-2">
                <item.icon className="w-16 h-16 text-rose-400 mb-4" />
                <h3 className="text-2xl font-medium text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-20 pb-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Our Services
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Complete wedding solutions tailored to your dreams</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                onClick={() => setActiveService(i)}
                className={`p-8 rounded-2xl cursor-pointer transition-all transform hover:-translate-y-2 ${activeService === i
                  ? 'bg-rose-400 text-white shadow-2xl scale-105'
                  : 'bg-rose-50 hover:bg-rose-100'
                  }`}
              >
                <service.icon className={`w-12 h-12 mb-4 ${activeService === i ? 'text-white' : 'text-rose-400'}`} />
                <h3 className={`text-2xl font-medium mb-3 ${activeService === i ? 'text-white' : 'text-gray-800'}`}>
                  {service.title}
                </h3>
                <p className={`mb-4 ${activeService === i ? 'text-rose-50' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center">
                      <CheckCircle className={`w-5 h-5 mr-2 ${activeService === i ? 'text-white' : 'text-rose-400'}`} />
                      <span className={activeService === i ? 'text-rose-50' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Our Beautiful Weddings
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">A glimpse of the magic we create</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioImages.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer aspect-video"
              >
                <img
                  src={img}
                  alt={`Wedding ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-medium text-lg">View Gallery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Happy Couples
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">What our clients say about us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-rose-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-rose-400"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800 text-lg">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-rose-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
<section className="py-20 px-4 bg-linear-to-b from-rose-50 via-white to-rose-50 relative overflow-hidden">
  {/* Decorative Background Elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
  <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-rose-400 to-rose-500 rounded-full mb-6 shadow-lg">
        <Heart className="w-10 h-10 text-white animate-pulse" />
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-800 mb-4 leading-tight uppercase">
        Let's Create Your
        <span className="block text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-rose-600">
          Perfect Day
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Ready to start planning? Get in touch with us today for a free consultation and let's make your dream wedding a reality!
      </p>
    </div>

    {/* Contact Cards Grid */}
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
      {/* Phone Card */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300">
        <div className="absolute inset-0 bg-linear-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4 group-hover:bg-rose-400 group-hover:scale-110 transition-all duration-300">
            <Phone className="w-8 h-8 text-rose-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-3">Call Us</h3>
          <a 
            href="tel:+919876543210" 
            className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-medium"
          >
            +91 98765 43210
          </a>
          <p className="text-sm text-gray-500 mt-2">Mon - Sat, 10AM - 7PM</p>
        </div>
      </div>

      {/* Email Card */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300">
        <div className="absolute inset-0 bg-linear-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4 group-hover:bg-rose-400 group-hover:scale-110 transition-all duration-300">
            <Mail className="w-8 h-8 text-rose-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-3">Email Us</h3>
          <a 
            href="mailto:hello@shaadibazaar.com" 
            className="text-gray-600 hover:text-rose-500 transition-colors duration-300 font-medium break-all"
          >
            hello@shaadibazaar.com
          </a>
          <p className="text-sm text-gray-500 mt-2">24-48 hrs response time</p>
        </div>
      </div>

      {/* Location Card */}
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100 hover:border-rose-300">
        <div className="absolute inset-0 bg-linear-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4 group-hover:bg-rose-400 group-hover:scale-110 transition-all duration-300">
            <MapPin className="w-8 h-8 text-rose-400 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-3">Visit Us</h3>
          <p className="text-gray-600 font-medium">Mumbai, India</p>
          <p className="text-sm text-gray-500 mt-2">By appointment only</p>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="text-center">
      
      {/* Trust Indicators */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Free Consultation</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>No Obligation</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Instant Response</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Add this to your global CSS or Tailwind config */}
<style jsx>{`
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -50px) scale(1.1); }
    50% { transform: translate(-20px, 20px) scale(0.9); }
    75% { transform: translate(50px, 50px) scale(1.05); }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>
    </div>
  );
}