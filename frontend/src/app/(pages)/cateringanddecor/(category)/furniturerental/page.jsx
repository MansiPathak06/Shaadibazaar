import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function WeddingFurnitureSite() {
    const categories = [
        {
            title: "Lounge & Seating",
            description: "Cozy sofas, ottomans, and chairs — perfect for reception and cocktail zones.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342334/category-1_lfwrso.jpg"
        },
        {
            title: "Tables & Dining",
            description: "From rustic wood to mirror-top elegance, our tables create unforgettable setups.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342333/category-2_tgo48r.jpg"
        },
        {
            title: "Stage & Backdrop Décor",
            description: "Royal chairs, arches, and backdrop pieces that define your 'I do' moment.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342333/category-3_bqb0vm.jpg"
        },
        {
            title: "Accent & Lighting",
            description: "Add charm with side tables, floral stands, and mood lighting.",
            image: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342334/category-4_jbvtph.jpg"
        }
    ];

    const galleryImages = [
        {
            url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342451/gallery-images-1_usconu.jpg",
            label: "Rustic Outdoor Setup"
        },
        {
            url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342450/gallery-images-2_oja3do.jpg",
            label: "Royal Gold Stage"
        },
        {
            url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342448/gallery-images-3_yzb3ca.jpg",
            label: "Elegant Reception"
        },
        {
            url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342454/gallery-images-4_awlo5a.jpg",
            label: "Garden Party Setup"
        },
        {
            url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342446/gallery-images-5_zhzteo.jpg",
            label: "Intimate Ceremony"
        },
        {
            url: "https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342445/gallery-images-6_squt62.jpg",
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
                        backgroundImage: `url('https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342551/furniture-hero_kzy3vd.jpg')`,
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

                        {/* CTA Button with link */}
                        <a href="/cateringanddecor/all-services?category=furniture">
                            <button className="inline-flex cursor-pointer items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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
                        </a>
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
                            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342648/craftman_abvopf.jpg"
                            alt="Craftsmanship"
                            className="rounded-lg shadow-lg w-full h-64 object-cover"
                        />
                        <img
                            src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342648/wedding-setup_gdjvml.jpg"
                            alt="Wedding Setup"
                            className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                        />
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-18">
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Explore Our <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 to-pink-500">Collection</span>
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
                            Choose from our curated range of wedding furniture categories, each crafted to fit your unique style
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
                            <a href="/cateringanddecor/all-services?category=furniture">
                                <button className="bg-stone-800 cursor-pointer hover:bg-stone-900 text-white px-8 py-4 rounded-full w-fit transition-all transform hover:scale-105 inline-flex items-center gap-2">
                                    Start Customizing
                                    <ChevronRight size={20} />
                                </button>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4 p-8">
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342754/customized-furniture-1_fs6pgb.jpg"
                                alt="Design Process"
                                className="rounded-lg shadow-lg w-full h-48 object-cover"
                            />
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342751/customized-furniture-2_yoqnyx.jpg"
                                alt="Crafting"
                                className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
                            />
                            <img
                                src="https://res.cloudinary.com/dewxpvl5s/image/upload/v1762342750/customized-furniture-3_qwmb5x.jpg"
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
                        <h2 className="text-4xl md:text-6xl mb-3 font-light text-neutral-800 tracking-tight uppercase">
                            Our Past <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-500 to-pink-500">Creations</span>
                        </h2>
                        <p className="text-neutral-700 text-lg tracking-widest uppercase mb-2">
                            A glimpse into the weddings we've transformed — every detail handcrafted with love
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
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
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
        </div>
    );
}
