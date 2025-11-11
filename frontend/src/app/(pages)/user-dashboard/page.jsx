"use client";
import React, { useEffect, useState } from "react";
import { Heart, Package, TrendingUp, Clock, ShoppingBag, MapPin, Star, ChevronRight, LogOut, User, Calendar, BarChart3, Activity, CreditCard, Truck, CheckCircle, Sparkles } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("overview");
  const [animateStats, setAnimateStats] = useState(false);

  // Stats calculations
  const totalSpent = orders.reduce((sum, order) => sum + (order.total || order.amount || 0), 0);
  const completedOrders = orders.filter(o => o.status === "Delivered" || o.status === "Completed").length;
  const pendingOrders = orders.filter(o => o.status === "Processing" || o.status === "Pending").length;
  const shippedOrders = orders.filter(o => o.status === "Shipped").length;

  // Calculate weekly activity data with dynamic today detection
  const getTodayIndex = () => {
    return new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  };

  const weeklyActivity = [
    { day: "Mon", orders: 2, dayIndex: 1 },
    { day: "Tue", orders: 5, dayIndex: 2 },
    { day: "Wed", orders: 3, dayIndex: 3 },
    { day: "Thu", orders: 7, dayIndex: 4 },
    { day: "Fri", orders: 4, dayIndex: 5 },
    { day: "Sat", orders: 6, dayIndex: 6 },
    { day: "Sun", orders: 3, dayIndex: 0 }
  ];

  const todayIndex = getTodayIndex();
  const satisfactionScore = orders.length > 0 ? Math.round((completedOrders / orders.length) * 100) : 0;

  useEffect(() => {
    setUser(getUserFromLocalStorage());
    // Trigger animation after mount
    setTimeout(() => setAnimateStats(true), 100);
  }, []);

  useEffect(() => {
    async function fetchOrders() {
      setLoading(true);
      try {
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#58094F] via-[#841E62] to-[#2A445E] animate-gradient">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center max-w-md transform animate-fadeInUp">
          <div className="w-24 h-24 bg-gradient-to-br from-[#58094F] to-[#841E62] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[#2A445E]">Please log in</h2>
          <p className="text-gray-600 mb-6">Access your personalized dashboard</p>
          <a href="/auth" className="inline-block bg-gradient-to-r from-[#841E62] to-[#F3AA20] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#58094F]/10 via-white to-[#346B6D]/10 pb-16">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#F3AA20]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#841E62]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-[#346B6D]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header Section with Profile */}
      <div className="relative bg-gradient-to-r from-[#58094F] via-[#841E62] to-[#2A445E] text-white pt-8 pb-32 px-6 overflow-hidden">
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-6 animate-fadeInLeft">
              {/* Profile Photo Section with Animation */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F3AA20] to-[#841E62] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative w-32 h-32 rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <img 
                    src={user.profilePhoto || "/api/placeholder/128/128"} 
                    alt={user.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&size=128&background=F3AA20&color=58094F&bold=true`;
                    }}
                  />
                </div>
                {/* Animated Status Badge */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#F3AA20] rounded-full border-4 border-white/30 animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#F3AA20] rounded-full border-4 border-white/30"></div>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2 animate-fadeIn">Welcome back, {user.name}! 👋</h1>
                <p className="text-[#F3AA20] text-lg mb-1 animate-fadeIn" style={{ animationDelay: '0.1s' }}>{user.email}</p>
                <div className="flex items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <Sparkles className="w-4 h-4 text-[#F3AA20] animate-pulse" />
                  <p className="text-white text-sm font-semibold">Premium Member</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center gap-2 font-semibold transform hover:scale-105 duration-300 animate-fadeInRight"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

          {/* Enhanced Stats Grid with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Orders */}
            <div 
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group cursor-pointer transform hover:-translate-y-2 duration-300 ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#841E62] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#841E62] to-[#58094F] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold block animate-countUp">{orders.length}</span>
                  <span className="text-xs text-white/70">+{orders.length > 5 ? orders.length - 5 : 0} this month</span>
                </div>
              </div>
              <p className="text-white/90 font-semibold">Total Orders</p>
              <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F3AA20] to-[#841E62] rounded-full animate-slideRight" style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Completed Orders */}
            <div 
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group cursor-pointer transform hover:-translate-y-2 duration-300 ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#F3AA20] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#F3AA20] to-[#F3AA20]/70 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold block animate-countUp">{completedOrders}</span>
                  <span className="text-xs text-white/70">{satisfactionScore}% success</span>
                </div>
              </div>
              <p className="text-white/90 font-semibold">Completed</p>
              <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F3AA20] to-[#F3AA20]/70 rounded-full animate-slideRight" style={{ width: `${satisfactionScore}%`, animationDelay: '0.3s' }}></div>
              </div>
            </div>

            {/* Total Spent */}
            <div 
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group cursor-pointer transform hover:-translate-y-2 duration-300 ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#346B6D] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#346B6D] to-[#2A445E] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold block animate-countUp">₹{totalSpent > 100000 ? `${(totalSpent/100000).toFixed(1)}L` : totalSpent > 1000 ? `${(totalSpent/1000).toFixed(1)}k` : totalSpent}</span>
                  <span className="text-xs text-white/70">lifetime value</span>
                </div>
              </div>
              <p className="text-white/90 font-semibold">Total Spent</p>
              <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#346B6D] to-[#2A445E] rounded-full animate-slideRight" style={{ width: '85%', animationDelay: '0.5s' }}></div>
              </div>
            </div>

            {/* Wishlist Items */}
            <div 
              className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all group cursor-pointer transform hover:-translate-y-2 duration-300 ${animateStats ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#841E62] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-[#841E62] to-[#58094F] rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Heart className="w-7 h-7 text-white animate-pulse" />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-bold block animate-countUp">{wishlist.length}</span>
                  <span className="text-xs text-white/70">saved items</span>
                </div>
              </div>
              <p className="text-white/90 font-semibold">Wishlist</p>
              <div className="mt-2 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#841E62] to-[#58094F] rounded-full animate-slideRight" style={{ width: '60%', animationDelay: '0.7s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        {/* Navigation Tabs with Animation */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-8 flex gap-2 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 transform hover:scale-105 duration-300 ${
              activeTab === "overview"
                ? "bg-gradient-to-r from-[#841E62] to-[#58094F] text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Activity className="w-5 h-5" />
            Overview
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 transform hover:scale-105 duration-300 ${
              activeTab === "orders"
                ? "bg-gradient-to-r from-[#841E62] to-[#58094F] text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Package className="w-5 h-5" />
            My Orders
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 transform hover:scale-105 duration-300 ${
              activeTab === "wishlist"
                ? "bg-gradient-to-r from-[#841E62] to-[#58094F] text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Heart className="w-5 h-5" />
            Wishlist
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Top Row - Activity Chart and Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Weekly Activity Chart - UPDATED WITH DYNAMIC TODAY */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2A445E]">Weekly Activity</h3>
                    <p className="text-gray-500 text-sm mt-1">Order trends this week</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#346B6D]/20 to-[#F3AA20]/20 px-4 py-2 rounded-full animate-pulse">
                    <span className="text-[#2A445E] font-bold text-sm">This Week</span>
                  </div>
                </div>
                
                {/* Bar Chart with Dynamic Today Detection */}
                <div className="flex items-end justify-between h-64 gap-4">
                  {weeklyActivity.map((day, index) => {
                    const maxOrders = Math.max(...weeklyActivity.map(d => d.orders));
                    const height = (day.orders / maxOrders) * 100;
                    const isToday = day.dayIndex === todayIndex; // DYNAMIC CHECK
                    
                    return (
                      <div key={day.day} className="flex-1 flex flex-col items-center gap-3 group">
                        <div className="flex flex-col items-center w-full">
                          {/* Bar with Staggered Animation */}
                          <div className="w-full bg-gray-100 rounded-t-xl overflow-hidden flex items-end relative" style={{ height: '200px' }}>
                            <div 
                              className={`w-full rounded-t-xl transition-all duration-1000 transform hover:scale-105 animate-growUp ${
                                isToday 
                                  ? 'bg-gradient-to-t from-[#F3AA20] to-[#F3AA20]/70 shadow-lg' 
                                  : 'bg-gradient-to-t from-[#346B6D] to-[#2A445E] opacity-60 group-hover:opacity-100'
                              }`}
                              style={{ 
                                height: `${height}%`,
                                animationDelay: `${index * 0.1}s`
                              }}
                            >
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                          {/* Value Badge - Only show for today */}
                          {isToday && (
                            <div className="mt-2 bg-gradient-to-r from-[#F3AA20] to-[#F3AA20]/70 px-3 py-1 rounded-full animate-bounce shadow-lg">
                              <span className="text-white font-bold text-xs">{day.orders}h</span>
                            </div>
                          )}
                        </div>
                        {/* Day Label - Highlight today */}
                        <span className={`text-sm font-semibold transition-all duration-300 ${isToday ? 'text-[#F3AA20] scale-110' : 'text-gray-500'}`}>
                          {day.day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Circular Progress - Time Tracker with Animation */}
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-xl font-bold text-[#2A445E] mb-6">Engagement Score</h3>
                
                {/* Animated Circular Progress */}
                <div className="relative w-48 h-48 mx-auto mb-6 group">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#E5E7EB"
                      strokeWidth="12"
                      fill="none"
                    />
                    {/* Animated Progress circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="url(#gradientCircle)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 80}`}
                      strokeDashoffset={`${2 * Math.PI * 80 * (1 - satisfactionScore / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-2000 animate-drawCircle"
                      style={{ animationDelay: '0.8s' }}
                    />
                    <defs>
                      <linearGradient id="gradientCircle" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F3AA20" />
                        <stop offset="50%" stopColor="#841E62" />
                        <stop offset="100%" stopColor="#58094F" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-[#2A445E] animate-countUp">{satisfactionScore}</span>
                    <span className="text-gray-500 text-sm mt-1">Score</span>
                  </div>
                  {/* Pulsing glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F3AA20]/20 to-[#841E62]/20 rounded-full blur-xl animate-pulse"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 justify-center">
                  <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#346B6D] to-[#2A445E] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                    <Activity className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:scale-110 hover:bg-[#F3AA20] hover:text-white transition-all duration-300 animate-fadeIn" style={{ animationDelay: '1s' }}>
                    <Clock className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-gradient-to-br from-[#841E62] to-[#58094F] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg animate-fadeIn" style={{ animationDelay: '1.1s' }}>
                    <Star className="w-5 h-5 animate-pulse" />
                  </button>
                </div>
              </div>
            </div>

            {/* Second Row - Order Status & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Status Tracker with Animation */}
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-2xl font-bold text-[#2A445E] mb-6 flex items-center gap-2">
                  <Truck className="w-6 h-6 text-[#841E62]" />
                  Order Status
                </h3>
                
                <div className="space-y-6">
                  {/* Processing */}
                  <div className="flex items-center gap-4 group animate-slideInLeft" style={{ animationDelay: '0.9s' }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#F3AA20] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F3AA20] to-[#F3AA20]/70 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#2A445E]">Processing</span>
                        <span className="text-2xl font-bold text-[#2A445E] animate-countUp">{pendingOrders}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#F3AA20] to-[#F3AA20]/70 h-3 rounded-full transition-all duration-1000 animate-slideRight relative"
                          style={{ width: `${orders.length > 0 ? (pendingOrders / orders.length) * 100 : 0}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shipped */}
                  <div className="flex items-center gap-4 group animate-slideInLeft" style={{ animationDelay: '1s' }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#346B6D] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#346B6D] to-[#2A445E] flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Truck className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#2A445E]">Shipped</span>
                        <span className="text-2xl font-bold text-[#2A445E] animate-countUp">{shippedOrders}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#346B6D] to-[#2A445E] h-3 rounded-full transition-all duration-1000 animate-slideRight relative"
                          style={{ width: `${orders.length > 0 ? (shippedOrders / orders.length) * 100 : 0}%`, animationDelay: '0.3s' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivered */}
                  <div className="flex items-center gap-4 group animate-slideInLeft" style={{ animationDelay: '1.1s' }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#841E62] rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#841E62] to-[#58094F] flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-[#2A445E]">Delivered</span>
                        <span className="text-2xl font-bold text-[#2A445E] animate-countUp">{completedOrders}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-[#841E62] to-[#58094F] h-3 rounded-full transition-all duration-1000 animate-slideRight relative"
                          style={{ width: `${orders.length > 0 ? (completedOrders / orders.length) * 100 : 0}%`, animationDelay: '0.6s' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                <h3 className="text-2xl font-bold text-[#2A445E] mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#841E62]" />
                  Recent Activity
                </h3>
                {loading ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 border-4 border-[#841E62] border-t-transparent rounded-full animate-spin mx-auto"></div>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 animate-fadeIn">
                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300 animate-bounce" />
                    <p>No orders yet. Start shopping!</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                    {orders.slice(0, 5).map((order, i) => (
                      <div 
                        key={order.id} 
                        className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#346B6D]/10 to-transparent rounded-xl hover:from-[#346B6D]/20 transition-all group cursor-pointer border border-transparent hover:border-[#346B6D] transform hover:-translate-x-1 duration-300 animate-slideInRight"
                        style={{ animationDelay: `${1 + i * 0.1}s` }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#346B6D] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                          <div className="relative w-14 h-14 bg-gradient-to-br from-[#346B6D] to-[#2A445E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <Package className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-[#2A445E] text-lg">Order #{order.id || i + 1}</p>
                          <p className="text-sm text-gray-500">{order.created_at ? new Date(order.created_at).toLocaleDateString() : "--"}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#841E62] text-lg">₹{order.total || order.amount || "NA"}</p>
                          <p className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            order.status === "Delivered" ? "bg-[#841E62]/20 text-[#58094F]" : 
                            order.status === "Shipped" ? "bg-[#346B6D]/20 text-[#2A445E]" :
                            "bg-[#F3AA20]/20 text-[#F3AA20]"
                          }`}>
                            {order.status || "Processing"}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#841E62] group-hover:translate-x-2 transition-all" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Wishlist Preview Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#2A445E] flex items-center gap-2">
                  <Heart className="w-6 h-6 text-[#841E62] animate-pulse" />
                  Your Wishlist ({wishlist.length})
                </h3>
                {wishlist.length > 0 && (
                  <button 
                    onClick={() => setActiveTab("wishlist")}
                    className="text-[#346B6D] hover:text-[#2A445E] font-semibold flex items-center gap-1 transform hover:translate-x-1 transition-all duration-300"
                  >
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
              {wishlist.length === 0 ? (
                <div className="text-center py-12 text-gray-500 animate-fadeIn">
                  <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300 animate-bounce" />
                  <p>Your wishlist is empty</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {wishlist.slice(0, 4).map((item, idx) => (
                    <div key={item.id} className="group cursor-pointer animate-fadeInUp" style={{ animationDelay: `${1.1 + idx * 0.1}s` }}>
                      <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square shadow-lg">
                        <img
                          src={item.img || "/placeholder.jpg"}
                          alt={item.name}
                          onError={e => { e.target.src = "/placeholder.jpg"; }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#58094F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Heart className="w-5 h-5 fill-[#841E62] text-[#841E62] animate-pulse" />
                        </div>
                      </div>
                      <p className="font-bold text-sm text-[#2A445E] truncate mb-1 group-hover:text-[#841E62] transition-colors">{item.name}</p>
                      {item.price && (
                        <p className="text-[#841E62] font-bold text-lg">₹{item.price}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#2A445E]">All Orders</h3>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#346B6D] to-[#2A445E] text-white font-semibold text-sm transform hover:scale-105 transition-all duration-300">
                  All
                </button>
                <button className="px-4 py-2 rounded-lg text-gray-600 font-semibold text-sm hover:bg-[#F3AA20]/20 hover:text-[#2A445E] transition-all duration-300">
                  Processing
                </button>
                <button className="px-4 py-2 rounded-lg text-gray-600 font-semibold text-sm hover:bg-[#841E62]/20 hover:text-[#58094F] transition-all duration-300">
                  Delivered
                </button>
              </div>
            </div>
            {loading ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 border-4 border-[#841E62] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-600 animate-pulse">Loading orders...</p>
              </div>
            ) : orders.length === 0 ? (
              <div className="text-center py-20 animate-fadeIn">
                <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300 animate-bounce" />
                <p className="text-gray-500 text-lg mb-4">No orders found</p>
                <a href="/accessories/all-products" className="inline-block bg-gradient-to-r from-[#841E62] to-[#F3AA20] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Start Shopping
                </a>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="py-4 px-4 text-left font-bold text-[#2A445E]">Order #</th>
                      <th className="py-4 px-4 text-left font-bold text-[#2A445E]">Date</th>
                      <th className="py-4 px-4 text-left font-bold text-[#2A445E]">Status</th>
                      <th className="py-4 px-4 text-left font-bold text-[#2A445E]">Total</th>
                      <th className="py-4 px-4 text-left font-bold text-[#2A445E]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, i) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-[#346B6D]/5 transition-all duration-300 animate-slideInRight" style={{ animationDelay: `${i * 0.05}s` }}>
                        <td className="py-4 px-4 font-semibold text-[#2A445E]">#{order.id || i + 1}</td>
                        <td className="py-4 px-4 text-gray-600">{order.created_at ? new Date(order.created_at).toLocaleDateString() : "--"}</td>
                        <td className="py-4 px-4">
                          <span className={`px-4 py-2 rounded-full text-xs font-bold transform hover:scale-105 transition-transform duration-300 inline-block ${
                            order.status === "Delivered" ? "bg-[#841E62]/20 text-[#58094F]" :
                            order.status === "Shipped" ? "bg-[#346B6D]/20 text-[#2A445E]" :
                            "bg-[#F3AA20]/20 text-[#F3AA20]"
                          }`}>
                            {order.status || "Processing"}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-bold text-[#841E62] text-lg">₹{order.total || order.amount || "NA"}</td>
                        <td className="py-4 px-4">
                          <button className="text-[#346B6D] hover:text-[#2A445E] font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300 transform hover:translate-x-1">
                            View Details <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === "wishlist" && (
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-[#2A445E]">My Wishlist</h3>
              {wishlist.length > 0 && (
                <p className="text-gray-500">
                  <span className="font-bold text-[#841E62]">{wishlist.length}</span> items saved
                </p>
              )}
            </div>
            {wishlist.length === 0 ? (
              <div className="text-center py-20 animate-fadeIn">
                <Heart className="w-24 h-24 mx-auto mb-6 text-gray-300 animate-bounce" />
                <p className="text-gray-500 text-lg mb-4">Your wishlist is empty</p>
                <a href="/accessories/all-products" className="inline-block bg-gradient-to-r from-[#841E62] to-[#F3AA20] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Discover Products
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlist.map((item, idx) => (
                  <div key={item.id} className="group relative bg-gradient-to-br from-[#346B6D]/10 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <a href={`/accessories/all-products/${item.product_id}`} className="block">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={item.img || "/placeholder.jpg"}
                          alt={item.name}
                          onError={e => { e.target.src = "/placeholder.jpg"; }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#58094F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </a>
                    <div className="p-5">
                      <a href={`/accessories/all-products/${item.product_id}`}>
                        <h4 className="font-bold text-[#2A445E] text-lg mb-2 hover:text-[#841E62] transition-colors line-clamp-2">
                          {item.name}
                        </h4>
                      </a>
                      {item.price && (
                        <div className="text-2xl font-bold text-[#841E62] mb-3">
                          ₹{item.price}
                        </div>
                      )}
                      <button className="w-full bg-gradient-to-r from-[#346B6D] to-[#2A445E] text-white py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                    <button
                      className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 group/btn"
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
                      <Heart className="w-5 h-5 fill-[#841E62] text-[#841E62] animate-pulse" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add Custom CSS for Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes growUp {
          from {
            height: 0;
            opacity: 0;
          }
          to {
            height: 100%;
            opacity: 1;
          }
        }

        @keyframes drawCircle {
          from {
            stroke-dashoffset: ${2 * Math.PI * 80};
          }
          to {
            stroke-dashoffset: ${2 * Math.PI * 80 * (1 - satisfactionScore / 100)};
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
        }

        .animate-slideRight {
          animation: slideRight 1s ease-out forwards;
        }

        .animate-growUp {
          animation: growUp 1s ease-out forwards;
        }

        .animate-drawCircle {
          animation: drawCircle 2s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-countUp {
          animation: countUp 0.6s ease-out forwards;
        }

        .duration-2000 {
          transition-duration: 2s;
        }
      `}</style>
    </div>
  );
}
