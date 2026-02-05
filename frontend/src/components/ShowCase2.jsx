import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function ShowCase2() {
    const products = [
        {
            name: "Earphones",
            badge: "Min. 50% Off",
            badgeColor: "text-green-600",
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop"
        },
        {
            name: "True Wireless",
            badge: "Special offer",
            badgeColor: "text-green-600",
            image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop"
        },
        {
            name: "Wrist Watches",
            badge: "Min. 90% Off",
            badgeColor: "text-green-600",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
        },
        {
            name: "Neckband",
            badge: "Special offer",
            badgeColor: "text-green-600",
            image: "https://images.unsplash.com/photo-1577174881658-0f30157f72c4?w=400&h=400&fit=crop"
        }
    ];

    return (
        <div className="w-full bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Side - Product Grid */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Best Gadgets & Appliances
                            </h2>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer group"
                                >
                                    {/* Product Image */}
                                    <div className="bg-gray-50 rounded-lg mb-3 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <h3 className="text-gray-900 font-medium mb-1">
                                        {product.name}
                                    </h3>
                                    <p className={`${product.badgeColor} font-semibold text-sm`}>
                                        {product.badge}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Banner */}
                    <div className="relative bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden min-h-[600px]">
                        {/* Logo */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                            <div className="bg-yellow-400 rounded-lg p-3 shadow-lg">
                                <div className="text-blue-600 font-bold text-3xl">f</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center px-8 pt-32 pb-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Top Selling Smartphones
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Latest Technology, Best Brands
                            </p>
                        </div>

                        {/* Explore Button */}
                        <div className="relative z-20 flex justify-center mb-8">
                            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                                <span>Explore Now</span>
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Phone Images */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-8 px-8 pb-8">
                            {/* Yellow Phone */}
                            <div className="relative transform hover:scale-105 transition-transform duration-300">
                                <div className="w-48 md:w-64 h-80 md:h-105 bg-linear-to-br from-yellow-300 to-yellow-400 rounded-3xl shadow-2xl p-3 md:p-4 relative">
                                    {/* Notch */}
                                    <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-full z-10" />
                                    {/* Screen */}
                                    <div className="absolute top-12 md:top-16 left-4 md:left-8 right-4 md:right-8 bottom-16 md:bottom-20 bg-gray-900 rounded-2xl overflow-hidden">
                                        {/* Camera */}
                                        <div className="absolute top-4 left-4 w-12 md:w-16 h-12 md:h-16 bg-gray-800 rounded-full border-2 md:border-4 border-yellow-400" />
                                    </div>
                                    {/* Home Button Area */}
                                    <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gray-700 rounded-full" />
                                </div>
                            </div>

                            {/* Blue Phone */}
                            <div className="relative transform hover:scale-105 transition-transform duration-300">
                                <div className="w-48 md:w-64 h-80 md:h-105 bg-linear-to-br from-cyan-300 to-blue-400 rounded-3xl shadow-2xl p-3 md:p-4 relative">
                                    {/* Notch */}
                                    <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-full z-10" />
                                    {/* Screen */}
                                    <div className="absolute top-12 md:top-16 left-4 md:left-8 right-4 md:right-8 bottom-16 md:bottom-20 bg-gray-900 rounded-2xl overflow-hidden">
                                        {/* Camera */}
                                        <div className="absolute top-4 left-4 w-12 md:w-16 h-12 md:h-16 bg-gray-800 rounded-full border-2 md:border-4 border-blue-400" />
                                    </div>
                                    {/* Home Button Area */}
                                    <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1 bg-gray-700 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}