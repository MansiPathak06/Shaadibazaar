"use client";
import { useState } from 'react';
import { ChevronRight, MapPin, Leaf, Star, Play, X } from 'lucide-react';

export default function GardensVenue() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('gallery');

  const gardenTypes = [
    {
      id: 1,
      name: 'Flower Gardens',
      description: 'Blooming paradise with colorful flowers and natural beauty',
      image: 'https://i.pinimg.com/1200x/62/fc/f0/62fcf0a2930a6d068171e4c0cdd3ddcf.jpg',
      icon: '🌸',
    },
    {
      id: 2,
      name: 'Rose Gardens',
      description: 'Elegant rose landscapes perfect for romantic celebrations',
      image: 'https://i.pinimg.com/1200x/3a/b8/9e/3ab89e8915cb68ef38e8ba2ab133b080.jpg',
      icon: '🌹',
    },
    {
      id: 3,
      name: 'Manicured Lawns',
      description: 'Perfect open spaces for grand wedding setups',
      image: 'https://i.pinimg.com/1200x/8a/98/37/8a983737ba5cf9ec7918512e9b4a3723.jpg',
      icon: '🌿',
    },
    {
      id: 4,
      name: 'Water Gardens',
      description: 'Serene garden settings with water features and fountains',
      image: 'https://i.pinimg.com/736x/96/21/ed/9621ed50560667b90e29ba4cd83c81ad.jpg',
      icon: '💧',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Grand Garden Wedding',
      thumbnail: 'https://i.pinimg.com/736x/68/3f/98/683f98f81122f6b2749daff8c5918a2b.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Rose Garden Ceremony',
      thumbnail: 'https://i.pinimg.com/736x/b8/14/db/b814db14106e4e71799c17920e01d880.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Evening Reception Setup',
      thumbnail: 'https://i.pinimg.com/1200x/fe/c3/ca/fec3ca18922c1549c42e84516b8faaa5.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  const gallery = [
    'https://i.pinimg.com/1200x/fc/9b/81/fc9b8188d6dd041e253160257318ed06.jpg',
    'https://i.pinimg.com/736x/4d/a9/62/4da9628cd59c14d7fc0602ca37ad05ad.jpg',
    'https://i.pinimg.com/736x/ec/c5/6f/ecc56f21d2b1e7c01cda3e537d11576c.jpg',
    'https://i.pinimg.com/736x/e2/b6/ad/e2b6ad0334b1a4095feae5f5c77971a0.jpg',
    'https://i.pinimg.com/1200x/96/ee/23/96ee2335cd543af3ec9771345c3a70f3.jpg',
    'https://i.pinimg.com/736x/29/2d/7d/292d7d81369b3815a84c05b3ee6fff9b.jpg',
  ];

  const features = [
    { icon: '📍', title: 'Multiple Locations', desc: 'Choose from our premium garden venues' },
    { icon: '🎉', title: 'Full Event Planning', desc: 'Complete banquet and decoration services' },
    { icon: '👥', title: '50-5000 Guests', desc: 'Capacity for events of all sizes' },
    { icon: '🎨', title: 'Custom Themes', desc: 'Personalized garden setup and decor' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-white via-rose-50 to-rose-100">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/21/08/62/210862d8a7c7d390f545bf91b70314d0.jpg"
            alt="Garden Wedding"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
              Garden <span className="text-rose-400">Venues</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
              Your Dream Wedding in Nature's Paradise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-rose-400 text-white rounded-lg font-semibold hover:bg-rose-500 transition flex items-center justify-center gap-2">
                Explore Gardens <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-rose-400 text-rose-400 rounded-lg font-semibold hover:bg-rose-50 transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose ShaadiBazaar Garden Venues?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 text-center border-2 border-rose-100 rounded-lg hover:border-rose-400 transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Garden Types Section */}
      <div className="py-16 px-4 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Garden Types & Setups
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {gardenTypes.map((garden) => (
              <div
                key={garden.id}
                className="group overflow-hidden rounded-xl border-2 border-rose-200 hover:border-rose-400 transition bg-white shadow-lg hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={garden.image}
                    alt={garden.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div className="text-white">
                      <div className="text-4xl mb-2">{garden.icon}</div>
                      <h3 className="text-2xl font-bold">{garden.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{garden.description}</p>
                  <button className="text-rose-400 font-semibold hover:text-rose-500 flex items-center gap-2">
                    Learn More <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Gallery Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            See Our Beautiful Gardens
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'gallery'
                  ? 'bg-rose-400 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'videos'
                  ? 'bg-rose-400 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Videos
            </button>
          </div>

          {/* Photo Gallery */}
          {activeTab === 'gallery' && (
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="h-64 rounded-lg overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video.url)}
                  className="group relative h-64 rounded-lg overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-rose-400 p-4 rounded-full group-hover:bg-rose-500 transition transform group-hover:scale-110">
                      <Play size={32} className="text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                    <p className="text-white font-semibold">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-rose-400 to-rose-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Contact ShaadiBazaar today for a personalized garden venue consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-rose-400 rounded-lg font-semibold hover:bg-gray-100 transition">
              Call Us Now
            </button>
            <button className="px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold hover:bg-rose-700 transition">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="py-12 px-4 bg-white border-t-2 border-rose-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">Multiple Locations</h3>
              <p className="text-gray-600 text-sm">Premium garden venues across the city</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💍</div>
              <h3 className="font-bold text-gray-900 mb-2">Complete Packages</h3>
              <p className="text-gray-600 text-sm">End-to-end wedding planning services</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">5-Star Experience</h3>
              <p className="text-gray-600 text-sm">Trusted by 1000+ happy couples</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-rose-400"
            >
              <X size={32} />
            </button>
            <iframe
              width="100%"
              height="500"
              src={selectedVideo}
              title="Wedding Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}