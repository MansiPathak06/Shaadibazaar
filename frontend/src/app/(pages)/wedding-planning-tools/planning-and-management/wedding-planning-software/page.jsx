"use client";

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
    Heart, Users, ShoppingBag, Calendar, Mail, FileText,
    Plus, Trash, Check, Star, ArrowLeft, Home, Loader2, AlertCircle, Save
} from 'lucide-react';

// ============================================================================
// CONFIG — change this to your backend URL
// ============================================================================
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// ============================================================================
// API HELPER — attaches JWT from localStorage automatically
// ============================================================================
const api = async (path, options = {}) => {
    const token = localStorage.getItem('token'); // adjust key if yours differs
    const res = await fetch(`${API_BASE}/wedding${path}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        ...options,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Request failed');
    return data;
};

// ============================================================================
// UI COMPONENTS
// ============================================================================

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden ${className}`}>
        {children}
    </div>
);

const Button = ({ children, variant = "primary", onClick, className = "", size = "md", disabled = false }) => {
    const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
        primary: "bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 focus:ring-rose-500 shadow-md hover:shadow-lg",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500",
        ghost: "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
    };
    const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-sm", lg: "px-6 py-3 text-base" };
    return (
        <button disabled={disabled} className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

const Input = ({ label, ...props }) => (
    <div className="mb-4">
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <input className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all" {...props} />
    </div>
);

// Inline toast / error banner
const Toast = ({ message, type = "error", onDismiss }) => (
    <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-sm font-medium
        ${type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'}`}>
        <AlertCircle className="w-4 h-4 shrink-0" />
        {message}
        <button onClick={onDismiss} className="ml-2 hover:opacity-70">✕</button>
    </div>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function WeddingPlanningSoftware() {
    const [activeTab, setActiveTab] = useState('setup');

    // ── data state (all from DB) ──────────────────────────────────────────
    const [wedding, setWedding] = useState({ bride: '', groom: '', date: '', venue: '', theme: 'Fairytale', events: [] });
    const [guests, setGuests] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [tasks, setTasks] = useState([]);

    // ── UI state ──────────────────────────────────────────────────────────
    const [loading, setLoading] = useState(true);          // initial page load
    const [saving, setSaving] = useState(false);            // any mutation in progress
    const [toast, setToast] = useState(null);               // { message, type }
    const [inviteType, setInviteType] = useState('joint');
    const [newGuest, setNewGuest] = useState({ name: '', contact: '', email: '', side: 'Bride' });
    const [newVendor, setNewVendor] = useState({ name: '', category: 'Caterer', contact: '' });
    const [showGuestForm, setShowGuestForm] = useState(false);
    const [showVendorForm, setShowVendorForm] = useState(false);
    const [setupDirty, setSetupDirty] = useState(false);    // tracks unsaved setup changes

    // ── helpers ───────────────────────────────────────────────────────────
    const showToast = (message, type = 'error') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    const withSaving = async (fn) => {
        setSaving(true);
        try { await fn(); }
        catch (err) { showToast(err.message); }
        finally { setSaving(false); }
    };

    // ── derived ───────────────────────────────────────────────────────────
    const daysLeft = useMemo(() => {
        if (!wedding.date) return 0;
        return Math.ceil((new Date(wedding.date) - new Date()) / (1000 * 60 * 60 * 24));
    }, [wedding.date]);

    const taskProgress = useMemo(() => {
        if (!tasks.length) return 0;
        return Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);
    }, [tasks]);

    // ── INITIAL LOAD: fetch everything in parallel ─────────────────────────
    const loadAll = useCallback(async () => {
        setLoading(true);
        try {
            const [setupRes, guestRes, vendorRes, taskRes] = await Promise.all([
                api('/setup'),
                api('/guests'),
                api('/vendors'),
                api('/tasks'),
            ]);

            const s = setupRes.data;
            setWedding({
                bride: s.bride || '',
                groom: s.groom || '',
                date: s.wedding_date ? s.wedding_date.split('T')[0] : '',
                venue: s.venue || '',
                theme: s.theme || 'Fairytale',
                events: setupRes.data.events || [],
            });
            setGuests(guestRes.data);
            setVendors(vendorRes.data);
            setTasks(taskRes.data.map(t => ({ ...t, completed: !!t.completed, deadline: t.deadline ? t.deadline.split('T')[0] : '' })));
        } catch (err) {
            showToast('Could not load wedding data. Are you logged in?');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { loadAll(); }, [loadAll]);

    // ============================================================
    // SETUP HANDLERS
    // ============================================================
    const handleSetupChange = (field, value) => {
        setWedding(prev => ({ ...prev, [field]: value }));
        setSetupDirty(true);
    };

    const handleSaveSetup = () => withSaving(async () => {
        await api('/setup', {
            method: 'PUT',
            body: JSON.stringify({ bride: wedding.bride, groom: wedding.groom, date: wedding.date, venue: wedding.venue, theme: wedding.theme }),
        });
        setSetupDirty(false);
        showToast('Wedding details saved!', 'success');
    });

    const handleAddEvent = (name) => withSaving(async () => {
        const res = await api('/events', { method: 'POST', body: JSON.stringify({ name }) });
        setWedding(prev => ({ ...prev, events: [...prev.events, res.data] }));
    });

    const removeEvent = (id) => withSaving(async () => {
        await api(`/events/${id}`, { method: 'DELETE' });
        setWedding(prev => ({ ...prev, events: prev.events.filter(e => e.id !== id) }));
    });

    // ============================================================
    // GUEST HANDLERS
    // ============================================================
    const handleAddGuest = () => withSaving(async () => {
        if (!newGuest.name) return showToast('Guest name is required');
        const res = await api('/guests', { method: 'POST', body: JSON.stringify(newGuest) });
        setGuests(prev => [...prev, res.data]);
        setNewGuest({ name: '', contact: '', email: '', side: 'Bride' });
        setShowGuestForm(false);
        showToast('Guest added!', 'success');
    });

    const handleUpdateRsvp = (guestId, rsvp) => withSaving(async () => {
        await api(`/guests/${guestId}/rsvp`, { method: 'PATCH', body: JSON.stringify({ rsvp }) });
        setGuests(prev => prev.map(g => g.id === guestId ? { ...g, rsvp } : g));
    });

    const handleDeleteGuest = (guestId) => withSaving(async () => {
        await api(`/guests/${guestId}`, { method: 'DELETE' });
        setGuests(prev => prev.filter(g => g.id !== guestId));
    });

    // ============================================================
    // VENDOR HANDLERS
    // ============================================================
    const handleAddVendor = () => withSaving(async () => {
        if (!newVendor.name) return showToast('Vendor name is required');
        const res = await api('/vendors', { method: 'POST', body: JSON.stringify(newVendor) });
        setVendors(prev => [...prev, res.data]);
        setNewVendor({ name: '', category: 'Caterer', contact: '' });
        setShowVendorForm(false);
        showToast('Vendor added!', 'success');
    });

    const handleUpdateVendor = (vendorId, patch) => withSaving(async () => {
        await api(`/vendors/${vendorId}`, { method: 'PATCH', body: JSON.stringify(patch) });
        setVendors(prev => prev.map(v => v.id === vendorId ? { ...v, ...patch } : v));
    });

    const handleDeleteVendor = (vendorId) => withSaving(async () => {
        await api(`/vendors/${vendorId}`, { method: 'DELETE' });
        setVendors(prev => prev.filter(v => v.id !== vendorId));
    });

    // ============================================================
    // TASK HANDLERS
    // ============================================================
    const handleAddTask = () => withSaving(async () => {
        const title = prompt('New Task:');
        if (!title) return;
        const res = await api('/tasks', { method: 'POST', body: JSON.stringify({ title }) });
        setTasks(prev => [...prev, { ...res.data, completed: false, deadline: '' }]);
    });

    const handleToggleTask = (taskId, completed) => withSaving(async () => {
        await api(`/tasks/${taskId}`, { method: 'PATCH', body: JSON.stringify({ completed: !completed }) });
        setTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: !completed } : t));
    });

    const handleTaskDeadline = (taskId, deadline) => withSaving(async () => {
        await api(`/tasks/${taskId}`, { method: 'PATCH', body: JSON.stringify({ deadline }) });
        setTasks(prev => prev.map(t => t.id === taskId ? { ...t, deadline } : t));
    });

    const handleDeleteTask = (taskId) => withSaving(async () => {
        await api(`/tasks/${taskId}`, { method: 'DELETE' });
        setTasks(prev => prev.filter(t => t.id !== taskId));
    });

    // ============================================================
    // TABS CONFIG
    // ============================================================
    const tabs = [
        { id: 'setup', label: 'Wedding Setup', icon: Heart },
        { id: 'guests', label: 'Guest List', icon: Users },
        { id: 'vendors', label: 'Vendors', icon: ShoppingBag },
        { id: 'tasks', label: 'Tasks & Timeline', icon: Calendar },
        { id: 'invites', label: 'Invitations', icon: Mail },
    ];

    // ============================================================
    // LOADING SCREEN
    // ============================================================
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <Loader2 className="w-10 h-10 text-rose-500 animate-spin mx-auto mb-4" />
                    <p className="text-gray-500 text-sm">Loading your wedding...</p>
                </div>
            </div>
        );
    }

    // ============================================================
    // RENDER
    // ============================================================
    return (
        <div className="min-h-screen flex bg-slate-50">
            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onDismiss={() => setToast(null)} />}

            {/* Saving overlay indicator (subtle) */}
            {saving && (
                <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-lg text-sm text-gray-600">
                    <Loader2 className="w-4 h-4 animate-spin text-rose-500" /> Saving...
                </div>
            )}

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block sticky top-0 h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-rose-500 text-3xl">❤</span>
                        Shadi Bazar
                    </h1>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Wedding Organizer</p>
                </div>
                <nav className="px-4 space-y-1">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id ? 'bg-rose-50 text-rose-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                                <Icon className="w-5 h-5" />
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50/50">
                    <div className="text-sm font-medium text-gray-900">Progress</div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-rose-500 h-2 rounded-full transition-all duration-500" style={{ width: `${taskProgress}%` }}></div>
                    </div>
                    <div className="mt-1 text-xs text-gray-500 text-right">{taskProgress}% ready</div>
                </div>
            </aside>

            {/* Mobile Nav */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-around p-2">
                {tabs.slice(0, 4).map(tab => {
                    const Icon = tab.icon;
                    return (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={`p-2 rounded-lg ${activeTab === tab.id ? 'text-rose-600 bg-rose-50' : 'text-gray-400'}`}>
                            <Icon className="w-6 h-6" />
                        </button>
                    );
                })}
            </div>

            {/* Main Content */}
            <main className="flex-1 p-8 pb-24 md:pb-8 overflow-y-auto">
                <header className="mb-8 flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900">
                            {tabs.find(t => t.id === activeTab)?.label}
                        </h2>
                        <p className="text-gray-500 mt-2">
                            {wedding.bride && wedding.groom ? `${wedding.bride} & ${wedding.groom}` : 'Plan your perfect day'}
                            {wedding.date && (
                                <span className="ml-2 px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-xs font-semibold">
                                    {daysLeft > 0 ? `${daysLeft} Days to go!` : '🎉 Big Day!'}
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-all">
                            <ArrowLeft size={16} /><span className="hidden sm:inline">Back</span>
                        </button>
                        <button onClick={() => window.location.href = '/'}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-all">
                            <Home size={16} /><span className="hidden sm:inline">Home</span>
                        </button>
                        <div className="hidden lg:block text-right">
                            <div className="text-sm text-gray-400">Wedding Date</div>
                            <div className="text-lg font-medium text-gray-900">{wedding.date || 'Set a date'}</div>
                        </div>
                    </div>
                </header>

                <div className="max-w-5xl mx-auto">

                    {/* ── SETUP TAB ─────────────────────────────────────────── */}
                    {activeTab === 'setup' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6">
                                <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900">Couple Details</h3>
                                    {setupDirty && (
                                        <Button size="sm" onClick={handleSaveSetup} disabled={saving}>
                                            <Save className="w-4 h-4 mr-1" /> Save
                                        </Button>
                                    )}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Bride's Name" value={wedding.bride} onChange={e => handleSetupChange('bride', e.target.value)} placeholder="Jane Doe" />
                                    <Input label="Groom's Name" value={wedding.groom} onChange={e => handleSetupChange('groom', e.target.value)} placeholder="John Smith" />
                                </div>
                                <Input label="Wedding Date" type="date" value={wedding.date} onChange={e => handleSetupChange('date', e.target.value)} />
                                <Input label="Venue" value={wedding.venue} onChange={e => handleSetupChange('venue', e.target.value)} placeholder="Grand Plaza Hotel" />
                                <Input label="Theme" value={wedding.theme} onChange={e => handleSetupChange('theme', e.target.value)} placeholder="Rustic, Modern, etc." />
                                {setupDirty && (
                                    <p className="text-xs text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                                        ⚠️ You have unsaved changes. Click Save to persist them.
                                    </p>
                                )}
                            </Card>

                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Events</h3>
                                <div className="flex gap-2 mb-4">
                                    <select id="newEventInput" className="flex-1 px-4 py-2 rounded-lg border border-gray-200 bg-white">
                                        <option value="">Select Event Type...</option>
                                        {['Engagement', 'Roka', 'Sangeet', 'Mehndi', 'Haldi', 'Cocktail', 'Baraat', 'Wedding Ceremony', 'Reception', 'After Party'].map(evt => (
                                            <option key={evt} value={evt}>{evt}</option>
                                        ))}
                                    </select>
                                    <Button disabled={saving} onClick={() => {
                                        const input = document.getElementById('newEventInput');
                                        if (input.value) { handleAddEvent(input.value); input.value = ''; }
                                    }}>Add</Button>
                                </div>
                                <div className="space-y-2">
                                    {wedding.events.length === 0 && <p className="text-gray-400 text-sm italic">No events added yet.</p>}
                                    {wedding.events.map(event => (
                                        <div key={event.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group">
                                            <span className="font-medium text-gray-700">{event.name}</span>
                                            <button onClick={() => removeEvent(event.id)} disabled={saving}
                                                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Trash className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* ── GUESTS TAB ─────────────────────────────────────────── */}
                    {activeTab === 'guests' && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { label: 'Total Guests', val: guests.length, color: 'bg-blue-50 text-blue-600' },
                                    { label: 'Confirmed', val: guests.filter(g => g.rsvp === 'Confirmed').length, color: 'bg-green-50 text-green-600' },
                                    { label: 'Pending', val: guests.filter(g => g.rsvp === 'Pending').length, color: 'bg-yellow-50 text-yellow-600' },
                                    { label: 'Bride Side', val: guests.filter(g => g.side === 'Bride').length, color: 'bg-pink-50 text-pink-600' },
                                ].map((stat, i) => (
                                    <div key={i} className={`p-4 rounded-xl ${stat.color}`}>
                                        <div className="text-2xl font-bold">{stat.val}</div>
                                        <div className="text-xs font-medium uppercase opacity-80">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <select className="px-4 py-2 border rounded-lg bg-white text-sm">
                                    <option value="all">All Guests</option>
                                    <option value="bride">Bride Side</option>
                                    <option value="groom">Groom Side</option>
                                </select>
                                <Button onClick={() => setShowGuestForm(!showGuestForm)}>
                                    <Plus className="w-5 h-5 mr-2" />{showGuestForm ? 'Cancel' : 'Add Guest'}
                                </Button>
                            </div>

                            {showGuestForm && (
                                <Card className="p-4 bg-gray-50 border border-gray-100">
                                    <h4 className="font-semibold text-gray-900 mb-3">Add New Guest</h4>
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <Input placeholder="Full Name" value={newGuest.name} onChange={e => setNewGuest({ ...newGuest, name: e.target.value })} />
                                        <Input placeholder="Contact Number" value={newGuest.contact} onChange={e => setNewGuest({ ...newGuest, contact: e.target.value })} />
                                        <Input placeholder="Email Address" value={newGuest.email} onChange={e => setNewGuest({ ...newGuest, email: e.target.value })} />
                                        <div className="mb-4">
                                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 outline-none"
                                                value={newGuest.side} onChange={e => setNewGuest({ ...newGuest, side: e.target.value })}>
                                                <option value="Bride">Bride Side</option>
                                                <option value="Groom">Groom Side</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Button onClick={handleAddGuest} disabled={saving}>
                                        {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                        Save Guest
                                    </Button>
                                </Card>
                            )}

                            <Card className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-gray-600">
                                    <thead className="bg-gray-50 text-gray-900 uppercase font-semibold text-xs border-b border-gray-100">
                                        <tr>
                                            <th className="p-4">Name</th>
                                            <th className="p-4">Contact</th>
                                            <th className="p-4">Side</th>
                                            <th className="p-4">Table</th>
                                            <th className="p-4">RSVP</th>
                                            <th className="p-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {guests.length === 0 ? (
                                            <tr><td colSpan="6" className="p-8 text-center text-gray-400">No guests added yet. Click "Add Guest" to start!</td></tr>
                                        ) : guests.map(guest => (
                                            <tr key={guest.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-4 font-medium text-gray-900">{guest.name}</td>
                                                <td className="p-4 text-xs">{guest.email}<br />{guest.contact}</td>
                                                <td className="p-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${guest.side === 'Bride' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {guest.side}
                                                    </span>
                                                </td>
                                                <td className="p-4">{guest.table_no || '-'}</td>
                                                <td className="p-4">
                                                    <select
                                                        className={`p-1 rounded text-xs font-semibold ${guest.rsvp === 'Confirmed' ? 'text-green-600 bg-green-50' : guest.rsvp === 'Not Coming' ? 'text-red-600 bg-red-50' : 'text-yellow-600 bg-yellow-50'}`}
                                                        value={guest.rsvp}
                                                        onChange={e => handleUpdateRsvp(guest.id, e.target.value)}
                                                        disabled={saving}
                                                    >
                                                        <option value="Confirmed">Confirmed</option>
                                                        <option value="Pending">Pending</option>
                                                        <option value="Not Coming">Not Coming</option>
                                                    </select>
                                                </td>
                                                <td className="p-4 text-right">
                                                    <button onClick={() => handleDeleteGuest(guest.id)} disabled={saving}
                                                        className="text-gray-400 hover:text-red-500 transition-colors disabled:opacity-40">
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                    )}

                    {/* ── VENDORS TAB ────────────────────────────────────────── */}
                    {activeTab === 'vendors' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-gray-500">Manage your wedding team</div>
                                <Button onClick={() => setShowVendorForm(!showVendorForm)}>
                                    {showVendorForm ? 'Cancel' : 'Add Vendor'}
                                </Button>
                            </div>

                            {showVendorForm && (
                                <Card className="p-6 mb-6 border border-rose-100 bg-rose-50/30">
                                    <h4 className="font-semibold text-gray-900 mb-4">Add New Vendor</h4>
                                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                                        <Input placeholder="Vendor Name" value={newVendor.name} onChange={e => setNewVendor({ ...newVendor, name: e.target.value })} />
                                        <div className="mb-4">
                                            <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 outline-none bg-white"
                                                value={newVendor.category} onChange={e => setNewVendor({ ...newVendor, category: e.target.value })}>
                                                {['Caterer', 'Decorator', 'Photographer', 'Videographer', 'Makeup Artist', 'DJ/Music', 'Venue', 'Florist', 'Officiant', 'Transport'].map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <Input placeholder="Contact Info" value={newVendor.contact} onChange={e => setNewVendor({ ...newVendor, contact: e.target.value })} />
                                    </div>
                                    <Button onClick={handleAddVendor} disabled={saving}>
                                        {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                        Save Vendor
                                    </Button>
                                </Card>
                            )}

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {vendors.length === 0 ? (
                                    <div className="col-span-full text-center py-12 text-gray-400">No vendors added yet.</div>
                                ) : vendors.map(vendor => (
                                    <Card key={vendor.id} className="p-6 relative group">
                                        <button onClick={() => handleDeleteVendor(vendor.id)} disabled={saving}
                                            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-40">
                                            <Trash className="w-4 h-4" />
                                        </button>
                                        <div className="mb-4">
                                            <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md font-medium uppercase tracking-wide">{vendor.category}</span>
                                            <h3 className="text-xl font-bold text-gray-900 mt-2">{vendor.name}</h3>
                                        </div>
                                        <div className="space-y-3 text-sm text-gray-600 mb-6">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-5 h-5" /><span>{vendor.contact || 'No contact info'}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${vendor.status === 'Paid' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                                <select value={vendor.status} disabled={saving}
                                                    onChange={e => handleUpdateVendor(vendor.id, { status: e.target.value })}
                                                    className="bg-transparent border-b border-dashed border-gray-300 focus:border-rose-500 outline-none">
                                                    <option value="Paid">Paid</option>
                                                    <option value="Pending">Pending</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map(star => (
                                                    <button key={star} disabled={saving}
                                                        onClick={() => handleUpdateVendor(vendor.id, { rating: star })}
                                                        className={star <= vendor.rating ? 'text-yellow-400' : 'text-gray-200'}>
                                                        <Star className="w-4 h-4" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100">
                                            <label className="flex items-center gap-2 text-xs text-blue-600 cursor-pointer hover:underline">
                                                <FileText className="w-5 h-5" /> Upload Contract
                                                <input type="file" className="hidden" onChange={e => alert(`File ${e.target.files[0].name} uploaded for ${vendor.name}`)} />
                                            </label>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── TASKS TAB ──────────────────────────────────────────── */}
                    {activeTab === 'tasks' && (
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">
                                            {daysLeft > 0 ? `${daysLeft} days left` : '🎉 Today is the day!'}
                                        </h2>
                                        <p className="text-rose-100">You have completed {taskProgress}% of your tasks.</p>
                                    </div>
                                    <Calendar className="w-16 h-16 opacity-20" />
                                </div>
                            </div>

                            <Card>
                                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                    <h3 className="font-semibold text-gray-900">To-Do List</h3>
                                    <Button size="sm" onClick={handleAddTask} disabled={saving}>
                                        {saving ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : <Plus className="w-4 h-4 mr-1" />}
                                        Add Task
                                    </Button>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {tasks.length === 0 ? (
                                        <div className="p-8 text-center text-gray-400">No tasks yet. Click "Add Task" to start!</div>
                                    ) : tasks.map(task => {
                                        const isOverdue = task.deadline && new Date(task.deadline) < new Date() && !task.completed;
                                        return (
                                            <div key={task.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                                                <button
                                                    onClick={() => handleToggleTask(task.id, task.completed)}
                                                    disabled={saving}
                                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors disabled:opacity-40
                                                        ${task.completed ? 'bg-rose-500 border-rose-500 text-white' : 'border-gray-300 text-transparent hover:border-rose-400'}`}>
                                                    <Check className="w-4 h-4" />
                                                </button>
                                                <div className="flex-1">
                                                    <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                                        {task.title}
                                                    </p>
                                                    {task.deadline && (
                                                        <p className={`text-xs mt-1 ${isOverdue ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                                                            {isOverdue ? 'Overdue: ' : 'Due: '}{task.deadline}
                                                        </p>
                                                    )}
                                                </div>
                                                <input type="date" className="text-xs border rounded p-1 text-gray-500"
                                                    value={task.deadline || ''}
                                                    onChange={e => handleTaskDeadline(task.id, e.target.value)}
                                                    disabled={saving}
                                                />
                                                <button onClick={() => handleDeleteTask(task.id)} disabled={saving}
                                                    className="text-gray-300 hover:text-red-500 disabled:opacity-40">
                                                    <Trash className="w-4 h-4" />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* ── INVITATIONS TAB ────────────────────────────────────── */}
                    {activeTab === 'invites' && (
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Digital Invitation</h3>
                                <Card className="aspect-[4/5] bg-white border-8 border-double border-gray-100 flex flex-col items-center justify-center text-center p-12 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-[100px] -z-0"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-100 rounded-tr-[100px] -z-0"></div>
                                    <div className="relative z-10">
                                        <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-4">
                                            {inviteType === 'joint' ? 'Together with their families' : 'The Family of'}
                                        </p>
                                        {inviteType !== 'groom' && (
                                            <>
                                                <h1 className="font-serif text-5xl text-gray-900 mb-2">{wedding.bride || 'Bride'}</h1>
                                                <div className="text-3xl text-rose-400 font-serif italic mb-2">
                                                    {inviteType === 'joint' ? '&' : 'weds'}
                                                </div>
                                            </>
                                        )}
                                        <h1 className="font-serif text-5xl text-gray-900 mb-8">{wedding.groom || 'Groom'}</h1>
                                        {inviteType === 'groom' && (
                                            <>
                                                <div className="text-3xl text-rose-400 font-serif italic mb-2 -mt-6">weds</div>
                                                <h1 className="font-serif text-5xl text-gray-900 mb-8">{wedding.bride || 'Bride'}</h1>
                                            </>
                                        )}
                                        <p className="text-gray-600 mb-6">invite you to celebrate their wedding</p>
                                        <div className="border-y border-gray-200 py-4 my-4 w-full">
                                            <p className="text-xl font-medium text-gray-900">{wedding.date || 'Date TBD'}</p>
                                            <p className="text-gray-500 mt-1">{wedding.venue || 'Venue TBD'}</p>
                                        </div>
                                        <Button className="mt-6">RSVP Now</Button>
                                    </div>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card className="p-6">
                                    <h4 className="font-semibold text-gray-900 mb-4">Invitation Settings</h4>
                                    <div className="space-y-2 mb-6">
                                        <label className="text-sm font-medium text-gray-700">Sender Side</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['joint', 'bride', 'groom'].map(type => (
                                                <button key={type} onClick={() => setInviteType(type)}
                                                    className={`px-3 py-2 text-sm rounded-lg border ${inviteType === type ? 'bg-rose-50 border-rose-200 text-rose-700 font-medium' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-4 pt-4 border-t border-gray-100">Share Invitation</h4>
                                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 break-all text-sm text-gray-600 font-mono">
                                        https://shadibazar.com/rsvp/{wedding.bride?.toLowerCase() || 'bride'}-{wedding.groom?.toLowerCase() || 'groom'}
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <Button className="w-full" onClick={() => { navigator.clipboard.writeText(`https://shadibazar.com/rsvp/${wedding.bride?.toLowerCase() || 'bride'}-${wedding.groom?.toLowerCase() || 'groom'}`); showToast('Link copied!', 'success'); }}>
                                            Copy Link
                                        </Button>
                                        <Button variant="secondary" className="w-full">Send Email</Button>
                                    </div>
                                </Card>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                                    <h4 className="font-semibold text-blue-900 mb-2">Auto-RSVP Sync</h4>
                                    <p className="text-sm text-blue-700">
                                        Guests who RSVP digitally will automatically update your Guest List.
                                        Currently <strong>{guests.filter(g => g.rsvp === 'Confirmed').length}</strong> guests have confirmed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}