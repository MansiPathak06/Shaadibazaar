"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Truck, Shield, RefreshCw, ChevronLeft, Check, Sparkles } from "lucide-react";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const [similarProducts, setSimilarProducts] = useState([]);
  const [loadingSimilar, setLoadingSimilar] = useState(true);

  // For Wishlist
  const [wishlistLoading, setWishlistLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const isUserLoggedIn = () => !!localStorage.getItem("token");

  // Fetch product details
  useEffect(() => {
    async function fetchProductDetails() {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/products/${productId}`
        );
        const data = await response.json();
        if (data.success) setProduct(data.product);
        else setError(data.message);
      } catch {
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    }
    if (productId) fetchProductDetails();
  }, [productId]);

  // Fetch similar products
  useEffect(() => {
    async function fetchSimilarProducts() {
      try {
        setLoadingSimilar(true);
        const resp = await fetch(
          `http://localhost:5000/api/products/similar/${productId}`
        );
        const data = await resp.json();
        if (data.success && Array.isArray(data.products)) {
          const shuffled = data.products.sort(() => 0.5 - Math.random());
          setSimilarProducts(shuffled.slice(0, 4));
        } else setSimilarProducts([]);
      } catch {
        setSimilarProducts([]);
      } finally {
        setLoadingSimilar(false);
      }
    }
    if (productId) fetchSimilarProducts();
  }, [productId]);

  // Check wishlist status
  useEffect(() => {
    async function fetchWishlistStatus() {
      if (!isUserLoggedIn()) {
        setIsWishlisted(false);
        return;
      }
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setIsWishlisted(
          data.wishlist.some(
            (item) =>
              item.product_id === productId || item.product_id === product?.id
          )
        );
      }
    }
    if (product && productId) fetchWishlistStatus();
  }, [productId, product]);

  // Cart logic
  const handleQuantityChange = (action) => {
    if (action === "increase" && quantity < (product?.stock || 100))
      setQuantity(quantity + 1);
    else if (action === "decrease" && quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (!isUserLoggedIn()) return setShowLoginModal(true);
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    if (!isUserLoggedIn()) return setShowLoginModal(true);
    addToCart(product, quantity);
    router.push(`/checkout?product=${productId}&quantity=${quantity}`);
  };

  // Wishlist Add/Remove
  const handleWishlistToggle = async () => {
    if (!isUserLoggedIn()) {
      setShowLoginModal(true);
      return;
    }
    setWishlistLoading(true);
    const token = localStorage.getItem("token");
    if (!isWishlisted) {
      await fetch("http://localhost:5000/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: product.id }),
      });
      setIsWishlisted(true);
    } else {
      const res = await fetch("http://localhost:5000/api/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const d = await res.json();
      const item = d.wishlist.find((item) => item.product_id === product.id);
      if (item) {
        await fetch(`http://localhost:5000/api/wishlist/${item.id}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsWishlisted(false);
      }
    }
    setWishlistLoading(false);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 animate-pulse" size={24} />
        </div>
      </div>
    );

  if (error || !product)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="text-6xl mb-4 animate-bounce">😞</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          {error || "This product does not exist"}
        </p>
        <Link
          href="/accessories/all-products?category=jewellery"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Back to Products
        </Link>
      </div>
    );

  const images = Array.isArray(product.images)
    ? product.images
    : JSON.parse(product.images || "[]");
  const discount =
    product.mrp && product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : product.discount || 0;

  const formatINR = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-4 duration-700">
          <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href={`/accessories/all-products?category=${product.category}`}
            className="text-gray-600 hover:text-purple-600 transition-colors capitalize"
          >
            {product.category}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium truncate max-w-xs">
            {product.name}
          </span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 animate-in fade-in zoom-in-95 duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Left Side - Images */}
            <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
              {/* Main Image */}
              <div className="relative aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl overflow-hidden group">
                <img
                  src={images[selectedImage] || images[0] || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "/placeholder.jpg";
                  }}
                />
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                    {discount}% OFF
                  </div>
                )}
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Sparkles size={16} className="animate-pulse" />
                    FEATURED
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-xl overflow-hidden border-3 transition-all duration-300 hover:scale-105 ${selectedImage === index
                        ? "border-purple-500 shadow-lg shadow-purple-200 ring-2 ring-purple-300"
                        : "border-gray-200 hover:border-purple-300"
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
              {/* Product Name */}
              <div>
                <h1 className="text-3xl md:text-5xl font-medium bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm md:text-lg text-gray-500 capitalize flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  Category: {product.category}
                </p>
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1.5 rounded-full shadow-lg">
                    <span className="font-medium ">{product.rating}</span>
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <span className="text-md text-gray-600">
                    ({Math.floor(Math.random() * 1000) + 100} ratings)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="border-t border-b border-purple-100 py-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl px-4">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {formatINR(product.price)}
                  </span>
                  {product.mrp && product.mrp > product.price && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        {formatINR(product.mrp)}
                      </span>
                      <span className="text-lg md:text-xl text-green-600 font-normal flex items-center gap-1">
                        <Sparkles size={16} />
                        {discount}% off
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-600">Inclusive of all taxes</p>
              </div>

              {/* Stock Status */}
              <div>
                {product.stock > 0 ? (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200">
                    <Check className="w-5 h-5 animate-pulse" />
                    <span className="font-medium text-base">
                      In Stock ({product.stock} available)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                    <span className="font-medium">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              {product.stock > 0 && (
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="w-12 h-12 rounded-full border-2 cursor-pointer border-purple-300 flex items-center justify-center hover:bg-purple-50 hover:border-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-5 h-5 text-purple-600" />
                    </button>
                    <span className="text-2xl font-bold w-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="w-12 h-12 rounded-full border-2 cursor-pointer border-purple-300 flex items-center justify-center hover:bg-purple-50 hover:border-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 active:scale-95"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="w-5 h-5 text-purple-600" />
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="group relative w-full cursor-pointer text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-4 rounded-xl font-medium transition-all duration-500 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <ShoppingCart className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Buy Now</span>
                </button>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="group w-full bg-white cursor-pointer text-purple-600 border-2 text-xl border-purple-500 py-4 rounded-xl font-medium hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1"
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5 animate-bounce" />
                      <span className="bg-gradient-to-r cursor-pointer from-purple-600 to-pink-600 bg-clip-text text-transparent">Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 group-hover:animate-pulse" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex gap-4 pt-4 border-t border-purple-100">
                <button
                  className="group flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-all duration-300 hover:scale-105"
                  onClick={handleWishlistToggle}
                  disabled={wishlistLoading}
                  aria-label={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                >
                  <Heart
                    className={`w-6 h-6 transition-all duration-300 ${isWishlisted
                      ? "fill-pink-500 text-pink-500 animate-pulse"
                      : "group-hover:fill-pink-100"
                      }`}
                  />
                  <span className="font-medium">{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
                </button>

                <button className="group flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-105">
                  <Share2 className="w-6 h-6 group-hover:animate-pulse" />
                  <span className="font-medium">Share</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {/* Free Shipping Badge */}
                <div className="group relative flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                  {/* Icon with animation */}
                  <div className="relative z-10 mb-2 p-2 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Truck className="w-6 h-6 text-purple-600 group-hover:text-pink-600 transition-colors duration-300 group-hover:animate-bounce" />
                  </div>

                  {/* Text */}
                  <span className="relative z-10 text-sm text-gray-700 text-center font-normal group-hover:text-purple-700 transition-colors duration-300">
                    Free Shipping
                  </span>

                  {/* Sparkle effect on hover */}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="w-3 h-3 text-yellow-400 animate-pulse" />
                  </div>
                </div>

                {/* Secure Payment Badge */}
                <div className="group relative flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                  {/* Icon with animation */}
                  <div className="relative z-10 mb-2 p-2 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <Shield className="w-6 h-6 text-purple-600 group-hover:text-pink-600 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </div>

                  {/* Text */}
                  <span className="relative z-10 text-sm text-gray-700 text-center font-normal group-hover:text-purple-700 transition-colors duration-300">
                    Secure Payment
                  </span>

                  {/* Check mark on hover */}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Check className="w-3 h-3 text-green-500 animate-pulse" />
                  </div>
                </div>

                {/* Easy Returns Badge */}
                <div className="group relative flex flex-col items-center p-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-1">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>

                  {/* Icon with animation */}
                  <div className="relative z-10 mb-2 p-2 bg-white rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <RefreshCw className="w-6 h-6 text-purple-600 group-hover:text-pink-600 transition-colors duration-300 group-hover:rotate-180" />
                  </div>

                  {/* Text */}
                  <span className="relative z-10 text-sm text-gray-700 text-center font-normal group-hover:text-purple-700 transition-colors duration-300">
                    Easy Returns
                  </span>

                  {/* Circular pulse on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-purple-400 scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>


              {/* Modal for Not Logged In */}
              {showLoginModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-200">
                  <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 text-center animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Login Required</h2>
                    <p className="text-gray-600 mb-6">Please login to continue</p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          setShowLoginModal(false);
                          router.push("/auth");
                        }}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Go to Login
                      </button>
                      <button
                        onClick={() => setShowLoginModal(false)}
                        className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Description */}
          <div className="border-t border-purple-100 p-6 lg:p-8 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
            <h2 className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 flex items-center gap-2">
              <Sparkles className="text-purple-600" size={24} />
              Product Description
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="border-t border-purple-100 p-6 lg:p-8">
            <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl  text-gray-600 block mb-1">Product ID</span>
                <p className="font-medium text-lg text-gray-900">#{product.id}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl text-gray-600 block mb-1">Category</span>
                <p className="font-medium text-lg text-gray-900 capitalize">
                  {product.category}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl text-gray-600 block mb-1">Rating</span>
                <p className="font-medium text-lg text-gray-900 flex items-center gap-1">
                  {product.rating || "Not rated yet"}
                  {product.rating && <Star size={16} className="text-amber-400 fill-amber-400" />}
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <span className="text-xl text-gray-600 block mb-1">Availability</span>
                <p className="font-medium text-lg text-gray-900">
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-8 flex items-center gap-2">
            <Sparkles className="text-purple-600" />
            Similar Products
          </h2>
          {loadingSimilar ? (
            <div className="flex justify-center items-center py-16">
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-500"></div>
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 animate-pulse" size={20} />
              </div>
            </div>
          ) : similarProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similarProducts.map((sp, index) => {
                const images = Array.isArray(sp.images)
                  ? sp.images
                  : JSON.parse(sp.images || "[]");
                const img = images[0] || "/placeholder.jpg";
                return (
                  <Link
                    key={sp.id}
                    href={`/accessories/all-products/${sp.id}`}
                    className="group block bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-white/20 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden relative">
                      <img
                        src={img}
                        alt={sp.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-2xl font-medium text-gray-800 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
                        {sp.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-2">
                        <Star
                          size={14}
                          className="text-amber-400 fill-amber-400"
                        />
                        <span className="text-lg text-gray-600 font-medium">
                          {sp.rating || "4.5"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {formatINR(sp.price)}
                        </span>
                        {sp.mrp && sp.mrp > sp.price && (
                          <span className="text-lg text-gray-400 line-through">
                            {formatINR(sp.mrp)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-gray-500 text-center py-12 bg-white/50 rounded-2xl">
              No similar products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
