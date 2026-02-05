"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

// TaskContext
const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within TaskProvider');
    }
    return context;
};

function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('wedding-tasks');
        return saved ? JSON.parse(saved) : [];
    });

    const [events, setEvents] = useState(() => {
        const saved = localStorage.getItem('wedding-events');
        return saved ? JSON.parse(saved) : [];
    });

    const [weddingDate, setWeddingDate] = useState(() => {
        return localStorage.getItem('wedding-date') || '';
    });

    useEffect(() => {
        localStorage.setItem('wedding-tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('wedding-events', JSON.stringify(events));
    }, [events]);

    useEffect(() => {
        localStorage.setItem('wedding-date', weddingDate);
    }, [weddingDate]);

    const addTask = (task) => {
        const newTask = {
            ...task,
            id: crypto.randomUUID(),
            status: 'Pending',
            createdAt: new Date().toISOString()
        };
        setTasks(prev => [...prev, newTask]);
    };

    const toggleStatus = (id) => {
        setTasks(prev => prev.map(task =>
            task.id === id
                ? { ...task, status: task.status === 'Completed' ? 'Pending' : 'Completed' }
                : task
        ));
    };

    const deleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(prev => prev.filter(task => task.id !== id));
        }
    };

    const addEvent = (event) => {
        const newEvent = {
            ...event,
            id: crypto.randomUUID()
        };
        setEvents(prev => [...prev, newEvent]);
    };

    const deleteEvent = (id) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            setEvents(prev => prev.filter(event => event.id !== id));
        }
    };

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            toggleStatus,
            deleteTask,
            events,
            addEvent,
            deleteEvent,
            weddingDate,
            setWeddingDate
        }}>
            {children}
        </TaskContext.Provider>
    );
}

// Header Component
function Header() {
    return (
        <header className="header-section" style={{
            textAlign: 'center',
            padding: '2rem 0',
            background: 'white',
            marginBottom: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            position: 'relative'
        }}>
            <button
                onClick={() => window.history.back()}
                style={{
                    position: 'absolute',
                    left: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#666',
                    fontSize: '0.95rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f5f5f5';
                    e.currentTarget.style.color = '#D91656';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = '#666';
                }}
            >
                <ArrowLeft size={20} />
                <span style={{ fontWeight: 500 }}>Back</span>
            </button>
            <h1 style={{
                color: 'var(--primary-color)',
                fontSize: '2.5rem',
                marginBottom: '0.2rem'
            }}>
                Shadi Bazar
            </h1>
            <p style={{ color: '#666' }}>Wedding Timeline & Checklist</p>
        </header>
    );
}

// WeddingCountdown Component
function WeddingCountdown() {
    const { weddingDate, setWeddingDate } = useTasks();
    const [daysLeft, setDaysLeft] = useState(null);

    useEffect(() => {
        if (weddingDate) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const wedding = new Date(weddingDate);
            wedding.setHours(0, 0, 0, 0);

            const diffTime = wedding - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDaysLeft(diffDays);
        }
    }, [weddingDate]);

    if (!weddingDate) {
        return (
            <div className="card" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h3>When is the Big Day?</h3>
                <input
                    type="date"
                    onChange={(e) => setWeddingDate(e.target.value)}
                    style={{ marginTop: '0.5rem' }}
                />
            </div>
        );
    }

    return (
        <div className="card" style={{
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, white, var(--bg-secondary))',
            borderLeft: '5px solid var(--primary-color)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'left' }}>
                    <small style={{ color: '#888' }}>Wedding Date</small>
                    <div style={{ fontWeight: 'bold' }}>{new Date(weddingDate).toLocaleDateString()}</div>
                    <button
                        className="btn"
                        style={{ fontSize: '0.7rem', padding: '2px 5px', marginTop: '5px', textDecoration: 'underline' }}
                        onClick={() => setWeddingDate('')}
                    >
                        Change
                    </button>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <span style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        color: 'var(--primary-color)'
                    }}>
                        {daysLeft}
                    </span>
                    <span style={{ display: 'block', color: '#666' }}>Days To Go!</span>
                </div>
            </div>
        </div>
    );
}

// Dashboard Component
function Dashboard() {
    const { tasks } = useTasks();

    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'Completed').length;
    const pending = total - completed;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    const upcomingTasks = tasks.filter(t => {
        if (t.status === 'Completed' || !t.deadline) return false;
        const today = new Date();
        const deadline = new Date(t.deadline);
        const diffDays = (deadline - today) / (1000 * 60 * 60 * 24);
        return diffDays >= 0 && diffDays <= 7;
    });

    return (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Progress Overview</h2>

            <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Completion</span>
                    <strong>{progress}%</strong>
                </div>
                <div style={{ width: '100%', height: '10px', background: '#eee', borderRadius: '5px' }}>
                    <div style={{
                        width: `${progress}%`,
                        height: '100%',
                        background: 'var(--primary-color)',
                        borderRadius: '5px',
                        transition: 'width 0.5s ease'
                    }}></div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', textAlign: 'center' }}>
                <div style={{ background: '#f9f9f9', padding: '0.5rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', color: '#333' }}>{total}</div>
                    <small style={{ color: '#888' }}>Total</small>
                </div>
                <div style={{ background: '#f9f9f9', padding: '0.5rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', color: 'var(--success-color)' }}>{completed}</div>
                    <small style={{ color: '#888' }}>Done</small>
                </div>
                <div style={{ background: '#f9f9f9', padding: '0.5rem', borderRadius: '8px' }}>
                    <div style={{ fontSize: '1.5rem', color: 'var(--warning-color)' }}>{pending}</div>
                    <small style={{ color: '#888' }}>Pending</small>
                </div>
            </div>

            {upcomingTasks.length > 0 && (
                <div style={{ marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                    <small style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>Coming up soon:</small>
                    <ul style={{ listStyle: 'none', marginTop: '0.5rem', paddingLeft: 0 }}>
                        {upcomingTasks.slice(0, 3).map(t => (
                            <li key={t.id} style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                                • {t.name} <span style={{ color: '#888', fontSize: '0.8rem' }}>({new Date(t.deadline).toLocaleDateString()})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

// RitualManager Component
function RitualManager() {
    const { events, addEvent, deleteEvent } = useTasks();
    const [newEvent, setNewEvent] = useState({
        name: '',
        date: '',
        time: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newEvent.name || !newEvent.date || !newEvent.time) return;

        addEvent(newEvent);
        setNewEvent({ name: '', date: '', time: '' });
    };

    const sortedEvents = [...events].sort((a, b) => {
        return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
    });

    return (
        <div className="card" style={{ marginBottom: '1.5rem', borderTop: '4px solid var(--secondary-color)' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Wedding Rituals & Events</h3>

            <form onSubmit={handleSubmit} style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.5fr 1.5fr 0.5fr',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                alignItems: 'end'
            }}>
                <div>
                    <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>Event Name (e.g. Haldi)</label>
                    <input
                        type="text"
                        placeholder="Ritual Name"
                        value={newEvent.name}
                        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                        style={{ width: '100%' }}
                        required
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>Date</label>
                    <input
                        type="date"
                        value={newEvent.date}
                        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                        style={{ width: '100%' }}
                        required
                    />
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>Time (Muhurat)</label>
                    <input
                        type="time"
                        value={newEvent.time}
                        onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                        style={{ width: '100%' }}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ height: '38px' }}>
                    +
                </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {sortedEvents.length === 0 && <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>No rituals added yet.</p>}
                {sortedEvents.map(event => (
                    <div key={event.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.8rem',
                        background: '#fafafa',
                        borderRadius: '6px',
                        borderLeft: '3px solid var(--secondary-color)'
                    }}>
                        <div>
                            <strong style={{ fontSize: '1.1rem', color: '#333' }}>{event.name}</strong>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>
                                📅 {new Date(event.date).toLocaleDateString()} at ⏰ {new Date(`1970-01-01T${event.time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                        <button
                            onClick={() => deleteEvent(event.id)}
                            style={{ background: 'none', color: '#ccc', cursor: 'pointer', border: 'none', fontSize: '1.5rem' }}
                            title="Remove Event"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// TaskForm Component
function TaskForm() {
    const { addTask } = useTasks();
    const [task, setTask] = useState({
        name: '',
        category: 'Other',
        assignedTo: '',
        deadline: '',
        priority: 'Medium',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.name.trim()) return;

        addTask(task);

        setTask({
            name: '',
            category: 'Other',
            assignedTo: '',
            deadline: '',
            priority: 'Medium',
            notes: ''
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Task Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            placeholder="e.g. Book Venue"
                            style={{ width: '100%' }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Category</label>
                        <select name="category" value={task.category} onChange={handleChange} style={{ width: '100%' }}>
                            <option value="Venue">Venue</option>
                            <option value="Guest">Guest</option>
                            <option value="Vendor">Vendor</option>
                            <option value="Outfit">Outfit</option>
                            <option value="Decor">Decor</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Assigned To</label>
                        <input
                            type="text"
                            name="assignedTo"
                            value={task.assignedTo}
                            onChange={handleChange}
                            placeholder="Name"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            value={task.deadline}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Priority</label>
                        <select name="priority" value={task.priority} onChange={handleChange} style={{ width: '100%' }}>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.2rem', fontSize: '0.9rem' }}>Notes</label>
                    <textarea
                        name="notes"
                        value={task.notes}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Additional details..."
                        style={{ width: '100%', resize: 'vertical' }}
                    />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    + Add Task
                </button>
            </form>
        </div>
    );
}

// TaskItem Component
function TaskItem({ task }) {
    const { toggleStatus, deleteTask } = useTasks();

    const isOverdue = task.status === 'Pending' && task.deadline && new Date(task.deadline) < new Date().setHours(0, 0, 0, 0);

    const priorityColor = {
        'High': '#F44336',
        'Medium': '#FF9800',
        'Low': '#4CAF50'
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '8px',
            background: task.status === 'Completed' ? '#fafafa' : 'white',
            borderLeft: isOverdue ? '4px solid #F44336' : `4px solid ${task.status === 'Completed' ? '#4CAF50' : '#ddd'}`,
            opacity: task.status === 'Completed' ? 0.7 : 1
        }}>
            <div
                onClick={() => toggleStatus(task.id)}
                style={{
                    cursor: 'pointer',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${task.status === 'Completed' ? 'var(--success-color)' : '#ccc'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    background: task.status === 'Completed' ? 'var(--success-color)' : 'transparent',
                    flexShrink: 0
                }}
            >
                {task.status === 'Completed' && '✓'}
            </div>

            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <h4 style={{
                        margin: 0,
                        textDecoration: task.status === 'Completed' ? 'line-through' : 'none',
                        color: task.status === 'Completed' ? '#888' : '#333'
                    }}>
                        {task.name}
                    </h4>
                    <span style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        background: `${priorityColor[task.priority]}20`,
                        color: priorityColor[task.priority],
                        fontWeight: 'bold'
                    }}>
                        {task.priority}
                    </span>
                </div>

                <div style={{ marginTop: '0.3rem', fontSize: '0.85rem', color: '#666', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <span>📂 {task.category}</span>
                    {task.deadline && (
                        <span style={{ color: isOverdue ? 'var(--danger-color)' : 'inherit', fontWeight: isOverdue ? 'bold' : 'normal' }}>
                            📅 {new Date(task.deadline).toLocaleDateString()} {isOverdue && '(Overdue)'}
                        </span>
                    )}
                    {task.assignedTo && <span>👤 {task.assignedTo}</span>}
                </div>
                {task.notes && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
                        "{task.notes}"
                    </div>
                )}
            </div>

            <button
                onClick={() => deleteTask(task.id)}
                style={{
                    background: 'none',
                    color: '#ccc',
                    fontSize: '1.2rem',
                    padding: '0.2rem',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--danger-color)'}
                onMouseLeave={(e) => e.target.style.color = '#ccc'}
                title="Delete Task"
            >
                ×
            </button>
        </div>
    );
}

// TaskList Component
function TaskList() {
    const { tasks } = useTasks();
    const [filter, setFilter] = useState('All');

    const filteredTasks = tasks.filter(task => {
        if (filter === 'All') return true;
        if (filter === 'Completed') return task.status === 'Completed';
        if (filter === 'Pending') return task.status === 'Pending';
        if (filter === 'High Priority') return task.priority === 'High';
        return true;
    });

    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (!a.deadline) return 1;
        if (!b.deadline) return -1;
        return new Date(a.deadline) - new Date(b.deadline);
    });

    return (
        <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ margin: 0 }}>My Checklist</h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['All', 'Pending', 'Completed', 'High Priority'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            style={{
                                padding: '5px 10px',
                                borderRadius: '20px',
                                background: filter === f ? 'var(--primary-color)' : '#f0f0f0',
                                color: filter === f ? 'white' : '#666',
                                border: 'none',
                                fontSize: '0.85rem',
                                cursor: 'pointer'
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {sortedTasks.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#888', padding: '2rem 0' }}>No tasks found.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {sortedTasks.map(task => (
                        <TaskItem key={task.id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
}

// Main App Component
export default function App() {
    return (
        <TaskProvider>
            <style>{`
                :root {
                    --primary-color: #D91656;
                    --secondary-color: #F39C12;
                    --success-color: #4CAF50;
                    --warning-color: #FF9800;
                    --danger-color: #F44336;
                    --bg-secondary: #FFF5F5;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #FFF5F5 0%, #FFE5E5 100%);
                    min-height: 100vh;
                }

                .container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 1rem;
                }

                .card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                }

                input, select, textarea {
                    padding: 0.6rem;
                    border: 1px solid #ddd;
                    border-radius: 6px;
                    font-size: 0.95rem;
                    font-family: inherit;
                }

                input:focus, select:focus, textarea:focus {
                    outline: none;
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(217, 22, 86, 0.1);
                }

                .btn {
                    padding: 0.6rem 1.2rem;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.95rem;
                    transition: all 0.2s;
                }

                .btn-primary {
                    background: var(--primary-color);
                    color: white;
                    font-weight: 600;
                }

                .btn-primary:hover {
                    background: #B01347;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(217, 22, 86, 0.3);
                }

                @media (max-width: 768px) {
                    .container {
                        padding: 0.5rem;
                    }
                    
                    h1 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>
            <div className="container">
                <Header />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
                    <div className="left-column">
                        <WeddingCountdown />
                        <Dashboard />
                        <RitualManager />
                    </div>

                    <div className="right-column">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskProvider>
    );
}