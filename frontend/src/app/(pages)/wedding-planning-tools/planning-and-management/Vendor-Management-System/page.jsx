"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { Heart, Menu, X, Users, Wallet, CheckCircle, Clock, AlertCircle, Plus, Save, Calculator, Search, Filter, Edit2, Trash2, Phone, Mail, FileText, Check, Calendar, ArrowLeft } from 'lucide-react';

// Layout Component
function Layout({ children, currentView, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'vendors', label: 'Vendors' },
    ];

    const handleNavigate = (viewId) => {
        onNavigate(viewId);
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <header className="bg-white border-b border-primary-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('dashboard')}>
                        <div className="bg-primary-50 p-2 rounded-lg">
                            <Heart className="w-6 h-6 text-primary-600 fill-primary-600" />
                        </div>
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                            Shadi Bazar
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-6">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className={`text-sm font-medium transition-colors ${currentView === item.id
                                        ? 'text-primary-600 font-semibold'
                                        : 'text-gray-700 hover:text-primary-600'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white animate-in slide-in-from-top-2">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigate(item.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${currentView === item.id
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </header>
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <footer className="bg-white border-t border-gray-100 py-6 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Shadi Bazar - Vendor Management System
                </div>
            </footer>
        </div>
    );
}

// Dashboard Component
function Dashboard({ stats, onNavigate }) {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const cards = [
        {
            label: 'Total Vendors',
            value: stats.totalVendors,
            icon: Users,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            border: 'border-blue-100'
        },
        {
            label: 'Total Budget',
            value: formatCurrency(stats.totalBudget),
            icon: Wallet,
            color: 'text-primary-600',
            bg: 'bg-primary-50',
            border: 'border-primary-100'
        },
        {
            label: 'Paid Amount',
            value: formatCurrency(stats.totalPaid),
            icon: CheckCircle,
            color: 'text-green-600',
            bg: 'bg-green-50',
            border: 'border-green-100'
        },
        {
            label: 'Remaining Due',
            value: formatCurrency(stats.totalRemaining),
            icon: Clock,
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            border: 'border-orange-100'
        },
    ];

    return (
        <div className="space-y-6">
            <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, index) => (
                    <div key={index} className={`bg-white p-6 rounded-xl border ${card.border} shadow-sm hover:shadow-md transition-shadow`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500">{card.label}</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                            </div>
                            <div className={`p-3 rounded-full ${card.bg}`}>
                                <card.icon className={`w-6 h-6 ${card.color}`} />
                            </div>
                        </div>
                    </div>
                ))}

                {stats.upcomingPayments > 0 && (
                    <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3 text-red-700">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="font-medium">
                            Attention Needed: You have {stats.upcomingPayments} payment{stats.upcomingPayments !== 1 ? 's' : ''} due soon or overdue!
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-8">
                <button
                    onClick={() => onNavigate('vendors')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors shadow-sm font-medium"
                >
                    <Users className="w-5 h-5" />
                    Manage Vendors
                </button>
            </div>
        </div>
    );
}

// VendorForm Component
const CATEGORIES = [
    'Photographer', 'Caterer', 'Florist', 'Decorator',
    'DJ', 'Makeup Artist', 'Venue', 'Planner', 'Transport', 'Other'
];

function VendorForm({ initialData, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Photographer',
        contactPerson: '',
        phone: '',
        email: '',
        notes: '',
        payment: {
            totalCost: '',
            advancePaid: '',
            dueDate: '',
            status: 'Pending'
        },
        contract: {
            signed: false,
            file: '',
            date: '',
            remarks: ''
        }
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (section, field, value) => {
        if (section) {
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section],
                    [field]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [field]: value }));
        }
    };

    const calculateRemaining = () => {
        const total = parseFloat(formData.payment.totalCost) || 0;
        const advance = parseFloat(formData.payment.advancePaid) || 0;
        return total - advance;
    };

    const remaining = calculateRemaining();

    useEffect(() => {
        const total = parseFloat(formData.payment.totalCost) || 0;
        const advance = parseFloat(formData.payment.advancePaid) || 0;
        let newStatus = formData.payment.status;

        if (total > 0 && advance >= total) {
            newStatus = 'Paid';
        } else if (advance > 0) {
            newStatus = 'Partially Paid';
        } else {
            newStatus = 'Pending';
        }

        if (newStatus !== formData.payment.status) {
            handleChange('payment', 'status', newStatus);
        }
    }, [formData.payment.totalCost, formData.payment.advancePaid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 font-semibold border-b pb-2">Vendor Details</h4>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name *</label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange(null, 'name', e.target.value)}
                            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="e.g. Shutter Speed Photography"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <select
                                value={formData.category}
                                onChange={(e) => handleChange(null, 'category', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                            <input
                                type="text"
                                value={formData.contactPerson}
                                onChange={(e) => handleChange(null, 'contactPerson', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange(null, 'phone', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange(null, 'email', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-sm uppercase tracking-wide text-gray-500 font-semibold border-b pb-2">Payment Details</h4>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Total Cost (₹)</label>
                            <input
                                type="number"
                                min="0"
                                value={formData.payment.totalCost}
                                onChange={(e) => handleChange('payment', 'totalCost', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Advance Paid (₹)</label>
                            <input
                                type="number"
                                min="0"
                                value={formData.payment.advancePaid}
                                onChange={(e) => handleChange('payment', 'advancePaid', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">Remaining Balance:</span>
                        <span className="text-lg font-bold text-primary-700">₹ {remaining.toLocaleString()}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                            <input
                                type="date"
                                value={formData.payment.dueDate}
                                onChange={(e) => handleChange('payment', 'dueDate', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <select
                                value={formData.payment.status}
                                onChange={(e) => handleChange('payment', 'status', e.target.value)}
                                className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Partially Paid">Partially Paid</option>
                                <option value="Paid">Paid</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
                <h4 className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-4">Contract & Notes</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <input
                                type="checkbox"
                                id="contractSigned"
                                checked={formData.contract.signed}
                                onChange={(e) => handleChange('contract', 'signed', e.target.checked)}
                                className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                            />
                            <label htmlFor="contractSigned" className="text-sm font-medium text-gray-700 select-none">Contract Signed?</label>
                        </div>

                        {formData.contract.signed && (
                            <div className="animate-in fade-in slide-in-from-top-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contract Date</label>
                                <input
                                    type="date"
                                    value={formData.contract.date}
                                    onChange={(e) => handleChange('contract', 'date', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes / Remarks</label>
                        <textarea
                            rows="3"
                            value={formData.notes}
                            onChange={(e) => handleChange(null, 'notes', e.target.value)}
                            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Any special requirements or details..."
                        ></textarea>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                    <Save className="w-4 h-4 mr-2" />
                    Save Vendor
                </button>
            </div>
        </form>
    );
}

// VendorList Component
function VendorList({ vendors, onEdit, onDelete }) {
    const [filterCategory, setFilterCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = ['All', ...new Set(vendors.map(v => v.category))];

    const filteredVendors = vendors.filter(vendor => {
        const matchesCategory = filterCategory === 'All' || vendor.category === filterCategory;
        const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            vendor.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-700 border-green-200';
            case 'Pending': return 'bg-red-100 text-red-700 border-red-200';
            case 'Partially Paid': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    if (vendors.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No vendors yet</h3>
                <p className="text-gray-500 mt-1">Get started by adding your first vendor.</p>
            </div>
        );
    }

    const handleExport = () => {
        const headers = ['Name', 'Category', 'Contact', 'Phone', 'Email', 'Total Cost', 'Paid', 'Due Date', 'Status', 'Notes'];
        const csvContent = [
            headers.join(','),
            ...vendors.map(v => [
                `"${v.name}"`,
                `"${v.category}"`,
                `"${v.contactPerson}"`,
                `"${v.phone}"`,
                `"${v.email}"`,
                v.payment.totalCost,
                v.payment.advancePaid,
                v.payment.dueDate,
                v.payment.status,
                `"${v.notes.replace(/"/g, '""')}"`
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'vendors.csv';
        link.click();
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search vendors..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        Export CSV
                    </button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filterCategory === cat
                                ? 'bg-primary-600 text-white shadow-sm'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {filteredVendors.map((vendor) => (
                    <div key={vendor.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                        <div className="p-5">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100">
                                            {vendor.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900">{vendor.name}</h3>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
                                        <div className="flex items-center gap-1.5">
                                            <div className="p-1 bg-gray-100 rounded-md"><Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" /></div>
                                            {vendor.contactPerson}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="p-1 bg-gray-100 rounded-md"><Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-500" /></div>
                                            {vendor.phone}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start md:items-end gap-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(vendor.payment.status)}`}>
                                        {vendor.payment.status}
                                    </span>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-500">Balance Due</p>
                                        <p className="text-lg font-bold text-gray-900">
                                            {formatCurrency(vendor.payment.totalCost - vendor.payment.advancePaid)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                                <div className="flex items-center gap-4 text-gray-500">
                                    <span className="flex items-center gap-1.5" title="Due Date">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(vendor.payment.dueDate).toLocaleDateString()}
                                    </span>
                                    <span className={`flex items-center gap-1.5 ${vendor.contract.signed ? 'text-green-600' : 'text-gray-400'}`}>
                                        {vendor.contract.signed ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                                        Contract
                                    </span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => onEdit(vendor)}
                                        className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                        title="Edit Vendor"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(vendor.id)}
                                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Delete Vendor"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredVendors.length === 0 && (
                    <div className="text-center py-8 text-gray-400">
                        No vendors found matching your filters.
                    </div>
                )}
            </div>
        </div>
    );
}

// Main App Component
export default function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [vendors, setVendors] = useState(() => {
        const saved = localStorage.getItem('vendors');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('vendors', JSON.stringify(vendors));
    }, [vendors]);

    const [showForm, setShowForm] = useState(false);
    const [editingVendor, setEditingVendor] = useState(null);

    const handleSaveVendor = (vendorData) => {
        if (editingVendor) {
            setVendors(vendors.map(v => v.id === editingVendor.id ? { ...vendorData, id: v.id } : v));
            setEditingVendor(null);
        } else {
            setVendors([...vendors, { ...vendorData, id: crypto.randomUUID() }]);
        }
        setShowForm(false);
    };

    const handleDeleteVendor = (id) => {
        if (confirm('Are you sure you want to delete this vendor?')) {
            setVendors(vendors.filter(v => v.id !== id));
        }
    };

    const handleEditVendor = (vendor) => {
        setEditingVendor(vendor);
        setShowForm(true);
    };

    const stats = useMemo(() => {
        const totalVendors = vendors.length;
        const totalBudget = vendors.reduce((sum, v) => sum + (parseFloat(v.payment.totalCost) || 0), 0);
        const totalPaid = vendors.reduce((sum, v) => sum + (parseFloat(v.payment.advancePaid) || 0), 0);
        const totalRemaining = totalBudget - totalPaid;

        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);

        const upcomingPayments = vendors.filter(v => {
            if (!v.payment.dueDate || v.payment.status === 'Paid') return false;
            const dueDate = new Date(v.payment.dueDate);
            return dueDate <= nextWeek;
        }).length;

        return { totalVendors, totalBudget, totalPaid, totalRemaining, upcomingPayments };
    }, [vendors]);

    return (
        <Layout currentView={currentView} onNavigate={setCurrentView}>
            <style>{`
                .primary-50 { background-color: #fef2f2; }
                .primary-100 { background-color: #fee2e2; border-color: #fee2e2; }
                .primary-600 { color: #dc2626; background-color: #dc2626; }
                .primary-700 { color: #b91c1c; background-color: #b91c1c; }
                .primary-800 { color: #991b1b; }
                .text-primary-600 { color: #dc2626; }
                .text-primary-700 { color: #b91c1c; }
                .bg-primary-50 { background-color: #fef2f2; }
                .bg-primary-600 { background-color: #dc2626; }
                .bg-primary-700 { background-color: #b91c1c; }
                .hover\\:bg-primary-600:hover { background-color: #dc2626; }
                .hover\\:bg-primary-700:hover { background-color: #b91c1c; }
                .hover\\:text-primary-600:hover { color: #dc2626; }
                .hover\\:bg-primary-50:hover { background-color: #fef2f2; }
                .focus\\:ring-primary-500:focus { --tw-ring-color: #ef4444; }
                .focus\\:border-primary-500:focus { border-color: #ef4444; }
                .border-primary-100 { border-color: #fee2e2; }
            `}</style>
            <div className="space-y-8">
                {currentView === 'dashboard' && (
                    <div className="animate-in fade-in duration-500">
                        <Dashboard stats={stats} onNavigate={setCurrentView} />
                    </div>
                )}

                {currentView === 'vendors' && (
                    <div className="animate-in fade-in duration-500 space-y-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h2 className="text-2xl font-bold text-gray-800">Your Vendors</h2>
                            <button
                                onClick={() => { setEditingVendor(null); setShowForm(true); }}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm text-sm font-medium"
                            >
                                <Plus className="w-4 h-4" />
                                Add New Vendor
                            </button>
                        </div>

                        {showForm && (
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {editingVendor ? 'Edit Vendor' : 'Add New Vendor'}
                                    </h3>
                                    <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600">Cancel</button>
                                </div>
                                <VendorForm
                                    initialData={editingVendor}
                                    onSave={handleSaveVendor}
                                    onCancel={() => setShowForm(false)}
                                />
                            </div>
                        )}

                        <VendorList
                            vendors={vendors}
                            onEdit={handleEditVendor}
                            onDelete={handleDeleteVendor}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
}