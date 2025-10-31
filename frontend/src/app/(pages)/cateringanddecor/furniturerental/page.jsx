import React from 'react';
import { Heart, Sparkles, ChevronRight, ChevronDown, Play, Star, Shield, Truck } from 'lucide-react';

export default function WeddingFurnitureSite() {
    const categories = [
        {
            title: "Lounge & Seating",
            description: "Cozy sofas, ottomans, and chairs — perfect for reception and cocktail zones.",
            image: "https://i.pinimg.com/1200x/cc/c4/a7/ccc4a762e724c4f023bf800aca24cead.jpg"
        },
        {
            title: "Tables & Dining",
            description: "From rustic wood to mirror-top elegance, our tables create unforgettable setups.",
            image: "https://i.pinimg.com/736x/35/3d/e1/353de1afe68a8907787d6510efbe4845.jpg"
        },
        {
            title: "Stage & Backdrop Décor",
            description: "Royal chairs, arches, and backdrop pieces that define your 'I do' moment.",
            image: "https://i.pinimg.com/736x/de/17/10/de1710c6edf0023bd35449e58de8f239.jpg"
        },
        {
            title: "Accent & Lighting",
            description: "Add charm with side tables, floral stands, and mood lighting.",
            image: "https://i.pinimg.com/1200x/e8/c4/98/e8c49881b0ee1de1aa62577b003e1a44.jpg"
        }
    ];

    const galleryImages = [
        {

            url: "https://i.pinimg.com/1200x/a7/73/46/a773463f74c012f0edefa1c774983279.jpg",
            label: "Rustic Outdoor Setup"
        },
        {

            url: "https://i.pinimg.com/1200x/e3/d8/fb/e3d8fbc585add0ae821b550da54c3e03.jpg",
            label: "Royal Gold Stage"
        },
        {

            url: "https://i.pinimg.com/736x/4b/2c/85/4b2c8549d3055c83d31e25c8e17fbdcc.jpg",
            label: "Elegant Reception"
        },
        {

            url: "https://i.pinimg.com/736x/6a/93/ba/6a93bac58b201ba55a70963a7d275550.jpg",
            label: "Garden Party Setup"
        },
        {

            url: "https://i.pinimg.com/736x/70/8f/cf/708fcf635ffe887d8bfd96b8f1e2ff0e.jpg",
            label: "Intimate Ceremony"
        },
        {

            url: "https://i.pinimg.com/736x/a2/45/fb/a245fb3f7c72c15b91438855ced34043.jpg",
            label: "Grand Celebration"
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gray-900 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://i.pinimg.com/1200x/be/b4/bd/beb4bdef953253d6f0b3d7519a3aaf93.jpg')`,
                    }}
                >
                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Main Heading - Exact match */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8">
                            <span className="block">Elevate Your Space</span>
                            <span className="block">with Beautiful</span>
                            <span className="block">Furniture</span>
                        </h1>

                        {/* CTA Button */}
                        <button className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            <span>Furniture Gallery</span>
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <svg
                                    className="w-3 h-3 text-amber-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>






            {/* About Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                            Crafted for Moments That Last Forever
                        </h2>
                        <p className="text-stone-600 mb-4 leading-relaxed">
                            Our furniture isn't just décor — it's an experience. Each piece is designed with love and attention to detail, blending luxury with comfort. Whether you're hosting an intimate ceremony or a grand celebration, our collection brings charm, style, and sophistication to every corner.
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                            From handcrafted seating to elegant stage setups, we specialize in turning ordinary spaces into breathtaking wedding memories.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://i.pinimg.com/736x/0a/b4/72/0ab4722b73d4103733982aa9c2e0a95a.jpg"
                            alt="Craftsmanship"
                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                        />
                        <img
                            src="https://i.pinimg.com/736x/62/5d/9a/625d9a9ea458923a2f156d5ff9f1219b.jpg"
                            alt="Wedding Setup"
                            className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-amber-700">
                            <Heart size={20} />
                            <span className="text-sm tracking-widest uppercase">Find Your Style</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
                            Explore Our Collection
                        </h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">
                            Choose from our curated range of wedding furniture categories, each crafted to fit your unique style.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-full aspect-square mb-4 shadow-lg">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 group-hover:bg-opacity-20 transition-all duration-300" />
                                </div>
                                <h3 className="text-xl font-serif text-stone-800 mb-2 text-center">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-stone-600 text-center leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customized Furniture Section */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="bg-stone-100 rounded-3xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
                                Tailored Designs for Your Theme
                            </h2>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                Every wedding is unique — and your furniture should be too. We design and craft customized furniture to match your colors, theme, and venue. From personalized lounge setups to custom-made backdrops, our team ensures every detail feels authentically yours.
                            </p>
                            <p className="text-stone-700 font-medium mb-8">
                                Share your inspiration, and we'll bring it to life.
                            </p>
                            <button className="bg-stone-800 hover:bg-stone-900 text-white px-8 py-4 rounded-full w-fit transition-all transform hover:scale-105 inline-flex items-center gap-2">
                                Start Customizing
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 p-8">
                            <img
                                src="https://i.pinimg.com/736x/18/88/a9/1888a9cfed564d9664dfbbab792f1120.jpg"
                                alt="Design Process"
                                className="rounded-lg shadow-lg w-full h-48 object-cover"
                            />
                            <img
                                src="https://i.pinimg.com/736x/3a/2a/7d/3a2a7dca517f5e48252a1a814898ef02.jpg"
                                alt="Crafting"
                                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
                            />
                            <img
                                src="https://i.pinimg.com/1200x/f4/4a/59/f44a59e3efcef15c7e5134834157b630.jpg"
                                alt="Final Setup"
                                className="rounded-lg shadow-lg w-full h-48 object-cover col-span-2"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
                            Our Past Creations
                        </h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">
                            A glimpse into the weddings we've transformed — every detail handcrafted with love.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] cursor-pointer"
                            >
                                <img
                                    src={image.url}
                                    alt={image.label}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white text-lg font-medium">
                                        {image.label}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 bg-stone-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Let's Create Your Dream Setup
                    </h2>
                    <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto">
                        Reach out to book your rentals or discuss custom designs for your celebration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white hover:bg-stone-100 text-stone-800 px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105">
                            View Catalog
                        </button>
                        <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}