"use client";
import React from 'react';

const ChristianBridalWearPage = () => {
  // Hero images (top section - 4 images)
  const heroImages = [
    "", // Wedding gown
    "", // Bridal veil
    "", // Church wedding
    "", // Bridal accessories
  ];

  // Category collections (bottom section - 10 images)
  const categories = [
    {
      slug: "wedding-gown",
      title: "Wedding Gown",
      image: "https://i.pinimg.com/1200x/b5/fa/b9/b5fab98fb25ffa0653cd507e01a4d16d.jpg",
      accent: "#e91e63",
    },
    {
      slug: "bridal-veil",
      title: "Bridal Veil",
      image: "https://i.pinimg.com/1200x/61/1e/0f/611e0fe6fde0602d1575ceb65346b291.jpg",
      accent: "#3f51b5",
    },
    {
      slug: "gloves",
      title: "Gloves",
      image: "https://i.pinimg.com/736x/a2/a1/7e/a2a17e18eff13867357b2efc4ae5b0e8.jpg",
      accent: "#ff9800",
    },
    {
      slug: "bridal-shoes-heels",
      title: "Bridal Shoes/Heels",
      image: "",
      accent: "#9c27b0",
    },
    {
      slug: "hair-tiara",
      title: "Hair Tiara",
      image: "",
      accent: "#4caf50",
    },
    {
      slug: "bridal-robe",
      title: "Bridal Robe",
      image: "",
      accent: "#03a9f4",
    },
    {
      slug: "petticoat",
      title: "Petticoat",
      image: "",
      accent: "#ff5722",
    },
    {
      slug: "bouquet",
      title: "Bouquet",
      image: "",
      accent: "#8bc34a",
    },
    {
      slug: "bridesmaid-dresses",
      title: "Bridesmaid Dresses",
      image: "",
      accent: "#009688",
    },
  ];

  const handleCategoryClick = (slug) => {
    console.log(`Navigating to: /christian-bridal-wear/${slug}`);
    // In a real Next.js app, you would use: router.push(`/christian-bridal-wear/${slug}`)
    alert(`Navigate to: /christian-bridal-wear/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-1 mt-2 relative">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-100 mb-4 tracking-wide">
              Christian Bridal Collections
            </h1>
            <p className="text-xl text-blue-200 font-light">
              Grace and elegance for your sacred union !
            </p>
          </div>
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
  {heroImages.map((image, index) => (
    <div
      key={index}
      className="relative group"
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl relative">
        <img
          src={image}
          alt={`Christian bridal collection ${index + 1}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {/* Dark gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Text on the image at bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] text-center">
          <p className="text-gray-400 text-sm md:text-base backdrop-blur font-medium drop-shadow-md">
            {index === 0 && "Wedding Gown"}
            {index === 1 && "Bridal Veil"}
            {index === 2 && "Church Ceremony"}
            {index === 3 && "Bridal Elegance"}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Marquee Tagline */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-md sticky top-0 z-10 overflow-hidden">
        <div className="py-2">
          <div className="animate-marquee whitespace-nowrap inline-block">
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ BLESSED ELEGANCE FOR YOUR SACRED DAY
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              💒 GRACE & BEAUTY IN HOLY MATRIMONY
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              👰 WHERE FAITH MEETS FASHION
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              ✨ BLESSED ELEGANCE FOR YOUR SACRED DAY
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              💒 GRACE & BEAUTY IN HOLY MATRIMONY
            </span>
            <span className="text-blue-100 text-sm md:text-base font-light tracking-widest mx-8">
              👰 WHERE FAITH MEETS FASHION
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
        <h2 className="text-3xl font-bold text-indigo-900 mb-8 uppercase tracking-wide">
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
    src="https://i.pinimg.com/736x/placeholder-about.jpg"
    alt="About"
    className="rounded-lg shadow-2xl w-78 object-cover"
  />
</div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-6 uppercase tracking-wide">
                About Us
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe that every bride deserves to walk down the aisle with grace and confidence. Our carefully curated collections blend timeless elegance with modern sophistication, perfect for your sacred ceremony.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From stunning wedding gowns to delicate veils and accessories, each piece in our collection is selected with devotion and attention to detail, ensuring that your wedding day radiates beauty and joy.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-indigo-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-indigo-900">DIVINE ELEGANCE</h4>
                  <p className="text-sm text-gray-600 mt-2">Heavenly Designs</p>
                </div>
                <div>
                  <div className="text-indigo-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-indigo-900">GRACEFUL COMFORT</h4>
                  <p className="text-sm text-gray-600 mt-2">Premium Fabrics</p>
                </div>
                <div>
                  <div className="text-indigo-600 mb-2">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-indigo-900">TIMELESS BEAUTY</h4>
                  <p className="text-sm text-gray-600 mt-2">Classic & Modern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center uppercase tracking-wide">
            Complete Bridal Collections
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover a divine collection of bridal essentials that will make your wedding ceremony truly memorable. From the perfect gown to the finest accessories, we have everything you need to complete your bridal look with grace and sophistication.
          </p>
          <div className="text-center">
            <button className="bg-indigo-900 text-white px-8 py-3 rounded-full hover:bg-indigo-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              EXPLORE ALL COLLECTIONS
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ChristianBridalWearPage;