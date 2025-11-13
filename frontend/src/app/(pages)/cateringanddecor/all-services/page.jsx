"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Music, Flower, Utensils, Camera, Video, Palette, Sparkles } from "lucide-react";

export default function AllServices() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'all';
  
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      // Build URL with category filter if not 'all'
      const categoryParam = category === 'all' ? '' : `?category=${category}`;
      const res = await fetch(`http://localhost:5000/api/service-vendors${categoryParam}`);
      const data = await res.json();
      setServices(data.services || []);
      setLoading(false);
    }
    fetchServices();
  }, [category]);

  // Category info for display
  const categoryInfo = {
    all: {
      title: "All Wedding & Event Services",
      description: "Browse all available vendors for your special day",
      icon: Sparkles
    },
    dance: {
      title: "Dance & Choreography Services",
      description: "Professional choreographers for sangeet, couple dance, and performances",
      icon: Music
    },
    decor: {
      title: "Floral Decoration Services",
      description: "Elegant floral arrangements and decoration for your wedding",
      icon: Flower
    },
    catering: {
      title: "Catering Services",
      description: "Delicious food and beverage services for your celebration",
      icon: Utensils
    },
    photography: {
      title: "Photography Services",
      description: "Capture your special moments with professional photographers",
      icon: Camera
    },
    videography: {
      title: "Videography Services",
      description: "Cinematic wedding films and videos",
      icon: Video
    },
    makeup: {
      title: "Makeup Artist Services",
      description: "Professional makeup artists for bridal and event makeup",
      icon: Palette
    }
  };

  const currentCategory = categoryInfo[category] || categoryInfo.all;
  const CategoryIcon = currentCategory.icon;

  // Category filter tabs
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'dance', name: 'Dance' },
    { id: 'decor', name: 'Floral Decor' },
    { id: 'catering', name: 'Catering' },
    { id: 'photography', name: 'Photography' },
    { id: 'videography', name: 'Videography' },
    { id: 'makeup', name: 'Makeup' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <CategoryIcon className="w-8 h-8 text-rose-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            {currentCategory.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/cateringanddecor/all-services?category=${cat.id}`}>
              <button
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === cat.id
                    ? 'bg-rose-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-rose-100 hover:text-rose-600'
                }`}
              >
                {cat.name}
              </button>
            </Link>
          ))}
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading services...</p>
            </div>
          </div>
        ) : services.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CategoryIcon className="w-12 h-12 text-rose-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              No vendors found
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any vendors in this category yet.
            </p>
            <Link href="/cateringanddecor/all-services?category=all">
              <button className="bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors">
                Browse All Services
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-600 text-center">
              Found <span className="font-semibold text-rose-600">{services.length}</span> vendor{services.length !== 1 ? 's' : ''}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <div 
                  key={service.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.coverImage}
                      alt={service.vendorName}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      onError={e => { e.target.src = "/placeholder.jpg"; }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-rose-600 font-semibold text-sm capitalize">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">
                      {service.vendorName}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    
                    {service.price && (
                      <div className="mb-4">
                        <span className="text-rose-600 font-bold text-lg">
                          ₹{service.price}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">onwards</span>
                      </div>
                    )}
                    
                    <Link href={`/cateringanddecor/all-services/${service.id}`}>
                      <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-rose-600 hover:to-pink-600 w-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        View Details & Book
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}