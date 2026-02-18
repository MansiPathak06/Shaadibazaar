"use client";
import React, { useState, useEffect } from 'react';
import { Plus, Filter, ArrowUpDown, Edit2, Trash2, X, HeartHandshake, IndianRupee, PieChart, Wallet, AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';

const CATEGORIES = [
  'All Categories', 'Venue', 'Caterer', 'Photographer', 'Decorator',
  'Makeup Artist', 'Music/DJ', 'Attire', 'Jewelry', 'Invitation', 'Gifts', 'Other'
];

const FORM_CATEGORIES = [
  'Venue', 'Caterer', 'Photographer', 'Decorator', 'Makeup Artist',
  'Music/DJ', 'Attire', 'Jewelry', 'Invitation', 'Gifts', 'Other'
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Partially Paid':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Pending':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

// Summary Card Component
const SummaryCard = ({ title, amount, icon: Icon, colorClass, subText }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">
        {typeof amount === 'number' ? `₹${amount.toLocaleString('en-IN')}` : amount}
      </h3>
      {subText && <p className="text-xs text-gray-400 mt-1">{subText}</p>}
    </div>
    <div className={`p-3 rounded-lg ${colorClass}`}>
      <Icon size={24} />
    </div>
  </div>
);

// Dashboard Component
const Dashboard = ({ vendors }) => {
  const totalBudget = vendors.reduce((sum, v) => sum + v.totalAmount, 0);
  const totalPaid = vendors.reduce((sum, v) => sum + v.amountPaid, 0);
  const totalOutstanding = totalBudget - totalPaid;
  const percentageComplete = totalBudget > 0 ? Math.round((totalPaid / totalBudget) * 100) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <SummaryCard
        title="Total Budget"
        amount={totalBudget}
        icon={Wallet}
        colorClass="bg-blue-50 text-blue-600"
      />
      <SummaryCard
        title="Total Paid"
        amount={totalPaid}
        icon={IndianRupee}
        colorClass="bg-green-50 text-green-600"
        subText={`${percentageComplete}% Completed`}
      />
      <SummaryCard
        title="Outstanding"
        amount={totalOutstanding}
        icon={AlertCircle}
        colorClass="bg-red-50 text-red-600"
      />
      <SummaryCard
        title="Total Vendors"
        amount={vendors.length}
        icon={PieChart}
        colorClass="bg-purple-50 text-purple-600"
      />
    </div>
  );
};

// Vendor Table Component
const VendorTable = ({ vendors, onEdit, onDelete, onMarkAsPaid }) => {
  if (!vendors || vendors.length === 0) {
    return (
      <div className="text-center py-10 bg-white rounded-lg border border-pink-100 shadow-sm">
        <p className="text-gray-500">No vendors added yet. Click "Add Payment" to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg border border-pink-100 shadow-sm">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="bg-pink-50 text-pink-700 font-semibold uppercase text-xs">
          <tr>
            <th className="px-4 py-3">Vendor</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3 text-right">Total</th>
            <th className="px-4 py-3 text-right">Paid</th>
            <th className="px-4 py-3 text-right">Balance</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Due Date</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id} className="border-b border-pink-50 hover:bg-pink-50/30 transition-colors">
              <td className="px-4 py-3 font-medium text-gray-900">{vendor.name}</td>
              <td className="px-4 py-3 text-gray-500">{vendor.category}</td>
              <td className="px-4 py-3 text-right">₹{vendor.totalAmount.toLocaleString('en-IN')}</td>
              <td className="px-4 py-3 text-right text-green-600">₹{vendor.amountPaid.toLocaleString('en-IN')}</td>
              <td className="px-4 py-3 text-right text-red-600 font-medium">₹{(vendor.totalAmount - vendor.amountPaid).toLocaleString('en-IN')}</td>
              <td className="px-4 py-3">
                <StatusBadge status={vendor.status} />
              </td>
              <td className="px-4 py-3 font-mono">
                {new Date(vendor.dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: '2-digit' })}
              </td>
              <td className="px-4 py-3 flex justify-center gap-2">
                {vendor.status !== 'Paid' && (
                  <button
                    onClick={() => onMarkAsPaid(vendor.id)}
                    className="p-1 hover:bg-green-100 rounded text-green-600 transition-colors"
                    title="Mark as Paid"
                  >
                    <CheckCircle size={16} />
                  </button>
                )}
                <button
                  onClick={() => onEdit(vendor)}
                  className="p-1 hover:bg-pink-100 rounded text-pink-600 transition-colors"
                  title="Edit"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => onDelete(vendor.id)}
                  className="p-1 hover:bg-red-100 rounded text-red-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Vendor Form Component
const VendorForm = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Other',
    totalAmount: '',
    depositAmount: '',
    amountPaid: '',
    dueDate: '',
    status: 'Pending',
    notes: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        totalAmount: initialData.totalAmount || '',
        depositAmount: initialData.depositAmount || '',
        amountPaid: initialData.amountPaid || '',
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'amountPaid' || name === 'totalAmount') {
      const total = name === 'totalAmount' ? parseFloat(value) || 0 : parseFloat(formData.totalAmount) || 0;
      const paid = name === 'amountPaid' ? parseFloat(value) || 0 : parseFloat(formData.amountPaid) || 0;

      let newStatus = formData.status;
      if (paid >= total && total > 0) newStatus = 'Paid';
      else if (paid > 0) newStatus = 'Partially Paid';
      else newStatus = 'Pending';

      setFormData(prev => ({ ...prev, [name]: value, status: newStatus }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      totalAmount: parseFloat(formData.totalAmount) || 0,
      depositAmount: parseFloat(formData.depositAmount) || 0,
      amountPaid: parseFloat(formData.amountPaid) || 0,
    });
  };

  const remaining = (parseFloat(formData.totalAmount) || 0) - (parseFloat(formData.amountPaid) || 0);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-pink-600 px-6 py-4 flex justify-between items-center text-white">
          <h2 className="text-lg font-bold">{initialData ? 'Edit Payment' : 'Add New Payment'}</h2>
          <button onClick={onCancel} className="p-1 hover:bg-pink-700 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
              placeholder="e.g. Royal Palace Venue"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                name="category"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                value={formData.category}
                onChange={handleChange}
              >
                {FORM_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                name="dueDate"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Agreed (₹)</label>
              <input
                type="number"
                name="totalAmount"
                min="0"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                placeholder="0"
                value={formData.totalAmount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid (₹)</label>
              <input
                type="number"
                name="amountPaid"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                placeholder="0"
                value={formData.amountPaid}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center text-sm">
            <span className="text-gray-600">Calculated Balance:</span>
            <span className={`font-bold ${remaining > 0 ? 'text-red-600' : 'text-green-600'}`}>
              ₹{remaining.toLocaleString('en-IN')}
            </span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
            <select
              name="status"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Partially Paid">Partially Paid</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-pink-600 text-white rounded-lg hover:bg-pink-700 font-medium shadow-md transition"
            >
              {initialData ? 'Save Changes' : 'Add Payment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [vendors, setVendors] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingVendor, setEditingVendor] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [sortBy, setSortBy] = useState('dueDate');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleAddPayment = () => {
    setEditingVendor(null);
    setShowForm(true);
  };

  const handleEditPayment = (vendor) => {
    setEditingVendor(vendor);
    setShowForm(true);
  };

  const handleDeletePayment = (id) => {
    if (window.confirm('Are you sure you want to delete this payment record?')) {
      setVendors(prev => prev.filter(v => v.id !== id));
    }
  };

  const handleMarkAsPaid = (id) => {
    if (window.confirm('Mark this payment as fully paid?')) {
      setVendors(prev => prev.map(v => {
        if (v.id === id) {
          return {
            ...v,
            amountPaid: v.totalAmount,
            status: 'Paid'
          };
        }
        return v;
      }));
    }
  };

  const handleFormSubmit = (paymentData) => {
    if (editingVendor) {
      setVendors(prev => prev.map(v => v.id === editingVendor.id ? { ...paymentData, id: v.id } : v));
    } else {
      setVendors(prev => [...prev, { ...paymentData, id: crypto.randomUUID() }]);
    }
    setShowForm(false);
    setEditingVendor(null);
  };

  const handleBack = () => {
    window.history.back();
  };

  const filteredVendors = vendors.filter(v => {
    const matchCategory = categoryFilter === 'All Categories' || v.category === categoryFilter;
    const matchStatus = statusFilter === 'All Status' ||
      (statusFilter === 'Pending' && v.status === 'Pending') ||
      (statusFilter === 'Paid' && v.status === 'Paid') ||
      (statusFilter === 'Partially Paid' && v.status === 'Partially Paid');
    return matchCategory && matchStatus;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    if (sortBy === 'dueDate') {
      return sortOrder === 'asc'
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate);
    } else if (sortBy === 'balance') {
      const balA = a.totalAmount - a.amountPaid;
      const balB = b.totalAmount - b.amountPaid;
      return sortOrder === 'asc' ? balA - balB : balB - balA;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-pink-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="bg-pink-100 p-2 rounded-lg text-pink-600">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Shadi Bazar</h1>
                <p className="text-xs text-pink-600 font-medium">Payment Tracker</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Wedding Planning Simplified
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Summary */}
        <Dashboard vendors={vendors} />

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-3 items-center w-full md:w-auto">
            {/* Filter by Category */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <select
                className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none appearance-none cursor-pointer"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            {/* Filter by Status */}
            <div className="relative">
              <select
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 outline-none cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All Status">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Partially Paid">Partially Paid</option>
                <option value="Paid">Paid</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setSortBy('dueDate')}
                className={`px-3 py-2 text-sm flex items-center gap-1 ${sortBy === 'dueDate' ? 'bg-pink-50 text-pink-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Due Date
              </button>
              <button
                onClick={() => setSortBy('balance')}
                className={`px-3 py-2 text-sm flex items-center gap-1 ${sortBy === 'balance' ? 'bg-pink-50 text-pink-700 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                Balance
              </button>
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="px-2 py-2 border-l border-gray-200 hover:bg-gray-50 text-gray-500"
                title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              >
                <ArrowUpDown size={16} className={sortOrder === 'desc' ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddPayment}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition active:scale-95"
          >
            <Plus size={18} />
            <span>Add Payment</span>
          </button>
        </div>

        {/* List */}
        <VendorTable
          vendors={sortedVendors}
          onEdit={handleEditPayment}
          onDelete={handleDeletePayment}
          onMarkAsPaid={handleMarkAsPaid}
        />
      </main>

      {/* Form Modal */}
      {showForm && (
        <VendorForm
          initialData={editingVendor}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;