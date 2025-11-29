// src/app/bride/hindu/bridal-wear/page.jsx
"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    slug: "bridal-lehenga-saree",
    title: "Bridal lehenga / saree",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#e91e63",
  },
  {
    slug: "dupatta-veil",
    title: "Dupatta (veil)",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#ff9800",
  },
  {
    slug: "bridal-blouse",
    title: "Bridal blouse",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#9c27b0",
  },
  {
    slug: "latkans-for-lehenga",
    title: "Latkans for lehenga",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#4caf50",
  },
  {
    slug: "underskirt-petticoat",
    title: "Underskirt / Petticoat",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#03a9f4",
  },
  {
    slug: "bridal-heels",
    title: "Bridal heels",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#ff5722",
  },
  {
    slug: "bridal-sandals-flats",
    title: "Bridal sandals/flats",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#8bc34a",
  },
  {
    slug: "hand-clutch-potli-bag",
    title: "Hand clutch / potli bag",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#009688",
  },
  {
    slug: "bridal-robe-for-makeup",
    title: "Bridal robe for makeup",
    image:
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761801556/saree-4_hgolrb.jpg",
    accent: "#3f51b5",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const BridalWearPage = () => {
  const router = useRouter();

  const handleClick = (slug) => {
    router.push(`/bride/hindu/bridal-wear/${slug}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 text-slate-900">
      {/* Glow background circles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:px-8">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="inline rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500 shadow-sm">
            A. Bridal Wear & Accessories
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-rose-900 md:text-4xl">
            Curated Bridal Wear Collection
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-rose-900/70 md:text-base">
            Explore every detail of your bridal look—from lehenga and dupatta to
            heels and potli bags—beautifully organized into categories.
          </p>
        </motion.header>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((item) => (
            <motion.button
              key={item.slug}
              type="button"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow:
                  "0 20px 40px rgba(244, 63, 94, 0.18)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleClick(item.slug)}
              className="group relative overflow-hidden rounded-2xl bg-white/80 text-left shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur transition-colors"
            >
             {/* Image */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <motion.div
                  className="h-full w-full"
                  initial={{ scale: 1.1, rotate: -2 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover text-xl"
                  />
                </motion.div>

                {/* Gradient overlay with animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent"
                  initial={{ opacity: 0.85 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Animated shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "200%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Top label with entrance animation */}
                <motion.div 
                  className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-rose-600 shadow-lg"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Bridal Essentials
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative space-y-3 px-4 pb-4 pt-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                    {item.title}
                  </h2>
                  <span
                    className="h-8 w-8 rounded-full border border-white/60 bg-rose-50/80 text-[11px] font-semibold uppercase tracking-wide text-rose-600 shadow-sm transition group-hover:bg-rose-500 group-hover:text-white"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${item.accent}, #f97373)`,
                      opacity: 0.9,
                    }}
                  >
                    <span className="flex h-full w-full items-center justify-center">
                      Go
                    </span>
                  </span>
                </div>

               
                {/* Underline accent */}
                <div className="mt-1 h-[2px] w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${item.accent}, #fb7185)`,
                    }}
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* Sub link style text for accessibility */}
                <div className="flex items-center justify-between pt-1 text-xs text-rose-600">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    Tap to open category
                  </span>
                  <Link
                    href={`/bride/hindu/bridal-wear/${item.slug}`}
                    className="underline-offset-2 hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Open
                  </Link>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default BridalWearPage;
