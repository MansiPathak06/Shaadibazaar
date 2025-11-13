// 'use client';

// import React, { useState } from 'react';
// import { Heart, Star, MapPin, Users, Calendar, Clock } from 'lucide-react';

// const ServiceCard = ({ service }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 hover:shadow-2xl transition-all duration-300">
//       {/* Image Section */}
//       <div className="relative h-56 overflow-hidden group">
//         <img 
//           src={service.image} 
//           alt={service.title}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         {/* Overlay gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
//         {/* Price Badge */}
//         <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
//           ₹{service.price.toLocaleString()} {service.priceUnit}
//         </div>
        
//         {/* Favorite Button */}
//         <button 
//           onClick={() => setIsFavorite(!isFavorite)}
//           className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
//         >
//           <Heart 
//             className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
//           />
//         </button>
//       </div>

//       {/* Content Section */}
//       <div className="p-5">
//         {/* Title and Rating */}
//         <div className="flex items-start justify-between mb-3">
//           <h3 className="text-xl font-bold text-gray-900 flex-1">
//             {service.title}
//           </h3>
//           <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg ml-2">
//             <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//             <span className="text-sm font-semibold text-gray-900">
//               {service.rating}
//             </span>
//             <span className="text-xs text-gray-500">
//               ({service.reviews})
//             </span>
//           </div>
//         </div>

//         {/* Location */}
//         <div className="flex items-center gap-2 text-gray-600 mb-4">
//           <MapPin className="w-4 h-4" />
//           <span className="text-sm">{service.location}</span>
//         </div>

//         {/* Service Details */}
//         <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-gray-100">
//           <div className="flex items-center gap-2">
//             <Users className="w-4 h-4 text-gray-500" />
//             <span className="text-xs text-gray-700">{service.capacity}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Calendar className="w-4 h-4 text-gray-500" />
//             <span className="text-xs text-gray-700">{service.duration}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Clock className="w-4 h-4 text-gray-500" />
//             <span className="text-xs text-gray-700">{service.setupTime}</span>
//           </div>
//         </div>

//         {/* View Details Button */}
//         <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2">
//           <span>View Details</span>
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// const EventServicesShowcase = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Dance Party Setup",
//       image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
//       price: 25000,
//       priceUnit: "Event",
//       rating: 4.9,
//       reviews: 47,
//       location: "Mumbai & Pune",
//       capacity: "100-500",
//       duration: "4-8 hrs",
//       setupTime: "2 hrs"
//     },
//     {
//       id: 2,
//       title: "Floral Decoration",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
//       price: 15000,
//       priceUnit: "Event",
//       rating: 4.8,
//       reviews: 83,
//       location: "All Major Cities",
//       capacity: "50-300",
//       duration: "Full Day",
//       setupTime: "3 hrs"
//     },
//     {
//       id: 3,
//       title: "Stage Decoration",
//       image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
//       price: 35000,
//       priceUnit: "Event",
//       rating: 4.9,
//       reviews: 62,
//       location: "Delhi NCR",
//       capacity: "200-1000",
//       duration: "Full Day",
//       setupTime: "4 hrs"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-3">
//             Our Premium Services
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Transform your events with our professional decoration services
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {services.map((service) => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventServicesShowcase;