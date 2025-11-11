"use client";
import React, { useState } from "react";
import {
  Heart,
  Calendar,
  MapPin,
  Mail,
  User,
  Camera,
} from "lucide-react";

export default function WeddingService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  // Sample gallery images - Add your image URLs here
  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322061/portfolio-1_uu2ehu.jpg", alt: "Wedding moment 1" },
    { id: 2, src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322061/portfolio-2_ixjxa0.jpg", alt: "Wedding moment 2" },
    { id: 3, src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322062/portfolio-3_uivqhw.jpg", alt: "Wedding moment 3" },
    { id: 4, src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322061/portfolio-4_pep7dl.jpg", alt: "Wedding moment 4" },
    { id: 5, src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322062/portfolio-5_xqnsfm.jpg", alt: "Wedding moment 5" },
    { id: 6, src: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322061/portfolio-6_qvevbn.jpg", alt: "Wedding moment 6" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes scrollDown {
          from {
            object-position: center top;
          }
          to {
            object-position: center bottom;
          }
        }
        
        .scroll-on-hover img {
          object-position: center top;
          transition: object-position 0.3s ease;
        }
        
        .scroll-on-hover:hover img {
          animation: scrollDown 3s linear forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dewxpvl5s/image/upload/v1762322200/bg-image_wqr8x3.jpg')",
        }}
      >
        {/* Optional soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-rose-50/40 backdrop-blur-[1px]"></div>

        {/* Animated blur circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl z-10">
          <Heart
            className="w-16 h-16 text-rose-400 mx-auto mb-6"
            fill="currentColor"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-800 mb-6 drop-shadow-md">
            Your Perfect Wedding Website
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 drop-shadow-sm">
            Create a beautiful website to share your special day
          </p>
          <p className="text-lg text-gray-600 mb-12 drop-shadow-sm">
            Share all the important details about your celebration with your guests in
            one stunning place
          </p>
          <a
            href="#signup"
            className="inline-block bg-rose-400 text-white px-8 py-3 rounded-full hover:bg-rose-500 transition transform hover:scale-105 text-lg font-medium shadow-md"
          >
            Create Your Website
          </a>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-4">
              Everything <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>You</span> Need <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>For Your</span> Big <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Day</span>
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart
                  className="w-10 h-10 text-rose-400"
                  fill="currentColor"
                />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-3">
                Share Your Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tell your love story and share important wedding details with
                your guests in a beautiful way.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-rose-400" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-3">
                Manage RSVPs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily collect and manage guest responses. Know exactly who's
                coming to celebrate with you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-rose-400" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-3">
                Beautiful Gallery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Showcase your engagement photos and memories in a stunning photo
                gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif text-gray-800  capitalize">
                It will <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>only</span> take a <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>minute</span> of your <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>time</span>
              </h2>
              <div className="w-24 h-1 bg-rose-400 mx-auto mt-4"></div>
            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-rose-50 rounded-lg overflow-hidden group relative scroll-on-hover"
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="absolute inset-0 bg-rose-400 opacity-0 group-hover:opacity-10 transition pointer-events-none"></div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Wedding Details Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-4">
              All Your <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Details</span> in One <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Place</span>
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-lg shadow-lg text-center border border-rose-100">
              <Calendar className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-gray-800 mb-2">
                Event Schedule
              </h3>
              <p className="text-gray-600">
                Share ceremony times, reception details, and your complete
                wedding timeline.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-lg shadow-lg text-center border border-rose-100">
              <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-gray-800 mb-2">
                Venue Information
              </h3>
              <p className="text-gray-600">
                Provide location details, maps, and directions to help guests
                find their way.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-lg shadow-lg text-center border border-rose-100">
              <Heart
                className="w-12 h-12 text-rose-400 mx-auto mb-4"
                fill="currentColor"
              />
              <h3 className="text-xl font-serif text-gray-800 mb-2">
                Your Love Story
              </h3>
              <p className="text-gray-600">
                Share how you met, your journey together, and what makes your
                love special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section
        id="signup"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-white"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-600 mb-2">
              Create your free wedding website in minutes
            </p>
            <p className="text-gray-600">
              Share all the important details about your celebration with your
              guests
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name and surname"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition transform hover:scale-105 font-medium text-lg"
              >
                Start Planning Your Website
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">You can also sign up with:</p>
              <div className="flex justify-center space-x-4">
                <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-rose-400 transition">
                  <span className="text-xl font-bold text-gray-700">G</span>
                </button>
                <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-rose-400 transition">
                  <span className="text-xl font-bold text-gray-700">f</span>
                </button>
                <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-rose-400 transition">
                  <span className="text-xl font-bold text-gray-700">𝕏</span>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <button className="text-rose-400 hover:text-rose-500 font-medium underline">
                  Log in
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Decorative Top Element */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-400"></div>
              <Heart className="w-6 h-6 text-rose-400 animate-pulse" fill="currentColor" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-6 animate-fade-in-up uppercase">
            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Simple, Beautiful
            </span>
            <br />
            <span className="text-gray-800">and Free</span>
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            No design skills needed. Our intuitive platform makes it easy to create a{" "}
            <span className="font-semibold text-rose-500">stunning wedding website</span> that perfectly captures your style. Get started in minutes and share your joy with everyone you love.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up animation-delay-400">
            <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-600">Create in minutes, not hours</p>
            </div>

            <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="font-medium text-lg text-gray-800 mb-2">Beautiful Design</h3>
              <p className="text-sm text-gray-600">Stunning templates included</p>
            </div>

            <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg text-gray-800 mb-2">100% Free</h3>
              <p className="text-sm text-gray-600">No hidden costs, ever</p>
            </div>
          </div>

          {/* Decorative Bottom Element */}
          <div className="flex justify-center mt-12 animate-fade-in animation-delay-800">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-200"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-400"></div>
            </div>
          </div>
        </div>

        <style jsx>{`
    @keyframes blob {
      0%, 100% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(20px, -20px) scale(1.1);
      }
      50% {
        transform: translate(-20px, 20px) scale(0.9);
      }
      75% {
        transform: translate(20px, 20px) scale(1.05);
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animation-delay-200 {
      animation-delay: 0.2s;
    }

    .animation-delay-400 {
      animation-delay: 0.4s;
    }

    .animation-delay-600 {
      animation-delay: 0.6s;
    }

    .animation-delay-800 {
      animation-delay: 0.8s;
    }

    .animation-delay-2000 {
      animation-delay: 2s;
    }

    .animation-delay-4000 {
      animation-delay: 4s;
    }

    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
  `}</style>
      </section>

    </div>
  );
}