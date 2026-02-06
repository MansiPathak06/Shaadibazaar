"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Search, Plus, X, UserMinus, ArrowLeft } from 'lucide-react';
import { DndContext, useSensor, useSensors, PointerSensor, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';

// ============================================================================
// CONTEXT
// ============================================================================

const SeatingContext = createContext();

const generateId = () => Math.random().toString(36).substr(2, 9);

export const SeatingProvider = ({ children }) => {
    const [guests, setGuests] = useState(() => {
        const saved = localStorage.getItem('shadi_bazar_guests');
        return saved ? JSON.parse(saved) : [];
    });

    const [tables, setTables] = useState(() => {
        const saved = localStorage.getItem('shadi_bazar_tables');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('shadi_bazar_guests', JSON.stringify(guests));
    }, [guests]);

    useEffect(() => {
        localStorage.setItem('shadi_bazar_tables', JSON.stringify(tables));
    }, [tables]);

    const addGuest = (guest) => {
        setGuests([...guests, { ...guest, id: generateId(), tableId: null }]);
    };

    const updateGuest = (id, updates) => {
        setGuests(guests.map(g => g.id === id ? { ...g, ...updates } : g));
    };

    const removeGuest = (id) => {
        setGuests(guests.filter(g => g.id !== id));
    };

    const addTable = (table) => {
        setTables([...tables, { ...table, id: generateId() }]);
    };

    const updateTable = (id, updates) => {
        setTables(tables.map(t => t.id === id ? { ...t, ...updates } : t));
    };

    const removeTable = (id) => {
        setGuests(guests.map(g => g.tableId === id ? { ...g, tableId: null } : g));
        setTables(tables.filter(t => t.id !== id));
    };

    const assignGuestToTable = (guestId, tableId) => {
        setGuests(guests.map(g => {
            if (g.id === guestId) {
                return { ...g, tableId };
            }
            return g;
        }));
    };

    const unassignGuest = (guestId) => {
        setGuests(guests.map(g => g.id === guestId ? { ...g, tableId: null } : g));
    };

    return (
        <SeatingContext.Provider value={{
            guests,
            tables,
            addGuest,
            updateGuest,
            removeGuest,
            addTable,
            updateTable,
            removeTable,
            assignGuestToTable,
            unassignGuest
        }}>
            {children}
        </SeatingContext.Provider>
    );
};

const useSeating = () => {
    const context = useContext(SeatingContext);
    if (!context) {
        throw new Error('useSeating must be used within a SeatingProvider');
    }
    return context;
};

// ============================================================================
// COMPONENTS
// ============================================================================

const DraggableGuest = ({ guest }) => {
    const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
        id: guest.id,
        data: {
            type: 'guest',
            guest
        },
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
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRsvp, setFilterRsvp] = useState('all');
    const [showAddForm, setShowAddForm] = useState(false);

    const [newGuestName, setNewGuestName] = useState('');
    const [newGuestRsvp, setNewGuestRsvp] = useState('confirmed');
    const [newGuestMeal, setNewGuestMeal] = useState('veg');

    const { setNodeRef, isOver } = useDroppable({
        id: 'guest-list-panel',
        data: { type: 'guest-list' }
    });

    const handleAddGuest = (e) => {
        e.preventDefault();
        if (!newGuestName.trim()) return;

        addGuest({
            name: newGuestName,
            rsvp: newGuestRsvp,
            meal: newGuestMeal,
        });

        setNewGuestName('');
        setShowAddForm(false);
    };

    const filteredGuests = guests.filter(g => {
        const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterRsvp === 'all' || g.rsvp === filterRsvp;
        const isUnassigned = !g.tableId;
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
                            className="w-full bg-purple-600 text-white text-xs font-bold py-2 rounded hover:bg-purple-700 transition"
                        >
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
                        onChange={(e) => setSearchTerm(e.target.value)}
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
        data: { type: 'guest', guest }
    });

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className={`
                relative group/seat cursor-grab active:cursor-grabbing
                ${isDragging ? 'opacity-30' : 'opacity-100'}
            `}
        >
            <div
                className="text-[10px] sm:text-xs bg-purple-100/90 text-purple-800 px-2 py-1.5 rounded-md border border-purple-200 truncate max-w-[80px] sm:max-w-[100px] text-center shadow-sm hover:shadow hover:bg-purple-200 transition-all font-medium"
                title={guest.name}
            >
                {guest.name.split(' ')[0]}
            </div>

            <div className="absolute -top-2 -right-2 opacity-0 group-hover/seat:opacity-100 transition-opacity z-10">
                <button
                    onPointerDown={(e) => {
                        e.stopPropagation();
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        unassignGuest(guest.id);
                    }}
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
        data: { type: 'table', table }
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
            <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 z-10`}>
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

    const [tableName, setTableName] = useState('');
    const [tableCapacity, setTableCapacity] = useState(8);
    const [tableType, setTableType] = useState('round');

    const handleAddTable = (e) => {
        e.preventDefault();
        if (!tableName.trim()) return;

        addTable({
            name: tableName,
            capacity: parseInt(tableCapacity),
            type: tableType,
            x: 50 + (tables.length % 5) * 220,
            y: 50 + Math.floor(tables.length / 5) * 220,
        });

        setTableName('');
        setShowAddForm(false);
    };

    const gridStyle = {
        backgroundImage: 'radial-gradient(circle, #ddd 1px, transparent 1px)',
        backgroundSize: '20px 20px'
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
                                className="w-full bg-purple-600 text-white text-xs font-bold py-2 rounded hover:bg-purple-700 transition"
                            >
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

    const totalGuests = guests.length;
    const assignedGuests = guests.filter(g => g.tableId).length;
    const unassignedGuests = totalGuests - assignedGuests;

    const totalCapacity = tables.reduce((acc, t) => acc + t.capacity, 0);

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
    const { assignGuestToTable, guests } = useSeating();
    const [activeId, setActiveId] = useState(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        if (active.data.current?.type === 'guest') {
            const guestId = active.id;

            if (over.id === 'guest-list-panel') {
                assignGuestToTable(guestId, null);
            } else if (over.data.current?.type === 'table') {
                const tableId = over.id;
                assignGuestToTable(guestId, tableId);
            }
        }
    };

    const activeGuest = activeId ? guests.find(g => g.id === activeId) : null;

    return (
        <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
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
    const handleBack = () => {
        window.history.back();
    };

    return (
        <SeatingProvider>
            <Layout onBack={handleBack} />
        </SeatingProvider>
    );
}