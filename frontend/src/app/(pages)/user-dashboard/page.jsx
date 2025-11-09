"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

function getUserFromLocalStorage() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch {
    return null;
  }
}

export default function UserDashboard() {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [orders, setOrders] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user info on mount
  useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);

  // Fetch user's orders (dummy for now, replace with real API)
  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
        // replace this with your actual backend call
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/orders/my-orders", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.success) setOrders(data.orders);
      } catch {
        setOrders([]);
      }
      setLoading(false);
    }
    if (user) fetchOrders();
  }, [user]);

  // Fetch wishlist (dummy, replace with your real API)
  useEffect(() => {
    async function fetchWishlist() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/wishlist", {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.success) setWishlist(data.wishlist);
      } catch {
        setWishlist([]);
      }
    }
    if (user) fetchWishlist();
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/auth";
  };

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Please log in</h2>
        <Link href="/auth" className="text-rose-500 underline">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl py-10 mx-auto ">
      {/* Profile Block */}
      <div className="bg-white rounded shadow p-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome, {user.name}!</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Orders */}
      <div className="bg-white rounded shadow mb-8 p-6">
        <h3 className="text-xl font-bold mb-4">My Orders</h3>
        {loading ? (
          <div className="text-gray-700 py-10">Loading orders...</div>
        ) : orders.length === 0 ? (
          <div className="text-gray-500">No orders found.</div>
        ) : (
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 text-left">Order #</th>
                <th className="py-2 text-left">Date</th>
                <th className="py-2 text-left">Status</th>
                <th className="py-2 text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={order.id}>
                  <td className="py-2">{order.id || i + 1}</td>
                  <td className="py-2">{order.created_at ? order.created_at.substring(0,10) : "--"}</td>
                  <td className="py-2">{order.status || "Processing"}</td>
                  <td className="py-2">₹{order.total || order.amount || "NA"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Wishlist */}
      <div className="bg-white rounded shadow p-6">
  <h3 className="text-xl font-bold mb-4">My Wishlist</h3>
  {wishlist.length === 0 ? (
    <div className="text-gray-500">No wishlist items yet.</div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow relative"
        >
          <Link
            href={`/accessories/all-products/${item.product_id}`}
            className="block"
          >
            <img
              src={item.img || "/placeholder.jpg"}   // Ensure backend returns img URL or map here
              alt={item.name}
              onError={e => { e.target.src = "/placeholder.jpg"; }}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </Link>
          <div className="p-4">
            <Link href={`/accessories/all-products/${item.product_id}`}>
              <h4 className="font-semibold text-lg hover:text-rose-500">{item.name}</h4>
            </Link>
            {/* Price if available: */}
            {item.price && (
              <div className="mt-2 font-medium text-rose-600 text-lg">
                ₹{item.price}
              </div>
            )}
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
              onClick={async () => {
                const token = localStorage.getItem("token");
                await fetch(`http://localhost:5000/api/wishlist/${item.id}`, {
                  method: "DELETE",
                  headers: { Authorization: `Bearer ${token}` }
                });
                setWishlist(wishlist => wishlist.filter(w => w.id !== item.id));
              }}
              aria-label="Remove from wishlist"
            >
              <Heart className="w-6 h-6 fill-rose-500 text-rose-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

    </div>
  );
}
