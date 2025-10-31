'use client';

import { useState } from 'react';

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
      name: 'Royal & Grand Wedding Cards',
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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761368613/weddingcards-hero_sue7c8.jpg" 
          alt="Wedding Cards Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/70 via-rose-300/60 to-pink-200/50"></div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Crafting Your Perfect Wedding Invitation
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              From Traditional to Modern - Your Dream Card Awaits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all shadow-xl">
                View Our Collection
              </button>
              <button className="bg-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-500 transition-all shadow-xl border-2 border-white">
                Get Free Sample
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-4">
            Welcome to ShaadiBAzaar Wedding Cards
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your wedding invitation is the first glimpse your guests get of your special day. At ShaadiBAzaar, we create stunning, personalized wedding cards that reflect your unique love story and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <div className="text-4xl font-bold text-rose-400 mb-2">5000+</div>
            <div className="text-gray-600">Designs</div>
          </div>
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <div className="text-4xl font-bold text-rose-400 mb-2">10000+</div>
            <div className="text-gray-600">Happy Couples</div>
          </div>
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <div className="text-4xl font-bold text-rose-400 mb-2">100%</div>
            <div className="text-gray-600">Customizable</div>
          </div>
          <div className="text-center p-6 bg-rose-50 rounded-2xl">
            <div className="text-4xl font-bold text-rose-400 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </section>

      {/* Card Categories Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Choose from our diverse range of wedding card styles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-400/80 to-transparent flex items-end">
                    <h3 className="text-lg font-bold text-white p-4 w-full">{category.name}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 mb-2 text-xs leading-relaxed">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {category.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-rose-50 text-rose-400 text-xs px-2 py-1 rounded-full whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-rose-400 text-white py-2 rounded-full font-semibold hover:bg-rose-500 transition-colors text-sm">
                    Explore Designs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Digital Wedding Cards for Social Media */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-4">
              Digital Wedding Cards for Social Media
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Go digital with stunning animated video invitations perfect for WhatsApp, Instagram, and Facebook. Eco-friendly, instant, and interactive - the modern way to invite your guests!
            </p>
          </div>

          {/* Features Grid with Cloudinary Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761473683/whatsapp-icon_scts6l.jpg" 
                  alt="WhatsApp Ready"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-rose-400 mb-2">WhatsApp Ready</h3>
              <p className="text-sm text-gray-600">Optimized for instant sharing on WhatsApp groups and status</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761473680/video-icon_xayo7f.jpg" 
                  alt="Animated Videos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-rose-400 mb-2">Animated Videos</h3>
              <p className="text-sm text-gray-600">Beautiful motion graphics and cinematic transitions</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000002/music-icon_digital.jpg" 
                  alt="Custom Music"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-rose-400 mb-2">Custom Music</h3>
              <p className="text-sm text-gray-600">Add your favorite songs or traditional wedding music</p>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl text-center hover:shadow-lg transition-all">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761473679/rsvp-icon_b8zzho.jpg" 
                  alt="Interactive RSVP"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-rose-400 mb-2">Interactive RSVP</h3>
              <p className="text-sm text-gray-600">Track guest responses with built-in RSVP links</p>
            </div>
          </div>

          {/* Digital Card Types with Cloudinary Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border-2 border-rose-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000010/video-invite-card_main.jpg" 
                  alt="Video Invites"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-400/90 to-transparent flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000011/video-camera-icon.png" 
                      alt="Video Icon"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white text-center">Video Invites</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-rose-400 mb-3">Cinematic Video Cards</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>✓ 30-60 second video invitations</li>
                  <li>✓ Professional animations & effects</li>
                  <li>✓ Photo slideshow integration</li>
                  <li>✓ HD quality for all platforms</li>
                </ul>
                <button className="w-full bg-rose-400 text-white py-3 rounded-full font-semibold hover:bg-rose-500 transition-colors">
                  Create video invite....
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-rose-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000012/gif-invite-card_main.jpg" 
                  alt="Animated GIF"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-400/90 to-transparent flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000013/gif-icon.png" 
                      alt="GIF Icon"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white text-center">Animated GIF</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-rose-400 mb-3">GIF E-Cards</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>✓ Lightweight & fast loading</li>
                  <li>✓ Auto-play in chat apps</li>
                  <li>✓ Looping animations</li>
                  <li>✓ Works on all devices</li>
                </ul>
                <button className="w-full bg-rose-400 text-white py-3 rounded-full font-semibold hover:bg-rose-500 transition-colors">
                  Design GIF Card
                </button>
              </div>
            </div>

            <div className="bg-white border-2 border-rose-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000014/web-invite-card_main.jpg" 
                  alt="Web Invites"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-400/90 to-transparent flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <img 
                      src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000015/web-icon.png" 
                      alt="Web Icon"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white text-center">Web Invites</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-rose-400 mb-3">Interactive Websites</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>✓ Personalized wedding website</li>
                  <li>✓ Event timeline & venue details</li>
                  <li>✓ Live RSVP tracking</li>
                  <li>✓ Photo gallery & registry links</li>
                </ul>
                <button className="w-full bg-rose-400 text-white py-3 rounded-full font-semibold hover:bg-rose-500 transition-colors">
                  Build Website
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Digital with Cloudinary Images */}
          <div className="bg-gradient-to-br from-rose-400 to-pink-400 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Choose Digital Invitations?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-3 border-white/50">
                  <img 
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000020/instant-delivery-icon.jpg" 
                    alt="Instant Delivery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Instant Delivery</h4>
                <p className="text-sm opacity-90">Send to thousands of guests in seconds across the globe</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-3 border-white/50">
                  <img 
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000021/cost-effective-icon.jpg" 
                    alt="Cost Effective"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Cost Effective</h4>
                <p className="text-sm opacity-90">Save up to 70% compared to traditional printed cards</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-3 border-white/50">
                  <img 
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000022/eco-friendly-icon.jpg" 
                    alt="Eco-Friendly"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Eco-Friendly</h4>
                <p className="text-sm opacity-90">Zero paper waste, helping save trees for future generations</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-3 border-white/50">
                  <img 
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000023/easy-updates-icon.jpg" 
                    alt="Easy Updates"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Easy Updates</h4>
                <p className="text-sm opacity-90">Change details anytime without reprinting costs</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-3 border-white/50">
                  <img 
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000024/rsvp-tracking-icon.jpg" 
                    alt="RSVP Tracking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">RSVP Tracking</h4>
                <p className="text-sm opacity-90">Real-time guest response tracking and analytics</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border-3 border-white/50">
                  <img 
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1730000025/creativity-icon.jpg" 
                    alt="Unlimited Creativity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-xl mb-2">Unlimited Creativity</h4>
                <p className="text-sm opacity-90">Animation, music, videos - possibilities are endless</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-rose-400 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-rose-500 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
              Start Creating Your Digital Invite
            </button>
            <p className="text-gray-600 mt-4">Free preview • No credit card required</p>
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-4">
            Our Featured Designs
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Handpicked designs loved by our couples
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'all' 
                  ? 'bg-rose-400 text-white shadow-lg' 
                  : 'bg-white text-rose-400 hover:bg-rose-100'
              }`}
            >
              All Designs
            </button>
            <button 
              onClick={() => setSelectedCategory('traditional')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'traditional' 
                  ? 'bg-rose-400 text-white shadow-lg' 
                  : 'bg-white text-rose-400 hover:bg-rose-100'
              }`}
            >
              Traditional
            </button>
            <button 
              onClick={() => setSelectedCategory('modern')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'modern' 
                  ? 'bg-rose-400 text-white shadow-lg' 
                  : 'bg-white text-rose-400 hover:bg-rose-100'
              }`}
            >
              Modern
            </button>
            <button 
              onClick={() => setSelectedCategory('royal')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'royal' 
                  ? 'bg-rose-400 text-white shadow-lg' 
                  : 'bg-white text-rose-400 hover:bg-rose-100'
              }`}
            >
              Royal
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems
              .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
              .map((item) => (
                <div 
                  key={item.id}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover aspect-[3/4]"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <button className="bg-white text-rose-400 px-6 py-2 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-12">
            How It Works
          </h2>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Choose Your Design', desc: 'Browse our collection or request a custom design' },
              { step: '02', title: 'Customize Details', desc: 'Add your wedding information, colors, and personal touches' },
              { step: '03', title: 'Approve Sample', desc: 'Review and approve your digital or physical sample' },
              { step: '04', title: 'Print & Deliver', desc: 'We print and deliver your cards to your doorstep' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-rose-400 text-white rounded-full flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1 bg-rose-50 p-6 rounded-2xl group-hover:bg-rose-100 transition-colors">
                  <h3 className="text-xl font-bold text-rose-400 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-rose-400 mb-12">
            What Our Couples Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Priya & Rahul', review: 'The laser-cut designs were absolutely stunning! Our guests loved the intricate details.', image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=200&h=200&fit=crop' },
              { name: 'Anjali & Vikram', review: 'ShaadiBAzaar made our dream cards a reality. The customization options were endless!', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop' },
              { name: 'Neha & Arjun', review: 'From consultation to delivery, the service was impeccable. Highly recommended!', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-rose-400"
                  />
                </div>
                <div className="text-rose-400 text-4xl mb-4 text-center">"</div>
                <p className="text-gray-700 mb-6 italic text-center">{testimonial.review}</p>
                <p className="text-rose-400 font-bold text-center">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
