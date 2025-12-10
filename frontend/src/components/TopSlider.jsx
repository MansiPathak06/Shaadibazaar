'use client';

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Shirt,
  Crown,
  Gem,
  // Drapes,          // ❌ not in lucide
  // Ribbon,          // ❌
  // Scarf,           // ❌
  Sparkle,
  // Feather,         // ❌
  // Dress,           // ❌
  // BadgeIndian,     // ❌
  Link,
  Diamond,
  // DiamondRing,     // ❌
  Flower,
  // Shoe,            // ❌
  // Hand,            // ❌
  Scissors,         // ✔ for “Robe / tailoring”
  Bookmark,         // ✔ for “Bridesmaid Dress / tag”
  PanelsTopLeft,    // ✔ for “Hijab / cloth”
  Feather as FeatherIcon, // ✔ real Lucide icon
  Shirt as DressIcon,     // ✔ reuse Shirt as dress
  BadgeCheck,       // ✔ for “Punjabi Suit / badge”
  CircleDot,        // ✔ for “Ring”
  Footprints,       // ✔ for “Sandals”
  Hand as HandIcon, // ✔ real Lucide “Hand”
} from "lucide-react";

const categories = [
  { name: "Lehenga", icon: Sparkles, color: "from-rose-500 to-red-400", badge: "HOT" },
  { name: "Saree", icon: Shirt, color: "from-amber-500 to-yellow-400", badge: "NEW" },
  { name: "Sharara", icon: Crown, color: "from-purple-500 to-violet-400" },
  { name: "Anarkali Suit", icon: Gem, color: "from-pink-500 to-rose-400", badge: "PREMIUM" },
  { name: "Robe", icon: Scissors, color: "from-sky-500 to-cyan-400" },
  { name: "Bridesmaid Dress", icon: Bookmark, color: "from-teal-500 to-blue-400", badge: "NEW" },
  { name: "Hijab", icon: PanelsTopLeft, color: "from-green-500 to-emerald-400" },
  { name: "Veil", icon: Sparkle, color: "from-slate-500 to-gray-400", badge: "BRIDAL" },
  { name: "Dhupatta", nameAlt: "Dupatta", icon: FeatherIcon, color: "from-fuchsia-500 to-pink-500", badge: "HOT" },
  { name: "Gown", icon: DressIcon, color: "from-indigo-500 to-purple-400" },
  { name: "Punjabi Suit", icon: BadgeCheck, color: "from-orange-400 to-amber-400" },
  { name: "Payal", icon: Link, color: "from-yellow-400 to-amber-300" },
  { name: "Necklace", icon: Diamond, color: "from-rose-400 to-pink-300", badge: "SALE" },
  { name: "Earrings", icon: Sparkle, color: "from-red-400 to-rose-500" },
  { name: "Ring", icon: CircleDot, color: "from-zinc-600 to-slate-600", badge: "PREMIUM" },
  { name: "Nath", icon: Flower, color: "from-purple-500 to-pink-400" },
  { name: "Sandals", icon: Footprints, color: "from-amber-700 to-yellow-600" },
  { name: "Gloves", icon: HandIcon, color: "from-gray-500 to-zinc-400" },
];

const TopSlider = () => {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      if (!isPaused && slider) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= slider.scrollWidth / 2) {
          scrollPosition = 0;
        }
        slider.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="w-full py-8 bg-gradient-to-r from-background via-secondary/30 to-background overflow-hidden relative">

{/* 
 <section className="w-full bg-white pt-10 pb-6 px-4 border-b border-slate-100">
  <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">

    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
      Groom Essentials
    </div>

    <p className="text-sm md:text-base text-slate-600 max-w-2xl">
      Tagline goes here – short, sharp, and focused on the groom’s experience.
    </p>
  </div>
</section> */}

      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...categories, ...categories].map((category, index) => (
          <div
            key={`${category.name}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-card hover:shadow-xl cursor-pointer min-w-[120px]">
              <div className="relative">
                {category.badge && (
                  <span className="absolute -top-2 -right-2 z-10 px-2 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
                    {category.badge}
                  </span>
                )}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3`}>
                  <category.icon className="w-full h-full text-white drop-shadow-md" strokeWidth={1.5} />
                </div>
                <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
              </div>

              <span className="text-sm font-medium text-foreground text-center whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
};

export default TopSlider;
