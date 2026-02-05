import React from 'react';
import { Camera, Video, Music, Calendar, Palette, Sparkles, ArrowLeft } from 'lucide-react';

export default function ContentDisplay({ activeSection, closeGates, isMobile }) {
  const products = [
    { icon: '💍', title: 'Wedding Rings', desc: 'Elegant wedding bands crafted with precision and passion', linear: 'from-rose-400 to-pink-600' },
    { icon: '👗', title: 'Bridal Wear', desc: 'Stunning bridal collections to shine on your special day', linear: 'from-purple-400 to-pink-600' },
    { icon: '💐', title: 'Flower Arrangements', desc: 'Artistic bouquets designed to reflect your love story', linear: 'from-green-400 to-emerald-600' },
    { icon: '🎂', title: 'Wedding Cakes', desc: 'Luxurious designer cakes with delightful flavors', linear: 'from-orange-400 to-red-600' },
    { icon: '💌', title: 'Invitations', desc: 'Bespoke cards blending tradition and modern style', linear: 'from-blue-400 to-indigo-600' },
    { icon: '🎁', title: 'Party Favors', desc: 'Charming keepsakes your guests will adore', linear: 'from-yellow-400 to-orange-600' },
  ];

  const services = [
    { icon: Camera, title: 'Photography', desc: 'Capture every smile and tear with candid artistry', linear: 'from-cyan-400 to-blue-600' },
    { icon: Video, title: 'Videography', desc: 'Cinematic storytelling for your once-in-a-lifetime event', linear: 'from-violet-400 to-purple-600' },
    { icon: Music, title: 'Live Music', desc: 'Soulful melodies keeping your guests enchanted', linear: 'from-pink-400 to-rose-600' },
    { icon: Calendar, title: 'Event Planning', desc: 'Seamless coordination and elegant designs brought to life', linear: 'from-indigo-400 to-blue-600' },
    { icon: '🍽️', title: 'Catering', desc: 'Gourmet delights that please every palate with grace', linear: 'from-emerald-400 to-green-600' },
    { icon: Palette, title: 'Beauty Services', desc: 'Transformative bridal magic with expert touch', linear: 'from-fuchsia-400 to-pink-600' },
  ];

  return (
    <>
      {/* Close/Go Back Button */}
      <button
        onClick={closeGates}
        className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 sm:hover:scale-110 shadow-xl flex items-center gap-2 group animate-fade-in text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden sm:inline">Go Back</span>
        <span className="sm:hidden">Back</span>
      </button>

      {/* Content Grid */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-3 sm:px-6 animate-fade-in-up pt-16 sm:pt-0">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 animate-slide-down">
              {activeSection === 'products' ? 'Our Products' : 'Our Services'}
            </h2>
            <div className="h-1 sm:h-1.5 w-24 sm:w-32 mx-auto bg-linear-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full animate-expand"></div>
            <p className="text-rose-200 text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
              {activeSection === 'products'
                ? 'Curated collections for your perfect day'
                : 'Professional services to bring your vision to life'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-h-[calc(100vh-200px)] sm:max-h-[60vh] overflow-y-auto px-2 sm:px-4 pb-4 sm:pb-8 scrollbar-thin scrollbar-thumb-rose-500/50 scrollbar-track-transparent">
            {(activeSection === 'products' ? products : services).map((item, idx) => {
              const IconComponent = typeof item.icon === 'string' ? null : item.icon;

              return (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/20 animate-slide-up cursor-pointer"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${item.linear} opacity-0 group-hover:opacity-10 rounded-2xl sm:rounded-3xl transition-opacity duration-500`}></div>

                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-linear-to-r ${item.linear} opacity-20 blur-xl`}></div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 sm:mb-6">
                      {IconComponent ? (
                        <div className={`inline-block p-3 sm:p-4 bg-linear-to-br ${item.linear} rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                      ) : (
                        <div className="text-5xl sm:text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                          {item.icon}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-rose-200 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-rose-200/80 leading-relaxed text-xs sm:text-sm">
                      {item.desc}
                    </p>

                    <div className={`mt-4 sm:mt-6 h-0.5 sm:h-1 w-12 sm:w-16 bg-linear-to-r ${item.linear} rounded-full opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-700`}></div>
                  </div>

                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-rose-300 animate-spin-slow" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
