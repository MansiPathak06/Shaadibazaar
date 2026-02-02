"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Loader2,
  PhoneCall,
  Users,
  IndianRupee,
} from "lucide-react";

export default function AllVenuesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const category = searchParams.get("category"); // e.g., "guest-houses"
  const subCategory = searchParams.get("subCategory"); // e.g., "family-guest-houses"

  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Category display names mapping
  const categoryDisplayNames = {
    "guest-houses": "Guest Houses",
    "homestays-and-rentals": "Homestays & Rentals",
    "hotel-accommodation": "Hotel Accommodation",
    "wedding-specific": "Wedding Specific Venues",
  };

  // Subcategory display names mapping
  const subCategoryDisplayNames = {
    // Guest Houses
    "family-guest-houses": "Family Guest Houses",
    "government-guest-houses": "Government Guest Houses",
    "private-guest-houses": "Private Guest Houses",
    "dharamshalas": "Dharamshalas",
    "budget-guest-houses": "Budget Guest Houses",
    "luxury-guest-houses": "Luxury Guest Houses",
    
    // Homestays & Rentals
    "airbnb-style-apartments": "Airbnb-style Apartments",
    "homestay-private-rooms": "Homestay Private Rooms",
    "farmhouse-stay": "Farmhouse Stay",
    "villas-on-rent": "Villas on Rent",
    "studio-apartments": "Studio Apartments",
    "hostels": "Hostels",
    
    // Add more subcategories as needed
  };

  const categoryImages = {
    "guest-houses": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
    "family-guest-houses": "https://i.pinimg.com/736x/7f/5e/74/7f5e749e86a77fa3fe9ebd7bb130d37d.jpg",
    "government-guest-houses": "https://i.pinimg.com/1200x/ac/00/61/ac0061d07dfd87b850264a2bc5d10566.jpg",
    "private-guest-houses": "https://i.pinimg.com/1200x/d3/c1/40/d3c1407f99da5fe4c5f0b771d70f210f.jpg",
    "dharamshalas": "https://i.pinimg.com/1200x/33/6a/f3/336af32ebc15345c997adfdf3932fb41.jpg",
    "budget-guest-houses": "https://i.pinimg.com/1200x/d2/91/63/d29163e94bf7966e319479ddb0eb9433.jpg",
    "luxury-guest-houses": "https://i.pinimg.com/736x/95/c3/d4/95c3d47c44f4c52f6528d6f9af552874.jpg",
    
    // Homestays & Rentals
    "homestays-and-rentals": "https://i.pinimg.com/736x/fc/0e/51/fc0e51f4d1b3f8f6dd47dadb546e310a.jpg",
    "airbnb-style-apartments": "https://i.pinimg.com/1200x/ce/b6/fc/ceb6fc58f4cbf7ecd2fe0cadde9b6d37.jpg",
    "homestay-private-rooms": "https://i.pinimg.com/1200x/73/89/0e/73890e9e4ffa1c4b19de309c6524b406.jpg",
    "farmhouse-stay": "https://i.pinimg.com/1200x/07/be/75/07be75cb390b26318c746299f0f471b6.jpg",
    "villas-on-rent": "https://i.pinimg.com/736x/95/c3/d4/95c3d47c44f4c52f6528d6f9af552874.jpg",
    "studio-apartments": "https://i.pinimg.com/1200x/6d/60/de/6d60de76f916bcb276d2a033152f0362.jpg",
    "hostels": "https://i.pinimg.com/736x/9c/03/97/9c0397ad9f3000017ecbf3fd38ee6cbf.jpg",
  };

  const currentTitle = subCategory 
    ? (subCategoryDisplayNames[subCategory] || "Venues")
    : (categoryDisplayNames[category] || "All Venues");

  const currentImage = subCategory 
    ? (categoryImages[subCategory] || categoryImages["guest-houses"])
    : (categoryImages[category] || categoryImages["guest-houses"]);

  useEffect(() => {
    fetchVenues();
  }, [category, subCategory]);

  const fetchVenues = async () => {
    setLoading(true);
    try {
      // Construct API endpoint based on category and subcategory
      let apiUrl = `http://localhost:5000/api/venues`;
      const params = new URLSearchParams();
      
      if (category) params.append("category", category);
      if (subCategory) params.append("subCategory", subCategory);
      
      if (params.toString()) {
        apiUrl += `?${params.toString()}`;
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.success) {
        setVenues(data.venues);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Fetch venues error:", error);
      setError("Failed to load venues");
    } finally {
      setLoading(false);
    }
  };

  const handleVenueClick = (venueId) => {
    router.push(`/venue-and-accommodation/venue-details/${venueId}`);
  };

  const handleCallClick = (e, phone) => {
    e.stopPropagation();
    if (phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  const handleBackClick = () => {
    if (subCategory) {
      // If viewing subcategory, go back to category page
      router.push(`/venue-and-accommodation/accommodation-types/${category}`);
    } else {
      // If viewing category, go back to main venue page
      router.push("/venue-and-accommodation");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-purple-500 mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Loading venues...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <button
            onClick={handleBackClick}
            className="flex cursor-pointer items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {currentTitle}
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Explore our curated collection of {currentTitle?.toLowerCase() || "venues"}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-1 text-gray-700 hover:text-purple-500 transition-colors cursor-pointer font-medium"
            >
              <span className="w-4 h-4">🏠</span>
              <span>Home</span>
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => router.push("/venue-and-accommodation")}
              className="text-gray-600 hover:text-purple-500 transition-colors cursor-pointer font-medium"
            >
              Venues & Accommodation
            </button>
            {category && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600 font-medium">
                  {categoryDisplayNames[category]}
                </span>
              </>
            )}
            {subCategory && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-purple-500 font-semibold text-base">
                  {subCategoryDisplayNames[subCategory]}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Venues Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {venues.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No venues available in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue) => (
              <div
                key={venue.id}
                onClick={() => handleVenueClick(venue.id)}
                className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                {/* Image Section */}
                <div className="relative h-[220px] overflow-hidden">
                  {venue.images && venue.images.length > 0 && (
                    <img
                      src={
                        Array.isArray(venue.images)
                          ? venue.images[0]
                          : venue.images
                      }
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = currentImage;
                      }}
                    />
                  )}
                  {venue.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-white px-2.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Featured
                    </div>
                  )}
                  {venue.rating > 0 && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-gray-700 font-semibold text-sm">
                        {venue.rating}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors">
                    {venue.name}
                  </h3>

                  {venue.location && (
                    <div className="flex items-start gap-1.5 text-gray-700 text-sm mb-2">
                      <MapPin className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{venue.location}</span>
                    </div>
                  )}

                  {venue.capacity && (
                    <div className="flex items-center gap-1.5 text-gray-700 text-sm mb-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      <span>Capacity: {venue.capacity} guests</span>
                    </div>
                  )}

                  {venue.price && (
                    <div className="flex items-center gap-1.5 text-gray-700 text-sm mb-3">
                      <IndianRupee className="w-4 h-4 text-purple-500" />
                      <span className="font-bold text-purple-500">
                        ₹{venue.price?.toLocaleString("en-IN")}
                      </span>
                      <span className="text-gray-500 text-xs">/ night</span>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {venue.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => handleCallClick(e, venue.phone)}
                      className="flex-1 cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
                    >
                      <PhoneCall className="w-4 h-4" />
                      Call Now
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVenueClick(venue.id);
                      }}
                      className="flex-1 px-4 py-2.5 cursor-pointer bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm shadow-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}