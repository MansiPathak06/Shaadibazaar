"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  ArrowRight, 
  Tag,
  Truck,
  Package,
  Home,
  ChevronRight
} from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const formatINR = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const shipping = subtotal > 0 ? 100 : 0;
  const taxes = subtotal > 0 ? subtotal * 0.05 : 0;
  const discount = subtotal > 5000 ? 500 : 0;
  const total = subtotal + shipping + taxes - discount;

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    if (updateQuantity) {
      updateQuantity(itemId, newQuantity);
    }
  };

  // Get first image from item
  const getProductImage = (item) => {
    if (item.images && Array.isArray(item.images) && item.images.length > 0) {
      return item.images[0];
    }
    if (item.images && typeof item.images === 'string') {
      return item.images.split(',')[0].trim();
    }
    if (item.image) {
      return item.image;
    }
    return null;
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }

        .cart-item {
          transition: all 0.3s ease;
        }

        .cart-item:hover {
          background: linear-gradient(90deg, rgba(66, 43, 107, 0.02) 0%, rgba(184, 70, 142, 0.02) 100%);
          transform: translateX(5px);
        }

        .product-image {
          transition: transform 0.3s ease;
        }

        .product-image:hover {
          transform: scale(1.05);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-[#E1CBDE]/20 via-white to-[#A1AEF4]/10">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-[#422B6B] transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#422B6B] font-semibold">Shopping Cart</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#422B6B] to-[#B4468E] bg-clip-text text-transparent mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-20 animate-fade-in-up">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#A1AEF4]/20 to-[#E1CBDE]/20 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-16 h-16 text-[#422B6B]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add items to get started with your shopping</p>
              <Link href="/accessories/all-products">
                <button className="px-8 py-4 bg-gradient-to-r from-[#422B6B] to-[#B4468E] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center gap-2 mx-auto">
                  Start Shopping
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* Table Header */}
                <div className="bg-gradient-to-r from-[#422B6B] to-[#B4468E] text-white rounded-t-2xl px-6 py-4 hidden md:grid md:grid-cols-12 gap-4 font-semibold text-sm">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>

                {/* Cart Items */}
                <div className="bg-white rounded-b-2xl md:rounded-t-none rounded-2xl shadow-lg overflow-hidden">
                  {cartItems.map((item, idx) => {
                    const productImage = getProductImage(item);
                    
                    return (
                      <div
                        key={item.id}
                        className="cart-item border-b border-gray-100 last:border-b-0 p-4 md:p-6"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        {/* Mobile Layout */}
                        <div className="md:hidden space-y-4">
                          <div className="flex gap-4">
                            {/* Product Image - Mobile */}
                            <div className="w-20 h-20 bg-gradient-to-br from-[#A1AEF4]/10 to-[#E1CBDE]/10 rounded-xl overflow-hidden flex-shrink-0 relative">
                              {productImage ? (
                                <img
                                  src={productImage}
                                  alt={item.name}
                                  className="w-full h-full object-cover product-image"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div>';
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Package className="w-8 h-8 text-[#422B6B]" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/accessories/all-products/${item.id}`}>
                                <h3 className="font-semibold text-gray-900 hover:text-[#422B6B] transition-colors mb-1 line-clamp-2">
                                  {item.name}
                                </h3>
                              </Link>
                              <p className="text-sm text-gray-500">{item.category || "Product"}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 hover:bg-red-50 rounded-lg transition-colors h-fit"
                            >
                              <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-600" />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-[#422B6B] hover:text-white transition-all shadow-sm"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-semibold text-gray-900 w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-[#422B6B] hover:text-white transition-all shadow-sm"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">
                                {formatINR(item.price)} × {item.quantity}
                              </p>
                              <p className="text-lg font-bold text-[#422B6B]">
                                {formatINR(item.price * item.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                          <div className="col-span-6 flex items-center gap-4">
                            {/* Product Image - Desktop */}
                            <div className="w-24 h-24 bg-gradient-to-br from-[#A1AEF4]/10 to-[#E1CBDE]/10 rounded-xl overflow-hidden flex-shrink-0 relative">
                              {productImage ? (
                                <img
                                  src={productImage}
                                  alt={item.name}
                                  className="w-full h-full object-cover product-image"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></div>';
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Package className="w-10 h-10 text-[#422B6B]" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <Link href={`/accessories/all-products/${item.id}`}>
                                <h3 className="font-semibold text-gray-900 hover:text-[#422B6B] transition-colors mb-1 line-clamp-2">
                                  {item.name}
                                </h3>
                              </Link>
                              <p className="text-sm text-gray-500">{item.category || "Product"}</p>
                            </div>
                          </div>

                          <div className="col-span-2 text-center">
                            <p className="font-semibold text-gray-900">{formatINR(item.price)}</p>
                          </div>

                          <div className="col-span-2 flex justify-center">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-[#422B6B] hover:text-white transition-all shadow-sm"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-semibold text-gray-900 w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:bg-[#422B6B] hover:text-white transition-all shadow-sm"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="col-span-1 text-right">
                            <p className="text-lg font-bold text-[#422B6B]">
                              {formatINR(item.price * item.quantity)}
                            </p>
                          </div>

                          <div className="col-span-1 flex justify-end">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Clear Cart Button */}
                <div className="flex justify-end animate-fade-in-up">
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-red-200 text-red-600 rounded-xl hover:bg-red-50 hover:border-red-300 transition-all font-semibold"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </button>
                </div>
              </div>

              {/* Order Summary - Same as before */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 animate-slide-in">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Items ({cartItems.length})</span>
                      <span className="font-semibold">{formatINR(subtotal)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <span>Shipping</span>
                      </div>
                      <span className="font-semibold">{formatINR(shipping)}</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Taxes (5%)</span>
                      <span className="font-semibold">{formatINR(taxes)}</span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>Discount</span>
                        </div>
                        <span className="font-semibold">-{formatINR(discount)}</span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#422B6B] to-[#B4468E] bg-clip-text text-transparent">
                          {formatINR(total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Code */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-[#A1AEF4]/10 to-[#E1CBDE]/10 rounded-xl">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Have a coupon code?
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#422B6B] focus:border-transparent transition-all"
                      />
                      <button className="px-4 py-2 bg-gradient-to-r from-[#422B6B] to-[#B4468E] text-white rounded-lg hover:shadow-lg transition-all font-semibold whitespace-nowrap">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Link href="/checkout">
                    <button className="w-full bg-gradient-to-r from-[#422B6B] to-[#B4468E] text-white py-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold flex items-center justify-center gap-2 text-lg">
                      Proceed to Checkout
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>

                  {/* Continue Shopping */}
                  <Link href="/accessories/all-products">
                    <button className="w-full mt-3 border-2 border-[#422B6B] text-[#422B6B] py-3 rounded-xl hover:bg-[#422B6B] hover:text-white transition-all duration-300 font-semibold">
                      Continue Shopping
                    </button>
                  </Link>

                  {/* Trust Badges */}
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Truck className="w-4 h-4 text-green-600" />
                      </div>
                      <span>Free shipping on orders over ₹5,000</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Package className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Secure packaging & delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
