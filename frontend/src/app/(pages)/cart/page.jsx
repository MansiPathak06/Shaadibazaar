"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const formatINR = (price) => new Intl.NumberFormat("en-IN", {
    style: "currency", currency: "INR", maximumFractionDigits: 0,
  }).format(price);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto pt-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-gray-600 text-lg py-16 text-center">
          Cart is empty.
        </div>
      ) : (
        <>
          <table className="w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Qty</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{idx + 1}</td>
                  <td className="px-4 py-2">
                    <Link href={`/accessories/all-products/${item.id}`}>
                      <span className="text-rose-500 hover:underline">{item.name}</span>
                    </Link>
                  </td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{formatINR(item.price)}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="w-4 h-4 text-gray-500 hover:text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between px-4 py-6 border-t">
            <span className="font-semibold text-xl">Total: {formatINR(total)}</span>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-5 py-2 rounded shadow hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
          <div className="flex justify-end mt-6">
            <Link href="/checkout">
              <button className="bg-rose-500 text-white px-8 py-3 rounded shadow hover:bg-rose-600">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
