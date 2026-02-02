"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UniversalBridalGiftsPage = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides for Universal Bridal Gift Items
  const heroSlides = [
    {
      title: "Perfume & Fragrance Sets",
      subtitle: "Luxury Bridal Gifts | Wedding Essentials | Premium Collections",
      image: "https://i.pinimg.com/1200x/af/ff/8a/afff8a3b20fe2a11c6298f5826813f9b.jpg",
      subCategory: "perfume-set"
    },
    {
      title: "Jewellery Box Collections",
      subtitle: "Elegant Storage for Precious Moments",
      image: "https://i.pinimg.com/1200x/0d/fa/a9/0dfaa95a7f4cdb1282ca3fb169532286.jpg",
      subCategory: "jewellery-box"
    },
    {
      title: "Bridal Watch & Accessories",
      subtitle: "Timeless Gifts for the Perfect Day",
      image: "https://i.pinimg.com/1200x/cb/53/29/cb532952f28be2eb2bd8966dff96949e.jpg",
      subCategory: "bridal-watch"
    },
  ];

  // Categories for Universal Bridal Gift Items
  const categories = [
    {
      name: "Perfume Set",
      items: "28 Items",
      image: "https://i.pinimg.com/736x/8c/93/af/8c93afa5feff5c7ff027351d964b4ab6.jpg",
      subCategory: "perfume-set"
    },
    {
      name: "Jewellery Box",
      items: "22 Items",
      image: "https://i.pinimg.com/736x/f8/a8/2d/f8a82da8059cd82f206bdee30019effa.jpg",
      subCategory: "jewellery-box"
    },
    {
      name: "Bridal Watch",
      items: "18 Items",
      image: "https://i.pinimg.com/1200x/af/a4/4c/afa44ca4da15097bd6fed9ca07116ef8.jpg",
      subCategory: "bridal-watch"
    },
    {
      name: "Makeup Kit",
      items: "35 Items",
      image: "https://i.pinimg.com/1200x/5b/6d/8d/5b6d8da5f001d2c7d847de23d9bfd49a.jpg",
      subCategory: "makeup-kit"
    },
    {
      name: "Entry Props",
      items: "30 Items",
      image: "https://i.pinimg.com/736x/bd/c6/4e/bdc64e729f4f26d113b4774f4435d52d.jpg",
      subCategory: "entry-props"
    },
    {
      name: "Customized Hanger",
      items: "20 Items",
      image: "https://i.pinimg.com/736x/94/9b/a3/949ba33520af45724be890a485b21488.jpg",
      subCategory: "customized-hanger"
    },
    {
      name: "Couple Photo Frame",
      items: "25 Items",
      image: "https://i.pinimg.com/1200x/49/da/0e/49da0e744cd455b6cdeef05fd3ae5ca6.jpg",
      subCategory: "couple-photo-frame"
    },
    {
      name: "Gift Hampers",
      items: "32 Items",
      image: "https://i.pinimg.com/1200x/75/af/8d/75af8ddd26c18a05c5378309d83934f0.jpg",
      subCategory: "gift-hampers"
    },
  ];

  // Trending Universal Bridal Gift Items
  const trendingProducts = [
    {
      name: "Luxury Perfume Set",
      price: "₹2,499",
      oldPrice: "₹3,299",
      badge: "NEW",
      image: "https://i.pinimg.com/1200x/1f/4d/63/1f4d63440bc01e9ab97b573bb217ec11.jpg",
      subCategory: "perfume-set"
    },
    {
      name: "Designer Jewellery Box",
      price: "₹1,799",
      image: "https://i.pinimg.com/736x/ff/c1/98/ffc1985456bb5d37735dcc3906f65323.jpg",
      subCategory: "jewellery-box"
    },
    {
      name: "Bridal Watch Collection",
      price: "₹8,999",
      badge: "25% OFF",
      image: "https://i.pinimg.com/736x/25/29/52/2529529c75b1d0501fd087e9b7acf1c6.jpg",
      subCategory: "bridal-watch"
    },
    {
      name: "Premium Makeup Kit",
      price: "₹4,299",
      oldPrice: "₹5,499",
      badge: "NEW",
      image: "https://i.pinimg.com/736x/8b/9a/99/8b9a99b012ab754f7983ad3e29944325.jpg",
      subCategory: "makeup-kit"
    },
    {
      name: "Floral Entry Props",
      price: "₹1,499",
      image: "https://i.pinimg.com/1200x/d5/15/f9/d515f9802b5c6a847d686606ac41ebba.jpg",
      subCategory: "entry-props"
    },
    {
      name: "Personalized Hanger",
      price: "₹899",
      oldPrice: "₹1,199",
      badge: "25% OFF",
      image: "https://i.pinimg.com/736x/dc/75/20/dc7520c2e63f257602a2885cc7631847.jpg",
      subCategory: "customized-hanger"
    },
    {
      name: "Elegant Photo Frame",
      price: "₹1,299",
      image: "https://i.pinimg.com/736x/60/c7/e7/60c7e7903857d0ae3349c9f9db5e75ec.jpg",
      subCategory: "couple-photo-frame"
    },
    {
      name: "Bridal Gift Hamper",
      price: "₹5,999",
      oldPrice: "₹7,999",
      badge: "NEW",
      image: "https://i.pinimg.com/736x/c1/71/05/c171052995121e551000b815984fb00e.jpg",
      subCategory: "gift-hampers"
    },
  ];

  // FIXED: Updated navigation handlers to use /bride/all-products path
  const handleCategoryClick = (subCategory) => {
    router.push(`/bride/all-products?category=universal-bridal-gifts&subCategory=${subCategory}`);
  };

  const handleAllProductsClick = () => {
    router.push("/bride/all-products?category=universal-bridal-gifts");
  };

  const handleProductClick = (subCategory) => {
    router.push(`/bride/all-products?category=universal-bridal-gifts&subCategory=${subCategory}`);
  };

  const handleHeroSlideClick = (subCategory) => {
    router.push(`/bride/all-products?category=universal-bridal-gifts&subCategory=${subCategory}`);
  };

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
                      UNIVERSAL BRIDAL GIFT ITEMS
                    </p>
                    <h1 className="text-5xl font-light text-gray-800 mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-gray-600 mb-6">{slide.subtitle}</p>
                    <button 
                      onClick={() => handleHeroSlideClick(slide.subCategory)}
                      className="bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors cursor-pointer"
                    >
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
                  key={`category-${index}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCategoryClick(category.subCategory);
                  }}
                  className="flex-shrink-0 w-40 text-center group cursor-pointer hover:z-10"
                >
                  <div className="relative mb-4 overflow-hidden rounded-full shadow-md hover:shadow-xl transition-shadow">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-40 h-40 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mb-1 group-hover:text-amber-600 transition-colors">
                    {category.name.toUpperCase()}
                  </h3>
                  <p className="text-xs text-gray-500">{category.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
          Featured Collections
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div 
            onClick={handleAllProductsClick}
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://i.pinimg.com/736x/95/f5/cb/95f5cbba3c52087d94ba24f20d9e67de.jpg"
              alt="Luxury Gift Collections"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Luxury Gift Collections
              </h3>
              <button className="text-white text-sm uppercase tracking-wide hover:underline w-fit">
                SHOP NOW
              </button>
            </div>
          </div>

          <div 
            onClick={handleAllProductsClick}
            className="relative overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src="https://i.pinimg.com/736x/ee/8f/eb/ee8febee411ab13382c172e63bec3169.jpg"
              alt="Personalized Bridal Gifts"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-light mb-2">
                Personalized Bridal Gifts
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
            <button className="text-amber-600 border-b-2 border-amber-600 pb-2 font-medium">
              FEATURED
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2 transition-colors">
              TOP SELLING
            </button>
            <button className="text-gray-500 hover:text-gray-800 pb-2 transition-colors">
              BEST SELLER
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => handleProductClick(product.subCategory)}
                className="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10 font-semibold">
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
                  <h3 className="text-sm text-gray-800 mb-2 font-medium group-hover:text-amber-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">
                      {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={handleAllProductsClick}
              className="group mt-12 relative inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
            >
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default UniversalBridalGiftsPage;