"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MuslimRitualItemsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides for Muslim Ritual Items
  const heroSlides = [
    {
      title: "Nikahnama Folder & Certificate",
      subtitle: "Muslim Wedding | Nikah Items | Mehr Gifts | Attar",
      image:
        "https://i.pinimg.com/1200x/f0/c0/6d/f0c06d079a1f1b78baa7b684ea837db9.jpg", // Replace with a nikah folder/Pinterest image
    },
    {
      title: "Quran & Tasbeeh Sets",
      subtitle: "Sacred Gifts for Bride & Groom",
      image:
        "https://i.pinimg.com/1200x/a4/ad/46/a4ad46b240ff0a9240065a57f9daf016.jpg", // Replace with Quran/tasbeeh image
    },
    {
      title: "Mehr & Engagement Gifts",
      subtitle: "Traditional & Modern Muslim Wedding Gifts",
      image:
        "https://i.pinimg.com/1200x/10/94/5a/10945a9eb4d3d002efdfaef81b792a7c.jpg", // Replace with mehr/engagement gift image
    },
  ];

  // Categories for Muslim Ritual Items
  const categories = [
    {
      name: "Nikahnama Folder",
      items: "15 Items",
      image:
        "https://i.pinimg.com/1200x/eb/7c/39/eb7c39bf4e3191041fc2790c9afd8e2e.jpg", // Replace with nikah folder image
    },
    {
      name: "Quran / Tasbeeh",
      items: "12 Items",
      image:
        "https://i.pinimg.com/736x/0a/e1/0b/0ae10ba66e3d2e6f6f975f11313b59d9.jpg", // Replace with Quran/tasbeeh image
    },
    {
      name: "Mehr Gift Items",
      items: "20 Items",
      image:
        "https://i.pinimg.com/1200x/da/c2/c0/dac2c0c5783bc3bc407b54068e66f537.jpg", // Replace with mehr gift box image
    },
    {
      name: "Perfume / Attar",
      items: "35 Items",
      image:
        "https://i.pinimg.com/736x/c4/6b/ee/c46bee70a0657e2e07379867dd6948ca.jpg", // Replace with attar set image
    },
    {
      name: "Bride Entry Flowers",
      items: "25 Items",
      image:
        "https://i.pinimg.com/736x/a5/53/3b/a5533b9c23ee7d5d078f2327742e26f6.jpg", // Replace with floral entry decor image
    },
    {
      name: "Sweet Boxes",
      items: "18 Items",
      image:
        "https://i.pinimg.com/1200x/bc/c4/eb/bcc4ebd40fe3da84db61782718990583.jpg", // Replace with nikah sweet box image
    },
    {
      name: "Engagement Rings",
      items: "30 Items",
      image:
        "https://i.pinimg.com/736x/23/d6/04/23d60413192f88392dfcb7dcaf2d2193.jpg", // Replace with engagement ring image
    },
    {
      name: "Rukhsati Outfits",
      items: "22 Items",
      image:
        "https://i.pinimg.com/736x/01/3e/08/013e08383c5e564aa57200085d890294.jpg", // Replace with rukhsati outfit image
    },
  ];

  // Trending Muslim Ritual Items
  const trendingProducts = [
    {
      name: "Nikahnama Folder",
      price: "₹1,499",
      oldPrice: "₹1,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/7b/37/a4/7b37a476138d9da299a2e4a644fb7422.jpg", // Replace with folder image
    },
    {
      name: "Quran & Tasbeeh Set",
      price: "₹2,299",
      image:
        "https://i.pinimg.com/1200x/86/b0/98/86b09803ba1ad802249caf7e4880f329.jpg", // Replace with Quran/tasbeeh set
    },
    {
      name: "Mehr Gift Box",
      price: "₹1,899",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/51/3c/d1/513cd119ec94376b0d0c381cdc3b7126.jpg", // Replace with mehr gift box
    },
    {
      name: "Perfume / Attar Set",
      price: "₹1,299",
      oldPrice: "₹1,699",
      badge: "NEW",
      image:
        "https://i.pinimg.com/1200x/63/82/f1/6382f13750cacc1f6cc93799dbe17f2d.jpg", // Replace with attar set
    },
    {
      name: "Bride Entry Flowers",
      price: "₹999",
      image:
        "https://i.pinimg.com/736x/43/92/74/439274156c82902a2723d533c5ebb1b8.jpg", // Replace with floral decor
    },
    {
      name: "Sweet Boxes",
      price: "₹3,299",
      oldPrice: "₹3,999",
      badge: "25% OFF",
      image:
        "https://i.pinimg.com/1200x/f8/36/ad/f836ad816442d1d72dda73978f41244d.jpg", // Replace with sweet box
    },
    {
      name: "Engagement Rings",
      price: "₹18,999",
      image:
        "https://i.pinimg.com/1200x/b6/e1/35/b6e135baefcb7cd52cab94da9339f137.jpg", // Replace with ring image
    },
    {
      name: "Rukhsati Outfit",
      price: "₹15,999",
      oldPrice: "₹19,999",
      badge: "NEW",
      image:
        "https://i.pinimg.com/736x/c8/2a/24/c82a24c245509066b76b3dc347924b15.jpg", // Replace with rukhsati outfit
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slider */}
      <div className="relative h-[250px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-md">
                    <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide">
                      MUSLIM RITUAL ITEMS
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-amber-600 w-8" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories Section with Scrolling */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Popular Categories
          </h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-8">
              {[...categories, ...categories].map((category, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 text-center group cursor-pointer"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1">
                    {category.name.toUpperCase()}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/1200x/31/25/cc/3125ccb84870bd5b8a62e37e86871de6.jpg"
              alt="Nikah & Mehr Gifts"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Nikah & Mehr Gifts
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group cursor-pointer">
            <img
              src="https://i.pinimg.com/1200x/c4/5d/59/c45d596ebd0418ed6b2639c18bbbaeb6.jpg"
              alt="Attar & Perfume Sets"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Attar & Perfume Sets
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-4">
            Trending Products
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              TOP SELLING
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2">
              BEST SELLER
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
                      {product.badge}
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span>EXPLORE FULL COLLECTION</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MuslimRitualItemsPage;
