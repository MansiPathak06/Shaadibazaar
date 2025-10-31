"use client";
import { useState } from "react";
import {
  MapPin,
  Home,
  Plane,
  Building2,
  Flower2,
  Waves,
  ChevronRight,
  Info,
  X,
} from "lucide-react";


export default function WeddingVenuesComponent() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);


  const categories = [
    {
      id: "outdoor",
      title: "Outdoor Venues",
      icon: MapPin,
      description: "Beautiful open-air settings perfect for your dream wedding",
      image:
        "https://i.pinimg.com/736x/56/b1/a5/56b1a59caeffd21bb99bbfb387f1a335.jpg",
      features: [
        "Garden Ceremonies",
        "Terrace Events",
        "Lawn Celebrations",
        "Scenic Backdrops",
      ],
      color: "from-rose-100 to-rose-300",
    },
    {
      id: "indoor",
      title: "Indoor Venues",
      icon: Home,
      description: "Elegant indoor spaces with luxurious ambiance",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      features: [
        "Climate Controlled",
        "Elegant Ballrooms",
        "Intimate Settings",
        "Year-round Availability",
      ],
      color: "from-rose-100 to-rose-300",
    },
    {
      id: "destination",
      title: "Destination Wedding",
      icon: Plane,
      description:
        "Make your wedding an unforgettable international experience",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      features: [
        "Exotic Locations",
        "Complete Planning",
        "Travel Coordination",
        "Unique Experiences",
      ],
      color: "from-rose-100 to-rose-300",
    },
    {
      id: "banquet",
      title: "Banquet Halls",
      icon: Building2,
      description: "Sophisticated halls designed for grand celebrations",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      features: [
        "Large Capacity",
        "Professional Service",
        "Premium Facilities",
        "Catering Options",
      ],
      color: "from-rose-100 to-rose-300",
    },
    {
      id: "gardens",
      title: "Gardens",
      icon: Flower2,
      description: "Lush green spaces surrounded by natural beauty",
      image:
        "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80",
      features: [
        "Natural Beauty",
        "Photo Opportunities",
        "Fresh Air",
        "Romantic Setting",
      ],
      color: "from-rose-100 to-rose-300",
    },
    {
      id: "beach",
      title: "Beach Venues",
      icon: Waves,
      description:
        'Say "I do" with sand between your toes and waves as your soundtrack',
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      features: [
        "Oceanfront Views",
        "Sunset Ceremonies",
        "Tropical Paradise",
        "Memorable Experience",
      ],
      color: "from-rose-100 to-rose-300",
    },
  ];


  const Modal = ({ category, onClose }) => (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 md:h-80">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 rounded-t-2xl`}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-rose-50 transition-colors"
          >
            <X className="w-6 h-6 text-rose-600" />
          </button>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-4xl font-bold mb-2">{category.title}</h2>
            <p className="text-lg opacity-90">{category.description}</p>
          </div>
        </div>


        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Features & Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {category.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
              >
                <div className="w-2 h-2 bg-rose-500 rounded-full" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>


          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Why Choose {category.title}?
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              At ShaadiBazaar, we understand that your wedding venue sets the
              tone for your entire celebration. Our{" "}
              {category.title.toLowerCase()} are carefully curated to offer the
              perfect blend of beauty, functionality, and unforgettable
              memories.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Expert venue selection and coordination</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>End-to-end planning and management services</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Customized packages to suit your budget and vision</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-5 h-5 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Dedicated support throughout your wedding journey</span>
              </li>
            </ul>
          </div>


          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white py-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
              View Available Venues
            </button>
            <button className="flex-1 border-2 border-rose-500 text-rose-600 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-all">
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(244, 63, 94, 0.2);
        }
      `}</style>


      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-slideUp">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-3 rounded-full text-base font-bold shadow-lg">
             Explore. Plan. Celebrate.
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Explore Your Dream Venue!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional venues that transform your wedding dreams into
            reality. From intimate gardens to grand banquet halls, we have the
            perfect setting for your celebration.
          </p>
        </div>


        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative hover-lift cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />


                  {/* Gradient Overlay - LIGHTENED */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-35 group-hover:opacity-45 transition-opacity duration-300`}
                  />


                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Title and Description at top */}
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-800 text-md opacity-90">
                        {category.description}
                      </p>
                    </div>

                    {/* Button at bottom */}
                    <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="bg-white text-rose-600 px-6 py-3 rounded-full font-semibold hover:bg-rose-50 transition-all flex items-center space-x-2 group/btn"
                      >
                        <span>Explore More</span>
                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>


                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-4 border-rose-200 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Modal */}
      {selectedCategory && (
        <Modal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}
