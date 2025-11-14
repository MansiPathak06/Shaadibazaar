import React from 'react';

export default function Lightning() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740948/lightning-banner_x0laqc.jpg"
            alt="Wedding Lighting Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-medium mb-6 text-rose-400">
            LIGHTING & SOUND
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 font-normal">
            Transform your celebrations with premium lighting decorations and quality DJ systems
          </p>
          <a href="/cateringanddecor/all-services?category=lightning">
            <button className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-light cursor-pointer transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-rose-400/10 p-8 rounded-lg">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740946/lightning-about-image_dkyb9a.jpg"
              alt="Wedding Venue Setup"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              ABOUT <span className="text-rose-400">US</span>
            </h2>
            <p className="text-gray-300 font-normal mb-4 leading-relaxed">
              We specialize in creating magical atmospheres for weddings and parties with our state-of-the-art lighting and sound systems. Our professional team ensures every moment of your celebration is perfectly illuminated and filled with crystal-clear sound.
            </p>
            <p className="text-gray-300 leading-relaxed font-normal">
              From elegant lighting decorations to powerful DJ systems, we bring your vision to life with cutting-edge technology and creative expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-black">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-white tracking-tight uppercase">
            OUR <span className="text-rose-400">SERVICES</span>
          </h2>
          <p className="text-white text-lg tracking-widest uppercase mb-2"> Professional lighting and sound solutions tailored for your special events</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740945/lightning-service-image-1_h9xg73.jpg"
              alt="Wedding Lighting"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-normal text-rose-400 mb-2">WEDDING LIGHTING</h3>
                <p className="text-sm text-gray-300">Elegant lighting setups for your dream wedding</p>
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740943/lightning-service-image-2_nxengy.jpg"
              alt="DJ Setup"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-normal text-rose-400 mb-2">DJ SYSTEMS</h3>
                <p className="text-sm text-gray-300">High-quality sound with professional DJ equipment</p>
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740941/lightning-service-image-3_pkpu5c.jpg"
              alt="Party Decorations"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-normal text-rose-400 mb-2">PARTY LIGHTING</h3>
                <p className="text-sm text-gray-300">Dynamic lighting effects for unforgettable parties</p>
              </div>
            </div>
          </div>
          {/* Service 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-rose-400/50 transition-all duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740940/lightning-service-image-4_r2l4qo.jpg"
              alt="Decorative Lighting"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-normal text-rose-400 mb-2">DECORATIONS</h3>
                <p className="text-sm text-gray-300">Creative lighting decorations for all occasions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-white tracking-tight uppercase">
              our <span className='text-rose-400'>work</span>
            </h2>
            <p className="text-white text-lg tracking-widest uppercase mb-2">Where every moment feels magical</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-1 md:row-span-2">
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740939/lightning-gallery-1_b4yoih.jpg"
                alt="Wedding Setup"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740937/lightning-gallery-2_h8a2zy.jpg"
                alt="Stage Lighting"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740936/lightning-gallery-3_vmvtxt.jpg"
                alt="DJ Performance"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740935/lightning-gallery-4_abgfzz.jpg"
                alt="Fairy Lights"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740935/lightning-gallery-5_a8m7zs.jpg"
                alt="Outdoor Lighting"
                className="w-full h-full object-cover rounded-lg shadow-xl hover:shadow-rose-400/50 transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              QUALITY <span className="text-rose-400">SOUND</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We deliver the best quality sound and attention-grabbing speaker systems to make your event memorable. Our professional DJ equipment ensures crystal-clear audio that fills every corner of your venue.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Premium Sound Systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Professional DJ Equipment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Wireless Microphones</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                <span className="text-gray-300">Custom Audio Solutions</span>
              </div>
            </div>
            <a href="/cateringanddecor/all-services?category=lightning">
              <button className="mt-8 border-2 cursor-pointer border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white px-8 py-3 rounded-full font-light transition-all duration-300">
                Book Service Now
              </button>
            </a>
          </div>
          <div className="bg-rose-400/10 p-8 rounded-lg">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761740935/lightning-equipment-session-image_xyc7uq.jpg"
              alt="DJ Equipment"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>      
    </div>
  );
}
