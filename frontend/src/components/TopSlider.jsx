'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const categories = [
  {
    name: "Lehenga",
    imageUrl: "https://i.pinimg.com/1200x/f3/f9/f5/f3f9f5b48079d4daa97e07a9a97395a6.jpg",
    badge: "HOT",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=lehenga"
  },
  {
    name: "Saree",
    imageUrl: "https://i.pinimg.com/736x/86/6a/61/866a615c22103a862f201795fa9d3cc7.jpg",
    badge: "NEW",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-saree"
  },
  {
    name: "Sharara",
    imageUrl: "https://i.pinimg.com/1200x/2c/f5/ef/2cf5efbcd8473fe64c1d1ed75b08b230.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-sharara"
  },
  {
    name: "Anarkali Suit",
    imageUrl: "https://i.pinimg.com/1200x/7c/77/0a/7c770a30f81a6647395d291e6494861b.jpg",
    badge: "PREMIUM",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-anarkali"
  },
  {
    name: "Robe",
    imageUrl: "https://i.pinimg.com/1200x/1e/70/7d/1e707dd72ece9f84fbcbf490c6025c87.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-robes"
  },
  {
    name: "Bridesmaid Dress",
    imageUrl: "https://i.pinimg.com/1200x/09/c4/3f/09c43fb2c3b9c3d9cd80f3f7347f9a55.jpg",
    badge: "NEW",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridesmaid-dress"
  },
  {
    name: "Hijab",
    imageUrl: "https://i.pinimg.com/736x/6f/69/47/6f69470b049bd6663d1d6fefa2bf8297.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-hijab"
  },
  {
    name: "Veil",
    imageUrl: "https://i.pinimg.com/1200x/05/76/3c/05763ca98f33e8badbf2b67a0e9763ae.jpg",
    badge: "BRIDAL",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-veil"
  },
  {
    name: "Dupatta",
    imageUrl: "https://i.pinimg.com/1200x/4d/b9/2e/4db92e0b0dacb783ad763d3da6743c18.jpg",
    badge: "HOT",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=dupatta-veil"
  },
  {
    name: "Gown",
    imageUrl: "https://i.pinimg.com/1200x/9a/fe/b0/9afeb0c9543f1bdb716f5de40798d68b.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-gown"
  },
  {
    name: "Punjabi Suit",
    imageUrl: "https://i.pinimg.com/1200x/96/0b/9d/960b9d0ce66c7893c167a86d158e410f.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-punjabi-suit"
  },
  {
    name: "Payal",
    imageUrl: "https://i.pinimg.com/736x/3e/fd/f1/3efdf1c627dd4c0f6ca22652b9a596d7.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-payal"
  },
  {
    name: "Necklace",
    imageUrl: "https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg",
    badge: "SALE",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-necklace"
  },
  {
    name: "Earrings",
    imageUrl: "https://i.pinimg.com/1200x/f7/74/59/f774596236a976722a5c9c73404a187f.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-earrings"
  },
  {
    name: "Ring",
    imageUrl: "https://i.pinimg.com/1200x/0b/97/cf/0b97cf05de8534f8fafbc0d8f0cfa569.jpg",
    badge: "PREMIUM",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-ring"
  },
  {
    name: "Nath",
    imageUrl: "https://i.pinimg.com/736x/ac/7a/3f/ac7a3f635f07cca1dc2e9416614333ac.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-nath"
  },
  {
    name: "Sandals",
    imageUrl: "https://i.pinimg.com/736x/78/a7/54/78a7547fbc0383a1702310cac0f9117a.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-sandals"
  },
  {
    name: "Gloves",
    imageUrl: "https://i.pinimg.com/736x/7a/40/c4/7a40c41b57a2f273cbee98a37a7c7d2d.jpg",
    pageRedirect: "/bride/all-products?category=bridalwear&subCategory=bridal-gloves"
  },
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
    <section className="w-full py-8 bg-linear-to-r from-slate-50 via-pink-50/30 to-slate-50 overflow-hidden relative">
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...categories, ...categories].map((category, index) => (
          <Link href={category.pageRedirect} key={`${category.name}-${index}`}>
            <div
              key={`${category.name}-${index}`}
              className="shrink-0 group"
            >
              <div className="flex flex-col items-center gap-3 p-4 transition-all duration-300 hover:scale-110 cursor-pointer min-w-35">
                <div className="relative">
                  {category.badge && (
                    <span className="absolute -top-2 -right-2 z-10  px-2 py-0.5 text-[10px] font-medium text-white bg-linear-to-r from-red-500 to-orange-500 rounded-full animate-pulse shadow-lg">
                      {category.badge}
                    </span>
                  )}
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 ring-4 ring-white group-hover:ring-pink-300">
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 w-28 h-28 rounded-full bg-linear-to-br from-pink-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </div>

                <span className="text-sm font-medium text-slate-700 text-center whitespace-nowrap group-hover:text-pink-600 transition-colors duration-300">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-slate-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-slate-50 to-transparent" />
    </section>
  );
};

export default TopSlider;