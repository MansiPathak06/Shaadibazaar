"use client";
import React, { useState, useEffect, createContext, useContext } from 'react';
import {
    format, startOfMonth, endOfMonth, eachDayOfInterval,
    startOfWeek, endOfWeek, addMonths, subMonths,
    isSameMonth, isSameDay, isToday, parseISO, isSameWeek, isAfter, startOfToday
} from 'date-fns';
import { ChevronLeft, ChevronRight, Plus, Calendar, LayoutDashboard, X, Trash2, Clock, MapPin, User, Tag, AlignLeft, Share2, ArrowLeft } from 'lucide-react';

// Event Context
const EventContext = createContext();

const useEvents = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEvents must be used within an EventProvider');
    }
    return context;
};

const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const addEvent = (newEvent) => {
        setEvents((prev) => [...prev, { ...newEvent, id: crypto.randomUUID() }]);
    };

    const updateEvent = (updatedEvent) => {
        setEvents((prev) =>
            prev.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
        );
    };

    const deleteEvent = (eventId) => {
        setEvents((prev) => prev.filter((event) => event.id !== eventId));
    };

    const getEventsByDate = (dateString) => {
        return events.filter(event => event.date === dateString);
    };

    return (
        <EventContext.Provider value={{ events, addEvent, updateEvent, deleteEvent, getEventsByDate }}>
            {children}
        </EventContext.Provider>
    );
};

// Event Modal Component
const CATEGORIES = [
    'Vendor Meetings',
    'Dress Fittings',
    'Payment Due Dates',
    'Venue Visits',
    'Personal Appointments',
    'Other'
];

const ASSIGNEES = ['Bride', 'Groom', 'Planner', 'Family'];

const EventModal = ({ isOpen, onClose, onSave, onDelete, initialDate, eventToEdit }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        startTime: '09:00',
        endTime: '10:00',
        location: '',
        description: '',
        assignedTo: 'Bride',
        category: 'Other'
    });

    useEffect(() => {
        if (isOpen) {
            if (eventToEdit) {
                setFormData({ ...eventToEdit });
            } else {
                setFormData({
                    title: '',
                    date: initialDate || new Date().toISOString().split('T')[0],
                    startTime: '09:00',
                    endTime: '10:00',
                    location: '',
                    description: '',
                    assignedTo: 'Bride',
                    category: 'Vendor Meetings'
                });
            }
        }
    }, [isOpen, eventToEdit, initialDate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <form onSubmit={handleSubmit}>
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-pink-50/50">
                        <h2 className="text-xl font-bold text-slate-800">
                            {eventToEdit ? 'Edit Event' : 'New Event'}
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-4">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Event Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="e.g., Cake Tasting"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                            />
                        </div>

                        {/* Date & Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="sm:col-span-1">
                                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Start</label>
                                <div className="relative">
                                    <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="time"
                                        name="startTime"
                                        required
                                        value={formData.startTime}
                                        onChange={handleChange}
                                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">End</label>
                                <div className="relative">
                                    <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="time"
                                        name="endTime"
                                        required
                                        value={formData.endTime}
                                        onChange={handleChange}
                                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Category & Assignee */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                                <div className="relative">
                                    <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none appearance-none bg-white"
                                    >
                                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Assigned To</label>
                                <div className="relative">
                                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <select
                                        name="assignedTo"
                                        value={formData.assignedTo}
                                        onChange={handleChange}
                                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none appearance-none bg-white"
                                    >
                                        {ASSIGNEES.map(person => <option key={person} value={person}>{person}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                            <div className="relative">
                                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Venue Address or Link"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
                            <div className="relative">
                                <AlignLeft size={16} className="absolute left-3 top-3 text-slate-400" />
                                <textarea
                                    name="description"
                                    rows="3"
                                    placeholder="Additional details..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 focus:border-pink-500 outline-none resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
                        {eventToEdit ? (
                            <button
                                type="button"
                                onClick={() => {
                                    if (window.confirm('Delete this event?')) {
                                        onDelete(eventToEdit.id);
                                        onClose();
                                    }
                                }}
                                className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium text-sm px-2 py-1 rounded transition-colors"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                        ) : (
                            <div></div>
                        )}

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 rounded-lg text-slate-600 font-medium hover:bg-slate-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 shadow-md hover:shadow-lg transition-all"
                            >
                                {eventToEdit ? 'Update Event' : 'Save Event'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Calendar Grid Component
const CalendarGrid = ({ onAddEvent, onEditEvent }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const { events } = useEvents();

    const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">
                    {format(currentDate, 'MMMM yyyy')}
                </h2>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handlePrevMonth}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => setCurrentDate(new Date())}
                        className="px-3 py-1 text-sm font-medium hover:bg-slate-100 rounded-md transition-colors text-slate-600"
                    >
                        Today
                    </button>
                    <button
                        onClick={handleNextMonth}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* Weekday Headers */}
                <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
                    {weekDays.map(day => (
                        <div key={day} className="py-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 auto-rows-fr">
                    {calendarDays.map((day) => {
                        const dayEvents = events.filter(event =>
                            isSameDay(parseISO(event.date), day)
                        );

                        const isCurrentMonth = isSameMonth(day, monthStart);
                        const isDayToday = isToday(day);

                        return (
                            <div
                                key={day.toString()}
                                onClick={() => {
                                    onAddEvent(day);
                                }}
                                className={`
                  min-h-[120px] p-2 border-b border-r border-slate-100 transition-colors relative group cursor-pointer
                  ${!isCurrentMonth ? 'bg-slate-50/50 text-slate-400' : 'bg-white text-slate-700'}
                  ${isDayToday ? 'bg-pink-50/30' : ''}
                  hover:bg-pink-50/50
                `}
                            >
                                <div className="flex justify-between items-start">
                                    <span className={`
                    text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full
                    ${isDayToday ? 'bg-pink-600 text-white shadow-sm' : ''}
                  `}>
                                        {format(day, 'd')}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAddEvent(day);
                                        }}
                                        className="opacity-0 group-hover:opacity-100 p-1 text-pink-600 hover:bg-pink-50 rounded transition-all"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>

                                <div className="mt-2 space-y-1">
                                    {dayEvents.slice(0, 3).map(event => (
                                        <button
                                            key={event.id}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEditEvent(event);
                                            }}
                                            className="w-full text-left px-1.5 py-0.5 text-xs font-medium rounded bg-pink-100 text-pink-700 hover:bg-pink-200 truncate border-l-2 border-pink-500 transition-colors"
                                        >
                                            {event.startTime} {event.title}
                                        </button>
                                    ))}
                                    {dayEvents.length > 3 && (
                                        <div className="text-xs text-slate-400 pl-1">
                                            + {dayEvents.length - 3} more
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// Dashboard Component
const Dashboard = ({ onNavigate }) => {
    const { events } = useEvents();
    const today = startOfToday();

    const upcomingEvents = events
        .filter(event => isAfter(parseISO(event.date + 'T' + event.startTime), today) || event.date === format(today, 'yyyy-MM-dd'))
        .sort((a, b) => new Date(a.date + 'T' + a.startTime) - new Date(b.date + 'T' + b.startTime));

    const eventsThisWeek = upcomingEvents.filter(event =>
        isSameWeek(parseISO(event.date), today)
    );

    const handleShare = () => {
        const mockLink = `${window.location.origin}/calendar/shared/${crypto.randomUUID().slice(0, 8)}`;
        alert(`Link copied: ${mockLink}`);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Dashboard</h2>
                <button
                    onClick={handleShare}
                    className="flex items-center gap-2 text-pink-600 hover:bg-pink-50 px-3 py-2 rounded-lg transition-colors font-medium text-sm"
                >
                    <Share2 size={18} />
                    Share Calendar
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
                    <h3 className="text-slate-500 text-sm font-medium">Upcoming Events</h3>
                    <p className="text-3xl font-bold text-slate-800 mt-2">{upcomingEvents.length}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-100">
                    <h3 className="text-slate-500 text-sm font-medium">This Week</h3>
                    <p className="text-3xl font-bold text-pink-500 mt-2">{eventsThisWeek.length}</p>
                </div>

                <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-xl shadow-md text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-white/90 text-sm font-medium">Planning Progress</h3>
                        <p className="text-lg font-semibold mt-1">Keep it up!</p>
                    </div>
                    <button
                        onClick={() => onNavigate('calendar')}
                        className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm py-2 px-4 rounded-lg text-sm font-medium transition-colors w-full"
                    >
                        Go to Calendar
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold text-slate-800 mb-4">Next Up</h2>
                {upcomingEvents.length === 0 ? (
                    <div className="bg-white p-8 rounded-xl border border-dashed border-slate-300 text-center">
                        <p className="text-slate-500">No upcoming events scheduled.</p>
                        <button
                            onClick={() => onNavigate('calendar')}
                            className="mt-4 text-pink-600 font-medium hover:text-pink-700"
                        >
                            Add your first event
                        </button>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {upcomingEvents.slice(0, 5).map(event => (
                            <div key={event.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex sm:items-center flex-col sm:flex-row gap-4">
                                <div className="flex-shrink-0 w-14 h-14 bg-pink-50 rounded-lg flex flex-col items-center justify-center text-pink-600 border border-pink-100">
                                    <span className="text-xs font-bold uppercase">{format(parseISO(event.date), 'MMM')}</span>
                                    <span className="text-xl font-bold">{format(parseISO(event.date), 'd')}</span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-semibold text-slate-800">{event.title}</h3>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {event.startTime} - {event.endTime}
                                        </div>
                                        {event.location && (
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                {event.location}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                                        {event.category}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

// Layout Component
const Layout = ({ children, currentView, onNavigate, onBack }) => {
    return (
        <div className="min-h-screen bg-pink-50 flex flex-col font-sans text-slate-800">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onBack}
                            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600"
                            aria-label="Go back"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                                <Calendar size={20} />
                            </div>
                            <h1 className="text-xl font-bold text-pink-600 tracking-tight">
                                Shadi<span className="text-slate-700">Bazar</span>
                            </h1>
                        </div>
                    </div>

                    <nav className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
                        <button
                            onClick={() => onNavigate('dashboard')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${currentView === 'dashboard'
                                ? 'bg-white text-pink-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <LayoutDashboard size={16} />
                            <span className="hidden sm:inline">Dashboard</span>
                        </button>
                        <button
                            onClick={() => onNavigate('calendar')}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${currentView === 'calendar'
                                ? 'bg-white text-pink-600 shadow-sm'
                                : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <Calendar size={16} />
                            <span className="hidden sm:inline">Calendar</span>
                        </button>
                    </nav>
                </div>
            </header>

            <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
};

// Main App Component
const WeddingScheduler = () => {
    const [currentView, setCurrentView] = useState('dashboard');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [eventToEdit, setEventToEdit] = useState(null);
    const [navigationHistory, setNavigationHistory] = useState(['dashboard']);

    const { addEvent, updateEvent, deleteEvent } = useEvents();

    const handleNavigate = (view) => {
        setNavigationHistory(prev => [...prev, view]);
        setCurrentView(view);
    };

    const handleBack = () => {
        window.history.back();
    };

    const handleAddEvent = (date) => {
        setSelectedDate(format(date, 'yyyy-MM-dd'));
        setEventToEdit(null);
        setModalOpen(true);
    };

    const handleEditEvent = (event) => {
        setEventToEdit(event);
        setModalOpen(true);
    };

    const handleSaveEvent = (eventData) => {
        if (eventToEdit) {
            updateEvent(eventData);
        } else {
            addEvent(eventData);
        }
    };

    return (
        <Layout 
            currentView={currentView} 
            onNavigate={handleNavigate}
            onBack={handleBack}
        >
            {currentView === 'dashboard' && (
                <Dashboard onNavigate={handleNavigate} />
            )}
            {currentView === 'calendar' && (
                <CalendarGrid
                    onAddEvent={handleAddEvent}
                    onEditEvent={handleEditEvent}
                />
            )}

            <EventModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveEvent}
                onDelete={deleteEvent}
                initialDate={selectedDate}
                eventToEdit={eventToEdit}
            />
        </Layout>
    );
};

// Root Component with Provider
export default function App() {
    return (
        <EventProvider>
            <WeddingScheduler />
        </EventProvider>
    );
}