"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function AllProductsClient() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Jewellery";
  const subCategory = searchParams.get("subCategory") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [category, subCategory]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      let url = `http://localhost:5000/api/products?category=${encodeURIComponent(
        category
      )}`;
      if (subCategory)
        url += `&subCategory=${encodeURIComponent(subCategory)}`;
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

  const formatINR = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 capitalize">
            {subCategory ? subCategory : category}
          </h1>
          <p className="text-gray-600 mt-2">{products.length} items</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const images = Array.isArray(product.images)
              ? product.images
              : JSON.parse(product.images || "[]");
            const mainImage = images[0] || "/placeholder.jpg";

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.jpg";
                    }}
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-rose-500 text-white px-2 py-1 rounded-md text-sm font-medium">
                      {product.discount}% OFF
                    </div>
                  )}
                  {product.featured === true && (
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg md:text-2xl font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-normal text-gray-900">
                      {formatINR(product.price)}
                    </span>
                    {product.mrp && product.mrp > product.price && (
                      <span className="text-sm text-gray-500 line-through">
                        {formatINR(product.mrp)}
                      </span>
                    )}
                  </div>

                  {/* Stock Status */}
                  {product.stock !== undefined && (
                    <div className="mb-4">
                      {product.stock > 0 ? (
                        <span className="text-sm text-green-600 font-medium">
                          In Stock ({product.stock} available)
                        </span>
                      ) : (
                        <span className="text-xs text-red-600 font-medium">
                          Out of Stock
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Link
                      href={`/accessories/all-products/${product.id}`}
                      className="flex-1 bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors text-center text-sm font-medium"
                    >
                      Buy Now
                    </Link>
                    <Link
                      href={`/accessories/all-products/${product.id}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <ShoppingCart className="w-5 h-5 text-gray-600" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-600">
              No products available in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
