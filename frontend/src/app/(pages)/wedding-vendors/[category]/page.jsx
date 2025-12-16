// src/app/(pages)/wedding-vendors/[category]/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Star, MapPin, Phone, Mail, ArrowLeft, Loader2, PhoneCall } from "lucide-react";

export default function CategoryServicesPage() {
  const params = useParams();
  const router = useRouter();
  const { category } = params;

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Category display names and images
  const categoryData = {
    planner: {
      name: "Wedding Planner",
      image: "https://i.pinimg.com/1200x/fc/e6/24/fce62422d53e0f53aac6682509df749f.jpg"
    },
    event: {
      name: "Event Manager",
      image: "https://i.pinimg.com/1200x/8f/1a/16/8f1a1635e6ac2c77469d2257e5694d6f.jpg"
    },
    venue: {
      name: "Venue Manager",
      image: "https://i.pinimg.com/736x/57/7a/12/577a1271b9daebccea99feb87f2f1ab2.jpg"
    },
    decorator: {
      name: "Decorator",
      image: "https://i.pinimg.com/736x/a7/62/bc/a762bced6bef3d9b13ba75388aa659c3.jpg"
    },
    caterer: {
      name: "Caterer",
      image: "https://i.pinimg.com/1200x/56/1d/f0/561df0ddacb3d0ddd77ef4dfa6226c9f.jpg"
    },
    photographer: {
      name: "Photographer",
      image: "https://i.pinimg.com/1200x/66/77/85/66778594c92a2bf5727c4393c23059b4.jpg"
    },
    videographer: {
      name: "Videographer",
      image: "https://i.pinimg.com/736x/26/8c/18/268c186fde4f43f025a503db6df6f28f.jpg"
    },
    light: {
      name: "Light & Sound",
      image: "https://i.pinimg.com/736x/e3/34/d4/e334d4ffe873184bfcc6cc177cd53312.jpg"
    },
    dj: {
      name: "DJ Setup",
      image: "https://i.pinimg.com/736x/6f/98/b7/6f98b748da55295f92139809b72d0c0b.jpg"
    },
    band: {
      name: "Band Baja",
      image: "https://i.pinimg.com/1200x/42/94/a3/4294a34c84bcfa062fbe6d169d4686b3.jpg"
    },
    ghodi: {
      name: "Wedding Horse",
      image: "https://i.pinimg.com/736x/21/73/36/21733694ad441a7ce55ef5a890ff60ab.jpg"
    },
    dhol: {
      name: "Dhol Team",
      image: "https://i.pinimg.com/736x/38/27/3e/38273ee1c85c86d8f204e189a49b2bb1.jpg"
    },
    fireworks: {
      name: "Fireworks",
      image: "https://i.pinimg.com/1200x/25/68/2b/25682b0657067901dbb5b5c7fbbdfe74.jpg"
    },
    tent: {
      name: "Tent House",
      image: "https://i.pinimg.com/736x/8e/45/68/8e4568492a10ba340cf836e34e969647.jpg"
    },
  };

  const currentCategory = categoryData[category] || { name: "Services", image: "" };

  useEffect(() => {
    fetchServices();
  }, [category]);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/services/category/${category}`
      );
      const data = await response.json();

      if (data.success) {
        setServices(data.services);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Fetch services error:", error);
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const handleServiceClick = (serviceId) => {
    router.push(`/wedding-vendors/${category}/${serviceId}`);
  };

  const handleCallClick = (e, phone) => {
    e.stopPropagation();
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-rose-500 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Background Image */}
      <div className="relative h-[40vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <button
            onClick={() => router.back()}
            className="flex cursor-pointer items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {currentCategory.name}
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Browse our verified {currentCategory.name.toLowerCase()} services
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No services available in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                {/* Top Section: Image on Left, Details on Right */}
                <div className="flex h-[220px]">
                  {/* Left Side - Service Image */}
                  <div className="relative w-[200px] flex-shrink-0 overflow-hidden">
                    {service.images && service.images.length > 0 && (
                      <img
                        src={
                          Array.isArray(service.images)
                            ? service.images[0]
                            : service.images
                        }
                        alt={service.service_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/200x220?text=Service";
                        }}
                      />
                    )}
                    {service.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </div>
                    )}


                  </div>

                  {/* Right Side - Location, Working Since, Description */}
                  <div className="flex-1 p-4 flex flex-col">
                    {/* Service Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 line-clamp-2 group-hover:text-rose-500 transition-colors leading-tight">
                      {service.service_name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Location */}
                    {service.area_of_service && (
                      <div className="flex items-start gap-1.5 text-gray-700 text-sm mb-2">
                        <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{service.area_of_service}</span>
                      </div>
                    )}

                    {/* Working Since, Price & Rating */}
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <div className="flex items-center gap-2">
                        {service.working_since && (
                          <span className="text-gray-600 font-medium">
                            Since {service.working_since}
                          </span>
                        )}
                        {service.starting_price && (
                          <span className="text-gray-500 text-xs">
                            | Starting from <span className="font-bold text-rose-500">₹{service.starting_price?.toLocaleString("en-IN")}</span>
                          </span>
                        )}
                      </div>
                      {service.rating > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-gray-700 font-semibold">
                            {service.rating}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Buttons Only */}
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleCallClick(e, service.contact_phone)}
                      className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call Now
                    </button>
                    <button className="flex-1 px-4 py-2.5 cursor-pointer bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm shadow-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}