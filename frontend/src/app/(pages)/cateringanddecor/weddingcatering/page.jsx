'use client'

import React from 'react';
import { Heart, Sparkles, Camera, Phone, ChefHat, Crown, Gem, Users, Award, CheckCircle, Star, Utensils, FlowerIcon as Flower, Clock, Flame, Coffee } from 'lucide-react';

export default function WeddingCateringWebsite() {

    const testimonials = [
        {
            text: "They made our wedding feel like a dream — everything was perfect from décor to food!",
            author: "Riya & Aarav, 2024",
            image: ""
        },
        {
            text: "The team blended tradition with modern elegance so beautifully. Every guest was amazed.",
            author: "Saanvi & Krish",
            image: ""
        },
        {
            text: "Their attention to detail is unmatched. Every flavor, every flower felt personalized.",
            author: "Isha & Rajan",
            image: ""
        }
    ];

    const packages = [
        {
            name: "Classic Charm",
            icon: <Gem className="w-12 h-12 text-amber-600" />,
            features: ["Elegant décor", "Standard catering", "Floral setup"],
            description: "Perfect for intimate celebrations"
        },
        {
            name: "Premium Delight",
            icon: <Crown className="w-12 h-12 text-amber-600" />,
            features: ["Custom themes", "Curated gourmet menu", "Entertainment coordination"],
            description: "Perfect blend of luxury and warmth"
        },
        {
            name: "Royal Affair",
            icon: <Award className="w-12 h-12 text-amber-600" />,
            features: ["Designer décor", "Luxury dining experience", "Full event management"],
            description: "Your grand wedding deserves nothing less"
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-stone-50 to-amber-50">

            {/* Hero Section */}
            <section className="relative h-screen max-h-[700px] mx-6 mt-6 rounded-3xl overflow-hidden"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="absolute inset-0 bg-linear-to-br from-amber-900/80 to-stone-900/70"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

                <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 leading-tight">
                        Exquisite Culinary<br />
                        <span className="font-medium">Experiences</span><br />
                        for Your Special Day
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-10 leading-relaxed">
                        From traditional Indian delicacies to international fusion cuisines,<br />
                        we create unforgettable gastronomic journeys for your wedding celebration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-stone-800 w-80 px-8 py-4 rounded-lg hover:bg-stone-100 hover:-translate-y-1 transition flex items-center justify-center gap-2 text-sm font-medium cursor-pointer">
                            <ChefHat size={18} /> Explore Our Menu
                        </button>
                        {/* <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm font-medium">
                            <Phone size={18} /> Get A Quote
                        </button> */}
                    </div>
                </div>
            </section>

            {/* NEW: Traditional Indian Wedding Cuisine Section */}
            <section className="py-20 px-6 bg-linear-to-br from-red-50 to-orange-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Traditional Indian Delicacies
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Authentic flavors from across India</p>
                    </div>

                    {/* Appetizers Section */}
                    <div className="mb-16">
                        {/* Section Header with Enhanced Styling */}
                        <div className="flex items-center justify-center mb-12 relative">
                            <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-red-200 to-transparent"></div>
                            <div className="relative bg-linear-to-br from-red-50 to-orange-50 px-8 py-4 rounded-full border-2 border-red-200 shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-medium text-stone-800">Appetizers & Starters</h3>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Vegetarian Starters Card */}
                            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                {/* Image Section with Enhanced Overlay */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Samosas"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                                    {/* Floating Badge */}
                                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        Pure Veg
                                    </div>

                                    {/* Title Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center mb-2">
                                            <div className="h-1 w-12 bg-green-500 rounded-full mr-3"></div>
                                            <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Vegetarian Delights</span>
                                        </div>
                                        <h4 className="text-2xl font-normal text-white">Vegetarian Starters</h4>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 bg-linear-to-br from-white to-green-50">
                                    <ul className="space-y-3">
                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Punjabi Samosa</span>
                                                <p className="text-xs text-stone-500">Spiced potato filling with tangy chutney</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Paneer Tikka</span>
                                                <p className="text-xs text-stone-500">Marinated cottage cheese grilled to perfection</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Hara Bhara Kabab</span>
                                                <p className="text-xs text-stone-500">Spinach and potato cutlets</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Mix Veg Pakora</span>
                                                <p className="text-xs text-stone-500">Crispy fritters with assorted vegetables</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Corn and Bell Pepper Tikki</span>
                                                <p className="text-xs text-stone-500">Sweet corn cutlets with peppers</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Dahi Puri</span>
                                                <p className="text-xs text-stone-500">Crispy shells with yogurt and tamarind</p>
                                            </div>
                                        </li>
                                    </ul>

                                    {/* Card Footer */}
                                    <div className="mt-6 pt-4 border-t border-green-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-green-700 uppercase tracking-wider">6 Varieties</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Non-Vegetarian Starters Card */}
                            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Kebabs"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        Non-Veg
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center mb-2">
                                            <div className="h-1 w-12 bg-red-500 rounded-full mr-3"></div>
                                            <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Meat Specialties</span>
                                        </div>
                                        <h4 className="text-2xl font-medium text-white">Non-Vegetarian Starters</h4>
                                    </div>
                                </div>

                                <div className="p-6 bg-linear-to-br from-white to-red-50">
                                    <ul className="space-y-3">
                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-red-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-kight text-stone-800">Chicken Tikka</span>
                                                <p className="text-xs text-stone-500">Yogurt-marinated chicken kebabs</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-red-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Tandoori Chicken</span>
                                                <p className="text-xs text-stone-500">Classic smoky grilled chicken</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-red-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Seekh Kebab</span>
                                                <p className="text-xs text-stone-500">Minced meat with aromatic spices</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-red-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Fish Amritsari</span>
                                                <p className="text-xs text-stone-500">Crispy battered fish fillets</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-red-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Tandoori Shrimp</span>
                                                <p className="text-xs text-stone-500">Spice-rubbed prawns</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-red-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Mutton Shammi Kebab</span>
                                                <p className="text-xs text-stone-500">Tender meat patties</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="mt-6 pt-4 border-t border-red-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-red-700 uppercase tracking-wider">6 Varieties</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Chaat & Street Food Card */}
                            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                        alt="Chaat"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                        Street Food
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center mb-2">
                                            <div className="h-1 w-12 bg-amber-500 rounded-full mr-3"></div>
                                            <span className="text-white/80 text-xs font-semibold uppercase tracking-wider">Indian Street Classics</span>
                                        </div>
                                        <h4 className="text-2xl font-medium text-white">Chaat & Street Food</h4>
                                    </div>
                                </div>

                                <div className="p-6 bg-linear-to-br from-white to-amber-50">
                                    <ul className="space-y-3">
                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-amber-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Pani Puri</span>
                                                <p className="text-xs text-stone-500">Crispy shells with flavored water</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-amber-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Bhel Puri</span>
                                                <p className="text-xs text-stone-500">Puffed rice with chutneys</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-amber-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Sev Puri</span>
                                                <p className="text-xs text-stone-500">Crispy wafers topped with vegetables</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-amber-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Papdi Chaat</span>
                                                <p className="text-xs text-stone-500">Yogurt and tamarind delight</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-amber-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Aloo Tikki Chaat</span>
                                                <p className="text-xs text-stone-500">Spiced potato patties</p>
                                            </div>
                                        </li>

                                        <li className="group/item flex items-start hover:translate-x-2 transition-transform duration-300">
                                            <div className="mt-1 mr-3 flex-shrink-0">
                                                <div className="w-7 h-7 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                    <CheckCircle className="w-4 h-4 text-amber-600" />
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-sm font-light text-stone-800">Raj Kachori</span>
                                                <p className="text-xs text-stone-500">Large stuffed puri with fillings</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="mt-6 pt-4 border-t border-amber-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-amber-700 uppercase tracking-wider">6 Varieties</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Main Course Section */}
                    <div className="mb-16">
                        {/* Section Header with Enhanced Styling */}
                        <div className="flex items-center justify-center mb-12 relative">
                            <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-red-200 to-transparent"></div>
                            <div className="relative bg-linear-to-br from-red-50 to-orange-50 px-8 py-4 rounded-full border-2 border-red-200 shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-linear-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                                        <ChefHat className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-medium text-stone-800">Main Course Delicacies</h3>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Vegetarian Main Course Card */}
                            <div className="group relative bg-linear-to-br from-white via-green-50/30 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100 overflow-hidden">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-green-300/10 rounded-full blur-3xl group-hover:bg-green-400/20 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-300/10 rounded-full blur-2xl group-hover:bg-emerald-400/20 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    {/* Card Header */}
                                    <div className="mb-8 pb-6 border-b-2 border-green-200">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-2xl font-medium text-stone-800 flex items-center">
                                                <div className="w-10 h-10 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                                </div>
                                                Vegetarian Main Course
                                            </h4>
                                        </div>
                                        <p className="text-xs text-green-700 font-light uppercase tracking-wider ml-13">Pure Vegetarian Delights</p>
                                    </div>

                                    {/* Paneer & Vegetable Sections */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-green-50">
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                                    <Sparkles className="w-5 h-5 text-green-600" />
                                                </div>
                                                <h5 className="font-medium text-stone-800 text-lg">Paneer Specialties</h5>
                                            </div>
                                            <ul className="space-y-3 text-stone-600 text-sm">
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Shahi Paneer</span>
                                                        <p className="text-xs text-stone-500">Royal creamy curry</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Kadai Paneer</span>
                                                        <p className="text-xs text-stone-500">Bell pepper and tomato gravy</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Paneer Butter Masala</span>
                                                        <p className="text-xs text-stone-500">Rich tomato-based</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Palak Paneer</span>
                                                        <p className="text-xs text-stone-500">Spinach and cottage cheese</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Paneer Tikka Masala</span>
                                                        <p className="text-xs text-stone-500">Grilled paneer curry</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-green-50">
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-3">
                                                    <Utensils className="w-5 h-5 text-emerald-600" />
                                                </div>
                                                <h5 className="font-medium text-stone-800 text-lg">Vegetable Curries</h5>
                                            </div>
                                            <ul className="space-y-3 text-stone-600 text-sm">
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Veg Kolhapuri</span>
                                                        <p className="text-xs text-stone-500">Spicy mixed vegetables</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Navratan Korma</span>
                                                        <p className="text-xs text-stone-500">Nine-gem curry</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Dum Aloo</span>
                                                        <p className="text-xs text-stone-500">Slow-cooked potatoes</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Baingan Bharta</span>
                                                        <p className="text-xs text-stone-500">Roasted eggplant mash</p>
                                                    </div>
                                                </li>
                                                <li className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                    <div className="mt-1 mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                                                    <div>
                                                        <span className="font-light text-stone-800">Bhindi Masala</span>
                                                        <p className="text-xs text-stone-500">Okra in spices</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Dal & Lentils Section */}
                                    <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-md border border-green-100">
                                        <div className="flex items-center mb-4">
                                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                                <Award className="w-5 h-5 text-white" />
                                            </div>
                                            <h5 className="font-medium text-stone-800 text-lg">Dal & Lentils</h5>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Dal Makhani</span>
                                                    <p className="text-xs text-stone-500">Slow-cooked black lentils with cream</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Dal Tadka</span>
                                                    <p className="text-xs text-stone-500">Yellow lentils tempered with spices</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Dal Panchratna</span>
                                                    <p className="text-xs text-stone-500">Five varieties of lentils</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Rajma Masala</span>
                                                    <p className="text-xs text-stone-500">Red kidney beans curry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Stats */}
                                    <div className="mt-6 pt-4 border-t border-green-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-green-700 uppercase tracking-wider">14+ Veg Varieties</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-1 bg-linear-to-r from-green-400 to-emerald-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Non-Vegetarian Main Course Card */}
                            <div className="group relative bg-linear-to-br from-white via-red-50/30 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-red-100 overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-red-300/10 rounded-full blur-3xl group-hover:bg-red-400/20 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-300/10 rounded-full blur-2xl group-hover:bg-orange-400/20 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    {/* Card Header */}
                                    <div className="mb-8 pb-6 border-b-2 border-red-200">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-2xl font-medium text-stone-800 flex items-center">
                                                <div className="w-10 h-10 bg-linear-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 shadow-md">
                                                    <div className="w-4 h-4 bg-white rounded-full"></div>
                                                </div>
                                                Non-Vegetarian Main Course
                                            </h4>
                                        </div>
                                        <p className="text-xs text-red-700 font-light uppercase tracking-wider ml-13">Premium Meat & Seafood</p>
                                    </div>

                                    {/* Chicken Specialties */}
                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 mb-6 border border-red-50">
                                        <div className="flex items-center mb-4">
                                            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                                <ChefHat className="w-5 h-5 text-red-600" />
                                            </div>
                                            <h5 className="font-medium text-stone-800 text-lg">Chicken Specialties</h5>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Butter Chicken</span>
                                                    <p className="text-xs text-stone-500">Creamy tomato-based curry</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Chicken Tikka Masala</span>
                                                    <p className="text-xs text-stone-500">Grilled chicken in rich gravy</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Chicken Korma</span>
                                                    <p className="text-xs text-stone-500">Mild creamy curry with nuts</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Chicken Curry</span>
                                                    <p className="text-xs text-stone-500">Traditional home-style</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Chicken Vindaloo</span>
                                                    <p className="text-xs text-stone-500">Spicy Goan specialty</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Kadai Chicken</span>
                                                    <p className="text-xs text-stone-500">Bell pepper and onion gravy</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mutton & Lamb */}
                                    <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-md mb-6 border border-red-100">
                                        <div className="flex items-center mb-4">
                                            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                                <Crown className="w-5 h-5 text-white" />
                                            </div>
                                            <h5 className="font-medium text-stone-800 text-lg">Mutton & Lamb</h5>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Rogan Josh</span>
                                                    <p className="text-xs text-stone-500">Kashmiri lamb curry</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Mutton Korma</span>
                                                    <p className="text-xs text-stone-500">Rich and creamy preparation</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Keema Matar</span>
                                                    <p className="text-xs text-stone-500">Minced meat with peas</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Lamb Bhuna</span>
                                                    <p className="text-xs text-stone-500">Dry-roasted meat specialty</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Seafood Selection */}
                                    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-red-50">
                                        <div className="flex items-center mb-4">
                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                                <Sparkles className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <h5 className="font-medium text-stone-800 text-lg">Seafood Selection</h5>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Fish Curry</span>
                                                    <p className="text-xs text-stone-500">Coastal style preparation</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Goan Prawn Curry</span>
                                                    <p className="text-xs text-stone-500">Coconut-based gravy</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start hover:translate-x-1 transition-transform duration-200">
                                                <div className="mt-1 mr-2 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                                                <div>
                                                    <span className="font-light text-stone-800 text-sm">Fish Tikka Masala</span>
                                                    <p className="text-xs text-stone-500">Grilled fish in curry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Stats */}
                                    <div className="mt-6 pt-4 border-t border-red-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-red-700 uppercase tracking-wider">13+ Non-Veg Varieties</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-1 bg-linear-to-r from-red-400 to-orange-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rice & Biryani Section */}
                    <div className="mb-16">
                        {/* Section Header with Enhanced Styling */}
                        <div className="flex items-center justify-center mb-12 relative">
                            <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-orange-200 to-transparent"></div>
                            <div className="relative bg-linear-to-br from-orange-50 to-yellow-50 px-8 py-4 rounded-full border-2 border-orange-200 shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                                        <Crown className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-normal text-stone-800">Biryani & Rice Varieties</h3>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Hyderabadi Biryani Card */}
                            <div className="group relative bg-linear-to-br from-orange-50 via-yellow-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 hover:border-orange-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                                {/* Decorative Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl group-hover:bg-orange-400/30 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Flame className="w-10 h-10 text-orange-600 group-hover:animate-pulse" />
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-thin shadow-md">
                                        Signature
                                    </div>

                                    {/* Title */}
                                    <h4 className="text-xl font-normal text-center text-stone-800 mb-3 group-hover:text-orange-700 transition-colors">
                                        Hyderabadi Biryani
                                    </h4>

                                    {/* Divider */}
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="h-1 w-12 bg-linear-to-r from-orange-400 to-yellow-500 rounded-full"></div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-stone-600 text-center leading-relaxed">
                                        Aromatic basmati rice with meat, cooked in dum style with saffron and spices
                                    </p>

                                    {/* Features List */}
                                    <div className="mt-6 pt-4 border-t border-orange-200">
                                        <div className="flex items-center justify-center gap-2 text-xs text-orange-700 font-thin">
                                            <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                                            <span>Traditional Dum Cooking</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Veg Dum Biryani Card */}
                            <div className="group relative bg-linear-to-br from-green-50 via-teal-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-300/20 rounded-full blur-2xl group-hover:bg-teal-400/30 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Sparkles className="w-10 h-10 text-green-600 group-hover:animate-pulse" />
                                    </div>

                                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-thin shadow-md">
                                        Pure Veg
                                    </div>

                                    <h4 className="text-xl font-medium text-center text-stone-800 mb-3 group-hover:text-green-700 transition-colors">
                                        Veg Dum Biryani
                                    </h4>

                                    <div className="flex items-center justify-center mb-4">
                                        <div className="h-1 w-12 bg-linear-to-r from-green-400 to-teal-500 rounded-full"></div>
                                    </div>

                                    <p className="text-sm text-stone-600 text-center leading-relaxed">
                                        Mixed vegetables and paneer with fragrant rice, slow-cooked to perfection
                                    </p>

                                    <div className="mt-6 pt-4 border-t border-green-200">
                                        <div className="flex items-center justify-center gap-2 text-xs text-green-700 font-thin">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span>Slow-Cooked Excellence</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lucknowi Biryani Card */}
                            <div className="group relative bg-linear-to-br from-purple-50 via-pink-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl group-hover:bg-pink-400/30 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Star className="w-10 h-10 text-purple-600 group-hover:animate-pulse" />
                                    </div>

                                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-thin shadow-md">
                                        Royal
                                    </div>

                                    <h4 className="text-xl font-medium text-center text-stone-800 mb-3 group-hover:text-purple-700 transition-colors">
                                        Lucknowi Biryani
                                    </h4>

                                    <div className="flex items-center justify-center mb-4">
                                        <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-pink-500 rounded-full"></div>
                                    </div>

                                    <p className="text-sm text-stone-600 text-center leading-relaxed">
                                        Awadhi-style biryani with tender meat and subtle spices, garnished with dry fruits
                                    </p>

                                    <div className="mt-6 pt-4 border-t border-purple-200">
                                        <div className="flex items-center justify-center gap-2 text-xs text-purple-700 font-thin">
                                            <Crown className="w-4 h-4 text-purple-500" />
                                            <span>Awadhi Tradition</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rice Specialties Card */}
                            <div className="group relative bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl group-hover:bg-orange-400/30 transition-all duration-500"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Award className="w-10 h-10 text-amber-600 group-hover:animate-pulse" />
                                    </div>

                                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-thin shadow-md">
                                        Classic
                                    </div>

                                    <h4 className="text-xl font-medium text-center text-stone-800 mb-3 group-hover:text-amber-700 transition-colors">
                                        Rice Specialties
                                    </h4>

                                    <div className="flex items-center justify-center mb-4">
                                        <div className="h-1 w-12 bg-linear-to-r from-amber-400 to-orange-500 rounded-full"></div>
                                    </div>

                                    <p className="text-sm text-stone-600 text-center leading-relaxed">
                                        Jeera Rice, Peas Pulao, Kashmiri Pulao, and Steamed Basmati
                                    </p>

                                    <div className="mt-6 pt-4 border-t border-amber-200">
                                        <div className="flex items-center justify-center gap-2 text-xs text-amber-700 font-thin">
                                            <Sparkles className="w-4 h-4 text-amber-500" />
                                            <span>4 Premium Varieties</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Breads Section */}
                    <div className="mb-16">
                        {/* Section Header with Enhanced Styling */}
                        <div className="flex items-center justify-center mb-12 relative">
                            <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-200 to-transparent"></div>
                            <div className="relative bg-linear-to-br from-amber-50 to-orange-50 px-8 py-4 rounded-full border-2 border-amber-200 shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                                        <Utensils className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-medium text-stone-800">Indian Breads</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative bg-linear-to-br from-white via-amber-50/20 to-white rounded-3xl p-10 shadow-2xl border border-amber-100 overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200/20 rounded-full blur-3xl"></div>

                            <div className="relative z-10 grid md:grid-cols-3 gap-10">
                                {/* Tandoori Breads */}
                                <div className="group relative bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-orange-200">
                                    {/* Icon Header */}
                                    <div className="flex items-center mb-6 pb-4 border-b-2 border-orange-200">
                                        <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <Flame className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-stone-800 text-lg">Tandoori Breads</h5>
                                            <p className="text-xs text-orange-600 font-thin">Clay Oven Fresh</p>
                                        </div>
                                    </div>

                                    {/* Bread List */}
                                    <ul className="space-y-4">
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Plain Naan</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Butter Naan</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Garlic Naan</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Cheese Naan</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-orange-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Tandoori Roti</span>
                                        </li>
                                    </ul>

                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-orange-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-orange-700 uppercase tracking-wider">5 Varieties</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stuffed Breads */}
                                <div className="group relative bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-green-200">
                                    {/* Icon Header */}
                                    <div className="flex items-center mb-6 pb-4 border-b-2 border-green-200">
                                        <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <Sparkles className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-stone-800 text-lg">Stuffed Breads</h5>
                                            <p className="text-xs text-green-600 font-thin">Filled Delights</p>
                                        </div>
                                    </div>

                                    {/* Bread List */}
                                    <ul className="space-y-4">
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Onion Kulcha</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Paneer Kulcha</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Aloo Paratha</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Gobi Paratha</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-green-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Pudina Paratha</span>
                                        </li>
                                    </ul>

                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-green-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-green-700 uppercase tracking-wider">5 Varieties</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Special Breads */}
                                <div className="group relative bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-purple-200">
                                    {/* Icon Header */}
                                    <div className="flex items-center mb-6 pb-4 border-b-2 border-purple-200">
                                        <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-3 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                            <Crown className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h5 className="font-medium text-stone-800 text-lg">Special Breads</h5>
                                            <p className="text-xs text-purple-600 font-thin">Premium Selection</p>
                                        </div>
                                    </div>

                                    {/* Bread List */}
                                    <ul className="space-y-4">
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Lachha Paratha</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Missi Roti</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Roomali Roti</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Bhatura</span>
                                        </li>
                                        <li className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-purple-200 group-hover/item:scale-110 transition-all duration-300 shadow-sm">
                                                <div className="w-2.5 h-2.5 bg-purple-500 rounded-full"></div>
                                            </div>
                                            <span className="text-stone-700 font-medium">Puri</span>
                                        </li>
                                    </ul>

                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-purple-200 flex items-center justify-between">
                                        <span className="text-xs font-thin text-purple-700 uppercase tracking-wider">5 Varieties</span>
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* NEW: Desserts & Sweets Section */}

            <section className="px-6 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center justify-center mb-12 relative">
                        <div className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-amber-200 to-transparent"></div>
                        <div className="relative bg-linear-to-br from-amber-50 to-orange-50 px-8 py-4 rounded-full border-2 border-amber-200 shadow-lg">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4 shadow-md">
                                    <Utensils className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-medium text-stone-800">Indian Sweets</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Traditional Mithai Card */}
                        <div className="bg-gradient-to-br from-white to-orange-50/40 rounded-3xl shadow-xl border border-orange-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1563379091138-acf87743cea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Indian Sweets"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-3 rounded-xl shadow-lg inline-block">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <h4 className="text-2xl font-medium text-stone-800">Traditional Mithai</h4>
                                    <span className="text-xs text-orange-600 font-thin bg-orange-100 px-3 py-1 rounded-full">Heritage</span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Gulab Jamun</strong>
                                            <span className="text-stone-500 text-xs block">Soft milk dumplings in syrup</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Rasmalai</strong>
                                            <span className="text-stone-500 text-xs block">Cottage cheese in sweetened milk</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Jalebi</strong>
                                            <span className="text-stone-500 text-xs block">Crispy sweet spirals</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Rasgulla</strong>
                                            <span className="text-stone-500 text-xs block">Spongy cheese balls in syrup</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Kaju Katli</strong>
                                            <span className="text-stone-500 text-xs block">Cashew fudge</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Motichoor Ladoo</strong>
                                            <span className="text-stone-500 text-xs block">Sweet gram flour balls</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700 font-medium">Mysore Pak, Barfi Varieties</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-orange-200/50">
                                    <span className="text-xs font-thin text-orange-600 flex items-center gap-2">
                                        8 VARIETIES
                                        <span className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hot Desserts Card */}
                        <div className="bg-gradient-to-br from-white to-rose-50/40 rounded-3xl shadow-xl border border-rose-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Hot Desserts"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-3 rounded-xl shadow-lg inline-block">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <h4 className="text-2xl font-medium text-stone-800">Hot Desserts</h4>
                                    <span className="text-xs text-rose-600 font-thin bg-rose-100 px-3 py-1 rounded-full">Warm</span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Gajar Halwa</strong>
                                            <span className="text-stone-500 text-xs block">Carrot pudding with nuts</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Moong Dal Halwa</strong>
                                            <span className="text-stone-500 text-xs block">Lentil-based dessert</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Sooji Halwa</strong>
                                            <span className="text-stone-500 text-xs block">Semolina pudding</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Kesar Kheer</strong>
                                            <span className="text-stone-500 text-xs block">Saffron rice pudding</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Badam Kheer</strong>
                                            <span className="text-stone-500 text-xs block">Almond milk pudding</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Shahi Tukda</strong>
                                            <span className="text-stone-500 text-xs block">Bread pudding royal style</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700 font-medium">Phirni, Malpua</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-rose-200/50">
                                    <span className="text-xs font-thin text-rose-600 flex items-center gap-2">
                                        8 VARIETIES
                                        <span className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Cold Desserts Card */}
                        <div className="bg-gradient-to-br from-white to-purple-50/40 rounded-3xl shadow-xl border border-purple-100/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Cold Desserts"
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl shadow-lg inline-block">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <h4 className="text-2xl font-medium text-stone-800">Cold Desserts</h4>
                                    <span className="text-xs text-purple-600 font-thin bg-purple-100 px-3 py-1 rounded-full">Chilled</span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Kulfi</strong>
                                            <span className="text-stone-500 text-xs block">Traditional Indian ice cream</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Falooda</strong>
                                            <span className="text-stone-500 text-xs block">Rose-flavored dessert drink</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Pista Kulfi</strong>
                                            <span className="text-stone-500 text-xs block">Pistachio-flavored frozen treat</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Mango Kulfi</strong>
                                            <span className="text-stone-500 text-xs block">Tropical frozen dessert</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Rabri Kulfi</strong>
                                            <span className="text-stone-500 text-xs block">Condensed milk version</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700">
                                            <strong className="font-medium">Shrikhand</strong>
                                            <span className="text-stone-500 text-xs block">Sweetened hung curd</span>
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-sm text-stone-700 font-medium">Malai Kulfi, Basundi</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-purple-200/50">
                                    <span className="text-xs font-thin text-purple-600 flex items-center gap-2">
                                        8 VARIETIES
                                        <span className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* NEW: International & Fusion Cuisine Section */}
            <section className="py-20 px-6 bg-linear-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            International Cuisines
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Global flavors for modern weddings</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Continental Card */}
                        <div className="group relative bg-linear-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-blue-200 overflow-hidden">
                            {/* Decorative Background */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-300/20 rounded-full blur-2xl group-hover:bg-indigo-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Utensils className="w-10 h-10 text-white" />
                                </div>

                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    Classic
                                </div>

                                {/* Title */}
                                <h4 className="text-xl font-medium text-center text-stone-800 mb-2 group-hover:text-blue-700 transition-colors">
                                    Continental
                                </h4>
                                <p className="text-xs text-center text-blue-600 font-thin uppercase tracking-wider mb-4">Western Favorites</p>

                                {/* Divider */}
                                <div className="flex items-center justify-center mb-5">
                                    <div className="h-1 w-12 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                                </div>

                                {/* List */}
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Grilled Steaks & Chops</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Roasted Vegetables</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Mashed Potatoes</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Garlic Bread</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Caesar Salad</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-blue-200 transition-colors">
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Mushroom Soup</span>
                                    </li>
                                </ul>

                                {/* Footer */}
                                <div className="pt-4 border-t border-blue-200 flex items-center justify-between">
                                    <span className="text-xs font-thin text-blue-700 uppercase tracking-wider">6 Dishes</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Italian Card */}
                        <div className="group relative bg-linear-to-br from-red-50 via-white to-orange-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-red-200 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl group-hover:bg-red-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl group-hover:bg-orange-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-linear-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <ChefHat className="w-10 h-10 text-white" />
                                </div>

                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    Authentic
                                </div>

                                <h4 className="text-xl font-medium text-center text-stone-800 mb-2 group-hover:text-red-700 transition-colors">
                                    Italian
                                </h4>
                                <p className="text-xs text-center text-red-600 font-thin uppercase tracking-wider mb-4">Mediterranean Cuisine</p>

                                <div className="flex items-center justify-center mb-5">
                                    <div className="h-1 w-12 bg-linear-to-r from-red-400 to-orange-500 rounded-full"></div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Live Pasta Station</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Wood-Fired Pizza</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Risotto Varieties</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Bruschetta</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Lasagna</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-red-200 transition-colors">
                                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Tiramisu</span>
                                    </li>
                                </ul>

                                <div className="pt-4 border-t border-red-200 flex items-center justify-between">
                                    <span className="text-xs font-thin text-red-700 uppercase tracking-wider">6 Dishes</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chinese Card */}
                        <div className="group relative bg-linear-to-br from-green-50 via-white to-emerald-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-green-200 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-300/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Star className="w-10 h-10 text-white" />
                                </div>

                                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    Popular
                                </div>

                                <h4 className="text-xl font-mdeium text-center text-stone-800 mb-2 group-hover:text-green-700 transition-colors">
                                    Chinese
                                </h4>
                                <p className="text-xs text-center text-green-600 font-thin uppercase tracking-wider mb-4">Asian Delights</p>

                                <div className="flex items-center justify-center mb-5">
                                    <div className="h-1 w-12 bg-linear-to-r from-green-400 to-emerald-500 rounded-full"></div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Hakka Noodles</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Fried Rice</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Manchurian</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Spring Rolls</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Dim Sum Station</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-green-200 transition-colors">
                                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Szechuan Specialties</span>
                                    </li>
                                </ul>

                                <div className="pt-4 border-t border-green-200 flex items-center justify-between">
                                    <span className="text-xs font-thin text-green-700 uppercase tracking-wider">6 Dishes</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mexican Card */}
                        <div className="group relative bg-linear-to-br from-purple-50 via-white to-pink-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-purple-200 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl group-hover:bg-pink-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Crown className="w-10 h-10 text-white" />
                                </div>

                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    Exotic
                                </div>

                                <h4 className="text-xl font-medium text-center text-stone-800 mb-2 group-hover:text-purple-700 transition-colors">
                                    Mexican
                                </h4>
                                <p className="text-xs text-center text-purple-600 font-thin uppercase tracking-wider mb-4">Fiesta Flavors</p>

                                <div className="flex items-center justify-center mb-5">
                                    <div className="h-1 w-12 bg-linear-to-r from-purple-400 to-pink-500 rounded-full"></div>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Tacos & Burritos</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Nachos with Salsa</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Guacamole Station</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Quesadillas</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Mexican Rice</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-1 transition-transform duration-200">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:bg-purple-200 transition-colors">
                                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <span className="text-sm text-stone-700">Churros</span>
                                    </li>
                                </ul>

                                <div className="pt-4 border-t border-purple-200 flex items-center justify-between">
                                    <span className="text-xs font-thin text-purple-700 uppercase tracking-wider">6 Dishes</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* NEW: Beverages Section */}
            <section className="py-20 px-6 bg-linear-to-br from-teal-50 to-cyan-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Beverages & Refreshments
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Quench your guests' thirst in style</p>
                    </div>

                    <div className="space-y-8 mb-12">
                        {/* Main Category Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Traditional Indian Drinks Card */}
                            <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-3xl p-8 shadow-xl border border-orange-100/50 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl shadow-lg">
                                        <Coffee className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-medium text-stone-800">Traditional Indian Drinks</h4>
                                        <p className="text-sm text-teal-600 font-thin">Authentic Flavors</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="inline-block">
                                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-thin px-4 py-1.5 rounded-full shadow-md">
                                                Welcome Drinks
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Aam Panna</strong>
                                                    <span className="text-stone-500 text-xs block">Raw mango cooler</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Jaljeera</strong>
                                                    <span className="text-stone-500 text-xs block">Cumin-spiced water</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Shikanji</strong>
                                                    <span className="text-stone-500 text-xs block">Lemonade Indian style</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Thandai</strong>
                                                    <span className="text-stone-500 text-xs block">Festive milk drink</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Rose Sherbet</strong>
                                                    <span className="text-stone-500 text-xs block">Cooling rose drink</span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="pt-3 border-t border-orange-200/50">
                                            <span className="text-xs font-thin text-orange-600 flex items-center gap-2">
                                                5 VARIETIES
                                                <span className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="inline-block">
                                            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-thin px-4 py-1.5 rounded-full shadow-md">
                                                Dairy Beverages
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Mango Lassi</strong>
                                                    <span className="text-stone-500 text-xs block">Yogurt smoothie</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Sweet Lassi</strong>
                                                    <span className="text-stone-500 text-xs block">Classic yogurt drink</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Salted Lassi</strong>
                                                    <span className="text-stone-500 text-xs block">Savory version</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Masala Chaas</strong>
                                                    <span className="text-stone-500 text-xs block">Spiced buttermilk</span>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm leading-relaxed">
                                                    <strong className="font-medium">Badam Milk</strong>
                                                    <span className="text-stone-500 text-xs block">Almond milk</span>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="pt-3 border-t border-amber-200/50">
                                            <span className="text-xs font-thin text-amber-600 flex items-center gap-2">
                                                5 VARIETIES
                                                <span className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modern Beverages Card */}
                            <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 shadow-xl border border-emerald-100/50 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg">
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-medium text-stone-800">Modern Beverages</h4>
                                        <p className="text-sm text-cyan-600 font-thin">Contemporary Choices</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="inline-block">
                                            <span className="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-thin px-4 py-1.5 rounded-full shadow-md">
                                                Mocktails
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Virgin Mojito</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Blue Lagoon</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Fruit Punch</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Watermelon Cooler</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Passion Fruit Sparkle</span>
                                            </li>
                                        </ul>
                                        <div className="pt-3 border-t border-emerald-200/50">
                                            <span className="text-xs font-thin text-emerald-600 flex items-center gap-2">
                                                5 VARIETIES
                                                <span className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="inline-block">
                                            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-thin px-4 py-1.5 rounded-full shadow-md">
                                                Fresh Juices
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Fresh Orange Juice</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Pineapple Juice</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Watermelon Juice</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Mixed Fruit Juice</span>
                                            </li>
                                            <li className="flex items-start gap-3 text-stone-700">
                                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                                                <span className="text-sm font-medium">Coconut Water</span>
                                            </li>
                                        </ul>
                                        <div className="pt-3 border-t border-green-200/50">
                                            <span className="text-xs font-thin text-green-600 flex items-center gap-2">
                                                5 VARIETIES
                                                <span className="flex gap-1">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* NEW: Wedding Catering Essentials Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Wedding Catering Essentials
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Everything you need for a perfect celebration</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {/* Professional Staff Card */}
                        <div className="group relative bg-linear-to-br from-amber-50 via-orange-50 to-amber-100 rounded-3xl p-8 border border-amber-200 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl group-hover:bg-orange-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-medium text-stone-800 group-hover:text-amber-700 transition-colors">Professional Staff</h4>
                                        <p className="text-xs text-amber-600 font-medium">Expert Team Excellence</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-amber-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Experienced chefs and sous chefs</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-amber-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Well-trained service staff in uniform</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-amber-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Dedicated event managers</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-amber-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Kitchen helpers and cleaners</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-amber-100 rounded-lg flex items-center justify-center group-hover/item:bg-amber-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-amber-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Bartenders for beverage stations</span>
                                    </li>
                                </ul>

                                {/* Decorative bottom accent */}
                                <div className="mt-6 pt-4 border-t border-amber-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-thin text-amber-700 uppercase tracking-wider">20+ Team Members</span>
                                        <div className="w-10 h-1 bg-linear-to-r from-amber-400 to-orange-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Equipment & Setup Card */}
                        <div className="group relative bg-linear-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-3xl p-8 border border-blue-200 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-300/20 rounded-full blur-2xl group-hover:bg-indigo-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Utensils className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-medium text-stone-800 group-hover:text-blue-700 transition-colors">Equipment & Setup</h4>
                                        <p className="text-xs text-blue-600 font-medium">Premium Infrastructure</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Commercial-grade cooking equipment</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Chafing dishes and warmers</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Elegant serving platters and bowls</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Premium crockery and cutlery</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-blue-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Decorative buffet and live counter setups</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-blue-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-thin text-blue-700 uppercase tracking-wider">500+ Equipment Pieces</span>
                                        <div className="w-10 h-1 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quality Standards Card */}
                        <div className="group relative bg-linear-to-br from-green-50 via-teal-50 to-green-100 rounded-3xl p-8 border border-green-200 hover:border-green-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-300/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-300/20 rounded-full blur-2xl group-hover:bg-teal-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-medium text-stone-800 group-hover:text-green-700 transition-colors">Quality Standards</h4>
                                        <p className="text-xs text-green-600 font-medium">Excellence Guaranteed</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Fresh, premium quality ingredients</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Hygienic food preparation standards</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Temperature-controlled storage</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Food safety certifications</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Taste testing before the event</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-green-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-thin text-green-700 uppercase tracking-wider">ISO Certified</span>
                                        <div className="w-10 h-1 bg-linear-to-r from-green-400 to-teal-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customization Card */}
                        <div className="group relative bg-linear-to-br from-purple-50 via-pink-50 to-purple-100 rounded-3xl p-8 border border-purple-200 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl group-hover:bg-purple-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl group-hover:bg-pink-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Sparkles className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-medium text-stone-800 group-hover:text-purple-700 transition-colors">Customization</h4>
                                        <p className="text-xs text-purple-600 font-medium">Tailored To You</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-purple-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Personalized menu planning</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-purple-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Dietary restrictions accommodation</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-purple-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Regional cuisine specialization</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-purple-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Fusion menu options</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-purple-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Theme-based food presentation</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-purple-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-thin text-purple-700 uppercase tracking-wider">100% Customizable</span>
                                        <div className="w-10 h-1 bg-linear-to-r from-purple-400 to-pink-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Service Options Card */}
                        <div className="group relative bg-linear-to-br from-red-50 via-pink-50 to-red-100 rounded-3xl p-8 border border-red-200 hover:border-red-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-300/20 rounded-full blur-3xl group-hover:bg-red-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl group-hover:bg-pink-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <ChefHat className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-medium text-stone-800 group-hover:text-red-700 transition-colors">Service Options</h4>
                                        <p className="text-xs text-red-600 font-medium">Flexible Dining Styles</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-red-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Buffet service with live counters</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-red-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Plated sit-down dinners</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-red-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Family-style meal service</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-red-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Cocktail reception style</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center group-hover/item:bg-red-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-red-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Food station interactive dining</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-red-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-thin text-red-700 uppercase tracking-wider">5 Service Styles</span>
                                        <div className="w-10 h-1 bg-linear-to-r from-red-400 to-pink-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Logistics Support Card */}
                        <div className="group relative bg-linear-to-br from-yellow-50 via-amber-50 to-yellow-100 rounded-3xl p-8 border border-yellow-200 hover:border-yellow-400 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl group-hover:bg-yellow-400/30 transition-all duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-300/20 rounded-full blur-2xl group-hover:bg-amber-400/30 transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-linear-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        <Clock className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-xl font-medium text-stone-800 group-hover:text-yellow-700 transition-colors">Logistics Support</h4>
                                        <p className="text-xs text-yellow-600 font-medium">Seamless Execution</p>
                                    </div>
                                </div>

                                <ul className="space-y-4 text-stone-700">
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-yellow-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Timely setup and breakdown</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-yellow-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Transportation of food and equipment</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-yellow-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Waste disposal and cleaning</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-yellow-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Coordination with venue management</span>
                                    </li>
                                    <li className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="mt-1 mr-3 flex-shrink-0">
                                            <div className="w-6 h-6 bg-yellow-100 rounded-lg flex items-center justify-center group-hover/item:bg-yellow-200 transition-colors">
                                                <CheckCircle className="w-4 h-4 text-yellow-600" />
                                            </div>
                                        </div>
                                        <span className="text-sm leading-relaxed">Emergency backup plans</span>
                                    </li>
                                </ul>

                                <div className="mt-6 pt-4 border-t border-yellow-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-thin text-yellow-700 uppercase tracking-wider">24/7 Support</span>
                                        <div className="w-10 h-1 bg-linear-to-r from-yellow-400 to-amber-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Original Wedding Food Stalls Gallery Section */}
            <section className="pb-12 pt-22 px-6 bg-linear-to-br from-stone-50 to-amber-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Food Stalls & Live Counters
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Crafted Live, Served with Love</p>
                    </div>

                    {/* Hero Food Stall Image */}
                    <div className="mb-16 relative h-96 rounded-3xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                            alt="Wedding Food Stalls Setup"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-center">
                            <h3 className="text-4xl font-light text-white mb-4">
                                Live Culinary <span className="font-semibold">Theater</span>
                            </h3>
                            <p className="text-white/90 text-lg max-w-2xl mx-auto">
                                Watch master chefs craft delicious experiences right before your eyes
                            </p>
                        </div>
                    </div>

                    {/* Main Food Stalls Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                        {/* Street Food Corner */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Indian Street Food Stall"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Most Popular
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <ChefHat className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-medium text-stone-800">Street Food Corner</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Authentic pani puri, bhel puri, and regional chaat specialties served fresh</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">Pani Puri</span>
                                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">Bhel Puri</span>
                                    <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs">Sev Puri</span>
                                </div>
                            </div>
                        </div>

                        {/* Tandoor Station */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Tandoor Cooking Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Live Fire
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Utensils className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-medium text-stone-800">Tandoor Station</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Fresh naans, succulent kebabs, and tandoori specialties cooked in traditional clay ovens</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">Butter Naan</span>
                                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">Seekh Kebab</span>
                                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs">Paneer Tikka</span>
                                </div>
                            </div>
                        </div>

                        {/* Dessert Theater */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1563379091138-acf87743cea4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Live Jalebi Making"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Sweet Magic
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Sparkles className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-medium text-stone-800">Dessert Theater</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Live jalebi making, kulfi station, and artisanal sweet creations prepared fresh</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Fresh Jalebi</span>
                                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Kulfi Bar</span>
                                    <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Rabri</span>
                                </div>
                            </div>
                        </div>

                        {/* International Fusion */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="International Food Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Global Fusion
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Crown className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-medium text-stone-800">International Fusion</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Continental delicacies, pasta stations, and global cuisine with an Indian twist</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">Live Pasta</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">Wood Pizza</span>
                                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">Sliders</span>
                                </div>
                            </div>
                        </div>

                        {/* Beverage Bar */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Beverage Station"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Fresh & Cool
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Gem className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-medium text-stone-800">Beverage Bar</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Fresh lassi, thandai, mocktails, and traditional beverages served chilled</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Mango Lassi</span>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Thandai</span>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs">Mocktails</span>
                                </div>
                            </div>
                        </div>

                        {/* Regional Specialties */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Regional Indian Food"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Traditional
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <Award className="w-6 h-6 text-amber-600 mr-2" />
                                    <h3 className="text-xl font-medium text-stone-800">Regional Specialties</h3>
                                </div>
                                <p className="text-stone-600 mb-4">Authentic regional cuisines from across India, prepared by specialty chefs</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">South Indian</span>
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">Rajasthani</span>
                                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs">Bengali</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Stall Highlight */}
                    <div className="bg-linear-to-r from-amber-600 via-amber-700 to-stone-700 rounded-3xl p-12 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-20 translate-y-20"></div>

                        <div className="relative z-10">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-light mb-4">
                                Interactive <span className="font-medium">Culinary Journey</span>
                            </h3>
                            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                                Experience the art of cooking as master chefs prepare your favorite dishes right before your eyes. Every stall tells a story, every bite creates a memory.
                            </p>
                            <div className="flex justify-center items-center space-x-4">
                                <div className="w-16 h-0.5 bg-white/60"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-16 h-0.5 bg-white/60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Love & Happy Endings
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Moments cherished forever</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-32 bg-cover bg-center opacity-30"
                                    style={{ backgroundImage: `url(${testimonial.image})` }}></div>
                                <div className="relative z-10">
                                    <Star className="w-8 h-8 text-amber-500 mb-6" />
                                    <p className="text-stone-800 mb-6 leading-relaxed">"{testimonial.text}"</p>
                                    <p className="text-stone-600 text-sm">— {testimonial.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section id="packages" className="py-20 px-6 bg-linear-to-br from-stone-50 to-amber-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Elegance for Every Couple
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">Packages crafted to match your dream day</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-2 border-stone-100 hover:border-amber-200">
                                <div className="flex justify-center mb-6">
                                    {pkg.icon}
                                </div>
                                <h3 className="text-2xl font-medium text-stone-800 mb-4 text-center">{pkg.name}</h3>
                                <ul className="space-y-3 mb-6">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-stone-600">
                                            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-stone-500 text-sm text-center italic">{pkg.description}</p>
                                <button className="w-full mt-6 bg-stone-800 cursor-pointer text-white py-3 rounded-lg hover:bg-stone-900 transition">
                                    Choose Package
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Brand Philosophy */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Every Celebration Deserves Beauty
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">We craft every detail — from traditional delicacies to international fusion — to make your day truly unique</p>
                    </div>
                    <div className="flex justify-center gap-6">
                        <Heart className="w-12 h-12 text-pink-500" />
                        <Flower className="w-12 h-12 text-green-500" />
                        <Sparkles className="w-12 h-12 text-amber-500" />
                        <ChefHat className="w-12 h-12 text-stone-600" />
                        <Camera className="w-12 h-12 text-blue-500" />
                    </div>
                </div>
            </section>
        </div>
    );
}
