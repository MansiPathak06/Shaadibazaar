"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Minus,
  Plus,
  Truck,
  Shield,
  RefreshCw,
  ChevronLeft,
  Check,
} from "lucide-react";

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

  // Check wishlist status (always top-level useEffect)
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
      // Add to wishlist
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
      // Remove from wishlist
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
      </div>
    );

  if (error || !product)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-6xl mb-4">😞</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Product Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          {error || "This product does not exist"}
        </p>
        <Link
          href="/accessories/all-products?category=jewellery"
          className="px-6 py-3 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-rose-500">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href={`/accessories/all-products?category=${product.category}`}
            className="text-gray-600 hover:text-rose-500 capitalize"
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
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Left Side - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={images[selectedImage] || images[0] || "/placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.jpg";
                  }}
                />
                {discount > 0 && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {discount}% OFF
                  </div>
                )}
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    ⭐ FEATURED
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
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-rose-500"
                          : "border-gray-200 hover:border-gray-300"
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
            <div className="space-y-6">
              {/* Product Name */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-sm text-gray-500 capitalize">
                  Category: {product.category}
                </p>
              </div>

              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded">
                    <span className="font-semibold">{product.rating}</span>
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                  <span className="text-sm text-gray-600">
                    ({Math.floor(Math.random() * 1000) + 100} ratings)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-4">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatINR(product.price)}
                  </span>
                  {product.mrp && product.mrp > product.price && (
                    <>
                      <span className="text-xl text-gray-500 line-through">
                        {formatINR(product.mrp)}
                      </span>
                      <span className="text-lg text-green-600 font-semibold">
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
                  <div className="flex items-center gap-2 text-green-600">
                    <Check className="w-5 h-5" />
                    <span className="font-medium">
                      In Stock ({product.stock} available)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600">
                    <span className="font-medium">Out of Stock</span>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              {product.stock > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange("decrease")}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange("increase")}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                  className="w-full bg-rose-500 text-white py-4 rounded-lg font-semibold hover:bg-rose-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full bg-white text-rose-500 border-2 border-rose-500 py-4 rounded-lg font-semibold hover:bg-rose-50 transition-colors disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>

              {/* Additional Actions (Wishlist/Share) */}
              <div className="flex gap-4 pt-4">
                <button
                  className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors"
                  onClick={handleWishlistToggle}
                  disabled={wishlistLoading}
                  aria-label={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                >
                  <Heart
                    className={`w-5 h-5 transition ${
                      isWishlisted
                        ? "fill-rose-500 text-rose-500"
                        : "stroke-rose-500"
                    }`}
                  />
                  <span>{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
                </button>

                <button className="flex items-center gap-2 text-gray-600 hover:text-rose-500 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>

              {/* Modal for Not Logged In */}
              {showLoginModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                  <div className="bg-white p-8 rounded shadow max-w-sm w-full text-center">
                    <h2 className="text-xl font-bold mb-4">Login Required</h2>
                    <p className="mb-6">Please login to add to wishlist.</p>
                    <button
                      onClick={() => {
                        setShowLoginModal(false);
                        router.push("/auth");
                      }}
                      className="bg-rose-500 text-white px-6 py-2 rounded"
                    >
                      Go to Login
                    </button>
                    <button
                      onClick={() => setShowLoginModal(false)}
                      className="text-gray-500 ml-4"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Description */}
          <div className="border-t border-gray-200 p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Product Description
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="border-t border-gray-200 p-6 lg:p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <span className="text-sm text-gray-600">Product ID</span>
                <p className="font-semibold text-gray-900">#{product.id}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <span className="text-sm text-gray-600">Category</span>
                <p className="font-semibold text-gray-900 capitalize">
                  {product.category}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <span className="text-sm text-gray-600">Rating</span>
                <p className="font-semibold text-gray-900">
                  {product.rating || "Not rated yet"}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <span className="text-sm text-gray-600">Availability</span>
                <p className="font-semibold text-gray-900">
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="max-w-7xl mx-auto mt-16 px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Similar Products
          </h2>
          {loadingSimilar ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-rose-500"></div>
            </div>
          ) : similarProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {similarProducts.map((sp) => {
                const images = Array.isArray(sp.images)
                  ? sp.images
                  : JSON.parse(sp.images || "[]");
                const img = images[0] || "/placeholder.jpg";
                return (
                  <Link
                    key={sp.id}
                    href={`/accessories/all-products/${sp.id}`}
                    className="block bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-200 cursor-pointer group"
                  >
                    <div className="aspect-[4/5] bg-gray-50 rounded-t-lg overflow-hidden">
                      <img
                        src={img}
                        alt={sp.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "/placeholder.jpg";
                        }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-medium text-gray-800 mb-2 line-clamp-1">
                        {sp.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-1">
                        <Star
                          size={14}
                          className="text-amber-400 fill-amber-400"
                        />
                        <span className="text-sm text-gray-600">
                          {sp.rating || "4.5"}
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {formatINR(sp.price)}
                      </span>
                      {sp.mrp && sp.mrp > sp.price && (
                        <span className="text-xs ml-2 text-gray-400 line-through">
                          {formatINR(sp.mrp)}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-gray-500 text-center">
              No similar products found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
