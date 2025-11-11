"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Package,
  Users,
  Store,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Search,
  CheckCircle,
  XCircle,
  Loader2,
  Upload,
  Download,
  FileSpreadsheet,
  TrendingUp,
  ShoppingBag,
  Activity,
  DollarSign,
  Eye,
  Star,
  Menu,
  X,
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

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ Bulk Import States
  const [showBulkImport, setShowBulkImport] = useState(false);
  const [excelFile, setExcelFile] = useState(null);
  const [importing, setImporting] = useState(false);
  const [importResults, setImportResults] = useState(null);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    mrp: "",
    discount: "",
    rating: "",
    category: "",
    images: "",
    vendor_id: "",
    stock: "",
    featured: false,
  });

  // Check admin authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (!token || user.role !== 'admin' || user.email !== "team.zentrixinfotech@gmail.com") {
      router.push("/auth");
      return;
    }

    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const [statsRes, productsRes, usersRes, vendorsRes] = await Promise.all([
        fetch("http://localhost:5000/api/admin/stats", { headers }),
        fetch("http://localhost:5000/api/admin/products", { headers }),
        fetch("http://localhost:5000/api/admin/users", { headers }),
        fetch("http://localhost:5000/api/admin/vendors", { headers }),
      ]);

      const statsData = await statsRes.json();
      const productsData = await productsRes.json();
      const usersData = await usersRes.json();
      const vendorsData = await vendorsRes.json();

      if (statsData.success) setStats(statsData.stats);
      if (productsData.success) setProducts(productsData.products);
      if (usersData.success) setUsers(usersData.users);
      if (vendorsData.success) setVendors(vendorsData.vendors);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/auth");
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      const url = editingProduct
        ? `http://localhost:5000/api/admin/products/${editingProduct.id}`
        : "http://localhost:5000/api/admin/products";

      const method = editingProduct ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...productForm,
          images: productForm.images.split(",").map((img) => img.trim()),
        }),
      });

      const data = await response.json();

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
          vendor_id: "",
          stock: "",
          featured: false,
        });
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Product submit error:", error);
      setError("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  // ✅ BULK IMPORT FUNCTIONS
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
        file.type !== 'application/vnd.ms-excel' &&
        file.type !== 'text/csv') {
        setError('Please upload a valid Excel (.xlsx, .xls) or CSV file');
        return;
      }
      setExcelFile(file);
      setError('');
      setImportResults(null);
    }
  };

  const handleBulkImport = async () => {
    if (!excelFile) {
      setError('Please select a file first');
      return;
    }

    setImporting(true);
    setError('');
    setSuccess('');

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const XLSX = await import('xlsx');
          const workbook = XLSX.read(data, { type: 'array' });

          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          if (jsonData.length === 0) {
            setError('Excel file is empty');
            setImporting(false);
            return;
          }

          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5000/api/admin/products/bulk-import', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ products: jsonData })
          });

          const result = await response.json();

          if (result.success) {
            setSuccess(`Successfully imported ${result.imported} products!`);
            setImportResults(result);
            setExcelFile(null);
            fetchDashboardData();
          } else {
            setError(result.message);
          }
        } catch (err) {
          console.error('Parse error:', err);
          setError('Failed to parse Excel file: ' + err.message);
        } finally {
          setImporting(false);
        }
      };

      reader.readAsArrayBuffer(excelFile);
    } catch (error) {
      console.error('Bulk import error:', error);
      setError('Failed to import products');
      setImporting(false);
    }
  };

  const downloadTemplate = () => {
    const templateData = [
      {
        name: 'Premium Diamond Necklace',
        description: 'Exquisite diamond necklace with 18k gold',
        price: 250000,
        mrp: 300000,
        discount: 17,
        rating: 4.8,
        category: 'jewellery',
        images: 'https://res.cloudinary.com/image1.jpg, https://res.cloudinary.com/image2.jpg',
        stock: 50,
        featured: 1,
        vendor_id: ''
      },
      {
        name: 'Gold Earrings',
        description: 'Beautiful gold earrings with intricate design',
        price: 45000,
        mrp: 55000,
        discount: 18,
        rating: 4.9,
        category: 'jewellery',
        images: 'https://res.cloudinary.com/image3.jpg',
        stock: 100,
        featured: 0,
        vendor_id: ''
      }
    ];

    const headers = Object.keys(templateData[0]).join(',');
    const rows = templateData.map(row => Object.values(row).map(v => `"${v}"`).join(',')).join('\n');
    const csv = headers + '\n' + rows;

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Delete product error:", error);
      setError("Failed to delete product");
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      mrp: product.mrp || product.price,
      discount: product.discount || '',
      rating: product.rating,
      category: product.category,
      images: Array.isArray(product.images)
        ? product.images.join(", ")
        : product.images,
      vendor_id: product.vendor_id || "",
      stock: product.stock || '',
      featured: product.featured || false,
    });
    setShowProductForm(true);
    setShowBulkImport(false);
  };

  const handleDeleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Delete user error:", error);
      setError("Failed to delete user");
    }
  };

  const handleApproveVendor = async (id, isApproved) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/vendors/${id}/approve`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ is_approved: isApproved }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Approve vendor error:", error);
      setError("Failed to update vendor status");
    }
  };

  const handleDeleteVendor = async (id) => {
    if (!confirm("Are you sure you want to delete this vendor?")) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:5000/api/admin/vendors/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setSuccess(data.message);
        fetchDashboardData();
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Delete vendor error:", error);
      setError("Failed to delete vendor");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && !stats.totalProducts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#3C4CAD] via-[#2A0B8B] to-[#F04393]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-white mx-auto mb-4" />
          <p className="text-white font-semibold text-lg">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
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

        .gradient-border {
          position: relative;
          background: white;
          border-radius: 1rem;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, #F04393, #2A0B8B, #3C4CAD);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .table-row {
          transition: all 0.2s ease;
        }

        .table-row:hover {
          background: linear-gradient(90deg, rgba(240, 67, 147, 0.05) 0%, rgba(42, 11, 139, 0.05) 100%);
          transform: scale(1.01);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#E8A4BC]/10 to-[#F9C449]/10">

        {/* Modern Header */}
        <header className="bg-white shadow-lg border-b-4 border-gradient-to-r from-[#F04393] to-[#2A0B8B] sticky top-0 z-50 backdrop-blur-lg">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F04393] to-[#2A0B8B] rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-[#F04393] to-[#2A0B8B] bg-clip-text text-transparent">
                      Admin Dashboard
                    </h1>
                    <p className="text-md text-gray-500">Shaadi Baazar</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 cursor-pointer px-4 py-2 bg-gradient-to-r from-[#E8A4BC]/20 to-[#F9C449]/20 rounded-xl">
                  <Activity className="w-4 h-4 text-[#F04393]" />
                  <span className="text-md font-medium text-gray-700">Admin Panel</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-3 text-md cursor-pointer bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium"
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

            {/* Modern Sidebar */}
            <aside className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-72 fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-0`}>
              <div className="h-full lg:h-auto bg-white rounded-2xl shadow-2xl p-6 lg:sticky lg:top-28 border-2 border-gray-100">
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h3 className="text-2xl font-medium text-gray-700 uppercase tracking-wider mb-4">Navigation</h3>
                </div>
                <nav className="space-y-2">
                  <button
                    onClick={() => {
                      setActiveTab("dashboard");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg cursor-pointer ${activeTab === "dashboard"
                        ? "bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white shadow-xl transform scale-105"
                        : "text-gray-600 hover:bg-gradient-to-r hover:from-[#E8A4BC]/20 hover:to-[#F9C449]/20 hover:text-[#F04393]"
                      }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span>Dashboard</span>
                    {activeTab === "dashboard" && <TrendingUp className="w-4 h-4 ml-auto animate-pulse" />}
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("products");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium tetx-lg cursor-pointer ${activeTab === "products"
                        ? "bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white shadow-xl transform scale-105"
                        : "text-gray-600 hover:bg-gradient-to-r hover:from-[#E8A4BC]/20 hover:to-[#F9C449]/20 hover:text-[#F04393]"
                      }`}
                  >
                    <Package className="w-5 h-5" />
                    <span>Products</span>
                    <span className={`ml-auto px-2 py-1 text-xs rounded-full ${activeTab === "products" ? "bg-white/20" : "bg-[#F04393] text-white"}`}>
                      {products.length}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("users");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium cursor-pointer text-lg ${activeTab === "users"
                        ? "bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white shadow-xl transform scale-105"
                        : "text-gray-600 hover:bg-gradient-to-r hover:from-[#E8A4BC]/20 hover:to-[#F9C449]/20 hover:text-[#F04393]"
                      }`}
                  >
                    <Users className="w-5 h-5" />
                    <span>Users</span>
                    <span className={`ml-auto px-2 py-1 text-xs rounded-full ${activeTab === "users" ? "bg-white/20" : "bg-blue-500 text-white"}`}>
                      {users.length}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab("vendors");
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium cursor-pointer text-lg ${activeTab === "vendors"
                        ? "bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white shadow-xl transform scale-105"
                        : "text-gray-600 hover:bg-gradient-to-r hover:from-[#E8A4BC]/20 hover:to-[#F9C449]/20 hover:text-[#F04393]"
                      }`}
                  >
                    <Store className="w-5 h-5" />
                    <span>Vendors</span>
                    <span className={`ml-auto px-2 py-1 text-xs rounded-full ${activeTab === "vendors" ? "bg-white/20" : "bg-green-500 text-white"}`}>
                      {vendors.length}
                    </span>
                  </button>
                </nav>

                <div className="mt-8 p-4 bg-gradient-to-br from-[#E8A4BC]/20 to-[#F9C449]/20 rounded-xl">
                  <p className="text-sm text-gray-700 text-center">
                    Admin Panel v1.0
                  </p>
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
                    <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Products Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#F04393] transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#F04393] to-[#E8A4BC] rounded-2xl flex items-center justify-center shadow-lg">
                          <Package className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                          +12%
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Total Products</p>
                      <p className="text-4xl font-bold text-gray-900 mb-2">
                        {stats.totalProducts || 0}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        <span>Active listings</span>
                      </div>
                    </div>

                    {/* Total Users Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#3C4CAD] transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#3C4CAD] to-[#2A0B8B] rounded-2xl flex items-center justify-center shadow-lg">
                          <Users className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                          +8%
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Total Users</p>
                      <p className="text-4xl font-bold text-gray-900 mb-2">
                        {stats.totalUsers || 0}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Activity className="w-4 h-4" />
                        <span>Registered</span>
                      </div>
                    </div>

                    {/* Total Vendors Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#F9C449] transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#F9C449] to-[#E8A4BC] rounded-2xl flex items-center justify-center shadow-lg">
                          <Store className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold">
                          +5%
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Total Vendors</p>
                      <p className="text-4xl font-bold text-gray-900 mb-2">
                        {stats.totalVendors || 0}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-yellow-600">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Active sellers</span>
                      </div>
                    </div>

                    {/* Pending Vendors Card */}
                    <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-orange-500 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <Activity className="w-7 h-7 text-white" />
                        </div>
                        <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                          Action needed
                        </div>
                      </div>
                      <p className="text-gray-500 text-md font-medium mb-1">Pending Vendors</p>
                      <p className="text-4xl font-bold text-gray-900 mb-2">
                        {stats.pendingVendors || 0}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-orange-600">
                        <Eye className="w-4 h-4" />
                        <span>Awaiting approval</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-[#F04393] to-[#2A0B8B] rounded-2xl shadow-2xl p-8 text-white">
                      <h3 className="text-4xl font-medium mb-4">Quick Actions</h3>
                      <p className="text-white/80 mb-6">Manage your platform efficiently</p>
                      <div className="space-y-3">
                        <button
                          onClick={() => setActiveTab("products")}
                          className="w-full flex items-center gap-3 cursor-pointer px-5 py-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
                        >
                          <Plus className="w-5 h-5" />
                          <span className="font-medium">View All Product</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("vendors")}
                          className="w-full flex items-center gap-3 cursor-pointer px-5 py-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
                        >
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Approve Vendors</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-4xl font-medium text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">New product added</p>
                            <p className="text-sm text-gray-600">2 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">New user registered</p>
                            <p className="text-sm text-gray-600">15 minutes ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Store className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Vendor pending approval</p>
                            <p className="text-sm text-gray-600">1 hour ago</p>
                          </div>
                        </div>
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
                      {/* Bulk Import Button */}
                      <button
                        onClick={() => {
                          setShowBulkImport(!showBulkImport);
                          setShowProductForm(false);
                        }}
                        className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg"
                      >
                        <Upload className="w-4 h-4" />
                        Bulk Import
                      </button>

                      {/* Add Product Button */}
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
                            vendor_id: "",
                            stock: "",
                            featured: false,
                          });
                        }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium text-lg cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add Product
                      </button>
                    </div>
                  </div>

                  {/* ✅ Bulk Import Section */}
                  {showBulkImport && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in">
                      <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 flex items-center gap-3">
                        <Upload className="w-6 h-6 text-green-500" />
                        Bulk Import Products
                      </h3>

                      {/* Download Template */}
                      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <FileSpreadsheet className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-2 text-xl">
                              First time using bulk import?
                            </h4>
                            <p className="text-md text-gray-600 mb-4 hover:text-black cursor-pointer">
                              Download our sample template to see the required format with example data
                            </p>
                            <button
                              onClick={downloadTemplate}
                              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium cursor-pointer"
                            >
                              <Download className="w-4 h-4" />
                              Download Sample Template (CSV)
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* File Upload */}
                      <div className="mb-6">
                        <label className="block text-md font-medium text-gray-700 mb-3">
                          Upload Excel/CSV File
                        </label>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 cursor-pointer">
                          <input
                            type="file"
                            accept=".xlsx,.xls,.csv"
                            onChange={handleExcelUpload}
                            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                          />
                          {excelFile && (
                            <span className="flex items-center gap-2 px-4 py-3 cursor-pointer bg-green-50 text-green-700 font-semibold rounded-xl border-2 border-green-200">
                              <CheckCircle className="w-5 h-5" />
                              {excelFile.name}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-3">
                          Supported formats: .xlsx, .xls, .csv (Max 500 products per file)
                        </p>
                      </div>

                      {/* Import Results */}
                      {importResults && (
                        <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl animate-slide-in">
                          <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            Import Results
                          </h4>
                          <div className="text-sm text-green-700 space-y-2">
                            <p className="flex items-center gap-2 font-semibold">
                              <CheckCircle className="w-4 h-4" />
                              Successfully imported: {importResults.imported} products
                            </p>
                            {importResults.failed > 0 && (
                              <p className="text-red-600 flex items-center gap-2 font-semibold">
                                <XCircle className="w-4 h-4" />
                                Failed: {importResults.failed} products
                              </p>
                            )}
                          </div>
                          {importResults.errors && importResults.errors.length > 0 && (
                            <details className="mt-4">
                              <summary className="cursor-pointer text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                                View Errors ({importResults.errors.length})
                              </summary>
                              <div className="mt-3 text-xs text-red-600 space-y-2 max-h-40 overflow-y-auto">
                                {importResults.errors.map((err, idx) => (
                                  <div key={idx} className="p-3 bg-red-50 rounded-lg border border-red-200">
                                    Row {err.row}: {err.name || 'Unknown'} - {err.error}
                                  </div>
                                ))}
                              </div>
                            </details>
                          )}
                        </div>
                      )}

                      {/* Action Buttons */}
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
                          className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search products by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Product Form */}
                  {showProductForm && (
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in">
                      <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">
                        {editingProduct ? "Edit Product" : "Add New Product"}
                      </h3>
                      <form onSubmit={handleProductSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Product Name */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              Product Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={productForm.name}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  name: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="Premium Wireless Headphones"
                            />
                          </div>

                          {/* Category */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-3 flex items-center gap-2">
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

                          {/* MRP (Original Price) */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              MRP (Original Price) *
                            </label>
                            <input
                              type="number"
                              step="0.01"
                              required
                              value={productForm.mrp}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  mrp: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="2999"
                            />
                          </div>

                          {/* Selling Price */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              Selling Price *
                            </label>
                            <input
                              type="number"
                              step="0.01"
                              required
                              value={productForm.price}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  price: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="1999"
                            />
                          </div>

                          {/* Discount Percentage */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              Discount (%)
                            </label>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              value={productForm.discount}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  discount: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="33"
                            />
                          </div>

                          {/* Rating */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              Rating (0-5)
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              min="0"
                              max="5"
                              value={productForm.rating}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  rating: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="4.5"
                            />
                          </div>

                          {/* Stock Quantity */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              Stock Quantity
                            </label>
                            <input
                              type="number"
                              min="0"
                              value={productForm.stock}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  stock: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="100"
                            />
                          </div>

                          {/* Vendor ID */}
                          <div>
                            <label className="block text-md font-medium text-gray-700 mb-2">
                              Vendor ID (optional)
                            </label>
                            <input
                              type="number"
                              value={productForm.vendor_id}
                              onChange={(e) =>
                                setProductForm({
                                  ...productForm,
                                  vendor_id: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                              placeholder="Leave empty for admin products"
                            />
                          </div>
                        </div>

                        {/* Description - Full Width */}
                        <div>
                          <label className="block text-md font-medium text-gray-700 mb-2">
                            Description *
                          </label>
                          <textarea
                            required
                            rows="4"
                            value={productForm.description}
                            onChange={(e) =>
                              setProductForm({
                                ...productForm,
                                description: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                            placeholder="Premium Wireless Bluetooth Headphones with Active Noise Cancellation..."
                          />
                        </div>

                        {/* Images - Full Width */}
                        <div>
                          <label className="block text-md font-medium text-gray-700 mb-2">
                            Images (comma-separated URLs) *
                          </label>
                          <textarea
                            required
                            rows="3"
                            value={productForm.images}
                            onChange={(e) =>
                              setProductForm({
                                ...productForm,
                                images: e.target.value,
                              })
                            }
                            placeholder="https://res.cloudinary.com/image1.jpg, https://res.cloudinary.com/image2.jpg"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                          />
                          <p className="text-sm text-gray-500 mt-2">
                            Add multiple image URLs separated by commas. First image will be the main image.
                          </p>
                        </div>

                        {/* Featured Product Checkbox */}
                        <div className="flex items-center p-4 bg-gradient-to-r from-[#E8A4BC]/10 to-[#F9C449]/10 rounded-xl">
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
                            className="w-5 h-5 text-[#F04393] bg-gray-100 border-gray-300 rounded focus:ring-[#F04393]"
                          />
                          <label htmlFor="featured" className="ml-3 text-md font-medium text-gray-700 flex items-center gap-2">
                            <Star className="w-4 h-4 text-[#F9C449]" />
                            Mark as Featured Product
                          </label>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-4 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 flex items-center gap-3 font-medium cursor-pointer"
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
                              setProductForm({
                                name: "",
                                description: "",
                                price: "",
                                mrp: "",
                                discount: "",
                                rating: "",
                                category: "",
                                images: "",
                                vendor_id: "",
                                stock: "",
                                featured: false,
                              });
                            }}
                            className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  )}

                  {/* Products Table */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white">
                          <tr>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Product
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Category
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Price
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Rating
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Vendor
                            </th>
                            <th className="px-6 py-4 text-right text-md font-medium uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredProducts.map((product, index) => (
                            <tr key={product.id} className="table-row" style={{ animationDelay: `${index * 0.05}s` }}>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-md font-medium text-gray-900">
                                  {product.name}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <span className="px-3 py-1 bg-gradient-to-r from-[#E8A4BC]/20 to-[#F9C449]/20 text-[#F04393] rounded-full text-sm font-medium">
                                  {product.category}
                                </span>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-md font-medium text-gray-900">
                                  ₹{product.price}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-[#F9C449] fill-[#F9C449]" />
                                  <span className="text-md font-medium text-gray-900">
                                    {product.rating || "N/A"}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-md text-gray-600">
                                  {product.vendor_name || "N/A"}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => handleEditProduct(product)}
                                  className="inline-flex items-center cursor-pointer justify-center w-10 h-10 text-blue-600 hover:bg-blue-50 rounded-xl transition-all mr-2"
                                >
                                  <Edit className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="inline-flex items-center cursor-pointer justify-center w-10 h-10 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {filteredProducts.length === 0 && (
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

              {/* Users Tab */}
              {activeTab === "users" && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-4xl font-medium text-gray-900 mb-2">Users Management</h2>
                    <p className="text-gray-600">Manage registered users</p>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search users by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Users Table */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-[#3C4CAD] to-[#2A0B8B] text-white">
                          <tr>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Joined
                            </th>
                            <th className="px-6 py-4 text-right text-md font-medium uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredUsers.map((user, index) => (
                            <tr key={user.id} className="table-row" style={{ animationDelay: `${index * 0.05}s` }}>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-[#3C4CAD] to-[#2A0B8B] rounded-full flex items-center justify-center text-white font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                  </div>
                                  <div className="text-md font-medium text-gray-900">
                                    {user.name}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-sm text-gray-600">
                                  {user.email}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-sm text-gray-600">
                                  {new Date(user.created_at).toLocaleDateString()}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => handleDeleteUser(user.id)}
                                  className="inline-flex items-center justify-center cursor-pointer w-10 h-10 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {filteredUsers.length === 0 && (
                        <div className="text-center py-16">
                          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500 font-semibold text-lg">No users found</p>
                          <p className="text-gray-400 text-sm mt-2">Try adjusting your search</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Vendors Tab */}
              {activeTab === "vendors" && (
                <div className="animate-fade-in">
                  <div className="mb-8">
                    <h2 className="text-4xl font-medium text-gray-900 mb-2">Vendors Management</h2>
                    <p className="text-gray-600">Approve and manage vendor accounts</p>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search vendors by business name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Vendors Table */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-orange-600 to-yellow-500 text-white">

                          <tr>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Business Name
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-6 py-4 text-left text-md font-medium uppercase tracking-wider">
                              Joined
                            </th>
                            <th className="px-6 py-4 text-right text-md font-medium uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredVendors.map((vendor, index) => (
                            <tr key={vendor.id} className="table-row" style={{ animationDelay: `${index * 0.05}s` }}>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-[#F9C449] to-orange-500 rounded-full flex items-center justify-center">
                                    <Store className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="text-md font-medium text-gray-900">
                                    {vendor.business_name || vendor.owner_name}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-sm text-gray-600">
                                  {vendor.email}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                {vendor.is_approved ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-2 border-green-200">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Approved
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 border-2 border-yellow-200">
                                    <XCircle className="w-4 h-4 mr-1" />
                                    Pending
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap">
                                <div className="text-sm text-gray-600">
                                  {new Date(vendor.created_at).toLocaleDateString()}
                                </div>
                              </td>
                              <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium">
                                {!vendor.is_approved ? (
                                  <button
                                    onClick={() => handleApproveVendor(vendor.id, true)}
                                    className="inline-flex items-center justify-center w-10 h-10 text-green-600 hover:bg-green-50 rounded-xl transition-all mr-2"
                                  >
                                    <CheckCircle className="w-5 h-5" />
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => handleApproveVendor(vendor.id, false)}
                                    className="inline-flex items-center justify-center w-10 h-10 text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all mr-2"
                                  >
                                    <XCircle className="w-5 h-5" />
                                  </button>
                                )}
                                <button
                                  onClick={() => handleDeleteVendor(vendor.id)}
                                  className="inline-flex items-center cursor-pointer justify-center w-10 h-10 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {filteredVendors.length === 0 && (
                        <div className="text-center py-16">
                          <Store className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <p className="text-gray-500 font-semibold text-lg">No vendors found</p>
                          <p className="text-gray-400 text-sm mt-2">Try adjusting your search</p>
                        </div>
                      )}
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
