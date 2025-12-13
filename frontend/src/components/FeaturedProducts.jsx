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
          name: "Sehra",
          badge: "Special offer",
          badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
          image: "https://i.pinimg.com/736x/ca/da/ac/cadaacf8750c07ee8d031e11c3c096d4.jpg"
        },
        {
          name: "Varmala",
          badge: "Special offer",
          badgeColor: "bg-gradient-to-r from-green-500 to-emerald-500",
          image: "https://i.pinimg.com/736x/59/e5/5e/59e55eca5c409beb7f6ba58a5ac81786.jpg"
        },
        {
          name: "Turban(Pagri)",
          badge: "Min. 40% Off",
          badgeColor: "bg-gradient-to-r from-amber-500 to-orange-500",
          image: "https://i.pinimg.com/736x/f9/b9/e2/f9b9e2a9c881aa6db84dec21344a43ce.jpg"
        },
        {
          name: "Wedding Rings",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-red-500 to-pink-500",
          image: "https://i.pinimg.com/736x/3a/a4/99/3aa499e2f411131def052397a5b3e1df.jpg"
        }
      ]
    },
    {
      title: "Make your home stylish",
      icon: <TrendingUp className="w-5 h-5" />,
      gradient: "from-pink-600 via-rose-600 to-red-600",
      products: [
        {
          name: "Dupatta",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-emerald-600 to-teal-600",
          image: "https://i.pinimg.com/1200x/ea/cb/00/eacb0032cd5defe033fd06db7f4f9968.jpg"
        },
        {
          name: "Bridal Heels",
          badge: "Top Deals",
          badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
          image: "https://i.pinimg.com/1200x/6c/6d/fb/6c6dfb62e3bf749559c6ec18e7eb8df0.jpg"
        },
        {
          name: "Kalire",
          badge: "Top Picks",
          badgeColor: "bg-gradient-to-r from-purple-600 to-indigo-600",
          image: "https://i.pinimg.com/736x/8f/5a/61/8f5a61a8355bb8c33b1de24c78b5cd98.jpg"
        },
        {
          name: "Mang Tikka",
          badge: "Special offer",
          badgeColor: "bg-gradient-to-r from-pink-600 to-rose-600",
          image: "https://i.pinimg.com/736x/13/2b/52/132b529955979ef1d5c31987126f110e.jpg"
        }
      ]
    },
    {
      title: "Best Deals on Designer Furniture",
      icon: <Flame className="w-5 h-5" />,
      gradient: "from-orange-600 via-red-600 to-rose-600",
      products: [
        {
          name: "FarmHouses",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
          image: "https://i.pinimg.com/736x/55/92/d0/5592d0d7067960f7536324d78f553697.jpg"
        },
        {
          name: "Villas",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
          image: "https://i.pinimg.com/1200x/80/44/24/80442498a01471b5d7bb1b75c0cb8c4a.jpg"
        },
        {
          name: "Hill Resorts",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-sky-600 to-blue-600",
          image: "https://i.pinimg.com/736x/21/f8/3e/21f83e566ba0066ceefaa8403378c1c6.jpg"
        },
        {
          name: "Dining Hall",
          badge: "Min. 50% Off",
          badgeColor: "bg-gradient-to-r from-amber-600 to-orange-600",
          image: "https://i.pinimg.com/1200x/6e/89/9d/6e899dba06e6d934c76c1145d656ae44.jpg"
        }
      ]
    },
    {
      title: "Trending Electronics",
      icon: <Tag className="w-5 h-5" />,
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      products: [
        {
          name: "Pandit Ji",
          badge: "Up to 60% Off",
          badgeColor: "bg-gradient-to-r from-indigo-600 to-purple-600",
          image: "https://i.pinimg.com/1200x/c2/0e/f4/c20ef488d21c47ff6ad07042b5aabae2.jpg"
        },
        {
          name: "Qazi for Nikah",
          badge: "Hot Deals",
          badgeColor: "bg-gradient-to-r from-red-600 to-pink-600",
          image: "https://i.pinimg.com/736x/ac/de/a7/acdea7230a9b712c588d1f980159b1dc.jpg"
        },
        {
          name: "Granthi Ji",
          badge: "Min. 30% Off",
          badgeColor: "bg-gradient-to-r from-violet-600 to-fuchsia-600",
          image: "https://i.pinimg.com/736x/1d/d9/3c/1dd93cc2ee06645daed7770bcfbc7236.jpg"
        },
        {
          name: "Pastor/father",
          badge: "Best Prices",
          badgeColor: "bg-gradient-to-r from-blue-600 to-cyan-600",
          image: "https://i.pinimg.com/736x/39/8e/72/398e72d81f8727430338633ce965e8e1.jpg"
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
          <span className="text-gray-900">Trending</span>{' '}
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
