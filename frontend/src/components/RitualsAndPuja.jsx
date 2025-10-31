"use client";
import React, { useState } from 'react';
import { Search, Star, MapPin, Phone, Mail, ShoppingCart, Heart } from 'lucide-react';


const RitualsAndPuja = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const serviceProviders = [
    {
      id: 1,
      name: 'Pandit Rajesh Sharma',
      type: 'Hindu Priest',
      rating: 4.8,
      reviews: 245,
      price: '₹5,000 - ₹15,000',
      location: 'Delhi NCR',
      phone: '+91 98765 43210',
      email: 'pandit.rajesh@example.com',
      image: 'https://i.pinimg.com/736x/5d/8b/e8/5d8be8e507b692d692ba8452e680eb28.jpg',
      services: ['Wedding Ceremonies', 'Griha Pravesh', 'Satyanarayan Puja', 'Havan'],
      experience: '15 years',
      languages: ['Hindi', 'Sanskrit', 'English']
    },
    {
      id: 2,
      name: 'Maulana Abdul Rahman',
      type: 'Molviy',
      rating: 4.9,
      reviews: 189,
      price: '₹3,000 - ₹10,000',
      location: 'Mumbai',
      phone: '+91 98765 43211',
      email: 'maulana.rahman@example.com',
      image: 'https://i.pinimg.com/736x/94/69/33/946933e548ef8f63ba29d53c6bc2d33b.jpg',
      services: ['Nikah Ceremonies', 'Aqiqah', 'Walima', 'Dua & Prayers'],
      experience: '20 years',
      languages: ['Urdu', 'Arabic', 'Hindi', 'English']
    },
    {
      id: 3,
      name: 'Father Michael D\'Souza',
      type: 'Christian Priest',
      rating: 4.7,
      reviews: 156,
      price: '₹4,000 - ₹12,000',
      location: 'Bangalore',
      phone: '+91 98765 43212',
      email: 'father.michael@example.com',
      image: 'https://i.pinimg.com/736x/b9/d4/4b/b9d44b00aa14489b0a1b684accd43c29.jpg',
      services: ['Wedding Mass', 'Baptism', 'Holy Communion', 'Blessing Ceremonies'],
      experience: '18 years',
      languages: ['English', 'Kannada', 'Tamil']
    },
    {
      id: 4,
      name: 'Giani Harpreet Singh',
      type: 'Sikh Granthi',
      rating: 4.9,
      reviews: 203,
      price: '₹6,000 - ₹18,000',
      location: 'Chandigarh',
      phone: '+91 98765 43213',
      email: 'giani.harpreet@example.com',
      image: 'https://i.pinimg.com/736x/92/e7/a2/92e7a29723952329152105423aeb0b1d.jpg',
      services: ['Anand Karaj', 'Sukhmani Sahib Path', 'Akhand Path', 'Ardas'],
      experience: '22 years',
      languages: ['Punjabi', 'Hindi', 'English']
    }
  ];


  const pujaItems = [
    {
      id: 101,
      name: 'Complete Hindu Puja Kit',
      category: 'Hindu',
      price: 2499,
      originalPrice: 3999,
      image: 'https://i.pinimg.com/736x/60/43/d3/6043d3cac1d9cacf1c10237d00a60bef.jpg',
      description: 'Includes Kalash, Thali, Incense, Diyas, Kumkum, Turmeric, Rice',
      inStock: true,
      rating: 4.6
    },
    {
      id: 102,
      name: 'Wedding Mandap Decoration Set',
      category: 'Hindu',
      price: 15999,
      originalPrice: 22999,
      image: 'https://i.pinimg.com/1200x/87/c4/4c/87c44c627a759c3e6fbee7247db3cb5a.jpg',
      description: 'Complete mandap setup with flowers, drapes, and lighting',
      inStock: true,
      rating: 4.8
    },
    {
      id: 103,
      name: 'Islamic Wedding Nikah Set',
      category: 'Muslim',
      price: 1899,
      originalPrice: 2999,
      image: 'https://i.pinimg.com/1200x/b6/39/29/b639290dd7cb75b85f71e469abc2e8eb.jpg',
      description: 'Quran, Prayer Mat, Dates, Attar, Decorative Nikah Certificate',
      inStock: true,
      rating: 4.7
    },
    {
      id: 104,
      name: 'Mehndi Ceremony Complete Kit',
      category: 'Muslim',
      price: 3499,
      originalPrice: 4999,
      image: 'https://i.pinimg.com/736x/20/15/5d/20155d29178c4216ff1eeeba34cd9274.jpg',
      description: 'Premium mehndi cones, decorative plates, traditional accessories',
      inStock: true,
      rating: 4.5
    },
    {
      id: 105,
      name: 'Christian Wedding Candle Set',
      category: 'Christian',
      price: 1299,
      originalPrice: 1899,
      image: 'https://i.pinimg.com/1200x/58/47/86/58478627d5050608c1bf31751e00eccd.jpg',
      description: 'Unity candles, pillar candles, decorative holders, matches',
      inStock: true,
      rating: 4.4
    },
    {
      id: 106,
      name: 'Church Decoration Package',
      category: 'Christian',
      price: 12999,
      originalPrice: 18999,
      image: 'https://i.pinimg.com/736x/7a/c7/0a/7ac70aa678308c2baac1e3260606993f.jpg',
      description: 'Aisle runners, pew decorations, altar flowers, ribbons',
      inStock: true,
      rating: 4.9
    },
    {
      id: 107,
      name: 'Sikh Anand Karaj Essentials',
      category: 'Sikh',
      price: 4999,
      originalPrice: 6999,
      image: 'https://i.pinimg.com/1200x/f3/3d/2e/f33d2e9942eb817cb6ae62ceea9f499d.jpg',
      description: 'Rumala Sahib, Chaur Sahib, flowers, traditional decorations',
      inStock: true,
      rating: 4.8
    },
    {
      id: 108,
      name: 'Sacred Havan Samagri Premium',
      category: 'Hindu',
      price: 899,
      originalPrice: 1299,
      image: 'https://i.pinimg.com/736x/9a/61/04/9a6104f590758128b32210bd9633ea94.jpg',
      description: 'Pure ingredients for sacred fire ceremony, 1kg pack',
      inStock: true,
      rating: 4.7
    },
    {
      id: 109,
      name: 'Ganesh Idol with Accessories',
      category: 'Hindu',
      price: 1999,
      originalPrice: 2999,
      image: 'https://i.pinimg.com/736x/ef/1f/c2/ef1fc29085de98a5ee7dde17a7aa9f74.jpg',
      description: 'Brass Ganesh idol, decorative plate, flowers, offerings',
      inStock: true,
      rating: 4.6
    },
    {
      id: 110,
      name: 'Attar & Perfume Gift Set',
      category: 'Muslim',
      price: 2199,
      originalPrice: 3499,
      image: 'https://i.pinimg.com/1200x/a1/e2/d7/a1e2d7273e3b3b81feaa7a3fbc60de3b.jpg',
      description: 'Traditional Arabian attars in decorative bottles',
      inStock: true,
      rating: 4.5
    },
    {
      id: 111,
      name: 'Holy Bible Deluxe Edition',
      category: 'Christian',
      price: 1599,
      originalPrice: 2299,
      image: 'https://i.pinimg.com/736x/7f/3c/7a/7f3c7a771f6eac9043beb20f50f928a6.jpg',
      description: 'Leather-bound wedding edition with personalization',
      inStock: true,
      rating: 4.9
    },
    {
      id: 112,
      name: 'Punjabi Phulkari Wedding Dupatta',
      category: 'Sikh',
      price: 3999,
      originalPrice: 5999,
      image: 'https://i.pinimg.com/736x/f9/17/b3/f917b3c5efb1e745bcc5b403f1203776.jpg',
      description: 'Handcrafted traditional phulkari for Anand Karaj',
      inStock: true,
      rating: 4.8
    }
  ];


  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };


  const handleAddToWishlist = (itemId) => {
    if (wishlist.includes(itemId)) {
      setWishlist(wishlist.filter(id => id !== itemId));
    } else {
      setWishlist([...wishlist, itemId]);
    }
  };


  const filterItems = (category) => {
    if (category === 'all') return pujaItems;
    return pujaItems.filter(item => item.category === category);
  };


  const filteredItems = filterItems(activeTab);


  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/1f/de/34/1fde34e64f47cbf40f5749cfd94aec7a.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/80 to-rose-500/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center px-4 py-3">
            Sacred Rituals & Puja Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center max-w-2xl px-6 py-2">
            Connect with experienced religious leaders and find all essential items for your special wedding ceremonies
          </p>
          <div className="w-full max-w-2xl px-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-400" />
              <input
                type="text"
                placeholder="Search for priests, items, or ceremonies..."
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Religious Leaders Section */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center px-4">
          Book Religious Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 bg-gradient-to-br from-rose-100 to-rose-50">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{provider.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-0.5">{provider.name}</h3>
                <p className="text-rose-400 font-semibold text-sm mb-1.5">{provider.type}</p>
                <p className="text-gray-600 text-xs mb-2">
                  {provider.experience} experience
                </p>
                <div className="flex items-center text-gray-500 text-xs mb-1.5">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>{provider.location}</span>
                </div>
                <div className="flex items-center text-gray-700 font-semibold text-sm mb-3">
                  <span>{provider.price}</span>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-1.5">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {provider.services.slice(0, 2).map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(provider)}
                  className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500 transition-colors font-semibold text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Puja Items Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center px-4">
          Essential Puja Items
        </h2>


        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
          {['all', 'Hindu', 'Muslim', 'Christian', 'Sikh'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === category
                  ? 'bg-rose-400 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-50'
              }`}
            >
              {category === 'all' ? 'All Items' : category}
            </button>
          ))}
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-72 bg-gradient-to-br from-rose-50 to-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleAddToWishlist(item.id)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wishlist.includes(item.id)
                        ? 'text-rose-400 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
                {item.originalPrice > item.price && (
                  <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center mb-1.5">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-1.5 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2.5 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center mb-3">
                  <span className="text-xl font-bold text-rose-400">
                    ₹{item.price.toLocaleString()}
                  </span>
                  {item.originalPrice > item.price && (
                    <span className="ml-2 text-xs text-gray-400 line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-500 transition-colors font-semibold text-sm flex items-center justify-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Service Provider Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {selectedService.name}
                </h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div>
                  <p className="text-rose-400 font-semibold text-lg mb-2">
                    {selectedService.type}
                  </p>
                  <div className="flex items-center mb-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{selectedService.rating}</span>
                    <span className="text-gray-500 ml-2">
                      ({selectedService.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">
                    <strong>Experience:</strong> {selectedService.experience}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Price Range:</strong> {selectedService.price}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <strong>Languages:</strong> {selectedService.languages.join(', ')}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Services Offered:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="bg-rose-50 text-rose-600 px-4 py-2 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t pt-6 space-y-3">
                <a
                  href={`tel:${selectedService.phone}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  {selectedService.phone}
                </a>
                <a
                  href={`mailto:${selectedService.email}`}
                  className="flex items-center text-gray-700 hover:text-rose-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  {selectedService.email}
                </a>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3" />
                  {selectedService.location}
                </div>
              </div>
              <button className="w-full mt-6 bg-rose-400 text-white py-3 rounded-lg hover:bg-rose-500 transition-colors font-semibold text-lg">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Trust Badges */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="px-4 py-6">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">500+</div>
              <div className="text-gray-600">Verified Priests</div>
            </div>
            <div className="px-4 py-6">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="px-4 py-6">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">1000+</div>
              <div className="text-gray-600">Puja Items</div>
            </div>
            <div className="px-4 py-6">
              <div className="text-3xl md:text-4xl font-bold text-rose-400 mb-2">All Religions</div>
              <div className="text-gray-600">Inclusive Service</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RitualsAndPuja;
