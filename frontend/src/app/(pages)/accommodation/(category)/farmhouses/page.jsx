'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FarmhouseLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Cloudinary image links (same as before) ...
  const images = {
    heroBg: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631302/farmhouse-bg_y2favp.jpg",
    about: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631301/about_v1nagj.jpg",
    eventIcon: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631301/event_tkmmuf.jpg",
    venues: {
      lawn: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631302/farmhhouse_lawn_uga94z.jpg",
      hall: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631301/farmhhouse_hall_eam3di.jpg",
      pavilion: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631302/pavilion_nxwko1.jpg",
      courtyard: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631303/courtyard_wpmeog.jpg"
    },
    catering: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631301/catering1_xnfivn.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631301/catering2_wbdel9.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631302/catering3_s91sxt.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761631301/catering4_otws5p.jpg"
    ],
    decor: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632255/gallery3_fpixd3.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632253/decor_2_iykvf1.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632254/decor_3_kjxcht.jpg"
    ],
    events: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632253/event1_icia6g.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632254/event2_gwcqr3.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632254/event3_ej0lie.jpg",
    ],
    facilities: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632254/facility_1_gulrkc.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632254/facility2_qymxwj.jpg",
    ],
    gallery: [
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632255/gallery1_aqjcrf.jpg",
      "https://res.cloudinary.com/dewxpvl5s/image/upload/v1761632255/gallery2_uycov6.jpg",
    ],
  };

  const venueCards = [
    { title: "The Grand Lawn", desc: "Perfect for open-air weddings and receptions under the stars", img: images.venues.lawn, featured: true },
    { title: "The Heritage Hall", desc: "Elegant indoor banquet with countryside charm", img: images.venues.hall },
    { title: "The Poolside Pavilion", desc: "Ideal for mehendi, cocktails, and pre-wedding events", img: images.venues.pavilion },
    { title: "The Garden Courtyard", desc: "A cozy outdoor setting for birthdays and family get-togethers", img: images.venues.courtyard, wide: true }
  ];

  const eventTypes = [
    { title: 'Weddings & Engagements', img: images.events[0], color: 'from-pink-500 to-rose-500' },
    { title: 'Haldi, Mehendi & Sangeet', img: images.events[1], color: 'from-yellow-500 to-orange-500' },
    { title: 'Anniversaries & Birthdays', img: images.events[2], color: 'from-purple-500 to-indigo-500' }
  ];

  const facilities = [
    { title: 'Spacious Parking', desc: 'Valet service available', img: images.facilities[0] },
    { title: 'Indoor & Outdoor Seating', desc: 'Flexible arrangements', img: images.facilities[1] }
  ];

  // Animation variants for framer motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const hoverGrow = {
    scale: 1.05,
    transition: { duration: 0.3, ease: 'easeOut' }
  };

  return (
    <div className="bg-white font-sans antialiased">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-emerald-50 via-white to-amber-50">
        <img src={images.heroBg} alt="Farmhouse venue background" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeInUp} 
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-block mb-6 text-emerald-600 text-sm font-medium tracking-wider uppercase bg-emerald-50 px-4 py-2 rounded-full">
            Premium Farmhouse Venues
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Celebrate Amidst<br />
            <span className="text-emerald-400">Nature's Embrace</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4 max-w-3xl mx-auto font-light drop-shadow-md">
            Where open skies, lush greens, and timeless elegance meet
          </p>
          <p className="text-lg text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Welcome to our Farmhouse Banquet Halls — the perfect fusion of nature's beauty and modern celebration spaces. Whether you're planning a grand wedding, an intimate gathering, or a corporate retreat, our farm venues offer the serenity of the countryside with the sophistication of a luxury banquet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-emerald-700 transition-colors"
            >
              Explore Our Venues
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Plan Your Event
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        className="py-24 bg-white"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 text-emerald-600 text-sm font-medium tracking-wider uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Where Nature Meets Celebration
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nestled away from the city's chaos, our farmhouse banquet halls offer a sanctuary of peace and elegance. Surrounded by sprawling lawns, scenic landscapes, and elegant architecture, it's a destination designed for celebrations that breathe and bloom with beauty.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From dawn ceremonies under open skies to evening receptions beneath twinkling lights, every moment here feels magical — a perfect blend of comfort, charm, and countryside grace.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <p className="text-emerald-900 font-medium italic text-lg">
                  "More than a venue — it's a feeling of freedom and festivity."
                </p>
              </div>
            </div>
            <motion.div 
              className="relative" 
              whileHover={hoverGrow}
              tabIndex={0}
              role="img"
              aria-label="Farmhouse exterior"
              initial={{ scale: 1 }}
            >
              <div className="aspect-[4/5] bg-linear-to-br from-emerald-200 to-amber-200 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={images.about} 
                  alt="Farmhouse exterior" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 select-none">
                <img 
                  src={images.eventIcon} 
                  alt="Events Hosted" 
                  className="w-8 h-8 rounded-full bg-emerald-100 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-2xl text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Events Hosted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      

      {/* Catering Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="order-2 md:order-1 grid grid-cols-2 gap-4" whileHover={{ scale: 1.03 }}>
              {images.catering.map((img, i) => (
                <div key={i} className="aspect-square bg-linear-to-br from-orange-200 to-red-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <img src={img} alt="Catering preview" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </motion.div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Flavors That Bloom with the Celebration
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expert culinary team curates a feast that reflects your taste and occasion — from traditional favorites to international delicacies. Each dish is crafted with passion, freshness, and flair.
              </p>
              <div className="space-y-4">
                <CateringFeature img={images.catering[0]} title="Farm-to-table dining experience" desc="Fresh, locally sourced ingredients" />
                <CateringFeature img={images.catering[1]} title="Customizable multi-cuisine menus" desc="Tailored to your preferences" />
                <CateringFeature img={images.catering[2]} title="Live food counters & themed buffets" desc="Interactive dining experience" />
              </div>
              <p className="text-emerald-600 font-medium italic text-lg mt-8">
                "Savor every moment — and every bite."
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Decor Section */}
      <motion.section
        className="py-24 bg-linear-to-b from-amber-50 to-white"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Turning Nature into a Backdrop of Beauty
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our décor artists blend natural elegance with creative sophistication — using flowers, fabrics, and lighting to design spaces that truly reflect your theme.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {images.decor.map((img, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                tabIndex={0}
              >
                <div className="aspect-[4/3] bg-linear-to-br from-rose-300 to-pink-400 relative overflow-hidden rounded-2xl">
                  <img src={img} alt={`Decor style ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {["Floral & Rustic Themes", "Wedding Stages & Mandap", "Lighting & Ambiance"][i]}
                  </h3>
                  <p className="text-gray-600">
                    {[
                      "Elegant setups that bring nature indoors",
                      "Custom designs for your special moments",
                      "Creating magical atmospheres"
                    ][i]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-amber-600 font-medium italic">
              "Let your celebration bloom in every detail."
            </p>
          </div>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Perfect Venue for Every Occasion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether it's a grand celebration or an intimate affair, our farmhouse banquet halls are equipped to make every occasion seamless, elegant, and memorable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
                tabIndex={0}
                aria-label={`View details for ${event.title}`}
              >
                <div className={`bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}>
                  <div className={`${event.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover rounded-2xl" loading="lazy" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm">Crafted with care and attention to detail</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-emerald-600 font-medium italic">
              "From vows to victories — every event finds its home here."
            </p>
          </div>
        </div>
      </motion.section>

      {/* Facilities Section */}
      <motion.section
        className="py-24 bg-gray-900 text-white"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Designed for Comfort, Crafted for Perfection
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We handle every detail — so you can enjoy every moment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer"
                tabIndex={0}
                aria-label={`Facility: ${facility.title}`}
              >
                <div className="mb-4 w-12 h-12 mx-auto">
                  <img src={facility.img} alt={facility.title} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                </div>
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                <p className="text-gray-300">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-24 bg-white"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Where Every Frame Tells a Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step into our gallery of joyful memories — open-air vows, laughter under the stars, and elegant moments captured forever.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {images.gallery.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                tabIndex={0}
                aria-label={`Gallery image ${idx + 1}`}
              >
                <div className="aspect-[4/5] bg-linear-to-br from-rose-400 to-pink-600 relative rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={["Weddings & Receptions", "Décor & Lighting"][idx]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{["Weddings & Receptions", "Décor & Lighting"][idx]}</h3>
                    <p className="text-white/80 text-sm uppercase tracking-wider">{["Love Stories", "Design Excellence"][idx]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-24 bg-linear-to-br from-emerald-600 to-emerald-800 text-white relative overflow-hidden"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
      >
        <img src={images.heroBg} alt="Farmhouse cta background" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Dream Celebration Awaits in the Heart of Nature
          </h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a wedding, a family celebration, or a corporate event, our farmhouse banquet halls offer everything you need — elegant spaces, expert planning, and an atmosphere of pure bliss.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
            >
              <img src={images.calendar} alt="Calendar Icon" className="w-5 h-5" loading="lazy" />
              Book Your Farmhouse Hall
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-emerald-400 transition-all flex items-center gap-2"
            >
              <img src={images.visitPin} alt="Map Pin Icon" className="w-5 h-5" loading="lazy" />
              Schedule a Visit
            </motion.button>
          </div>
          <div className="mt-16 pt-16 border-t border-emerald-400/30">
            <p className="text-2xl md:text-3xl font-light italic text-emerald-50">
              "Celebrate naturally, elegantly, beautifully — only at our Farmhouse Banquet Halls."
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function CateringFeature({ img, title, desc }) {
  return (
    <div className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer">
      <img src={img} alt={title} className="w-10 h-10 rounded-lg object-cover" loading="lazy" />
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
