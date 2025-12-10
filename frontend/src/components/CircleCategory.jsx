import React from "react";

export default function ClothingCategories() {
  const categories = [
    {
      id: 1,
      name: "T-Shirts",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      items: "2.5k Items",
    },
    {
      id: 2,
      name: "Jeans",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      items: "1.8k Items",
    },
    {
      id: 3,
      name: "Dresses",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      items: "3.2k Items",
    },
    {
      id: 4,
      name: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop",
      items: "1.5k Items",
    },
    {
      id: 5,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
    {
      id: 6,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
    {
      id: 7,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
    {
      id: 8,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
    {
      id: 9,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
    {
      id: 10,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      items: "980 Items",
    },
  ];

  return (
    <section className="relative bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
              Trending Now
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover your style with our curated collections
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative">
                <div className="relative w-full aspect-square rounded-full overflow-hidden bg-white shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


          
                  {/* Hover overlay text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white font-semibold text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
                      Explore →
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span>View All Categories</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>

  );
}
