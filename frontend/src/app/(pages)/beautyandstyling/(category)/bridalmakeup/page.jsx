import React from 'react';

export default function BridalMakeup() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[400px] md:h-[700px] flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721284/bridal-makeup-hero_xe2xoz.jpg"
          alt="Bridal Makeup Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-normal mb-4">Bridal Makeup Studio</h1>
          <p className="md:text-xl text-lg font-medium">
            Let's Make You Beautiful!
          </p>
        </div>
      </section>



      {/* Services Offered */}
      <section className="max-w-7xl mx-auto mt-20 px-6 py-6">
        {/* Enhanced Header */}

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Our Expertise
          </h2>
          {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-rose-400 to-rose-600 rounded-full"></div> */}
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Explore our professional makeup services designed to make your moments unforgettable</p>
        </div>


        {/* Enhanced Grid Layout */}
        <div className="space-y-12">
          {/* First Row - Premium Services */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {/* Bridal Air Brush */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721284/our-expertise-1_uadllk.jpg"
                  alt="Bridal Air Brush"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                  Premium
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Bridal Air Brush
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ultra-smooth finish with flawless coverage that's perfect for all-day wear and photography.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Long-lasting
                  </span>
                </div>
              </div>
            </div>

            {/* Bridal HD Makeup */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721284/our-expertise-2_chdzfg.jpg"
                  alt="Bridal HD Makeup"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                  HD Quality
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Bridal HD Makeup
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  High-definition, camera-ready makeup for glamorous bridal looks that shine in every photo.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    Photo-ready
                  </span>
                </div>
              </div>
            </div>

            {/* Traditional Makeup */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721284/our-expertise-3_dddolz.jpg"
                  alt="Traditional Bridal"
                  className="w-full h-64 object-cover  object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                  Classic
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Traditional Bridal
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Classic, timeless elegance following traditional techniques for the perfect Indian bride.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Timeless
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Special Occasion Services */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {/* Engagement */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721283/our-expertise-4_vrzaiz.jpg"
                  alt="Engagement Makeup"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                  Elegant
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Engagement Makeup
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Subtle yet stunning looks that capture the joy and romance of your special engagement moments.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    Radiant
                  </span>
                </div>
              </div>
            </div>

            {/* Sagan HD */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721280/our-expertise-5_ngpmx7.jpg"
                  alt="Sagan HD"
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                  Ceremonial
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Sagan HD Makeup
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  High-definition perfection for your engagement and sagan ceremonies with flawless finish.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Flawless
                  </span>
                </div>
              </div>
            </div>

            {/* Pre Wedding */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721280/our-expertise-6_hw17b4.jpg"
                  alt="Pre-wedding Shoot"

                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-extralight">
                  Creative
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-light text-rose-600 mb-3 group-hover:text-rose-700 transition-colors">
                  Pre-wedding Shoot
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Picture-perfect, camera-ready makeup designed specifically for your romantic pre-wedding photoshoot.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0012.586 3H7.414a1 1 0 00-.707.293L5.293 4.707A1 1 0 014.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Photo-ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      {/* Featured Bridal Looks - Large Image Grid */}
      <section className="max-w-6xl mx-auto mt-16 px-4">


        <div className="text-center mb-16 mt-4">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Featured Bridal Looks
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Chic. Timeless. Unforgettable</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Featured Look 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/featured-bridal-look-1_uawwgv.jpg"
              alt="Red Bridal Look"
              className="w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-light mb-2">Classic Red Bridal</h3>
                <p className="text-sm">Traditional elegance with modern flair</p>
              </div>
            </div>
          </div>

          {/* Large Featured Look 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/featured-bridal-look-2_kn6aqv.jpg"
              alt="Golden Bridal Look"
              className="w-full h-96 object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-light mb-2">Royal Golden Bridal</h3>
                <p className="text-sm">Luxurious and radiant perfection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Makeup Styles Showcase */}
      <section className="max-w-6xl mx-auto mt-16 px-4">

        <div className="text-center mb-8 mt-12">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Our Signature Styles
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Your style, our signature touch</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Enhanced Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Smokey Eyes */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/signature-style-1_inzwa1.jpg"
                  alt="Smokey Eyes Makeup"
                  className="w-full h-72 object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                {/* linearOverlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Enhanced Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-light text-lg mb-1">Smokey Eyes</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Dramatic & sultry
                    </p>
                  </div>
                </div>

                {/* Corner Badge */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Dewy Finish */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/signature-style-12_zbr6hl.jpg"
                  alt="Dewy Finish Makeup"
                  className="w-full h-72 object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-light text-lg mb-1">Dewy Finish</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Natural glow
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Matte Perfection */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/signature-style-3_k6pq4l.jpg"
                  alt="Matte Look Makeup"
                  className="w-full h-72 object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-light text-lg mb-1">Matte Perfection</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Flawless finish
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Glam Goddess */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/signature-style-4_wukn9v.jpg"
                  alt="Glam Look Makeup"
                  className="w-full h-72 object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="bg-rose-500/95 backdrop-blur-sm rounded-lg px-4 py-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-light text-lg mb-1">Glam Goddess</h3>
                    <p className="text-rose-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Bold & glamorous
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Before & After Style Section */}
      <section className="max-w-8xl mx-auto mt-16 px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            bridal Transformation
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Simple. Stunning. Unforgettable</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/bridal-transformation-1_ybbopz.jpg"
              alt="Bridal Makeup 1"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-4 text-center">
              <h4 className="font-medium text-rose-500 text-lg">Natural Glam</h4>
              <p className="text-gray-600 text-sm">Soft, radiant & timeless</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/bridal-transformation-2_eeq3pq.jpg"
              alt="Bridal Makeup 2"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-4 text-center">
              <h4 className="font-mdeium text-rose-500 text-lg">Bold & Beautiful</h4>
              <p className="text-gray-600 text-sm">Statement eyes & lips</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721278/bridal-transformation-3_yby4k3.jpg"
              alt="Bridal Makeup 3"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-4 text-center">
              <h4 className="font-medium text-rose-500 text-lg">Regal Elegance</h4>
              <p className="text-gray-600 text-sm">Traditional with a twist</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721277/bridal-transformation-4_kb0rfz.webp"
              alt="Bridal Makeup 3"
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-4 text-center">
              <h4 className="font-medium text-rose-500 text-lg">Regal Elegance</h4>
              <p className="text-gray-600 text-sm">Traditional with a twist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Full Width Masonry Style */}
      <section className="max-w-6xl mx-auto mt-16 px-4 pb-20">


        <div className="text-center mb-16 mt-6">
          <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
            Our Bridal Gallery
          </h2>
          <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Bridal beauty, reimagined</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="row-span-2">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721278/bridal-makeup-gallery-1_xjzejb.jpg"
              alt="Gallery 1"
              className="object-cover h-full w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            />
          </div>
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721279/bridal-makeup-gallery-2_qqpvfr.jpg"
            alt="Gallery 2"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721278/bridal-makeup-gallery-3_veogxf.jpg"
            alt="Gallery 3"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <div className="row-span-2">
            <img
              src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721278/bridal-makeup-gallery-4_swinyo.jpg"
              alt="Gallery 4"
              className="object-cover h-full w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            />
          </div>
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721277/bridal-makeup-gallery-5_in97ls.jpg"
            alt="Gallery 5"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721278/bridal-makeup-gallery-4_swinyo.jpg"
            alt="Gallery 6"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721277/bridal-makeup-gallery-7_l6zj6g.jpg"
            alt="Gallery 7"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
          <img
            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761721277/bridal-makeup-gallery-8_x8kvwv.jpg"
            alt="Gallery 8"
            className="object-cover h-48 w-full rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          />
        </div>
      </section>

      {/* Welcome & Appointment */}
      <section className="relative flex flex-col lg:flex-row max-w-7xl mx-auto px-6 md:px-10 mt-20 mb-20 gap-8">
        {/* Decorative Background Blur Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

        {/* Welcome Card - Premium Glassmorphism */}
        <div className="relative flex-1 group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-rose-400 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/60 hover:bg-white/70 transition-all duration-500">
            <div className="space-y-6">
              <div className="inline-block">
                <h2 className="text-4xl font-mdeium bg-linear-to-r from-rose-600 via-pink-500 to-rose-400 bg-clip-text text-transparent leading-tight">
                  Welcome to Bridal<br />Makeup Studio 24x7
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Book your dream bridal makeup, mehendi & hair styling with our professional team. We ensure that you look stunning on your special day!
              </p>
            </div>
          </div>
        </div>

        {/* Quick Appointment Form - Advanced Glassmorphism */}
        <div className="relative flex-1 group">
          <div className="absolute -inset-0.5 bg-linear-to-r from-pink-400 to-rose-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-linear-to-br from-rose-50/80 to-pink-50/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/60 hover:border-rose-200 transition-all duration-500">
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full">
                <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-medium text-xl text-gray-800">Quick Appointment</h3>
              </div>
            </div>

            <form className="space-y-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl px-5 py-4 bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-300 placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl px-5 py-4 bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100 outline-none transition-all duration-300 placeholder:text-gray-400"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Tell us about your requirements"
                  rows={4}
                  className="w-full rounded-2xl px-5 py-4 bg-white/90 backdrop-blur-sm border-2 border-transparent focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100 outline-none resize-none transition-all duration-300 placeholder:text-gray-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative w-full group/btn overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-rose-600 to-pink-600 transition-all duration-300 group-hover/btn:scale-105"></div>
                <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-rose-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 py-4 text-white font-light text-lg">
                  Send Enquiry
                  <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
