"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

const RitualItemsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  // Categories with slugs for routing
  const categories = [
    {
      id: 1,
      name: 'Varmala',
      slug: 'varmala',
      image: 'https://i.pinimg.com/736x/6c/13/6f/6c136f7850f189402728248a187329a9.jpg'
    },
    {
      id: 2,
      name: 'Coconut',
      slug: 'coconut',
      image: 'https://i.pinimg.com/736x/2a/cc/52/2acc525707c24e2216dd4520699cab6f.jpg'
    },
    {
      id: 3,
      name: 'Raksha Sutra / Kalawa',
      slug: 'raksha-sutra-kalawa',
      image: 'https://i.pinimg.com/1200x/a6/a7/d4/a6a7d47c55a535b6c3a42f4bd208a5ff.jpg'
    },
    {
      id: 4,
      name: 'Puja Thali',
      slug: 'puja-thali',
      image: 'https://i.pinimg.com/1200x/2f/40/e5/2f40e58cffd6ee59a97e36c25dbcfa5c.jpg'
    },
    {
      id: 5,
      name: 'Haldi/Ubtan Items',
      slug: 'haldi-ubtan-items',
      image: 'https://i.pinimg.com/736x/c0/0f/35/c00f357bccc9f3f0ce9579784cea11c9.jpg'
    },
    {
      id: 6,
      name: "Groom's Kalgi",
      slug: 'groom-kalgi',
      image: 'https://i.pinimg.com/1200x/5d/c7/c9/5dc7c9470ca0b3bd5730e3995f294ba8.jpg'
    },
    {
      id: 7,
      name: 'Gift Saree/Lehenga for Bride',
      slug: 'gift-saree-lehenga',
      image: 'https://i.pinimg.com/736x/6c/0d/08/6c0d08d91af31f85f5336555f92d7209.jpg'
    },
    {
      id: 8,
      name: 'Tilak Plate Items',
      slug: 'tilak-plate-items',
      image: 'https://i.pinimg.com/736x/87/ae/3c/87ae3c2b59cf53ea4a045259daf546a7.jpg'
    }
  ];

  // Fetch products from backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Fetch ritual items products (you can use category=ritual-items)
      const response = await fetch('http://localhost:5000/api/products?category=ritual-items');
      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    } finally {
      setLoading(false);
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      const newPosition = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Slim Banner */}
      <div className="relative h-[30vh] overflow-hidden group">
        {/* Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"></div>

        {/* Dynamic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-100/50 via-transparent to-transparent" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDAgTCA2MCAwIEwgNjAgNjAgTCAwIDYwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QTU3NCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        {/* Content Container */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            {/* Animated Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-1.5 shadow-lg shadow-amber-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
                </span>
                <span className="text-xs text-amber-800 font-normal tracking-widest">
                  SACRED COLLECTION
                </span>
              </div>
            </div>

            {/* Title with Gradient */}
            <h1 className="text-4xl md:text-5xl font-medium uppercase text-gray-900 mb-3 leading-tight">
              Ritual Items
              <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-orange-600 mt-3 rounded-full mx-auto" />
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-amber-800/90 leading-relaxed max-w-lg mx-auto font-light">
              Sacred essentials for your special ceremonies
            </p>
          </div>
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"
          style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-2 uppercase">Our <span className='text-orange-600'>Collections</span></h2>
          <div className="w-20 h-1 bg-orange-600"></div>
        </div>

        {/* Sliding Categories - Now Clickable */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-amber-900" />
          </button>

          {/* Categories Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/groom/all-products?category=ritual-items&subCategory=${category.slug}`}
                className="shrink-0 w-72 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square bg-linear-to-br from-amber-50 to-orange-50">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-amber-700 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-amber-900" />
          </button>
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-amber-300 opacity-50"
            ></div>
          ))}
        </div>
      </div>

      {/* Featured Section - Now with Real Products */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl uppercase font-serif text-gray-800 mb-4">Featured <span className='text-orange-600'>Products</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked ritual items to make your ceremonies truly memorable
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-12">
              <Loader2 className="w-12 h-12 animate-spin text-amber-600" />
            </div>
          )}

          {/* Products Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.length === 0 ? (
                // Show category cards if no products yet
                categories.map((item) => (
                  <Link
                    key={item.id}
                    href={`/groom/all-products?category=ritual-items&subCategory=${item.slug}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                      <div className="aspect-square bg-linear-to-br from-amber-50 to-orange-50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-1 text-lg">{item.name}</h3>
                        <p className="text-ms text-gray-500">View Collection</p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                // Show actual products from database
                products.slice(0, 8).map((product) => (
                  <Link
                    key={product.id}
                    href={`/groom/product/${product.id}`}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                      <div className="aspect-square bg-linear-to-br from-amber-50 to-orange-50">
                        <img
                          src={
                            typeof product.images === 'string'
                              ? product.images.split(',')[0]
                              : product.images[0]
                          }
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400';
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-800 mb-1 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-amber-700 font-semibold">
                          ₹{product.price.toLocaleString()}
                        </p>
                        {product.mrp && product.mrp > product.price && (
                          <p className="text-xs text-gray-500 line-through">
                            ₹{product.mrp.toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          )}

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              href="/groom/all-products?category=ritual-items"
              className="inline-block px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View All Ritual Items
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RitualItemsPage;
