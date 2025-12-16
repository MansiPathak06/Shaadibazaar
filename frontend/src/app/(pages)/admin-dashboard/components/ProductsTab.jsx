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
  X
} from 'lucide-react';
import { useState } from 'react';

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
  setError
}) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      images: "",
      vendor_id: "",
      stock: "",
      featured: false,
    });
  };

  const categories = [
    'jewellery', 'clothing', 'footwear', 'accessories', 'makeup',
    'menswear', 'kidswear', 'decorations', 'other'
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-4xl font-medium text-gray-900 mb-2">
            Products Management
          </h2>
          <p className="text-gray-600">
            Manage your product catalog
          </p>
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
                subCategory: "",
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

      {/* Bulk Import Section */}
      {showBulkImport && (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 flex items-center gap-3">
              <Upload className="w-6 h-6 text-green-500" />
              Bulk Import Products
            </h3>
            <button
              onClick={() => setShowBulkImport(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

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
                <p className="text-sm text-gray-600 mb-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Upload Excel/CSV File
            </label>
            <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-[#F04393] transition-all duration-300">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleExcelUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  {excelFile ? excelFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-gray-500">
                  Supports: .xlsx, .xls, .csv
                </p>
              </div>
            </div>
          </div>

          {/* Import Button */}
          <button
            onClick={handleBulkImport}
            disabled={!excelFile || importing}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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

          {/* Import Results */}
          {importResults && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-green-700 font-medium">
                ✅ Successfully imported {importResults.imported} products
              </p>
              {importResults.failed > 0 && (
                <p className="text-orange-600 text-sm mt-2">
                  ⚠️ {importResults.failed} products failed to import
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Product Form */}
      {showProductForm && (
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-gray-100 animate-slide-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h3>
            <button
              onClick={resetProductForm}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleProductSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={productForm.name}
                  onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="Enter product name"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={productForm.category}
                  onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                  ))}
                </select>
              </div>

              {/* Sub Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sub Category
                </label>
                <input
                  type="text"
                  name="subCategory"
                  value={productForm.subCategory}
                  onChange={(e) => setProductForm({...productForm, subCategory: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="e.g., Necklace, Ring"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={productForm.price}
                  onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                  required
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>

              {/* MRP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  MRP (₹)
                </label>
                <input
                  type="number"
                  name="mrp"
                  value={productForm.mrp}
                  onChange={(e) => setProductForm({...productForm, mrp: e.target.value})}
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>

              {/* Discount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount (%)
                </label>
                <input
                  type="number"
                  name="discount"
                  value={productForm.discount}
                  onChange={(e) => setProductForm({...productForm, discount: e.target.value})}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  value={productForm.rating}
                  onChange={(e) => setProductForm({...productForm, rating: e.target.value})}
                  min="0"
                  max="5"
                  step="0.1"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="4.5"
                />
              </div>

              {/* Stock */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={productForm.stock}
                  onChange={(e) => setProductForm({...productForm, stock: e.target.value})}
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={productForm.description}
                onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                required
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                placeholder="Enter product description"
              />
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URLs (comma-separated)
              </label>
              <textarea
                name="images"
                value={productForm.images}
                onChange={(e) => setProductForm({...productForm, images: e.target.value})}
                rows="2"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
                placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
              />
            </div>

            {/* Featured Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={productForm.featured}
                onChange={(e) => setProductForm({...productForm, featured: e.target.checked})}
                className="w-5 h-5 text-[#F04393] border-gray-300 rounded focus:ring-[#F04393]"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700 cursor-pointer">
                Mark as Featured Product
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>{editingProduct ? 'Update Product' : 'Add Product'}</>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Rating</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                    No products found
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="table-row hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {product.images && product.images.length > 0 && (
                          <img
                            src={Array.isArray(product.images) ? product.images[0] : product.images}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/48';
                            }}
                          />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{product.name}</p>
                          {product.featured && (
                            <span className="inline-flex items-center gap-1 text-xs text-yellow-600">
                              <Star className="w-3 h-3 fill-current" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {product.category}
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">₹{product.price}</p>
                        {product.mrp && product.mrp > product.price && (
                          <p className="text-xs text-gray-500 line-through">₹{product.mrp}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.stock > 10 
                          ? 'bg-green-100 text-green-700' 
                          : product.stock > 0 
                          ? 'bg-yellow-100 text-yellow-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.stock || 0}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-700">{product.rating || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors group"
                          title="Edit"
                        >
                          <Edit className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
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
