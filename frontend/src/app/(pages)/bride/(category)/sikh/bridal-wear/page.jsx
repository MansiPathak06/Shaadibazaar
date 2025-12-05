"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SikhBridalWearPage = () => {
  const router = useRouter();

  // Hero images (top section - 4 images)
  const heroImages = [
    {
      url: "https://i.pinimg.com/736x/d3/a5/9f/d3a59f4709b7ad407e874ef142bfe88b.jpg",
      title: "Punjabi Suit",
      subCategory: "punjabi-suit-anarkali-lehenga"
    },
    {
      url: "https://i.pinimg.com/736x/db/83/4d/db834d8034d3ab5541e781bec7857f4e.jpg",
      title: "Anarkali Ensemble",
      subCategory: "anarkali-suit"
    },
    {
      url: "https://i.pinimg.com/736x/a3/d8/37/a3d837941894f859713aaabdc956acdc.jpg",
      title: "Bridal Lehenga",
      subCategory: "bridal-lehenga"
    },
    {
      url: "https://i.pinimg.com/736x/57/9f/ee/579feeb1733abe1f19f4fb448a048fc8.jpg",
      title: "Traditional Attire",
      subCategory: "punjabi-suit"
    },
  ];

  // Category collections (bottom section - 5 categories)
  const categories = [
    {
      slug: "punjabi-suit-anarkali-lehenga",
      title: "Punjabi suit / Anarkali / Lehenga",
      image: "https://i.pinimg.com/736x/54/02/7d/54027daf6d104ba726e08790fe993c39.jpg",
      accent: "#e91e63",
    },
    {
      slug: "phulkari-dupatta",
      title: "Phulkari dupatta",
      image: "https://i.pinimg.com/1200x/6a/8b/a3/6a8ba3fe279066df7d91cc3681446aa3.jpg",
      accent: "#ff9800",
    },
    {
      slug: "bridal-jutti",
      title: "Bridal jutti",
      image: "https://i.pinimg.com/1200x/59/f4/0c/59f40ccfa891754b89561111b918c2d9.jpg",
      accent: "#9c27b0",
    },
    {
      slug: "chuni",
      title: "Chuni",
      image: "https://i.pinimg.com/1200x/07/54/e4/0754e4097b9baf876e76b5c4a62baa3b.jpg",
      accent: "#4caf50",
    },
    {
      slug: "bridal-robe",
      title: "Bridal robe",
      image: "https://i.pinimg.com/736x/bd/c1/64/bdc16459329a1c206172dfde071215b0.jpg",
      accent: "#3f51b5",
    },
  ];

  const handleCategoryClick = (subCategory) => {
    router.push(`/bride/all-products?category=bridal-wear&subCategory=${encodeURIComponent(subCategory)}`);
  };

  const handleHeroImageClick = (subCategory) => {
    router.push(`/bride/all-products?category=bridal-wear&subCategory=${encodeURIComponent(subCategory)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-900 via-amber-900 to-orange-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-1 mt-2 relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-4 tracking-wide">
              Sikh Bridal Collections
            </h1>
            <p className="text-xl text-amber-200 font-light">
              Celebrating Punjabi heritage with timeless elegance !
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => handleHeroImageClick(image.subCategory)}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Text on the image at bottom */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] text-center">
                    <p className="text-white text-sm md:text-base backdrop-blur font-medium drop-shadow-md group-hover:text-amber-200 transition-colors">
                      {image.title}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-orange-900/0 group-hover:bg-orange-900/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Collection
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee Tagline */}
      <div className="bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ TRADITIONAL PUNJABI ELEGANCE
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              💍 CELEBRATING HERITAGE & STYLE
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              👰 WHERE TRADITION MEETS BEAUTY
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ TRADITIONAL PUNJABI ELEGANCE
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              💍 CELEBRATING HERITAGE & STYLE
            </span>
            <span className="text-amber-100 text-sm md:text-base font-light tracking-widest mx-8">
              👰 WHERE TRADITION MEETS BEAUTY
            </span>
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
          animation: marquee 30s linear infinite;
        }
      `}</style>

      {/* Featured Collections */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-orange-900 mb-8 uppercase tracking-wide">
          Featured Collections
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2 capitalize">
                    {category.title}
                  </h3>
                  <button
                    className="text-xs px-4 py-2 rounded-full border-2 transition-colors duration-300"
                    style={{
                      borderColor: category.accent,
                      color: category.accent,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = category.accent;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = category.accent;
                    }}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/736x/bd/49/8b/bd498babb0dda804d8728b9158e691ab.jpg"
                alt="About Sikh Bridal Wear"
                className="rounded-lg shadow-2xl w-78 object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-900 mb-6 uppercase tracking-wide">
                About Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We celebrate the rich heritage of Punjabi bridal traditions, bringing you authentic and exquisite collections that honor the beauty of Sikh wedding ceremonies. Each piece reflects the vibrant culture and timeless elegance of Punjab.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From traditional Punjabi suits adorned with intricate phulkari work to stunning lehengas and essential bridal accessories, our collections are curated to make every Sikh bride feel magnificent on her special day.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-orange-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-orange-900">AUTHENTIC DESIGNS</h4>
                  <p className="text-sm text-gray-600 mt-2">Traditional Artistry</p>
                </div>
                <div>
                  <div className="text-orange-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-orange-900">PREMIUM QUALITY</h4>
                  <p className="text-sm text-gray-600 mt-2">Finest Fabrics</p>
                </div>
                <div>
                  <div className="text-orange-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-orange-900">CULTURAL PRIDE</h4>
                  <p className="text-sm text-gray-600 mt-2">Heritage Preserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center uppercase tracking-wide">
            Complete Sikh Bridal Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore our comprehensive collection of Sikh bridal essentials that honor tradition while embracing contemporary style. From the iconic Punjabi suit with vibrant phulkari work to elegant juttis and essential accessories, find everything to create your perfect bridal look.
          </p>
          <div className="text-center">
            <button 
              onClick={() => router.push('/bride/all-products?category=bridal-wear')}
              className="bg-orange-900 text-white px-8 py-3 rounded-full hover:bg-orange-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              EXPLORE ALL COLLECTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SikhBridalWearPage;
