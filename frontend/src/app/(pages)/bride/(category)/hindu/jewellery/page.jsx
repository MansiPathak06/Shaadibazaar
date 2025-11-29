"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const JEWELLERY_CATEGORIES = [
  {
    key: "gold",
    name: "Gold Bridal Jewellery",
    description:
      "Traditional 22K and 18K gold sets, temple jewellery, heavy necklaces, waist belts, maang tikkas and more for classic bridal looks.",
    href: "/bride/all-products?category=jewellery&subCategory=gold",
    image:
      "https://i.pinimg.com/1200x/9f/04/f3/9f04f36ab336cc562381a07293611dfc.jpg",
    gradient: "from-amber-200/90 to-yellow-200/90",
    badge: "Timeless Classics",
  },
  {
    key: "diamond",
    name: "Diamond Bridal Jewellery",
    description:
      "Elegant diamond necklaces, chokers, earrings and cocktail rings crafted in contemporary and vintage styles.",
    href: "/bride/all-products?category=jewellery&subCategory=diamond",
    image:
      "https://i.pinimg.com/1200x/d7/5b/56/d75b56c29486ddea5708a45831e3ac57.jpg", // replace with your own
    gradient: "from-amber-200/90 to-yellow-200/90",
    badge: "Sparkling Luxury",
  },
  {
    key: "kundan",
    name: "Kundan & Polki",
    description:
      "Handcrafted Kundan and Polki sets with meenakari work, layered haar, passa and statement maang tikkas.",
    href: "/bride/all-products?category=jewellery&subCategory=kundan-polki",
    image:
      "https://i.pinimg.com/1200x/08/99/1b/08991b1e1d502244348c893537d15dd6.jpg",
    gradient: "from-amber-200/90 to-yellow-200/90",
    badge: "Royal Heritage",
  },
  {
    key: "artificial",
    name: "Artificial / Imitation Sets",
    description:
      "Budget‑friendly bridal sets, AD stone jewellery, and theme‑based pieces for pre‑wedding events and functions.",
    href: "/bride/all-products?category=jewellery&subCategory=artificial",
    image:
      "https://i.pinimg.com/1200x/3b/e7/6a/3be76a111e62c5db6831f84adddc3544.jpg",
    gradient: "from-amber-200/90 to-yellow-200/90",
    badge: "Budget Friendly",
  },
  {
    key: "chooda",
    name: "Bridal Chooda & Kaleere",
    description:
      "Punjabi, Rajasthani and contemporary chooda designs with matching kaleere and bangles curated for every bridal vibe.",
    href: "/bride/all-products?category=jewellery&subCategory=chooda",
    image:
      "https://i.pinimg.com/736x/58/3b/d1/583bd1b11571bdeead51893249735c71.jpg",
    gradient: "from-amber-200/90 to-yellow-200/90",
    badge: "Signature Look",
  },
];

export default function BridalJewelleryPage() {
  const router = useRouter();

  const handleCardClick = (href) => {
    router.push(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-100 text-gray-900">
      {/* Hero with richer typography */}
      <section className="relative overflow-hidden bg-[url('https://i.pinimg.com/1200x/93/19/63/931963ed099258ef8250b3fa509ff6fe.jpg')] bg-cover bg-center">
        <div className=" bg-white/70">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto px-4 py-16 text-center h-80"
          >
            <p className="tracking-[0.35em] text-md uppercase text-rose-400 mb-3">
              ShaadiBazaar Bride
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
              Bridal Jewellery Collection
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Discover opulent gold, brilliant diamonds, royal Kundan/Polki,
              high‑finish artificial sets and statement bridal chooda that
              complete every phase of your wedding story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-rose-200 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="pointer-events-none absolute -bottom-24 -right-16 w-72 h-72 bg-pink-200 rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-rose-100 shadow-[0_18px_60px_rgba(244,114,182,0.25)] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Choose your jewellery story
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Start with your metal preference, then refine by style and budget
              on the next pages.
            </p>
          </div>
          <div className="flex gap-3 text-xs md:text-sm text-rose-600 font-medium">
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Gold & Diamond
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Heritage Kundan
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Budget‑friendly Sets
            </span>
          </div>
        </div>
      </section>

      {/* Category cards grid – larger + glassmorphism */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-7  md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {JEWELLERY_CATEGORIES.map((cat, index) => (
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
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border-1 border-rose-500 hover:border-rose-300 transition-all duration-300  "
            >
              {/* gradient + dynamic image banner */}

              <div className="relative  h-74 md:h-72 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cat.gradient}`}
                />

                <div
                  className="absolute inset-0 mix-blend-multiply bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${
                      cat.image || "/images/jewellery-placeholder.jpg"
                    })`,
                  }}
                />

                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />

                <div className="absolute inset-x-5 bottom-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-sm">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] md:text-xs text-white/80">
                      Tap to view designs & buy options
                    </p>
                  </div>
                  <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-white/90 text-rose-600 font-semibold">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="text-[11px] md:text-xs text-gray-500 space-y-1.5">
                  {cat.key === "gold" && (
                    <>
                      <li>
                        Heavy bridal sets with layered haar, rani haar and
                        chokers.
                      </li>
                      <li>
                        Temple, antique, filigree and modern minimal designs.
                      </li>
                    </>
                  )}
                  {cat.key === "diamond" && (
                    <>
                      <li>
                        Solitaire chokers, tennis necklaces and halo earrings.
                      </li>
                      <li>
                        Perfect for engagement, sangeet and reception looks.
                      </li>
                    </>
                  )}
                  {cat.key === "kundan" && (
                    <>
                      <li>
                        Rajasthani and Mughal‑inspired Kundan haar and passa.
                      </li>
                      <li>
                        Uncut Polki sets with matching maang tikka and bangles.
                      </li>
                    </>
                  )}
                  {cat.key === "artificial" && (
                    <>
                      <li>
                        High‑finish AD and CZ sets that photograph like fine
                        jewellery.
                      </li>
                      <li>
                        Multiple colour options to match each bridal function
                        outfit.
                      </li>
                    </>
                  )}
                  {cat.key === "chooda" && (
                    <>
                      <li>
                        Classic red‑ivory, pastel, ombré and personalised name
                        chooda.
                      </li>
                      <li>
                        Statement kaleere, bangles and add‑on hand accessories.
                      </li>
                    </>
                  )}
                </ul>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs md:text-sm font-medium text-rose-500">
                    View {cat.name.split(" ")[0]} collection
                  </span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="text-sm md:text-base font-semibold text-rose-600 group-hover:text-rose-700"
                  >
                    Explore →
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
