import React from 'react';

export default function Collection1() {
  const categories = [
    {
      name: "T-shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop"
    },
    {
      name: "Warm Joggers",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=600&fit=crop"
    },
    {
      name: "Hoodies",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop"
    },
    {
      name: "Sweatshirts",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop"
    },
    {
      name: "Shirts",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=600&fit=crop"
    },
    {
      name: "Full Sleeve T-shirts",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-[1600px] mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden rounded-lg group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-top"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              
              {/* Category Name */}
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                  {category.name}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 transition-colors duration-300 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}