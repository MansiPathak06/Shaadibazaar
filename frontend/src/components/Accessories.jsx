'use client'
import React, { useState } from 'react';

const Accessories = () => {
    const [activeTab, setActiveTab] = useState('FEATURED');

    const categories = [
        {
            name: 'BRACELETS',
            
            image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'CHARMS & DANGLES',
            
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'EARRINGS',
            
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'ENGAGEMENT RING',
           
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'NECKLACES',
            
            image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            name: 'PENDANT',
            
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }

    ];

    const products = [
        {
            id: 1,
            name: 'Pearl',
            subtitle: 'River diamond stud earrings',
            price: '₹350.00',
            oldPrice: '₹450.00',
            badge: 'Hot',
            badgeColor: 'bg-red-500',
            image: 'https://i.pinimg.com/1200x/c1/f5/1e/c1f51ea969706b634863d5db2cf91a46.jpg'
        },
        {
            id: 2,
            name: 'ALEX RING',
            subtitle: '9 row pearl stud earrings',
            price: '₹850.00',
            badge: 'Hot',
            badgeColor: 'bg-red-500',
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            name: 'Pearl',
            subtitle: 'Women\'s Princess Rose Gold Plated',
            price: '₹1,350.00',
            oldPrice: '₹1,850.00',
            image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            name: 'ALEX RING',
            subtitle: 'Adorable stud gold earrings',
            price: '₹750.00',
            image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            name: 'Pearl',
            subtitle: 'Drop Paved Crystal Earrings',
            price: '₹1,150.00',
            badge: 'Hot',
            badgeColor: 'bg-red-500',
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            name: 'Pearl',
            subtitle: 'Stylish gold vermail pendant',
            price: '₹850.00',
            badge: 'New',
            badgeColor: 'bg-orange-400',
            image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 7,
            name: 'Pearl',
            subtitle: 'Pink London Lou 24 K Earrings Gold',
            price: '₹450.00',
            badge: 'Hot',
            badgeColor: 'bg-red-500',
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 8,
            name: 'Pearl',
            subtitle: 'Contemporary diamond ring',
            price: '₹650.00',
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 ">
            {/* Popular Categories */}
            <div className='mb-4 text-center'>
                <div className="inline-block mb-4">
                    <span className="text-rose-500 text-sm font-semibold tracking-[0.3em] uppercase">
                        Adorn your beauty
                    </span>
                </div>
                <h1 className="text-6xl md:text-4xl lg:text-5xl font-serif  text-gray-900 mb-6">
                    Popular <span className="text-rose-500">Categories</span>

                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Adorn yourself with jewels that define your beauty.
                </p>



                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center group cursor-pointer">
                            <div className="size-32 bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                                <span><img src={category.image} alt="brands" className='overflow-hidden size-32' /></span>
                            </div>
                            <h3 className="text-xs font-medium text-gray-800 text-center">{category.name}</h3>
                            
                        </div>
                    ))}
                </div>
            </div>

            {/* Special Offers */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="bg-gradient-to-br from-rose-50 to-rose-50 rounded-lg overflow-hidden">
                    <div className="flex items-center h-48">
                        <div className="p-8 flex-1">
                            <p className="text-xs text-gray-600 mb-1 uppercase">special offer</p>
                            <h3 className="text-2xl font-light text-gray-800 mb-4 uppercase">
                                watches <br />
                                tie <br />
                                belt
                            </h3>
                            <button className="text-xs font-medium text-gray-800 border-b border-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                                SHOP NOW
                            </button>
                        </div>
                        <div className="flex-1 h-full bg-white flex items-center justify-center">
                            <img
                                src="https://i.pinimg.com/736x/3c/52/18/3c52189603c215e3a2b221413aad655b.jpg"
                                alt="Elegant jewelry collection"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                        </div>
                    </div>
                </div>


                <div className="bg-gradient-to-br from-rose-50 to-rose-50 rounded-lg overflow-hidden">
                    <div className="flex items-center h-48">
                        <div className="p-8 flex-1">
                            <p className="text-xs text-gray-600 mb-1 uppercase">special offer</p>
                            <h3 className="text-2xl font-light text-gray-800 mb-4 uppercase">
                                pendant <br />
                                BRACELETS <br />
                                purse
                            </h3>
                            <button className="text-xs font-medium text-gray-800 border-b border-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                                SHOP NOW
                            </button>
                        </div>
                        <div className="flex-1 h-full bg-white flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Elegant jewelry collection"
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                }}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Trending Products */}
            <div>
                <h1 className='text-5xl font-serif text-gray-900 mb-2 capitalize text-center'>Trending <span className='text-rose-500'>Fashion</span> pieces </h1>
                <p className='text-gray-600 text-center text-xl mb-12'>Where the latest fashion meets effortless confidence</p>
                {/* Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square flex items-center justify-center hover:bg-gray-200 transition-colors">
                                {product.badge && (
                                    <span className={`absolute top-2 left-2 ₹{product.badgeColor} text-white text-xs px-2 py-1 rounded`}>
                                        {product.badge}
                                    </span>
                                )}
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xs font-medium text-gray-800 mb-1">{product.name}</h3>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-1">{product.subtitle}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">{product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accessories;