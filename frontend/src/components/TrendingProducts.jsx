'use client';

import React from 'react';
import { ArrowRight, Sparkles, Gift, Home, Zap } from 'lucide-react';

export default function TrendingProducts() {
  const categories = [
    {
      title: "Holiday Season Collection",
      subtitle: "Discover the magic of celebrations",
      items: [
        {
          title: "Winter Essentials",
          icon: "❄️",
          gradient: "from-cyan-500 to-blue-600",
          image:"https://res.cloudinary.com/dewxpvl5s/image/upload/v1764931272/winter-collection-4_ms4li3.jpg",
        },
        {
          title: "Gift Gallery",
          icon: "🎁",
          gradient: "from-pink-500 to-rose-600",
          image:"https://res.cloudinary.com/dewxpvl5s/image/upload/v1764931272/winter-collection-1_y4agwe.jpg"

        },
        {
          title: "Travel Collection",
          icon: "✈️",
          gradient: "from-purple-500 to-indigo-600",
          image:"https://res.cloudinary.com/dewxpvl5s/image/upload/v1764931272/winter-collection-3_ogkn4d.jpg",
        },
        {
          title: "Special Moments",
          icon: "💎",
          gradient: "from-amber-500 to-orange-600",
          image:"https://res.cloudinary.com/dewxpvl5s/image/upload/v1764931272/winter-collection-2_dxhmpb.jpg",
        }
      ],
      linkText: "View all collections"
    },
    {
      title: "Mega Sale Event",
      subtitle: "Limited time offers you can't miss",
      items: [
        {
          title: "Flash Deals",
          badge: "Up to 50% off",
          gradient: "from-orange-400 to-red-500",
          image:""
        },
        {
          title: "Top Picks",
          badge: "Bestsellers",
          gradient: "from-red-500 to-pink-600",
          image:""
        },
        {
          title: "Bundle & Save",
          badge: "Buy 2 Get 15% off",
          gradient: "from-fuchsia-500 to-purple-600",
          image:"",
        },
        {
          title: "Combo Offers",
          badge: "Up to 45% off",
          gradient: "from-violet-500 to-indigo-600",
          image:"",
        }
      ],
      linkText: "Browse all deals"
    },
    {
      title: "Transform Your Living Space",
      subtitle: "Style meets comfort in every corner",
      items: [
        {
          title: "Soft Furnishings",
          image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=300&fit=crop",
          description: "Cushions, throws & linens",
          image:"",
        },
        {
          title: "Decorative Accents",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
          description: "Vases, art & more",
          image:"",

        },
        {
          title: "Storage Solutions",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=300&fit=crop",
          description: "Organize in style",
          image:"",
        },
        {
          title: "Ambient Lighting",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=300&fit=crop",
          description: "Create the perfect mood",
          image:"",
        }
      ],
      linkText: "Discover more"
    },
    {
      title: "Smart Home Appliances",
      subtitle: "Up to 60% off on premium brands",
      items: [
        {
          title: "Climate Control",
          image: "https://images.unsplash.com/photo-1631545806609-c2a0e527d0f8?w=400&h=300&fit=crop",
          description: "Air conditioners",
          image:"",
        },
        {
          title: "Cooling Solutions",
          image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
          description: "Refrigerators",
          image:"",
        },
        {
          title: "Kitchen Essentials",
          image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop",
          description: "Microwaves & ovens",
          image:"",
        },
        {
          title: "Laundry Care",
          image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&h=300&fit=crop",
          description: "Washing machines",
          image:"",
        }
      ],
      linkText: "Shop appliances"
    }
  ];

  return (
    <div className="bg-white p-6">

      <div className="text-center pb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-medium capitalize mb-4">
          <span className="text-gray-900">Trending</span>{' '}
          <span className="text-orange-600">Products</span>
        </h1>
        <p className="text-lg text-gray-600">
          What everyone's loving right now
        </p>
      </div>

      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                <h2 className="text-xl font-medium text-white mb-1">
                  {category.title}
                </h2>
                <p className="text-gray-300 text-sm">{category.subtitle}</p>
              </div>

              {/* Items Grid */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="relative rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                    >
                      {/* Image-based cards */}
                      {item.image ? (
                        <div className="aspect-square relative group/item">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h3 className="text-white font-semibold text-sm mb-1">
                                {item.title}
                              </h3>
                              <p className="text-white/90 text-xs">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Gradient-based cards */
                        <div className={`aspect-square bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center p-4 text-white`}>
                          {item.icon && (
                            <span className="text-4xl mb-2">{item.icon}</span>
                          )}
                          <h3 className="font-bold text-center text-sm mb-1">
                            {item.title}
                          </h3>
                          {item.badge && (
                            <span className="bg-white/25 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                              {item.badge}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                {/* <button className="w-full flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 py-2 rounded-lg hover:bg-blue-50 transition-colors group/btn">
                  <span>{category.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}