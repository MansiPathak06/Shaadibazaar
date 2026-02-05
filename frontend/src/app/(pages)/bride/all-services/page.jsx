"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Star, Filter, X, Loader2, ChevronRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function BridalAllServicesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category") || "hindu-bridal-services";
  const subCategory = searchParams.get("subCategory") || "";
  const featured = searchParams.get("featured");

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Category mapping for Hindu/Muslim bridal services
  const getVendorCategory = (categoryParam) => {
    if (categoryParam === "muslim-bridal-services") return "muslim-bridal-services";
    if (categoryParam === "hindu-bridal-services") return "hindu-bridal-services";
    if (categoryParam === "christian-bridal-services") return "christian-bridal-services";
    if (categoryParam === "sikh-bridal-services") return "sikh-bridal-services";
    if (categoryParam === "pre-wedding-services") return "pre-wedding-services";

    return "hindu-bridal-services";
  };

  // ✅ DYNAMIC SUBCATEGORIES based on category type
  const getSubCategories = () => {
    if (category === "muslim-bridal-services") {
      return [
        { value: "", label: "All Muslim Bridal Services", count: services.length },
        { value: "bridal-makeover", label: "Bridal Makeover", count: services.filter(s => s.sub_category === "bridal-makeover").length },
        { value: "arabic-henna", label: "Arabic Henna", count: services.filter(s => s.sub_category === "arabic-henna").length },
        { value: "hijab-styling", label: "Hijab Styling", count: services.filter(s => s.sub_category === "hijab-styling").length },
        { value: "bridal-photoshoot", label: "Bridal Photoshoot", count: services.filter(s => s.sub_category === "bridal-photoshoot").length },
        { value: "pre-bridal-care", label: "Pre-Bridal Care", count: services.filter(s => s.sub_category === "pre-bridal-care").length },
        { value: "stage-decoration", label: "Stage Decoration", count: services.filter(s => s.sub_category === "stage-decoration").length },
        { value: "car-decoration", label: "Car Decoration", count: services.filter(s => s.sub_category === "car-decoration").length },
      ];
    } else if (category === "christian-bridal-services") {
      return [
        { value: "", label: "All Christian Bridal Services", count: services.length },
        { value: "bridal-makeup", label: "Bridal Makeup", count: services.filter(s => s.sub_category === "bridal-makeup").length },
        { value: "gown-tailoring", label: "Gown Tailoring", count: services.filter(s => s.sub_category === "gown-tailoring").length },
        { value: "manicure-nails", label: "Manicure and Nails", count: services.filter(s => s.sub_category === "manicure-nails").length },
        { value: "bridal-photoshoot", label: "Bridal Photoshoot", count: services.filter(s => s.sub_category === "bridal-photoshoot").length },
        { value: "church-choir", label: "Church-Choir", count: services.filter(s => s.sub_category === "church-choir").length },
        { value: "wedding-planner", label: "Wedding Planner", count: services.filter(s => s.sub_category === "wedding-planner").length },

      ];
    } else if (category === "sikh-bridal-services") {
      return [
        { value: "", label: "All Sikh Bridal Services", count: services.length },
       
        { value: "chooda-ceremony", label: "Chooda-ceremony", count: services.filter(s => s.sub_category === "chooda-ceremony").length },
        { value: "kaleera-photoshoot", label: "Kaleera Photoshoot", count: services.filter(s => s.sub_category === "kaleera-photoshoot").length },
        { value: "mehendi-artist", label: "Mehendi Artist", count: services.filter(s => s.sub_category === "mehendi-artist").length },
        { value: "hair-accessories", label: "Hair ACcessories", count: services.filter(s => s.sub_category === "hair-accessories").length },
        { value: "doli-arrangement", label: "Doli Arrangement", count: services.filter(s => s.sub_category === "doli-arrangement").length },
        { value: "bhangra-team", label: "Bhangra Team", count: services.filter(s => s.sub_category === "bhangra-team").length },
        { value: "bridal-makeup", label: "Bridal Makeup", count: services.filter(s => s.sub_category === "bridal-makeup").length },
      ];
    } else if (category === "pre-wedding-services") {
    return [
      { value: "", label: "All Pre-Wedding Services", count: services.length },
      { value: "pre-bridal-package", label: "Pre-Bridal Package", count: services.filter(s => s.sub_category === "pre-bridal-package").length },
      { value: "spa-services", label: "Spa Services", count: services.filter(s => s.sub_category === "spa-services").length },
      { value: "facial-treatments", label: "Facial Treatments", count: services.filter(s => s.sub_category === "facial-treatments").length },
      { value: "manicure-pedicure", label: "Manicure & Pedicure", count: services.filter(s => s.sub_category === "manicure-pedicure").length },
      { value: "nail-extensions", label: "Nail Extensions", count: services.filter(s => s.sub_category === "nail-extensions").length },
      { value: "hair-coloring", label: "Hair Coloring", count: services.filter(s => s.sub_category === "hair-coloring").length },
    ];

}
    else {
      // Hindu bridal services (default)
      return [
        { value: "", label: "All Hindu Bridal Services", count: services.length },
        { value: "bridal-makeup", label: "Bridal Makeup (HD/Airbrush)", count: services.filter(s => s.sub_category === "bridal-makeup").length },
        { value: "bridal-hairstyle", label: "Bridal Hairstyle", count: services.filter(s => s.sub_category === "bridal-hairstyle").length },
        { value: "mehendi-artist", label: "Mehendi Artist", count: services.filter(s => s.sub_category === "mehendi-artist").length },
        { value: "pre-bridal-package", label: "Pre-Bridal Package", count: services.filter(s => s.sub_category === "pre-bridal-package").length },
        { value: "spa-facial", label: "Spa & Facial", count: services.filter(s => s.sub_category === "spa-facial").length },
        { value: "ubtan-ceremony", label: "Ubtan Ceremony Setup", count: services.filter(s => s.sub_category === "ubtan-ceremony").length },
        { value: "bridal-photoshoot", label: "Bridal Photoshoot", count: services.filter(s => s.sub_category === "bridal-photoshoot").length },
        { value: "saree-draping", label: "Saree Draping Artist", count: services.filter(s => s.sub_category === "saree-draping").length },
        { value: "lehenga-pinning", label: "Lehenga Pinning Expert", count: services.filter(s => s.sub_category === "lehenga-pinning").length },
      ];
    }
  };

  const subCategories = getSubCategories();

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
        url += `&sub_category=${subCategory}`;
      }
      if (featured) {
        url += `&featured=true`;
      }

      console.log("🔍 API URL:", url);

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

  // ✅ Dynamic theming based on category
  const isMuslimServices = category === "muslim-bridal-services";
  const isChristianServices = category === "christian-bridal-services";
  const isSikhServices = category === "sikh-bridal-services";
  const isPreWeddingServices = category === "pre-wedding-services";

  
  const getThemeColors = () => {
    if (isMuslimServices) {
      return {
        linear: "from-green-50 to-emerald-50",
        headerlinear: "from-green-900 to-emerald-900",
        accent: "text-emerald-300",
        accentDark: "text-emerald-200",
        button: "bg-green-600 hover:bg-green-700",
        selected: "bg-green-100 text-green-900 border-green-300",
        ring: "green",
      };
    } else if (isChristianServices) {
      return {
        linear: "from-blue-50 to-indigo-50",
        headerlinear: "from-blue-900 to-indigo-900",
        accent: "text-blue-300",
        accentDark: "text-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
        selected: "bg-blue-100 text-blue-900 border-blue-300",
        ring: "blue",
      };
    } else if (isSikhServices) {
      return {
        linear: "from-orange-50 to-yellow-50",
        headerlinear: "from-orange-900 to-yellow-900",
        accent: "text-orange-300",
        accentDark: "text-orange-200",
        button: "bg-orange-600 hover:bg-orange-700",
        selected: "bg-orange-100 text-orange-900 border-orange-300",
        ring: "orange",
      };
    } else if (isPreWeddingServices) {
    return {
      linear: "from-purple-50 to-pink-50",
      headerlinear: "from-purple-900 to-pink-900",
      accent: "text-purple-300",
      accentDark: "text-purple-200",
      button: "bg-purple-600 hover:bg-purple-700",
      selected: "bg-purple-100 text-purple-900 border-purple-300",
      ring: "purple",
    };
}
    else {
      // Hindu (default - amber/orange theme)
      return {
        linear: "from-amber-50 to-orange-50",
        headerlinear: "from-orange-900 to-red-900",
        accent: "text-amber-300",
        accentDark: "text-amber-200",
        button: "bg-amber-600 hover:bg-amber-700",
        selected: "bg-orange-100 text-orange-900 border-orange-300",
        ring: "amber",
      };
    }
  };

  const theme = getThemeColors();

  const getCategoryLabel = () => {
    if (isPreWeddingServices) return "Pre-Wedding Services";
    if (isMuslimServices) return "Muslim Bridal Services";
    if (isChristianServices) return "Christian Bridal Services";
    if (isSikhServices) return "Sikh Bridal Services";
    return "Hindu Bridal Services";
  };

  const getCategoryPath = () => {
    if (isPreWeddingServices) return "/bride/pre-wedding";
    if (isMuslimServices) return "/bride/muslim-bridal-services";
    if (isChristianServices) return "/bride/christian-bridal-services";
    if (isSikhServices) return "/bride/sikh-bridal-services";
    return "/bride/hindu-bridal-services";
  };
  
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: getCategoryLabel(), href: getCategoryPath() },
  ];

  if (subCategory && currentSubCategory) {
    breadcrumbs.push({ label: currentSubCategory.label, href: "#" });
  }

  return (
    <div className={`min-h-screen bg-linear-to-b ${theme.linear}`}>
      {/* Header */}
      <div className={`text-white py-8 bg-linear-to-r ${theme.headerlinear}`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <ChevronRight className={`w-4 h-4 ${theme.accent}`} />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className={`font-medium ${theme.accentDark}`}>
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`hover:text-white transition-colors ${theme.accentDark}`}
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-4xl font-bold mb-2">
            {currentSubCategory?.label || getCategoryLabel()}
          </h1>
          <p className={theme.accentDark}>
            {filteredServices.length} services available
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>

              {/* Service Type with counts */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Service Type</h4>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {subCategories.map((sub) => (
                    <Link
                      key={sub.value}
                      href={`/bride/all-services?category=${category}${
                        sub.value ? `&subCategory=${sub.value}` : ""
                      }`}
                      className={`block px-3 py-2 rounded-lg transition-all duration-200 text-sm group hover:shadow-md ${
                        subCategory === sub.value
                          ? `${theme.selected} font-bold shadow-md border-2`
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

              {/* Price Range */}
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
                    className={`w-full accent-${theme.ring}-600`}
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹0</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.ring}-500 focus:border-transparent text-sm`}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`lg:hidden fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg hover:shadow-xl ${theme.button}`}
          >
            <Filter className="w-6 h-6" />
          </button>

          {/* Main Content */}
          <main className="flex-1 lg:ml-0">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{filteredServices.length}</span> of {services.length} services
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`lg:hidden px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-${theme.ring}-500 text-sm`}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2 className={`w-12 h-12 animate-spin ${theme.button.split(' ')[0]}`} />
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
                      href={`/bride/all-services?category=${category}`}
                      className={`inline-block px-6 py-3 text-white rounded-lg transition-colors ${theme.button}`}
                    >
                      View All Services
                    </Link>
                  </div>
                ) : (
                  filteredServices.map((service) => (
                    <Link
                      key={service.id}
                      href={`/bride/service/${service.id}`}
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
                              <span className={`text-lg font-bold ${theme.button.split(' ')[0]}`}>
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

      {/* Mobile Filters Modal */}
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
                      href={`/bride/all-services?category=${category}${
                        sub.value ? `&subCategory=${sub.value}` : ""
                      }`}
                      onClick={() => setShowFilters(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        subCategory === sub.value
                          ? `${theme.selected} font-bold shadow-md`
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
                  className={`w-full accent-${theme.ring}-600`}
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