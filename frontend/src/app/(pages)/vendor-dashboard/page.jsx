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
  XCircle
} from "lucide-react";

export default function VendorDashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
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

  // Load vendor products
  useEffect(() => {
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

  // Product form handlers
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); setSuccess("");
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
        setProductForm({ name: "", description: "", price: "", mrp: "", discount: "", rating: "", category: "", images: "", stock: "", featured: false, });
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

  // Bulk import (Excel/CSV)
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","text/csv"].includes(file.type)) {
      setError("Upload a valid Excel or CSV file.");
      return;
    }
    setExcelFile(file);
    setError("");
  };

  const handleBulkImport = async () => {
    if (!excelFile) return setError("Select file first.");
    setImporting(true); setError(""); setSuccess("");
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
        } finally { setImporting(false); }
      };
      reader.readAsArrayBuffer(excelFile);
    } catch (err) {
      setError("Bulk import error.");
      setImporting(false);
    }
  };

  const downloadTemplate = () => {
    const templateData = [{
      name: "Gold Necklace", description: "Beautiful necklace", price: 25000, mrp: 29000, discount: 14, rating: 4.6, category: "jewellery", images: "https://link1.jpg, https://link2.jpg", stock: 30, featured: 1
    }];
    const headers = Object.keys(templateData[0]).join(",");
    const rows = templateData.map(row => Object.values(row).map(v => `"${v}"`).join(",")).join("\n");
    const csv = headers + "\n" + rows;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "vendor_products_template.csv";
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); window.URL.revokeObjectURL(url);
  };

  // Only products added by THIS vendor
  const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900">
            Vendor <span className="text-rose-500">Dashboard</span>
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {error && (<div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
          <p className="text-red-700">{error}</p>
        </div>
      </div>)}
      {success && (<div className="max-w-4xl mx-auto px-4 mt-4">
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <p className="text-green-700">{success}</p>
        </div>
      </div>)}

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Your Products</h2>
          <div className="flex gap-3">
            <button
              onClick={() => { setShowBulkImport(!showBulkImport); setShowProductForm(false); }}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              <Upload className="w-4 h-4" /> Bulk Import
            </button>
            <button
              onClick={() => { setShowProductForm(!showProductForm); setShowBulkImport(false); setEditingProduct(null); setProductForm({ name: "", description: "", price: "", mrp: "", discount: "", rating: "", category: "", images: "", stock: "", featured: false }); }}
              className="flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </div>

        {showBulkImport && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Bulk Import</h3>
            <div className="mb-4">
              <button
                onClick={downloadTemplate}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
              >
                <Download className="w-4 h-4" />
                Download Template (CSV)
              </button>
            </div>
            <div className="mb-3">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleExcelUpload}
                className="py-2"
              />
              {excelFile && (
                <span className="text-sm text-green-600 font-medium ml-3">✓ {excelFile.name}</span>
              )}
            </div>
            <button
              onClick={handleBulkImport}
              disabled={!excelFile || importing}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 flex gap-2"
            >
              {importing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              Import Products
            </button>
            {importResults && (
              <div className="mt-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-800">
                  Imported: {importResults.imported}<br />
                  Failed: {importResults.failed}
                </div>
                {importResults.errors?.length > 0 && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-red-700">
                      View Errors
                    </summary>
                    <ul className="text-xs mt-1">
                      {importResults.errors.map((err, i) => (
                        <li key={i} className="mb-1">Row {err.row}: {err.error}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}
          </div>
        )}

        {showProductForm && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">{editingProduct ? "Edit Product" : "Add New Product"}</h3>
            <form onSubmit={handleProductSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required value={productForm.name} onChange={e => setProductForm({ ...productForm, name: e.target.value })} placeholder="Product Name" className="w-full px-3 py-2 border rounded-lg" />
                <input type="text" required value={productForm.category} onChange={e => setProductForm({ ...productForm, category: e.target.value })} placeholder="Category" className="w-full px-3 py-2 border rounded-lg" />
                <input type="number" required value={productForm.mrp} onChange={e => setProductForm({ ...productForm, mrp: e.target.value })} placeholder="MRP" className="w-full px-3 py-2 border rounded-lg" />
                <input type="number" required value={productForm.price} onChange={e => setProductForm({ ...productForm, price: e.target.value })} placeholder="Price" className="w-full px-3 py-2 border rounded-lg" />
                <input type="number" min="0" max="100" value={productForm.discount} onChange={e => setProductForm({ ...productForm, discount: e.target.value })} placeholder="Discount (%)" className="w-full px-3 py-2 border rounded-lg" />
                <input type="number" min="0" max="5" step="0.1" value={productForm.rating} onChange={e => setProductForm({ ...productForm, rating: e.target.value })} placeholder="Rating (0-5)" className="w-full px-3 py-2 border rounded-lg" />
                <input type="number" value={productForm.stock} onChange={e => setProductForm({ ...productForm, stock: e.target.value })} placeholder="Stock" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <input type="text" value={productForm.images} onChange={e => setProductForm({ ...productForm, images: e.target.value })} placeholder="Images (comma separated URLs)" className="w-full px-3 py-2 border rounded-lg" />
              <textarea required rows={3} value={productForm.description} onChange={e => setProductForm({ ...productForm, description: e.target.value })} placeholder="Product Description" className="w-full px-3 py-2 border rounded-lg" />
              <div>
                <label>
                  <input type="checkbox" checked={productForm.featured} onChange={e => setProductForm({ ...productForm, featured: e.target.checked })} className="mr-2" />
                  Mark as Featured Product
                </label>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="px-6 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600" disabled={loading}>{loading ? "Saving..." : "Save Product"}</button>
                <button type="button" className="px-6 py-2 bg-gray-200" onClick={() => { setShowProductForm(false); setEditingProduct(null); }}>Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search your products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Category</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Price</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(loading ? Array(3).fill({}) : filteredProducts).map((p, idx) => (
                <tr key={p.id || idx}>
                  <td className="px-4 py-2">{p.name || <Loader2 className="w-4 h-4 animate-spin" />}</td>
                  <td className="px-4 py-2">{p.category}</td>
                  <td className="px-4 py-2">₹{p.price}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEditProduct(p)} className="text-blue-600 hover:text-blue-900 mr-3"><Edit className="w-4 h-4 inline" /></button>
                    <button onClick={() => handleDeleteProduct(p.id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4 inline" /></button>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && !loading && (
                <tr>
                  <td colSpan={4} className="text-center py-8 text-gray-500">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
