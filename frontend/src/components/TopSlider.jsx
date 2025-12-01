'use client';

import { useEffect, useRef, useState } from "react";
import { 
  Smartphone, 
  Shirt, 
  Headphones, 
  Sofa, 
  Tv, 
  Plane, 
  Sparkles, 
  ShoppingCart,
  Watch,
  Gamepad2,
  Book,
  Car,
  Baby,
  Dumbbell,
  Gift
} from "lucide-react";


const categories = [
  { name: "Mobiles & Tablets", icon: Smartphone, color: "from-blue-500 to-cyan-400", badge: "NEW" },
  { name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-400" },
  { name: "Electronics", icon: Headphones, color: "from-red-500 to-orange-400" },
  { name: "Home & Furniture", icon: Sofa, color: "from-amber-500 to-yellow-400" },
  { name: "TVs & Appliances", icon: Tv, color: "from-indigo-500 to-purple-400" },
  { name: "Flight Bookings", icon: Plane, color: "from-sky-500 to-blue-400" },
  { name: "Beauty & Health", icon: Sparkles, color: "from-fuchsia-500 to-pink-400" },
  { name: "Grocery", icon: ShoppingCart, color: "from-green-500 to-emerald-400" },
  { name: "Watches", icon: Watch, color: "from-slate-600 to-zinc-500" },
  { name: "Gaming", icon: Gamepad2, color: "from-violet-500 to-purple-400", badge: "HOT" },
  { name: "Books & Media", icon: Book, color: "from-teal-500 to-cyan-400" },
  { name: "Automotive", icon: Car, color: "from-gray-600 to-slate-500" },
  { name: "Baby & Kids", icon: Baby, color: "from-rose-400 to-pink-300" },
  { name: "Sports & Fitness", icon: Dumbbell, color: "from-orange-500 to-red-400" },
  { name: "Gifts & Toys", icon: Gift, color: "from-purple-500 to-indigo-400", badge: "SALE" },
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
    <section className="w-full py-8 bg-gradient-to-r from-background via-secondary/30 to-background overflow-hidden">
      {/* <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          Shop by <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Categories</span>
        </h2>
        <p className="text-muted-foreground text-center mt-2">Discover amazing deals across all categories</p>
      </div> */}
      
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate categories for infinite scroll effect */}
        {[...categories, ...categories].map((category, index) => (
          <div
            key={`${category.name}-${index}`}
            className="flex-shrink-0 group"
          >
            <div className="flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:bg-card hover:shadow-xl cursor-pointer min-w-[120px]">
              {/* Icon container with gradient background */}
              <div className="relative">
                {category.badge && (
                  <span className="absolute -top-2 -right-2 z-10 px-2 py-0.5 text-[10px] font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
                    {category.badge}
                  </span>
                )}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} p-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-3`}>
                  <category.icon className="w-full h-full text-white drop-shadow-md" strokeWidth={1.5} />
                </div>
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
              </div>
              
              {/* Category name */}
              <span className="text-sm font-medium text-foreground text-center whitespace-nowrap group-hover:text-primary transition-colors duration-300">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
};


export default TopSlider;
