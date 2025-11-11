"use client";

import React, { useState, useEffect } from "react";
import {
  Package,
  Plus,
  Edit,
  Trash2,
  Loader2,
  Upload,
  Download,
  FileSpreadsheet,
  Search,
  LogOut,
  CheckCircle,
  XCircle,
  TrendingUp,
  DollarSign,
  Eye,
  Star,
  BarChart3,
  Activity,
  ShoppingBag,
  Menu,
  X,
  Home
} from "lucide-react";
import {
  Gem,
  Watch,
  Scissors,
  Footprints,
  Sparkles,
  Heart,
  User,
  Shirt,
  PartyPopper,
  Baby,
  ChevronDown
} from "lucide-react";

export default function VendorDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    mrp: "",
    discount: "",
    rating: "",
    category: "",
    images: "",
    stock: "",
    featured: false
  });

  // Bulk import states
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [excelFile, setExcelFile] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importResults, setImportResults] = useState(null);

  // Get vendor info from localStorage
  const [vendorInfo, setVendorInfo] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    setVendorInfo(user);
    fetchVendorProducts();
  }, []);

  const fetchVendorProducts = async () => {
    setLoading(true);
    setError("");
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/vendor/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) setProducts(data.products);
      else setError(data.message);
    } catch (err) {
      setError("Failed to load products.");
    }
    setLoading(false);
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");
      const url = editingProduct
        ? `http://localhost:5000/api/vendor/products/${editingProduct.id}`
        : `http://localhost:5000/api/vendor/products`;
      const method = editingProduct ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          ...productForm,
          images: productForm.images.split(",").map((img) => img.trim())
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.message);
        setShowProductForm(false);
        setEditingProduct(null);
        setProductForm({
          name: "",
          description: "",
          price: "",
          mrp: "",
          discount: "",
          rating: "",
          category: "",
          images: "",
          stock: "",
          featured: false,
        });
        fetchVendorProducts();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to save product.");
    }
    setLoading(false);
  };

  const handleEditProduct = (p) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name,
      description: p.description,
      price: p.price,
      mrp: p.mrp || "",
      discount: p.discount || "",
      rating: p.rating || "",
      category: p.category,
      images: Array.isArray(p.images) ? p.images.join(", ") : p.images || "",
      stock: p.stock || "",
      featured: p.featured || false
    });
    setShowProductForm(true);
    setShowBulkImport(false);
    setActiveTab("products");
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/vendor/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Product deleted successfully.");
        fetchVendorProducts();
      } else {
        setError(data.message);
      }
    } catch {
      setError("Failed to delete product.");
    }
    setLoading(false);
  };

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv"].includes(file.type)) {
      setError("Upload a valid Excel or CSV file.");
      return;
    }
    setExcelFile(file);
    setError("");
  };

  const handleBulkImport = async () => {
    if (!excelFile) return setError("Select file first.");
    setImporting(true);
    setError("");
    setSuccess("");
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const XLSX = (await import("xlsx")).default || await import("xlsx");
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          if (!jsonData.length) return setError("Spreadsheet is empty.");

          const token = localStorage.getItem("token");
          const res = await fetch("http://localhost:5000/api/vendor/products/bulk-import", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ products: jsonData })
          });
          const result = await res.json();
          if (result.success) {
            setSuccess(`Imported ${result.imported} products!`);
            setImportResults(result);
            setExcelFile(null);
            fetchVendorProducts();
          } else setError(result.message);
        } catch (err) {
          setError("Parse error: " + err.message);
        } finally {
          setImporting(false);
        }
      };
      reader.readAsArrayBuffer(excelFile);
    } catch (err) {
      setError("Bulk import error.");
      setImporting(false);
    }
  };

  const downloadTemplate = () => {
    const templateData = [{
      name: "Gold Necklace",
      description: "Beautiful necklace",
      price: 25000,
      mrp: 29000,
      discount: 14,
      rating: 4.6,
      category: "jewellery",
      images: "https://link1.jpg, https://link2.jpg",
      stock: 30,
      featured: 1
    }];
    const headers = Object.keys(templateData[0]).join(",");
    const rows = templateData.map(row => Object.values(row).map(v => `"${v}"`).join(",")).join("\n");
    const csv = headers + "\n" + rows;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vendor_products_template.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const filteredProducts = products.filter((p) => p.name?.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  // Calculate stats
  const totalProducts = products.length;
  const totalRevenue = products.reduce((sum, p) => sum + (parseFloat(p.price) || 0), 0);
  const avgRating = products.length > 0 ? (products.reduce((sum, p) => sum + (parseFloat(p.rating) || 0), 0) / products.length).toFixed(1) : "0.0";
  const totalViews = products.reduce((sum, p) => sum + (parseInt(p.views) || 0), 0);



  const formatNumber = (num) => {
    const number = parseFloat(num);

    // Indian numbering system with international abbreviations
    if (number >= 10000000) {
      // 1 Crore = 10,000,000
      return (number / 10000000).toFixed(2) + ' Cr';
    } else if (number >= 100000) {
      // 1 Lakh = 100,000
      return (number / 100000).toFixed(2) + ' L';
    } else if (number >= 1000) {
      // 1 Thousand = 1,000
      return (number / 1000).toFixed(2) + ' K';
    } else {
      return number.toLocaleString();
    }
  };

  const formatCurrency = (num) => {
    const number = parseFloat(num);

    if (number >= 10000000) {
      return '₹' + (number / 10000000).toFixed(2) + ' Cr';
    } else if (number >= 100000) {
      return '₹' + (number / 100000).toFixed(2) + ' L';
    } else if (number >= 1000) {
      return '₹' + (number / 1000).toFixed(2) + ' K';
    } else {
      return '₹' + number.toLocaleString();
    }
  };


  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .stat-card {
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-[#FFFEF7] via-[#FFF9E5] to-[#FFEDD5]">

        {/* Modern Header */}
        <header className="bg-white shadow-md border-b-4 border-[#FFBE00] sticky top-0 z-50 backdrop-blur-lg ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#CA1F3D] to-[#FFBE00] rounded-2xl flex items-center justify-center shadow-lg">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-[#CA1F3D] to-[#25182E] bg-clip-text text-transparent">
                      Vendor Dashboard
                    </h1>
                    <p className="text-md text-gray-500">Manage your store</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {/* <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#CA1F3D] rounded-full"></span>
                </button> */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-xl cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Notifications */}
        {error && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 animate-slide-in">
            <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-red-500 mr-3" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}

        {success && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 animate-slide-in">
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 border-l-4 border-green-500 p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <p className="text-green-700 font-medium">{success}</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-6">

            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-72 fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-0`}>
              <div className="h-full lg:h-auto bg-white rounded-2xl shadow-2xl p-6 lg:sticky lg:top-28 border-2 border-gray-100">

                {/* Profile Section */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#CA1F3D] to-[#FFBE00] rounded-full flex items-center justify-center text-white text-5xl font-medium mb-3 shadow-xl">
                      {vendorInfo?.business_name?.charAt(0).toUpperCase() || "V"}
                    </div>
                    <h3 className="font-medium text-3xl text-gray-900">{vendorInfo?.business_name || "Vendor Name"}</h3>
                    <p className="text-md text-gray-500">{vendorInfo?.email || "vendor@email.com"}</p>
                    <div className="mt-3 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium">
                      ✓ Verified Vendor
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <button
                    onClick={() => {
                      setActiveTab("dashboard");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium cursor-pointer text-xl ${activeTab === "dashboard"
                      ? "bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white shadow-xl transform scale-105"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-[#FFBE00]/20 hover:to-[#CA1F3D]/20 hover:text-[#CA1F3D]"
                      }`}
                  >
                    <Home className="w-5 h-5" />
                    <span>Dashboard</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("products");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium cursor-pointer text-xl ${activeTab === "products"
                      ? "bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white shadow-xl transform scale-105"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-[#FFBE00]/20 hover:to-[#CA1F3D]/20 hover:text-[#CA1F3D]"
                      }`}
                  >
                    <Package className="w-5 h-5" />
                    <span>Products</span>
                    <span className={`ml-auto px-2 py-1 text-xs rounded-full ${activeTab === "products" ? "bg-white/20" : "bg-[#CA1F3D] text-white"}`}>
                      {totalProducts}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("analytics");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium text-xl cursor-pointer ${activeTab === "analytics"
                      ? "bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white shadow-xl transform scale-105"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-[#FFBE00]/20 hover:to-[#CA1F3D]/20 hover:text-[#CA1F3D]"
                      }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Analytics</span>
                  </button>
                </nav>

                <div className="mt-8 p-4 bg-gradient-to-br from-[#FFBE00]/20 to-[#CA1F3D]/20 rounded-xl">
                  <p className="text-md text-gray-800 text-center">Vendor Portal v2.0</p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">

              {/* Dashboard Tab */}
              {activeTab === "dashboard" && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-4xl font-medium text-gray-900 mb-2">Dashboard Overview</h2>
                    <p className="text-gray-600 text-lg">Welcome back! Here's your store performance</p>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Products Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#CA1F3D] transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#CA1F3D] to-[#FFBE00] rounded-2xl flex items-center justify-center shadow-lg">
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-normal">
                          Active
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Total Products</p>
                      <p className="text-3xl font-nromal text-gray-900 mb-2">
                        {formatNumber(totalProducts)}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <TrendingUp className="w-4 h-4 flex-shrink-0" />
                        <span>Your catalog</span>
                      </div>
                    </div>

                    {/* Total Value Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#FFBE00] transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#FFBE00] to-[#CA1F3D] rounded-2xl flex items-center justify-center shadow-lg">
                          <DollarSign className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-noraml">
                          +12%
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Total Value</p>
                      <p className="text-3xl font-normal text-gray-900 mb-2">
                        {formatCurrency(totalRevenue)}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Activity className="w-4 h-4 flex-shrink-0" />
                        <span>Inventory value</span>
                      </div>
                    </div>

                    {/* Avg Rating Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#25182E] transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#25182E] to-[#CA1F3D] rounded-2xl flex items-center justify-center shadow-lg">
                          <Star className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-normal">
                          ★ {avgRating}
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Avg Rating</p>
                      <p className="text-3xl font-normal text-gray-900 mb-2">
                        {avgRating}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-yellow-600">
                        <Star className="w-4 h-4 flex-shrink-0" />
                        <span>Customer reviews</span>
                      </div>
                    </div>

                    {/* Total Views Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-purple-500 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Eye className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-normal">
                          +8%
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Total Views</p>
                      <p className="text-3xl font-normal text-gray-900 mb-2">
                        {formatNumber(totalViews || 0)}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-purple-600">
                        <Activity className="w-4 h-4 flex-shrink-0" />
                        <span>Product views</span>
                      </div>
                    </div>
                  </div>

                  {/* Recent Products & Calendar */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Recent Products */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-3xl font-medium text-gray-900">Recent Products</h3>
                        <button
                          onClick={() => setActiveTab("products")}
                          className="text-[#CA1F3D] hover:text-[#25182E] font-medium text-md cursor-pointer"
                        >
                          View all →
                        </button>
                      </div>
                      <div className="space-y-4">
                        {products.slice(0, 5).map((product, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-[#FFBE00]/5 rounded-xl hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#CA1F3D]/20 to-[#FFBE00]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Package className="w-6 h-6 text-[#CA1F3D]" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-xl text-gray-900 truncate">{product.name}</p>
                              <p className="text-md text-gray-500">{product.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-xl text-[#CA1F3D]">₹{product.price}</p>
                              <p className="text-md text-gray-500">Stock: {product.stock || "N/A"}</p>
                            </div>
                          </div>
                        ))}
                        {products.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="font-medium">No products yet</p>
                            <button
                              onClick={() => setActiveTab("products")}
                              className="mt-3 text-[#CA1F3D] hover:text-[#25182E] font-medium text-lg cursor-pointer"
                            >
                              Add your first product →
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Quick Actions & Activity */}
                    <div className="space-y-6">
                      {/* Quick Actions */}
                      <div className="bg-gradient-to-br from-[#CA1F3D] to-[#25182E] rounded-2xl shadow-2xl p-6 text-white">
                        <h3 className="text-3xl font-medium mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                          <button
                            onClick={() => {
                              setActiveTab("products");
                              setShowProductForm(true);
                            }}
                            className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
                          >
                            <Plus className="w-5 h-5" />
                            <span className="font-medium">Add Product</span>
                          </button>
                          <button
                            onClick={() => {
                              setActiveTab("products");
                              setShowBulkImport(true);
                            }}
                            className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
                          >
                            <Upload className="w-5 h-5" />
                            <span className="font-medium">Bulk Import</span>
                          </button>
                        </div>
                      </div>

                      {/* Activity */}
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h3 className="text-3xl font-medium text-gray-900 mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-md font-medium text-gray-900">Products synced</p>
                              <p className="text-sm text-gray-600">Just now</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <Package className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="text-md font-medium text-gray-900">Inventory updated</p>
                              <p className="text-sm text-gray-600">2 hours ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-3xl font-medium text-gray-900 mb-6">Sales Overview</h3>
                    <div className="h-64 flex items-center justify-center bg-gradient-to-br from-[#FFBE00]/10 to-[#CA1F3D]/10 rounded-xl">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-[#CA1F3D] mx-auto mb-3" />
                        <p className="text-gray-600 font-medium">Analytics chart coming soon</p>
                        <p className="text-sm text-gray-500 mt-1">Connect your sales data to view insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Products Tab */}
              {activeTab === "products" && (
                <div className="animate-fade-in">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div>
                      <h2 className="text-4xl font-medium text-gray-900 mb-2">Products Management</h2>
                      <p className="text-gray-600">Manage your product catalog</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setShowBulkImport(!showBulkImport);
                          setShowProductForm(false);
                        }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium cursor-pointer text-lg"
                      >
                        <Upload className="w-4 h-4" />
                        Bulk Import
                      </button>
                      <button
                        onClick={() => {
                          setShowProductForm(!showProductForm);
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
                            images: "",
                            stock: "",
                            featured: false,
                          });
                        }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add Product
                      </button>
                    </div>
                  </div>

                  {/* Bulk Import Section */}
                  {showBulkImport && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in">
                      <h3 className="text-3xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                        <Upload className="w-6 h-6 text-green-500" />
                        Bulk Import Products
                      </h3>

                      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FileSpreadsheet className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-2 text-xl">Download Sample Template</h4>
                            <p className="text-md text-gray-600 mb-4 hover:text-black cursor-pointer">
                              Get our template with example data to ensure proper format
                            </p>
                            <button
                              onClick={downloadTemplate}
                              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                            >
                              <Download className="w-4 h-4" />
                              Download Sample Template (CSV)
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <label className="block text-md font-medium text-gray-700 mb-3">Upload Excel/CSV File</label>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                          <input
                            type="file"
                            accept=".xlsx,.xls,.csv"
                            onChange={handleExcelUpload}
                            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent transition-all"
                          />
                          {excelFile && (
                            <span className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-700 font-semibold rounded-xl border-2 border-green-200">
                              <CheckCircle className="w-5 h-5" />
                              {excelFile.name}
                            </span>
                          )}
                        </div>
                      </div>

                      {importResults && (
                        <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl animate-slide-in">
                          <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Import Results
                          </h4>
                          <div className="text-sm text-green-700 space-y-2">
                            <p className="font-semibold">Successfully imported: {importResults.imported} products</p>
                            {importResults.failed > 0 && (
                              <p className="text-red-600 font-semibold">Failed: {importResults.failed} products</p>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-4">
                        <button
                          onClick={handleBulkImport}
                          disabled={!excelFile || importing}
                          className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 font-bold"
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
                        <button
                          onClick={() => {
                            setShowBulkImport(false);
                            setExcelFile(null);
                            setImportResults(null);
                          }}
                          className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium text-xl cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Product Form */}
                  {showProductForm && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in">
                      <h3 className="text-3xl font-medium text-gray-900 mb-6">
                        {editingProduct ? "Edit Product" : "Add New Product"}
                      </h3>
                      <form onSubmit={handleProductSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">Product Name *</label>
                            <input
                              type="text"
                              required
                              value={productForm.name}
                              onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="Premium Wedding Ring"
                            />
                          </div>

                          {/* <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">Category *</label>
                            <input
                              type="text"
                              required
                              value={productForm.category}
                              onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="jewellery"
                            />
                          </div> */}
                          <div>
                            <label className="text-md font-medium text-gray-700 mb-3 flex items-center gap-2">
                              <ShoppingBag className="w-4 h-4 text-[#F04393]" />
                              Category *
                            </label>
                            <div className="relative group">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
                                {productForm.category === 'jewellery' && <Gem className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'Bags And Purse' && <ShoppingBag className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'watches' && <Watch className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'hairaccessories' && <Scissors className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'shoes' && <Footprints className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'perfumes' && <Sparkles className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'bridalwear' && <Heart className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'groomwear' && <User className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'traditionalwear' && <Shirt className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'partywear' && <PartyPopper className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'westernwear' && <TrendingUp className="w-5 h-5 text-[#F04393]" />}
                                {productForm.category === 'outfitkids' && <Baby className="w-5 h-5 text-[#F04393]" />}
                                {!productForm.category && <ShoppingBag className="w-5 h-5 text-gray-400" />}
                              </div>

                              <select
                                required
                                value={productForm.category}
                                onChange={(e) =>
                                  setProductForm({
                                    ...productForm,
                                    category: e.target.value,
                                  })
                                }
                                className="w-full pl-14 pr-12 py-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:bg-white transition-all cursor-pointer appearance-none text-gray-700 font-medium shadow-sm hover:shadow-md group-hover:from-[#E8A4BC]/10 group-hover:to-[#F9C449]/10"
                              >
                                <option value="">Select Category</option>
                                <option value="jewellery">Jewellery</option>
                                <option value="Bags And Purse">Bag And Purse</option>
                                <option value="watches">Watches</option>
                                <option value="hairaccessories">Hair Accessories</option>
                                <option value="shoes">Shoes</option>
                                <option value="perfumes">Perfumes</option>
                                <option value="bridalwear">Bridal Wear</option>
                                <option value="groomwear">Groom Wear</option>
                                <option value="traditionalwear">Traditional Wear</option>
                                <option value="partywear">Party Wear</option>
                                <option value="westernwear">Western Wear</option>
                                <option value="outfitkids">Outfit Kids</option>
                              </select>

                              {/* Custom dropdown arrow */}
                              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <ChevronDown className="w-5 h-5 text-[#F04393] group-hover:text-[#2A0B8B] transition-colors" />
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-[#F9C449]" />
                              Choose the category that best fits your product
                            </p>
                          </div>

                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">MRP (Original Price) *</label>
                            <input
                              type="number"
                              required
                              value={productForm.mrp}
                              onChange={(e) => setProductForm({ ...productForm, mrp: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="50000"
                            />
                          </div>

                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">Selling Price *</label>
                            <input
                              type="number"
                              required
                              value={productForm.price}
                              onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="45000"
                            />
                          </div>

                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">Discount (%)</label>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={productForm.discount}
                              onChange={(e) => setProductForm({ ...productForm, discount: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="10"
                            />
                          </div>

                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">Rating (0-5)</label>
                            <input
                              type="number"
                              min="0"
                              max="5"
                              step="0.1"
                              value={productForm.rating}
                              onChange={(e) => setProductForm({ ...productForm, rating: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="4.5"
                            />
                          </div>

                          <div className="md:col-span-2">
                            <label className="block text-md font-medium text-gray-700 mb-2">Stock Quantity</label>
                            <input
                              type="number"
                              min="0"
                              value={productForm.stock}
                              onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                              className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                              placeholder="100"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-md font-medium text-gray-700 mb-2">Description *</label>
                          <textarea
                            required
                            rows="4"
                            value={productForm.description}
                            onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                            className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                            placeholder="Describe your product in detail..."
                          />
                        </div>

                        <div>
                          <label className="block text-md font-medium text-gray-700 mb-2">Images (comma-separated URLs) *</label>
                          <textarea
                            required
                            rows="3"
                            value={productForm.images}
                            onChange={(e) => setProductForm({ ...productForm, images: e.target.value })}
                            className="w-full px-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-[#CA1F3D] focus:bg-white transition-all"
                            placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                          />
                        </div>

                        <div className="flex items-center p-4 bg-gradient-to-r from-[#FFBE00]/10 to-[#CA1F3D]/10 rounded-xl">
                          <input
                            type="checkbox"
                            id="featured"
                            checked={productForm.featured}
                            onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                            className="w-5 h-5 text-[#CA1F3D] bg-gray-100 border-gray-300 rounded focus:ring-[#CA1F3D] cursor-pointer"
                          />
                          <label htmlFor="featured" className="ml-3 text-md font-medium cursor-pointer text-gray-700 flex items-center gap-2">
                            <Star className="w-4 h-4 text-[#FFBE00]" />
                            Mark as Featured Product
                          </label>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-4 bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 flex items-center gap-3 font-medium cursor-pointer text-lg"
                          >
                            {loading ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              "Save Product"
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setShowProductForm(false);
                              setEditingProduct(null);
                            }}
                            className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium cursor-pointer text-lg"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search your products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#CA1F3D] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Products Table */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-[#CA1F3D] to-[#25182E] text-white">
                          <tr>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">Product</th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">Category</th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">Price</th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">Stock</th>
                            <th className="px-6 py-4 text-right text-md font-medium uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredProducts.map((product, index) => (
                            <tr key={product.id} className="hover:bg-gradient-to-r hover:from-[#FFBE00]/5 hover:to-[#CA1F3D]/5 transition-all">
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-lg font-medium text-gray-900">{product.name}</div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <span className="px-3 py-1 bg-gradient-to-r from-[#FFBE00]/20 to-[#CA1F3D]/20 text-[#CA1F3D] rounded-full text-lg font-medium">
                                  {product.category}
                                </span>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-lg font-medium text-gray-900">₹{product.price}</div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-lg text-gray-900">{product.stock || "N/A"}</div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => handleEditProduct(product)}
                                  className="inline-flex items-center justify-center w-10 h-10 text-blue-600 hover:bg-blue-50 rounded-xl transition-all mr-2 cursor-pointer"
                                >
                                  <Edit className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="inline-flex items-center justify-center w-10 h-10 text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {filteredProducts.length === 0 && !loading && (
                        <div className="text-center py-16">
                          <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500 font-semibold text-lg">No products found</p>
                          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or add a new product</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Analytics Tab */}
              {activeTab === "analytics" && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-4xl font-medium text-gray-900 mb-2">Analytics & Insights</h2>
                    <p className="text-gray-600">Track your performance metrics</p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="h-96 flex items-center justify-center bg-gradient-to-br from-[#FFBE00]/10 to-[#CA1F3D]/10 rounded-xl">
                      <div className="text-center">
                        <BarChart3 className="w-20 h-20 text-[#CA1F3D] mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Coming Soon</h3>
                        <p className="text-gray-600">Detailed analytics and insights will be available here</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
