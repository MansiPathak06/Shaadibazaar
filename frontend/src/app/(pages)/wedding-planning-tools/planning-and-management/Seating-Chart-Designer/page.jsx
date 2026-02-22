"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Search, Plus, X, UserMinus, ArrowLeft, Loader2 } from 'lucide-react';
import { DndContext, useSensor, useSensors, PointerSensor, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';

// ============================================================================
// API HELPER
// ============================================================================

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiFetch = async (path, options = {}) => {
    const token = localStorage.getItem('token'); // ← use whatever key your login saves it as

    if (!token) {
        window.location.href = '/login';
        return null;
    }

    const res = await fetch(`${API_BASE}/api/seating${path}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // ← this is the key change
            ...options.headers,
        },
        // remove credentials: 'include' — not needed for JWT in headers
    });

    if (res.status === 401) {
        window.location.href = '/login';
        return null;
    }

    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'API error');
    return data;
};

// ============================================================================
// CONTEXT
// ============================================================================

const SeatingContext = createContext();

export const SeatingProvider = ({ children }) => {
    const [guests, setGuests] = useState([]);
    const [tables, setTables] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError]   = useState(null);

    // ── Load everything on mount ──────────────────────────────────────────────
    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                const [gData, tData] = await Promise.all([
                    apiFetch('/guests'),
                    apiFetch('/tables'),
                ]);
                if (gData) setGuests(gData.guests);
                if (tData) setTables(tData.tables);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    // ── Guests ────────────────────────────────────────────────────────────────

    const addGuest = useCallback(async (guest) => {
        const data = await apiFetch('/guests', {
            method: 'POST',
            body: JSON.stringify(guest),
        });
        if (data) setGuests(prev => [...prev, data.guest]);
    }, []);

    const updateGuest = useCallback(async (id, updates) => {
        const data = await apiFetch(`/guests/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updates),
        });
        if (data) setGuests(prev => prev.map(g => g.id === id ? data.guest : g));
    }, []);

    const removeGuest = useCallback(async (id) => {
        await apiFetch(`/guests/${id}`, { method: 'DELETE' });
        setGuests(prev => prev.filter(g => g.id !== id));
    }, []);

    const assignGuestToTable = useCallback(async (guestId, tableId) => {
        const data = await apiFetch(`/guests/${guestId}/assign`, {
            method: 'PATCH',
            body: JSON.stringify({ tableId }),
        });
        if (data) setGuests(prev => prev.map(g => g.id === guestId ? data.guest : g));
    }, []);

    const unassignGuest = useCallback(async (guestId) => {
        await assignGuestToTable(guestId, null);
    }, [assignGuestToTable]);

    // ── Tables ────────────────────────────────────────────────────────────────

    const addTable = useCallback(async (table) => {
        const data = await apiFetch('/tables', {
            method: 'POST',
            body: JSON.stringify(table),
        });
        if (data) setTables(prev => [...prev, data.table]);
    }, []);

    const updateTable = useCallback(async (id, updates) => {
        const data = await apiFetch(`/tables/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updates),
        });
        if (data) setTables(prev => prev.map(t => t.id === id ? data.table : t));
    }, []);

    const removeTable = useCallback(async (id) => {
        await apiFetch(`/tables/${id}`, { method: 'DELETE' });
        // Backend already unassigns guests; reflect locally
        setGuests(prev => prev.map(g => g.tableId === id ? { ...g, tableId: null } : g));
        setTables(prev => prev.filter(t => t.id !== id));
    }, []);

    return (
        <SeatingContext.Provider value={{
            guests,
            tables,
            loading,
            error,
            addGuest,
            updateGuest,
            removeGuest,
            addTable,
            updateTable,
            removeTable,
            assignGuestToTable,
            unassignGuest,
        }}>
            {children}
        </SeatingContext.Provider>
    );
};

const useSeating = () => {
    const context = useContext(SeatingContext);
    if (!context) throw new Error('useSeating must be used within a SeatingProvider');
    return context;
};

// ============================================================================
// COMPONENTS  (unchanged UI — only wired to context)
// ============================================================================

const DraggableGuest = ({ guest }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: guest.id,
        data: { type: 'guest', guest },
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`p-3 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing flex justify-between items-center ${isDragging ? 'opacity-50' : ''}`}
        >
            <div>
                <h4 className="font-medium text-gray-800">{guest.name}</h4>
                <div className="flex gap-2 text-xs text-gray-500">
                    <span className={`px-1.5 py-0.5 rounded-full ${guest.rsvp === 'confirmed' ? 'bg-green-100 text-green-700' :
                        guest.rsvp === 'declined' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                        {guest.rsvp}
                    </span>
                    <span>{guest.meal}</span>
                </div>
            </div>
        </div>
    );
};

const GuestListPanel = () => {
    const { guests, addGuest } = useSeating();
    const [searchTerm, setSearchTerm]   = useState('');
    const [filterRsvp, setFilterRsvp]   = useState('all');
    const [showAddForm, setShowAddForm] = useState(false);
    const [saving, setSaving]           = useState(false);

    const [newGuestName, setNewGuestName] = useState('');
    const [newGuestRsvp, setNewGuestRsvp] = useState('confirmed');
    const [newGuestMeal, setNewGuestMeal] = useState('veg');

    const { setNodeRef, isOver } = useDroppable({
        id: 'guest-list-panel',
        data: { type: 'guest-list' },
    });

    const handleAddGuest = async (e) => {
        e.preventDefault();
        if (!newGuestName.trim()) return;
        setSaving(true);
        try {
            await addGuest({ name: newGuestName, rsvp: newGuestRsvp, meal: newGuestMeal });
            setNewGuestName('');
            setShowAddForm(false);
        } finally {
            setSaving(false);
        }
    };

    const filteredGuests = guests.filter(g => {
        const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterRsvp === 'all' || g.rsvp === filterRsvp;
        const isUnassigned  = !g.tableId;
        return matchesSearch && matchesFilter && isUnassigned;
    });

    return (
        <div
            ref={setNodeRef}
            className={`h-full flex flex-col bg-white transition-colors duration-200 ${isOver ? 'bg-purple-50 ring-2 ring-purple-500 ring-inset' : ''}`}
        >
            <div className="p-4 border-b border-gray-100">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-semibold">Guest List</h2>
                    <button
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="p-1.5 hover:bg-gray-100 rounded-full text-purple-600 transition-colors"
                    >
                        {showAddForm ? <X size={20} /> : <Plus size={20} />}
                    </button>
                </div>

                {showAddForm && (
                    <form onSubmit={handleAddGuest} className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <input
                            type="text"
                            placeholder="Guest Name"
                            className="w-full text-sm p-2 mb-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
                            autoFocus
                            value={newGuestName}
                            onChange={e => setNewGuestName(e.target.value)}
                        />
                        <div className="flex gap-2 mb-2">
                            <select
                                className="text-xs p-1.5 border rounded flex-1"
                                value={newGuestRsvp}
                                onChange={e => setNewGuestRsvp(e.target.value)}
                            >
                                <option value="confirmed">Confirmed</option>
                                <option value="pending">Pending</option>
                                <option value="declined">Declined</option>
                            </select>
                            <select
                                className="text-xs p-1.5 border rounded flex-1"
                                value={newGuestMeal}
                                onChange={e => setNewGuestMeal(e.target.value)}
                            >
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-Veg</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full bg-purple-600 text-white text-xs font-bold py-2 rounded hover:bg-purple-700 transition flex items-center justify-center gap-2"
                        >
                            {saving && <Loader2 size={14} className="animate-spin" />}
                            Add Guest
                        </button>
                    </form>
                )}

                <div className="relative mb-3">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search guests..."
                        className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                    {['all', 'confirmed', 'pending', 'declined'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterRsvp(status)}
                            className={`px-3 py-1 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-colors ${filterRsvp === status
                                ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                : 'bg-gray-100 text-gray-600 border border-transparent hover:bg-gray-200'
                            }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50">
                {filteredGuests.length === 0 ? (
                    <div className="text-center text-gray-400 py-8 text-sm flex flex-col items-center">
                        {isOver ? (
                            <span className="text-purple-600 font-medium">Drop to Unassign</span>
                        ) : (
                            <>
                                <span>No guests found</span>
                                {!showAddForm && (
                                    <button
                                        onClick={() => setShowAddForm(true)}
                                        className="mt-2 text-purple-600 hover:underline"
                                    >
                                        Add a guest
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                ) : (
                    filteredGuests.map(guest => (
                        <DraggableGuest key={guest.id} guest={guest} />
                    ))
                )}
            </div>
        </div>
    );
};

const SeatedGuest = ({ guest, unassignGuest }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: guest.id,
        data: { type: 'guest', guest },
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`relative group/seat cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-30' : 'opacity-100'}`}
        >
            <div
                className="text-[10px] sm:text-xs bg-purple-100/90 text-purple-800 px-2 py-1.5 rounded-md border border-purple-200 truncate max-w-[80px] sm:max-w-[100px] text-center shadow-sm hover:shadow hover:bg-purple-200 transition-all font-medium"
                title={guest.name}
            >
                {guest.name.split(' ')[0]}
            </div>

            <div className="absolute -top-2 -right-2 opacity-0 group-hover/seat:opacity-100 transition-opacity z-10">
                <button
                    onPointerDown={e => e.stopPropagation()}
                    onClick={e => { e.stopPropagation(); unassignGuest(guest.id); }}
                    className="bg-red-500 text-white rounded-full p-0.5 shadow-sm hover:scale-110 flex items-center justify-center h-4 w-4"
                >
                    <UserMinus size={10} />
                </button>
            </div>
        </div>
    );
};

const TableNode = ({ table }) => {
    const { setNodeRef, isOver } = useDroppable({
        id: table.id,
        data: { type: 'table', table },
    });

    const { guests, unassignGuest } = useSeating();
    const assignedGuests = guests.filter(g => g.tableId === table.id);
    const isFull = assignedGuests.length >= table.capacity;

    return (
        <div
            ref={setNodeRef}
            style={{
                left: table.x,
                top: table.y,
                position: 'absolute',
                width: table.type === 'round' ? '180px' : '200px',
                height: table.type === 'round' ? '180px' : 'auto',
                minHeight: table.type === 'round' ? 'unset' : '140px',
            }}
            className={`
                shadow-sm transition-all duration-200 p-3 group border-2
                ${isOver && !isFull ? 'border-purple-500 bg-purple-50 shadow-lg scale-[1.02] z-10' : 'border-gray-200 bg-white'}
                ${isFull && !isOver ? 'border-red-200 bg-red-50' : ''}
                ${isFull && isOver ? 'border-red-500 bg-red-100' : ''}
                ${table.type === 'round' ? 'rounded-full flex flex-col items-center justify-center' : 'rounded-xl'}
            `}
        >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`
                    px-3 py-1 rounded-full shadow-sm border text-xs font-bold whitespace-nowrap flex items-center gap-2
                    ${isFull ? 'bg-red-50 text-red-700 border-red-200' : 'bg-white text-gray-700 border-gray-200'}
                `}>
                    <span>{table.name}</span>
                    <span className={`px-1.5 rounded-full text-[10px] ${isFull ? 'bg-red-200' : 'bg-gray-100'}`}>
                        {assignedGuests.length}/{table.capacity}
                    </span>
                </div>
            </div>

            <div className={`
                flex flex-wrap gap-2 w-full
                ${table.type === 'round' ? 'justify-center items-center content-center h-full pt-4' : 'justify-start content-start pt-4'}
            `}>
                {assignedGuests.map(guest => (
                    <SeatedGuest key={guest.id} guest={guest} unassignGuest={unassignGuest} />
                ))}

                {assignedGuests.length === 0 && !isOver && (
                    <div className="text-[10px] text-gray-300 uppercase tracking-widest font-bold select-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        Empty
                    </div>
                )}
            </div>
        </div>
    );
};

const VenueCanvas = () => {
    const { tables, addTable } = useSeating();
    const [showAddForm, setShowAddForm] = useState(false);
    const [saving, setSaving]           = useState(false);

    const [tableName, setTableName]         = useState('');
    const [tableCapacity, setTableCapacity] = useState(8);
    const [tableType, setTableType]         = useState('round');

    const handleAddTable = async (e) => {
        e.preventDefault();
        if (!tableName.trim()) return;
        setSaving(true);
        try {
            await addTable({
                name: tableName,
                capacity: parseInt(tableCapacity),
                type: tableType,
                x: 50 + (tables.length % 5) * 220,
                y: 50 + Math.floor(tables.length / 5) * 220,
            });
            setTableName('');
            setShowAddForm(false);
        } finally {
            setSaving(false);
        }
    };

    const gridStyle = {
        backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)',
        backgroundSize: '20px 20px',
    };

    return (
        <div className="w-full h-full relative overflow-auto" style={gridStyle}>
            <div className="absolute top-4 right-4 z-20 flex gap-2">
                {showAddForm ? (
                    <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 w-64">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-sm">Add Table</h3>
                            <button onClick={() => setShowAddForm(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={16} />
                            </button>
                        </div>
                        <form onSubmit={handleAddTable}>
                            <input
                                type="text"
                                placeholder="Table Name (e.g., T1)"
                                className="w-full text-sm p-2 mb-2 border rounded focus:outline-none focus:ring-1 focus:ring-purple-500"
                                autoFocus
                                value={tableName}
                                onChange={e => setTableName(e.target.value)}
                            />
                            <div className="flex gap-2 mb-2">
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    className="text-sm p-2 border rounded w-16"
                                    value={tableCapacity}
                                    onChange={e => setTableCapacity(e.target.value)}
                                />
                                <select
                                    className="text-xs p-2 border rounded flex-1"
                                    value={tableType}
                                    onChange={e => setTableType(e.target.value)}
                                >
                                    <option value="round">Round</option>
                                    <option value="rectangular">Rectangle</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                disabled={saving}
                                className="w-full bg-purple-600 text-white text-xs font-bold py-2 rounded hover:bg-purple-700 transition flex items-center justify-center gap-2"
                            >
                                {saving && <Loader2 size={14} className="animate-spin" />}
                                Create Table
                            </button>
                        </form>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2 text-sm font-medium transition"
                    >
                        <Plus size={16} /> Add Table
                    </button>
                )}
            </div>

            {tables.length === 0 && !showAddForm && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-gray-400">
                        <p className="text-lg font-medium mb-1">No Tables Yet</p>
                        <p className="text-sm">Click "Add Table" to create your first table</p>
                    </div>
                </div>
            )}

            {tables.map(table => (
                <TableNode key={table.id} table={table} />
            ))}
        </div>
    );
};

const StatsBar = ({ onBack }) => {
    const { guests, tables } = useSeating();

    const totalGuests     = guests.length;
    const assignedGuests  = guests.filter(g => g.tableId).length;
    const unassignedGuests = totalGuests - assignedGuests;
    const totalCapacity   = tables.reduce((acc, t) => acc + t.capacity, 0);

    return (
        <div className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 transition-colors"
                    title="Go back"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Shadi Bazar Seating
                </h1>
            </div>

            <div className="flex gap-6 text-sm">
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Guests</span>
                    <span className="font-semibold text-lg">{totalGuests}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Assigned</span>
                    <span className="font-semibold text-lg text-green-600">{assignedGuests}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Pending</span>
                    <span className="font-semibold text-lg text-amber-500">{unassignedGuests}</span>
                </div>
                <div className="flex flex-col items-center border-l pl-6 ml-2">
                    <span className="text-gray-500 text-xs uppercase tracking-wide">Capacity</span>
                    <span className="font-semibold text-lg">{assignedGuests} / {totalCapacity}</span>
                </div>
            </div>
        </div>
    );
};

const Layout = ({ onBack }) => {
    const { assignGuestToTable, guests, loading, error } = useSeating();
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
    );

    const handleDragStart = (event) => setActiveId(event.active.id);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveId(null);
        if (!over) return;

        if (active.data.current?.type === 'guest') {
            const guestId = active.id;
            if (over.id === 'guest-list-panel') {
                assignGuestToTable(guestId, null);
            } else if (over.data.current?.type === 'table') {
                assignGuestToTable(guestId, over.id);
            }
        }
    };

    const activeGuest = activeId ? guests.find(g => g.id === activeId) : null;

    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-3 text-gray-500">
                    <Loader2 size={32} className="animate-spin text-purple-500" />
                    <p className="text-sm">Loading seating plan…</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
                <div className="text-center text-red-500">
                    <p className="font-semibold">Failed to load data</p>
                    <p className="text-sm mt-1">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex h-screen w-screen flex-col bg-gray-50 text-gray-900">
                <StatsBar onBack={onBack} />

                <div className="flex flex-1 overflow-hidden">
                    <div className="w-80 border-r border-gray-200 bg-white shadow-sm z-10">
                        <GuestListPanel />
                    </div>

                    <div className="flex-1 relative bg-gray-100 overflow-hidden">
                        <VenueCanvas />
                    </div>
                </div>
            </div>

            <DragOverlay>
                {activeGuest ? (
                    <div className="p-3 bg-white border border-purple-500 rounded-lg shadow-xl w-64 opacity-90 rotate-3 cursor-grabbing flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                        <h4 className="font-medium text-gray-800">{activeGuest.name}</h4>
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    );
};

// ============================================================================
// MAIN APP
// ============================================================================

export default function App() {
    const handleBack = () => window.history.back();

    return (
        <SeatingProvider>
            <Layout onBack={handleBack} />
        </SeatingProvider>
    );
}