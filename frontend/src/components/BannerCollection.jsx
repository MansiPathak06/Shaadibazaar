import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function BannerCollection() {
  const banners = [
    {
      title: "For Bride",
      subtitle: "Save up to 87%",
      description: "Exclusive deals on beauty essentials and premium products",
      buttonText: "Shop Now",
      bgImage: "https://i.pinimg.com/736x/1f/3d/56/1f3d56114867ee664ab103177fc7170f.jpg",
      bgColor: "from-red-400 to-rose-200",
      textColor: "text-white"
    },
    {
      title: "Trending Products",
      subtitle: "Save up to 71%",
      description: "Best selling items with amazing discounts today",
      buttonText: "Explore",
      bgImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=500&fit=crop",
      bgColor: "from-pink-300 to-pink-400",
      textColor: "text-gray-900"
    },
    {
      title: "Weekend Special",
      subtitle: "Best Price Guaranteed",
      description: "Limited time offer on premium makeup collection",
      buttonText: "Shop Now",
      bgImage: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=500&fit=crop",
      bgColor: "from-amber-400 to-orange-500",
      textColor: "text-white"
    },
    {
      title: "Build Your Collection",
      subtitle: "Home Essentials",
      description: "Everything you need for beauty and self-care at home",
      buttonText: "Shop Now",
      bgImage: "https://images.unsplash.com/photo-1629198726044-c6dee6f0711c?w=800&h=500&fit=crop",
      bgColor: "from-teal-400 to-cyan-500",
      textColor: "text-white"
    },
    {
      title: "Eye Makeup Collection",
      subtitle: "Express Yourself",
      description: "Premium eyeshadows, liners and mascaras for stunning looks",
      buttonText: "Shop Now",
      bgImage: "https://images.unsplash.com/photo-1631214500869-2b8e6b7d9f6c?w=800&h=500&fit=crop",
      bgColor: "from-rose-400 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "Brush Collection",
      subtitle: "Save up to 65%",
      description: "Professional makeup brushes and beauty tools",
      buttonText: "Shop Now",
      bgImage: "https://images.unsplash.com/photo-1583241800698-fa9e8af21e4b?w=800&h=500&fit=crop",
      bgColor: "from-pink-400 to-rose-500",
      textColor: "text-white"
    },
    
    
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.bgImage})` }}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${banner.bgColor} opacity-85`} />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${banner.textColor}`}>
                    {banner.title}
                  </h3>
                  <p className={`text-xl font-semibold mb-3 ${banner.textColor}`}>
                    {banner.subtitle}
                  </p>
                  <p className={`text-sm ${banner.textColor} opacity-90 line-clamp-2`}>
                    {banner.description}
                  </p>
                </div>
                
                {/* Button */}
                <button className="self-start bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                  <span>{banner.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}