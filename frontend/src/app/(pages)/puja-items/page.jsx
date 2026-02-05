"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, Heart, Star, Loader2, ShoppingCart } from "lucide-react";

const CATEGORY_SLUG = "pujaitem";

export default function RitualsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [realProducts, setRealProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const backgroundImages = [
    "https://i.pinimg.com/1200x/90/81/2a/90812a4109da4b27973b02fb537ae36d.jpg",
    "https://i.pinimg.com/1200x/90/f2/e3/90f2e3f7502b1366710ed4744226b000.jpg",
    "https://i.pinimg.com/1200x/b6/39/29/b639290dd7cb75b85f71e469abc2e8eb.jpg",
    "https://i.pinimg.com/1200x/5f/8a/3c/5f8a3c8b2e4d9f7a6c5b4a3d2e1f0a9b.jpg",
    "https://i.pinimg.com/1200x/7d/9e/2f/7d9e2f3c4b5a6d7e8f9a0b1c2d3e4f5a.jpg",
  ];

  const galleryImages = [
    "https://i.pinimg.com/736x/1b/c1/8a/1bc18a213fe4b8b3103a7e70bc7503fb.jpg",
    "https://i.pinimg.com/1200x/2f/40/e5/2f40e58cffd6ee59a97e36c25dbcfa5c.jpg",
    "https://i.pinimg.com/736x/c6/91/b0/c691b0fcbb03aede0344764f7119ef51.jpg",
    "https://i.pinimg.com/1200x/3a/7b/4c/3a7b4c5d6e7f8a9b0c1d2e3f4a5b6c7d.jpg",
    "https://i.pinimg.com/1200x/8e/2f/9a/8e2f9a3b4c5d6e7f8a9b0c1d2e3f4a5b.jpg",
    "https://i.pinimg.com/736x/4d/5e/6f/4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a.jpg",
  ];

  const ritualTypes = [
    {
      title: "Hindu Rituals",
      icon: "🕉️",
      description: "Pandit services for all Hindu ceremonies and poojas",
      image: "https://i.pinimg.com/1200x/a1/b2/c3/a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6.jpg",
    },
    {
      title: "Islamic Rituals",
      icon: "☪️",
      description: "Maulvi services for Nikah and Islamic ceremonies",
      image: "https://i.pinimg.com/1200x/d4/e5/f6/d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9.jpg",
    },
    {
      title: "Sikh Rituals",
      icon: "☬",
      description: "Granthi services for Anand Karaj and Sikh traditions",
      image: "https://i.pinimg.com/1200x/b8/c9/d0/b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3.jpg",
    },
    {
      title: "Christian Rituals",
      icon: "✝️",
      description: "Father/Priest services for Christian weddings and blessings",
      image: "https://i.pinimg.com/1200x/e2/f3/a4/e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7.jpg",
    },
  ];

  const ritualServices = [
    {
      name: "Wedding Ceremonies",
      desc: "Complete wedding rituals with experienced priests",
      img: "https://i.pinimg.com/736x/f5/a6/b7/f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0.jpg",
    },
    {
      name: "Engagement Rituals",
      desc: "Traditional engagement ceremonies and ring exchange",
      img: "https://i.pinimg.com/1200x/c1/d2/e3/c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6.jpg",
    },
    {
      name: "Haldi & Mehndi",
      desc: "Pre-wedding rituals with authentic traditions",
      img: "https://i.pinimg.com/1200x/a9/b0/c1/a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4.jpg",
    },
    {
      name: "Sangeet Ceremony",
      desc: "Musical night with traditional blessings",
      img: "https://i.pinimg.com/736x/d8/e9/f0/d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3.jpg",
    },
    {
      name: "Griha Pravesh",
      desc: "Housewarming poojas and blessings",
      img: "https://i.pinimg.com/1200x/b4/c5/d6/b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9.jpg",
    },
    {
      name: "Naming Ceremony",
      desc: "Baby naming rituals and celebrations",
      img: "https://i.pinimg.com/736x/f0/a1/b2/f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5.jpg",
    },
  ];

  // Fetch real products from database
  useEffect(() => {
    setFadeIn(true);
    fetchRealProducts();
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const fetchRealProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/products?category=pujaitem"
      );
      const data = await response.json();

      if (data.success) {
        setRealProducts(data.products);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const formatINR = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // URL for "View More" - Goes to all products list page
  const ALL_PRODUCTS_URL = "/accessories/all-products?category=pujaitem";

  const goToPrevious = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  return (
    <div className="w-full bg-linear-to-b from-rose-50 via-white to-rose-100 overflow-hidden">
      {/* ======= Hero / Carousel Section ======= */}
      <div className="relative w-full h-[500px] overflow-hidden mx-auto my-14 max-w-7xl rounded-3xl shadow-2xl">
        {/* Background Images */}
        <div className="absolute inset-0 rounded-3xl">
          {backgroundImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[1500ms] rounded-3xl ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-linear(rgba(0,0,0,0.55), rgba(0,0,0,0.45)), url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(1.1) contrast(1.1)",
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-rose-500 text-gray-800 hover:text-white rounded-full p-3 transition-all duration-300 shadow-xl"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-rose-500 text-gray-800 hover:text-white rounded-full p-3 transition-all duration-300 shadow-xl"
        >
          <ChevronRight size={28} />
        </button>

        {/* Text Content */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-[0_5px_8px_rgba(0,0,0,0.6)] leading-tight">
            Rituals Made Easy with{" "}
            <span className="text-rose-300">ShaadiBazaar</span> 🌸
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 drop-shadow-md leading-relaxed font-light">
            From <b>Pandit</b> to <b>Maulvi</b>, <b>Sikh Granthi</b> to
            <b> Father</b> — we bring every sacred tradition together. Connect
            with the right spiritual guide and get all your ritual essentials in
            one divine place.
          </p>

          <a
            href="/rituals"
            className="inline-block px-10 py-4 bg-white text-rose-500 font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Explore Rituals →
          </a>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 w-3 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ======= Puja Items Products Section ======= */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-semibold text-rose-500 mb-4">
              Sacred Puja Items
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Authentic pooja samagri and devotional products for your spiritual needs
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchRealProducts}
                className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {realProducts.map((product) => {
                  const images = Array.isArray(product.images)
                    ? product.images
                    : JSON.parse(product.images || "[]");
                  const mainImage = images[0] || "/placeholder.jpg";

                  return (
                    <Link
                      key={product.id}
                      href={`/accessories/all-products/${product.id}`}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative h-64 bg-gray-50 overflow-hidden">
                        {product.featured && (
                          <span className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase z-10">
                            FEATURED
                          </span>
                        )}
                        <img
                          src={mainImage}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = "/placeholder.jpg";
                          }}
                        />
                        
                        {/* Hover Action Buttons */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(product.id);
                            }}
                            className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                favorites.includes(product.id)
                                  ? "text-rose-500 fill-rose-500"
                                  : ""
                              }`}
                            />
                          </button>
                          <button
                            onClick={(e) => e.preventDefault()}
                            className="bg-white p-3 rounded-full shadow-lg hover:bg-rose-500 hover:text-white transition-colors"
                            aria-label="Add to cart"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[56px]">
                          {product.name}
                        </h4>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          <Star size={16} className="text-amber-400 fill-amber-400" />
                          <span className="text-sm text-gray-600">
                            ({product.rating || "4.8"})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-rose-500">
                            {formatINR(product.price)}
                          </span>
                          {product.mrp && product.mrp > product.price && (
                            <>
                              <span className="text-sm text-gray-400 line-through">
                                {formatINR(product.mrp)}
                              </span>
                              <span className="text-sm text-red-500 font-medium">
                                -{product.discount}%
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* View More Button */}
              <div className="flex justify-center mt-12">
                <Link href={ALL_PRODUCTS_URL}>
                  <button className="px-10 py-4 bg-rose-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-rose-600 transition-all duration-300 transform hover:scale-105">
                    View More Puja Items →
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ======= Ritual Services Section ======= */}
      <div className="bg-linear-to-r from-rose-100 via-pink-50 to-rose-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-semibold text-rose-500 mb-4">
              Complete Ritual Services
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From engagement to wedding and beyond — we've got every ceremony covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ritualServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.img})`,
                  }}
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <button className="text-rose-500 font-semibold hover:text-rose-600 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======= Gallery Section ======= */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-center text-4xl md:text-5xl font-semibold text-rose-500 mb-14">
          Explore Our Sacred Moments
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative h-[480px] rounded-2xl overflow-hidden shadow-xl transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
                fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${(idx + 1) * 150}ms`,
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${img})`,
                  filter: "brightness(1.05) contrast(1.1)",
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-rose-800/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-semibold text-xl drop-shadow-lg tracking-wide">
                  {[
                    "Sacred Moments",
                    "Spiritual Connection",
                    "Joyful Celebrations",
                    "Divine Blessings",
                    "Traditional Elegance",
                    "Holy Ceremonies",
                  ][idx]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Why Choose Us Section ======= */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-semibold text-rose-500 mb-4">
              Why Choose ShaadiBazaar?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted partner for authentic spiritual ceremonies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-rose-500" size={40} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Verified Priests
              </h4>
              <p className="text-gray-600 leading-relaxed">
                All our spiritual guides are experienced, verified, and knowledgeable in their respective traditions
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-rose-500" size={40} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Personalized Service
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Customized rituals tailored to your family traditions and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="text-rose-500" size={40} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                Complete Package
              </h4>
              <p className="text-gray-600 leading-relaxed">
                From ritual items to priest services — everything you need in one place
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======= CTA Section ======= */}
      <div className="bg-linear-to-r from-rose-500 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Plan Your Sacred Ceremony?
          </h3>
          <p className="text-white/90 text-lg mb-10 leading-relaxed">
            Connect with experienced spiritual guides and make your rituals memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-ritual"
              className="inline-block px-10 py-4 bg-white text-rose-500 font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </a>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-rose-500 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
