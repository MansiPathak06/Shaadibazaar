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
    { id: 1, src: "/images/portfolio-1.jpg", alt: "Wedding moment 1" },
    { id: 2, src: "/images/portfolio-2.jpg", alt: "Wedding moment 2" },
    { id: 3, src: "/images/portfolio-3.jpg", alt: "Wedding moment 3" },
    { id: 4, src: "/images/portfolio-4.jpg", alt: "Wedding moment 4" },
    { id: 5, src: "/images/portfolio-5.jpg", alt: "Wedding moment 5" },
    { id: 6, src: "/images/portfolio-6.jpg", alt: "Wedding moment 6" },
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
      "url('https://i.pinimg.com/1200x/a8/b6/b2/a8b6b24e3f6a32952735a02180129556.jpg')",
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
              Everything You Need for Your Big Day
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
            <div className="flex justify-center items-center space-x-2 text-rose-400">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="text-3xl md:text-5xl font-semibold text-gray-800">
                It will only take a minute of your time
              </span>
              <Heart className="w-6 h-6" fill="currentColor" />
            </div>
            <div className="w-24 h-1 bg-rose-400 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6 text-lg md:text-xl">
              Showcase your precious moments with elegant photo galleries
            </p>
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
              All Your Details in One Place
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-6">
            Simple, Beautiful, and Free
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            No design skills needed. Our intuitive platform makes it easy to
            create a stunning wedding website that perfectly captures your
            style. Get started in minutes and share your joy with everyone you
            love.
          </p>
          <div className="flex justify-center items-center space-x-2 text-rose-400">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-lg font-medium">
              It will only take a minute of your time
            </span>
            <Heart className="w-6 h-6" fill="currentColor" />
          </div>
        </div>
      </section>
    </div>
  );
}