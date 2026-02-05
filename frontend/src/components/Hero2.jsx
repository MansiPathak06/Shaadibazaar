"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  Sparkles,
  Camera,
  Music,
  Calendar,
  Heart,
  Star,
  Mail,
  Shirt,
  Gem,
  Utensils,
  ArrowRight,
  User,
  Handbag,
  Footprints,
  Watch,
  Baby,
  Crown,
  Hotel, 
  MapPin,
  X,
} from "lucide-react";

export default function ModernWeddingGate() {
  const [gatesOpen, setGatesOpen] = useState(false);
  const [selectedGate, setSelectedGate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const leftGateRef = useRef(null);
  const rightGateRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openGates = (gateType) => {
    setGatesOpen(true);
    setSelectedGate(gateType);

    // GSAP animation for main gates
    if (gateType === "products" && leftGateRef.current) {
      gsap.to(leftGateRef.current, {
        rotationY: isMobile ? -110 : -120,
        duration: 1.2,
        ease: "power2.out",
        transformPerspective: isMobile ? 1500 : 2000,
        transformOrigin: "left center",
      });
    } else if (gateType === "services" && rightGateRef.current) {
      gsap.to(rightGateRef.current, {
        rotationY: isMobile ? 110 : 120,
        duration: 1.2,
        ease: "power2.out",
        transformPerspective: isMobile ? 1500 : 2000,
        transformOrigin: "right center",
      });
    }
  };

  const closeGates = () => {
    // GSAP animation to close gates
    if (selectedGate === "products" && leftGateRef.current) {
      gsap.to(leftGateRef.current, {
        rotationY: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setGatesOpen(false);
          setSelectedGate(null);
          setOpenCardIndex(null);
        },
      });
    } else if (selectedGate === "services" && rightGateRef.current) {
      gsap.to(rightGateRef.current, {
        rotationY: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setGatesOpen(false);
          setSelectedGate(null);
          setOpenCardIndex(null);
        },
      });
    }
  };

  const products = [
    {
      icon: Gem,
      title: "Jewellery",
      desc: "Exquisite handcrafted wedding jewellery that elevates your elegance.",
      linear: "from-rose-400 to-pink-600",
      href: "/accessories/jewellery",
    },
    {
      icon: Shirt,
      title: "Bridal Wear",
      desc: "Graceful bridal ensembles that capture timeless beauty and charm.",
      linear: "from-purple-400 to-pink-500",
      href: "/outfits/bridalwear",
    },
    {
      icon: User,
      title: "Groom Wear",
      desc: "Stylish groom collections tailored for sophistication and comfort.",
      linear: "from-indigo-400 to-blue-600",
      href: "/outfits/groomwear",
    },
    {
      icon: Handbag,
      title: "Bags & Purses",
      desc: "Designer handbags and clutches to complement your wedding look.",
      linear: "from-emerald-400 to-green-600",
      href: "/accessories/bags",
    },
    {
      icon: Sparkles,
      title: "Puja Items",
      desc: "Authentic and elegant puja essentials for auspicious beginnings.",
      linear: "from-amber-400 to-orange-600",
      href: "/puja-items",
    },
    {
      icon: Mail,
      title: "Wedding Cards",
      desc: "Custom wedding invitations that beautifully tell your love story.",
      linear: "from-sky-400 to-indigo-600",
      href: "/cateringanddecor/weddingcards",
    },
    {
      icon: Footprints,
      title: "Shoes",
      desc: "Trendy and comfortable wedding footwear for every celebration.",
      linear: "from-pink-400 to-rose-600",
      href: "/accessories/shoes",
    },
    {
      icon: Watch,
      title: "Watches",
      desc: "Elegant timepieces that blend tradition with modern style.",
      linear: "from-slate-400 to-gray-600",
      href: "/accessories/watches",
    },
    {
      icon: Baby,
      title: "Kids Outfits",
      desc: "Adorable kidswear collections perfect for weddings and festivities.",
      linear: "from-teal-400 to-cyan-600",
      href: "/outfits/kidsoutfits",
    },
    {
      icon: Crown,
      title: "Traditional Wear",
      desc: "Classic traditional outfits crafted to perfection for every occasion.",
      linear: "from-yellow-400 to-amber-600",
      href: "/outfits/traditionalwear",
    },
  ];

  const services = [
    {
      icon: Camera,
      title: "Photography",
      desc: "Capture timeless memories with cinematic precision and artistic flair.",
      linear: "from-cyan-400 to-blue-600",
      href: "/our-services",
    },
    {
      icon: Music,
      title: "Sound System",
      desc: "Elevate every moment with crystal-clear beats and soulful melodies.",
      linear: "from-pink-400 to-rose-600",
      href: "/cateringanddecor/lightning",
    },
    {
      icon: Calendar,
      title: "Event Planning",
      desc: "Flawless coordination, creative designs, and stress-free celebrations.",
      linear: "from-indigo-400 to-purple-600",
      href: "/eventplanning/weddingplanning",
    },
    {
      icon: Utensils,
      title: "Catering",
      desc: "Savor gourmet delights curated by top chefs for your special day.",
      linear: "from-emerald-400 to-green-600",
      href: "/cateringanddecor/weddingcatering",
    },
    {
      icon: Hotel,
      title: "Accommodation",
      desc: "Luxurious stays for guests with seamless comfort and hospitality.",
      linear: "from-amber-400 to-orange-600",
      href: "/accommodation/hotels",
    },
    {
      icon: Sparkles,
      title: "Beauty Services",
      desc: "Bridal transformations crafted with elegance, style, and grace.",
      linear: "from-fuchsia-400 to-pink-600",
      href: "/beautyandstyling/bridalmakeup",
    },
    {
      icon: MapPin,
      title: "Venue & Location",
      desc: "Discover dream destinations and perfect venues for your big day.",
      linear: "from-teal-400 to-cyan-600",
      href: "/eventplanning/destinationwedding",
    },
  ];

  const heartPositions = useMemo(() => {
    return Array.from({ length: isMobile ? 8 : 15 }).map(() => ({
      left: Math.random() * 100,
      top: 100 + Math.random() * 20,
      width: isMobile ? 15 + Math.random() * 20 : 20 + Math.random() * 30,
      animationDelay: Math.random() * 5,
      animationDuration: 10 + Math.random() * 10,
    }));
  }, [isMobile]);

  const particlePositions = useMemo(() => {
    return Array.from({ length: isMobile ? 10 : 20 }).map((_, i) => ({
      width: 2 + Math.random() * 4,
      background: i % 2 === 0 ? "#fda4af" : "#fbbf24",
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 5 + Math.random() * 10,
    }));
  }, [isMobile]);

  const DiamondPattern = () => (
    <svg
      className="w-full h-full opacity-30"
      viewBox="0 0 400 800"
      preserveAspectRatio="none"
    >
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
              d={`M ${x + 30},${y} L ${x + 52},${y + 34} L ${x + 30},${
                y + 68
              } L ${x + 8},${y + 34} Z`}
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

  // Double Door Card Component with GSAP
  const DoubleDoorCard = ({ item, index, type }) => {
    const cardId = `${type}-${index}`;
    const isOpen = openCardIndex === cardId;
    const IconComponent = item.icon;
    
    const leftDoorRef = useRef(null);
    const rightDoorRef = useRef(null);
    const contentRef = useRef(null);
    const buttonRef = useRef(null);
    const centerLineRef = useRef(null);

    useEffect(() => {
      if (isOpen) {
        // Open doors animation
        const tl = gsap.timeline();
        
        tl.to(leftDoorRef.current, {
          rotationY: -120,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "left center",
        }, 0)
        .to(rightDoorRef.current, {
          rotationY: 120,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "right center",
        }, 0)
        .to(buttonRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        }, 0)
        .to(centerLineRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power1.inOut",
        }, 0)
        .to(contentRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.2)",
        }, 0.5);
      } else {
        // Close doors animation
        const tl = gsap.timeline();
        
        tl.to(contentRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          ease: "power1.in",
        }, 0)
        .to([leftDoorRef.current, rightDoorRef.current], {
          rotationY: 0,
          duration: 0.8,
          ease: "power2.inOut",
        }, 0.2)
        .to(centerLineRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        }, 0.4)
        .to(buttonRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.inOut",
        }, 0.6);
      }
    }, [isOpen]);

    return (
      <div
        className="relative w-full h-72 sm:h-80 md:h-96"
        style={{ perspective: "1500px" }}
      >
        <div 
          className="relative w-full h-full"
          style={{ 
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left Door */}
          <div
            ref={leftDoorRef}
            onClick={() => setOpenCardIndex(isOpen ? null : cardId)}
            className="absolute top-0 left-0 w-1/2 h-full cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              zIndex: isOpen ? 5 : 15,
            }}
          >
            <div
              className={`w-full h-full bg-linear-to-br ${item.linear} rounded-l-3xl shadow-2xl border-4 border-r-2 border-white/20 relative overflow-hidden`}
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <DiamondPattern />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 sm:p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>

              <div className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 blur-2xl animate-pulse-glow" />
            </div>
          </div>

          {/* Right Door */}
          <div
            ref={rightDoorRef}
            onClick={() => setOpenCardIndex(isOpen ? null : cardId)}
            className="absolute top-0 right-0 w-1/2 h-full cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "right center",
              zIndex: isOpen ? 5 : 15,
            }}
          >
            <div
              className={`w-full h-full bg-linear-to-bl ${item.linear} rounded-r-3xl shadow-2xl border-4 border-l-2 border-white/20 relative overflow-hidden`}
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <DiamondPattern />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white/80" strokeWidth={1.5} />
                <div className="text-white text-xs sm:text-sm md:text-base font-semibold text-center px-2">
                  {item.title}
                </div>
              </div>

              <div className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 blur-2xl animate-pulse-glow" />
            </div>
          </div>

          {/* Center Line */}
          <div
            ref={centerLineRef}
            className="absolute top-0 left-1/2 w-0.5 h-full bg-white/40 -translate-x-1/2 shadow-lg pointer-events-none"
            style={{ 
              zIndex: 20,
            }}
          />

          {/* Click to Open Button */}
          <div
            ref={buttonRef}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto"
            style={{ 
              zIndex: 25,
            }}
          >
            <button
              onClick={() => setOpenCardIndex(cardId)}
              className="group px-4 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              Click to open
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-500" />
            </button>
          </div>

          {/* Inner Content Card */}
          <div
            ref={contentRef}
            className="absolute inset-0 pointer-events-none opacity-0"
            style={{ 
              zIndex: 1,
              transform: "scale(0.9)",
            }}
          >
            <div
              className={`w-full h-full bg-linear-to-br ${item.linear} rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden`}
            >
              <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/20 rounded-full opacity-20 -translate-x-16 sm:-translate-x-24 md:-translate-x-32 -translate-y-16 sm:-translate-y-24 md:-translate-y-32"></div>
              <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/30 rounded-full opacity-20 translate-x-16 sm:translate-x-24 md:translate-x-32 translate-y-16 sm:translate-y-24 md:translate-y-32"></div>

              <div className="relative z-10 mb-3 sm:mb-4 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <IconComponent
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h2 className="relative z-10 text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-center">
                {item.title}
              </h2>

              <p className="relative z-10 text-white text-center text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 px-2 sm:px-4 leading-relaxed">
                {item.desc}
              </p>

              <Link
                href={item.href}
                className="relative z-10 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/20 hover:bg-white/30 rounded-full text-white text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-105 hover:shadow-lg pointer-events-auto"
              >
                View Details
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setOpenCardIndex(null);
                }}
                className="relative z-10 mt-3 sm:mt-4 text-white/90 hover:text-white text-xs sm:text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all pointer-events-auto"
              >
                Click to close
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isMounted) {
    return (
      <div className="relative w-full h-screen bg-linear-to-br from-slate-950 via-rose-950 to-slate-900" />
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-linear-to-br from-slate-950 via-rose-950 to-slate-900">
      {/* Top Heading */}
      <div className="absolute top-4 sm:top-6 md:top-10 left-0 right-0 z-50 text-center px-2 sm:px-4 pointer-events-none">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-linear-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-md border border-rose-400/30 rounded-full shadow-lg animate-glow">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-rose-300 animate-spin-slow" />
          <span className="text-rose-300 font-medium text-xs sm:text-sm md:text-base whitespace-nowrap">
            Your Dream Wedding Awaits
          </span>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-rose-300 animate-pulse" />
        </div>
      </div>

      {/* Close Button */}
      {gatesOpen && (
        <button
          onClick={closeGates}
          className="fixed top-20 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
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
              animationDuration: `${pos.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
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
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage:
              "linear-linear(rgba(255,255,255,0.05) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: isMobile ? "30px 30px" : "50px 50px",
          }}
        ></div>
      </div>

      {/* LEFT GATE - Products */}
      <div
        className={`absolute top-0 left-0 h-full z-20 cursor-pointer transition-all duration-1000 ease-in-out ${
          !gatesOpen ? "w-1/2" : selectedGate === "products" ? "w-0" : "w-0"
        }`}
        style={{
          perspective: isMobile ? "1500px" : "2000px",
          transformStyle: "preserve-3d",
          pointerEvents: gatesOpen ? "none" : "auto",
        }}
        onClick={() => openGates("products")}
      >
        <div
          ref={leftGateRef}
          className="absolute inset-0"
          style={{
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            boxShadow: gatesOpen && selectedGate === "products"
              ? "-30px 0 60px rgba(0,0,0,0.9)"
              : "inset -10px 0 30px rgba(0,0,0,0.5)",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-rose-900/95 via-pink-900/95 to-rose-950/95 backdrop-blur-md border-r-2 border-rose-400/30 flex flex-col items-center justify-center px-3 sm:px-6 md:px-12">
            <div className="absolute inset-0 pointer-events-none">
              <DiamondPattern />
            </div>
            <div className="absolute inset-y-0 right-0 w-1 bg-linear-to-b from-transparent via-rose-300 to-transparent animate-pulse-slow pointer-events-none"></div>

            <div className="absolute top-1/2 right-2 sm:right-4 md:right-8 transform -translate-y-1/2 w-4 sm:w-5 md:w-8 h-12 sm:h-16 md:h-28 bg-linear-to-b from-rose-300 via-pink-400 to-rose-500 rounded-full border-2 border-rose-400/50 shadow-[0_0_20px_rgba(251,113,133,0.6)] animate-glow-pulse pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 md:w-5 h-2 sm:h-3 md:h-5 bg-rose-400 rounded-full shadow-inner"></div>
            </div>

            <div className="relative z-10 text-center space-y-2 sm:space-y-4 md:space-y-6 pointer-events-none">
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

            <div className="absolute top-1/4 right-4 sm:right-8 md:right-16 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full bg-rose-400/20 blur-3xl animate-pulse-glow pointer-events-none"></div>
            <div
              className="absolute bottom-1/4 right-4 sm:right-8 md:right-16 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-full bg-pink-400/15 blur-3xl animate-pulse-glow pointer-events-none"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* RIGHT GATE - Services */}
      <div
        className={`absolute top-0 right-0 h-full z-20 cursor-pointer transition-all duration-1000 ease-in-out ${
          !gatesOpen ? "w-1/2" : selectedGate === "services" ? "w-0" : "w-0"
        }`}
        style={{
          perspective: isMobile ? "1500px" : "2000px",
          transformStyle: "preserve-3d",
          pointerEvents: gatesOpen ? "none" : "auto",
        }}
        onClick={() => openGates("services")}
      >
        <div
          ref={rightGateRef}
          className="absolute inset-0"
          style={{
            transformOrigin: "right center",
            transformStyle: "preserve-3d",
            boxShadow: gatesOpen && selectedGate === "services"
              ? "30px 0 60px rgba(0,0,0,0.9)"
              : "inset 10px 0 30px rgba(0,0,0,0.5)",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-bl from-violet-900/95 via-purple-900/95 to-rose-950/95 backdrop-blur-md border-l-2 border-purple-400/30 flex flex-col items-center justify-center px-3 sm:px-6 md:px-12">
            <div className="absolute inset-0 pointer-events-none">
              <DiamondPattern />
            </div>
            <div className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-transparent via-purple-300 to-transparent animate-pulse-slow pointer-events-none"></div>

            <div className="absolute top-1/2 left-2 sm:left-4 md:left-8 transform -translate-y-1/2 w-4 sm:w-5 md:w-8 h-12 sm:h-16 md:h-28 bg-linear-to-b from-purple-300 via-fuchsia-400 to-purple-500 rounded-full border-2 border-purple-400/50 shadow-[0_0_20px_rgba(192,132,252,0.6)] animate-glow-pulse pointer-events-none">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 sm:w-3 md:w-5 h-2 sm:h-3 md:h-5 bg-purple-400 rounded-full shadow-inner"></div>
            </div>

            <div className="relative z-10 text-center space-y-2 sm:space-y-4 md:space-y-6 pointer-events-none">
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

            <div className="absolute top-1/4 left-4 sm:left-8 md:left-16 w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full bg-purple-400/20 blur-3xl animate-pulse-glow pointer-events-none"></div>
            <div
              className="absolute bottom-1/4 left-4 sm:left-8 md:left-16 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 rounded-full bg-violet-400/15 blur-3xl animate-pulse-glow pointer-events-none"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Revealed Content - PRODUCTS GRID */}
      {gatesOpen && selectedGate === "products" && (
        <div className="absolute inset-0 z-30 bg-linear-to-br from-rose-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-md overflow-y-auto scrollbar-thin scrollbar-thumb-rose-500/50 scrollbar-track-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
            <div className="text-center mb-12 animate-slide-down">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-rose-400 to-pink-600 rounded-full shadow-2xl mb-4">
                <Gem className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                Our Products
              </h2>
              <div className="h-1 w-24 mx-auto bg-linear-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full shadow-lg mb-4"></div>
              <p className="text-rose-200/90 text-base sm:text-lg drop-shadow-md max-w-2xl mx-auto">
                Curated collections for your perfect day. Click on any card to explore details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <DoubleDoorCard item={item} index={index} type="product" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Revealed Content - SERVICES GRID */}
      {gatesOpen && selectedGate === "services" && (
        <div className="absolute inset-0 z-30 bg-linear-to-br from-violet-500/10 via-purple-500/10 to-rose-500/10 backdrop-blur-md overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
            <div className="text-center mb-12 animate-slide-down">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-violet-400 to-purple-600 rounded-full shadow-2xl mb-4">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
                Our Services
              </h2>
              <div className="h-1 w-24 mx-auto bg-linear-to-r from-violet-400 via-purple-500 to-fuchsia-500 rounded-full shadow-lg mb-4"></div>
              <p className="text-purple-200/90 text-base sm:text-lg drop-shadow-md max-w-2xl mx-auto">
                Professional services to bring your vision to life. Click on any card to explore details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <DoubleDoorCard item={item} index={index} type="service" />
                </div>
              ))}
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
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
          0%, 100% { box-shadow: 0 0 20px rgba(251, 113, 133, 0.6); }
          50% { box-shadow: 0 0 40px rgba(251, 113, 133, 0.9), 0 0 60px rgba(251, 113, 133, 0.5); }
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
          0%, 100% { box-shadow: 0 0 10px rgba(251, 113, 133, 0.4); }
          50% { box-shadow: 0 0 25px rgba(251, 113, 133, 0.7); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-pulse-bg { animation: pulse-bg 4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-float-hearts { animation: float-hearts linear infinite; }
        .animate-float-particle { animation: float-particle ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 20s linear infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }

        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(244, 114, 182, 0.5); border-radius: 10px; transition: background 0.3s; }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(244, 114, 182, 0.7); }
      `}</style>
    </div>
  );
}
