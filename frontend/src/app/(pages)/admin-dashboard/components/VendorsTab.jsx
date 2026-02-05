// src/app/(pages)/admin-dashboard/components/VendorsTab.jsx
"use client";

import { Search, Trash2, Mail, Phone, Store, CheckCircle, XCircle, MapPin } from 'lucide-react';

export default function VendorsTab({ 
  vendors, 
  searchTerm, 
  setSearchTerm, 
  handleApproveVendor, 
  handleDeleteVendor 
}) {
  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.business_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const approvedVendors = vendors.filter(v => v.is_approved === 1 || v.is_approved === true);
  const pendingVendors = vendors.filter(v => v.is_approved === 0 || v.is_approved === false);

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-medium text-gray-900 mb-2">
          Vendors Management
        </h2>
        <p className="text-gray-600">
          Manage vendor approvals and profiles
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search vendors by business name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F04393] focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Store className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Vendors</p>
              <p className="text-3xl font-bold text-gray-900">{vendors.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Approved</p>
              <p className="text-3xl font-bold text-gray-900">{approvedVendors.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pending Approval</p>
              <p className="text-3xl font-bold text-gray-900">{pendingVendors.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-linear-to-r from-[#F9C449] to-[#F04393] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Business Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVendors.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                    No vendors found
                  </td>
                </tr>
              ) : (
                filteredVendors.map((vendor) => (
                  <tr key={vendor.id} className="table-row hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm text-gray-600">#{vendor.id}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {vendor.business_name ? vendor.business_name.charAt(0).toUpperCase() : 'V'}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {vendor.business_name || 'N/A'}
                          </p>
                          <p className="text-xs text-gray-500">{vendor.name || ''}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">{vendor.email}</span>
                        </div>
                        {vendor.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-700">{vendor.phone}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {vendor.category || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {vendor.address ? (
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <span className="text-sm text-gray-700 line-clamp-2">
                            {vendor.address}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${
                        vendor.is_approved === 1 || vendor.is_approved === true
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {vendor.is_approved === 1 || vendor.is_approved === true ? (
                          <>
                            <CheckCircle className="w-3 h-3" />
                            Approved
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3 h-3" />
                            Pending
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {vendor.is_approved === 0 || vendor.is_approved === false ? (
                          <button
                            onClick={() => handleApproveVendor(vendor.id, true)}
                            className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
                            title="Approve vendor"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </button>
                        ) : (
                          <button
                            onClick={() => handleApproveVendor(vendor.id, false)}
                            className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors text-xs font-medium flex items-center gap-1"
                            title="Revoke approval"
                          >
                            <XCircle className="w-4 h-4" />
                            Revoke
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteVendor(vendor.id)}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                          title="Delete vendor"
                        >
                          <Trash2 className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="mt-6 bg-linear-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Vendors</p>
            <p className="text-2xl font-bold text-gray-900">{vendors.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Search Results</p>
            <p className="text-2xl font-bold text-gray-900">{filteredVendors.length}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Approval Status</p>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                Approved: {approvedVendors.length}
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                Pending: {pendingVendors.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Approvals Alert */}
      {pendingVendors.length > 0 && (
        <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <XCircle className="w-5 h-5 text-orange-500 shrink-0" />
            <div>
              <p className="font-medium text-orange-900">
                {pendingVendors.length} vendor{pendingVendors.length > 1 ? 's' : ''} awaiting approval
              </p>
              <p className="text-sm text-orange-700 mt-1">
                Review and approve pending vendors to activate their accounts
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
