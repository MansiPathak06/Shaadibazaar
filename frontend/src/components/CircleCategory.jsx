"use client";
import React from "react";

export default function ClothingCategories() {
  const categories = [
    {
      id: 1,
      name: "Bridal Wear",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      items: "2.5k Items",
    },
    {
      id: 2,
      name: "Essential Bridal things",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      items: "1.8k Items",
    },
    {
      id: 3,
      name: "Groom Footwear",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      items: "3.2k Items",
    },
    {
      id: 4,
      name: "Bridal Footwear",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
      items: "1.5k Items",
    },
    {
      id: 5,
      name: "Bridal Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
    {
      id: 6,
      name: "Groom Accessories",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      items: "760 Items",
    },
    {
      id: 7,
      name: "Makeup & Hair Accessories",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      items: "1.2k Items",
    },
    {
      id: 8,
      name: "Gifts",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
      items: "890 Items",
    },
    {
      id: 9,
      name: "Ritual Items",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      items: "540 Items",
    },
    {
      id: 10,
      name: "Bridal Jewellery",
      image:
        "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&h=400&fit=crop",
      items: "420 Items",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-block mb-3 animate-bounce-slow">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
              ✨ Trending Now
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-3 animate-slide-up">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover your style with our curated collections
          </p>
        </div>

        {/* Responsive grid with smaller circles */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative">
                {/* Decorative ring that appears on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-300 to-purple-300 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-110 blur-sm transition-all duration-500"></div>
                
                <div className="relative w-28 h-28 sm:w-28 sm:h-28 md:w-38 md:h-38 mx-auto rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-500 border-2 border-gray-200 group-hover:border-blue-400 transform group-hover:scale-110 group-hover:rotate-3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 ease-out"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
                  {/* Hover overlay with icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-white font-semibold text-xs bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-lg">
                      <span className="inline-block animate-pulse">👁️</span> Explore
                    </div>
                  </div>

                  {/* Sparkle effect on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-3">
                <h3 className="font-bold text-xs md:text-sm text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 transform group-hover:scale-110">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {category.items}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <span className="relative text-sm md:text-base">View All Categories</span>
            <svg className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}