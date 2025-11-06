// pages/conference-halls.jsx or app/conference-halls/page.jsx

'use client'; // Remove this line if using pages directory

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ConferenceHalls() {
  const [selectedEvent, setSelectedEvent] = useState('all');

  const conferenceHalls = [
    {
      id: 1,
      name: 'Grand Ballroom Hall',
      capacity: '500-800 Guests',
      size: '15,000 sq.ft',
      eventType: 'corporate',
      description: 'Spacious ballroom perfect for large corporate conferences, product launches, and annual meetings with state-of-the-art facilities.',
      features: ['High-Speed WiFi', 'HD Projectors', 'Professional Sound System', 'Stage Setup', 'VIP Seating', 'Breakout Rooms'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463166/Grand_Ballroom_Hall_tyymlc.jpg',
    },
    {
      id: 2,
      name: 'Executive Boardroom',
      capacity: '20-50 Guests',
      size: '1,200 sq.ft',
      eventType: 'corporate',
      description: 'Intimate boardroom setting ideal for executive meetings, workshops, and small business conferences with premium amenities.',
      features: ['Video Conferencing', 'Smart Boards', 'Ergonomic Seating', 'Conference Phone', 'Catering Service', 'Private Entrance'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463159/Executive_Boardroom_qqhqks.jpg',
    },
    {
      id: 3,
      name: 'Celebration Banquet Hall',
      capacity: '200-400 Guests',
      size: '8,000 sq.ft',
      eventType: 'wedding',
      description: 'Elegant hall designed for weddings, receptions, and celebrations with customizable decor and excellent catering facilities.',
      features: ['Bridal Suite', 'Dance Floor', 'Premium Lighting', 'Decorative Ceiling', 'Full Kitchen', 'Parking Space'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462889/Celebration_Banquet_Hall_gba1ku.jpg',
    },
    {
      id: 4,
      name: 'Innovation Hub',
      capacity: '100-200 Guests',
      size: '5,000 sq.ft',
      eventType: 'seminar',
      description: 'Modern conference space perfect for seminars, training sessions, and educational events with flexible seating arrangements.',
      features: ['Modular Furniture', 'Multiple Screens', 'Recording Equipment', 'Natural Lighting', 'Networking Area', 'Tech Support'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463170/Innovation_Hub_zd3mu5.jpg',
    },
    {
      id: 5,
      name: 'Garden Pavilion Hall',
      capacity: '150-300 Guests',
      size: '6,500 sq.ft',
      eventType: 'social',
      description: 'Beautiful indoor-outdoor venue ideal for social gatherings, birthday parties, and family reunions with garden views.',
      features: ['Garden Access', 'Natural Ambiance', 'Open Layout', 'Customizable Setup', 'Photo Spots', 'Bar Area'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463163/Garden_Pavilion_Hall_zkvni4.jpg',
    },
    {
      id: 6,
      name: 'Premium Conference Center',
      capacity: '300-600 Guests',
      size: '12,000 sq.ft',
      eventType: 'corporate',
      description: 'Full-service conference center with multiple breakout rooms, ideal for multi-day events, conventions, and trade shows.',
      features: ['Multiple Rooms', 'Exhibition Space', 'Green Rooms', 'Registration Desk', 'Lounge Areas', 'Full AV Support'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463176/Premium_Conference_Center_vglxtt.jpg',
    },
    {
      id: 7,
      name: 'Intimate Gathering Space',
      capacity: '30-80 Guests',
      size: '2,000 sq.ft',
      eventType: 'social',
      description: 'Cozy venue perfect for intimate celebrations, baby showers, engagement parties, and small family gatherings.',
      features: ['Cozy Atmosphere', 'Personalized Setup', 'Kitchen Access', 'Decor Flexibility', 'Parking', 'Climate Control'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463173/Intimate_Gathering_Space_gt7s95.jpg',
    },
    {
      id: 8,
      name: 'Grand Exhibition Hall',
      capacity: '800-1200 Guests',
      size: '20,000 sq.ft',
      eventType: 'exhibition',
      description: 'Massive venue designed for trade shows, exhibitions, product launches, and large-scale events with ample exhibition space.',
      features: ['High Ceilings', 'Loading Dock', 'Exhibition Booths', 'Power Supply', 'Security', 'Vendor Support'],
      cloudinaryImage: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463167/Grand_Exhibition_Hall_p40xwb.jpg',
    }
  ];

  const eventTypes = [
    {
      label: 'All Events',
      value: 'all',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462882/All_Events_zywrki.jpg'
    },
    {
      label: 'Corporate Events',
      value: 'corporate',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463150/Corporate_Events_xvtahf.jpg'
    },
    {
      label: 'Weddings',
      value: 'wedding',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463188/Weddings_f3dtvk.jpg'
    },
    {
      label: 'Seminars',
      value: 'seminar',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463180/Seminars_ult8rz.jpg'
    },
    {
      label: 'Social Events',
      value: 'social',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463183/Social_Events_flgvwm.jpg'
    },
    {
      label: 'Exhibitions',
      value: 'exhibition',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463160/Exhibitions_mxeslh.jpg'
    }
  ];

  const services = [
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462884/Audio_Visual_Equipment_hhu8e2.jpg',
      title: 'Audio Visual Equipment',
      description: 'Professional sound systems, projectors, screens, and lighting for impactful presentations.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462887/Catering_Services_flrdpm.jpg',
      title: 'Catering Services',
      description: 'Customized menus ranging from coffee breaks to full-course meals for your guests.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463162/Flexible_Seating_iglnvn.jpg',
      title: 'Flexible Seating',
      description: 'Theater, classroom, banquet, U-shape, or boardroom style arrangements as per your need.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463169/High-Speed_Internet_sjjnyq.jpg',
      title: 'High-Speed Internet',
      description: 'Reliable WiFi connectivity throughout the venue for seamless digital experiences.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463155/Event_Decoration_ty0jv8.jpg',
      title: 'Event Decoration',
      description: 'Professional decoration services to match your event theme and brand identity.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463154/Event_Coordination_tkjxqz.jpg',
      title: 'Event Coordination',
      description: 'Dedicated event managers to handle all logistics and ensure smooth execution.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462884/Ample_Parking_n10vtz.jpg',
      title: 'Ample Parking',
      description: 'Spacious parking facilities with valet services available for premium events.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463177/Security_Services_jhepfe.jpg',
      title: 'Security Services',
      description: 'Professional security personnel to ensure safety and smooth event management.'
    },
    {
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463149/Climate_Control_v4uuc8.jpg',
      title: 'Climate Control',
      description: 'Central air conditioning and heating for year-round comfort regardless of season.'
    }
  ];

  const seatingLayouts = [
    {
      name: 'Theater',
      capacity: '500+',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463184/Theater_mnatq5.jpg'
    },
    {
      name: 'Classroom',
      capacity: '200+',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462937/Classroom_u96cgj.jpg'
    },
    {
      name: 'Banquet',
      capacity: '400+',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462885/Banquet_vgmqgn.jpg'
    },
    {
      name: 'U-Shape',
      capacity: '50+',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463187/U-Shape_ytkqu5.jpg'
    },
    {
      name: 'Boardroom',
      capacity: '30+',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761462886/Boardroom_c9ggwe.jpg'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Inquiry',
      desc: 'Share your event requirements with us',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463173/Inquiry_rejmj5.jpg'
    },
    {
      step: '02',
      title: 'Site Visit',
      desc: 'Visit venues and finalize your choice',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463180/Site_Visit_zumznw.jpg'
    },
    {
      step: '03',
      title: 'Customize',
      desc: 'Personalize services and amenities',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463153/Customize_yz1mxt.jpg'
    },
    {
      step: '04',
      title: 'Execute',
      desc: 'We handle everything on event day',
      image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463156/Execute_b6w06s.jpg'
    }
  ];

  const filteredHalls = selectedEvent === 'all'
    ? conferenceHalls
    : conferenceHalls.filter(hall => hall.eventType === selectedEvent);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-rose-50">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-200/40 to-rose-200/40 z-10" />

        {/* Cloudinary Background Image */}
        <Image
          src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761463150/Conference_Halls_Hero_f53mkf.jpg"
          alt="Conference Halls Hero"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="text-center text-gray-800 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Conference Halls for Every Event
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light">
              Premium Venues for Corporate Meetings, Weddings & Celebrations
            </p>
            <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-8">
              Experience world-class conference facilities with state-of-the-art amenities,
              flexible spaces, and exceptional service for all your event needs through ShadiBazaar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-rose-500 px-8 py-3 md:px-10 md:py-4 rounded-full 
                font-semibold hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Book Now
              </button>
              <button className="bg-transparent border-2 border-gray-800 text-black px-8 py-3 md:px-10 md:py-4 
                rounded-full font-semibold hover:bg-white hover:text-rose-500 transition-all duration-300">
                View Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Welcome to ShadiBazaar Conference Halls
            </h2>
            <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're planning a corporate conference, wedding reception, seminar, or social gathering,
              our versatile conference halls provide the perfect setting. With flexible spaces ranging from
              intimate boardrooms to grand ballrooms, we cater to events of all sizes with professional service.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-600">Events Hosted</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">8+</div>
              <div className="text-sm md:text-base text-gray-600">Unique Venues</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">20K+</div>
              <div className="text-sm md:text-base text-gray-600">Max Capacity</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="text-3xl md:text-4xl font-bold text-rose-500 mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Type Filter */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">
            Choose Your Event Type
          </h2>

          {/* Filter Buttons with Images */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            {eventTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedEvent(type.value)}
                className={`px-4 md:px-6 py-3 rounded-full font-semibold transition-all duration-300 
                  flex items-center gap-2 text-sm md:text-base
                  ${selectedEvent === type.value
                    ? 'bg-rose-400 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-rose-50'
                  }`}
              >
                <div className="relative w-6 h-6 md:w-7 md:h-7">
                  <Image
                    src={type.image}
                    alt={type.label}
                    fill
                    className="object-contain"
                  />
                </div>
                {type.label}
              </button>
            ))}
          </div>

          {/* Conference Halls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredHalls.map((hall) => (
              <div
                key={hall.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 
                  transition-all duration-300 hover:shadow-2xl"
              >
                {/* Cloudinary Image - No video overlay */}
                <div className="relative h-56 md:h-64 overflow-hidden group cursor-pointer">
                  <Image
                    src={hall.cloudinaryImage}
                    alt={hall.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-rose-500">
                      {hall.capacity}
                    </div>
                    <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {hall.size}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {hall.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {hall.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                    {hall.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <span className="text-rose-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-rose-400 text-white py-3 rounded-lg font-semibold 
                    hover:bg-rose-500 transition-all duration-300 transform hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services Section with Images */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Comprehensive Services
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-white p-6 md:p-8 rounded-2xl shadow-lg 
                  transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 mx-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Event Gallery
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          {/* Cloudinary Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464699/hall1_zbc6w0.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464699/hall2_bnkiip.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464699/hall3_n5rbwd.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464700/hall4_z0lc3d.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464700/hall5_dca81x.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464706/hall6_e88xma.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464707/hall7_a5wqxa.jpg',
              'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464710/hall8_hjwyxw.jpg'
            ].map((imageUrl, index) => (
              <div
                key={index}
                className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-lg 
                  transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer"
              >
                <Image
                  src={imageUrl}
                  alt={`Event ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 
                  flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-12 h-12 relative">
                      <Image
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761464900/view_n6iivv.jpg"
                        alt="View"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seating Layouts Section with Images */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Flexible Seating Arrangements
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {seatingLayouts.map((layout, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl shadow-lg 
                  text-center transform hover:scale-105 transition-all duration-300 border border-rose-100"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3 mx-auto">
                  <Image
                    src={layout.image}
                    alt={layout.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{layout.name}</h3>
                <p className="text-sm text-gray-600">{layout.capacity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Images */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Simple Booking Process
          </h2>
          <div className="w-20 md:w-24 h-1 bg-rose-400 mx-auto mb-8 md:mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-rose-400 rounded-full 
                  flex items-center justify-center mx-auto mb-4 shadow-lg p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 
                  text-white font-bold text-sm bg-rose-500 w-8 h-8 rounded-full 
                  flex items-center justify-center z-10">
                  {item.step}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 mt-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
              What Our Clients Say
            </h2>
            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Voices That Inspire Our Journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Rajesh Kumar', role: 'Corporate Event Manager', text: 'Perfect venue for our annual conference. Professional setup and excellent service!', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465006/profile_icon_xbozqj.jpg' },
              { name: 'Priya Sharma', role: 'Bride', text: 'Our wedding reception was magical. The hall looked stunning and staff was amazing!', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465006/profile_icon_xbozqj.jpg' },
              { name: 'Amit Patel', role: 'Seminar Organizer', text: 'Great facilities and technical support. Highly recommend for educational events!', image: 'https://res.cloudinary.com/dewxpvl5s/image/upload/v1761465006/profile_icon_xbozqj.jpg' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-rose-50 p-6 rounded-xl shadow-lg border border-rose-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="text-rose-400 text-2xl mb-3">★★★★★</div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
