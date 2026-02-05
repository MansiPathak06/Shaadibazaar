"use client";
"use client";

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { 
    CheckCircle, XCircle, Clock, Users, Search, Filter, Plus, Edit2, Trash2, 
    Check, X, Mail, Send, ExternalLink, LayoutDashboard, Flower2, ArrowLeft, Home
} from 'lucide-react';

// ============================================================================
// MOCK DATA
// ============================================================================

const mockGuests = [
    {
        id: '1',
        name: 'Priya Sharma',
        email: 'priya@example.com',
        phone: '+91-9876543210',
        side: 'Bride',
        invitedCount: 2,
        plusOneAllowed: true,
        rsvpStatus: 'Confirmed',
        dietary: { preference: 'Veg', allergies: '', notes: '' },
        notes: '',
        invitation: { sent: true, sentDate: '2024-01-15', link: 'https://wedding.example.com/rsvp/1' }
    },
    {
        id: '2',
        name: 'Rahul Verma',
        email: 'rahul@example.com',
        phone: '+91-9876543211',
        side: 'Groom',
        invitedCount: 3,
        plusOneAllowed: false,
        rsvpStatus: 'Pending',
        dietary: { preference: 'Non-Veg', allergies: '', notes: '' },
        notes: ''
    },
    {
        id: '3',
        name: 'Anjali Gupta',
        email: 'anjali@example.com',
        phone: '+91-9876543212',
        side: 'Bride',
        invitedCount: 1,
        plusOneAllowed: false,
        rsvpStatus: 'Not Coming',
        dietary: { preference: 'Vegan', allergies: 'Nuts', notes: '' },
        notes: '',
        invitation: { sent: true, sentDate: '2024-01-16', link: 'https://wedding.example.com/rsvp/3' }
    },
];

// ============================================================================
// CONTEXT
// ============================================================================

const GuestContext = createContext();

const useGuests = () => {
    const context = useContext(GuestContext);
    if (!context) {
        throw new Error('useGuests must be used within a GuestProvider');
    }
    return context;
};

const GuestProvider = ({ children }) => {
    const [guests, setGuests] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('guestList-guests');
            return saved ? JSON.parse(saved) : mockGuests;
        }
        return mockGuests;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('guestList-guests', JSON.stringify(guests));
        }
    }, [guests]);

    const addGuest = (newGuest) => {
        setGuests((prev) => [
            ...prev,
            { ...newGuest, id: Date.now().toString() }
        ]);
    };

    const updateGuest = (id, updatedData) => {
        setGuests((prev) =>
            prev.map((guest) => (guest.id === id ? { ...guest, ...updatedData } : guest))
        );
    };

    const deleteGuest = (id) => {
        setGuests((prev) => prev.filter((guest) => guest.id !== id));
    };

    const stats = useMemo(() => {
        const totalInvited = guests.reduce((sum, g) => sum + (g.invitedCount || 1), 0);
        const totalGuests = guests.length;

        const confirmedGuests = guests.filter(g => g.rsvpStatus === 'Confirmed');
        const declinedGuests = guests.filter(g => g.rsvpStatus === 'Not Coming');
        const pendingGuests = guests.filter(g => g.rsvpStatus === 'Pending');

        const confirmedCount = confirmedGuests.reduce((sum, g) => sum + (g.invitedCount || 1), 0);
        const declinedCount = declinedGuests.reduce((sum, g) => sum + (g.invitedCount || 1), 0);
        const pendingCount = pendingGuests.reduce((sum, g) => sum + (g.invitedCount || 1), 0);

        const responseRate = totalInvited ? Math.round((confirmedCount / totalInvited) * 100) : 0;

        const brideSideCount = guests.filter(g => g.side === 'Bride').reduce((sum, g) => sum + (g.invitedCount || 1), 0);
        const groomSideCount = guests.filter(g => g.side === 'Groom').reduce((sum, g) => sum + (g.invitedCount || 1), 0);

        const meals = {
            Veg: guests.filter(g => g.dietary.preference === 'Veg').length,
            'Non-Veg': guests.filter(g => g.dietary.preference === 'Non-Veg').length,
            Vegan: guests.filter(g => g.dietary.preference === 'Vegan').length,
            Custom: guests.filter(g => g.dietary.preference === 'Custom').length,
        };

        return {
            totalInvited,
            totalGuests,
            confirmedCount,
            declinedCount,
            pendingCount,
            responseRate,
            brideSideCount,
            groomSideCount,
            meals
        };
    }, [guests]);

    const value = {
        guests,
        addGuest,
        updateGuest,
        deleteGuest,
        stats
    };

    return (
        <GuestContext.Provider value={value}>
            {children}
        </GuestContext.Provider>
    );
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

// ============================================================================
// COMPONENTS
// ============================================================================

const StatCard = ({ title, value, subtext, icon: Icon, colorClass }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between">
        <div>
            <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
            {subtext && <p className="text-gray-400 text-xs mt-2">{subtext}</p>}
        </div>
        <div className={`p-3 rounded-xl ${colorClass}`}>
            <Icon className="w-6 h-6 text-current opacity-80" />
        </div>
    </div>
);

// Dashboard Component
const Dashboard = () => {
    const { stats } = useGuests();

    const rsvpData = [
        { name: 'Confirmed', value: stats.confirmedCount, color: '#10b981' },
        { name: 'Declined', value: stats.declinedCount, color: '#ef4444' },
        { name: 'Pending', value: stats.pendingCount, color: '#f59e0b' },
    ];

    const mealData = Object.keys(stats.meals).map(key => ({
        name: key,
        count: stats.meals[key]
    }));

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Wedding Dashboard</h2>
                <span className="text-sm text-gray-500">Overview of your guest list</span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Total Invited"
                    value={stats.totalInvited}
                    subtext={`${stats.totalGuests} parties`}
                    icon={Users}
                    colorClass="bg-blue-50 text-blue-600"
                />
                <StatCard
                    title="Confirmed"
                    value={stats.confirmedCount}
                    subtext={`${stats.responseRate}% Response Rate`}
                    icon={CheckCircle}
                    colorClass="bg-green-50 text-green-600"
                />
                <StatCard
                    title="Pending"
                    value={stats.pendingCount}
                    subtext="Need to follow up"
                    icon={Clock}
                    colorClass="bg-amber-50 text-amber-600"
                />
                <StatCard
                    title="Declined"
                    value={stats.declinedCount}
                    subtext="Will not attend"
                    icon={XCircle}
                    colorClass="bg-red-50 text-red-600"
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* RSVP Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">RSVP Status</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={rsvpData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {rsvpData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Meal Preferences */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Meal Preferences</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={mealData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="count" fill="#f472b6" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Guest Distribution */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Guest Distribution (Bride vs Groom)</h3>
                    <div className="flex h-16 w-full rounded-full overflow-hidden">
                        <div
                            style={{ width: `${(stats.brideSideCount / (stats.totalInvited || 1)) * 100}%` }}
                            className="bg-pink-500 flex items-center justify-center text-white font-bold transition-all duration-500"
                        >
                            Bride ({stats.brideSideCount})
                        </div>
                        <div
                            style={{ width: `${(stats.groomSideCount / (stats.totalInvited || 1)) * 100}%` }}
                            className="bg-blue-500 flex items-center justify-center text-white font-bold transition-all duration-500"
                        >
                            Groom ({stats.groomSideCount})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Guest Form Component
const GuestForm = ({ isOpen, onClose, initialData }) => {
    const { addGuest, updateGuest } = useGuests();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        side: 'Bride',
        invitedCount: 1,
        plusOneAllowed: false,
        rsvpStatus: 'Pending',
        dietary: { preference: 'Veg', allergies: '', notes: '' },
        notes: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                dietary: { ...initialData.dietary }
            });
        } else {
            setFormData({
                name: '',
                email: '',
                phone: '',
                side: 'Bride',
                invitedCount: 1,
                plusOneAllowed: false,
                rsvpStatus: 'Pending',
                dietary: { preference: 'Veg', allergies: '', notes: '' },
                notes: ''
            });
        }
    }, [initialData, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialData) {
            updateGuest(initialData.id, formData);
        } else {
            addGuest(formData);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-800">
                        {initialData ? 'Edit Guest' : 'Add New Guest'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Side</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none bg-white"
                                    value={formData.side}
                                    onChange={e => setFormData({ ...formData, side: e.target.value })}
                                >
                                    <option value="Bride">Bride</option>
                                    <option value="Groom">Groom</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Invitation Details */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">Invitation Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Invited Guests Count</label>
                                <input
                                    type="number"
                                    min="1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                                    value={formData.invitedCount}
                                    onChange={e => setFormData({ ...formData, invitedCount: parseInt(e.target.value) || 1 })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">RSVP Status</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none bg-white"
                                    value={formData.rsvpStatus}
                                    onChange={e => setFormData({ ...formData, rsvpStatus: e.target.value })}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Confirmed">Confirmed</option>
                                    <option value="Not Coming">Not Coming</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Dietary */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">Dietary Requirements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Meal Preference</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none bg-white"
                                    value={formData.dietary.preference}
                                    onChange={e => setFormData({
                                        ...formData,
                                        dietary: { ...formData.dietary, preference: e.target.value }
                                    })}
                                >
                                    <option value="Veg">Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Custom">Custom</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Allergies / Notes</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                                    value={formData.dietary.allergies}
                                    onChange={e => setFormData({
                                        ...formData,
                                        dietary: { ...formData.dietary, allergies: e.target.value }
                                    })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg shadow-sm transition-colors"
                        >
                            {initialData ? 'Save Changes' : 'Add Guest'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Guest List Component
const GuestList = () => {
    const { guests, deleteGuest } = useGuests();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSide, setFilterSide] = useState('All');
    const [filterRsvp, setFilterRsvp] = useState('All');
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingGuest, setEditingGuest] = useState(null);

    const filteredGuests = useMemo(() => {
        return guests.filter(guest => {
            const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                guest.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSide = filterSide === 'All' || guest.side === filterSide;
            const matchesRsvp = filterRsvp === 'All' || guest.rsvpStatus === filterRsvp;

            return matchesSearch && matchesSide && matchesRsvp;
        });
    }, [guests, searchTerm, filterSide, filterRsvp]);

    const handleEdit = (guest) => {
        setEditingGuest(guest);
        setIsFormOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this guest?')) {
            deleteGuest(id);
        }
    };

    const handleAddNew = () => {
        setEditingGuest(null);
        setIsFormOpen(true);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Guest List</h2>
                    <p className="text-gray-500 text-sm">Manage your invitations and RSVPs</p>
                </div>
                <button
                    onClick={handleAddNew}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
                >
                    <Plus className="w-4 h-4" />
                    Add Guest
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search guests..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                    <select
                        className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none w-full sm:w-auto"
                        value={filterSide}
                        onChange={(e) => setFilterSide(e.target.value)}
                    >
                        <option value="All">All Sides</option>
                        <option value="Bride">Bride</option>
                        <option value="Groom">Groom</option>
                    </select>

                    <select
                        className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none w-full sm:w-auto"
                        value={filterRsvp}
                        onChange={(e) => setFilterRsvp(e.target.value)}
                    >
                        <option value="All">All RSVPs</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Pending">Pending</option>
                        <option value="Not Coming">Not Coming</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700">Guest Name</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Side</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">RSVP Status</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Invited</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Dietary</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredGuests.length > 0 ? (
                                filteredGuests.map((guest) => (
                                    <tr key={guest.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{guest.name}</div>
                                            <div className="text-gray-400 text-xs">{guest.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-xs font-medium",
                                                guest.side === 'Bride' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'
                                            )}>
                                                {guest.side}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit",
                                                guest.rsvpStatus === 'Confirmed' && 'bg-green-100 text-green-700',
                                                guest.rsvpStatus === 'Not Coming' && 'bg-red-100 text-red-700',
                                                guest.rsvpStatus === 'Pending' && 'bg-amber-100 text-amber-700',
                                            )}>
                                                {guest.rsvpStatus === 'Confirmed' && <Check className="w-3 h-3" />}
                                                {guest.rsvpStatus === 'Not Coming' && <X className="w-3 h-3" />}
                                                {guest.rsvpStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {guest.invitedCount}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-gray-600">{guest.dietary.preference}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => handleEdit(guest)}
                                                    className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(guest.id)}
                                                    className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                                        No guests found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {isFormOpen && (
                <GuestForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    initialData={editingGuest}
                />
            )}
        </div>
    );
};

// Invitation Manager Component
const InvitationManager = () => {
    const { guests, updateGuest } = useGuests();
    const [sendingTo, setSendingTo] = useState(null);

    const handleSendInvite = async (guestId) => {
        setSendingTo(guestId);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const today = new Date().toISOString().split('T')[0];
        const link = `https://wedding.example.com/rsvp/${guestId}`;

        updateGuest(guestId, {
            invitation: {
                sent: true,
                sentDate: today,
                link: link
            }
        });
        setSendingTo(null);
    };

    const handleSendAll = () => {
        alert("Function to bulk send emails would go here! (Simulated)");
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Digital Invitations</h2>
                    <p className="text-gray-500 text-sm">Send and track digital invites via Email/WhatsApp</p>
                </div>
                <button
                    onClick={handleSendAll}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors font-medium border border-gray-200"
                >
                    <Mail className="w-4 h-4" />
                    Send All Pending
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-700">Guest Name</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Email / Contact</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Status</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Sent Date</th>
                            <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {guests.map((guest) => (
                            <tr key={guest.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 font-medium text-gray-900">{guest.name}</td>
                                <td className="px-6 py-4 text-gray-500">{guest.email || guest.phone}</td>
                                <td className="px-6 py-4">
                                    {guest.invitation?.sent ? (
                                        <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                                            <Check className="w-3 h-3" /> Sent
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                                            Not Sent
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {guest.invitation?.sentDate || '-'}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {guest.invitation?.sent ? (
                                        <button className="text-blue-500 hover:underline text-xs flex items-center justify-end gap-1 ml-auto">
                                            <ExternalLink className="w-3 h-3" /> View Link
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleSendInvite(guest.id)}
                                            disabled={sendingTo === guest.id}
                                            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 ml-auto disabled:opacity-50"
                                        >
                                            {sendingTo === guest.id ? 'Sending...' : (
                                                <>
                                                    <Send className="w-3 h-3" /> Send Invite
                                                </>
                                            )}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Layout Component
const Layout = ({ children, currentView, onViewChange }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'guests', label: 'Guest List', icon: Users },
        { id: 'invitations', label: 'Invitations', icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* Sidebar */}
            <aside className={`bg-white w-64 border-r border-pink-100 flex-shrink-0 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} fixed h-full z-10 md:static md:translate-x-0 flex flex-col`}>
                <div className="p-6 flex items-center gap-3 border-b border-pink-50 bg-gradient-to-r from-pink-50 to-white">
                    <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                        <Flower2 className="w-6 h-6 text-pink-600 fill-current" />
                    </div>
                    <h1 className="text-2xl font-bold font-serif text-pink-700 tracking-wide">
                        Shadi Bazar
                    </h1>
                </div>

                <nav className="p-4 space-y-2 flex-1 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none translate-x-10 -translate-y-10"></div>

                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentView === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onViewChange(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${isActive
                                        ? 'bg-gradient-to-r from-pink-50 to-white text-pink-700 shadow-sm border-l-4 border-pink-500'
                                        : 'text-gray-500 hover:bg-pink-50 hover:text-pink-600'
                                    }`}
                            >
                                <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-pink-500' : 'text-gray-400 group-hover:text-pink-400'}`} />
                                <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-pink-100 bg-pink-50/30">
                    <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-pink-100">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold border-2 border-white shadow-sm">
                            SB
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-gray-800">Wedding Plan</span>
                            <span className="text-xs text-pink-500 font-medium">Shadi Bazar Admin</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto w-full md:px-8 px-4 py-8 relative">
                {/* Navigation Buttons */}
                <div className="flex justify-end gap-3 mb-6">
                    <button
                        onClick={handleGoBack}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg transition-all duration-200"
                    >
                        <ArrowLeft size={16} />
                        <span className="hidden sm:inline">Back</span>
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg transition-all duration-200"
                    >
                        <Home size={16} />
                        <span className="hidden sm:inline">Home</span>
                    </button>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                {children}
            </main>
        </div>
    );
};

// Main App Component
export default function GuestManagementApp() {
    const [currentView, setCurrentView] = useState('dashboard');

    return (
        <GuestProvider>
            <Layout currentView={currentView} onViewChange={setCurrentView}>
                {currentView === 'dashboard' && <Dashboard />}
                {currentView === 'guests' && <GuestList />}
                {currentView === 'invitations' && <InvitationManager />}
            </Layout>
        </GuestProvider>
    );
}