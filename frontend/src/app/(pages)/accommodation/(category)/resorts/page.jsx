'use client';

import React from 'react';
import { ChevronDownIcon, StarIcon, MapPinIcon, PhoneIcon, MailIcon } from '@heroicons/react/24/outline';

const ResortWebpage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 to-rose-300/30"></div>
                <img
                    src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544207/Resort_Paradise_View_zuuqqz.jpg"
                    alt="Resort Paradise View"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Escape. Unwind.<br />
                        <span className="text-rose-200">Rediscover Paradise.</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        Where luxury meets nature — and every sunrise feels like a new beginning.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-rose-300 hover:bg-rose-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
                            Explore the Resort
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-rose-400 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
                            Book Your Stay
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <ChevronDownIcon className="h-8 w-8 text-white animate-bounce" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                                A Sanctuary of Serenity and Luxury
                            </h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Nestled amidst nature's beauty, our resort offers the perfect balance between comfort and tranquility.
                                Designed to awaken your senses and soothe your soul, every corner is crafted for peace, pleasure, and unforgettable memories.
                            </p>
                            <p className="text-xl text-rose-300 font-semibold italic">
                                "More than a destination — it's a feeling."
                            </p>
                            <div className="mt-8 grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-rose-400">50+</div>
                                    <div className="text-gray-600">Luxury Rooms</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-rose-400">5★</div>
                                    <div className="text-gray-600">Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-rose-400">24/7</div>
                                    <div className="text-gray-600">Service</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544207/Resort_Garden_View_t0aavh.jpg"
                                alt="Resort Garden View"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-rose-300 text-white p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center space-x-2">
                                    <StarIcon className="h-6 w-6 fill-current" />
                                    <span className="font-bold">4.9/5</span>
                                </div>
                                <div className="text-sm">Guest Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation Section */}
            <section id="accommodation" className="py-20 bg-gradient-to-br from-rose-100 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                            Stay Amidst Nature's Embrace
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Choose from our collection of luxurious villas, serene cottages, and cozy suites — each offering breathtaking views,
                            private spaces, and thoughtful amenities that redefine relaxation.
                        </p>
                        <p className="text-xl text-rose-300 font-semibold italic mt-4">
                            "Wake up to beauty, sleep in bliss."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Luxury Villas */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544207/Luxury_Villa_oxpqcu.jpg"
                                alt="Luxury Villa"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-400 mb-4">Luxury Villas</h3>
                                <p className="text-gray-700 mb-4">
                                    Private pools, tropical gardens, and ocean views
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Private infinity pool</li>
                                    <li>• Ocean view balcony</li>
                                    <li>• King-size bedroom</li>
                                    <li>• Personal butler service</li>
                                </ul>
                                <div className="mt-6">
                                    <button className="w-full bg-rose-300 hover:bg-rose-400 text-white py-3 rounded-full font-semibold transition duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Cottages */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544205/Cottage_nbe8le.jpg"
                                alt="Cottage"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-400 mb-4">Cottages</h3>
                                <p className="text-gray-700 mb-4">
                                    Rustic charm meets modern comfort
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Garden view terrace</li>
                                    <li>• Traditional architecture</li>
                                    <li>• Modern amenities</li>
                                    <li>• Cozy fireplace</li>
                                </ul>
                                <div className="mt-6">
                                    <button className="w-full bg-rose-300 hover:bg-rose-400 text-white py-3 rounded-full font-semibold transition duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Suites */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544207/Suite_awrf1k.jpg"
                                alt="Suite"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-rose-400 mb-4">Suites</h3>
                                <p className="text-gray-700 mb-4">
                                    Spacious elegance with panoramic scenery
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Panoramic windows</li>
                                    <li>• Separate living area</li>
                                    <li>• Premium furnishings</li>
                                    <li>• Jacuzzi bathroom</li>
                                </ul>
                                <div className="mt-6">
                                    <button className="w-full bg-rose-300 hover:bg-rose-400 text-white py-3 rounded-full font-semibold transition duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dining Section */}
            <section id="dining" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544205/Beachfront_Dining_ud7zac.jpg"
                                alt="Beachfront Dining"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute top-6 right-6 bg-white p-4 rounded-2xl shadow-lg">
                                <div className="text-rose-400 font-bold text-lg">Chef's Special</div>
                                <div className="text-gray-600 text-sm">Fresh Catch of the Day</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                                Flavors Inspired by the Earth and Sea
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Our chefs craft dishes that celebrate the bounty of nature — fresh, local, and unforgettable.
                                Whether it's dining under the stars or enjoying breakfast by the beach, every meal is a moment to savor.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-rose-100 p-3 rounded-full">
                                        <span className="text-rose-400 text-xl">🏖️</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Open-air beachfront dining</h3>
                                        <p className="text-gray-600">Dine with your toes in the sand</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-rose-100 p-3 rounded-full">
                                        <span className="text-rose-400 text-xl">🌱</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Farm-to-table freshness</h3>
                                        <p className="text-gray-600">Locally sourced ingredients</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-rose-100 p-3 rounded-full">
                                        <span className="text-rose-400 text-xl">🍹</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Signature cocktails and exotic desserts</h3>
                                        <p className="text-gray-600">Crafted by master mixologists</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl text-rose-300 font-semibold italic">
                                "Taste the rhythm of nature."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wellness & Spa Section */}
            <section className="py-20 bg-gradient-to-br from-rose-100 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                            Rejuvenate the Body, Refresh the Soul
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Step into a world of calm. Our spa experiences draw inspiration from traditional therapies and natural elements —
                            offering a holistic journey to harmony and renewal.
                        </p>
                        <p className="text-xl text-rose-300 font-semibold italic mt-4">
                            "Wellness woven into every breath."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">💆</span>
                            </div>
                            <h3 className="text-xl font-bold text-rose-400 mb-4">Nature-inspired spa rituals</h3>
                            <p className="text-gray-700">Traditional therapies using organic botanicals</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🧘</span>
                            </div>
                            <h3 className="text-xl font-bold text-rose-400 mb-4">Yoga and meditation retreats</h3>
                            <p className="text-gray-700">Find inner peace with guided sessions</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🌸</span>
                            </div>
                            <h3 className="text-xl font-bold text-rose-400 mb-4">Herbal baths and aromatherapy</h3>
                            <p className="text-gray-700">Therapeutic treatments for complete relaxation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiences & Activities */}
            <section id="experiences" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                            Adventure, Relaxation, and Everything In Between
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Whether you seek adventure or tranquility, our resort offers something for everyone. From sunrise yoga and guided nature walks
                            to water sports and bonfire nights, every experience brings joy and connection.
                        </p>
                        <p className="text-xl text-rose-300 font-semibold italic mt-4">
                            "Every moment, a new memory."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544700/Nature_Trails_bz8ws8.jpg" alt="Nature Trails" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="font-bold text-rose-400 mb-2">Nature trails & cycling</h3>
                            <p className="text-gray-600 text-sm">Explore pristine wilderness paths</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544701/Water_Sports_hhp3uf.jpg" alt="Water Sports" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="font-bold text-rose-400 mb-2">Kayaking & snorkeling</h3>
                            <p className="text-gray-600 text-sm">Discover underwater wonders</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544700/Cultural_Evening_yidh3p.jpg" alt="Cultural Evening" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="font-bold text-rose-400 mb-2">Cultural evenings & live music</h3>
                            <p className="text-gray-600 text-sm">Experience local traditions</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544700/Stargazing_n7wy2f.jpg" alt="Stargazing" className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="font-bold text-rose-400 mb-2">Stargazing by the shore</h3>
                            <p className="text-gray-600 text-sm">Marvel at celestial beauty</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events & Celebrations */}
            <section className="py-20 bg-gradient-to-br from-rose-100 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                                Celebrate in Paradise
                            </h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Turn your special moments into magical memories. Whether it's a destination wedding, an anniversary, or a corporate retreat,
                                our resort provides the perfect setting — framed by nature, elevated by elegance.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="bg-rose-300 w-2 h-2 rounded-full"></div>
                                    <span className="text-gray-700">Beachfront lawns</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-rose-300 w-2 h-2 rounded-full"></div>
                                    <span className="text-gray-700">Open-air pavilions</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-rose-300 w-2 h-2 rounded-full"></div>
                                    <span className="text-gray-700">Private banquet spaces</span>
                                </div>
                            </div>

                            <p className="text-xl text-rose-300 font-semibold italic">
                                "Because every celebration deserves a view."
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544207/Wedding_Setup_fhkhq4.jpg" alt="Wedding Setup" className="rounded-2xl shadow-lg" />
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544205/Corporate_Event_wlwdqg.jpg" alt="Corporate Event" className="rounded-2xl shadow-lg mt-8" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                        Luxury with a Conscience
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                        We believe in giving back to the land that gives us so much. From eco-friendly architecture to organic farming and local sourcing,
                        sustainability is at the heart of everything we do.
                    </p>
                    <p className="text-xl text-rose-300 font-semibold italic mb-12">
                        "Nature nurtures us — we nurture it back."
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="font-bold text-rose-400 mb-2">Organic Gardens</h3>
                            <p className="text-gray-600 text-sm">Farm-to-table produce</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">💧</div>
                            <h3 className="font-bold text-rose-400 mb-2">Water Conservation</h3>
                            <p className="text-gray-600 text-sm">Rainwater harvesting</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">♻️</div>
                            <h3 className="font-bold text-rose-400 mb-2">Zero Waste</h3>
                            <p className="text-gray-600 text-sm">Comprehensive recycling</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🌞</div>
                            <h3 className="font-bold text-rose-400 mb-2">Solar Energy</h3>
                            <p className="text-gray-600 text-sm">Renewable power systems</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-gradient-to-br from-rose-100 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                            A Glimpse Into Paradise
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Explore our world through breathtaking visuals — from golden beaches and lush gardens to candlelit dinners and tranquil villas.
                        </p>
                        <p className="text-xl text-rose-300 font-semibold italic mt-4">
                            "Every picture tells a story of peace."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-4">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544205/Gallery_1_khsgr5.jpg" alt="Gallery 1" className="w-full rounded-2xl shadow-lg" />
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544206/Gallery_2_owsmpp.jpg" alt="Gallery 2" className="w-full rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-4">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544206/Gallery_3_bno5rq.jpg" alt="Gallery 3" className="w-full rounded-2xl shadow-lg" />
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544206/Gallery_4_qoz8ny.jpg" alt="Gallery 4" className="w-full rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-4">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544206/Gallery_5_cwb2zb.jpg" alt="Gallery 5" className="w-full rounded-2xl shadow-lg" />
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544206/Gallery_6_wenmbj.jpg" alt="Gallery 6" className="w-full rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-4">
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544206/Gallery_7_ibnyuk.jpg" alt="Gallery 7" className="w-full rounded-2xl shadow-lg" />
                            <img src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1761544207/Gallery_8_oaloxt.jpg" alt="Gallery 8" className="w-full rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan Your Escape Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-rose-400 mb-6">
                        Your Journey to Serenity Begins Here
                    </h2>
                    <p className="text-lg text-gray-700 mb-12 leading-relaxed">
                        Let us curate your perfect getaway — personalized to your taste, mood, and moments.
                    </p>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 border border-rose-200 rounded-full focus:outline-none focus:border-rose-300"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 border border-rose-200 rounded-full focus:outline-none focus:border-rose-300"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="date"
                                    className="w-full px-4 py-3 border border-rose-200 rounded-full focus:outline-none focus:border-rose-300"
                                />
                                <select className="w-full px-4 py-3 border border-rose-200 rounded-full focus:outline-none focus:border-rose-300">
                                    <option>Number of Guests</option>
                                    <option>1-2 Guests</option>
                                    <option>3-4 Guests</option>
                                    <option>5+ Guests</option>
                                </select>
                            </div>
                            <textarea
                                placeholder="Special Requests or Questions"
                                rows="4"
                                className="w-full px-4 py-3 border border-rose-200 rounded-2xl focus:outline-none focus:border-rose-300"
                            ></textarea>
                            <div className="space-x-4">
                                <button className="bg-rose-300 hover:bg-rose-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 transform hover:scale-105">
                                    Plan Your Stay
                                </button>
                                <button className="border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
                                    Contact Our Concierge
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ResortWebpage;
