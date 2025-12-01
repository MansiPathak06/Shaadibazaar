"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Search, User, Menu, ChevronRight, ChevronLeft } from 'lucide-react';

export default function MakeupHairPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerSlides = [
    {
      title: "Premium Hair Extensions",
      subtitle: "Transform Your Look Instantly",
      description: "Get salon-quality hair extensions with natural shine and perfect blend",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&h=400&fit=crop"
    },
    {
      title: "Elegant Bun Accessories",
      subtitle: "Traditional Meets Modern",
      description: "Beautiful gajras, pins and accessories for every occasion",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=400&fit=crop"
    },
    {
      title: "Stunning Nail Art",
      subtitle: "Express Your Style",
      description: "Complete nail art kits and extensions for perfect manicures",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&h=400&fit=crop"
    },
    {
      title: "Long-Lasting Makeup",
      subtitle: "Stay Perfect All Day",
      description: "Professional setting sprays that keep your makeup flawless",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=400&fit=crop"
    }
  ];

  const categories = [
    { 
      name: 'Hair Extensions', 
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=300&h=300&fit=crop',
      productCount: 24
    },
    { 
      name: 'Bun Accessories', 
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&h=300&fit=crop',
      productCount: 36
    },
    { 
      name: 'Hair Tiara', 
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop',
      productCount: 18
    },
    { 
      name: 'Makeup Setting Spray', 
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop',
      productCount: 12
    },
    { 
      name: 'Nail Extensions', 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&h=300&fit=crop',
      productCount: 28
    },
    { 
      name: 'Nail Art Kit', 
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=300&h=300&fit=crop',
      productCount: 15
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const products = [
    // Hair Extensions
    { id: 1, name: 'Clip-In Hair Extensions', category: 'extensions', price: 1299, rating: 4.8, reviews: 234, badge: 'NEW', image: '🦰' },
    { id: 2, name: 'Tape-In Hair Extensions', category: 'extensions', price: 1599, rating: 4.9, reviews: 189, badge: 'BESTSELLER', image: '🦰' },
    { id: 3, name: 'Natural Wavy Extensions', category: 'extensions', price: 1399, rating: 4.7, reviews: 156, image: '🦰' },
    { id: 4, name: 'Curly Hair Extensions', category: 'extensions', price: 1499, rating: 4.6, reviews: 142, image: '🦰' },
    
    // Bun Accessories
    { id: 5, name: 'Floral Gajra Set', category: 'bun', price: 299, rating: 4.9, reviews: 456, badge: 'BESTSELLER', image: '🌺' },
    { id: 6, name: 'Pearl Juda Pins', category: 'bun', price: 399, rating: 4.8, reviews: 234, badge: 'NEW', image: '📍' },
    { id: 7, name: 'Crystal Hair Pins', category: 'bun', price: 349, rating: 4.7, reviews: 198, image: '💎' },
    { id: 8, name: 'Traditional Gajra', category: 'bun', price: 249, rating: 4.9, reviews: 567, image: '🌸' },
    
    // Hair Tiara
    { id: 9, name: 'Royal Crown Tiara', category: 'tiara', price: 899, rating: 4.9, reviews: 123, badge: 'PREMIUM', image: '👑' },
    { id: 10, name: 'Crystal Juda Pin', category: 'tiara', price: 699, rating: 4.8, reviews: 178, image: '✨' },
    { id: 11, name: 'Bridal Hair Tiara', category: 'tiara', price: 1099, rating: 5.0, reviews: 89, badge: 'NEW', image: '👑' },
    { id: 12, name: 'Pearl Juda Stick', category: 'tiara', price: 599, rating: 4.7, reviews: 156, image: '📍' },
    
    // Setting Spray
    { id: 13, name: 'Long-Lasting Setting Spray', category: 'spray', price: 599, rating: 4.8, reviews: 345, badge: 'BESTSELLER', image: '💦' },
    { id: 14, name: 'Matte Finish Spray', category: 'spray', price: 549, rating: 4.7, reviews: 289, image: '💦' },
    { id: 15, name: 'Dewy Setting Spray', category: 'spray', price: 649, rating: 4.9, reviews: 412, badge: 'NEW', image: '✨' },
    { id: 16, name: 'All Day Hold Spray', category: 'spray', price: 699, rating: 4.8, reviews: 267, image: '💦' },
    
    // Nail Extensions
    { id: 17, name: 'French Tip Extensions', category: 'nails', price: 399, rating: 4.7, reviews: 234, badge: 'NEW', image: '💅' },
    { id: 18, name: 'Glitter Nail Extensions', category: 'nails', price: 449, rating: 4.8, reviews: 198, image: '✨' },
    { id: 19, name: 'Ombre Nail Set', category: 'nails', price: 499, rating: 4.9, reviews: 312, badge: 'BESTSELLER', image: '💅' },
    { id: 20, name: 'Stiletto Extensions', category: 'nails', price: 549, rating: 4.6, reviews: 167, image: '💅' },
    
    // Nail Art Kit
    { id: 21, name: 'Complete Nail Art Kit', category: 'nailart', price: 899, rating: 4.9, reviews: 423, badge: 'BESTSELLER', image: '🎨' },
    { id: 22, name: 'Gel Polish Set', category: 'nailart', price: 799, rating: 4.8, reviews: 356, badge: 'NEW', image: '💅' },
    { id: 23, name: 'Nail Stamping Kit', category: 'nailart', price: 699, rating: 4.7, reviews: 289, image: '🖌️' },
    { id: 24, name: 'Rhinestone Kit', category: 'nailart', price: 599, rating: 4.8, reviews: 445, image: '💎' }
  ];

  const filterProducts = () => {
    if (activeTab === 'all') return products;
    return products.filter(p => p.category === activeTab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      

      {/* Hero Slider Section */}
      <section className="relative h-70 overflow-hidden bg-gray-900">
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-2xl">
                  <div className="inline-block bg-red-800 text-white px-4 py-1 rounded-full text-sm mb-4">
                    TOP TRENDS
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-white mb-2 font-semibold">
                    {slide.subtitle}
                  </p>
                  <p className="text-gray-200 mb-6">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-red-800 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all">
                      Shop Now
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-16 max-w-7xl mx-auto px-8">
        <h3 className="text-4xl font-bold text-center mb-12">Shop By Category</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="group cursor-pointer"
            >
              <div className="relative rounded-full w-32 h-32 mx-auto overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <p className="text-center mt-4 font-semibold text-gray-700 group-hover:text-pink-500 transition-colors">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-4xl font-bold text-center mb-4">Explore Our Collections</h3>
          <p className="text-center text-gray-600 mb-12">Click on any category to view all products</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <div 
                key={idx}
                className="group bg-white border-2 border-red-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white text-2xl font-bold mb-1">{category.name}</h4>
                    <p className="text-white/80 text-sm">{category.productCount} Products Available</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Discover our premium collection of {category.name.toLowerCase()} with the best quality and prices.
                  </p>
                  <button className="w-full bg-red-800 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                    View All Products
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Explore All Collection Button */}
      <section className="py-20 bg-red-800">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h3>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Explore our complete collection of premium hair accessories, nail essentials, and beauty products
          </p>
          <button className="bg-white text-red-800 px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all transform hover:scale-105 inline-flex items-center gap-2 group">
            Explore All Collection
            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">EMBEL</h4>
              <p className="text-gray-400 text-sm">Your trusted destination for premium beauty and hair accessories.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400">Contact</a></li>
                <li><a href="#" className="hover:text-pink-400">FAQs</a></li>
                <li><a href="#" className="hover:text-pink-400">Shipping Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Categories</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400">Hair Extensions</a></li>
                <li><a href="#" className="hover:text-pink-400">Bun Accessories</a></li>
                <li><a href="#" className="hover:text-pink-400">Nail Products</a></li>
                <li><a href="#" className="hover:text-pink-400">Setting Sprays</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 rounded-full text-gray-900"
                />
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-full hover:shadow-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 EMBEL. All rights reserved. Made with 💖</p>
          </div>
        </div>
      </footer>
    </div>
  );
}