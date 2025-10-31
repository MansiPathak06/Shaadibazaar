"use client";
import { useState } from 'react';
import { ChevronRight, MapPin, Waves, Star, Play, X, Sun, Anchor } from 'lucide-react';

export default function BeachVenues() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('gallery');

  const beachTypes = [
    {
      id: 1,
      name: 'Sunset Beaches',
      description: 'Golden hour ceremonies with breathtaking sunset views',
      image: 'https://i.pinimg.com/736x/b5/e1/23/b5e123ddde321aff293a3204da474dfb.jpg',
      icon: '🌅',
    },
    {
      id: 2,
      name: 'Private Beach Coves',
      description: 'Exclusive intimate celebrations away from crowds',
      image: 'https://i.pinimg.com/736x/96/21/ed/9621ed50560667b90e29ba4cd83c81ad.jpg',
      icon: '🏝️',
    },
    {
      id: 3,
      name: 'Tropical Paradise Venues',
      description: 'Lush seaside settings with palm trees and clear waters',
      image: 'https://i.pinimg.com/736x/71/37/0f/71370feedc999160da17d8a3d2dcf149.jpg',
      icon: '🌴',
    },
    {
      id: 4,
      name: 'Beachfront Pavilions',
      description: 'Modern structures with sea breeze and ocean backdrop',
      image: 'https://i.pinimg.com/736x/97/eb/52/97eb52369fbfa35e77dc468e790daa90.jpg',
      icon: '🏖️',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Sunset Beach Ceremony',
      thumbnail: 'https://i.pinimg.com/736x/c3/0d/a6/c30da6c5cd1c66f2d56fed504b6d46ae.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Beachfront Reception Glow',
      thumbnail: 'https://i.pinimg.com/1200x/ec/f8/a2/ecf8a233449c8a99cd4be1be155588b5.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Tropical Paradise Wedding',
      thumbnail: 'https://i.pinimg.com/1200x/e5/25/12/e525125b88266920a1843feb79679cb3.jpg',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  const gallery = [
    'https://i.pinimg.com/736x/36/6e/db/366edbde3d26c9ec6cd6cef8834c0b1b.jpg',
    'https://i.pinimg.com/736x/87/e3/59/87e3591ad6481b16081214f059953016.jpg',
    'https://i.pinimg.com/736x/b1/b0/ec/b1b0ec4a02fa9baecdab296bff8a5c3f.jpg',
    'https://i.pinimg.com/736x/ec/4d/a7/ec4da755320dd807b534e12acd48bdd9.jpg',
    'https://i.pinimg.com/1200x/05/38/3e/05383e05d38d0d24026c2b75a7f5e496.jpg',
    'https://i.pinimg.com/1200x/75/b6/20/75b6201188aed5c63f35b39f52c999de.jpg',
  ];

  const features = [
    { icon: '🌊', title: 'Ocean Views', desc: 'Stunning seascape backdrops for perfect moments' },
    { icon: '🌅', title: 'Golden Hour Magic', desc: 'Magical sunset lighting for ceremonies' },
    { icon: '⛱️', title: 'Complete Setup', desc: 'Beach pavilions and decorated spaces' },
    { icon: '👥', title: 'Capacity Range', desc: 'From intimate 50-guest to grand 5000+ events' },
  ];

  const amenities = [
    { icon: '🏊', label: 'Water Sports' },
    { icon: '🍹', label: 'Beach Bar' },
    { icon: '🎪', label: 'Tents & Canopies' },
    { icon: '🚣', label: 'Boat Rentals' },
    { icon: '🎭', label: 'Entertainment' },
    { icon: '🍽️', label: 'Seaside Dining' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-white via-rose-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/b5/e1/23/b5e123ddde321aff293a3204da474dfb.jpg"
            alt="Beach Wedding"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
              Beach <span className="text-rose-400">Weddings</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
              Say 'I Do' with Sand, Sea & Endless Romance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-rose-400 text-white rounded-lg font-semibold hover:bg-rose-500 transition flex items-center justify-center gap-2 shadow-lg">
                Explore Beaches <ChevronRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-rose-400 text-rose-400 rounded-lg font-semibold hover:bg-rose-50 transition shadow-lg">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose ShaadiBazaar Beach Venues?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-6 text-center border-2 border-rose-100 rounded-lg hover:border-rose-400 transition hover:shadow-lg">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beach Types Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Beachside Venue Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {beachTypes.map((beach) => (
              <div
                key={beach.id}
                className="group overflow-hidden rounded-xl border-2 border-rose-200 hover:border-rose-400 transition bg-white shadow-lg hover:shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={beach.image}
                    alt={beach.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                    <div className="text-white">
                      <div className="text-4xl mb-2">{beach.icon}</div>
                      <h3 className="text-2xl font-bold">{beach.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{beach.description}</p>
                  <button className="text-rose-400 font-semibold hover:text-rose-500 flex items-center gap-2">
                    Learn More <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Premium Amenities & Services
          </h2>
          <div className="grid md:grid-cols-6 gap-6">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="p-6 text-center border-2 border-rose-100 rounded-lg hover:border-rose-400 hover:bg-rose-50 transition">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <p className="font-semibold text-gray-900">{amenity.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Gallery Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-rose-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Experience Our Beautiful Beaches
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-8 py-3 rounded-lg font-semibold transition shadow ${
                activeTab === 'gallery'
                  ? 'bg-rose-400 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-lg font-semibold transition shadow ${
                activeTab === 'videos'
                  ? 'bg-rose-400 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Wedding Videos
            </button>
          </div>

          {/* Photo Gallery */}
          {activeTab === 'gallery' && (
            <div className="grid md:grid-cols-3 gap-6">
              {gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="h-64 rounded-lg overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition cursor-pointer group shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Beach Gallery ${idx + 1}`}
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
                  className="group relative h-64 rounded-lg overflow-hidden border-2 border-rose-200 hover:border-rose-400 transition cursor-pointer shadow-lg"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:brightness-75 transition"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-rose-400 p-4 rounded-full group-hover:bg-rose-500 transition transform group-hover:scale-110 shadow-lg">
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

      {/* Why Beach Wedding Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Say 'I Do' at the Beach?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-rose-50 to-white border-2 border-rose-200 rounded-lg">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">🌅 Romantic Backdrop</h3>
              <p className="text-gray-700">Nature's most stunning venue with endless ocean views and golden hour magic for unforgettable photos.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-rose-200 rounded-lg">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">🎉 Unique Experience</h3>
              <p className="text-gray-700">Create lasting memories with a beachside celebration that's intimate, luxurious, and absolutely memorable.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-rose-50 to-white border-2 border-rose-200 rounded-lg">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">💆 Perfect Ambiance</h3>
              <p className="text-gray-700">Combine the soothing sound of waves, salt air breeze, and natural lighting for an enchanting celebration.</p>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-rose-200 rounded-lg">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">✨ All Inclusive</h3>
              <p className="text-gray-700">Complete packages with catering, decor, entertainment, and logistics handled by our expert team.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-rose-400 to-rose-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Beach Weddings</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-lg">Venue Locations</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <p className="text-lg">Happy Guests</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready for Your Dream Beach Wedding?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let ShaadiBazaar create the perfect beachside celebration for your special day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-rose-400 text-white rounded-lg font-semibold hover:bg-rose-500 transition shadow-lg">
              Book Your Beach Venue
            </button>
            <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg">
              Request Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 bg-gradient-to-br from-blue-50 to-rose-50 border-t-2 border-rose-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg border-2 border-rose-100">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">Available 24/7 for inquiries</p>
            </div>
            <div className="p-6 bg-white rounded-lg border-2 border-rose-100">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">Get detailed quotes and info</p>
            </div>
            <div className="p-6 bg-white rounded-lg border-2 border-rose-100">
              <div className="text-3xl mb-3">🏖️</div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Personal venue tours available</p>
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
              className="absolute -top-10 right-0 text-white hover:text-rose-400 transition"
            >
              <X size={32} />
            </button>
            <iframe
              width="100%"
              height="500"
              src={selectedVideo}
              title="Beach Wedding Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}