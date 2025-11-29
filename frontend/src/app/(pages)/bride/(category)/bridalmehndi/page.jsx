// src/app/(pages)/bride/(category)/mehndi/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const MEHNDI_SECTIONS = [
  {
    key: "traditional",
    title: "Traditional Bridal Mehndi",
    href: "/bride/category/mehndi/traditional",
    tagline: "Full-hand, intricate Indian motifs for classic brides.",
    image:
      "https://i.pinimg.com/736x/a6/cb/12/a6cb123923546600ecdb3b3ec4be8079.jpg",
    bulletPoints: [
      "Dense front & back hand designs up to elbow, feet up to calf.",
      "Peacocks, paisleys, mandalas, dulha–dulhan motifs and name‑hiding elements.",
      "Includes consultation on design style, stain‑care and application timing.",
    ],
    highlight: "Ideal for main wedding day and traditional ceremonies.",
  },
  {
    key: "arabic",
    title: "Arabic & Indo‑Arabic Mehndi",
    href: "/bride/category/mehndi/arabic",
    tagline: "Bold, flowing trails with modern empty‑space aesthetics.",
    image:
      "https://i.pinimg.com/736x/e1/00/d6/e100d6e3c45d348ae1f706364bdaa75b.jpg",
    bulletPoints: [
      "Floral vines, leaves and diagonal trails for hands and arms.",
      "Quicker application with bold outlines and stylish negative spaces.",
      "Perfect for sangeet, cocktail and pre‑wedding shoots.",
    ],
    highlight: "For brides who want elegant, less‑dense designs.",
  },
  {
    key: "portrait",
    title: "Portrait & Theme Mehndi",
    href: "/bride/category/mehndi/portrait",
    tagline: "Custom illustrations of the couple and story‑based elements.",
    image:
      "https://i.pinimg.com/1200x/45/ef/2a/45ef2aa198db7a116236e81b770331fe.jpg",
    bulletPoints: [
      "Couple portraits, proposal scenes, wedding venues, pet motifs and more.",
      "Personalised elements like dates, initials, hashtags and landmarks.",
      "Detailed consultation with sketch reference before final application.",
    ],
    highlight: "Best suited for brides who love personalised storytelling.",
  },
  {
    key: "engagement",
    title: "Engagement & Minimal Bridal Mehndi",
    href: "/bride/category/mehndi/engagement",
    tagline: "Soft, pretty designs that keep the ring the hero.",
    image:
      "https://i.pinimg.com/736x/b0/91/9c/b0919cde3c574917630d5ae49b77b1be.jpg",
    bulletPoints: [
      "Front hand focus with finger detailing and delicate mandalas.",
      "Back‑hand ring‑centric patterns perfect for close‑up photos.",
      "Light designs for brides who prefer subtle, modern aesthetics.",
    ],
    highlight: "Ideal for roka, engagement and small pre‑wedding events.",
  },
];

export default function BridalMehndiPage() {
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[url('https://i.pinimg.com/736x/5f/fc/a6/5ffca6e5112d4f88d5dacec82d14e0fa.jpg')] bg-cover bg-center">
        <div className="bg-white/60">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto px-4 h-80 py-16 text-center"
          >
            <p className="tracking-[0.35em] text-sm uppercase text-amber-600 mb-3">
              ShaadiBazaar Bride
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
              Bridal Mehndi Journey
            </h1>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Explore traditional, Arabic, portrait and engagement mehndi styles
              to design a bridal look that matches your outfits, ceremonies and
              personality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-5xl mx-auto px-4 pt-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-amber-100 shadow-[0_18px_60px_rgba(248,187,89,0.25)] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-1">
              Plan your mehndi look, step by step
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Tap any style below to open a detailed page later with design
              options, hand‑foot coverage and package pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs md:text-sm text-amber-700 font-medium">
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
              Full Bridal
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
              Arabic Trails
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-100">
              Portrait Themes
            </span>
          </div>
        </div>
      </section>

      {/* Long detailed sections (timeline-style) */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-1/2 md:before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-200 before:to-transparent">
          {MEHNDI_SECTIONS.map((sec, index) => (
            <motion.div
              key={sec.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="relative md:flex md:items-stretch md:gap-8"
            >
              {/* timeline dot */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 -translate-x-1 w-4 h-4 rounded-full bg-white border-2 border-amber-300 shadow-sm" />

              {/* image side */}
              <div className="mt-6 md:mt-0 md:w-1/2">
                <button
                  type="button"
                  onClick={() => handleClick(sec.href)}
                  className="w-full text-left"
                >
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.01,
                      boxShadow: "0 22px 55px rgba(0,0,0,0.18)",
                    }}
                    className="overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg border border-amber-100"
                  >
                    <div className="relative h-72 md:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/70 via-transparent to-amber-200/60" />
                      <div
                        className="absolute inset-0 bg-contain bg-center scale-105 hover:scale-110 transition-transform duration-700"
                        style={{ backgroundImage: `url(${sec.image})` }}
                      />
                      <div className="absolute inset-x-4 bottom-4 bg-black/35 rounded-2xl px-4 py-2">
                        <p className="text-xs md:text-sm text-amber-50">
                          {sec.tagline}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </button>
              </div>

              {/* text side */}
              <div className="md:w-1/2 md:pt-4 md:px-2">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-amber-800">
                  {sec.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3">
                  {sec.highlight}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[13px] md:text-sm text-gray-600">
                  {sec.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleClick(sec.href)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/80 px-4 py-1.5 text-xs md:text-sm font-semibold text-amber-700 hover:bg-amber-100 transition-colors"
                >
                  View {sec.title.split(" ")[0]} packages →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
