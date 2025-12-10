'use client';

import { useEffect, useRef, useState } from "react";
import {
    Shirt,
    Shirt as TuxedoIcon,
    Shirt as ThreePieceIcon,
    Shirt as PathaniIcon,
    Sparkles,
    Crown,
    Diamond,
    Gem,
    Scissors,
    Watch,
    Watch as MojariIcon,
    Tag,
    BookOpen,
    BriefcaseBusiness,
    TicketPercent,
    Sparkle,
    Droplets,
    Footprints,
} from "lucide-react";

const categories = [
    // Outfits
    { name: "Sherwani", icon: Crown, color: "from-blue-500 to-cyan-400", badge: "NEW" },
    { name: "Kurta Pajama", icon: Shirt, color: "from-pink-500 to-rose-400" },
    { name: "Dhoti Kurta", icon: Scissors, color: "from-red-500 to-orange-400" },
    { name: "Turban", icon: Sparkles, color: "from-amber-500 to-yellow-400" },
    { name: "Tuxedo", icon: TuxedoIcon, color: "from-indigo-500 to-purple-400" },
    { name: "Sehra", icon: Sparkle, color: "from-sky-500 to-blue-400" },
    { name: "Punjabi Suit", icon: PathaniIcon, color: "from-fuchsia-500 to-pink-400" },
    { name: "Pathani Suit", icon: PathaniIcon, color: "from-purple-500 to-indigo-400" },
    { name: "Long Coat", icon: ThreePieceIcon, color: "from-slate-600 to-zinc-500" },

    // Accessories & jewellery
    { name: "Rudraksha", icon: Gem, color: "from-green-500 to-emerald-400" },
    { name: "Mojari", icon: Footprints, color: "from-slate-600 to-zinc-500" },
    { name: "Brooch", icon: Tag, color: "from-violet-500 to-purple-400", badge: "HOT" },
    { name: "Tie & Belt", icon: BriefcaseBusiness, color: "from-rose-400 to-pink-300" },
    { name: "Cufflinks", icon: Diamond, color: "from-orange-500 to-red-400" },
    { name: "Shoes", icon: MojariIcon, color: "from-purple-500 to-indigo-400", badge: "SALE" },
    { name: "Attar", icon: Droplets, color: "from-teal-500 to-cyan-400", badge: "SALE" },

    // Misc
    { name: "Books & Media", icon: BookOpen, color: "from-teal-500 to-cyan-400" },
];


const MiddleBar = () => {
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationId;
        // Start from the end of the scroll
        let scrollPosition = slider.scrollWidth / 2;
        const scrollSpeed = 1;

        const animate = () => {
            if (!isPaused && slider) {
                // Subtract instead of add to move left
                scrollPosition -= scrollSpeed;
                // Reset to end when reaching start
                if (scrollPosition <= 0) {
                    scrollPosition = slider.scrollWidth / 2;
                }
                slider.scrollLeft = scrollPosition;
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);



    return (
        <section className="w-full py-16 bg-gradient-to-r from-background via-secondary/30 to-background overflow-hidden">
            {/* <div className="text-center py-16 px-4">
                <h1 className="text-5xl md:text-6xl font-medium capitalize mb-4">
                    <span className="text-gray-900">Best</span>{' '}
                    <span className="text-orange-600">Sellers</span>
                </h1>
                <p className="text-lg text-gray-600">
                    Customer favorites that never go out of style
                </p>
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


export default MiddleBar;
