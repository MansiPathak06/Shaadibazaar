// src/app/(pages)/admin-dashboard/components/DashboardTab.jsx
"use client";

import { 
  Package, 
  Users, 
  Store, 
  TrendingUp, 
  ShoppingBag, 
  Activity, 
  Eye,
  Plus,
  CheckCircle
} from 'lucide-react';

export default function DashboardTab({ stats, setActiveTab }) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-medium text-gray-900 mb-2">
          Dashboard Overview
        </h2>
        <p className="text-gray-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Products Card */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#F04393] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#F04393] to-[#E8A4BC] rounded-2xl flex items-center justify-center shadow-lg">
              <Package className="w-7 h-7 text-white" />
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
              +12%
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            Total Products
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-2">
            {stats.totalProducts || 0}
          </p>
          <div className="flex items-center gap-2 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>Active listings</span>
          </div>
        </div>

        {/* Total Users Card */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#3C4CAD] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#3C4CAD] to-[#2A0B8B] rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
              +8%
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            Total Users
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-2">
            {stats.totalUsers || 0}
          </p>
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <Activity className="w-4 h-4" />
            <span>Registered</span>
          </div>
        </div>

        {/* Total Vendors Card */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-[#F9C449] transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#F9C449] to-[#E8A4BC] rounded-2xl flex items-center justify-center shadow-lg">
              <Store className="w-7 h-7 text-white" />
            </div>
            <div className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-semibold">
              +5%
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            Total Vendors
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-2">
            {stats.totalVendors || 0}
          </p>
          <div className="flex items-center gap-2 text-sm text-yellow-600">
            <ShoppingBag className="w-4 h-4" />
            <span>Active sellers</span>
          </div>
        </div>

        {/* Pending Vendors Card */}
        <div className="stat-card bg-white rounded-2xl shadow-lg p-6 border-2 border-transparent hover:border-orange-500 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
              Action needed
            </div>
          </div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            Pending Vendors
          </p>
          <p className="text-4xl font-bold text-gray-900 mb-2">
            {stats.pendingVendors || 0}
          </p>
          <div className="flex items-center gap-2 text-sm text-orange-600">
            <Eye className="w-4 h-4" />
            <span>Awaiting approval</span>
          </div>
        </div>
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-gradient-to-br from-[#F04393] to-[#2A0B8B] rounded-2xl shadow-2xl p-8 text-white">
          <h3 className="text-3xl font-medium mb-4">
            Quick Actions
          </h3>
          <p className="text-white/80 mb-6">
            Manage your platform efficiently
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setActiveTab('products')}
              className="w-full flex items-center gap-3 cursor-pointer px-5 py-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">View All Products</span>
            </button>
            <button
              onClick={() => setActiveTab('vendors')}
              className="w-full flex items-center gap-3 cursor-pointer px-5 py-4 bg-white/20 hover:bg-white/30 rounded-xl transition-all backdrop-blur-sm"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Approve Vendors</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-3xl font-medium text-gray-900 mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  New product added
                </p>
                <p className="text-sm text-gray-600">
                  2 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  New user registered
                </p>
                <p className="text-sm text-gray-600">
                  15 minutes ago
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Vendor pending approval
                </p>
                <p className="text-sm text-gray-600">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
