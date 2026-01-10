"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Star, Filter, X, Loader2, ChevronRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function GroomAllServicesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || "groom-services";
  const subCategory = searchParams.get("subCategory") || "";
  const featured = searchParams.get("featured");

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // ✅ FIXED: Correct category mapping for Muslim/Hindu
  const getVendorCategory = (categoryParam) => {
    if (categoryParam === "muslim-groom-services") return "muslim-groom-services";
    if (categoryParam === "hindu-groom-services") return "hindu-groom-services";
    return "groom-services";
  };

  // ✅ DYNAMIC SUBCATEGORIES with service counts
  const subCategories = category === "muslim-groom-services" ? [
    { value: "", label: "All Muslim Groom Services", count: services.length },
    { value: "groom-makeover", label: "Groom Makeover", count: services.filter(s => s.sub_category === "groom-makeover").length },
    { value: "beard-styling", label: "Beard Styling", count: services.filter(s => s.sub_category === "beard-styling").length },
    { value: "arabic-henna", label: "Arabic Henna", count: services.filter(s => s.sub_category === "arabic-henna").length },
    { value: "groom-photoshoot", label: "Groom Photoshoot", count: services.filter(s => s.sub_category === "groom-photoshoot").length },
    { value: "car-decoration", label: "Car Decoration", count: services.filter(s => s.sub_category === "car-decoration").length },
    { value: "baraat-management", label: "Baraat Management", count: services.filter(s => s.sub_category === "baraat-management").length },
  ] : [
    { value: "", label: "All Hindu Groom Services", count: services.length },
    { value: "groom-makeup", label: "Groom Makeup", count: services.filter(s => s.sub_category === "groom-makeup").length },
    { value: "hairstyling", label: "Hairstyling", count: services.filter(s => s.sub_category === "hairstyling").length },
    { value: "beard-trim-shave", label: "Beard Trim/Shave", count: services.filter(s => s.sub_category === "beard-trim-shave").length },
    { value: "ubtan-session", label: "Ubtan Session", count: services.filter(s => s.sub_category === "ubtan-session").length },
    { value: "groom-photoshoot", label: "Groom Photoshoot", count: services.filter(s => s.sub_category === "groom-photoshoot").length },
    { value: "turban-tying", label: "Turban Tying", count: services.filter(s => s.sub_category === "turban-tying").length },
    { value: "sehra-tying", label: "Sehra Tying", count: services.filter(s => s.sub_category === "sehra-tying").length },
    { value: "ghodi-decoration", label: "Ghodi Decoration", count: services.filter(s => s.sub_category === "ghodi-decoration").length },
    { value: "band-baja", label: "Band-Baja", count: services.filter(s => s.sub_category === "band-baja").length },
    { value: "dj-baraat", label: "DJ for Baraat", count: services.filter(s => s.sub_category === "dj-baraat").length },
  ];

  // ✅ FIXED API call with correct vendor_category
  useEffect(() => {
    fetchServices();
  }, [category, subCategory, featured]);

  const fetchServices = async () => {
    setLoading(true);
    setError("");

    try {
      const vendorCategory = getVendorCategory(category);
      let url = `http://localhost:5000/api/services?vendor_category=${vendorCategory}`;
      
      if (subCategory) {
        url += `&sub_category=${subCategory}`; // ✅ FIXED: sub_category (not subCategory)
      }
      if (featured) {
        url += `&featured=true`;
      }

      console.log("🔍 API URL:", url); // Debug log

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setServices(data.services || []);
      } else {
        setError(data.message || "No services found");
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  // Filter and Sort Services
  const filteredServices = services
    .filter((service) => {
      const price = parseInt(service.starting_price) || 0;
      return price >= priceRange[0] && price <= priceRange[1];
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (parseInt(a.starting_price) || 0) - (parseInt(b.starting_price) || 0);
        case "price-high":
          return (parseInt(b.starting_price) || 0) - (parseInt(a.starting_price) || 0);
        case "rating":
          return (parseInt(b.rating) || 0) - (parseInt(a.rating) || 0);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  const currentSubCategory = subCategories.find((sub) => sub.value === subCategory);

  const isMuslimServices = category === "muslim-groom-services";
  
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { 
      label: isMuslimServices ? "Muslim Groom Services" : "Hindu Groom Services", 
      href: isMuslimServices ? "/groom/muslim/services" : "/groom/hindu/services" 
    },
  ];

  if (subCategory && currentSubCategory) {
    breadcrumbs.push({ label: currentSubCategory.label, href: "#" });
  }

  return (
    <div className={`min-h-screen ${
      isMuslimServices 
        ? "bg-gradient-to-b from-green-50 to-emerald-50" 
        : "bg-gradient-to-b from-amber-50 to-orange-50"
    }`}>
      {/* Header */}
      <div className={`text-white py-8 ${
        isMuslimServices 
          ? "bg-gradient-to-r from-green-900 to-emerald-900" 
          : "bg-gradient-to-r from-orange-900 to-red-900"
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <ChevronRight className={`w-4 h-4 ${
                    isMuslimServices ? "text-emerald-300" : "text-amber-300"
                  }`} />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className={`font-medium ${
                    isMuslimServices ? "text-emerald-200" : "text-amber-200"
                  }`}>
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`hover:text-white transition-colors ${
                      isMuslimServices ? "text-emerald-100" : "text-amber-100"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-4xl font-bold mb-2">
            {currentSubCategory?.label || 
             (isMuslimServices ? "All Muslim Groom Services" : "All Hindu Groom Services")}
          </h1>
          <p className={isMuslimServices ? "text-emerald-200" : "text-amber-200"}>
            {filteredServices.length} services available
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>

              {/* ✅ FIXED Service Type with counts + hover */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Service Type</h4>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {subCategories.map((sub) => (
                    <Link
                      key={sub.value}
                      href={`/groom/all-services?category=${category}${
                        sub.value ? `&subCategory=${sub.value}` : ""
                      }`}
                      className={`block px-3 py-2 rounded-lg transition-all duration-200 text-sm group hover:shadow-md ${
                        subCategory === sub.value
                          ? (isMuslimServices 
                              ? "bg-green-100 text-green-900 font-bold shadow-md border-2 border-green-300" 
                              : "bg-orange-100 text-orange-900 font-bold shadow-md border-2 border-orange-300")
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span>{sub.label}</span>
                      <span className={`ml-2 text-xs opacity-75 ${
                        subCategory === sub.value ? "font-bold" : ""
                      }`}>
                        ({sub.count})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range + Sort - SAME */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className={`w-full ${
                      isMuslimServices ? "accent-green-600" : "accent-orange-600"
                    }`}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${
                    isMuslimServices ? "green" : "orange"
                  }-500 focus:border-transparent text-sm`}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button + Main Content - SAME AS BEFORE */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`lg:hidden fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg hover:shadow-xl ${
              isMuslimServices 
                ? "bg-green-600 hover:bg-green-700" 
                : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            <Filter className="w-6 h-6" />
          </button>

          <main className="flex-1 lg:ml-0">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredServices.length}</span> of {services.length} services
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`lg:hidden px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${
                  isMuslimServices ? "green" : "orange"
                }-500 text-sm`}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2 className={`w-12 h-12 animate-spin ${
                  isMuslimServices ? "text-green-600" : "text-orange-600"
                }`} />
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.length === 0 ? (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-600 text-lg mb-4">
                      No services found for "{currentSubCategory?.label || 'this category'}"
                    </p>
                    <Link
                      href={`/groom/all-services?category=${category}`}
                      className={`inline-block px-6 py-3 text-white rounded-lg transition-colors ${
                        isMuslimServices 
                          ? "bg-green-600 hover:bg-green-700" 
                          : "bg-orange-600 hover:bg-orange-700"
                      }`}
                    >
                      View All Services
                    </Link>
                  </div>
                ) : (
                  filteredServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/groom/service/${service.id}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                        <img
                          src={
                            typeof service.images === "string"
                              ? service.images.split(",")[0]
                              : service.images?.[0] || "https://via.placeholder.com/400x300"
                          }
                          alt={service.service_name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x300";
                          }}
                        />
                        {service.featured && (
                          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {service.service_name}
                        </h3>
                        {service.description && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {service.description}
                          </p>
                        )}
                        {service.area_of_service && (
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="line-clamp-1">{service.area_of_service}</span>
                          </div>
                        )}
                        {service.contact_phone && (
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <Phone className="w-4 h-4 mr-1" />
                            <span>{service.contact_phone}</span>
                          </div>
                        )}
                        <div className="flex items-baseline gap-2 pt-2 border-t">
                          {service.starting_price ? (
                            <>
                              <span className={`text-lg font-bold ${
                                isMuslimServices ? "text-green-600" : "text-orange-600"
                              }`}>
                                ₹{parseInt(service.starting_price).toLocaleString()}
                              </span>
                              <span className="text-sm text-gray-500">onwards</span>
                            </>
                          ) : (
                            <span className="text-sm text-gray-600">Contact for pricing</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal - SAME with counts */}
      {showFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
          <div className="bg-white w-80 h-full overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Service Type</h4>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {subCategories.map((sub) => (
                    <Link
                      key={sub.value}
                      href={`/groom/all-services?category=${category}${
                        sub.value ? `&subCategory=${sub.value}` : ""
                      }`}
                      onClick={() => setShowFilters(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        subCategory === sub.value
                          ? (isMuslimServices 
                              ? "bg-green-100 text-green-900 font-bold shadow-md" 
                              : "bg-orange-100 text-orange-900 font-bold shadow-md")
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md"
                      }`}
                    >
                      <span>{sub.label}</span>
                      <span className="ml-2 text-xs opacity-75">({sub.count})</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className={`w-full ${
                    isMuslimServices ? "accent-green-600" : "accent-orange-600"
                  }`}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹0</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
