"use client";

import React, {
    createContext, useContext, useState, useMemo, useEffect, useCallback
} from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';
import {
    CheckCircle, XCircle, Clock, Users, Search, Plus, Edit2, Trash2,
    Check, X, Mail, Send, ExternalLink, LayoutDashboard, Flower2,
    ArrowLeft, Home, Loader2, AlertCircle
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// ─────────────────────────────────────────────────────────────────────────────
const API_BASE   = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
const GUESTS_URL = `${API_BASE}/wedding/guests/manage`;

// ─────────────────────────────────────────────────────────────────────────────
// AUTH CONTEXT
// We no longer do a separate /auth/me preflight — that was the bug.
// Instead we start as 'authenticated' optimistically and flip to
// 'unauthenticated' the moment the real API returns a 401.
// The backend protect middleware is the true auth gate.
// ─────────────────────────────────────────────────────────────────────────────
// authStatus: 'loading' | 'authenticated' | 'unauthenticated'
const AuthContext = createContext({ authStatus: 'loading', onUnauthorized: () => {} });
const useAuthCtx  = () => useContext(AuthContext);

// ─────────────────────────────────────────────────────────────────────────────
// API HELPER — intercepts 401 and notifies AuthContext
// ─────────────────────────────────────────────────────────────────────────────
const makeRequest = (onUnauthorized) => async (url, method = 'GET', body) => {
    try {
        const response = await fetch(url, {
            method,
            credentials: 'include',
            headers: body ? { 'Content-Type': 'application/json' } : {},
            body:    body ? JSON.stringify(body) : undefined,
        });
        if (response.status === 401) {
            onUnauthorized();
            return { success: false, message: 'Not authenticated' };
        }
        return response.json();
    } catch (err) {
        return { success: false, message: err.message || 'Network error' };
    }
};

// ─────────────────────────────────────────────────────────────────────────────
// GUEST CONTEXT
// ─────────────────────────────────────────────────────────────────────────────
const GuestContext = createContext();
const useGuests    = () => {
    const ctx = useContext(GuestContext);
    if (!ctx) throw new Error('useGuests must be inside GuestProvider');
    return ctx;
};

const GuestProvider = ({ children }) => {
    const { onUnauthorized } = useAuthCtx();
    const api = useCallback(makeRequest(onUnauthorized), [onUnauthorized]);

    const [guests,  setGuests]  = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,   setError]   = useState(null);

    const fetchGuests = useCallback(async () => {
        setLoading(true); setError(null);
        try {
            const res = await api(GUESTS_URL);
            if (res.success) setGuests(res.data);
            else if (res.message !== 'Not authenticated')
                throw new Error(res.message || 'Failed to load guests');
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }, [api]);

    useEffect(() => { fetchGuests(); }, [fetchGuests]);

    const addGuest = async (data) => {
        const res = await api(GUESTS_URL, 'POST', data);
        if (!res.success) throw new Error(res.message);
        setGuests(p => [...p, res.data]);
        return res.data;
    };

    const updateGuest = async (id, data) => {
        const res = await api(`${GUESTS_URL}/${id}`, 'PUT', data);
        if (!res.success) throw new Error(res.message);
        setGuests(p => p.map(g => g.id === id ? res.data : g));
        return res.data;
    };

    const deleteGuest = async (id) => {
        const res = await api(`${GUESTS_URL}/${id}`, 'DELETE');
        if (!res.success) throw new Error(res.message);
        setGuests(p => p.filter(g => g.id !== id));
    };

    const stats = useMemo(() => {
        const sum = (arr) => arr.reduce((s, g) => s + (g.invitedCount || 1), 0);
        const totalInvited   = sum(guests);
        const confirmedCount = sum(guests.filter(g => g.rsvpStatus === 'Confirmed'));
        const declinedCount  = sum(guests.filter(g => g.rsvpStatus === 'Not Coming'));
        const pendingCount   = sum(guests.filter(g => g.rsvpStatus === 'Pending'));
        const responseRate   = totalInvited ? Math.round((confirmedCount / totalInvited) * 100) : 0;
        const brideSideCount = sum(guests.filter(g => g.side === 'Bride'));
        const groomSideCount = sum(guests.filter(g => g.side === 'Groom'));
        const meals = {
            Veg:       guests.filter(g => g.dietary?.preference === 'Veg').length,
            'Non-Veg': guests.filter(g => g.dietary?.preference === 'Non-Veg').length,
            Vegan:     guests.filter(g => g.dietary?.preference === 'Vegan').length,
            Custom:    guests.filter(g => g.dietary?.preference === 'Custom').length,
        };
        return {
            totalGuests: guests.length, totalInvited,
            confirmedCount, declinedCount, pendingCount,
            responseRate, brideSideCount, groomSideCount, meals,
        };
    }, [guests]);

    return (
        <GuestContext.Provider value={{
            guests, loading, error,
            addGuest, updateGuest, deleteGuest,
            stats, refetch: fetchGuests,
        }}>
            {children}
        </GuestContext.Provider>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED UI
// ─────────────────────────────────────────────────────────────────────────────
const cn = (...c) => c.filter(Boolean).join(' ');

const Spinner = ({ className = '' }) => (
    <Loader2 className={`animate-spin ${className}`} />
);

const ErrorBanner = ({ message, onRetry }) => (
    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
        <span className="flex-1 text-sm">{message}</span>
        {onRetry && <button onClick={onRetry} className="text-xs underline">Retry</button>}
    </div>
);

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

// ─────────────────────────────────────────────────────────────────────────────
// DASHBOARD
// ─────────────────────────────────────────────────────────────────────────────
const Dashboard = () => {
    const { stats, loading, error, refetch } = useGuests();

    const rsvpData = [
        { name: 'Confirmed', value: stats.confirmedCount, color: '#10b981' },
        { name: 'Declined',  value: stats.declinedCount,  color: '#ef4444' },
        { name: 'Pending',   value: stats.pendingCount,   color: '#f59e0b' },
    ];
    const mealData = Object.entries(stats.meals).map(([name, count]) => ({ name, count }));

    if (loading) return (
        <div className="flex items-center justify-center h-64">
            <Spinner className="w-8 h-8 text-pink-500" />
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">Wedding Dashboard</h2>
                <span className="text-sm text-gray-500">Overview of your guest list</span>
            </div>

            {error && <ErrorBanner message={error} onRetry={refetch} />}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard title="Total Invited"  value={stats.totalInvited}
                    subtext={`${stats.totalGuests} parties`}
                    icon={Users}       colorClass="bg-blue-50 text-blue-600" />
                <StatCard title="Confirmed"  value={stats.confirmedCount}
                    subtext={`${stats.responseRate}% Response Rate`}
                    icon={CheckCircle} colorClass="bg-green-50 text-green-600" />
                <StatCard title="Pending"    value={stats.pendingCount}
                    subtext="Need to follow up"
                    icon={Clock}       colorClass="bg-amber-50 text-amber-600" />
                <StatCard title="Declined"   value={stats.declinedCount}
                    subtext="Will not attend"
                    icon={XCircle}     colorClass="bg-red-50 text-red-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">RSVP Status</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={rsvpData} cx="50%" cy="50%"
                                    innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                    {rsvpData.map((e, i) => <Cell key={i} fill={e.color} />)}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Meal Preferences</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={mealData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false}
                                    tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#f9fafb' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none',
                                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="count" fill="#f472b6" radius={[4,4,0,0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                        Guest Distribution (Bride vs Groom)
                    </h3>
                    <div className="flex h-16 w-full rounded-full overflow-hidden">
                        <div
                            style={{ width: `${(stats.brideSideCount / (stats.totalInvited || 1)) * 100}%` }}
                            className="bg-pink-500 flex items-center justify-center text-white font-bold transition-all duration-500 min-w-fit px-4"
                        >
                            Bride ({stats.brideSideCount})
                        </div>
                        <div
                            style={{ width: `${(stats.groomSideCount / (stats.totalInvited || 1)) * 100}%` }}
                            className="bg-blue-500 flex items-center justify-center text-white font-bold transition-all duration-500 min-w-fit px-4"
                        >
                            Groom ({stats.groomSideCount})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// GUEST FORM
// ─────────────────────────────────────────────────────────────────────────────
const GuestForm = ({ isOpen, onClose, initialData }) => {
    const { addGuest, updateGuest } = useGuests();
    const [saving,  setSaving]  = useState(false);
    const [formErr, setFormErr] = useState('');

    const blank = {
        name: '', email: '', phone: '',
        side: 'Bride', invitedCount: 1, plusOneAllowed: false,
        rsvpStatus: 'Pending',
        dietary: { preference: 'Veg', allergies: '', notes: '' },
        notes: '',
    };
    const [form, setForm] = useState(blank);

    useEffect(() => {
        setForm(initialData ? { ...initialData, dietary: { ...initialData.dietary } } : blank);
        setFormErr('');
    }, [initialData, isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true); setFormErr('');
        try {
            initialData ? await updateGuest(initialData.id, form) : await addGuest(form);
            onClose();
        } catch (err) {
            setFormErr(err.message || 'Something went wrong');
        } finally {
            setSaving(false);
        }
    };

    if (!isOpen) return null;

    const inputCls = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-bold text-gray-800">
                        {initialData ? 'Edit Guest' : 'Add New Guest'}
                    </h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {formErr && <ErrorBanner message={formErr} />}

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                <input required type="text" className={inputCls}
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className={inputCls}
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" className={inputCls}
                                    value={form.phone}
                                    onChange={e => setForm({ ...form, phone: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Side</label>
                                <select className={`${inputCls} bg-white`} value={form.side}
                                    onChange={e => setForm({ ...form, side: e.target.value })}>
                                    <option>Bride</option>
                                    <option>Groom</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">Invitation Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Invited Count</label>
                                <input type="number" min="1" className={inputCls}
                                    value={form.invitedCount}
                                    onChange={e => setForm({ ...form, invitedCount: parseInt(e.target.value) || 1 })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">RSVP Status</label>
                                <select className={`${inputCls} bg-white`} value={form.rsvpStatus}
                                    onChange={e => setForm({ ...form, rsvpStatus: e.target.value })}>
                                    <option>Pending</option>
                                    <option>Confirmed</option>
                                    <option value="Not Coming">Not Coming</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">Dietary Requirements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Meal Preference</label>
                                <select className={`${inputCls} bg-white`} value={form.dietary.preference}
                                    onChange={e => setForm({ ...form, dietary: { ...form.dietary, preference: e.target.value } })}>
                                    <option>Veg</option>
                                    <option>Non-Veg</option>
                                    <option>Vegan</option>
                                    <option>Custom</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Allergies</label>
                                <input type="text" className={inputCls}
                                    value={form.dietary.allergies}
                                    onChange={e => setForm({ ...form, dietary: { ...form.dietary, allergies: e.target.value } })} />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-gray-100">
                        <button type="button" onClick={onClose}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Cancel</button>
                        <button type="submit" disabled={saving}
                            className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg shadow-sm disabled:opacity-60 flex items-center gap-2">
                            {saving && <Spinner className="w-4 h-4" />}
                            {initialData ? 'Save Changes' : 'Add Guest'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// GUEST LIST
// ─────────────────────────────────────────────────────────────────────────────
const GuestList = () => {
    const { guests, deleteGuest, loading, error, refetch } = useGuests();
    const [search,      setSearch]      = useState('');
    const [filterSide,  setFilterSide]  = useState('All');
    const [filterRsvp,  setFilterRsvp]  = useState('All');
    const [isFormOpen,  setIsFormOpen]  = useState(false);
    const [editing,     setEditing]     = useState(null);
    const [deletingId,  setDeletingId]  = useState(null);

    const filtered = useMemo(() => guests.filter(g => {
        const q = search.toLowerCase();
        return (
            (g.name.toLowerCase().includes(q) || (g.email || '').toLowerCase().includes(q)) &&
            (filterSide === 'All' || g.side === filterSide) &&
            (filterRsvp === 'All' || g.rsvpStatus === filterRsvp)
        );
    }), [guests, search, filterSide, filterRsvp]);

    const handleDelete = async (id) => {
        if (!window.confirm('Remove this guest?')) return;
        setDeletingId(id);
        try { await deleteGuest(id); } finally { setDeletingId(null); }
    };

    const selCls = 'px-4 py-2 border border-gray-200 rounded-lg text-gray-600 bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none';

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Guest List</h2>
                    <p className="text-gray-500 text-sm">Manage your invitations and RSVPs</p>
                </div>
                <button onClick={() => { setEditing(null); setIsFormOpen(true); }}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm">
                    <Plus className="w-4 h-4" /> Add Guest
                </button>
            </div>

            {error && <ErrorBanner message={error} onRetry={refetch} />}

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Search guests…"
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                        value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <select value={filterSide} onChange={e => setFilterSide(e.target.value)} className={selCls}>
                        <option value="All">All Sides</option>
                        <option>Bride</option><option>Groom</option>
                    </select>
                    <select value={filterRsvp} onChange={e => setFilterRsvp(e.target.value)} className={selCls}>
                        <option value="All">All RSVPs</option>
                        <option>Confirmed</option>
                        <option>Pending</option>
                        <option value="Not Coming">Not Coming</option>
                    </select>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {loading ? (
                    <div className="flex justify-center items-center py-16">
                        <Spinner className="w-8 h-8 text-pink-400" />
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {['Guest Name','Side','RSVP Status','Invited','Dietary','Actions'].map(h => (
                                        <th key={h} className={`px-6 py-4 font-semibold text-gray-700 ${h==='Actions'?'text-right':''}`}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filtered.length > 0 ? filtered.map(guest => (
                                    <tr key={guest.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900">{guest.name}</div>
                                            <div className="text-gray-400 text-xs">{guest.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn('px-2 py-1 rounded-full text-xs font-medium',
                                                guest.side === 'Bride' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700')}>
                                                {guest.side}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={cn(
                                                'px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit',
                                                guest.rsvpStatus === 'Confirmed'  && 'bg-green-100 text-green-700',
                                                guest.rsvpStatus === 'Not Coming' && 'bg-red-100 text-red-700',
                                                guest.rsvpStatus === 'Pending'    && 'bg-amber-100 text-amber-700',
                                            )}>
                                                {guest.rsvpStatus === 'Confirmed'  && <Check className="w-3 h-3" />}
                                                {guest.rsvpStatus === 'Not Coming' && <X     className="w-3 h-3" />}
                                                {guest.rsvpStatus}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{guest.invitedCount}</td>
                                        <td className="px-6 py-4 text-gray-600">{guest.dietary?.preference}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => { setEditing(guest); setIsFormOpen(true); }}
                                                    className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600"
                                                    title="Edit">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(guest.id)}
                                                    disabled={deletingId === guest.id}
                                                    className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600 disabled:opacity-40"
                                                    title="Delete">
                                                    {deletingId === guest.id
                                                        ? <Spinner className="w-4 h-4" />
                                                        : <Trash2  className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-12 text-center text-gray-400">
                                            No guests found matching your filters.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <GuestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} initialData={editing} />
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// INVITATION MANAGER
// ─────────────────────────────────────────────────────────────────────────────
const InvitationManager = () => {
    const { guests, updateGuest } = useGuests();
    const [sendingTo, setSendingTo] = useState(null);

    const handleSendInvite = async (guestId) => {
        setSendingTo(guestId);
        await new Promise(r => setTimeout(r, 1500));
        try {
            await updateGuest(guestId, {
                invitation: {
                    sent:     true,
                    sentDate: new Date().toISOString().split('T')[0],
                    link:     `https://wedding.example.com/rsvp/${guestId}`,
                },
            });
        } finally { setSendingTo(null); }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Digital Invitations</h2>
                    <p className="text-gray-500 text-sm">Send and track digital invites</p>
                </div>
                <button onClick={() => alert('Bulk-send goes here!')}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 border border-gray-200 font-medium">
                    <Mail className="w-4 h-4" /> Send All Pending
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            {['Guest Name','Email / Contact','Status','Sent Date','Actions'].map(h => (
                                <th key={h} className={`px-6 py-4 font-semibold text-gray-700 ${h==='Actions'?'text-right':''}`}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {guests.map(guest => (
                            <tr key={guest.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">{guest.name}</td>
                                <td className="px-6 py-4 text-gray-500">{guest.email || guest.phone}</td>
                                <td className="px-6 py-4">
                                    {guest.invitation?.sent
                                        ? <span className="inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                                            <Check className="w-3 h-3" /> Sent
                                          </span>
                                        : <span className="inline-flex items-center gap-1 text-gray-500 bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                                            Not Sent
                                          </span>
                                    }
                                </td>
                                <td className="px-6 py-4 text-gray-500">
                                    {guest.invitation?.sentDate || '—'}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {guest.invitation?.sent
                                        ? <a href={guest.invitation.link} target="_blank" rel="noreferrer"
                                            className="text-blue-500 hover:underline text-xs inline-flex items-center gap-1">
                                            <ExternalLink className="w-3 h-3" /> View Link
                                          </a>
                                        : <button
                                            onClick={() => handleSendInvite(guest.id)}
                                            disabled={sendingTo === guest.id}
                                            className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium inline-flex items-center gap-1 ml-auto disabled:opacity-50">
                                            {sendingTo === guest.id
                                                ? <><Spinner className="w-3 h-3" /> Sending…</>
                                                : <><Send className="w-3 h-3" /> Send Invite</>}
                                          </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
const Layout = ({ children, currentView, onViewChange }) => {
    const navItems = [
        { id: 'dashboard',   label: 'Dashboard',   icon: LayoutDashboard },
        { id: 'guests',      label: 'Guest List',  icon: Users },
        { id: 'invitations', label: 'Invitations', icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            <aside className="bg-white w-64 border-r border-pink-100 flex-shrink-0 fixed h-full z-10 md:static flex flex-col">
                <div className="p-6 flex items-center gap-3 border-b border-pink-50 bg-gradient-to-r from-pink-50 to-white">
                    <div className="bg-pink-100 p-2 rounded-full shadow-sm">
                        <Flower2 className="w-6 h-6 text-pink-600" />
                    </div>
                    <h1 className="text-2xl font-bold font-serif text-pink-700 tracking-wide">Shadi Bazar</h1>
                </div>
                <nav className="p-4 space-y-2 flex-1">
                    {navItems.map(({ id, label, icon: Icon }) => {
                        const active = currentView === id;
                        return (
                            <button key={id} onClick={() => onViewChange(id)}
                                className={cn(
                                    'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group',
                                    active
                                        ? 'bg-gradient-to-r from-pink-50 to-white text-pink-700 shadow-sm border-l-4 border-pink-500'
                                        : 'text-gray-500 hover:bg-pink-50 hover:text-pink-600'
                                )}>
                                <Icon className={cn('w-5 h-5 transition-transform group-hover:scale-110',
                                    active ? 'text-pink-500' : 'text-gray-400 group-hover:text-pink-400')} />
                                <span className={cn('font-medium', active && 'font-semibold')}>{label}</span>
                            </button>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-pink-100 bg-pink-50/30">
                    <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm border border-pink-100">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">SB</div>
                        <div>
                            <span className="text-sm font-bold text-gray-800 block">Wedding Plan</span>
                            <span className="text-xs text-pink-500 font-medium">Shadi Bazar Admin</span>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex-1 overflow-x-hidden overflow-y-auto md:px-8 px-4 py-8">
                <div className="flex justify-end gap-3 mb-6">
                    <button onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg">
                        <ArrowLeft size={16} /><span className="hidden sm:inline">Back</span>
                    </button>
                    <button onClick={() => window.location.href = '/'}
                        className="flex items-center gap-2 px-3 py-1.5 text-sm bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg">
                        <Home size={16} /><span className="hidden sm:inline">Home</span>
                    </button>
                </div>
                {children}
            </main>
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// AUTH GATE
// Shows login screen ONLY if a real API call comes back with 401.
// Does NOT do a preflight /auth/me check — that was causing the false-positive.
// ─────────────────────────────────────────────────────────────────────────────
const AuthGate = ({ children }) => {
    // Start as 'authenticated' — let the first real API call prove otherwise
    const [authStatus, setAuthStatus] = useState('authenticated');

    const onUnauthorized = useCallback(() => {
        setAuthStatus('unauthenticated');
    }, []);

    if (authStatus === 'unauthenticated') return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 max-w-sm w-full text-center space-y-4">
                <div className="bg-pink-100 p-3 rounded-full w-14 h-14 mx-auto flex items-center justify-center">
                    <Flower2 className="w-7 h-7 text-pink-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Shadi Bazar</h2>
                <p className="text-gray-500 text-sm">Your session has expired. Please log in again.</p>
                <a href="/auth"
                    className="inline-block w-full bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2.5 rounded-xl shadow-sm transition-colors">
                    Go to Login
                </a>
            </div>
        </div>
    );

    return (
        <AuthContext.Provider value={{ authStatus, onUnauthorized }}>
            {children}
        </AuthContext.Provider>
    );
};

// ─────────────────────────────────────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export default function GuestManagementApp() {
    const [currentView, setCurrentView] = useState('dashboard');

    return (
        <AuthGate>
            <GuestProvider>
                <Layout currentView={currentView} onViewChange={setCurrentView}>
                    {currentView === 'dashboard'   && <Dashboard />}
                    {currentView === 'guests'      && <GuestList />}
                    {currentView === 'invitations' && <InvitationManager />}
                </Layout>
            </GuestProvider>
        </AuthGate>
    );
}