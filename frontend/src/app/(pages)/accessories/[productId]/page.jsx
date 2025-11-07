'use client';

import React, { useState, useEffect } from 'react';
import {
    Heart,
    Share2,
    Star,
    ShoppingCart,
    Truck,
    Shield,
    Package,
    RotateCcw,
    MapPin,
    ChevronRight,
    ChevronDown,
    ChevronUp,
    Check,
    X,
    ZoomIn,
    Plus,
    Minus,
    Gift,
    Tag,
    Clock,
    Award,
    Users,
    ThumbsUp,
    MessageCircle,
    AlertCircle,
    TrendingUp,
    Percent,
    CreditCard,
    Calendar
} from 'lucide-react';

const ProductBuyPage = ({ params }) => {

    const productId = params?.id || 'default'
    // State Management
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [pincode, setPincode] = useState('');
    const [isPincodeValid, setIsPincodeValid] = useState(null);
    const [activeTab, setActiveTab] = useState('description');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Product Data - Comprehensive as per major e-commerce platforms
    const product = {
        productId: 'PROD123456',
        name: 'Premium Wireless Bluetooth Headphones with Active Noise Cancellation',
        brand: 'AudioTech Pro',
        category: 'Electronics > Audio > Headphones',
        shortDescription: 'Experience superior sound quality with 40-hour battery life',
        price: 4999,
        originalPrice: 9999,
        discount: 50,
        rating: 4.5,
        totalReviews: 2847,
        totalRatings: 3521,
        inStock: true,
        stockCount: 47,
        sku: 'ATP-WH-2024-BLK',
        images: [
            '/api/placeholder/600/600',
            '/api/placeholder/600/600',
            '/api/placeholder/600/600',
            '/api/placeholder/600/600',
            '/api/placeholder/600/600',
            '/api/placeholder/600/600'
        ],
        colors: [
            { name: 'Midnight Black', code: '#000000', available: true },
            { name: 'Ocean Blue', code: '#0066CC', available: true },
            { name: 'Rose Gold', code: '#B76E79', available: true },
            { name: 'Silver', code: '#C0C0C0', available: false }
        ],
        sizes: ['One Size'],
        features: [
            'Active Noise Cancellation (ANC) Technology',
            '40mm Dynamic Drivers for Rich Bass',
            '40 Hours Battery Life with Fast Charging',
            'Bluetooth 5.2 with Multi-Device Pairing',
            'Premium Memory Foam Ear Cushions',
            'Foldable Design with Carrying Case',
            'Built-in Microphone for Calls',
            'Touch Controls for Easy Operation'
        ],
        specifications: {
            'General': {
                'Model Name': 'AudioTech Pro X500',
                'Color': 'Midnight Black',
                'Headphone Type': 'Over Ear',
                'Connectivity': 'Wireless'
            },
            'Product Details': {
                'Bluetooth Version': '5.2',
                'Battery Life': '40 Hours',
                'Charging Time': '2 Hours (Fast Charging)',
                'Driver Size': '40mm',
                'Impedance': '32 Ohm',
                'Frequency Response': '20Hz - 20kHz'
            },
            'Dimensions': {
                'Weight': '280g',
                'Width': '18cm',
                'Height': '20cm',
                'Depth': '8cm'
            },
            'Additional Features': {
                'Active Noise Cancellation': 'Yes',
                'Ambient Sound Mode': 'Yes',
                'Voice Assistant': 'Google Assistant, Siri',
                'Foldable': 'Yes',
                'Warranty': '1 Year Manufacturer Warranty'
            }
        },
        bestFor: [
            'Music Enthusiasts',
            'Professionals in Noisy Environments',
            'Travelers and Commuters',
            'Gaming and Entertainment',
            'Conference Calls and Meetings',
            'Students and Content Creators'
        ],
        whatsInBox: [
            '1 x Wireless Headphones',
            '1 x USB-C Charging Cable',
            '1 x 3.5mm Audio Cable',
            '1 x Hard Shell Carrying Case',
            '1 x User Manual',
            '1 x Warranty Card'
        ],
        highlights: [
            { icon: <Truck />, title: 'Free Delivery', desc: 'On orders above ₹499' },
            { icon: <RotateCcw />, title: '7 Days Return', desc: 'Easy returns & exchange' },
            { icon: <Shield />, title: '1 Year Warranty', desc: 'Manufacturer warranty' },
            { icon: <Package />, title: 'Secure Packaging', desc: 'Damage-free delivery' }
        ],
        offers: [
            {
                id: 1,
                type: 'Bank Offer',
                description: '10% Instant Discount on HDFC Bank Credit Cards',
                code: 'HDFC10',
                terms: 'Minimum purchase ₹2,000'
            },
            {
                id: 2,
                type: 'Partner Offer',
                description: 'Get extra ₹500 off on exchange',
                code: 'EXCHANGE500',
                terms: 'Valid on select products'
            },
            {
                id: 3,
                type: 'Combo Offer',
                description: 'Buy 2 items save 15%',
                code: 'COMBO15',
                terms: 'Auto-applied at checkout'
            }
        ],
        deliveryOptions: {
            standard: { days: '5-7', charge: 0 },
            express: { days: '2-3', charge: 99 }
        }
    };

    // Reviews Data
    const reviews = [
        {
            id: 1,
            userName: 'Rajesh Kumar',
            rating: 5,
            date: '2025-10-28',
            verified: true,
            title: 'Excellent Sound Quality!',
            comment: 'The noise cancellation is superb and battery life is amazing. Worth every penny!',
            helpful: 234,
            images: ['/api/placeholder/100/100', '/api/placeholder/100/100']
        },
        {
            id: 2,
            userName: 'Priya Sharma',
            rating: 4,
            date: '2025-10-25',
            verified: true,
            title: 'Great for the price',
            comment: 'Very comfortable for long use. Bass is deep and crisp. Only minor issue is slight pressure after 3-4 hours.',
            helpful: 156
        },
        {
            id: 3,
            userName: 'Amit Patel',
            rating: 5,
            date: '2025-10-20',
            verified: true,
            title: 'Best purchase ever!',
            comment: 'Using it for work calls and music. Crystal clear audio and mic quality is excellent.',
            helpful: 98
        }
    ];

    // FAQ Data
    const faqs = [
        {
            id: 1,
            question: 'What is the battery life of these headphones?',
            answer: 'The headphones offer up to 40 hours of playtime on a single charge with ANC off, and 30 hours with ANC on. Fast charging provides 5 hours of playback with just 10 minutes of charging.'
        },
        {
            id: 2,
            question: 'Can I use these headphones while charging?',
            answer: 'Yes, you can use the headphones while charging via the USB-C cable. You can also use the included 3.5mm audio cable for wired listening.'
        },
        {
            id: 3,
            question: 'Are these headphones compatible with all devices?',
            answer: 'Yes, these headphones are compatible with all Bluetooth-enabled devices including smartphones, tablets, laptops, and smart TVs. They support Bluetooth 5.2 for stable connectivity.'
        },
        {
            id: 4,
            question: 'What is the return policy?',
            answer: 'We offer a 7-day return policy from the date of delivery. The product must be in original condition with all accessories and packaging intact.'
        },
        {
            id: 5,
            question: 'Is the warranty valid across India?',
            answer: 'Yes, the 1-year manufacturer warranty is valid across India. You can claim warranty at any authorized service center.'
        }
    ];

    // Similar Products
    const similarProducts = [
        { id: 1, name: 'SoundMax Pro', price: 3999, rating: 4.3, image: '/api/placeholder/200/200' },
        { id: 2, name: 'BeatsPro Elite', price: 5499, rating: 4.6, image: '/api/placeholder/200/200' },
        { id: 3, name: 'AudioWave X1', price: 4499, rating: 4.4, image: '/api/placeholder/200/200' },
        { id: 4, name: 'SonicPro Ultra', price: 6999, rating: 4.7, image: '/api/placeholder/200/200' }
    ];

    // Utility Functions
    const handleQuantityChange = (action) => {
        if (action === 'increase' && quantity < product.stockCount) {
            setQuantity(quantity + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const checkPincode = () => {
        if (pincode.length === 6) {
            setTimeout(() => {
                setIsPincodeValid(true);
            }, 500);
        } else {
            setIsPincodeValid(false);
        }
    };

    const handleImageZoom = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePosition({ x, y });
    };

    const calculateSavings = () => {
        return product.originalPrice - product.price;
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const getDeliveryDate = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + parseInt(days.split('-')[1]));
        return date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    // Render Star Rating
    const StarRating = ({ rating, size = 'small', interactive = false, onRate }) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Star
                    key={i}
                    size={size === 'small' ? 16 : 24}
                    fill={i <= rating ? '#FFA500' : 'none'}
                    stroke={i <= rating ? '#FFA500' : '#ccc'}
                    className={interactive ? 'cursor-pointer hover:scale-110 transition' : ''}
                    onClick={() => interactive && onRate && onRate(i)}
                />
            );
        }
        return <div className="flex gap-1 items-center">{stars}</div>;
    };

    // Main Component Render
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Navigation */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="hover:text-blue-600 cursor-pointer">Home</span>
                        <ChevronRight size={14} />
                        <span className="hover:text-blue-600 cursor-pointer">Electronics</span>
                        <ChevronRight size={14} />
                        <span className="hover:text-blue-600 cursor-pointer">Audio</span>
                        <ChevronRight size={14} />
                        <span className="text-gray-900 font-medium">Headphones</span>
                    </div>
                </div>
            </div>

            {/* Main Product Section */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-sm p-6">

                    {/* Left Column - Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                            <div
                                className="relative aspect-square cursor-zoom-in"
                                onMouseEnter={() => setIsZoomed(true)}
                                onMouseLeave={() => setIsZoomed(false)}
                                onMouseMove={handleImageZoom}
                            >
                                <img
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    className={`w-full h-full object-contain transition-transform duration-200 ${isZoomed ? 'scale-150' : 'scale-100'
                                        }`}
                                    style={
                                        isZoomed
                                            ? {
                                                transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                                            }
                                            : {}
                                    }
                                />
                                {isZoomed && (
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg text-sm flex items-center gap-2">
                                        <ZoomIn size={16} />
                                        <span>Hover to zoom</span>
                                    </div>
                                )}
                            </div>

                            {/* Wishlist & Share */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                <button
                                    onClick={() => setWishlist(!wishlist)}
                                    className={`p-2 rounded-full shadow-lg transition ${wishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
                                        }`}
                                >
                                    <Heart size={20} fill={wishlist ? 'currentColor' : 'none'} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow-lg">
                                    <Share2 size={20} />
                                </button>
                            </div>

                            {/* Discount Badge */}
                            {product.discount > 0 && (
                                <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg font-bold flex items-center gap-1">
                                    <Percent size={16} />
                                    <span>{product.discount}% OFF</span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex gap-3 overflow-x-auto pb-2">
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 cursor-pointer transition ${selectedImage === index
                                            ? 'border-blue-500'
                                            : 'border-gray-200 hover:border-gray-400'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={Product `${index + 1}`}
                                        className="w-full h-full object-contain bg-gray-100 rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Product Highlights - Mobile */}
                        <div className="lg:hidden grid grid-cols-2 gap-3">
                            {product.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                                    <div className="text-blue-600">{highlight.icon}</div>
                                    <div>
                                        <div className="text-sm font-semibold">{highlight.title}</div>
                                        <div className="text-xs text-gray-600">{highlight.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="space-y-6">
                        {/* Brand & Name */}
                        <div>
                            <div className="text-gray-500 text-sm mb-1 hover:text-blue-600 cursor-pointer">
                                Visit the {product.brand} Store
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                {product.name}
                            </h1>
                        </div>

                        {/* Rating & Reviews */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-lg">
                                <span className="font-bold">{product.rating}</span>
                                <Star size={14} fill="white" />
                            </div>
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold">{product.totalRatings.toLocaleString()}</span> Ratings &
                                <span className="font-semibold"> {product.totalReviews.toLocaleString()}</span> Reviews
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-sm">
                                <TrendingUp size={16} />
                                <span className="font-semibold">Trending</span>
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="border-t border-b py-4 space-y-2">
                            <div className="flex items-center gap-4 flex-wrap">
                                <span className="text-3xl font-bold text-gray-900">
                                    {formatPrice(product.price)}
                                </span>
                                <span className="text-xl text-gray-400 line-through">
                                    {formatPrice(product.originalPrice)}
                                </span>
                                <span className="text-green-600 font-semibold text-lg">
                                    {product.discount}% off
                                </span>
                            </div>
                            <div className="text-sm text-gray-600">
                                You Save: <span className="text-green-600 font-semibold">{formatPrice(calculateSavings())}</span>
                            </div>
                            <div className="text-xs text-gray-500">Inclusive of all taxes</div>
                        </div>

                        {/* Offers Section */}
                        <div className="space-y-3">
                            <div className="font-semibold text-gray-900 flex items-center gap-2">
                                <Tag className="text-green-600" size={20} />
                                Available Offers
                            </div>
                            {product.offers.map((offer) => (
                                <div
                                    key={offer.id}
                                    className="flex items-start gap-3 p-3 border rounded-lg hover:border-green-500 transition cursor-pointer"
                                    onClick={() => setSelectedOffer(offer.id)}
                                >
                                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                                        {selectedOffer === offer.id ? (
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                <Check size={14} className="text-white" />
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm text-gray-900">{offer.type}</div>
                                        <div className="text-sm text-gray-700">{offer.description}</div>
                                        <div className="text-xs text-gray-500 mt-1">T&C: {offer.terms}</div>
                                        {offer.code && (
                                            <div className="mt-2 inline-block bg-gray-100 px-2 py-1 rounded text-xs font-mono font-bold">
                                                {offer.code}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Color Selection */}
                        {product.colors.length > 0 && (
                            <div className="space-y-3">
                                <div className="font-semibold text-gray-900">
                                    Color: <span className="text-gray-600 font-normal">{selectedColor || 'Select'}</span>
                                </div>
                                <div className="flex gap-3 flex-wrap">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => color.available && setSelectedColor(color.name)}
                                            disabled={!color.available}
                                            className={`relative group ${!color.available ? 'opacity-40 cursor-not-allowed' : ''
                                                }`}
                                        >
                                            <div
                                                className={`w-12 h-12 rounded-full border-4 transition ${selectedColor === color.name
                                                        ? 'border-blue-500 scale-110'
                                                        : 'border-gray-300 hover:border-gray-400'
                                                    }`}
                                                style={{ backgroundColor: color.code }}
                                            >
                                                {!color.available && (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-full h-0.5 bg-gray-400 rotate-45" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                                                {color.name}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size Selection */}
                        {product.sizes.length > 1 && (
                            <div className="space-y-3">
                                <div className="font-semibold text-gray-900">Size</div>
                                <div className="flex gap-3 flex-wrap">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-6 py-2 border-2 rounded-lg font-semibold transition ${selectedSize === size
                                                    ? 'border-blue-500 bg-blue-50 text-blue-600'
                                                    : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity Selector */}
                        <div className="space-y-3">
                            <div className="font-semibold text-gray-900">Quantity</div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border-2 rounded-lg">
                                    <button
                                        onClick={() => handleQuantityChange('decrease')}
                                        disabled={quantity <= 1}
                                        className="px-4 py-2 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                    >
                                        <Minus size={18} />
                                    </button>
                                    <div className="px-6 py-2 font-bold border-x-2">{quantity}</div>
                                    <button
                                        onClick={() => handleQuantityChange('increase')}
                                        disabled={quantity >= product.stockCount}
                                        className="px-4 py-2 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                                {product.stockCount < 50 && (
                                    <div className="text-sm text-orange-600 font-semibold flex items-center gap-1">
                                        <AlertCircle size={16} />
                                        Only {product.stockCount} left in stock
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Delivery Check */}
                        <div className="space-y-3 border-t pt-4">
                            <div className="font-semibold text-gray-900 flex items-center gap-2">
                                <MapPin size={20} />
                                Delivery Options
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter Pincode"
                                    value={pincode}
                                    onChange={(e) => {
                                        setPincode(e.target.value.replace(/\D/g, '').slice(0, 6));
                                        setIsPincodeValid(null);
                                    }}
                                    className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                                    maxLength={6}
                                />
                                <button
                                    onClick={checkPincode}
                                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                                >
                                    Check
                                </button>
                            </div>

                            {isPincodeValid === true && (
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-green-600 text-sm">
                                        <Check size={18} />
                                        <span className="font-semibold">Delivery Available</span>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                        <Truck className="text-green-600 flex-shrink-0 mt-1" size={20} />
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">
                                                Free Delivery by {getDeliveryDate(product.deliveryOptions.standard.days)}
                                            </div>
                                            <div className="text-xs text-gray-600 mt-1">
                                                Express delivery available at ₹{product.deliveryOptions.express.charge}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {isPincodeValid === false && (
                                <div className="flex items-center gap-2 text-red-600 text-sm">
                                    <X size={18} />
                                    <span>Please enter a valid 6-digit pincode</span>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-orange-500 text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition flex items-center justify-center gap-2 text-lg shadow-lg">
                                <ShoppingCart size={22} />
                                ADD TO CART
                            </button>
                            <button className="flex-1 bg-red-500 text-white font-bold py-4 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2 text-lg shadow-lg">
                                <Gift size={22} />
                                BUY NOW
                            </button>
                        </div>

                        {/* Product Highlights - Desktop */}
                        <div className="hidden lg:grid grid-cols-2 gap-4 pt-4 border-t">
                            {product.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                                    <div className="text-blue-600 flex-shrink-0">{highlight.icon}</div>
                                    <div>
                                        <div className="text-sm font-semibold">{highlight.title}</div>
                                        <div className="text-xs text-gray-600">{highlight.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center justify-around py-4 border-t border-b bg-gray-50 rounded-lg">
                            <div className="text-center">
                                <div className="flex justify-center mb-1">
                                    <Award className="text-yellow-500" size={24} />
                                </div>
                                <div className="text-xs font-semibold">Certified</div>
                                <div className="text-xs text-gray-600">Product</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300" />
                            <div className="text-center">
                                <div className="flex justify-center mb-1">
                                    <Users className="text-blue-500" size={24} />
                                </div>
                                <div className="text-xs font-semibold">3.5k+</div>
                                <div className="text-xs text-gray-600">Sold</div>
                            </div>
                            <div className="w-px h-12 bg-gray-300" />
                            <div className="text-center">
                                <div className="flex justify-center mb-1">
                                    <ThumbsUp className="text-green-500" size={24} />
                                </div>
                                <div className="text-xs font-semibold">98%</div>
                                <div className="text-xs text-gray-600">Positive</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Information Tabs */}
                <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Tab Headers */}
                    <div className="border-b flex overflow-x-auto">
                        {['description', 'specifications', 'reviews', 'faqs'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 font-semibold text-sm whitespace-nowrap transition ${activeTab === tab
                                        ? 'border-b-2 border-blue-600 text-blue-600'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {/* Description Tab */}
                        {activeTab === 'description' && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-4">Product Description</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {product.shortDescription}. These premium wireless headphones combine cutting-edge technology
                                        with exceptional comfort, making them perfect for music lovers, professionals, and travelers.
                                        The advanced Active Noise Cancellation technology blocks out ambient noise, allowing you to
                                        immerse yourself in your favorite music or focus on important calls without distractions.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4">Key Features</h3>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                                <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4">Best For</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {product.bestFor.map((use, index) => (
                                            <div key={index} className="flex items-center gap-2 p-3 border-2 rounded-lg">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                <span className="text-sm font-medium">{use}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-4">What's in the Box</h3>
                                    <div className="space-y-2">
                                        {product.whatsInBox.map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 p-2">
                                                <Package className="text-gray-400" size={18} />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Specifications Tab */}
                        {activeTab === 'specifications' && (
                            <div className="space-y-6">
                                {Object.entries(product.specifications).map(([category, specs]) => (
                                    <div key={category}>
                                        <h3 className="text-lg font-bold mb-3 pb-2 border-b">{category}</h3>
                                        <div className="space-y-2">
                                            {Object.entries(specs).map(([key, value]) => (
                                                <div
                                                    key={key}
                                                    className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3 hover:bg-gray-50 rounded"
                                                >
                                                    <div className="text-gray-600 font-medium">{key}</div>
                                                    <div className="text-gray-900">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === 'reviews' && (
                            <div className="space-y-6">
                                {/* Rating Summary */}
                                <div className="grid md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-gray-900 mb-2">{product.rating}</div>
                                        <StarRating rating={product.rating} size="large" />
                                        <div className="text-sm text-gray-600 mt-2">
                                            Based on {product.totalReviews.toLocaleString()} reviews
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        {[5, 4, 3, 2, 1].map((star) => (
                                            <div key={star} className="flex items-center gap-3">
                                                <span className="text-sm w-6">{star}★</span>
                                                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-green-500"
                                                        style={{
                                                            width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1
                                                                }%`
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-gray-600 w-12">
                                                    {star === 5 ? '70%' : star === 4 ? '20%' : star === 3 ? '7%' : star === 2 ? '2%' : '1%'}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Write Review Button */}
                                <button
                                    onClick={() => setShowReviewForm(!showReviewForm)}
                                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                                >
                                    Write a Review
                                </button>

                                {/* Review Form */}
                                {showReviewForm && (
                                    <div className="p-6 border-2 rounded-lg space-y-4">
                                        <h4 className="font-bold text-lg">Share Your Experience</h4>
                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Your Rating</label>
                                            <StarRating rating={rating} size="large" interactive onRate={setRating} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold mb-2">Your Review</label>
                                            <textarea
                                                value={reviewText}
                                                onChange={(e) => setReviewText(e.target.value)}
                                                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                                                rows={5}
                                                placeholder="Tell us what you think about this product..."
                                            />
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                                                Submit Review
                                            </button>
                                            <button
                                                onClick={() => setShowReviewForm(false)}
                                                className="px-6 py-2 border-2 font-semibold rounded-lg hover:bg-gray-50 transition"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Reviews List */}
                                <div className="space-y-4">
                                    {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review) => (
                                        <div key={review.id} className="p-6 border rounded-lg space-y-3">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                                        {review.userName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">{review.userName}</div>
                                                        {review.verified && (
                                                            <div className="text-xs text-green-600 flex items-center gap-1">
                                                                <Check size={12} />
                                                                Verified Purchase
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {new Date(review.date).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                            </div>

                                            <StarRating rating={review.rating} />

                                            <div>
                                                <div className="font-semibold text-gray-900 mb-1">{review.title}</div>
                                                <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                                            </div>

                                            {review.images && (
                                                <div className="flex gap-2">
                                                    {review.images.map((img, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={img}
                                                            alt={Review `${idx + 1}`}
                                                            className="w-20 h-20 object-cover rounded-lg border cursor-pointer hover:scale-105 transition"
                                                        />
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center gap-4 text-sm pt-2 border-t">
                                                <button className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition">
                                                    <ThumbsUp size={16} />
                                                    <span>Helpful ({review.helpful})</span>
                                                </button>
                                                <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition">
                                                    <MessageCircle size={16} />
                                                    <span>Reply</span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {reviews.length > 3 && (
                                    <button
                                        onClick={() => setShowAllReviews(!showAllReviews)}
                                        className="w-full py-3 border-2 font-semibold rounded-lg hover:bg-gray-50 transition"
                                    >
                                        {showAllReviews ? 'Show Less' : `View All ${reviews.length} Reviews`}
                                    </button>
                                )}
                            </div>
                        )}

                        {/* FAQs Tab */}
                        {activeTab === 'faqs' && (
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                                {faqs.map((faq) => (
                                    <div key={faq.id} className="border rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition text-left"
                                        >
                                            <span className="font-semibold text-gray-900">{faq.question}</span>
                                            {expandedFaq === faq.id ? (
                                                <ChevronUp className="flex-shrink-0 text-blue-600" size={20} />
                                            ) : (
                                                <ChevronDown className="flex-shrink-0 text-gray-400" size={20} />
                                            )}
                                        </button>
                                        {expandedFaq === faq.id && (
                                            <div className="px-4 pb-4 text-gray-700 text-sm leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Similar Products */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-6">Similar Products You May Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {similarProducts.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="aspect-square bg-gray-100">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <div className="p-4 space-y-2">
                                    <h3 className="font-semibold text-sm line-clamp-2">{item.name}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                                            <span>{item.rating}</span>
                                            <Star size={10} fill="white" />
                                        </div>
                                    </div>
                                    <div className="text-lg font-bold">{formatPrice(item.price)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Bar - Mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 flex gap-3 z-50">
                <button className="flex-1 bg-orange-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                    <ShoppingCart size={20} />
                    ADD TO CART
                </button>
                <button className="flex-1 bg-red-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2">
                    BUY NOW
                </button>
            </div>
        </div>
    );
};

export default ProductBuyPage;