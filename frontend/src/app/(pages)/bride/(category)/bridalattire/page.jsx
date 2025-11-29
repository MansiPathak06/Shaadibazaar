// C:\Users\user\OneDrive\Desktop\Zentrix\Shaadibazaar\frontend\src\app\(pages)\bride\(category)\bridalattire\page.jsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ATTIRE_CATEGORIES = [
  {
    key: "lehenga",
    label: "Bridal Lehenga",
    href:"/bride/all-products?category=bridalwear&subCategory=lehenga",
    image:
      "https://i.pinimg.com/1200x/f3/f9/f5/f3f9f5b48079d4daa97e07a9a97395a6.jpg",
    tagline: "Heavily embroidered lehengas for the main wedding ceremony.",
    points: [
      "Classic red, pastel and contemporary colour palettes.",
      "Can‑can, trail, double dupatta and custom blouse options.",
    ],
  },
  {
    key: "saree",
    label: "Bridal Sarees",
    href: "/bride/all-products?category=bridalwear&subCategory=saree",
    image:
      "https://i.pinimg.com/1200x/bb/60/67/bb6067c3a70adeee93dc0c1b44b9fa6e.jpg",
    tagline: "Banarasi, Kanjeevaram and designer drape sarees.",
    points: [
      "Rich weaves with zari borders and pallu highlights.",
      "Perfect for pheras, rituals and temple ceremonies.",
    ],
  },
  {
    key: "gown",
    label: "Bridal Gowns",
    href: "/bride/all-products?category=bridalwear&subCategory=gown",
    image:
      "https://i.pinimg.com/1200x/9f/68/88/9f68882bc574313d6b694a519c0b7453.jpg",
    tagline: "Fairytale gowns for receptions and cocktail nights.",
    points: [
      "Ball gowns, A‑line and mermaid silhouettes.",
      "Embellished trains, corset bodices and veil styling.",
    ],
  },
  {
    key: "reception",
    label: "Reception Wear",
    href: "/bride/all-products?category=bridalwear&subCategory=reception",
    image:
      "https://i.pinimg.com/736x/a0/98/c1/a098c16a2c2d73265eb72f1cc701cf4b.jpg",
    tagline: "Glamorous Indo‑western sets for post‑wedding celebrations.",
    points: [
      "Sequined lehengas, fusion saree‑gowns and shimmer gowns.",
      "Lightweight yet statement‑making silhouettes.",
    ],
  },
  {
    key: "custom",
    label: "Custom Tailoring",
    href: "/bride/all-products?category=bridalwear&subCategory=customtailoring",
    image:
      "https://i.pinimg.com/1200x/52/ba/bc/52babc05dc7d3c262c0afcff6557e46b.jpg",
    tagline: "Design your dream outfit from fabric to final fitting.",
    points: [
      "One‑on‑one design consultation and sketching.",
      "Colour, embroidery, neckline and silhouette customisation.",
    ],
  },
];

export default function BridalAttirePage() {
  const router = useRouter();

  const handleCardClick = (href) => {

    router.push(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-100 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[url('https://i.pinimg.com/736x/22/f5/8f/22f58f2706f0476e98ab9128aa4ffb9a.jpg')] bg-cover bg-center">
        <div className="bg-white/70">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-4 py-16 text-center"
          >
            <p className="tracking-[0.35em] text-sm md:text-base uppercase text-rose-500 mb-3">
              ShaadiBazaar Bride
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
              Bridal Attire Collection
            </h1>
            <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
              Discover lehengas, sarees, gowns, reception outfits and bespoke
              tailoring options curated to match every ceremony in your wedding
              journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-rose-100 shadow-[0_18px_60px_rgba(244,114,182,0.25)] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Start with your outfit category
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Tap a card to view all products under that category on the next
              page.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs md:text-sm text-rose-600 font-medium">
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Lehenga
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Saree
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Gown & Reception
            </span>
          </div>
        </div>
      </section>

      {/* Category cards grid */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ATTIRE_CATEGORIES.map((cat, index) => (
            <motion.article
              key={cat.key}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 28px 70px rgba(0,0,0,0.20)",
              }}
              onClick={() => handleCardClick(cat.href)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/70 hover:border-rose-300 transition-all duration-300"
            >
              {/* Image banner */}
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-rose-100/70 via-transparent to-rose-200/60" />
                <div
                  className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute inset-x-5 bottom-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-sm">
                      {cat.label}
                    </h3>
                    <p className="text-[11px] md:text-xs text-white/85">
                      Tap to view all {cat.label.toLowerCase()} designs
                    </p>
                  </div>
                  <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-white/90 text-rose-600 font-semibold">
                    Explore
                  </span>
                </div>
              </div>

              {/* Text body */}
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {cat.tagline}
                </p>
                <ul className="text-[11px] md:text-xs text-gray-500 space-y-1.5">
                  {cat.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs md:text-sm font-medium text-rose-500">
                    View all {cat.label.split(" ")[1]} outfits
                  </span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="text-sm md:text-base font-semibold text-rose-600 group-hover:text-rose-700"
                  >
                    Go to products →
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
