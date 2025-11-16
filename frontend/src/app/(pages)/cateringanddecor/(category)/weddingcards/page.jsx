'use client';

import { useState } from 'react';
import { Sparkles, Clock, Leaf, RefreshCw, Users, Heart } from 'lucide-react';

export default function WeddingCardsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const cardCategories = [
    {
      id: 1,
      name: 'Traditional Hindu Cards',
      description: 'Classic designs with traditional motifs like Ganesh, peacocks, and paisleys',
      features: ['Gold foil stamping', 'Religious symbols', 'Sanskrit verses', 'Rich colors'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300002/hindu-wedding-card_o4yaw1.jpg'
    },
    {
      id: 2,
      name: 'Royal & Grand',
      description: 'Luxurious scroll invitations with premium finishes',
      features: ['Embossing & debossing', 'Velvet boxes', 'Wax seals', 'Premium materials'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300003/royal-wedding-card_mokhg6.jpg'
    },
    {
      id: 3,
      name: 'Modern & Minimalist',
      description: 'Contemporary designs for modern couples',
      features: ['Clean layouts', 'Pastel colors', 'Elegant typography', 'Acrylic inserts'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300006/modern-wedding-card_rkkv1q.jpg'
    },
    {
      id: 4,
      name: 'Laser Cut Cards',
      description: 'Intricate laser-cut designs with precision detailing',
      features: ['Delicate patterns', 'Multi-layer designs', '3D effects', 'Artistic cutwork'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300001/laser-cut-card_e8rsym.jpg'
    },
    {
      id: 5,
      name: 'Digital Wedding Invites',
      description: 'Eco-friendly animated e-cards for WhatsApp and email',
      features: ['Instant sharing', 'Video invites', 'Interactive RSVP', 'Cost-effective'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300001/digital-wedding-invite_z6lh05.jpg'
    },
    {
      id: 6,
      name: 'Scroll & Boxed Invitations',
      description: 'Unique scroll-style cards in decorative boxes',
      features: ['Handcrafted scrolls', 'Designer boxes', 'Ribbon decorations', 'Personalized'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300003/scroll-invitation-card_eparpw.jpg'
    },
    {
      id: 7,
      name: 'Floral Design Cards',
      description: 'Beautiful botanical and floral printed invitations',
      features: ['Watercolor florals', 'Pressed flowers', 'Nature-inspired', 'Romantic themes'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300001/floral-design-card_nscxfd.jpg'
    },
    {
      id: 8,
      name: 'Custom Designer Cards',
      description: 'Bespoke designs tailored to your wedding theme',
      features: ['Fully customizable', 'Personal photos', 'Unique artwork', 'Brand storytelling'],
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761300005/custom-designer-card_u9mhxo.jpg'
    }
  ];

  const portfolioItems = [
    { id: 1, title: 'Hindu Traditional', category: 'traditional', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761301309/hindu-traditional-card_daezlt.jpg' },
    { id: 2, title: 'Royal Scroll', category: 'royal', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761301309/royal-scroll_mhpkx3.jpg' },
    { id: 3, title: 'Laser Cut', category: 'modern', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761301308/laser-cut-card_tyiafd.jpg' },
    { id: 4, title: 'Floral Elegance', category: 'floral', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761301309/floral-elegance_zukn75.jpg' },
    { id: 5, title: 'Minimalist', category: 'modern', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761301309/minimalist-card_otgnry.jpg' },
    { id: 6, title: 'Box Invitation', category: 'royal', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761301309/box-wedding-card_dylibn.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/20 to-purple-50/10">
      {/* Hero Section - Modern Glassmorphism */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761368613/weddingcards-hero_sue7c8.jpg"
          alt="Wedding Cards Hero"
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/40 via-pink-500/30 to-purple-500/40"></div>
        <div className="absolute inset-0 backdrop-blur-[1px]"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            {/* Glassmorphic container */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"></div>
              <div className="relative p-12 md:p-16">
                <h1 className="text-6xl md:text-8xl font-medium bg-gradient-to-r from-white via-rose-50 to-white bg-clip-text text-transparent mb-6 drop-shadow-2xl leading-tight">
                Crafting <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Your</span> Perfect  <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Wedding Invitations</span>
                </h1>
                <p className="text-2xl md:text-3xl text-white/95 mb-10 drop-shadow-lg font-light">
                  From Traditional to Modern - Your Dream Card Awaits
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <a href="/cateringanddecor/all-services?category=weddingcards">
                    <button className="group relative bg-white/90 backdrop-blur-sm text-rose-500 px-10 py-5 md:px-40 rounded-2xl font-normal cursor-pointer text-lg hover:bg-white transition-all shadow-2xl overflow-hidden">
                      <span className="relative z-10">View Our Collection</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-400/0 via-rose-400/10 to-rose-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#wave-gradient)" />
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(251, 207, 232, 0.1)" />
                <stop offset="100%" stopColor="rgb(248, 250, 252)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Introduction Section - Glassmorphic Cards */}
      <section className="lg:pt-28 px-4 max-w-7xl mx-auto">
        <div className="text-center md:mb-20 mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Welcome</span> to Shaddi <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">Bazaar</span> <br /> Wedding <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Cards</span>
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
            At ShaadiBAzaar, we design personalized wedding cards that reflect your love and culture
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '5000+', label: 'Designs', gradient: 'from-rose-500 to-pink-500' },
            { value: '10000+', label: 'Happy Couples', gradient: 'from-pink-500 to-purple-500' },
            { value: '100%', label: 'Customizable', gradient: 'from-purple-500 to-rose-500' },
            { value: '24/7', label: 'Support', gradient: 'from-rose-500 to-orange-500' },
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-opacity`}
              ></div>
              <div className="relative text-center p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <div className={`text-5xl font-medium bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-light">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Card Categories Grid - Modern Cards */}
      <section className="px-4 py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Explore Our <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-transparent bg-clip-text">Collections</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Choose from our diverse range of wedding card styles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cardCategories.map((category) => (
              <div key={category.id} className="group relative ">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 to-purple-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative bg-white/70 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-medium text-white">{category.name}</h3>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-600 text-sm px-3 py-1.5 rounded-full border border-rose-200/50 whitespace-nowrap font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <a href="/cateringanddecor/all-services?category=weddingcards">
                      <button className="w-full relative bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3.5 rounded-2xl font-normal hover:shadow-lg transition-all overflow-hidden group/btn cursor-pointer">
                        <span className="relative z-10">Explore Designs</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery Section - Modern Filter */}
      <section className="py-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-purple-50/30 to-rose-50/50"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              Our Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500">Designs</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Handpicked designs loved by our couples</p>
          </div>

          {/* Modern Pill Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'all', label: 'All Designs' },
              { id: 'traditional', label: 'Traditional' },
              { id: 'modern', label: 'Modern' },
              { id: 'royal', label: 'Royal' },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedCategory(filter.id)}
                className={`relative px-8 py-4 rounded-2xl font-normal cursor-pointer transition-all overflow-hidden ${
                  selectedCategory === filter.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-xl scale-105'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200'
                }`}
              >
                <span className="relative z-10">{filter.label}</span>
                {selectedCategory === filter.id && <div className="absolute inset-0 bg-white/20 animate-pulse"></div>}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems
              .filter((item) => selectedCategory === 'all' || item.category === selectedCategory)
              .map((item) => (
                <div key={item.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-400/30 to-purple-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover aspect-[3/4] group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-medium mb-4 drop-shadow-lg">{item.title}</h3>
                        <a href="/cateringanddecor/all-services?category=weddingcards">
                          <button className="relative bg-white text-rose-500 px-8 py-3 rounded-2xl font-normal hover:bg-rose-50 transition-all shadow-xl overflow-hidden group/btn cursor-pointer">
                            <span className="relative z-10">View Details</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Modern Steps */}
      <section className="px-4 py-24 bg-white">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              How It <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Works</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Trusted by thousands of happy brides for their special day</p>
          </div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Choose Your Design', desc: 'Browse our collection or request a custom design', gradient: 'from-rose-500 to-pink-500' },
              { step: '02', title: 'Customize Details', desc: 'Add your wedding information, colors, and personal touches', gradient: 'from-pink-500 to-purple-500' },
              { step: '03', title: 'Approve Sample', desc: 'Review and approve your digital or physical sample', gradient: 'from-purple-500 to-rose-500' },
              { step: '04', title: 'Print & Deliver', desc: 'We print and deliver your cards to your doorstep', gradient: 'from-rose-500 to-orange-500' }
            ].map((item, index) => (
              <div key={index} className="group flex items-center gap-8">
                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 rounded-full blur-xl group-hover:opacity-50 transition-all`}></div>
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${item.gradient} text-white rounded-full flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-all shadow-xl`}>
                    {item.step}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-3xl blur-lg group-hover:opacity-20 transition-all`}></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-lg group-hover:shadow-xl transition-all">
                    <h3 className={`text-2xl font-medium bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}>{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Glassmorphic */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50/50 to-pink-50"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              What Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500'>Couples Say</span>
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Real words from real love stories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Priya & Rahul', review: 'The laser-cut designs were absolutely stunning! Our guests loved the intricate details.', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=200&h=200&fit=crop', gradient: 'from-rose-500 to-pink-500' },
              { name: 'Anjali & Vikram', review: 'ShaadiBAzaar made our dream cards a reality. The customization options were endless!', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop', gradient: 'from-pink-500 to-purple-500' },
              { name: 'Neha & Arjun', review: 'From consultation to delivery, the service was impeccable. Highly recommended!', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop', gradient: 'from-purple-500 to-rose-500' }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-all`}></div>

                <div className="relative bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all group-hover:scale-105">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-full blur-md`}></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={`relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl ring-4 ring-transparent group-hover:ring-opacity-50 transition-all`}
                        style={{ borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1` }}
                      />
                    </div>
                  </div>
                  <div className={`text-6xl mb-6 text-center bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>"</div>
                  <p className="text-gray-700 mb-8 italic text-center leading-relaxed text-lg">{testimonial.review}</p>
                  <p className={`font-medium text-center text-xl bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`}>- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
