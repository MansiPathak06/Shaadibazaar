'use client'

import React, { useState, useEffect } from 'react';
import {
  BarChart3, CreditCard, Package, Users, MessageSquare, Settings, LogOut,
  ShoppingCart, Home, Hotel, User, Utensils, Camera, Globe, FileText,
  Search, TrendingUp, TrendingDown, Filter, Eye, MoreVertical, RefreshCw,
  Calendar, ChevronDown, Bell
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [expandedCategories, setExpandedCategories] = useState({ Core: true });
  const [sidebarSearch, setSidebarSearch] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dateRange, setDateRange] = useState('7days');
  const [dashboardSearch, setDashboardSearch] = useState('');
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [filteredSales, setFilteredSales] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const sidebarItems = [
    { name: 'Dashboard', icon: BarChart3, category: 'Core' },
    { name: 'Pages', icon: FileText, category: 'Pages', submenu: true },
    { name: 'Products', icon: Package, category: 'Products' },
    { name: 'Category', icon: BarChart3, category: 'Products' },
    { name: 'Accommodation', icon: Hotel, category: 'Services', submenu: true },
    { name: 'Hotels', icon: Hotel, category: 'Services' },
    { name: 'Resorts', icon: Hotel, category: 'Services' },
    { name: 'Wedding Website', icon: Globe, category: 'Wedding' },
    { name: 'Catering & Decor', icon: Utensils, category: 'Wedding' },
    { name: 'Venue & Location', icon: Home, category: 'Wedding' },
    { name: 'Beauty & Styling', icon: User, category: 'Business', submenu: true },
    { name: 'Bridal Makeup', icon: User, category: 'Business' },
    { name: 'Photography', icon: Camera, category: 'Business' },
    { name: 'Customer', icon: Users, category: 'Management' },
    { name: 'Messages', icon: MessageSquare, category: 'Management', badge: 3 },
    { name: 'Settings', icon: Settings, category: 'System' },
  ];

  const recentSales = [
    { name: 'Steven Summer', time: '12 Minutes Ago', amount: '$52.00', img: '👤' },
    { name: 'Jordan Malave', time: '32 Minutes Ago', amount: '$83.00', img: '👤' },
    { name: 'Jessica Alba', time: '54 Minutes Ago', amount: '$61.60', img: '👤' },
    { name: 'Anna Armas', time: '2 Minutes Ago', amount: '$2351.00', img: '👤' },
    { name: 'Angelina Roo', time: '12 Minutes Ago', amount: '$152.00', img: '👤' },
    { name: 'Anastasia Koss', time: '12 Minutes Ago', amount: '$842.00', img: '👤' },
  ];

  const orders = [
    { name: 'David Arbee', amount: '$1,456', status: 'Chargeback', date: '11 Sep 2022', img: '👤' },
    { name: 'Maria Hutana', amount: '$42,4378', status: 'Completed', date: '11 Sep 2022', img: '👤' },
    { name: 'Arnold Rivaz', amount: '$3,412', status: 'Completed', date: '11 Sep 2022', img: '👤' },
  ];

  const barData = [
    { day: 'Mon', height: 40 },
    { day: 'Tue', height: 80 },
    { day: 'Wed', height: 90 },
    { day: 'Thu', height: 50 },
    { day: 'Fri', height: 35 },
    { day: 'Sat', height: 75 },
    { day: 'Sun', height: 70 },
  ];

  // Update filtered data
  useEffect(() => {
    const filtered = recentSales.filter(sale =>
      sale.name.toLowerCase().includes(dashboardSearch.toLowerCase())
    );
    setFilteredSales(filtered);
  }, [dashboardSearch]);

  useEffect(() => {
    setFilteredOrders(orders);
  }, []);

  // Group sidebar items by category
  const groupedItems = sidebarItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Filter sidebar items based on search
  const filteredGroupedItems = Object.entries(groupedItems).reduce((acc, [category, items]) => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(sidebarSearch.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  const categoryOrder = ['Core', 'Pages', 'Products', 'Services', 'Wedding', 'Business', 'Management', 'System'];

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  // Stat Card Component
  const StatCard = ({ title, value, change, trend, color, onClick }) => (
    <div
      onClick={onClick}
      className={`group rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
        selectedMetric === title
          ? 'ring-2 ring-[#5B5FED] scale-105'
          : 'hover:ring-2 hover:ring-gray-300'
      }`}
      style={{
        background: selectedMetric === title
          ? `linear-linear(135deg, ${color}40 0%, ${color}20 100%)`
          : color
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1 group-hover:text-gray-700 transition-colors">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-lg transition-all ${
          trend === 'up' ? 'bg-green-100' : 'bg-red-100'
        }`}>
          {trend === 'up' ? (
            <TrendingUp className="w-5 h-5 text-green-600" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-600" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          trend === 'up'
            ? 'bg-green-100 text-green-600'
            : 'bg-red-100 text-red-600'
        }`}>
          {trend === 'up' ? '+' : '-'}{change}
        </span>
        <span className="text-xs text-gray-500">vs last period</span>
      </div>

      <svg className="w-full h-12 opacity-50 group-hover:opacity-70 transition-opacity" viewBox="0 0 100 30">
        <path
          d={trend === 'up' 
            ? "M 0,15 Q 25,10 50,8 T 100,5" 
            : "M 0,10 Q 25,15 50,18 T 100,22"}
          stroke={trend === 'up' ? '#10B981' : '#EF4444'}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#E8E6DC] font-sans">
      
      {/* Enhanced Sidebar */}
      <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-linear-to-b from-[#2C2C2C] to-[#1F1F1F] text-white flex flex-col overflow-hidden transition-all duration-300 ease-in-out shadow-2xl`}>
        
        {/* Sidebar Header */}
        <div className="p-6 sticky top-0 bg-linear-to-b from-[#2C2C2C] via-[#2C2C2C] to-transparent z-50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-[#5B5FED] to-[#3D3FBF] rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              {!isCollapsed && (
                <div>
                  <span className="text-xl font-bold tracking-wide">Zarss</span>
                  <p className="text-xs text-gray-400">Admin Panel</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-gray-700 rounded-lg transition-colors hidden lg:block"
              title={isCollapsed ? "Expand" : "Collapse"}
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-90' : '-rotate-90'}`} />
            </button>
          </div>

          {/* User Profile Card */}
          {!isCollapsed && (
            <div className="bg-linear-to-r from-[#5B5FED]/20 to-[#3D3FBF]/20 rounded-xl p-4 mb-6 border border-[#5B5FED]/30 hover:border-[#5B5FED]/60 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-lg font-bold hover:shadow-lg transition-shadow">
                  👤
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400">Welcome Back</p>
                  <p className="text-sm font-semibold truncate">Mark Johnson</p>
                </div>
                <Bell className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
              <div className="h-1 bg-linear-to-r from-[#5B5FED] to-transparent rounded-full"></div>
            </div>
          )}

          {/* Search Bar */}
          {!isCollapsed && (
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search pages..."
                value={sidebarSearch}
                onChange={(e) => setSidebarSearch(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B5FED] placeholder-gray-500 transition-all"
              />
            </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-3 pb-4 overflow-y-auto space-y-3 custom-scrollbar">
          {categoryOrder.map((category) => (
            filteredGroupedItems[category] && (
              <div key={category} className="group">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-700/50 transition-all"
                >
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold group-hover:text-gray-200 transition-colors">
                    {!isCollapsed && category}
                  </p>
                  {!isCollapsed && (
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-500 transition-transform ${expandedCategories[category] ? '' : '-rotate-90'}`}
                    />
                  )}
                </button>

                {/* Menu Items */}
                {expandedCategories[category] && (
                  <div className={`space-y-1 ${!isCollapsed ? 'mt-2' : ''}`}>
                    {filteredGroupedItems[category].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                          activeTab === item.name
                            ? 'bg-linear-to-r from-[#5B5FED] to-[#3D3FBF] text-white shadow-lg shadow-[#5B5FED]/30'
                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                        }`}
                      >
                        {activeTab === item.name && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-white to-transparent rounded-r-lg"></div>
                        )}

                        <item.icon className={`w-5 h-5 shrink-0 transition-transform ${activeTab === item.name ? 'scale-110' : 'group-hover:scale-110'}`} />

                        {!isCollapsed && (
                          <>
                            <span className="flex-1 text-left text-sm font-medium truncate">
                              {item.name}
                            </span>

                            {item.badge && (
                              <span className="bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-pulse">
                                {item.badge}
                              </span>
                            )}
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          ))}

          {sidebarSearch && Object.keys(filteredGroupedItems).length === 0 && !isCollapsed && (
            <div className="text-center py-8">
              <p className="text-sm text-gray-500">No pages found</p>
            </div>
          )}
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-t border-gray-700">
          <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group ${isCollapsed ? 'justify-center' : ''}`}>
            <LogOut className="w-5 h-5 shrink-0 group-hover:rotate-180 transition-transform duration-300" />
            {!isCollapsed && <span className="text-sm font-medium">Log Out</span>}
          </button>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(91, 95, 237, 0.5);
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(91, 95, 237, 0.8);
          }
        `}</style>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-linear-to-br from-[#F8F9FB] to-[#E8E6DC]">
        <div className="p-8">
          
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Real-time Payments & Analytics
              </p>
            </div>
            <button
              onClick={handleRefresh}
              className={`flex items-center gap-2 px-4 py-2 bg-[#5B5FED] text-white rounded-lg hover:bg-[#4A4ECC] transition-all ${
                isRefreshing ? 'animate-spin' : ''
              }`}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search customers, transactions..."
                value={dashboardSearch}
                onChange={(e) => setDashboardSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border-2 border-gray-200 text-sm focus:outline-none focus:border-[#5B5FED] focus:ring-2 focus:ring-[#5B5FED]/20 transition-all"
              />
            </div>

            <div className="flex gap-2">
              {['7days', '30days', '90days', 'All'].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    dateRange === range
                      ? 'bg-[#5B5FED] text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-[#5B5FED]'
                  }`}
                >
                  {range === '7days' ? 'Last 7 Days' : range === '30days' ? 'Last 30 Days' : range === '90days' ? 'Last 90 Days' : 'All Time'}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
              title="Balance"
              value="$56,874"
              change="17%"
              trend="up"
              color="#D4E6D4"
              onClick={() => setSelectedMetric('Balance')}
            />
            <StatCard
              title="Sales"
              value="$24,575"
              change="23%"
              trend="up"
              color="#F5E6C8"
              onClick={() => setSelectedMetric('Sales')}
            />
            <StatCard
              title="Total Users"
              value="2,847"
              change="12%"
              trend="up"
              color="#E3F2FD"
              onClick={() => setSelectedMetric('Total Users')}
            />
            <div className="bg-linear-to-br from-[#5B5FED] to-[#3D3FBF] rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all cursor-pointer transform hover:scale-105">
              <div>
                <p className="text-sm text-white/80 mb-2">Upgrade</p>
                <p className="text-xs text-white/70">Unlock powerful tools and opportunities</p>
              </div>
              <button className="mt-4 bg-white text-[#5B5FED] px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors w-full hover:shadow-lg">
                Go Pro
              </button>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Bar Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">User Activity</h3>
                  <p className="text-sm text-gray-500">Last 7 days performance</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-end justify-between h-56 gap-3 mb-4">
                {barData.map((bar, index) => (
                  <div
                    key={bar.day}
                    className="flex-1 flex flex-col items-center group cursor-pointer relative"
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    {hoveredBar === index && (
                      <div className="absolute -top-12 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap animate-fade-in z-10">
                        ${(Math.random() * 50000 + 20000).toFixed(0)}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                      </div>
                    )}

                    <div
                      className={`w-full bg-linear-to-t from-[#5B5FED] to-[#7E82F5] rounded-t-lg relative transition-all duration-300 ${
                        hoveredBar === index ? 'shadow-lg scale-105' : ''
                      }`}
                      style={{ height: `${bar.height}%` }}
                    >
                      {hoveredBar === index && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-[#5B5FED] to-[#3D3FBF] text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shadow-lg">
                          Peak: ${(Math.random() * 50000 + 30000).toFixed(0)}
                        </div>
                      )}
                    </div>
                    <span className={`text-sm font-medium mt-3 transition-colors ${
                      hoveredBar === index ? 'text-[#5B5FED]' : 'text-gray-500'
                    }`}>
                      {bar.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">Average: <span className="font-semibold text-gray-900">$42,350</span></p>
                <button className="text-[#5B5FED] hover:text-[#3D3FBF] text-sm font-medium transition-colors">
                  View All →
                </button>
              </div>
            </div>

            {/* Donut Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Revenue Mix</h3>
                  <p className="text-sm text-gray-500">2024 Distribution</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="relative w-32 h-32 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90 drop-shadow-lg hover:drop-shadow-2xl transition-all">
                  <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="12" fill="none" />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#linear)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset="55"
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearlinear id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#5B5FED" />
                      <stop offset="100%" stopColor="#3D3FBF" />
                    </linearlinear>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-900">75%</span>
                    <p className="text-xs text-gray-500">Goal Met</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Direct Sales', value: '60%', color: 'bg-[#5B5FED]' },
                  { label: 'Affiliate', value: '25%', color: 'bg-[#A8ACFF]' },
                  { label: 'Other', value: '15%', color: 'bg-[#E5E7EB]' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm text-gray-600">{item.label}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Recent Sales */}
            <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Recent Sales</h3>
                <button className="text-[#5B5FED] hover:text-[#3D3FBF] text-sm font-medium transition-colors">
                  See All →
                </button>
              </div>

              <div className="space-y-4">
                {filteredSales.map((sale, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-linear-to-r hover:from-[#5B5FED]/5 hover:to-transparent rounded-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 bg-linear-to-br from-[#5B5FED] to-[#3D3FBF] rounded-full flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                        {sale.img}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#5B5FED] transition-colors">
                          {sale.name}
                        </p>
                        <p className="text-xs text-gray-500">{sale.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-bold text-gray-900 group-hover:text-[#5B5FED] transition-colors">
                        {sale.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orders Table */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Recent Orders</h3>
                  <p className="text-sm text-gray-500">Latest transactions</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-linear-to-r hover:from-[#5B5FED]/5 hover:to-transparent transition-all duration-200 group cursor-pointer"
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0">
                              {order.img}
                            </div>
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#5B5FED] transition-colors">
                              {order.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm font-bold text-gray-900">
                          {order.amount}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                            order.status === 'Completed'
                              ? 'bg-green-100 text-green-700 group-hover:bg-green-200'
                              : 'bg-red-100 text-red-700 group-hover:bg-red-200'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-600">
                          {order.date}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button className="text-gray-400 hover:text-[#5B5FED] hover:bg-gray-100 p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredOrders.length}</span> orders
                </p>
                <button className="text-[#5B5FED] hover:text-[#3D3FBF] text-sm font-medium transition-colors">
                  View All Orders →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
