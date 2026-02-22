// src/app/(pages)/admin-dashboard/components/ProductsTab.jsx
"use client";

import {
  Plus,
  Upload,
  Download,
  FileSpreadsheet,
  Search,
  Edit,
  Trash2,
  Star,
  Loader2,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductsTab({
  products,
  searchTerm,
  setSearchTerm,
  showProductForm,
  setShowProductForm,
  showBulkImport,
  setShowBulkImport,
  editingProduct,
  setEditingProduct,
  productForm,
  setProductForm,
  handleProductSubmit,
  handleEditProduct,
  handleDeleteProduct,
  excelFile,
  setExcelFile,
  importing,
  importResults,
  handleExcelUpload,
  handleBulkImport,
  downloadTemplate,
  loading,
  setError,
}) {
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Filter products by search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const resetProductForm = () => {
    setShowProductForm(false);
    setShowBulkImport(false);
    setEditingProduct(null);
    setProductForm({
      name: "",
      description: "",
      price: "",
      mrp: "",
      discount: "",
      rating: "",
      category: "",
      subCategory: "",
      religion: "",
      images: "",
      vendor_id: "",
      stock: "",
      featured: false,
    });
  };

  // Main categories
  const categories = [
    { value: "bridalwear", label: "Bridal Wear" },
    { value: "groomwear", label: "Groom Wear" },
    { value: "ritual-items", label: "Ritual Items" },
    { value: "jewellery", label: "Jewellery" },
    { value: "makeup-hair", label: "Mkaeup and Hair Accessories" },
    { value: "general-essentials", label: "General Essentials" },
 
    { value: "universal-bridal-gifts", label: "Universal Bridal Gifts" },
    { value: "universal-groom-gifts", label: "Universal Groom Gifts" },
    { value: "universal-groom-items", label: "Universal Groom Items" },
   
  ];

  // Subcategories based on main category
  const subCategories = {
    bridalwear: [
      { value: "lehenga", label: "Bridal Lehenga" },
      { value: "engagement-wear", label: "Engagement Wear" },
      { value: "bridal-saree", label: "Bridal Saree" },
      { value: "reception-look", label: "Reception Look" },
      { value: "bridal-lehenga-saree", label: "Bridal Lehenga/Saree" },
      { value: "dupatta-veil", label: "Dupatta (Veil)" },
      { value: "bridal-blouse", label: "Bridal Blouse" },
      { value: "latkans-for-lehenga", label: "Latkans for Lehenga" },
      { value: "underskirt-petticoat", label: "Underskirt/Petticoat" },
      { value: "bridal-heels", label: "Bridal Heels" },
      { value: "bridal-sandals-flats", label: "Bridal Sandals/Flats" },
      { value: "hand-clutch-potli-bag", label: "Hand Clutch/Potli Bag" },
      { value: "bridal-robe-for-makeup", label: "Bridal Robe for Makeup" },
      { value: "sharara-gharara", label: "Sharara/Gharara" },
      { value: "anarkali-suit", label: "Anarkali Suit" },
      { value: "bridal-hijab", label: "Bridal Hijab" },
      { value: "bridal-burqa", label: "Bridal Burqa" },
      { value: "bridal-footwear", label: "Bridal Footwear" },
      { value: "punjabi-suit", label: "Punjabi Suit" },
      { value: "phulkari-dupatta", label: "Phulkari Dupatta" },
      { value: "chuni", label: "Chuni" },
      { value: "wedding-gown", label: "Wedding Gown" },
      { value: "bridal-veil", label: "Bridal Veil" },
      { value: "bridal-gloves", label: "Bridal Gloves" },
      { value: "hair-tiara", label: "Hair Tiara" },
      { value: "petticoat", label: "Petticoat" },
      { value: "bouquet", label: "Bouquet" },
      { value: "bridesmaid-dresses", label: "Bridesmaid Dresses" },
    ],
    jewellery: [
      { value: "maang-tikka", label: "Maang Tikka" },
      { value: "jhoomar", label: "Jhoomar" },
      { value: "matha-patti", label: "Matha Patti" },
      { value: "nath", label: "Nath (Nose Ring)" },
      { value: "nose-studs", label: "Nose Studs" },
      { value: "earrings", label: "Earrings" },
      { value: "necklace", label: "Necklace" },
      { value: "necklace-set", label: "Necklace Set" },
      { value: "choker", label: "Choker" },
      { value: "rani-haar", label: "Rani Haar" },
      { value: "bangles", label: "Bangles" },
      { value: "kada", label: "Kada" },
      { value: "choora", label: "Bridal Chooda" },
      { value: "kalira", label: "Kalira" },
      { value: "hathphool", label: "Hathphool" },
      { value: "kamarbandh", label: "Kamarbandh" },
      { value: "payal", label: "Payal (Anklets)" },
      { value: "bichhiya", label: "Bichhiya (Toe Rings)" },
      { value: "rings", label: "Rings" },
      { value: "bracelet", label: "Bracelet" },
      { value: "tiara", label: "Tiara Accessories" },
      { value: "hair-accessories", label: "Hair Accessories" },
    ],
    "makeup-hair": [
      { value: "hair-extensions", label: "Hair Extensions" },
      { value: "bun-accessories", label: "Bun Accessories (Gajra, Pins)" },
      { value: "hair-tiara", label: "Hair Tiara / Juda Pins" },
      { value: "makeup-setting-spray", label: "Makeup Setting Spray" },
      { value: "nail-extensions", label: "Nail Extensions" },
      { value: "nail-art-kit", label: "Nail Art Kit" },
    ],

    "ritual-items": [
      { value: "haldi-ubtan", label: "Haldi / Ubtan Items" },
      { value: "mehendi-cones", label: "Mehendi Cones" },
      { value: "choora-ceremony-items", label: "Choora Ceremony Items" },
      { value: "kalire", label: "Kalire" },
      { value: "varmala", label: "Varmala" },
      { value: "puja-thali", label: "Puja Thali" },
      { value: "sindoor-box", label: "Sindoor Box" },
      { value: "mangalsutra", label: "Mangalsutra" },
      { value: "kanyadaan-items", label: "Kanyadaan Items" },
      { value: "coconut", label: "Coconut" },
      { value: "cloth-for-muhurat", label: "Cloth for Muhurat" },

      { value: "nikahnama-folder", label: "Nikahnama Folder" },
      { value: "certificate-folder", label: "Certificate Folder" },
      { value: "quran", label: "Quran" },
      { value: "tasbeeh", label: "Tasbeeh" },
      { value: "mehr-amount", label: "Mehr Amount" },
      { value: "signature-pen", label: "Signature Pen" },

      { value: "dry-fruits-sweets", label: "Dry Fruits & Sweets" },
      { value: "sweet-boxes", label: "Sweet Boxes" },
      { value: "gift-sets", label: "Gift Sets" },

      { value: "bride-entry-flowers", label: "Bride Entry Flowers" },
      { value: "flower-bouquet", label: "Flower Bouquet" },
      { value: "flower-basket", label: "Flower Basket" },
      { value: "garlands", label: "Garlands" },
      { value: "flower-chadar", label: "Flower Chadar" },

      { value: "car-decoration", label: "Car Decoration" },
      { value: "unity-candle-set", label: "Unity Candle Set" },

      { value: "wedding-rings", label: "Wedding Rings" },
      { value: "engagement-rings", label: "Engagement Rings" },

      { value: "bible", label: "Bible" },

      { value: "rumala-sahib", label: "Rumala Sahib" },
      { value: "rumaal", label: "Rumaal" },
      { value: "raksha-sutra", label: "Raksha Sutra / Kalawa" },
      { value: "tilak-plate-items", label: "Tilak Plate Items" },

      { value: "groom-kalgi", label: "Groom’s Kalgi" },
      { value: "groom-welcome-stole", label: "Groom Welcome Stole" },
      { value: "pagri-handkerchief", label: "Pagri / Handkerchief" },
    ],
    // "bridal-services": [
    //   {
    //     value: "bridal-makeup-hd-airbrush",
    //     label: "Bridal Makeup (HD / Airbrush)",
    //   },
    //   {
    //     value: "bridal-makeup-arabic-hd",
    //     label: "Bridal Makeup (Arabic / HD)",
    //   },
    //   { value: "sikh-bridal-makeup", label: "Sikh Bridal Makeup" },
    //   { value: "bridal-hairstyle", label: "Bridal Hairstyle" },
    //   { value: "hijab-styling", label: "Hijab Styling" },

    //   { value: "mehendi-artist", label: "Mehendi Artist" },
    //   { value: "spa-facial", label: "Spa & Facial" },
    //   { value: "pre-bridal-package", label: "Pre-Bridal Package" },
    //   { value: "ubtan-ceremony-setup", label: "Ubtan Ceremony Setup" },

    //   { value: "bridal-photoshoot", label: "Bridal Photoshoot" },
    //   { value: "kaleera-photoshoot", label: "Kaleera Photoshoot" },

    //   { value: "saree-draping-artist", label: "Saree Draping Artist" },
    //   { value: "lehenga-pinning-expert", label: "Lehenga Pinning Expert" },
    //   { value: "gown-tailoring", label: "Gown Tailoring" },

    //   { value: "hair-accessories-service", label: "Hair Accessories" },
    //   { value: "manicure-pedicure", label: "Manicure & Nails" },

    //   { value: "choora-ceremony-expert", label: "Choora Ceremony Expert" },

    //   { value: "car-decoration-service", label: "Car Decoration" },
    //   { value: "stage-decoration", label: "Stage Decoration" },

    //   { value: "doli-arrangement", label: "Doli Arrangement" },
    //   { value: "bhagra-team", label: "Bhangra Team" },

    //   { value: "church-choir", label: "Church Choir" },
    //   { value: "wedding-planner", label: "Wedding Planner" },
    // ],
    "general-essentials": [
      { value: "innerwear-shapewear", label: "Innerwear / Shapewear" },
      { value: "safety-pins-u-pins", label: "Safety Pins, U-Pins" },
      { value: "makeup-touch-up-kit", label: "Makeup Touch-Up Kit" },
      { value: "wet-wipes", label: "Wet Wipes" },
      { value: "power-bank", label: "Power Bank" },
      { value: "clutch-potli", label: "Clutch / Potli" },
      { value: "perfume", label: "Perfume" },
      { value: "hand-sanitizer", label: "Hand Sanitizer" },
    ],
    // "pre-wedding-services": [
    //   { value: "pre-bridal-package", label: "Pre-Bridal Package" },
    //   { value: "spa", label: "Spa" },
    //   { value: "facial", label: "Facial" },
    //   { value: "manicure-pedicure", label: "Manicure & Pedicure" },
    //   { value: "nail-extensions", label: "Nail Extensions" },
    //   { value: "hair-coloring", label: "Hair Coloring" },
    // ],
    "universal-bridal-gifts": [
      { value: "perfume-set", label: "Perfume Set" },
      { value: "jewellery-box", label: "Jewellery Box" },
      { value: "bridal-watch", label: "Bridal Watch" },
      { value: "makeup-kit", label: "Makeup Kit" },
      { value: "entry-props", label: "Entry Props" },
      { value: "customized-hanger", label: "Customized Hanger" },
      { value: "couple-photo-frame", label: "Couple Photo Frame" },
    ],
    // "groom-services": [
    //   { value: "groom-styling", label: "Groom Styling" },
    //   { value: "groom-makeup", label: "Groom Makeup" },
    //   { value: "groom-makeover", label: "Groom Makeover" },

    //   { value: "hairstyling", label: "Hairstyling" },
    //   { value: "beard-trim-shave", label: "Beard Trim / Shave" },
    //   { value: "beard-setting", label: "Beard Setting" },
    //   { value: "beard-styling", label: "Beard Styling" },

    //   { value: "suit-fitting", label: "Suit Fitting" },

    //   { value: "ubtan-session", label: "Ubtan Session" },
    //   { value: "arabic-henna", label: "Arabic Henna" },

    //   { value: "groom-portrait-shoot", label: "Groom Portrait Shoot" },
    //   { value: "groom-photoshoot", label: "Groom Photoshoot" },

    //   { value: "turban-tying-expert", label: "Turban Tying Expert" },
    //   { value: "sehra-tying-expert", label: "Sehra Tying Expert" },

    //   { value: "choir-band", label: "Choir / Band" },
    //   { value: "band-baja", label: "Band-Baja" },
    //   { value: "dj-for-baraat", label: "DJ for Baraat" },
    //   { value: "dhol-nagara", label: "Dhol / Nagara" },
    //   { value: "bhangra-group", label: "Bhangra Group" },

    //   { value: "ghodi-decoration", label: "Ghodi Decoration" },
    //   { value: "car-decoration", label: "Car Decoration" },
    //   { value: "baraat-management", label: "Baraat Management" },
    // ],
    "universal-groom-items": [
      { value: "groom-perfume", label: "Groom Perfume" },
      { value: "hair-gel-spray", label: "Hair Gel / Spray" },
      { value: "wet-wipes", label: "Wet Wipes" },
      { value: "power-bank", label: "Power Bank" },
      { value: "wallet", label: "Wallet" },
      { value: "belt", label: "Belt" },
      { value: "shoe-polish-kit", label: "Shoe Polish Kit" },
      { value: "innerwear-set", label: "Innerwear Set" },
      { value: "handkerchief", label: "Handkerchief" },
    ],
    "universal-groom-gifts": [
      { value: "watch", label: "Watch" },
      { value: "perfume-set", label: "Perfume Set" },
      { value: "bracelet", label: "Bracelet" },
      { value: "wallet-belt-combo", label: "Wallet–Belt Combo" },
      { value: "groom-entry-props", label: "Groom Entry Props" },
    ],

   groomwear: [
  { value: "tuxedo", label: "Tuxedo" },
  { value: "three-piece-suit", label: "3-Piece Suit" },
  { value: "tie-bow-tie", label: "Tie / Bow Tie" },
  { value: "boutonniere", label: "Boutonniere" },
  { value: "pocket-square", label: "Pocket Square" },
  { value: "leather-shoes", label: "Leather Shoes" },
  { value: "cufflinks", label: "Cufflinks" },
  { value: "wristwatch", label: "Wristwatch" },
  { value: "perfume-attar", label: "Perfume / Attar" },

  { value: "sherwani", label: "Sherwani" },
  { value: "punjabi-suit", label: "Punjabi Suit" },
  { value: "pathani-suit", label: "Pathani Suit" },
  { value: "kurta-pajama", label: "Kurta–Pajama" },
  { value: "dhoti-kurta", label: "Dhoti–Kurta (Traditional)" },
  { value: "long-coat-achkan", label: "Long Coat / Achkan" },

  { value: "safa-turban-pagri", label: "Safa / Turban (Pagri)" },
  { value: "turban-kalgi", label: "Turban Kalgi" },
  { value: "turban-brooch", label: "Turban Brooch" },
  { value: "sehra", label: "Sehra" },

  { value: "stole-dupatta", label: "Stole / Dupatta" },

  { value: "mojari-jutti", label: "Mojari / Jutti" },

  { value: "kada", label: "Kada" },
  { value: "kirpan", label: "Kirpan" },
  { value: "rudraksha-pearl-mala", label: "Rudraksha / Pearl Mala" }
],


    accessories: [],
    other: [],
  };

  // Get available subcategories based on selected category
  const availableSubCategories = subCategories[productForm.category] || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Products</h2>
          <p className="text-gray-600 mt-1">Manage your product catalog</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              setShowBulkImport(!showBulkImport);
              setShowProductForm(false);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Upload className="w-5 h-5" />
            Bulk Import
          </button>
          <button
            onClick={() => {
              setShowProductForm(!showProductForm);
              setShowBulkImport(false);
              setEditingProduct(null);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#E8A4BC] to-[#F04393] text-white rounded-lg hover:shadow-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>
      </div>

      {/* Bulk Import Section */}
      {showBulkImport && (
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-blue-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900">
              Bulk Import Products
            </h3>
            <button
              onClick={() => setShowBulkImport(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                Download our sample template to see the required format with
                example data
              </p>
              <button
                onClick={downloadTemplate}
                className="mt-2 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Download className="w-4 h-4" />
                Download Template
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Excel/CSV File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleExcelUpload}
                  className="hidden"
                  id="excel-upload"
                />
                <label
                  htmlFor="excel-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <FileSpreadsheet className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600">
                    {excelFile
                      ? excelFile.name
                      : "Click to upload or drag and drop"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports: .xlsx, .xls, .csv
                  </p>
                </label>
              </div>
            </div>

            <button
              onClick={handleBulkImport}
              disabled={!excelFile || importing}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {importing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Importing...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Import Products
                </>
              )}
            </button>

            {importResults && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✅ Successfully imported {importResults.imported} products
                </p>
                {importResults.failed > 0 && (
                  <p className="text-red-600 text-sm mt-1">
                    ⚠️ {importResults.failed} products failed to import
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Form */}
      {showProductForm && (
        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </h3>
            <button
              onClick={resetProductForm}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleProductSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Product Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={productForm.name}
                  onChange={(e) =>
                    setProductForm({ ...productForm, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  value={productForm.category}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      category: e.target.value,
                      subCategory: "", // Reset subcategory when category changes
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* 👇 ADD THIS RELIGION FIELD */}
              {/* {productForm.category === "groomwear" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Religion/Type
                  </label>
                  <select
                    value={productForm.religion}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        religion: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select Type</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="muslim">Sikh</option>
                    <option value="muslim">Christian</option>
                    <option value="muslim">Universal Items</option>
                    
                  </select>
                </div>
              )} */}

              {/* Subcategory - Only show if category has subcategories */}
              {availableSubCategories.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subcategory
                  </label>
                  <select
                    value={productForm.subCategory}
                    onChange={(e) =>
                      setProductForm({
                        ...productForm,
                        subCategory: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Select Subcategory</option>
                    {availableSubCategories.map((subCat) => (
                      <option key={subCat.value} value={subCat.value}>
                        {subCat.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  value={productForm.price}
                  onChange={(e) =>
                    setProductForm({ ...productForm, price: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {/* MRP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  MRP (₹)
                </label>
                <input
                  type="number"
                  value={productForm.mrp}
                  onChange={(e) =>
                    setProductForm({ ...productForm, mrp: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock
                </label>
                <input
                  type="number"
                  value={productForm.stock}
                  onChange={(e) =>
                    setProductForm({ ...productForm, stock: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={productForm.rating}
                  onChange={(e) =>
                    setProductForm({ ...productForm, rating: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={productForm.description}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      description: e.target.value,
                    })
                  }
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Images */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image URLs (comma-separated)
                </label>
                <textarea
                  value={productForm.images}
                  onChange={(e) =>
                    setProductForm({ ...productForm, images: e.target.value })
                  }
                  rows="2"
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Featured */}
              <div className="md:col-span-2 flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={productForm.featured}
                  onChange={(e) =>
                    setProductForm({
                      ...productForm,
                      featured: e.target.checked,
                    })
                  }
                  className="w-4 h-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="featured"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  Mark as Featured Product
                </label>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-[#E8A4BC] to-[#F04393] text-white rounded-lg hover:shadow-lg disabled:opacity-50 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>{editingProduct ? "Update Product" : "Add Product"}</>
                )}
              </button>
              <button
                type="button"
                onClick={resetProductForm}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-linear-to-r from-[#E8A4BC]/20 to-[#F04393]/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {product.images && product.images.length > 0 && (
                          <img
                            src={
                              typeof product.images === "string"
                                ? product.images.split(",")[0]
                                : product.images[0]
                            }
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover mr-3"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/48";
                            }}
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {product.name}
                          </div>
                          {product.featured && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 capitalize">
                        {product.category}
                      </div>
                      {product.subCategory && (
                        <div className="text-xs text-gray-500 capitalize">
                          {product.subCategory}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ₹{product.price}
                      </div>
                      {product.mrp && product.mrp > product.price && (
                        <div className="text-xs text-gray-500 line-through">
                          ₹{product.mrp}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.stock > 10
                            ? "bg-green-100 text-green-700"
                            : product.stock > 0
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.stock || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-900">
                          {product.rating || "N/A"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
