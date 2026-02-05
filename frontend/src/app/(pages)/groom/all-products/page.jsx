"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Star, Filter, X, Loader2, ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export default function GroomAllProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "groomwear";
  const subCategory = searchParams.get("subCategory") || "";
  const religion = searchParams.get("religion") || ""; // 👈 GET RELIGION

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Define subcategories based on category and religion
  const getSubCategories = () => {
    if (category === "ritual-items") {
      // If religion is Muslim, show Muslim ritual items
      if (religion === "muslim") {
        return [
          { value: "", label: "All Ritual Items", religion: "muslim" },
          { value: "mehr-amount", label: "Mehr Amount", religion: "muslim" },
          { value: "quran", label: "Quran", religion: "muslim" },
          { value: "tasbeeh", label: "Tasbeeh", religion: "muslim" },
          {
            value: "signature-pen",
            label: "Signature Pen",
            religion: "muslim",
          },
          {
            value: "nikahnama-folder",
            label: "Nikahnama Folder",
            religion: "muslim",
          },
          {
            value: "dry-fruits-sweets",
            label: "Dry Fruits & Sweets",
            religion: "muslim",
          },
          {
            value: "groom-welcome-stole",
            label: "Groom Welcome Stole",
            religion: "muslim",
          },
          {
            value: "varmala",
            label: "Varmala (if required)",
            religion: "muslim",
          },
        ];
      }
      // Otherwise show Hindu ritual items (default)
      return [
        { value: "", label: "All Ritual Items", religion: "hindu" },
        { value: "varmala", label: "Varmala", religion: "hindu" },
        { value: "coconut", label: "Coconut", religion: "hindu" },
        {
          value: "raksha-sutra-kalawa",
          label: "Raksha Sutra/Kalawa",
          religion: "hindu",
        },
        { value: "puja-thali", label: "Puja Thali", religion: "hindu" },
        {
          value: "haldi-ubtan-items",
          label: "Haldi/Ubtan Items",
          religion: "hindu",
        },
        { value: "groom-kalgi", label: "Groom's Kalgi", religion: "hindu" },
        {
          value: "gift-saree-lehenga",
          label: "Gift Saree/Lehenga for Bride",
          religion: "hindu",
        },
        {
          value: "tilak-plate-items",
          label: "Tilak Plate Items",
          religion: "hindu",
        },
      ];
    } else if (category === "groomwear") {
      return [
        // All Options
        { value: "", label: "All Groom Wear", religion: "" },

        // Hindu Groom Wear
        {
          value: "sherwani-achkan",
          label: "Sherwani/Achkan",
          religion: "hindu",
        },
        { value: "kurta-pajama", label: "Kurta-Pajama", religion: "hindu" },
        { value: "dhoti-kurta", label: "Dhoti-Kurta", religion: "hindu" },
        { value: "safa-turban", label: "Safa/Turban", religion: "hindu" },
        { value: "stole-dupatta", label: "Stole/Dupatta", religion: "hindu" },
        { value: "sehra", label: "Sehra", religion: "hindu" },
        { value: "turban-brooch", label: "Turban Brooch", religion: "hindu" },
        { value: "mojari-jutti", label: "Mojari/Jutti", religion: "hindu" },
        { value: "cufflinks", label: "Cufflinks", religion: "hindu" },
        { value: "wristwatch", label: "Wristwatch", religion: "hindu" },
        {
          value: "rudraksha-pearl-mala",
          label: "Rudraksha/Pearl Mala",
          religion: "hindu",
        },
        { value: "perfume-attar", label: "Perfume/Attar", religion: "hindu" },

        // Muslim Groom Wear
        { value: "sherwani", label: "Sherwani (Muslim)", religion: "muslim" },
        { value: "pathani-suit", label: "Pathani Suit", religion: "muslim" },
        {
          value: "kurta-pajama",
          label: "Kurta-Pajama (Muslim)",
          religion: "muslim",
        },
        { value: "long-coat", label: "Long Coat/Achkan", religion: "muslim" },
        {
          value: "traditional-cap",
          label: "Traditional Cap/Topi",
          religion: "muslim",
        },
        { value: "mojari", label: "Mojari/Leather Shoes", religion: "muslim" },
        { value: "attar", label: "Attar", religion: "muslim" },
        { value: "tasbih", label: "Tasbih/Prayer Beads", religion: "muslim" },
        { value: "brooch", label: "Brooch/Pin", religion: "muslim" },
        { value: "stole", label: "Stole/Shawl", religion: "muslim" },
      ];
    } else if (category === "sikh-groomwear") {
      return [
        { value: "", label: "All Sikh Groom Wear", religion: "sikh" },
        {
          value: "sherwani-achkan",
          label: "Sherwani/Achkan",
          religion: "sikh",
        },
        { value: "punjabi-suit", label: "Punjabi Suit", religion: "sikh" },
        { value: "turban-pagri", label: "Turban (Pagri)", religion: "sikh" },
        { value: "turban-kalgi", label: "Turban Kalgi", religion: "sikh" },
        { value: "kada", label: "Kada", religion: "sikh" },
        { value: "kirpan", label: "Kirpan", religion: "sikh" },
        { value: "jutti", label: "Jutti", religion: "sikh" },
        { value: "stole", label: "Stole", religion: "sikh" },
      ];
    } else if (category === "sikh-ritual-items") {
      return [
        { value: "", label: "All Sikh Ritual Items", religion: "sikh" },
        { value: "varmala", label: "Varmala", religion: "sikh" },
        {
          value: "pagri-handkerchief",
          label: "Pagri/Handkerchief",
          religion: "sikh",
        },
        { value: "kanga", label: "Kanga", religion: "sikh" },
        { value: "sweet-boxes", label: "Sweet Boxes", religion: "sikh" },
        { value: "rumala-sahib", label: "Rumala Sahib", religion: "sikh" },
        { value: "car-decoration", label: "Car Decoration", religion: "sikh" },
        { value: "garlands", label: "Garlands", religion: "sikh" },
        {
          value: "gift-suits-salwar",
          label: "Gift Suits/Salwar for Bride",
          religion: "sikh",
        },
      ];
    } else if (category === "christian-groomwear") {
      return [
        { value: "", label: "All Christian Groom Wear", religion: "christian" },
        { value: "tuxedo", label: "Tuxedo", religion: "christian" },
        {
          value: "three-piece-suit",
          label: "3-Piece Suit",
          religion: "christian",
        },
        { value: "tie-bow-tie", label: "Tie/Bow Tie", religion: "christian" },
        { value: "boutonniere", label: "Boutonniere", religion: "christian" },
        {
          value: "pocket-square",
          label: "Pocket Square",
          religion: "christian",
        },
        {
          value: "leather-shoes",
          label: "Leather Shoes",
          religion: "christian",
        },
        { value: "cufflinks", label: "Cufflinks", religion: "christian" },
        { value: "perfume", label: "Perfume", religion: "christian" },
      ];
    } else if (category === "christian-ritual-items") {
      return [
        { value: "", label: "All Ritual Items", religion: "christian" },
        {
          value: "wedding-rings",
          label: "Wedding Rings",
          religion: "christian",
        },
        { value: "holy-bible", label: "Holy Bible", religion: "christian" },
        {
          value: "certificate-folder",
          label: "Certificate Folder",
          religion: "christian",
        },
        {
          value: "flower-bouquet",
          label: "Flower Bouquet",
          religion: "christian",
        },
        {
          value: "car-decoration",
          label: "Car Decoration",
          religion: "christian",
        },
        {
          value: "rosary-cross-pendant",
          label: "Rosary / Cross Pendant",
          religion: "christian",
        },
        {
          value: "groom-boutonniere",
          label: "Groom Boutonniere",
          religion: "christian",
        },
        { value: "keepsake-box", label: "Keepsake Box", religion: "christian" },
      ];
    } else if (category === "general-essentials") {
      return [
        { value: "", label: "All General Essentials", religion: "" },
        { value: "innerwear-set", label: "Innerwear Set", religion: "" },
        { value: "handkerchief", label: "Handkerchief", religion: "" },
        { value: "groom-perfume", label: "Groom Perfume", religion: "" },
        { value: "hair-gel-spray", label: "Hair Gel/Spray", religion: "" },
        { value: "wet-wipes", label: "Wet Wipes", religion: "" },
        { value: "power-bank", label: "Power Bank", religion: "" },
        { value: "wallet", label: "Wallet", religion: "" },
        { value: "belt", label: "Belt", religion: "" },
        { value: "shoe-polish-kit", label: "Shoe Polish Kit", religion: "" },
      ];
    } else if (category === "universal-groom-gifts") {
      return [
        { value: "", label: "All Universal Gifts", religion: "" },
        { value: "watch", label: "Watch", religion: "" },
        { value: "perfume-set", label: "Perfume Set", religion: "" },
        { value: "bracelet", label: "Bracelet", religion: "" },
        { value: "wallet", label: "Wallet", religion: "" },
        { value: "belt", label: "Belt", religion: "" },
        {
          value: "wallet-belt-combo",
          label: "Wallet-Belt Combo",
          religion: "",
        },
        { value: "entry-props", label: "Entry Props", religion: "" },
        { value: "gift-sets", label: "Gift Sets", religion: "" },
        { value: "cufflinks", label: "Cufflinks", religion: "" },
        { value: "tie-bowtie", label: "Tie & Bow Tie", religion: "" },
        { value: "grooming-kit", label: "Grooming Kit", religion: "" },
        { value: "sunglasses", label: "Sunglasses", religion: "" },
      ];
    }

    return [{ value: "", label: "All Products", religion: "" }];
  };

  const getThemeColors = () => {
    if (category === "sikh-groomwear") {
      return {
        linear: "from-orange-900 to-amber-900",
        accent: "text-orange-300",
        accentDark: "text-orange-200",
        bg: "bg-orange-600",
        hoverBg: "hover:bg-orange-700",
        selected: "bg-orange-100 text-orange-900",
        ring: "ring-orange-500",
        accentColor: "accent-orange-600",
      };
    }
    if (religion === "muslim") {
      return {
        linear: "from-emerald-900 to-teal-900",
        accent: "text-emerald-300",
        accentDark: "text-emerald-200",
        bg: "bg-emerald-600",
        hoverBg: "hover:bg-emerald-700",
        selected: "bg-emerald-100 text-emerald-900",
        ring: "ring-emerald-500",
        accentColor: "accent-emerald-600",
      };
    }
    if (religion === "christian" || category === "christian-ritual-items") {
      return {
        linear: "from-sky-900 to-blue-900",
        accent: "text-sky-300",
        accentDark: "text-sky-200",
        bg: "bg-sky-700",
        hoverBg: "hover:bg-sky-800",
        selected: "bg-sky-100 text-sky-900",
        ring: "ring-sky-500",
        accentColor: "accent-sky-700",
      };
    }
    // ADD THIS NEW BLOCK
    if (category === "universal-groom-gifts") {
      return {
        linear: "from-blue-900 to-indigo-900",
        accent: "text-blue-300",
        accentDark: "text-blue-200",
        bg: "bg-blue-600",
        hoverBg: "hover:bg-blue-700",
        selected: "bg-blue-100 text-blue-900",
        ring: "ring-blue-500",
        accentColor: "accent-blue-600",
      };
    }
    if (category === "general-essentials") {
      return {
        linear: "from-blue-900 to-indigo-900",
        accent: "text-blue-300",
        accentDark: "text-blue-200",
        bg: "bg-blue-600",
        hoverBg: "hover:bg-blue-700",
        selected: "bg-blue-100 text-blue-900",
        ring: "ring-blue-500",
        accentColor: "accent-blue-600",
      };
    }
    // Default Hindu theme
    return {
      linear: "from-orange-900 to-red-900",
      accent: "text-amber-300",
      accentDark: "text-amber-200",
      bg: "bg-orange-600",
      hoverBg: "hover:bg-orange-700",
      selected: "bg-orange-100 text-orange-900",
      ring: "ring-orange-500",
      accentColor: "accent-orange-600",
    };
  };

  const theme = getThemeColors();

  const subCategories = getSubCategories();

  // Don't filter - show all categories based on religion already handled above
  const filteredSubCategories = subCategories;

  // Fetch Products
  useEffect(() => {
    fetchProducts();
  }, [category, subCategory, religion]); // 👈 ADD RELIGION DEPENDENCY

  const fetchProducts = async () => {
    setLoading(true);
    setError("");

    try {
      let url = `http://localhost:5000/api/products?category=${category}`;
      if (subCategory) {
        url += `&subCategory=${subCategory}`;
      }
      if (religion) {
        // 👈 ADD RELIGION TO URL
        url += `&religion=${religion}`;
      }

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
        product.price >= priceRange[0] && product.price <= priceRange[1],
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "featured":
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  // Get current subcategory label
  const currentSubCategory = subCategories.find(
    (sub) =>
      sub.value === subCategory &&
      (sub.religion === religion || sub.religion === ""),
  );

  const getCategoryName = () => {
    if (category === "ritual-items") return "Ritual Items";
    if (category === "sikh-groomwear") return "Sikh Groom Wear";
    if (category === "sikh-ritual-items") return "Sikh Ritual Items";
    if (category === "christian-ritual-items") return "Christian Ritual Items";
    if (category === "universal-groom-gifts") return "Universal Groom Gifts";
    if (category === "general-essentials") return "General Essentials"; // ✅ ADD THIS LINE
    if (category === "groomwear") {
      if (religion === "muslim") return "Muslim Groom Wear";
      if (religion === "hindu") return "Hindu Groom Wear";
      return "Groom Wear";
    }
    return "Products";
  };

  const getBreadcrumbs = () => {
    const crumbs = [{ label: "Home", href: "/" }];

    // Add category
    if (category === "ritual-items") {
      crumbs.push({ label: "Ritual Items", href: "/groom/hindu/ritual-items" });
    } else if (category === "sikh-groomwear") {
      crumbs.push({ label: "Sikh Groom Wear", href: "/groom/sikh/groom-wear" });
    } else if (category === "sikh-ritual-items") {
      crumbs.push({
        label: "Sikh Ritual Items",
        href: "/groom/sikh/ritual-items",
      });
    }
    // ADD THIS BLOCK
    else if (category === "universal-groom-gifts") {
      crumbs.push({
        label: "Universal Groom Gifts",
        href: "/groom/universal-gifts",
      });
    } else if (category === "christian-ritual-items") {
      crumbs.push({
        label: "Christian Ritual Items",
        href: "/groom/christian/ritual-items",
      });
    }
    // ✅ ADD THIS BLOCK
    else if (category === "general-essentials") {
      crumbs.push({
        label: "General Essentials",
        href: "/groom/general-essentials",
      });
    } else if (category === "groomwear") {
      if (religion === "muslim") {
        crumbs.push({
          label: "Muslim Groom Wear",
          href: "/groom/muslim/groom-wear",
        });
      } else if (religion === "hindu") {
        crumbs.push({ label: "Hindu Groom Wear", href: "/groom/groom-wear" });
      } else {
        crumbs.push({ label: "Groom Wear", href: "/groom/groom-wear" });
      }
    }

    // Add subcategory if exists
    if (subCategory && currentSubCategory) {
      crumbs.push({ label: currentSubCategory.label, href: "#" });
    }

    return crumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Build URL with all params
  const buildUrl = (subCat, rel) => {
    let url = `/groom/all-products?category=${category}`;
    if (subCat) url += `&subCategory=${subCat}`;
    if (rel) url += `&religion=${rel}`;
    return url;
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <div
        className={`text-white py-8 ${
          religion === "muslim"
            ? "bg-linear-to-r from-emerald-900 to-teal-900"
            : religion === "christian" || category === "christian-ritual-items"
              ? "bg-linear-to-r from-sky-900 to-blue-900"
              : category === "general-essentials"
                ? "bg-linear-to-r from-blue-900 to-indigo-900"
                : category === "universal-groom-gifts" // ADD THIS LINE
                  ? "bg-linear-to-r from-blue-900 to-indigo-900" // ADD THIS LINE
                  : "bg-linear-to-r from-orange-900 to-red-900"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm mb-4 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                 <ChevronRight
  className={`w-4 h-4 ${
    religion === "muslim" 
      ? "text-emerald-300" 
      : category === "universal-groom-gifts"  // ADD THIS
        ? "text-blue-300"  // ADD THIS
        : "text-amber-300"
  }`}
/>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span
                    className={
                      religion === "muslim"
                        ? "text-emerald-200 font-medium"
                        : "text-amber-200 font-medium"
                    }
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={`${religion === "muslim" ? "text-emerald-100 hover:text-white" : "text-amber-100 hover:text-white"} transition-colors`}
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>

          <h1 className="text-4xl font-bold mb-2">
            {currentSubCategory?.label || getCategoryName()}
          </h1>
          <p className={theme.accentDark}>
            {category === "ritual-items"
              ? "Sacred essentials for your ceremonies"
              : category === "sikh-groomwear"
                ? "Discover authentic Sikh groom wear and accessories"
                : category === "sikh-ritual-items"
                  ? "Sacred essentials for your Anand Karaj ceremony"
                  : category === "christian-ritual-items"
                    ? "Sacred essentials for your Christian wedding ceremony"
                    : category === "general-essentials"
                      ? "Essential items for your wedding day"
                      : category === "universal-groom-gifts" // ADD THIS LINE
                        ? "Premium gifts and accessories for the modern groom" // ADD THIS LINE
                        : religion === "muslim"
                          ? "Discover authentic Muslim groom wear and accessories"
                          : "Discover premium groom wear and accessories"}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>

              {/* Religion Filter - Only for groomwear */}

              {/* Subcategories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
                <div className="space-y-2">
                  {filteredSubCategories.map((sub) => (
                    <Link
                      key={`${sub.value}-${sub.religion}`}
                      href={buildUrl(sub.value, sub.religion || religion)}
                      className={`block px-3 py-2 rounded-lg transition-colors text-sm ${
                        subCategory === sub.value &&
                        (sub.religion === religion || sub.religion === "")
                          ? religion === "muslim"
                            ? "bg-emerald-100 text-emerald-900 font-medium"
                            : "bg-orange-100 text-orange-900 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Price Range
                </h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className={`w-full ${religion === "muslim" ? "accent-emerald-600" : "accent-orange-600"}`}
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
                  className={`w-full px-3 py-2 border border-gray-300 rounded-lg text-sm ${
                    religion === "muslim"
                      ? "focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      : "focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  }`}
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
          className={`lg:hidden fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg ${
  religion === "muslim"
    ? "bg-emerald-600 hover:bg-emerald-700"
    : category === "universal-groom-gifts"  // ADD THIS
      ? "bg-blue-600 hover:bg-blue-700"  // ADD THIS
      : "bg-orange-600 hover:bg-orange-700"
}`}
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

              {/* Mobile Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`lg:hidden px-4 py-2 border border-gray-300 rounded-lg text-sm ${
                  religion === "muslim"
                    ? "focus:ring-2 focus:ring-emerald-500"
                    : "focus:ring-2 focus:ring-orange-500"
                }`}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2
  className={`w-12 h-12 animate-spin ${
    religion === "muslim"
      ? "text-emerald-600"
      : category === "universal-groom-gifts"  // ADD THIS
        ? "text-blue-600"  // ADD THIS
        : "text-orange-600"
  }`}
/>
              </div>
            )}

            {/* Error State */}
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
  href={
    category === "sikh-groomwear"
      ? "/groom/sikh/groom-wear"
      : category === "sikh-ritual-items"
        ? "/groom/sikh/ritual-items"
        : category === "christian-ritual-items"
          ? "/groom/christian/ritual-items"
          : category === "general-essentials"
            ? "/groom/general-essentials"
            : category === "universal-groom-gifts"  // ADD THIS LINE
              ? "/groom/universal-gifts"  // ADD THIS LINE
              : religion === "muslim"
                ? "/groom/muslim/groom-wear"
                : category === "ritual-items"
                  ? "/groom/hindu/ritual-items"
                  : "/groom/groom-wear"
  }
  className={`inline-block px-6 py-3 text-white rounded-lg transition-colors ${
    religion === "muslim"
      ? "bg-emerald-600 hover:bg-emerald-700"
      : category === "universal-groom-gifts"  // ADD THIS LINE
        ? "bg-blue-600 hover:bg-blue-700"  // ADD THIS LINE
        : "bg-orange-600 hover:bg-orange-700"
  }`}
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
                            e.target.src =
                              "https://via.placeholder.com/400x500";
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
                          <span
                            className={`text-xl font-bold ${
  religion === "muslim"
    ? "text-emerald-600"
    : category === "universal-groom-gifts"  // ADD THIS
      ? "text-blue-600"  // ADD THIS
      : "text-orange-600"
}`}
                          >
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

            {/* Same filter content as desktop */}
            <div className="space-y-6">
              {/* Religion Filter - Only for groomwear */}

              <div>
                <h4 className="font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                  {filteredSubCategories.map((sub) => (
                    <Link
                      key={`${sub.value}-${sub.religion}`}
                      href={buildUrl(sub.value, sub.religion || religion)}
                      onClick={() => setShowFilters(false)}
                      className={`block px-3 py-2 rounded-lg text-sm ${
                        subCategory === sub.value &&
                        (sub.religion === religion || sub.religion === "")
                          ? religion === "muslim"
                            ? "bg-emerald-100 text-emerald-900 font-medium"
                            : "bg-orange-100 text-orange-900 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {sub.label}
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
                  className={`w-full ${religion === "muslim" ? "accent-emerald-600" : "accent-orange-600"}`}
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
