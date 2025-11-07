'use client'

import { useState } from 'react'
import { Twitter, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { Fragment } from 'react';



export default function WatchesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <WatchHero />
      <PremiumWatchSection />
      <WatchCollectionGrid />
      <BestSellers />
      <WatchBrandsGrid />
      <Sellers />
    </div>
  )
}



function WatchHero() {
  return (
    <div className=" bg-neutral-900 text-white relative overflow-hidden font-sans">
      {/* Background texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 to-neutral-950/50"></div>




      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left content */}
          <div className="space-y-8">
            <div>
              <p className="text-neutral-400 text-xs tracking-[0.3em] mb-6 font-light">MICHAEL KORS</p>
              <h1 className="text-8xl lg:text-9xl font-black leading-[0.8] mb-0 tracking-tight">
                BLAKE
              </h1>
              <h2 className="text-3xl lg:text-4xl font-thin tracking-[0.2em] text-neutral-300 mt-2">
                BLACK TONE
              </h2>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-lg text-sm font-light">
              Introducing the Blake, a slim classic watch that rounds out your everyday look. Featuring a black sunray dial with Roman numerals, this timepiece combines minimalist display & standard with embraced modern luxury design.
            </p>

            {/* Social icons */}
            <div className="flex gap-6 pt-8">
              <button className="w-10 h-10 border border-neutral-600 hover:border-white flex items-center justify-center transition-colors group">
                <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <button className="w-10 h-10 border border-neutral-600 hover:border-white flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
              <button className="w-10 h-10 border border-neutral-600 hover:border-white flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right content - Watch image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761897780/main_image_ov6seq.png"
                alt="Michael Kors Blake Black Tone Watch"
                className="w-full max-w-lg h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 rotate-300"
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore section at bottom */}
      <div className="absolute bottom-12 left-0 right-0 z-10">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="flex items-center justify-center gap-8">
            <div className="h-px bg-neutral-700 flex-1 max-w-32"></div>
            <div className="flex flex-col items-center gap-3">
              <span className="text-neutral-400 text-xs tracking-[0.3em] font-light">Explore</span>
              <ChevronDown className="w-4 h-4 text-neutral-400 animate-bounce" />
            </div>
            <div className="h-px bg-neutral-700 flex-1 max-w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PremiumWatchSection() {
  const products = [
    {
      id: 1,
      name: 'ASHEZ',
      subtitle: 'The Minimalist',
      price: '$295',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895591/image1_yhmi3e.jpg'
    },
    {
      id: 2,
      name: 'MANARO',
      subtitle: 'The Classic',
      price: '$450',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895591/image2_qigpbp.jpg'
    },
    {
      id: 3,
      name: 'BLING',
      subtitle: 'The Elegant',
      price: '$599',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895591/image3_gclaxe.jpg'
    },
    {
      id: 4,
      name: 'MANARO',
      subtitle: 'The Classic',
      price: '$450',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895591/image4_bawcw1.jpg'
    }
  ];

  return (
    <div>
      {/* Trending Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading */}


        <div className="text-center mb-16">
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">discover</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-800 tracking-tight uppercase">
            trending <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>products</span>
          </h2>
        </div>



        {/* Products Grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Fixed aspect ratio container with perfect image fitting */}
              <div className="bg-neutral-50 rounded-lg overflow-hidden mb-6 aspect-square relative group-hover:bg-neutral-100 transition-colors">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-3xl font-light tracking-[0.15em] text-neutral-800 uppercase">{product.name}</h3>
                <p className="text-lg text-neutral-500 font-light tracking-wide">{product.subtitle}</p>
                <p className="text-xl font-medium text-neutral-900 pt-1 tracking-wide">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metropolitan Moods Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image5_vsahvh.jpg"
                  alt="Metropolitan moods watch"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
              <div>
                <p className="text-neutral-400 text-xs tracking-widest uppercase mb-3">
                  RECENT STORY
                </p>
                <p className="text-sm text-neutral-500 mb-6">
                  Exploring new luxury living
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-neutral-800 leading-tight">
                  Metropolitan<br /><span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>moods</span>
                </h2>
              </div>

              <button className="inline-block px-8 py-3 border border-neutral-300 text-neutral-700 text-sm tracking-widest uppercase hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all">
                Discover
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function WatchCollectionGrid() {
  const collections = [
    {
      id: 1,
      title: 'Perfection',
      subtitle: 'Shop the latest watches',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895592/image6_sc9zxk.jpg',
      height: 'medium'
    },
    {
      id: 2,
      title: 'Gold Collection',
      subtitle: 'Luxury timepieces',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895792/gold_collection_watches_ikpkie.jpg',
      height: 'tall'
    },
    {
      id: 3,
      title: 'Crafts manship',
      subtitle: 'Handcrafted excellence',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895896/Crafts_manship_watches_jegoiu.jpg',
      height: 'extra-tall'
    },
    {
      id: 4,
      title: 'Latest',
      subtitle: 'New arrivals collection',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895594/image16_jcogef.jpg',
      height: 'tall'
    },
    {
      id: 5,
      title: 'Pieces',
      subtitle: 'Timeless designs',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image14_xwwx1w.avif',
      height: 'medium'
    }
  ];

  const getHeightClass = (height) => {
    switch (height) {
      case 'short':
        return 'h-48 md:h-56'; // Shorter cards for variety
      case 'medium':
        return 'h-64 md:h-80'; // Standard medium height
      case 'tall':
        return 'h-80 md:h-[450px]'; // Taller for featured content
      case 'extra-tall':
        return 'h-96 md:h-[550px]'; // Extra height for hero images
      case 'compact':
        return 'h-40 md:h-48'; // Very compact cards
      default:
        return 'h-64 md:h-72'; // Default balanced height
    }
  };

  return (
    <div className="bg-neutral-50 my-24">


      <div className="text-center mb-16">
        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">best sellers</p>
        <h2 className="text-4xl md:text-6xl font-light text-neutral-800 tracking-tight uppercase">
          combined <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>collection</span>
        </h2>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className={`relative group cursor-pointer overflow-hidden rounded-lg ${getHeightClass(collection.height)}`}
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-wider uppercase mb-1 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                  {collection.title}
                </h3>
                <p className="text-white/80 text-xs md:text-sm tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {collection.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WatchBrandsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const brands = [
    {
      name: "Rolex",
      description: "Crown of watchmaking excellence",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895968/rolex_u2dpsh.jpg",
      textShadow: "drop-shadow-lg"
    },
    {
      name: "Patek Philippe",
      description: "Timeless Swiss perfection",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image10_xsin1f.jpg",
      textShadow: "drop-shadow-lg"
    },
    {
      name: "Omega",
      description: "Precision since 1848",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image12_xnyy2s.avif",
      textShadow: "drop-shadow-lg"
    },
    {
      name: "Audemars Piguet",
      description: "Royal Oak innovation",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895592/image6_sc9zxk.jpg",
      textShadow: "drop-shadow-lg"
    },
    {
      name: "Breitling",
      description: "Aviation heritage precision",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895591/image3_gclaxe.jpg",
      textShadow: "drop-shadow-lg"
    },
    {
      name: "TAG Heuer",
      description: "Swiss avant-garde craftsmanship",
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image17_vxzwgl.jpg",
      textShadow: "drop-shadow-lg"
    }
  ];

  return (
    <div className="bg-linear-to-br from-neutral-50 to-neutral-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">your choice</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-800 tracking-tight uppercase">
            watch <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group aspect-square rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-2 flex flex-col items-center justify-center p-8 cursor-pointer relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Watch image as img element - starts blurred, clears on hover */}
              <img
                src={brand.image}
                alt={brand.name}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${hoveredIndex === index ? 'blur-none scale-105' : 'blur-md scale-100'
                  }`}
              />

              {/* Enhanced dark overlay for better text readability */}
              <div
                className={`absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent transition-all duration-700 ease-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-60'
                  }`}
              />

              {/* Subtle glow effect on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-r from-white/5 via-white/10 to-white/5 transition-all duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
              />

              {/* Text content with enhanced styling */}
              <div className="relative z-10 text-center flex flex-col justify-end h-full transform transition-all duration-500">
                <h4
                  className={`text-3xl font-semibold text-white mb-4 ${brand.textShadow} transition-all duration-500 ${hoveredIndex === index ? 'transform -translate-y-1' : ''
                    }`}
                >
                  {brand.name}
                </h4>
                <p
                  className={`text-lg text-neutral-200 leading-relaxed ${brand.textShadow} transition-all duration-500 delay-100 ${hoveredIndex === index ? 'transform translate-y-1 opacity-100' : 'opacity-90'
                    }`}
                >
                  {brand.description}
                </p>

                {/* Premium indicator that appears on hover */}
                <div
                  className={`mt-4 transition-all duration-500 delay-200 ${hoveredIndex === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                    }`}
                >
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30">
                    Premium Collection
                  </span>
                </div>
              </div>

              {/* Corner accent for premium feel */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-full opacity-80"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Expedition Premier Black",
      price: 540.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image13_lpoi6c.avif",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "The Fragnance of Capricorn Staff",
      price: 83.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image12_xnyy2s.avif",
      rating: 4,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 3,
      name: "The Cosmos Genuine Leather Mascle Tons",
      price: 97.00,
      originalPrice: 125.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image5_vsahvh.jpg",
      rating: 5,
      badge: "Sale",
      badgeColor: "bg-green-500"
    },
    {
      id: 4,
      name: "The Cosmos Genuine Leather Mascle Tons",
      price: 97.00,
      originalPrice: 125.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895591/image1_yhmi3e.jpg",
      rating: 5,
      badge: "Sale",
      badgeColor: "bg-green-500"
    },
    {
      id: 5,
      name: "The Cosmos Genuine Leather Mascle Tons",
      price: 97.00,
      originalPrice: 125.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895598/image20_k89pji.jpg",
      rating: 5,
      badge: "Sale",
      badgeColor: "bg-green-500"
    },
    {
      id: 6,
      name: "The Cosmos Genuine Leather Mascle Tons",
      price: 97.00,
      originalPrice: 125.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895594/image15_iruqxw.jpg",
      rating: 5,
      badge: "Sale",
      badgeColor: "bg-green-500"
    },
    {
      id: 7,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896203/Rose_Gold_Bracelet_s8otri.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 8,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896275/bracelet_watch_zcjxri.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'
              }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}


        <div className="text-center mb-16">
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">royal precision</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-800 tracking-tight uppercase">
            groom's <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>collection</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-neutral-50 rounded-lg overflow-hidden mb-4 aspect-square">
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded z-10`}>
                  {product.badge}
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                {/* Rating */}
                <StarRating rating={product.rating} />

                {/* Product Name */}
                <h3 className="text-neutral-700 text-sm mb-2 px-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg font-bold text-neutral-800">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Fragment>
        <div className='flex justify-center py-12'>
          <button
            className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
          >
            {/* Background slide effect */}
            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

            {/* Button text */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </Fragment>
    </div>
  );
}

function Sellers() {
  const products = [
    {
      id: 1,
      name: "Expedition Premier Black",
      price: 540.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895594/image16_jcogef.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "Premium Watches",
      price: 83.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896824/premium_watch_pukwcw.jpg",
      rating: 4,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 3,
      name: "The Cosmos Genuine Leather Mascle Tons",
      price: 97.00,
      originalPrice: 125.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895593/image17_vxzwgl.jpg",
      rating: 5,
      badge: "Sale",
      badgeColor: "bg-green-500"
    },
    {
      id: 4,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896275/bracelet_watch_zcjxri.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 5,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896275/bracelet_watch_zcjxri.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 6,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896203/Rose_Gold_Bracelet_s8otri.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 7,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761895792/gold_collection_watches_ikpkie.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    },
    {
      id: 8,
      name: "Asymmetric Rose Gold Bracelet",
      price: 257.00,
      image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761896275/bracelet_watch_zcjxri.jpg",
      rating: 5,
      badge: "Hot",
      badgeColor: "bg-red-500"
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'
              }`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}




        <div className="text-center mb-16 mt-6">
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">radiant moments</p>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-800 tracking-tight uppercase">
            bride's <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>collection</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-neutral-50 rounded-lg overflow-hidden mb-4 aspect-square">
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded z-10`}>
                  {product.badge}
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                {/* Rating */}
                <StarRating rating={product.rating} />

                {/* Product Name */}
                <h3 className="text-neutral-700 text-sm mb-2 px-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg font-bold text-neutral-800">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Fragment>
        <div className='flex justify-center py-12'>
          <button
            className="group relative px-10 py-4 bg-neutral-900 cursor-pointer text-white font-light text-base tracking-widest uppercase overflow-hidden transition-all duration-500 border-2 border-neutral-900"
          >
            {/* Background slide effect */}
            <div className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />

            {/* Button text */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white">
              View More Products
              <svg
                className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </Fragment>
      </div>
    </div>
  );
}

