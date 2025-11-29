// e.g. src/app/(pages)/bride/(category)/makeup-hair/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MAKEUP_HAIR_CATEGORIES = [
  {
    key: "bridal-makeup",
    name: "Bridal Makeup",
    description:
      "Full bridal look with skin prep, base, eye makeup, lashes, contouring, lipstick and draping for the main wedding day.",
    href: "/bride/category/makeup-hair/bridal-makeup",
    image:
      "https://i.pinimg.com/736x/55/cc/94/55cc9455d35d6a916f468a79b0303593.jpg",
    badge: "Signature Bride",
    gradient: "from-rose-200/90 to-rose-200/90",
  },
  {
    key: "airbrush",
    name: "Airbrush Makeup",
    description:
      "Ultra-light, long‑lasting base applied with airbrush gun for HD cameras and outdoor weddings.",
    href: "/bride/category/makeup-hair/airbrush-makeup",
    image:
      "https://i.pinimg.com/1200x/33/ec/de/33ecde0d170c14f84375a3a5d6ac452f.jpg",
    badge: "Flawless Base",
    gradient: "from-rose-200/90 to-rose-200/90",
  },
  {
    key: "hd-makeup",
    name: "HD Bridal Makeup",
    description:
      "High‑definition makeup using premium products for close‑up photography and cinematic videos.",
    href: "/bride/category/makeup-hair/hd-makeup",
    image:
      "https://i.pinimg.com/736x/a0/03/4b/a0034b741059ed4754a7b0fb83bfaf02.jpg",
    badge: "Camera Ready",
    gradient: "from-rose-200/90 to-rose-200/90",
  },
  {
    key: "hairstyling",
    name: "Bridal Hairstyling",
    description:
      "Classic buns, messy buns, braids, open curls and hair accessories styling for every event.",
    href: "/bride/category/makeup-hair/hairstyling",
    image:
      "https://i.pinimg.com/736x/08/ed/79/08ed79cceeed02aa6a7fb2d6cce853b4.jpg",
    badge: "Hair Goals",
    gradient: "from-rose-200/90 to-rose-200/90",
  },
  {
    key: "mehendi-packages",
    name: "Mehendi Makeup Packages",
    description:
      "Soft, colourful mehendi‑day looks with light base, fresh eyes, floral jewellery and simple hairstyles.",
    href: "/bride/category/makeup-hair/mehendi-packages",
    image:
      "https://i.pinimg.com/736x/c0/11/28/c01128903761e6a5f00bf1a358d465ff.jpg",
    badge: "Festive Glow",
   gradient: "from-rose-200/90 to-rose-200/90",
  },
];

export default function MakeupHairPage() {
  const router = useRouter();

  const handleCardClick = (href) => {
    router.push(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-100 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[url('https://i.pinimg.com/1200x/96/06/8d/96068d7de07ee784066851c09c7967f9.jpg')] bg-cover bg-center">
        <div className=" bg-white/55">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto px-4 py-16 h-80 text-center"
          >
            <p className="tracking-[0.35em] text-md uppercase text-rose-400 mb-3">
              ShaadiBazaar Bride
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
              Bridal Makeup & Hair
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Plan your complete beauty journey with curated bridal makeup,
              hairstyling and mehendi‑day looks that stay flawless from pheras
              to reception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-rose-100 shadow-[0_18px_60px_rgba(244,114,182,0.25)] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Choose your beauty package
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Each card opens into a detailed page with full service list,
              pricing tiers and add‑ons.
            </p>
          </div>
          <div className="flex gap-3 text-xs md:text-sm text-rose-600 font-medium">
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Bridal Makeup
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              HD & Airbrush
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-100">
              Hair & Mehendi
            </span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MAKEUP_HAIR_CATEGORIES.map((cat, index) => (
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
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border-2 border-rose-200 hover:border-rose-300 transition-all duration-300"
            >
              {/* banner */}
              <div className="relative h-90 md:h-[22 rem] overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cat.gradient}`}
                />
                <div
                  className="absolute inset-0 mix-blend-multiply bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${cat.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/8 transition-colors duration-300" />

                <div className="absolute inset-x-5 bottom-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-sm">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] md:text-xs text-white/85">
                      Tap to see full services & packages
                    </p>
                  </div>
                  <span className="text-[11px] md:text-xs px-3 py-1 rounded-full bg-white/90 text-rose-600 font-semibold">
                    {cat.badge}
                  </span>
                </div>
              </div>

              {/* body */}
              <div className="p-5 md:p-6 flex flex-col gap-3">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {cat.description}
                </p>

                <ul className="text-[11px] md:text-xs text-gray-500 space-y-1.5">
                  {cat.key === "bridal-makeup" && (
                    <>
                      <li>Engagement, wedding day & reception looks available.</li>
                      <li>Trial session, product consultation and skin prep add‑ons.</li>
                    </>
                  )}
                  {cat.key === "airbrush" && (
                    <>
                      <li>Water‑resistant, sweat‑proof base ideal for long events.</li>
                      <li>Perfect for outdoor pheras and destination weddings.</li>
                    </>
                  )}
                  {cat.key === "hd-makeup" && (
                    <>
                      <li>HD products for close‑up photography and videos.</li>
                      <li>Soft glam to full glam options based on your moodboard.</li>
                    </>
                  )}
                  {cat.key === "hairstyling" && (
                    <>
                      <li>Buns, braids, curls, waves and accessory placement.</li>
                      <li>Separate packages for sangeet, mehendi and reception.</li>
                    </>
                  )}
                  {cat.key === "mehendi-packages" && (
                    <>
                      <li>Fresh, dewy looks with colourful eyes and soft lips.</li>
                      <li>Group packages available for friends & family.</li>
                    </>
                  )}
                </ul>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs md:text-sm font-medium text-rose-500">
                    Explore {cat.name.split(" ")[0]} services
                  </span>
                  <motion.span
                    whileHover={{ x: 4 }}
                    className="text-sm md:text-base font-semibold text-rose-600 group-hover:text-rose-700"
                  >
                    View details →
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
