"use client";
import { useState, useEffect } from 'react';
import { Heart, Calendar, Users, Camera, Music, Sparkles, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function EngagementPlanning() {
  const [activeService, setActiveService] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Complete Event Planning",
      description: "From concept to execution, we handle every detail of your special day"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Guest Management",
      description: "Seamless coordination for all your guests with personalized attention"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional team"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Entertainment & Decor",
      description: "Create magical ambiance with stunning decor and live entertainment"
    }
  ];

  const packages = [
    {
      name: "Classic Romance",
      price: "₹2,50,000",
      features: [
        "Venue decoration",
        "Professional photography",
        "Catering for 100 guests",
        "Music & DJ",
        "Event coordination"
      ]
    },
    {
      name: "Royal Elegance",
      price: "₹5,00,000",
      features: [
        "Premium venue decoration",
        "Photo + Video coverage",
        "Catering for 200 guests",
        "Live band & DJ",
        "Makeup & styling",
        "Wedding planning team"
      ],
      popular: true
    },
    {
      name: "Grand Celebration",
      price: "₹10,00,000+",
      features: [
        "Luxury venue setup",
        "Cinematic coverage",
        "Gourmet catering for 300+",
        "Celebrity performances",
        "Complete styling team",
        "Destination planning"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      text: "ShaadiBazaar made our engagement absolutely magical! Every detail was perfect.",
      rating: 5
    },
    {
      name: "Anjali & Vikram",
      text: "Professional, creative, and so easy to work with. Highly recommended!",
      rating: 5
    },
    {
      name: "Neha & Arjun",
      text: "They turned our dream engagement into reality. Couldn't be happier!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Video - Replace the URL with your video link */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dewxpvl5s/video/upload/v1761828196/mixkit-a-delicate-womans-hand-with-red-polish-nails-receives-a-51651-hd-ready_r5nfki.mp4" type="video/mp4" />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/60 via-pink-400/50 to-rose-400/60"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Floating Hearts Animation */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-white opacity-10 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
            <h1 className="text-6xl md:text-8xl font-medium text-white mb-6 tracking-tight">
              Your Perfect
              <span className="block text-rose-100">Engagement Awaits</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 font-normal">
              Creating magical moments that last a lifetime
            </p>
            <button className="bg-white text-rose-500 px-10 py-4 rounded-full text-lg font-light cursor-pointer hover:bg-rose-50 transform hover:scale-105 transition duration-300 shadow-2xl">
              Plan Your Engagement
            </button>
          </div>
        </div>


      </div>

      {/* Video Section */}
      <div className="py-24 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Experience the Magic
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">      Watch how we transform dreams into reality</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-140">

              <iframe className='h-full w-full' src="https://www.youtube.com/embed/uwcC0Gsh_nA?si=L6c6iPPJ7wjh8OHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="pt-6 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Our Services
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Everything you need for the perfect engagement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveService(idx)}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer ${activeService === idx
                  ? 'bg-gradient-to-br from-rose-400 to-pink-300 text-white shadow-2xl transform scale-105'
                  : 'bg-rose-50 text-gray-700 hover:shadow-lg'
                  }`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                <p className={activeService === idx ? 'text-rose-50' : 'text-gray-600'}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="pt-26 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Beautiful Moments
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> A glimpse of our stunning engagement celebrations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761828194/engagement-planning-gallery-image-2_x6ckyc.jpg', alt: 'Engagement Ceremony 1' },
              { src: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761828195/engagement-planning-gallery-image-1_tu0kmd.jpg', alt: 'Engagement Ceremony 2' },
              { src: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761828194/engagement-planning-gallery-image-4_swsccd.jpg', alt: 'Engagement Ceremony 3' },
              { src: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761828194/engagement-planning-gallery-image-3_ez8dno.jpg', alt: 'Engagement Ceremony 4' },
              { src: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761828193/engagement-planning-gallery-image-6_zzyrsj.jpg', alt: 'Engagement Ceremony 5' },
              { src: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761828194/engagement-planning-gallery-image-5_qhkpsv.jpg', alt: 'Engagement Ceremony 6' }
            ].map((image, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer h-80"
              >
                {/* Image with direct URL */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-12 h-12 text-white animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="pt-26 pb-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Choose Your Package
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Tailored packages to suit every celebration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 transition-all duration-300 ${pkg.popular
                  ? 'bg-gradient-to-br from-rose-400 to-pink-400 text-white shadow-2xl transform scale-105'
                  : 'bg-rose-50 text-gray-800 hover:shadow-xl'
                  }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-rose-500 px-4 py-1 rounded-full text-sm font-extralight">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-3xl font-medium mb-2">{pkg.name}</h3>
                <p className="text-4xl font-normal mb-6">{pkg.price}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className={`w-6 h-6 mr-3 flex-shrink-0 ${pkg.popular ? 'text-white' : 'text-rose-400'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-light cursor-pointer transition-all duration-300 ${pkg.popular
                    ? 'bg-white text-rose-500 hover:bg-rose-50'
                    : 'bg-rose-400 text-white hover:bg-rose-500'
                    }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="pt-26 pb-20 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Happy Couples
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> Hear what our clients say about us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rose-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-medium text-rose-500">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-rose-400 via-pink-400 to-rose-300">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-20 h-20 text-white mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Plan Your Dream Engagement?
          </h2>
          <p className="text-xl text-rose-50 mb-10">
            Let's create memories that will last forever
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-rose-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transform hover:scale-105 transition duration-300 shadow-xl flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-rose-500 transform hover:scale-105 transition duration-300 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Get a Quote
            </button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>info@shaadibazaar.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>Moradabad, UP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

    </div>
  );
}