'use client';

import React, { useState } from 'react';
import {
    StarIcon,
    MapPinIcon,
    PhoneIcon,
    MailIcon,
    HomeIcon,
    HeartIcon,
    SunIcon,
    CalendarIcon,
    UsersIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

const GuestHouses = () => {
    const [activeTab, setActiveTab] = useState('rooms');

    return (
        <div className="min-h-screen bg-gray-50">


            {/* Hero Section - Premium Style */}
            <section id="home" className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 via-emerald-800/50 to-transparent z-10"></div>
                    <img
                        src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545199/Guest_House_View_rdlsvo.jpg"
                        alt="Guest House View"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Welcome to Your
                                <span className="block text-emerald-300">Home Away from Home</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-6 text-emerald-100 leading-relaxed">
                                Where comfort, charm, and heartfelt hospitality come together in perfect harmony.
                            </p>
                            <p className="text-lg mb-8 text-gray-100 leading-relaxed max-w-xl">
                                Discover a cozy haven designed to make you feel at home the moment you arrive.
                                Whether you're here for a peaceful weekend, a family getaway, or a workcation surrounded by nature.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                    Explore the Guest House
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                                    Book Your Stay
                                </button>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <div className="relative hidden lg:block">
                            <div className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl">
                                <div className="flex items-center space-x-3">
                                    <StarIcon className="h-8 w-8 text-yellow-500 fill-current" />
                                    <div>
                                        <div className="text-2xl font-bold text-gray-800">4.9/5</div>
                                        <div className="text-gray-600">Guest Rating</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-32 -right-5 bg-emerald-600 text-white p-4 rounded-xl shadow-xl">
                                <div className="text-center">
                                    <div className="text-xl font-bold">50+</div>
                                    <div className="text-sm">Happy Guests</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Modern Grid Layout */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                    Where Every Stay Feels
                                    <span className="text-emerald-600"> Personal</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    Nestled in a serene setting, our guest house blends rustic charm with thoughtful elegance.
                                    Each space is designed to reflect the spirit of hospitality — warm, inviting, and filled with small touches that make a big difference.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    Here, you're not just a guest — you're part of a story woven with comfort, connection, and care.
                                </p>
                                <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600">
                                    <p className="text-xl text-emerald-800 font-semibold italic">
                                        "Luxury isn't always grand — sometimes, it's the feeling of being at home."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545200/Guest_House_Interior_ccxqpo.jpg" alt="Guest House Interior" className="rounded-2xl shadow-lg" />
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545199/Garden_View_mcybd0.jpg" alt="Garden View" className="rounded-2xl shadow-lg mt-8" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl">
                                <div className="text-center">
                                    <HeartIcon className="h-8 w-8 text-red-500 mx-auto mb-2" />
                                    <div className="font-bold text-gray-800">Family Owned</div>
                                    <div className="text-gray-600 text-sm">Since 2015</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation Section - Premium Cards */}
            <section id="rooms" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Comfort Crafted with Care
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Our rooms are designed to offer you restful nights and peaceful mornings.
                            Each one carries its own charm — natural light, warm interiors, and details that make you feel welcome and relaxed.
                        </p>
                        <div className="mt-6 inline-block bg-emerald-100 px-6 py-3 rounded-full">
                            <p className="text-emerald-800 font-semibold">"Rest easy — you've found your place to belong."</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Classic Rooms */}
                        <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545198/Classic_Room_x3qc1f.jpg" alt="Classic Room" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Popular
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Classic Rooms</h3>
                                <p className="text-gray-600 mb-4">Simple, elegant comfort for solo travelers or couples</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div>• Queen-size bed</div>
                                    <div>• Garden view</div>
                                    <div>• Private bathroom</div>
                                    <div>• Reading corner</div>
                                </div>
                                <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        {/* Garden View Rooms */}
                        <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545198/Garden_View_Room_w55ho2.jpg" alt="Garden View Room" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Garden View Rooms</h3>
                                <p className="text-gray-600 mb-4">Overlooking lush greens and open skies</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div>• Large windows</div>
                                    <div>• Garden balcony</div>
                                    <div>• Work desk</div>
                                    <div>• Morning tea setup</div>
                                </div>
                                <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        {/* Family Suites */}
                        <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545198/Family_Suite_rgegqs.jpg" alt="Family Suite" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Family
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Family Suites</h3>
                                <p className="text-gray-600 mb-4">Spacious and perfect for togetherness</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div>• Two bedrooms</div>
                                    <div>• Living area</div>
                                    <div>• Kitchenette</div>
                                    <div>• Children's corner</div>
                                </div>
                                <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>

                        {/* Private Cottage */}
                        <div className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545200/Private_Cottage_vn8ale.jpg" alt="Private Cottage" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Premium
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Private Cottage</h3>
                                <p className="text-gray-600 mb-4">Ideal for guests seeking peace and privacy</p>
                                <div className="space-y-2 text-sm text-gray-500">
                                    <div>• Separate entrance</div>
                                    <div>• Private garden</div>
                                    <div>• Full kitchen</div>
                                    <div>• Fireplace</div>
                                </div>
                                <button className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-full font-semibold transition-colors duration-300">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiences Section - Modern Grid */}
            <section id="experiences" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Simple Joys, Timeless Moments
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            From lazy mornings with freshly brewed coffee to evenings by the garden under the stars,
                            every experience at our guest house is meant to slow time down.
                        </p>
                        <div className="mt-6 inline-block bg-emerald-100 px-6 py-3 rounded-full">
                            <p className="text-emerald-800 font-semibold">"Every day here feels a little like coming home."</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                            <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <SunIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Morning Walks</h3>
                            <p className="text-gray-600">Through scenic surroundings and peaceful trails</p>
                        </div>

                        <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <MapPinIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Local Sightseeing</h3>
                            <p className="text-gray-600">Cultural experiences and nearby attractions</p>
                        </div>

                        <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                            <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <SparklesIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Bonfire Evenings</h3>
                            <p className="text-gray-600">Cozy gatherings under the starlit sky</p>
                        </div>

                        <div className="group relative bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                            <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Garden Relaxation</h3>
                            <p className="text-gray-600">Reading corners and private patios</p>
                        </div>

                        <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                            <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <UsersIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Local Flavors</h3>
                            <p className="text-gray-600">Homemade breakfasts with regional touch</p>
                        </div>

                        <div className="group relative bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300">
                            <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CalendarIcon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Peaceful Moments</h3>
                            <p className="text-gray-600">Hammocks and quiet contemplation spaces</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dining Section - Split Layout */}
            <section id="dining" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                                Homemade Goodness,
                                <span className="text-emerald-600"> Served with Love</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                At our guest house, dining feels like sharing a meal with family. Every dish is prepared with care —
                                using fresh, local ingredients and time-honored recipes.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                                        <span className="text-emerald-600 text-xl">🥞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Traditional Homemade Meals</h3>
                                        <p className="text-gray-600">Authentic recipes passed down through generations</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                                        <span className="text-emerald-600 text-xl">🌶️</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Local Delicacies</h3>
                                        <p className="text-gray-600">Regional flavors that tell the story of our land</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-emerald-100 p-3 rounded-full flex-shrink-0">
                                        <span className="text-emerald-600 text-xl">🌿</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Garden-side Dining</h3>
                                        <p className="text-gray-600">Breakfast or dinner with nature as your backdrop</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-600">
                                <p className="text-xl text-emerald-800 font-semibold italic">
                                    "Simple food, rich in flavor and love."
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545199/Homemade_Food_o7uulr.jpg" alt="Homemade Food" className="rounded-2xl shadow-lg" />
                                <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761545198/Dining_Area_kyawvm.jpg" alt="Dining Area" className="rounded-2xl shadow-lg mt-8" />
                            </div>
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-emerald-600">Fresh</div>
                                    <div className="text-gray-600 text-sm">Daily</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guest Reviews - Modern Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Stories from Our Guests
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "It truly felt like a home — every detail was perfect and the hosts were wonderful."
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">N</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">Nisha & Aditya</div>
                                    <div className="text-gray-600 text-sm">Delhi</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "The most peaceful stay we've ever had. Simple, elegant, and full of warmth."
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">E</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">Elena</div>
                                    <div className="text-gray-600 text-sm">Spain</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl">
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">
                                "Every morning felt magical — birds, coffee, and calm."
                            </p>
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">R</span>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-800">Rohit</div>
                                    <div className="text-gray-600 text-sm">Bangalore</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Section - Premium Form */}
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Your Home Awaits
                    </h2>
                    <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
                        Whether you're seeking peace, connection, or simply a beautiful escape,
                        our guest house welcomes you with open doors and open hearts.
                    </p>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <input
                                    type="date"
                                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                                />
                                <input
                                    type="date"
                                    className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                                />
                                <select className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300">
                                    <option>Number of Guests</option>
                                    <option>1 Guest</option>
                                    <option>2 Guests</option>
                                    <option>3-4 Guests</option>
                                    <option>5+ Guests</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Special Requests or Preferences"
                                rows="4"
                                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                            ></textarea>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                    Book Your Stay
                                </button>
                                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                                    Contact Us
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuestHouses;
