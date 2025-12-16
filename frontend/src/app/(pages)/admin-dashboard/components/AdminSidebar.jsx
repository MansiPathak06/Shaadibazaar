// src/app/(pages)/admin-dashboard/components/AdminSidebar.jsx
"use client";

import { BarChart3, Package, Users, Store, TrendingUp } from "lucide-react";

export default function AdminSidebar({
  sidebarOpen,
  setSidebarOpen,
  activeTab,
  setActiveTab,
  products,
  services,
  users,

  vendors,
}) {
  const navItems = [
    {
      id: "dashboard",
      icon: BarChart3,
      label: "Dashboard",
      badge: null,
      showPulse: true,
    },
    {
      id: "products",
      icon: Package,
      label: "Products",
      badge: products.length,
      badgeColor: "bg-[#F04393] text-white",
    },
    {
      id: "services", // Add this
      icon: Store,
      label: "Services",
      badge: services.length, // Pass services from parent
      badgeColor: "bg-purple-500 text-white",
    },
    {
      id: "users",
      icon: Users,
      label: "Users",
      badge: users.length,
      badgeColor: "bg-blue-500 text-white",
    },
    {
      id: "vendors",
      icon: Store,
      label: "Vendors",
      badge: vendors.length,
      badgeColor: "bg-green-500 text-white",
    },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setSidebarOpen(false);
  };

  return (
    <aside
      className={`${
        sidebarOpen ? "block" : "hidden"
      } lg:block w-full lg:w-72 fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-0`}
    >
      <div className="h-full lg:h-auto bg-white rounded-2xl shadow-2xl p-6 lg:sticky lg:top-28 border-2 border-gray-100">
        {/* Header */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <h3 className="text-2xl font-medium text-gray-700 uppercase tracking-wider mb-4">
            Navigation
          </h3>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 font-medium text-lg cursor-pointer ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-[#F04393] to-[#2A0B8B] text-white shadow-xl transform scale-105"
                  : "text-gray-600 hover:bg-gradient-to-r hover:from-[#E8A4BC]/20 hover:to-[#F9C449]/20 hover:text-[#F04393]"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>

              {/* Badge */}
              {item.badge !== null && (
                <span
                  className={`ml-auto px-2 py-1 text-xs rounded-full ${
                    activeTab === item.id ? "bg-white/20" : item.badgeColor
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Pulse Icon for Active Dashboard */}
              {activeTab === item.id && item.showPulse && (
                <TrendingUp className="w-4 h-4 ml-auto animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-8 p-4 bg-gradient-to-br from-[#E8A4BC]/20 to-[#F9C449]/20 rounded-xl">
          <p className="text-sm text-gray-700 text-center">Admin Panel v1.0</p>
        </div>
      </div>
    </aside>
  );
}
