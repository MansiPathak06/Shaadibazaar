"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Star, Filter, X, Loader2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GroomAllProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "groomwear";
  const subCategory = searchParams.get("subCategory") || "";
  const religion = searchParams.get("religion") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Ref to scroll active subcategory into view
  const activeCategoryRef = useRef(null);

  // Scroll active subcategory into view on load
  useEffect(() => {
    if (activeCategoryRef.current) {
      activeCategoryRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [subCategory, category]);

  // Define subcategories based on category only (no religion filter)
  const getSubCategories = () => {
    if (category === "ritual-items") {
      if (religion === "muslim") {
        return [
          { value: "", label: "All Ritual Items" },
          { value: "mehr-amount", label: "Mehr Amount" },
          { value: "quran", label: "Quran" },
          { value: "tasbeeh", label: "Tasbeeh" },
          { value: "signature-pen", label: "Signature Pen" },
          { value: "nikahnama-folder", label: "Nikahnama Folder" },
          { value: "dry-fruits-sweets", label: "Dry Fruits & Sweets" },
          { value: "groom-welcome-stole", label: "Groom Welcome Stole" },
          { value: "varmala", label: "Varmala (if required)" },
        ];
      }
      return [
        { value: "", label: "All Ritual Items" },
        { value: "varmala", label: "Varmala" },
        { value: "coconut", label: "Coconut" },
        { value: "raksha-sutra-kalawa", label: "Raksha Sutra/Kalawa" },
        { value: "puja-thali", label: "Puja Thali" },
        { value: "haldi-ubtan-items", label: "Haldi/Ubtan Items" },
        { value: "groom-kalgi", label: "Groom's Kalgi" },
        { value: "gift-saree-lehenga", label: "Gift Saree/Lehenga for Bride" },
        { value: "tilak-plate-items", label: "Tilak Plate Items" },
      ];
    } else if (category === "groomwear") {
      if (religion === "muslim") {
        return [
          { value: "", label: "All Muslim Groom Wear" },
          { value: "sherwani", label: "Sherwani" },
          { value: "pathani-suit", label: "Pathani Suit" },
          { value: "kurta-pajama", label: "Kurta-Pajama" },
          { value: "long-coat", label: "Long Coat/Achkan" },
          { value: "traditional-cap", label: "Traditional Cap/Topi" },
          { value: "mojari", label: "Mojari/Leather Shoes" },
          { value: "attar", label: "Attar" },
          { value: "tasbih", label: "Tasbih/Prayer Beads" },
          { value: "brooch", label: "Brooch/Pin" },
          { value: "stole", label: "Stole/Shawl" },
        ];
      }
      return [
        { value: "", label: "All Groom Wear" },
        { value: "sherwani", label: "Sherwani/Achkan" },
        { value: "kurta-pajama", label: "Kurta-Pajama" },
        { value: "dhoti-kurta", label: "Dhoti-Kurta" },
        { value: "safa-turban", label: "Safa/Turban" },
        { value: "stole-dupatta", label: "Stole/Dupatta" },
        { value: "sehra", label: "Sehra" },
        { value: "turban-brooch", label: "Turban Brooch" },
        { value: "mojari-jutti", label: "Mojari/Jutti" },
        { value: "cufflinks", label: "Cufflinks" },
        { value: "wristwatch", label: "Wristwatch" },
        { value: "rudraksha-pearl-mala", label: "Rudraksha/Pearl Mala" },
        { value: "perfume-attar", label: "Perfume/Attar" },
      ];
    } else if (category === "sikh-groomwear") {
      return [
        { value: "", label: "All Sikh Groom Wear" },
        { value: "sherwani", label: "Sherwani/Achkan" },
        { value: "punjabi-suit", label: "Punjabi Suit" },
        { value: "turban-pagri", label: "Turban (Pagri)" },
        { value: "turban-kalgi", label: "Turban Kalgi" },
        { value: "kada", label: "Kada" },
        { value: "kirpan", label: "Kirpan" },
        { value: "jutti", label: "Jutti" },
        { value: "stole", label: "Stole" },
      ];
    } else if (category === "sikh-ritual-items") {
      return [
        { value: "", label: "All Sikh Ritual Items" },
        { value: "varmala", label: "Varmala" },
        { value: "pagri-handkerchief", label: "Pagri/Handkerchief" },
        { value: "kanga", label: "Kanga" },
        { value: "sweet-boxes", label: "Sweet Boxes" },
        { value: "rumala-sahib", label: "Rumala Sahib" },
        { value: "car-decoration", label: "Car Decoration" },
        { value: "garlands", label: "Garlands" },
        { value: "gift-suits-salwar", label: "Gift Suits/Salwar for Bride" },
      ];
    } else if (category === "christian-groomwear") {
      return [
        { value: "", label: "All Christian Groom Wear" },
        { value: "tuxedo", label: "Tuxedo" },
        { value: "three-piece-suit", label: "3-Piece Suit" },
        { value: "tie-bow-tie", label: "Tie/Bow Tie" },
        { value: "boutonniere", label: "Boutonniere" },
        { value: "pocket-square", label: "Pocket Square" },
        { value: "leather-shoes", label: "Leather Shoes" },
        { value: "cufflinks", label: "Cufflinks" },
        { value: "perfume", label: "Perfume" },
      ];
    } else if (category === "christian-ritual-items") {
      return [
        { value: "", label: "All Ritual Items" },
        { value: "wedding-rings", label: "Wedding Rings" },
        { value: "holy-bible", label: "Holy Bible" },
        { value: "certificate-folder", label: "Certificate Folder" },
        { value: "flower-bouquet", label: "Flower Bouquet" },
        { value: "car-decoration", label: "Car Decoration" },
        { value: "rosary-cross-pendant", label: "Rosary / Cross Pendant" },
        { value: "groom-boutonniere", label: "Groom Boutonniere" },
        { value: "keepsake-box", label: "Keepsake Box" },
      ];
    } else if (category === "general-essentials") {
      return [
        { value: "", label: "All General Essentials" },
        { value: "innerwear-set", label: "Innerwear Set" },
        { value: "handkerchief", label: "Handkerchief" },
        { value: "groom-perfume", label: "Groom Perfume" },
        { value: "hair-gel-spray", label: "Hair Gel/Spray" },
        { value: "wet-wipes", label: "Wet Wipes" },
        { value: "power-bank", label: "Power Bank" },
        { value: "wallet", label: "Wallet" },
        { value: "belt", label: "Belt" },
        { value: "shoe-polish-kit", label: "Shoe Polish Kit" },
      ];
    } else if (category === "universal-groom-gifts") {
      return [
        { value: "", label: "All Universal Gifts" },
        { value: "watch", label: "Watch" },
        { value: "perfume-set", label: "Perfume Set" },
        { value: "bracelet", label: "Bracelet" },
        { value: "wallet", label: "Wallet" },
        { value: "belt", label: "Belt" },
        { value: "wallet-belt-combo", label: "Wallet-Belt Combo" },
        { value: "entry-props", label: "Entry Props" },
        { value: "gift-sets", label: "Gift Sets" },
        { value: "cufflinks", label: "Cufflinks" },
        { value: "tie-bowtie", label: "Tie & Bow Tie" },
        { value: "grooming-kit", label: "Grooming Kit" },
        { value: "sunglasses", label: "Sunglasses" },
      ];
    }
    return [{ value: "", label: "All Products" }];
  };

  const getThemeColors = () => {
    if (category === "sikh-groomwear") {
      return {
        accent: "text-orange-300",
        accentDark: "text-orange-200",
        headerBg: "bg-linear-to-r from-orange-900 to-amber-900",
        activeBg: "bg-orange-100 text-orange-900",
        btnBg: "bg-orange-600 hover:bg-orange-700",
        priceBg: "text-orange-600",
        ring: "focus:ring-orange-500",
        rangeAccent: "accent-orange-600",
        spinner: "text-orange-600",
        chevron: "text-amber-300",
        breadcrumbLink: "text-amber-100 hover:text-white",
        breadcrumbCurrent: "text-amber-200 font-medium",
      };
    }
    if (religion === "muslim") {
      return {
        accent: "text-emerald-300",
        accentDark: "text-emerald-200",
        headerBg: "bg-linear-to-r from-emerald-900 to-teal-900",
        activeBg: "bg-emerald-100 text-emerald-900",
        btnBg: "bg-emerald-600 hover:bg-emerald-700",
        priceBg: "text-emerald-600",
        ring: "focus:ring-emerald-500",
        rangeAccent: "accent-emerald-600",
        spinner: "text-emerald-600",
        chevron: "text-emerald-300",
        breadcrumbLink: "text-emerald-100 hover:text-white",
        breadcrumbCurrent: "text-emerald-200 font-medium",
      };
    }
    if (category === "christian-groomwear" || category === "christian-ritual-items") {
      return {
        accent: "text-sky-300",
        accentDark: "text-sky-200",
        headerBg: "bg-linear-to-r from-sky-900 to-blue-900",
        activeBg: "bg-sky-100 text-sky-900",
        btnBg: "bg-sky-700 hover:bg-sky-800",
        priceBg: "text-sky-700",
        ring: "focus:ring-sky-500",
        rangeAccent: "accent-sky-700",
        spinner: "text-sky-600",
        chevron: "text-sky-300",
        breadcrumbLink: "text-sky-100 hover:text-white",
        breadcrumbCurrent: "text-sky-200 font-medium",
      };
    }
    if (category === "universal-groom-gifts" || category === "general-essentials") {
      return {
        accent: "text-blue-300",
        accentDark: "text-blue-200",
        headerBg: "bg-linear-to-r from-blue-900 to-indigo-900",
        activeBg: "bg-blue-100 text-blue-900",
        btnBg: "bg-blue-600 hover:bg-blue-700",
        priceBg: "text-blue-600",
        ring: "focus:ring-blue-500",
        rangeAccent: "accent-blue-600",
        spinner: "text-blue-600",
        chevron: "text-blue-300",
        breadcrumbLink: "text-blue-100 hover:text-white",
        breadcrumbCurrent: "text-blue-200 font-medium",
      };
    }
    // Default Hindu theme
    return {
      accent: "text-amber-300",
      accentDark: "text-amber-200",
      headerBg: "bg-linear-to-r from-orange-900 to-red-900",
      activeBg: "bg-orange-100 text-orange-900",
      btnBg: "bg-orange-600 hover:bg-orange-700",
      priceBg: "text-orange-600",
      ring: "focus:ring-orange-500",
      rangeAccent: "accent-orange-600",
      spinner: "text-orange-600",
      chevron: "text-amber-300",
      breadcrumbLink: "text-amber-100 hover:text-white",
      breadcrumbCurrent: "text-amber-200 font-medium",
    };
  };

  const theme = getThemeColors();
  const subCategories = getSubCategories();

  // Fetch Products
  useEffect(() => {
    fetchProducts();
  }, [category, subCategory, religion]);

  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      let url = `http://localhost:5000/api/products?category=${category}`;
      if (subCategory) url += `&subCategory=${subCategory}`;
      if (religion) url += `&religion=${religion}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Fetch products error:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // Filter and Sort Products
  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  const currentSubCategory = subCategories.find(
    (sub) => sub.value === subCategory
  );

  const getCategoryName = () => {
    if (category === "ritual-items")
      return religion === "muslim" ? "Muslim Ritual Items" : "Ritual Items";
    if (category === "sikh-groomwear") return "Sikh Groom Wear";
    if (category === "sikh-ritual-items") return "Sikh Ritual Items";
    if (category === "christian-groomwear") return "Christian Groom Wear";
    if (category === "christian-ritual-items") return "Christian Ritual Items";
    if (category === "universal-groom-gifts") return "Universal Groom Gifts";
    if (category === "general-essentials") return "General Essentials";
    if (category === "groomwear") {
      if (religion === "muslim") return "Muslim Groom Wear";
      if (religion === "hindu") return "Hindu Groom Wear";
      return "Groom Wear";
    }
    return "Products";
  };

  const getCategoryDescription = () => {
    if (category === "ritual-items") return "Sacred essentials for your ceremonies";
    if (category === "sikh-groomwear") return "Discover authentic Sikh groom wear and accessories";
    if (category === "sikh-ritual-items") return "Sacred essentials for your Anand Karaj ceremony";
    if (category === "christian-groomwear") return "Elegant attire for your Christian wedding";
    if (category === "christian-ritual-items") return "Sacred essentials for your Christian wedding ceremony";
    if (category === "general-essentials") return "Essential items for your wedding day";
    if (category === "universal-groom-gifts") return "Premium gifts and accessories for the modern groom";
    if (religion === "muslim") return "Discover authentic Muslim groom wear and accessories";
    return "Discover premium groom wear and accessories";
  };

  const getBreadcrumbs = () => {
    const crumbs = [{ label: "Home", href: "/" }];
    if (category === "ritual-items") {
      crumbs.push({
        label: religion === "muslim" ? "Muslim Ritual Items" : "Ritual Items",
        href: religion === "muslim" ? "/groom/muslim/ritual-items" : "/groom/hindu/ritual-items",
      });
    } else if (category === "sikh-groomwear") {
      crumbs.push({ label: "Sikh Groom Wear", href: "/groom/sikh/groom-wear" });
    } else if (category === "sikh-ritual-items") {
      crumbs.push({ label: "Sikh Ritual Items", href: "/groom/sikh/ritual-items" });
    } else if (category === "christian-groomwear") {
      crumbs.push({ label: "Christian Groom Wear", href: "/groom/christian/groom-wear" });
    } else if (category === "christian-ritual-items") {
      crumbs.push({ label: "Christian Ritual Items", href: "/groom/christian/ritual-items" });
    } else if (category === "universal-groom-gifts") {
      crumbs.push({ label: "Universal Groom Gifts", href: "/groom/universal-gifts" });
    } else if (category === "general-essentials") {
      crumbs.push({ label: "General Essentials", href: "/groom/general-essentials" });
    } else if (category === "groomwear") {
      crumbs.push({
        label: religion === "muslim" ? "Muslim Groom Wear" : religion === "hindu" ? "Hindu Groom Wear" : "Groom Wear",
        href: religion === "muslim" ? "/groom/muslim/groom-wear" : "/groom/groom-wear",
      });
    }
    if (subCategory && currentSubCategory) {
      crumbs.push({ label: currentSubCategory.label, href: "#" });
    }
    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Build URL — keep religion in URL so filtering stays consistent
  const buildUrl = (subCat) => {
    let url = `/groom/all-products?category=${category}`;
    if (subCat) url += `&subCategory=${subCat}`;
    if (religion) url += `&religion=${religion}`;
    return url;
  };

  // Shared subcategory list used in both sidebar and mobile drawer
  const SubCategoryList = ({ onSelect }) => (
    <div className="space-y-1">
      {subCategories.map((sub) => {
        const isActive = subCategory === sub.value;
        return (
          <Link
            key={sub.value}
            href={buildUrl(sub.value)}
            ref={isActive ? activeCategoryRef : null}
            onClick={onSelect}
            className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
              isActive
                ? theme.activeBg + " font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {sub.label}
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <div className={`text-white py-8 ${theme.headerBg}`}>
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm mb-4 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <ChevronRight className={`w-4 h-4 ${theme.chevron}`} />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className={theme.breadcrumbCurrent}>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className={`${theme.breadcrumbLink} transition-colors`}>
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-4xl font-bold mb-2">
            {currentSubCategory?.label || getCategoryName()}
          </h1>
          <p className={theme.accentDark}>{getCategoryDescription()}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar — Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>

              {/* Subcategories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
                {/* Scrollable list so active item is always reachable */}
                <div className="max-h-72 overflow-y-auto pr-1">
                  <SubCategoryList />
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
                    className={`w-full ${theme.rangeAccent}`}
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
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:border-transparent ${theme.ring}`}
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
            className={`lg:hidden fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg ${theme.btnBg}`}
          >
            <Filter className="w-6 h-6" />
          </button>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold">{filteredProducts.length}</span>{" "}
                products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`lg:hidden px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 ${theme.ring}`}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Loading */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2 className={`w-12 h-12 animate-spin ${theme.spinner}`} />
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Products Grid */}
            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length === 0 ? (
                  <div className="col-span-full text-center py-20">
                    <p className="text-gray-600 text-lg mb-4">
                      No products found in this category
                    </p>
                    <Link
                      href={buildUrl("")}
                      className={`inline-block px-6 py-3 text-white rounded-lg transition-colors ${theme.btnBg}`}
                    >
                      Back to {getCategoryName()}
                    </Link>
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/groom/product/${product.id}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="aspect-[3/4] overflow-hidden relative bg-gray-100">
                        <img
                          src={
                            typeof product.images === "string"
                              ? product.images.split(",")[0]
                              : product.images[0]
                          }
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x500";
                          }}
                        />
                        {product.featured && (
                          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </div>
                        )}
                        {product.discount > 0 && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            {product.discount}% OFF
                          </div>
                        )}
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating || "4.5"}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className={`text-xl font-bold ${theme.priceBg}`}>
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.mrp && product.mrp > product.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.mrp.toLocaleString()}
                            </span>
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

      {/* Mobile Filters Drawer */}
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
                <h4 className="font-semibold mb-3">Category</h4>
                <SubCategoryList onSelect={() => setShowFilters(false)} />
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
                  className={`w-full ${theme.rangeAccent}`}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹0</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 ${theme.ring}`}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}