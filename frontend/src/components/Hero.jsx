'use client'


import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Sparkles, Camera, Video, Music, Calendar, Palette, Heart, Star, Gift, Cake, Mail, Flower2, Shirt, Gem, Utensils, ArrowRight } from 'lucide-react';


export default function ModernWeddingGate() {
  const [gatesOpen, setGatesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
   const [hoveredItem, setHoveredItem] = useState(null);


  useEffect(() => {
    setIsMounted(true);
  }, []);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const openGates = () => {
    setGatesOpen(true);
  };

  const handleItemClick = (type, index) => {
    setActiveItem(`${type}-${index}`);
    setTimeout(() => {
      setActiveItem(null);
    }, 400);
  };


  const products = [
    {
      icon: Gem,
      title: 'Wedding Rings',
      desc: 'Elegant wedding bands crafted with precision',
      linear: 'from-rose-400 to-pink-600',
      href: '/products/wedding-rings'
    },
    {
      icon: Shirt,
      title: 'Bridal Wear',
      desc: 'Stunning bridal collections to shine',
      linear: 'from-purple-400 to-pink-600',
      href: '/products/bridal-wear'
    },
    {
      icon: Flower2,
      title: 'Flower Arrangements',
      desc: 'Artistic bouquets for your love story',
      linear: 'from-green-400 to-emerald-600',
      href: '/products/flower-arrangements'
    },
    {
      icon: Cake,
      title: 'Wedding Cakes',
      desc: 'Luxurious designer cakes with flavors',
      linear: 'from-orange-400 to-red-600',
      href: '/products/wedding-cakes'
    },
    {
      icon: Mail,
      title: 'Invitations',
      desc: 'Bespoke cards blending tradition',
      linear: 'from-blue-400 to-indigo-600',
      href: '/products/invitations'
    },
    {
      icon: Gift,
      title: 'Party Favors',
      desc: 'Charming keepsakes to treasure',
      linear: 'from-yellow-400 to-orange-600',
      href: '/products/party-favors'
    },
  ];


  const services = [
    {
      icon: Camera,
      title: 'Photography',
      desc: 'Capture every smile with artistry',
      linear: 'from-cyan-400 to-blue-600',
      href: '/services/photography'
    },
    {
      icon: Video,
      title: 'Videography',
      desc: 'Cinematic storytelling for your event',
      linear: 'from-violet-400 to-purple-600',
      href: '/services/videography'
    },
    {
      icon: Music,
      title: 'Live Music',
      desc: 'Soulful melodies keeping enchanted',
      linear: 'from-pink-400 to-rose-600',
      href: '/services/live-music'
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      desc: 'Seamless coordination and designs',
      linear: 'from-indigo-400 to-blue-600',
      href: '/services/event-planning'
    },
    {
      icon: Utensils,
      title: 'Catering',
      desc: 'Gourmet delights with grace',
      linear: 'from-emerald-400 to-green-600',
      href: '/services/catering'
    },
    {
      icon: Palette,
      title: 'Beauty Services',
      desc: 'Transformative bridal magic',
      linear: 'from-fuchsia-400 to-pink-600',
      href: '/services/beauty'
    },
  ];


  const heartPositions = useMemo(() => {
    return Array.from({ length: isMobile ? 8 : 15 }).map(() => ({
      left: Math.random() * 100,
      top: 100 + Math.random() * 20,
      width: isMobile ? 15 + Math.random() * 20 : 20 + Math.random() * 30,
      animationDelay: Math.random() * 5,
      animationDuration: 10 + Math.random() * 10
    }));
  }, [isMobile]);


  const particlePositions = useMemo(() => {
    return Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => ({
      width: 2 + Math.random() * 4,
      background: i % 2 === 0 ? '#fda4af' : '#fbbf24',
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 5 + Math.random() * 10
    }));
  }, [isMobile]);


  const DiamondPattern = () => (
    <svg className="w-full h-full opacity-30" viewBox="0 0 400 800" preserveAspectRatio="none">
      <defs>
        <linearlinear id="diamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fda4af" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
        </linearlinear>
      </defs>
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const x = col * 60 + (row % 2 === 0 ? 30 : 0);
          const y = row * 68;
          return (
            <path
              key={`${row}-${col}`}
              d={`M ${x + 30},${y} L ${x + 52},${y + 34} L ${x + 30},${y + 68} L ${x + 8},${y + 34} Z`}
              fill="none"
              stroke="url(#diamondGrad)"
              strokeWidth="2"
              className="animate-pulse-slow"
            />
          );
        })
      )}
    </svg>
  );


  if (!isMounted) {
    return <div className="relative w-full h-screen bg-linear-to-br from-slate-950 via-rose-950 to-slate-900" />;
  }


  return (
    <div className="relative w-full h-screen overflow-hidden bg-linear-to-br from-slate-950 via-rose-950 to-slate-900" onClick={!gatesOpen ? openGates : undefined}>
      {/* Top Heading - Always Visible */}
      {/* <div className="absolute top-4 sm:top-6 md:top-10 left-0 right-0 z-50 text-center px-2 sm:px-4">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-linear-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-md border border-rose-400/30 rounded-full shadow-lg animate-glow">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-rose-300 animate-spin-slow" />
          <span className="text-rose-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
            Your Dream Wedding Awaits
          </span>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-rose-300 animate-pulse" />
        </div>
      </div> */}


      {/* Background Effects */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-linear(ellipse_at_center,rgba(244,114,182,0.15)_0%,transparent_70%)] animate-pulse-bg" />
      </div>


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heartPositions.map((pos, i) => (
          <Heart
            key={i}
            className="absolute text-rose-400/20 animate-float-hearts"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              width: `${pos.width}px`,
              height: `${pos.width}px`,
              animationDelay: `${pos.animationDelay}s`,
              animationDuration: `${pos.animationDuration}s`
            }}
          />
        ))}
      </div>


      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              width: `${pos.width}px`,
              height: `${pos.width}px`,
              background: `radial-linear(circle, ${pos.background}, transparent)`,
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${pos.animationDelay}s`,
              animationDuration: `${pos.animationDuration}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>


      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-grid-move" style={{
          backgroundImage: 'linear-linear(rgba(255,255,255,0.05) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: isMobile ? '30px 30px' : '50px 50px'
        }}></div>
      </div>


      {/* LEFT GATE - Products */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-20"
        style={{
          perspective: isMobile ? '1500px' : '2000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            transform: gatesOpen
              ? `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(${isMobile ? '-110deg' : '-120deg'})`
              : `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(0deg)`,
            boxShadow: gatesOpen ? '-30px 0 60px rgba(0,0,0,0.9)' : 'inset -10px 0 30px rgba(0,0,0,0.5)'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-rose-900/95 via-pink-900/95 to-rose-950/95 backdrop-blur-md border-r-2 border-rose-400/30 flex flex-col items-center justify-center px-3 sm:px-6 md:px-12">
            <div className="absolute inset-0">
              <DiamondPattern />
            </div>
            <div className="absolute inset-y-0 right-0 w-1 bg-linear-to-b from-transparent via-rose-300 to-transparent animate-pulse-slow"></div>


            {/* Door Handle - Left Gate */}
            <div className={`absolute top-1/2 right-2 sm:right-4 md:right-8 transform -translate-y-1/2 w-4 sm:w-5 md:w-8 h-12 sm:h-16 md:h-28 bg-linear-to-b from-rose-300 via-pink-400 to-rose-500 rounded-full border-2 border-rose-400/50 shadow-[0_0_20px_rgba(251,113,133,0.6)] animate-glow-pulse`}>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 md:w-5 h-2 sm:h-3 md:h-5 bg-rose-400 rounded-full shadow-inner`}></div>
            </div>


            {/* Products Content on Gate */}
            <div className="relative z-10 text-center space-y-2 sm:space-y-4 md:space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-linear-to-br from-rose-400 to-pink-600 rounded-full shadow-2xl mb-2 sm:mb-4 animate-pulse">
                <Gem className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight px-2">
                Discover Products
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-rose-200 max-w-[200px] sm:max-w-xs md:max-w-sm mx-auto leading-relaxed px-2">
                Explore our finest creations crafted with love and precision
              </p>
              <div className="pt-2 sm:pt-4 text-white/70 text-xs sm:text-sm animate-bounce">
                Click anywhere to explore ✨
              </div>
            </div>


            <div className={`absolute top-1/4 right-4 sm:right-8 md:right-16 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full bg-rose-400/20 blur-3xl animate-pulse-glow`}></div>
            <div className={`absolute bottom-1/4 right-4 sm:right-8 md:right-16 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-full bg-pink-400/15 blur-3xl animate-pulse-glow`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>


      {/* RIGHT GATE - Services */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-20"
        style={{
          perspective: isMobile ? '1500px' : '2000px',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            transformOrigin: 'right center',
            transformStyle: 'preserve-3d',
            transform: gatesOpen
              ? `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(${isMobile ? '110deg' : '120deg'})`
              : `perspective(${isMobile ? '1500px' : '2000px'}) rotateY(0deg)`,
            boxShadow: gatesOpen ? '30px 0 60px rgba(0,0,0,0.9)' : 'inset 10px 0 30px rgba(0,0,0,0.5)'
          }}
        >
          <div className="absolute inset-0 bg-linear-to-bl from-violet-900/95 via-purple-900/95 to-rose-950/95 backdrop-blur-md border-l-2 border-purple-400/30 flex flex-col items-center justify-center px-3 sm:px-6 md:px-12">
            <div className="absolute inset-0">
              <DiamondPattern />
            </div>
            <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-transparent via-purple-300 to-transparent animate-pulse-slow"></div>


            {/* Door Handle - Right Gate */}
            <div className={`absolute top-1/2 left-2 sm:left-4 md:left-8 transform -translate-y-1/2 w-4 sm:w-5 md:w-8 h-12 sm:h-16 md:h-28 bg-linear-to-b from-purple-300 via-fuchsia-400 to-purple-500 rounded-full border-2 border-purple-400/50 shadow-[0_0_20px_rgba(192,132,252,0.6)] animate-glow-pulse`}>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 md:w-5 h-2 sm:h-3 md:h-5 bg-purple-400 rounded-full shadow-inner`}></div>
            </div>


            {/* Services Content on Gate */}
            <div className="relative z-10 text-center space-y-2 sm:space-y-4 md:space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-linear-to-br from-violet-400 to-purple-600 rounded-full shadow-2xl mb-2 sm:mb-4 animate-pulse">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight px-2">
                Our Services
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-purple-200 max-w-[200px] sm:max-w-xs md:max-w-sm mx-auto leading-relaxed px-2">
                Professional solutions to make your special moments unforgettable
              </p>
              <div className="pt-2 sm:pt-4 text-white/70 text-xs sm:text-sm animate-bounce">
                Click anywhere to explore ✨
              </div>
            </div>


            <div className={`absolute top-1/4 left-4 sm:left-8 md:left-16 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full bg-purple-400/20 blur-3xl animate-pulse-glow`}></div>
            <div className={`absolute bottom-1/4 left-4 sm:left-8 md:left-16 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-full bg-violet-400/15 blur-3xl animate-pulse-glow`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>


      {/* Revealed Content - WITH ENHANCED HOVER AND CLICK ANIMATION */}
      {gatesOpen && (
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row">
          {/* Products Section - Left Side */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-linear-to-br from-rose-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-md flex items-center justify-center overflow-hidden border-r border-white/10">
            <div className="w-full h-full flex flex-col py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="text-center mb-4 sm:mb-6 md:mb-8 shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-linear-to-br from-rose-400 to-pink-600 rounded-full shadow-2xl mb-2 sm:mb-3 md:mb-4">
                  <Gem className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 drop-shadow-2xl">
                  Our Products
                </h3>
                <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 mx-auto bg-linear-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full shadow-lg mb-2 sm:mb-3"></div>
                <p className="text-rose-200/90 text-xs sm:text-sm md:text-base drop-shadow-md">
                  Curated collections for your perfect day
                </p>
              </div>

              <div className="flex-1 overflow-y-auto px-2">
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 max-w-md mx-auto pb-4">
                  {products.map((item, idx) => {
                    const IconComponent = item.icon;
                    const itemId = `product-${idx}`;
                    const isActive = activeItem === itemId;
                    const isHovered = hoveredItem === itemId;

                    return (
                      <li
                        key={idx}
                        className="transform transition-all duration-300"
                        style={{
                          animationDelay: `${idx * 80}ms`,
                          opacity: 1
                        }}
                      >
                        <button
                          onClick={() => handleItemClick('product', idx, item.href)}
                          onMouseEnter={() => setHoveredItem(itemId)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className={`group relative flex items-start gap-2 sm:gap-3 md:gap-4 text-white/90 hover:text-white transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/30 overflow-hidden w-full text-left ${isActive ? 'bg-white/15 border-rose-400/50' : ''
                            }`}
                        >
                          {/* Shine effect on hover */}
                          <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}>
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          </div>

                          <div className={`relative shrink-0 p-2 sm:p-2.5 md:p-3 bg-linear-to-br ${item.linear} rounded-lg sm:rounded-xl shadow-lg transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''
                            }`}>
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                          </div>

                          <div className="relative flex-1 min-w-0">
                            <h4 className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 sm:mb-1 relative truncate transition-colors duration-300 ${isHovered ? 'text-rose-200' : ''
                              }`}>
                              {item.title}
                              <span className={`absolute bottom-0 left-0 h-0.5 bg-rose-400 transition-all duration-500 ${isHovered ? 'w-full' : 'w-0'
                                }`}></span>
                            </h4>
                            <p className="text-xs sm:text-sm text-rose-200/70 line-clamp-2">{item.desc}</p>
                          </div>

                          {/* Arrow icon appears on hover */}
                          <ArrowRight className={`relative shrink-0 text-rose-300 transition-all duration-500 ${isHovered ? 'w-5 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-2'
                            }`} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>


          {/* Services Section - Right Side */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full bg-linear-to-br from-violet-500/10 via-purple-500/10 to-rose-500/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex flex-col py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="text-center mb-4 sm:mb-6 md:mb-8 shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-linear-to-br from-violet-400 to-purple-600 rounded-full shadow-2xl mb-2 sm:mb-3 md:mb-4 animate-bounce">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 animate-slide-down drop-shadow-2xl">
                  Our Services
                </h3>
                <div className="h-0.5 sm:h-1 w-16 sm:w-20 md:w-24 mx-auto bg-linear-to-r from-violet-400 via-purple-500 to-fuchsia-500 rounded-full animate-expand shadow-lg mb-2 sm:mb-3"></div>
                <p className="text-purple-200/90 text-xs sm:text-sm md:text-base drop-shadow-md">
                  Professional services to bring your vision to life
                </p>
              </div>


              <div className="flex-1 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
                <ul className="space-y-2 sm:space-y-3 md:space-y-4 max-w-md mx-auto pb-4">
                  {services.map((item, idx) => {
                    const IconComponent = item.icon;
                    const itemId = `service-${idx}`;
                    const isActive = activeItem === itemId;

                    return (
                      <li key={idx} style={{ animationDelay: `${idx * 80}ms` }} className="animate-slide-in-right opacity-0">
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            handleItemClick('service', idx);
                          }}
                          className={`group relative flex items-start gap-2 sm:gap-3 md:gap-4 text-white/90 hover:text-white transition-all duration-500 cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden ${isActive ? 'active-item' : ''
                            }`}
                        >
                          {/* Shine effect on hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer-slow"></div>
                          </div>


                          <div className={`relative shrink-0 p-2 sm:p-2.5 md:p-3 bg-linear-to-br ${item.linear} rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                          </div>

                          <div className="relative flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 sm:mb-1 relative group-hover:text-purple-200 truncate">
                              {item.title}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-500"></span>
                            </h4>
                            <p className="text-xs sm:text-sm text-purple-200/70 line-clamp-2">{item.desc}</p>
                          </div>


                          {/* Arrow icon appears on hover */}
                          <ArrowRight className="relative w-0 opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-500 text-purple-300 shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}


      <style jsx>{`
        @keyframes pulse-bg {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes expand {
          from { width: 0; opacity: 0; }
          to { width: 6rem; opacity: 1; }
        }
        @keyframes shimmer-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(251,113,133,0.6); }
          50% { box-shadow: 0 0 40px rgba(251,113,133,0.9), 0 0 60px rgba(251,113,133,0.5); }
        }
        @keyframes float-hearts {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, -20px); }
          75% { transform: translate(-10px, -10px); }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(251,113,133,0.4); }
          50% { box-shadow: 0 0 25px rgba(251,113,133,0.7); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes click-pop {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.2); }
          100% { transform: translateY(0) scale(1); }
        }


        .animate-pulse-bg { animation: pulse-bg 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out forwards; }
        .animate-expand { animation: expand 0.8s ease-out forwards; }
        .animate-shimmer-slow { animation: shimmer-slow 2.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-float-hearts { animation: float-hearts linear infinite; }
        .animate-float-particle { animation: float-particle ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }


        /* Click animation for active items */
        .active-item {
          animation: click-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
        }


        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        @media (min-width: 640px) {
          .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(244, 114, 182, 0.5); border-radius: 10px; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(244, 114, 182, 0.7); }
      `}</style>
    </div>
  );
}
