'use client';

import React, { useState, useEffect } from 'react';
import {
    StarIcon,
    SparklesIcon,
    CalendarIcon,
    UsersIcon,
    MicrophoneIcon,
    CakeIcon,
    BriefcaseIcon,
    HeartIcon,
    CameraIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

const BanquetHallWebpage = () => {
    const [activeVenue, setActiveVenue] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const venues = [
        {
            name: "Grand Ballroom",
            description: "Perfect for luxurious weddings and receptions",
            capacity: "500-800 Guests",
            features: ["Crystal Chandeliers", "Dance Floor", "Bridal Suite", "Premium Sound System"]
        },
        {
            name: "Crystal Hall",
            description: "Elegant interiors for intimate gatherings",
            capacity: "150-250 Guests",
            features: ["Natural Lighting", "Garden View", "Private Bar", "Intimate Seating"]
        },
        {
            name: "Emerald Lounge",
            description: "Ideal for private parties and pre-wedding functions",
            capacity: "80-120 Guests",
            features: ["Cozy Ambiance", "Flexible Setup", "Modern AV", "Terrace Access"]
        },
        {
            name: "Corporate Suite",
            description: "Tailored for meetings, conferences, and seminars",
            capacity: "50-100 Guests",
            features: ["Business Setup", "Presentation Screen", "High-Speed WiFi", "Catering Service"]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section with Parallax and Scaling Effects */}
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-linear-to-r from-amber-900/80 via-amber-800/60 to-transparent z-20"
                        style={{
                            transform: `translateY(${scrollY * 0.5}px)`
                        }}
                    ></div>
                    <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545905/Luxury_Banquet_Hall_k4yr9w.jpg"
                        alt="Luxury Banquet Hall"
                        className="w-full h-full object-cover transform scale-110"
                        style={{
                            transform: `scale(${1.1 + scrollY * 0.0002}) translateY(${scrollY * 0.3}px)`
                        }}
                    />
                </div>

                <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-white space-y-8">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    <span className="bg-amber-600/20 backdrop-blur-sm border border-amber-400/30 px-6 py-5 rounded-full text-amber-200 font-medium">
                                        Premium Event Venues
                                    </span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-mdeium leading-tight">
                                    Celebrate Life's
                                    <span className="block bg-linear-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                                        Finest Moments
                                    </span>
                                    in Grandeur
                                </h1>
                                <p className="text-xl md:text-2xl text-amber-100 leading-relaxed">
                                    Where timeless elegance meets impeccable hospitality.
                                </p>
                                <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
                                    Welcome to our banquet halls — the perfect setting for every cherished occasion.
                                    Whether it's a wedding that dreams are made of, a milestone celebration, or a corporate gathering.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button className="group bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-10 py-4 cursor-pointer rounded-full text-lg font-light transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25">
                                    <span className="flex items-center space-x-2">
                                        <span>Explore Our Halls</span>
                                        <SparklesIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                                    </span>
                                </button>
                                <button className="border-2 cursor-pointer font-light border-white/50 text-white hover:bg-white hover:text-amber-800 px-10 py-4 rounded-full text-lg transition-all duration-300 backdrop-blur-sm">
                                    Plan Your Event
                                </button>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                                    <div className="text-3xl font-medium text-amber-300">500+</div>
                                    <div className="text-white/80 text-sm">Events Hosted</div>
                                </div>
                                <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                                    <div className="text-3xl font-medium text-amber-300">4.9★</div>
                                    <div className="text-white/80 text-sm">Guest Rating</div>
                                </div>
                                <div className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                                    <div className="text-3xl font-medium text-amber-300">800</div>
                                    <div className="text-white/80 text-sm">Max Capacity</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="hidden lg:block relative">
                            <div className="absolute top-0 right-0 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="text-center">
                                    <HeartIcon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                                    <div className="text-2xl font-normal text-gray-800">Perfect</div>
                                    <div className="text-gray-600">Wedding Venue</div>
                                </div>
                            </div>
                            <div className="absolute bottom-20 right-20 bg-linear-to-r from-amber-500 to-amber-400 text-white p-6 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="text-center">
                                    <CakeIcon className="h-10 w-10 mx-auto mb-2" />
                                    <div className="font-normal">Celebrations</div>
                                    <div className="text-sm opacity-90">Made Special</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section with Modern Grid */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-amber-50/50 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="inline-block">
                                    <span className="bg-linear-to-r from-amber-100 to-amber-50 border border-amber-200 px-6 py-2 rounded-full text-amber-800 font-medium">
                                        About Our Venues
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-medium text-gray-800 leading-tight">
                                    Designed to
                                    <span className="bg-linear-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent"> Dazzle</span>,
                                    Crafted to Celebrate
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Each of our banquet spaces is thoughtfully designed to set the stage for extraordinary moments.
                                    With grand architecture, refined décor, and state-of-the-art amenities, we offer an atmosphere that enhances every celebration.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    From lavish weddings and elegant receptions to formal dinners and corporate galas,
                                    our banquet halls transform every occasion into a memory worth treasuring.
                                </p>
                            </div>

                            <div className="bg-linear-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-8 rounded-2xl">
                                <p className="text-2xl text-amber-800 font-normal italic">
                                    "Every celebration deserves a space as special as the moment itself."
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-linear-to-br from-amber-50 to-amber-100 rounded-2xl">
                                    <div className="text-3xl font-light text-amber-600">4</div>
                                    <div className="text-gray-700 font-medium">Premium Halls</div>
                                </div>
                                <div className="text-center p-6 bg-linear-to-br from-amber-50 to-amber-100 rounded-2xl">
                                    <div className="text-3xl font-light text-amber-600">24/7</div>
                                    <div className="text-gray-700 font-medium">Event Support</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <img
                                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545904/Banquet_Interior_odka6d.jpg"
                                        alt="Banquet Interior"
                                        className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545904/Event_Setup_vq3i5a.jpg"
                                        alt="Event Setup"
                                        className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                                    />
                                </div>
                                <div className="space-y-6 mt-8">
                                    <img
                                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545904/Dining_Setup_urmwoh.jpg"
                                        alt="Dining Setup"
                                        className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                                    />
                                    <img
                                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545905/Wedding_Decor_v87mw7.jpg"
                                        alt="Wedding Decor"
                                        className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-linear-to-r from-amber-600 to-amber-500 text-white p-6 rounded-2xl shadow-2xl">
                                <div className="text-center">
                                    <StarIcon className="h-8 w-8 mx-auto mb-2 fill-current" />
                                    <div className="font-bold">Premium</div>
                                    <div className="text-sm opacity-90">Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Venues Section with Interactive Cards */}
            <section id="venues" className="py-24 bg-linear-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Spaces That Reflect Your life
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Choose from elegant halls, each uniquely suited to your event</p>
                    </div>

                    {/* Interactive Venue Selector */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-8 lg:p-12">
                                <div className="space-y-6">
                                    {venues.map((venue, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setActiveVenue(index)}
                                            className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${activeVenue === index
                                                ? 'bg-linear-to-r from-amber-500 to-amber-400 text-white shadow-xl transform scale-105'
                                                : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-xl font-medium">{venue.name}</h3>
                                                <span className={`text-sm font-medium ${activeVenue === index ? 'text-amber-200' : 'text-amber-600'}`}>
                                                    {venue.capacity}
                                                </span>
                                            </div>
                                            <p className={`mb-4 ${activeVenue === index ? 'text-amber-100' : 'text-gray-600'}`}>
                                                {venue.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {venue.features.map((feature, featureIndex) => (
                                                    <span
                                                        key={featureIndex}
                                                        className={`px-3 py-1 rounded-full text-xs font-medium ${activeVenue === index
                                                            ? 'bg-white/20 text-amber-100'
                                                            : 'bg-amber-100 text-amber-800'
                                                            }`}
                                                    >
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-96 lg:h-auto">
                                <img
                                    src={`https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545905/Luxury_Banquet_Hall_k4yr9w.jpg`}
                                    alt={venues[activeVenue].name}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 transform hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <h4 className="text-2xl font-bold mb-2">{venues[activeVenue].name}</h4>
                                    <p className="text-amber-200">{venues[activeVenue].capacity}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className=" bg-white">
                <div className=" py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Complete Event Solutions
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Everything You Need for a Perfect Celebration</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Catering Service */}
                        <div className="group relative bg-linear-to-br from-amber-50 to-amber-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="bg-linear-to-r from-amber-600 to-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CakeIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-medium text-gray-800 mb-4">Catering & Cuisine</h3>
                            <p className="text-gray-600 mb-6">Flavors that elevate every celebration with customizable menus and live counters.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-amber-500" />
                                    <span>Multi-cuisine options</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-amber-500" />
                                    <span>Live cooking stations</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-amber-500" />
                                    <span>Tasting sessions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Decor Service */}
                        <div className="group relative bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="bg-linear-to-r from-purple-600 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <SparklesIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-medium text-gray-800 mb-4">Décor & Styling</h3>
                            <p className="text-gray-600 mb-6">Transforming spaces into spectacles with elegant themes and personalized touches.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-purple-500" />
                                    <span>Wedding stage setups</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-purple-500" />
                                    <span>Floral arrangements</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-purple-500" />
                                    <span>LED lighting</span>
                                </li>
                            </ul>
                        </div>

                        {/* Event Management */}
                        <div className="group relative bg-linear-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="bg-linear-to-r from-emerald-600 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CalendarIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-medium text-gray-800 mb-4">Event Management</h3>
                            <p className="text-gray-600 mb-6">Seamless planning and flawless execution for unforgettable experiences.</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                                    <span>Dedicated coordinators</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                                    <span>Audio-visual support</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircleIcon className="h-4 w-4 text-emerald-500" />
                                    <span>Valet parking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Types */}
            <section className="py-28 bg-linear-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                                A Perfect Setting for
                            </h2>
                            <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2"> Seamless planning, flawless execution, unforgettable moments</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-red-500 to-pink-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <HeartIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-medium mb-2">Weddings</h3>
                            <p className="text-red-100 text-sm">Dream ceremonies & receptions</p>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-500 to-indigo-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <BriefcaseIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-medium mb-2">Corporate</h3>
                            <p className="text-blue-100 text-sm">Events & conferences</p>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-purple-500 to-violet-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <CakeIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-medium mb-2">Celebrations</h3>
                            <p className="text-purple-100 text-sm">Birthdays & anniversaries</p>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-green-500 to-emerald-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <UsersIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-medium mb-2">Social</h3>
                            <p className="text-green-100 text-sm">Gatherings & reunions</p>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-orange-500 to-amber-600 p-8 text-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <MicrophoneIcon className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <h3 className="text-xl font-medium mb-2">Cultural</h3>
                            <p className="text-orange-100 text-sm">Programs & exhibitions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-white pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Stories That Inspire Us
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">ChatGPT said:
                            Trusted by thousands of brides for their big day</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-linear-to-br from-amber-50 to-amber-100 p-8 rounded-3xl border border-amber-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-amber-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                                "The perfect venue for our wedding — everything from décor to dining was flawless."
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 bg-linear-to-r from-amber-500 to-amber-400 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">R</span>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">Rhea & Arjun</div>
                                    <div className="text-gray-600">Delhi</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-amber-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                                "Professional, elegant, and accommodating — our corporate gala was a huge success."
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 bg-linear-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">Anita Sharma</div>
                                    <div className="text-gray-600">Event Planner</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-linear-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl border border-emerald-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="flex items-center mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-amber-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                                "Beautiful hall, great food, and the staff made us feel so special!"
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 bg-linear-to-r from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">K</span>
                                </div>
                                <div>
                                    <div className="font-medium text-gray-800">Karan Mehta</div>
                                    <div className="text-gray-600">Noida</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact/Booking Section */}
            {/* <section id="contact" className="py-24 bg-linear-to-br from-amber-600 to-amber-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-amber-800/20 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Your Dream Celebration Awaits
                    </h2>
                    <p className="text-xl text-amber-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                        Let's bring your vision to life — from choosing the perfect hall to planning every fine detail.
                        Our team is here to turn your celebration into a masterpiece of memories.
                    </p>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <input
                                    type="date"
                                    placeholder="Event Date"
                                    className="w-full px-6 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                                />
                                <select className="w-full px-6 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300">
                                    <option>Event Type</option>
                                    <option>Wedding</option>
                                    <option>Corporate Event</option>
                                    <option>Birthday Party</option>
                                    <option>Anniversary</option>
                                    <option>Other</option>
                                </select>
                                <select className="w-full px-6 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300">
                                    <option>Guest Count</option>
                                    <option>50-100</option>
                                    <option>100-200</option>
                                    <option>200-400</option>
                                    <option>400+</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Tell us about your event vision and requirements"
                                rows="4"
                                className="w-full px-6 py-4 border border-amber-200 rounded-2xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                            ></textarea>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-linear-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                                    Book a Hall
                                </button>
                                <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                                    Talk to Specialist
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default BanquetHallWebpage;
