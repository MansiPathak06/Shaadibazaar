"use client";
import React from "react";

export default function ClothingCategories() {
  const categories = [
    {
      id: 1,
      name: "Bridal Wear",
      image:
        "https://i.pinimg.com/1200x/70/8a/8e/708a8eeb82f66e0c272eb8acaf8b0410.jpg",
      items: "2.5k Items",
    },
    {
      id: 2,
      name: "Essential Bridal things",
      image:
        "https://i.pinimg.com/736x/d0/40/39/d04039d91d8ffa850b4046d8a2d7aaf7.jpg",
      items: "1.8k Items",
    },
    {
      id: 3,
      name: "Groom Footwear",
      image:
        "https://i.pinimg.com/736x/e5/6b/b2/e56bb254ff06d64471aef33e6feb108f.jpg",
      items: "3.2k Items",
    },
    {
      id: 4,
      name: "Bridal Footwear",
      image:
        "https://i.pinimg.com/1200x/b0/63/44/b063446e391f4ba6e2cc338fbcddd79a.jpg",
      items: "1.5k Items",
    },
    {
      id: 5,
      name: "Bridal Accessories",
      image:
        "https://i.pinimg.com/1200x/c2/81/4a/c2814a8f2bf3c84446a84159db9ac43a.jpg",
      items: "980 Items",
    },
    {
      id: 6,
      name: "Groom Accessories",
      image:
        "https://i.pinimg.com/736x/ae/6b/af/ae6bafa30d097cf90c6b46151d5e6784.jpg",
      items: "760 Items",
    },
    {
      id: 7,
      name: "Makeup & Hair Accessories",
      image:
        "https://i.pinimg.com/736x/f1/72/81/f17281b9d7a127a774ff9cb579101732.jpg",
      items: "1.2k Items",
    },
    {
      id: 8,
      name: "Gifts",
      image:
        "https://i.pinimg.com/736x/9f/cb/30/9fcb30c69047a62d7587e6929939606d.jpg",
      items: "890 Items",
    },
    {
      id: 9,
      name: "Ritual Items",
      image:
        "https://i.pinimg.com/1200x/27/9b/99/279b997dd438a6ced108bef2ecedf18a.jpg",
      items: "540 Items",
    },
    {
      id: 10,
      name: "Bridal Jewellery",
      image:
        "https://i.pinimg.com/1200x/07/a4/81/07a481126183a4cf3278ecfe2986305c.jpg",
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