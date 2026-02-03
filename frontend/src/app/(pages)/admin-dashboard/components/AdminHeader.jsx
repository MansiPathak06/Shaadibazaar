// src/app/(pages)/admin-dashboard/components/AdminHeader.jsx
"use client";

import { BarChart3, Activity, LogOut, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminHeader({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName');
    router.push('/auth');
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-linear-to-r from-[#F04393] to-[#2A0B8B] sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo & Title */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-[#F04393] to-[#2A0B8B] rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-medium bg-linear-to-r from-[#F04393] to-[#2A0B8B] bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-500">Shaadi Baazar</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Admin Panel Badge */}
            <div className="hidden md:flex items-center gap-2 cursor-pointer px-4 py-2 bg-linear-to-r from-[#E8A4BC]/20 to-[#F9C449]/20 rounded-xl">
              <Activity className="w-4 h-4 text-[#F04393]" />
              <span className="text-sm font-medium text-gray-700">
                Admin Panel
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 text-sm cursor-pointer bg-linear-to-r from-[#F04393] to-[#2A0B8B] text-white rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
