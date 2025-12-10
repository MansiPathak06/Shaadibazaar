'use client';

import React from 'react';
import { ChevronRight, Star, TrendingUp, Tag, Flame, Sparkles } from 'lucide-react';

export default function ShowCase1() {
  const showcases = [
    {
      title: "Shop Your Favorites",
      icon: <Star className="w-5 h-5" />,
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      products: [
        {
          name: "True Wireless",
          badge: "Special offer",
          badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
          image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
        },
        {
          name: "Neckband",
          badge: "Special offer",
          badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
          image: "https://images.unsplash.com/photo-1577174881658-0f30157f72c4?w=400&h=400&fit=crop"
        },
        {
          name: "Smart Watches",
          badge: "Min. 40% Off",
          badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
        },
        {
          name: "Trimmers",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-red-500 to-pink-500",
          image: "https://images.unsplash.com/photo-1621607510824-e8d5e4be0b66?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      title: "Make your home stylish",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-pink-600 via-rose-600 to-red-600",
      products: [
        {
          name: "Blankets",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-emerald-600 to-teal-600",
          image: "https://images.unsplash.com/photo-1616627977248-1b671e17c7a6?w=400&h=400&fit=crop"
        },
        {
          name: "Water Bottles & Flasks",
          badge: "Top Deals",
          badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
          image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop"
        },
        {
          name: "Wall Clocks",
          badge: "Top Picks",
          badgeColor: "bg-gradient-to-r from-purple-600 to-indigo-600",
          image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop"
        },
        {
          name: "Bedsheets",
          badge: "Special offer",
          badgeColor: "bg-gradient-to-r from-pink-600 to-rose-600",
          image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      title: "Best Deals on Designer Furniture",
      icon: <Flame className="w-5 h-5" />,
      gradient: "from-orange-600 via-red-600 to-rose-600",
      products: [
        {
          name: "Shoe Rack",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
          image: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=400&h=400&fit=crop"
        },
        {
          name: "Collapsible Wardrobes",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop"
        },
        {
          name: "Inflatable Sofas",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-sky-600 to-blue-600",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop"
        },
        {
          name: "Home Temple",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-amber-600 to-orange-600",
          image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop"
        }
      ]
    },
    {
      title: "Trending Electronics",
      icon: <Tag className="w-5 h-5" />,
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      products: [
        {
          name: "Bluetooth Speakers",
          badge: "Up to 60% Off",
          badgeColor: "bg-gradient-to-r from-indigo-600 to-purple-600",
          image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop"
        },
        {
          name: "Gaming Consoles",
          badge: "Hot Deals",
          badgeColor: "bg-gradient-to-r from-red-600 to-pink-600",
          image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=400&fit=crop"
        },
        {
          name: "Laptops",
          badge: "Min. 30% Off",
          badgeColor: "bg-gradient-to-r from-violet-600 to-fuchsia-600",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
        },
        {
          name: "Tablets",
          badge: "Best Prices",
          badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
          image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="bg-white p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-9xl mx-auto relative z-10">
        {/* Section Header */}
      <div className="text-center pb-16 px-4">
        <h1 className="text-5xl md:text-6xl font-medium capitalize mb-4">
          <span className="text-gray-900">Featured</span>{' '}
          <span className="text-orange-600">Products</span>
        </h1>
        <p className="text-lg text-gray-600">
         Standout pieces you can’t miss.
        </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:scale-[1.02] hover:-translate-y-1"
            >
              {/* Header with Gradient */}
              <div className={`relative bg-gradient-to-r ${showcase.gradient} p-5 overflow-hidden`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg border border-white/30">
                      {React.cloneElement(showcase.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <h2 className="text-lg font-medium text-white drop-shadow-lg">
                      {showcase.title}
                    </h2>
                  </div>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300 border border-white/30 hover:scale-110 hover:rotate-90">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  {showcase.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="group/item cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gray-100 mb-3 shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="aspect-square">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover/item:scale-125 transition-transform duration-700 ease-out"
                          />
                        </div>
                        
                        {/* Gradient Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                        
                        {/* Badge with gradient */}
                        <div className="absolute top-2 left-2 z-10">
                          {/* <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xl backdrop-blur-sm border border-white/20 flex items-center gap-1`}>
                            <Sparkles className="w-3 h-3" />
                            {product.badge}
                          </span> */}
                        </div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="text-sm font-normal text-gray-800 group-hover/item:text-transparent group-hover/item:bg-gradient-to-r group-hover/item:from-violet-600 group-hover/item:to-indigo-600 group-hover/item:bg-clip-text transition-all duration-300 line-clamp-2">
                        {product.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom shine effect */}
              <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
