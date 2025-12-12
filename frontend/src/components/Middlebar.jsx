'use client';

import { useEffect, useRef, useState } from "react";

const categories = [
    // Outfits
    { 
        name: "Bridal-Makeup", 
        image: "https://i.pinimg.com/1200x/0f/d4/0a/0fd40ab1b8fc54a622ceb23ca6cad1a9.jpg", 
        color: "from-blue-500 to-cyan-400", 
     
    },
    { 
        name: "Mehendi artist", 
        image: "https://i.pinimg.com/1200x/35/3b/82/353b8244c5eb8853f9289907bb1702d2.jpg", 
        color: "from-pink-500 to-rose-400" 
    },
    { 
        name: "Couple Photoshoot", 
        image: "https://i.pinimg.com/736x/b2/4c/ab/b24cab6ad04bf63653b3249b9ba8852b.jpg", 
        color: "from-red-500 to-orange-400" 
    },
    { 
        name: "Hair Stylist", 
        image: "https://i.pinimg.com/1200x/17/ba/57/17ba57dbb83036a82bf25dfb58e4d68e.jpg", 
        color: "from-amber-500 to-yellow-400" 
    },
    { 
        name: "Choreography", 
        image: "https://i.pinimg.com/1200x/34/9d/d7/349dd7c786ff8f0907d386c316554a75.jpg", 
        color: "from-indigo-500 to-purple-400" 
    },
    { 
        name: "Car Decoration", 
        image: "https://i.pinimg.com/736x/78/28/f6/7828f6cef847422176c8c67166d57e0e.jpg", 
        color: "from-sky-500 to-blue-400" 
    },
    { 
        name: "Dhol Team", 
        image: "https://i.pinimg.com/736x/98/5e/4f/985e4fd0de24a9ab950f96124ebde892.jpg", 
        color: "from-fuchsia-500 to-pink-400" 
    },
    { 
        name: "Catering Services", 
        image: "https://i.pinimg.com/736x/4e/a8/39/4ea8399443d3c23fe4a029c36b4a9d50.jpg", 
        color: "from-purple-500 to-indigo-400" 
    },
    { 
        name: "Wedding Venues", 
        image: "https://i.pinimg.com/736x/05/c0/9c/05c09c42629e957cd508dc914f4c83d5.jpg", 
        color: "from-slate-600 to-zinc-500" 
    },
    { 
        name: "Priest", 
        image: "https://i.pinimg.com/736x/1c/cb/7e/1ccb7ecadcac8c024cbe24663850201d.jpg", 
        color: "from-green-500 to-emerald-400" 
    },
    { 
        name: "Nail Technician", 
        image: "https://i.pinimg.com/1200x/b4/89/e9/b489e9168680fa2cefab3f953669da4d.jpg", 
        color: "from-slate-600 to-zinc-500" 
    },
    { 
        name: "Wedding Cards", 
        image: "https://i.pinimg.com/736x/0c/fb/5f/0cfb5fe872ae5aba2b597e04b79b1c03.jpg", 
        color: "from-violet-500 to-purple-400", 
       
    },
    { 
        name: "Tent House", 
        image: "https://i.pinimg.com/1200x/b1/83/3a/b1833a78d11d4f9383f1d3599beff1f2.jpg", 
        color: "from-rose-400 to-pink-300" 
    },
    { 
        name: "Ghodi/Horse Provider", 
        image: "https://i.pinimg.com/736x/4e/fb/68/4efb6806451722b26b00547d432d30a2.jpg", 
        color: "from-orange-500 to-red-400" 
    },
    { 
        name: "Salon Services", 
        image: "https://i.pinimg.com/736x/95/ba/0f/95ba0f3e338a1ad09ea8116c12cb5ad2.jpg", 
        color: "from-purple-500 to-indigo-400", 
         
    },
    { 
        name: "Event Manager", 
        image: "https://i.pinimg.com/1200x/8f/1a/16/8f1a1635e6ac2c77469d2257e5694d6f.jpg", 
        color: "from-teal-500 to-cyan-400", 
        
    },

   
    { 
        name: "Drone Shooting", 
        image: "https://i.pinimg.com/736x/9f/86/ea/9f86eaa291893d81bbb29affa533f64d.jpg", 
        color: "from-teal-500 to-cyan-400" 
    },
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
        <section className="relative w-full py-16 bg-gradient-to-r from-slate-50 via-white to-slate-50 overflow-hidden">
            <div
                ref={sliderRef}
                className="flex gap-8 overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Duplicate categories for infinite scroll effect */}
                {[...categories, ...categories].map((category, index) => (
                    <div
                        key={`${category.name}-${index}`}
                        className="flex-shrink-0 group"
                    >
                        <div className="flex flex-col items-center gap-1 p-5 transition-all duration-300 hover:scale-110 cursor-pointer min-w-[180px]">
                            {/* Circular image container */}
                            <div className="relative">
                                {category.badge && (
                                    <span className="absolute -top-2 -right-2 z-10 px-3 py-1 text-[10px] font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
                                        {category.badge}
                                    </span>
                                )}
                                
                                {/* Circular border with gradient */}
                                <div className={`relative w-35 h-35 rounded-full bg-gradient-to-br ${category.color} p-1 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}>
                                    {/* Inner circle with image */}
                                    <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                // Fallback gradient background if image fails to load
                                                e.target.style.display = 'none';
                                                e.target.parentElement.classList.add(`bg-gradient-to-br`, ...category.color.split(' '));
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 w-28 h-28 rounded-full bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10`} />
                            </div>

                            {/* Category name */}
                            <span className="text-sm font-semibold text-gray-700 text-center whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                {category.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent" />
        </section>
    );
};


export default MiddleBar;