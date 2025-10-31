'use client'

import React, { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import GateDoors from './GateDoors';
import ContentDisplay from './ContentDisplay';
import BackgroundEffects from './BackgroundEffects';

export default function ModernWeddingGate() {
  const [gatesOpen, setGatesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // NEW: Track mount state

  // NEW: Only render after mount to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse movement for parallax effect (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const showProducts = () => {
    setGatesOpen(true);
    setActiveSection('products');
  };

  const showServices = () => {
    setGatesOpen(true);
    setActiveSection('services');
  };

  const closeGates = () => {
    setGatesOpen(false);
    setTimeout(() => setActiveSection(null), 800);
  };

  // Prevent hydration mismatch by not rendering dynamic content until mounted
  if (!isMounted) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900">
        <GlobalStyles />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900">
      {/* Background Effects */}
      <BackgroundEffects isMobile={isMobile} />

      {/* Hero Content (when gates closed) */}
      {!gatesOpen && (
        <HeroSection
          mousePosition={mousePosition}
          isMobile={isMobile}
          showProducts={showProducts}
          showServices={showServices}
        />
      )}

      {/* Gate Doors */}
      <GateDoors gatesOpen={gatesOpen} isMobile={isMobile} />

      {/* Content Display */}
      {gatesOpen && activeSection && (
        <ContentDisplay
          activeSection={activeSection}
          closeGates={closeGates}
          isMobile={isMobile}
        />
      )}

      <GlobalStyles />
    </div>
  );
}

// Global Styles Component
function GlobalStyles() {
  return (
    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slide-down {
        from { opacity: 0; transform: translateY(-30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slide-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes expand {
        from { width: 0; opacity: 0; }
        to { width: 8rem; opacity: 1; }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
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
      @keyframes gradient-shift {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 0.8; }
      }
      @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }
      @keyframes gradient-text {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(251,113,133,0.5); }
        50% { box-shadow: 0 0 20px rgba(251,113,133,0.8); }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      .animate-slide-down { animation: slide-down 0.8s ease-out forwards; }
      .animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
      .animate-expand { animation: expand 0.8s ease-out forwards; }
      .animate-shimmer { animation: shimmer 2s infinite; }
      .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
      .animate-float-hearts { animation: float-hearts linear infinite; }
      .animate-float-particle { animation: float-particle ease-in-out infinite; }
      .animate-gradient-shift { animation: gradient-shift 3s ease-in-out infinite; }
      .animate-grid-move { animation: grid-move 20s linear infinite; }
      .animate-gradient-text { background-size: 200% auto; animation: gradient-text 3s ease infinite; }
      .animate-glow { animation: glow 2s ease-in-out infinite; }
      .animate-spin-slow { animation: spin-slow 3s linear infinite; }

      .scrollbar-thin::-webkit-scrollbar { width: 4px; }
      @media (min-width: 640px) {
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
      }
      .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
      .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(244, 114, 182, 0.5); border-radius: 10px; }
      .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(244, 114, 182, 0.7); }
    `}</style>
  );
}
