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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-rose-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Admin <span className="text-rose-500">Dashboard</span>
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Notifications */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-700">{success}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="w-64 bg-white rounded-lg shadow-sm p-6">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "dashboard"
                    ? "bg-rose-50 text-rose-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "products"
                    ? "bg-rose-50 text-rose-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Package className="w-5 h-5" />
                Products
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "users"
                    ? "bg-rose-50 text-rose-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Users className="w-5 h-5" />
                Users
              </button>
              <button
                onClick={() => setActiveTab("vendors")}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "vendors"
                    ? "bg-rose-50 text-rose-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Store className="w-5 h-5" />
                Vendors
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Total Products</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                          {stats.totalProducts || 0}
                        </p>
                      </div>
                      <div className="bg-rose-50 p-3 rounded-lg">
                        <Package className="w-6 h-6 text-rose-500" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                          {stats.totalUsers || 0}
                        </p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">Total Vendors</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                          {stats.totalVendors || 0}
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <Store className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">
                          Pending Vendors
                        </p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">
                          {stats.pendingVendors || 0}
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === "products" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Products Management
                  </h2>
                  <div className="flex gap-3">
                    {/* ✅ Bulk Import Button */}
                    <button
                      onClick={() => {
                        setShowBulkImport(!showBulkImport);
                        setShowProductForm(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
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
                      className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      Add Product
                    </button>
                  </div>
                </div>

                {/* ✅ Bulk Import Section */}
                {showBulkImport && (
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4">Bulk Import Products</h3>
                    
                    {/* Download Template */}
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <FileSpreadsheet className="w-5 h-5 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-1">
                            First time using bulk import?
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Download our template to see the required format with example data
                          </p>
                          <button
                            onClick={downloadTemplate}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          >
                            <Download className="w-4 h-4" />
                            Download Template (CSV)
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Excel/CSV File
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          accept=".xlsx,.xls,.csv"
                          onChange={handleExcelUpload}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                        />
                        {excelFile && (
                          <span className="text-sm text-green-600 font-medium flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            {excelFile.name}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Supported formats: .xlsx, .xls, .csv (Max 500 products per file)
                      </p>
                    </div>

                    {/* Import Results */}
                    {importResults && (
                      <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">
                          Import Results
                        </h4>
                        <div className="text-sm text-green-700">
                          <p className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Successfully imported: {importResults.imported} products
                          </p>
                          {importResults.failed > 0 && (
                            <p className="text-red-600 mt-1 flex items-center gap-2">
                              <XCircle className="w-4 h-4" />
                              Failed: {importResults.failed} products
                            </p>
                          )}
                        </div>
                        {importResults.errors && importResults.errors.length > 0 && (
                          <details className="mt-3">
                            <summary className="cursor-pointer text-sm font-medium text-red-600 hover:text-red-700">
                              View Errors ({importResults.errors.length})
                            </summary>
                            <div className="mt-2 text-xs text-red-600 space-y-1 max-h-40 overflow-y-auto">
                              {importResults.errors.map((err, idx) => (
                                <div key={idx} className="p-2 bg-red-50 rounded">
                                  Row {err.row}: {err.name || 'Unknown'} - {err.error}
                                </div>
                              ))}
                            </div>
                          </details>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={handleBulkImport}
                        disabled={!excelFile || importing}
                        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        {importing ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Importing...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
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
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Product Form */}
                {showProductForm && (
  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
    <h3 className="text-lg font-semibold mb-4">
      {editingProduct ? "Edit Product" : "Add New Product"}
    </h3>
    <form onSubmit={handleProductSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="Premium Wireless Headphones"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <select
            required
            value={productForm.category}
            onChange={(e) =>
              setProductForm({
                ...productForm,
                category: e.target.value,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
          >
            <option value="">Select Category</option>
            <option value="jewellery">Jewellery</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="decoration">Decoration</option>
            <option value="catering">Catering</option>
            <option value="photography">Photography</option>
            <option value="venue">Venue</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* MRP (Original Price) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="2999"
          />
        </div>

        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="1999"
          />
        </div>

        {/* Discount Percentage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="33"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="4.5"
          />
        </div>

        {/* Stock Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="100"
          />
        </div>

        {/* Vendor ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
            placeholder="Leave empty for admin products"
          />
        </div>
      </div>

      {/* Description - Full Width */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
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
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
          placeholder="Premium Wireless Bluetooth Headphones with Active Noise Cancellation. High-quality sound, comfortable fit, long battery life."
        />
      </div>

      {/* Images - Full Width */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
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
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
        />
        <p className="text-xs text-gray-500 mt-1">
          Add multiple image URLs separated by commas. First image will be the main image.
        </p>
      </div>

      {/* Featured Product Checkbox */}
      <div className="flex items-center">
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
          className="w-4 h-4 text-rose-600 bg-gray-100 border-gray-300 rounded focus:ring-rose-500"
        />
        <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
          Mark as Featured Product
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
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
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}


                {/* Products Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Product
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rating
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Vendor
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredProducts.map((product) => (
                          <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {product.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {product.category}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                ₹{product.price}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {product.rating || "N/A"}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {product.vendor_name || "N/A"}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleEditProduct(product)}
                                className="text-blue-600 hover:text-blue-900 mr-4"
                              >
                                <Edit className="w-4 h-4 inline" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {filteredProducts.length === 0 && (
                      <div className="text-center py-12">
                        <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No products found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === "users" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Users Management
                </h2>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Joined
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                          <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {user.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {new Date(user.created_at).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleDeleteUser(user.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {filteredUsers.length === 0 && (
                      <div className="text-center py-12">
                        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No users found</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Vendors Tab */}
            {activeTab === "vendors" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vendors Management
                </h2>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search vendors..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Vendors Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Business Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Joined
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredVendors.map((vendor) => (
                          <tr key={vendor.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">
                                {vendor.business_name || vendor.owner_name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {vendor.email}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {vendor.is_approved ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Approved
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  <XCircle className="w-3 h-3 mr-1" />
                                  Pending
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {new Date(
                                  vendor.created_at
                                ).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              {!vendor.is_approved ? (
                                <button
                                  onClick={() =>
                                    handleApproveVendor(vendor.id, true)
                                  }
                                  className="text-green-600 hover:text-green-900 mr-4"
                                >
                                  <CheckCircle className="w-4 h-4 inline" />
                                </button>
                              ) : (
                                <button
                                  onClick={() =>
                                    handleApproveVendor(vendor.id, false)
                                  }
                                  className="text-yellow-600 hover:text-yellow-900 mr-4"
                                >
                                  <XCircle className="w-4 h-4 inline" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteVendor(vendor.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="w-4 h-4 inline" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {filteredVendors.length === 0 && (
                      <div className="text-center py-12">
                        <Store className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500">No vendors found</p>
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
  );
}
