"use client";

import React, { useState, useMemo } from 'react';
import {
    Heart, Users, ShoppingBag, Calendar, Mail, FileText, Plus, Trash, Check, Star, Menu, X, ArrowLeft, Home
} from 'lucide-react';

// ============================================================================
// UI COMPONENTS
// ============================================================================

const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden ${className}`}>
        {children}
    </div>
);

const Button = ({ children, variant = "primary", onClick, className = "", size = "md" }) => {
    const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variants = {
        primary: "bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 focus:ring-rose-500 shadow-md hover:shadow-lg",
        secondary: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500",
        ghost: "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
    };
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base"
    };
    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

const Input = ({ label, ...props }) => (
    <div className="mb-4">
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <input
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all"
            {...props}
        />
    </div>
);

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function WeddingPlanningSoftware() {
    const [activeTab, setActiveTab] = useState('setup');

    // --- State ---
    const [wedding, setWedding] = useState({
        bride: '',
        groom: '',
        date: '',
        venue: '',
        theme: 'Fairytale',
        events: []
    });

    const [guests, setGuests] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [tasks, setTasks] = useState([]);

    // Invitation State
    const [inviteType, setInviteType] = useState('joint'); // joint, bride, groom

    // Form States
    const [newGuest, setNewGuest] = useState({ name: '', contact: '', email: '', side: 'Bride' });
    const [newVendor, setNewVendor] = useState({ name: '', category: 'Caterer', contact: '' });
    const [showGuestForm, setShowGuestForm] = useState(false);
    const [showVendorForm, setShowVendorForm] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // --- Derived State ---
    const daysLeft = useMemo(() => {
        if (!wedding.date) return 0;
        const diff = new Date(wedding.date) - new Date();
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }, [wedding.date]);

    const taskProgress = useMemo(() => {
        if (tasks.length === 0) return 0;
        return Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);
    }, [tasks]);

    // --- Handlers ---
    const handleAddEvent = (name) => {
        if (name) setWedding(prev => ({ ...prev, events: [...prev.events, { id: Date.now(), name }] }));
    };

    const removeEvent = (id) => {
        setWedding(prev => ({ ...prev, events: prev.events.filter(e => e.id !== id) }));
    };

    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    const tabs = [
        { id: 'setup', label: 'Wedding Setup', icon: Heart },
        { id: 'guests', label: 'Guest List', icon: Users },
        { id: 'vendors', label: 'Vendors', icon: ShoppingBag },
        { id: 'tasks', label: 'Tasks & Timeline', icon: Calendar },
        { id: 'invites', label: 'Invitations', icon: Mail },
    ];

    return (
        <div className="min-h-screen flex bg-slate-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block sticky top-0 h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                        <span className="text-rose-500 text-3xl">❤</span>
                        Shadi Bazar
                    </h1>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Wedding organized</p>
                </div>
                <nav className="px-4 space-y-1">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === tab.id
                                    ? 'bg-rose-50 text-rose-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
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
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`p-2 rounded-lg ${activeTab === tab.id ? 'text-rose-600 bg-rose-50' : 'text-gray-400'}`}
                        >
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
                            {wedding.date && <span className="ml-2 px-2 py-0.5 bg-rose-100 text-rose-600 rounded-full text-xs font-semibold">{daysLeft > 0 ? `${daysLeft} Days to go!` : 'Big Day!'}</span>}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-all duration-200"
                        >
                            <ArrowLeft size={16} />
                            <span className="hidden sm:inline">Back</span>
                        </button>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-all duration-200"
                        >
                            <Home size={16} />
                            <span className="hidden sm:inline">Home</span>
                        </button>
                        <div className="hidden lg:block">
                            <div className="text-right">
                                <div className="text-sm text-gray-400">Wedding Date</div>
                                <div className="text-lg font-medium text-gray-900">{wedding.date || 'Set a date'}</div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-5xl mx-auto animate-fade-in">

                    {/* --- SETUP TAB --- */}
                    {activeTab === 'setup' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Couple Details</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="Bride's Name"
                                        value={wedding.bride}
                                        onChange={e => setWedding({ ...wedding, bride: e.target.value })}
                                        placeholder="Jane Doe"
                                    />
                                    <Input
                                        label="Groom's Name"
                                        value={wedding.groom}
                                        onChange={e => setWedding({ ...wedding, groom: e.target.value })}
                                        placeholder="John Smith"
                                    />
                                </div>
                                <Input
                                    label="Wedding Date"
                                    type="date"
                                    value={wedding.date}
                                    onChange={e => setWedding({ ...wedding, date: e.target.value })}
                                />
                                <Input
                                    label="Venue"
                                    value={wedding.venue}
                                    onChange={e => setWedding({ ...wedding, venue: e.target.value })}
                                    placeholder="Grand Plaza Hotel"
                                />
                                <Input
                                    label="Theme"
                                    value={wedding.theme}
                                    onChange={e => setWedding({ ...wedding, theme: e.target.value })}
                                    placeholder="Rustic, Modern, etc."
                                />
                            </Card>

                            <Card className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">Events</h3>
                                <div className="flex gap-2 mb-4">
                                    <select
                                        id="newEventInput"
                                        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 bg-white"
                                    >
                                        <option value="">Select Event Type...</option>
                                        {['Engagement', 'Roka', 'Sangeet', 'Mehndi', 'Haldi', 'Cocktail', 'Baraat', 'Wedding Ceremony', 'Reception', 'After Party'].map(evt => (
                                            <option key={evt} value={evt}>{evt}</option>
                                        ))}
                                    </select>
                                    <Button onClick={() => {
                                        const input = document.getElementById('newEventInput');
                                        if (input.value) {
                                            handleAddEvent(input.value);
                                            input.value = '';
                                        }
                                    }}>Add</Button>
                                </div>
                                <div className="space-y-2">
                                    {wedding.events.length === 0 && <p className="text-gray-400 text-sm italic">No events added yet.</p>}
                                    {wedding.events.map(event => (
                                        <div key={event.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group">
                                            <span className="font-medium text-gray-700">{event.name}</span>
                                            <button onClick={() => removeEvent(event.id)} className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Trash className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* --- GUESTS TAB --- */}
                    {activeTab === 'guests' && (
                        <div className="space-y-6">
                            {/* Stats */}
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

                            {/* Actions */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <select className="px-4 py-2 border rounded-lg bg-white text-sm">
                                            <option value="all">All Guests</option>
                                            <option value="bride">Bride Side</option>
                                            <option value="groom">Groom Side</option>
                                        </select>
                                    </div>
                                    <Button onClick={() => setShowGuestForm(!showGuestForm)}>
                                        <Plus className="w-5 h-5 mr-2" /> {showGuestForm ? 'Cancel' : 'Add Guest'}
                                    </Button>
                                </div>

                                {/* Add Guest Form */}
                                {showGuestForm && (
                                    <Card className="p-4 bg-gray-50 border border-gray-100 animate-fade-in">
                                        <h4 className="font-semibold text-gray-900 mb-3">Add New Guest</h4>
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <Input
                                                placeholder="Full Name"
                                                value={newGuest.name}
                                                onChange={e => setNewGuest({ ...newGuest, name: e.target.value })}
                                            />
                                            <Input
                                                placeholder="Contact Number"
                                                value={newGuest.contact}
                                                onChange={e => setNewGuest({ ...newGuest, contact: e.target.value })}
                                            />
                                            <Input
                                                placeholder="Email Address"
                                                value={newGuest.email}
                                                onChange={e => setNewGuest({ ...newGuest, email: e.target.value })}
                                            />
                                            <div className="mb-4">
                                                <select
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 outline-none"
                                                    value={newGuest.side}
                                                    onChange={e => setNewGuest({ ...newGuest, side: e.target.value })}
                                                >
                                                    <option value="Bride">Bride Side</option>
                                                    <option value="Groom">Groom Side</option>
                                                </select>
                                            </div>
                                        </div>
                                        <Button onClick={() => {
                                            if (newGuest.name) {
                                                setGuests([...guests, {
                                                    id: Date.now(),
                                                    ...newGuest,
                                                    rsvp: 'Pending',
                                                    table: '-'
                                                }]);
                                                setNewGuest({ name: '', contact: '', email: '', side: 'Bride' });
                                                setShowGuestForm(false);
                                            }
                                        }}>Save Guest</Button>
                                    </Card>
                                )}
                            </div>

                            {/* Table */}
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
                                            <tr>
                                                <td colSpan="6" className="p-8 text-center text-gray-400">
                                                    No guests added yet. Click "Add Guest" to start!
                                                </td>
                                            </tr>
                                        ) : (
                                            guests.map(guest => (
                                                <tr key={guest.id} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="p-4 font-medium text-gray-900">{guest.name}</td>
                                                    <td className="p-4 text-xs">{guest.email}<br />{guest.contact}</td>
                                                    <td className="p-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${guest.side === 'Bride' ? 'bg-rose-100 text-rose-700' : 'bg-blue-100 text-blue-700'}`}>
                                                            {guest.side}
                                                        </span>
                                                    </td>
                                                    <td className="p-4">{guest.table}</td>
                                                    <td className="p-4">
                                                        <select
                                                            className={`p-1 rounded text-xs font-semibold ${guest.rsvp === 'Confirmed' ? 'text-green-600 bg-green-50' :
                                                                guest.rsvp === 'Not Coming' ? 'text-red-600 bg-red-50' : 'text-yellow-600 bg-yellow-50'
                                                                }`}
                                                            value={guest.rsvp}
                                                            onChange={(e) => {
                                                                setGuests(guests.map(g => g.id === guest.id ? { ...g, rsvp: e.target.value } : g))
                                                            }}
                                                        >
                                                            <option value="Confirmed">Confirmed</option>
                                                            <option value="Pending">Pending</option>
                                                            <option value="Not Coming">Not Coming</option>
                                                        </select>
                                                    </td>
                                                    <td className="p-4 text-right">
                                                        <button
                                                            onClick={() => setGuests(guests.filter(g => g.id !== guest.id))}
                                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash className="w-4 h-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                    )}

                    {/* --- VENDORS TAB --- */}
                    {activeTab === 'vendors' && (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-gray-500">Manage your wedding team</div>
                                <Button onClick={() => setShowVendorForm(!showVendorForm)}>
                                    {showVendorForm ? 'Cancel' : 'Add Vendor'}
                                </Button>
                            </div>

                            {/* Add Vendor Form */}
                            {showVendorForm && (
                                <Card className="p-6 mb-6 border border-rose-100 bg-rose-50/30">
                                    <h4 className="font-semibold text-gray-900 mb-4">Add New Vendor</h4>
                                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                                        <Input
                                            placeholder="Vendor Name (e.g. Elegant Eats)"
                                            value={newVendor.name}
                                            onChange={e => setNewVendor({ ...newVendor, name: e.target.value })}
                                        />
                                        <div className="mb-4">
                                            <select
                                                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-rose-500 outline-none bg-white"
                                                value={newVendor.category}
                                                onChange={e => setNewVendor({ ...newVendor, category: e.target.value })}
                                            >
                                                {['Caterer', 'Decorator', 'Photographer', 'Videographer', 'Makeup Artist', 'DJ/Music', 'Venue', 'Florist', 'Officiant', 'Transport'].map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <Input
                                            placeholder="Contact Info"
                                            value={newVendor.contact}
                                            onChange={e => setNewVendor({ ...newVendor, contact: e.target.value })}
                                        />
                                    </div>
                                    <Button onClick={() => {
                                        if (newVendor.name) {
                                            setVendors([...vendors, {
                                                id: Date.now(),
                                                ...newVendor,
                                                status: 'Pending',
                                                rating: 0
                                            }]);
                                            setNewVendor({ name: '', category: 'Caterer', contact: '' });
                                            setShowVendorForm(false);
                                        }
                                    }}>Save Vendor</Button>
                                </Card>
                            )}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {vendors.length === 0 ? (
                                    <div className="col-span-full text-center py-12 text-gray-400">
                                        No vendors added yet. Click "Add Vendor" to start!
                                    </div>
                                ) : (
                                    vendors.map(vendor => (
                                        <Card key={vendor.id} className="p-6 relative group">
                                            <button
                                                onClick={() => setVendors(vendors.filter(v => v.id !== vendor.id))}
                                                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <Trash className="w-4 h-4" />
                                            </button>
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <span className="px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md font-medium uppercase tracking-wide">{vendor.category}</span>
                                                    <h3 className="text-xl font-bold text-gray-900 mt-2">{vendor.name}</h3>
                                                </div>
                                            </div>
                                            <div className="space-y-3 text-sm text-gray-600 mb-6">
                                                <div className="flex items-center gap-2">
                                                    <Users className="w-5 h-5" /> <span>{vendor.contact || 'No contact info'}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${vendor.status === 'Paid' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                                    <select
                                                        value={vendor.status}
                                                        onChange={e => setVendors(vendors.map(v => v.id === vendor.id ? { ...v, status: e.target.value } : v))}
                                                        className="bg-transparent border-b border-dashed border-gray-300 focus:border-rose-500 outline-none"
                                                    >
                                                        <option value="Paid">Paid</option>
                                                        <option value="Pending">Pending</option>
                                                    </select>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <button
                                                            key={star}
                                                            onClick={() => setVendors(vendors.map(v => v.id === vendor.id ? { ...v, rating: star } : v))}
                                                            className={star <= vendor.rating ? 'text-yellow-400' : 'text-gray-200'}
                                                        >
                                                            <Star className="w-4 h-4" />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="pt-4 border-t border-gray-100">
                                                <label className="flex items-center gap-2 text-xs text-blue-600 cursor-pointer hover:underline">
                                                    <FileText className="w-5 h-5" /> Upload Contract
                                                    <input type="file" className="hidden" onChange={(e) => {
                                                        alert(`File ${e.target.files[0].name} uploaded for ${vendor.name}`);
                                                    }} />
                                                </label>
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </div>
                    )}

                    {/* --- TASKS TAB --- */}
                    {activeTab === 'tasks' && (
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 text-white mb-8 shadow-xl">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">
                                            {daysLeft > 0 ? `${daysLeft} days left` : 'Today is the day!'}
                                        </h2>
                                        <p className="text-rose-100">Keep going! You have completed {taskProgress}% of your tasks.</p>
                                    </div>
                                    <div className="text-5xl opacity-20">
                                        <Calendar className="w-16 h-16" />
                                    </div>
                                </div>
                            </div>

                            <Card>
                                <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                    <h3 className="font-semibold text-gray-900">To-Do List</h3>
                                    <Button size="sm" onClick={() => {
                                        const title = prompt("New Task:");
                                        if (title) setTasks([...tasks, { id: Date.now(), title, deadline: '', completed: false }]);
                                    }}>Add Task</Button>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {tasks.length === 0 ? (
                                        <div className="p-8 text-center text-gray-400">
                                            No tasks yet. Click "Add Task" to create your first task!
                                        </div>
                                    ) : (
                                        tasks.map(task => {
                                            const isOverdue = task.deadline && new Date(task.deadline) < new Date() && !task.completed;
                                            return (
                                                <div key={task.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                                                    <button
                                                        onClick={() => setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t))}
                                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${task.completed ? 'bg-rose-500 border-rose-500 text-white' : 'border-gray-300 text-transparent hover:border-rose-400'
                                                            }`}
                                                    >
                                                        <Check className="w-4 h-4" />
                                                    </button>
                                                    <div className="flex-1">
                                                        <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                                            {task.title}
                                                        </p>
                                                        {task.deadline && (
                                                            <p className={`text-xs mt-1 ${isOverdue ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
                                                                {isOverdue ? 'Overdue: ' : 'Due: '} {task.deadline}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <input
                                                        type="date"
                                                        className="text-xs border rounded p-1 text-gray-500"
                                                        value={task.deadline}
                                                        onChange={(e) => setTasks(tasks.map(t => t.id === task.id ? { ...t, deadline: e.target.value } : t))}
                                                    />
                                                    <button onClick={() => setTasks(tasks.filter(t => t.id !== task.id))} className="text-gray-300 hover:text-red-500">
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* --- INVITATIONS TAB --- */}
                    {activeTab === 'invites' && (
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Digital Invitation</h3>
                                <Card className="aspect-[4/5] bg-white border-8 border-double border-gray-100 flex flex-col items-center justify-center text-center p-12 shadow-2xl relative overflow-hidden">
                                    {/* Design Elements */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-bl-[100px] -z-0"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-100 rounded-tr-[100px] -z-0"></div>

                                    <div className="relative z-10">
                                        <p className="text-gray-500 uppercase tracking-[0.2em] text-sm mb-4">
                                            {inviteType === 'joint' && 'Together with their families'}
                                            {inviteType === 'bride' && 'The Family of'}
                                            {inviteType === 'groom' && 'The Family of'}
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
                                                <button
                                                    key={type}
                                                    onClick={() => setInviteType(type)}
                                                    className={`px-3 py-2 text-sm rounded-lg border ${inviteType === type
                                                        ? 'bg-rose-50 border-rose-200 text-rose-700 font-medium'
                                                        : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                                                        }`}
                                                >
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
                                        <Button className="w-full">Copy Link</Button>
                                        <Button variant="secondary" className="w-full">Send Email</Button>
                                    </div>
                                </Card>

                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                                    <h4 className="font-semibold text-blue-900 mb-2">Auto-RSVP Sync</h4>
                                    <p className="text-sm text-blue-700">Guests who allow digital RSVPs will automatically update your Guest List status. Currently <strong>{guests.filter(g => g.rsvp === 'Confirmed').length}</strong> guests have confirmed.</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}