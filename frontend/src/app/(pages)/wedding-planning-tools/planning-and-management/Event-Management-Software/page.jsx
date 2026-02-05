"use client"
import React, { useState, useMemo } from 'react';
import {
    Users, DollarSign, Plane, BarChart3,
    Calendar, CheckSquare, MessageSquare,
    FileText, Bell, Settings, Plus,
    MoreVertical, Search, Filter,
    ArrowUpRight, ArrowDownRight,
    MapPin, Briefcase, CreditCard,
    X, Check, ChevronRight, Heart, ArrowLeft, Home
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';

// --- UTILITY FUNCTIONS ---

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

// --- COMPONENTS ---

const Card = ({ children, className }) => (
    <div className={cn("bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow", className)}>
        {children}
    </div>
);

const Badge = ({ children, variant = "default" }) => {
    const variants = {
        default: "bg-rose-50 text-rose-800",
        success: "bg-green-50 text-green-700 border border-green-100",
        warning: "bg-amber-50 text-amber-700 border border-amber-100",
        danger: "bg-red-50 text-red-700 border border-red-100",
        primary: "bg-pink-50 text-pink-700 border border-pink-100",
    };
    return (
        <span className={cn("px-2.5 py-1 rounded-full text-xs font-semibold", variants[variant])}>
            {children}
        </span>
    );
};

const Button = ({ children, variant = "primary", className, ...props }) => {
    const variants = {
        primary: "bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-200",
        secondary: "bg-white border-rose-200 border text-rose-700 hover:bg-rose-50",
        danger: "bg-red-500 hover:bg-red-600 text-white",
        success: "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-200"
    };
    return (
        <button className={cn("px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 font-medium", variants[variant], className)} {...props}>
            {children}
        </button>
    );
};

const Input = ({ label, ...props }) => (
    <div className="space-y-1">
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <input className="w-full px-4 py-2 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-white" {...props} />
    </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-rose-900/20 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in zoom-in-95 duration-200 border border-rose-100">
                <div className="flex justify-between items-center p-4 border-b border-rose-50">
                    <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-rose-500"><X size={20} /></button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

// --- MODULES ---

const TeamModule = ({ members, tasks, onAddMember, onAddTask, onToggleTaskStatus }) => {
    const [isMemberModalOpen, setMemberModalOpen] = useState(false);
    const [isTaskModalOpen, setTaskModalOpen] = useState(false);

    // Forms state
    const [newMember, setNewMember] = useState({ name: '', role: 'Staff' });
    const [newTask, setNewTask] = useState({ title: '', assignee: '', priority: 'Medium', due: '' });

    const handleAddMember = (e) => {
        e.preventDefault();
        onAddMember({ ...newMember, id: Date.now(), status: 'offline', avatar: newMember.name.substring(0, 2).toUpperCase() });
        setMemberModalOpen(false);
        setNewMember({ name: '', role: 'Staff' });
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        onAddTask({ ...newTask, id: Date.now(), status: 'Pending' });
        setTaskModalOpen(false);
        setNewTask({ title: '', assignee: '', priority: 'Medium', due: '' });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Team Collaboration</h2>
                    <p className="text-gray-500">Manage tasks, roles, and communication.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setMemberModalOpen(true)}><Users size={18} /> Add Member</Button>
                    <Button onClick={() => setTaskModalOpen(true)}><Plus size={18} /> New Task</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Team Members */}
                <Card className="col-span-1">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Users size={20} className="text-rose-500" /> Active Members
                    </h3>
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                        {members.length > 0 ? members.map(member => (
                            <div key={member.id} className="flex items-center justify-between p-3 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer group border border-transparent hover:border-rose-100">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-linear-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-rose-200">
                                            {member.avatar}
                                        </div>
                                        <span className={cn("absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full",
                                            member.status === 'online' ? 'bg-green-500' :
                                                member.status === 'busy' ? 'bg-red-500' : 'bg-gray-400'
                                        )} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm text-gray-900">{member.name}</p>
                                        <p className="text-xs text-gray-500">{member.role}</p>
                                    </div>
                                </div>
                                <MessageSquare size={16} className="text-gray-300 group-hover:text-rose-500 transition-colors" />
                            </div>
                        )) : (
                            <div className="text-center py-6 text-gray-400 border border-dashed border-rose-200 rounded-xl bg-rose-50/50">
                                <Users className="mx-auto mb-2 opacity-50 text-rose-300" size={24} />
                                <p>No active members</p>
                            </div>
                        )}
                    </div>
                </Card>

                {/* Task Board */}
                <Card className="col-span-1 lg:col-span-2">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <CheckSquare size={20} className="text-rose-500" /> Current Tasks
                    </h3>
                    <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                        {tasks.length > 0 ? tasks.map(task => (
                            <div key={task.id} onClick={() => onToggleTaskStatus(task.id)} className="flex items-center justify-between p-4 border border-rose-100 rounded-xl hover:border-rose-200 transition-all bg-white hover:shadow-sm hover:shadow-rose-100 cursor-pointer select-none">
                                <div className="flex items-start gap-4">
                                    <div className={cn("mt-1.5 w-2.5 h-2.5 rounded-full shrink-0",
                                        task.priority === 'Critical' ? 'bg-red-500' :
                                            task.priority === 'High' ? 'bg-orange-400' : 'bg-blue-400'
                                    )} />
                                    <div>
                                        <p className={cn("font-medium text-sm text-gray-900 transition-all", task.status === 'Completed' && "line-through text-gray-400")}>{task.title}</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <span className="text-xs text-gray-400 flex items-center gap-1">
                                                <Calendar size={12} /> {task.due}
                                            </span>
                                            {task.assignee && <span className="text-xs bg-rose-50 px-2 py-0.5 rounded-md text-rose-600 font-medium">{task.assignee}</span>}
                                        </div>
                                    </div>
                                </div>
                                <Badge variant={task.status === 'Completed' ? 'success' : task.status === 'In Progress' ? 'primary' : 'default'}>
                                    {task.status}
                                </Badge>
                            </div>
                        )) : (
                            <div className="text-center py-8 text-gray-400 border border-dashed border-rose-200 rounded-xl bg-rose-50/50">
                                <CheckSquare className="mx-auto mb-2 opacity-50 text-rose-300" size={24} />
                                <p>No tasks found for this event</p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>

            {/* Modals */}
            <Modal isOpen={isMemberModalOpen} onClose={() => setMemberModalOpen(false)} title="Add Team Member">
                <form onSubmit={handleAddMember} className="space-y-4">
                    <Input label="Name" value={newMember.name} onChange={e => setNewMember({ ...newMember, name: e.target.value })} required placeholder="e.g. John Doe" />
                    <Input label="Role" value={newMember.role} onChange={e => setNewMember({ ...newMember, role: e.target.value })} required placeholder="e.g. Planner" />
                    <Button type="submit" className="w-full justify-center">Add Member</Button>
                </form>
            </Modal>

            <Modal isOpen={isTaskModalOpen} onClose={() => setTaskModalOpen(false)} title="Create New Task">
                <form onSubmit={handleAddTask} className="space-y-4">
                    <Input label="Task Title" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} required placeholder="e.g. Call Florist" />
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Assignee</label>
                        <select className="w-full px-4 py-2 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 bg-white"
                            value={newTask.assignee} onChange={e => setNewTask({ ...newTask, assignee: e.target.value })}>
                            <option value="">Select Member...</option>
                            {members.map(m => <option key={m.id} value={m.name}>{m.name}</option>)}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input type="date" label="Due Date" value={newTask.due} onChange={e => setNewTask({ ...newTask, due: e.target.value })} required />
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Priority</label>
                            <select className="w-full px-4 py-2 border border-rose-200 rounded-xl focus:outline-none"
                                value={newTask.priority} onChange={e => setNewTask({ ...newTask, priority: e.target.value })}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Critical</option>
                            </select>
                        </div>
                    </div>
                    <Button type="submit" className="w-full justify-center">Create Task</Button>
                </form>
            </Modal>
        </div>
    );
};

const BudgetModule = ({ expenses, totalBudget, onAddExpense }) => {
    const [isExpenseModalOpen, setExpenseModalOpen] = useState(false);
    const [newExpense, setNewExpense] = useState({ category: 'Venue', amount: '', vendor: '' });

    // Computed Stats
    const totalSpent = useMemo(() => expenses.reduce((acc, curr) => acc + Number(curr.amount), 0), [expenses]);
    const budgetData = useMemo(() => {
        const categories = {};
        expenses.forEach(exp => {
            if (!categories[exp.category]) categories[exp.category] = 0;
            categories[exp.category] += Number(exp.amount);
        });
        return Object.keys(categories).map(cat => ({
            category: cat,
            spent: categories[cat],
            allocated: categories[cat] * 1.2
        }));
    }, [expenses]);


    const handleAddExpense = (e) => {
        e.preventDefault();
        onAddExpense({ ...newExpense, id: Date.now(), date: new Date().toLocaleDateString() });
        setExpenseModalOpen(false);
        setNewExpense({ category: 'Venue', amount: '', vendor: '' });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Financial Control</h2>
                    <p className="text-gray-500">Track expenses, invoices, and ROI.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary">Export Report</Button>
                    <Button variant="success" onClick={() => setExpenseModalOpen(true)}>
                        <Plus size={18} /> Add Expense
                    </Button>
                </div>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card className="p-4">
                    <p className="text-sm text-gray-500">Total Budget</p>
                    <div className="flex items-end justify-between mt-1">
                        <h4 className="text-2xl font-bold text-gray-900">${Number(totalBudget)?.toLocaleString()}</h4>
                    </div>
                </Card>
                <Card className="p-4">
                    <p className="text-sm text-gray-500">Total Spent</p>
                    <div className="flex items-end justify-between mt-1">
                        <h4 className="text-2xl font-bold text-gray-900">${totalSpent.toLocaleString()}</h4>
                        <span className="text-xs font-medium text-red-500 flex items-center">
                            <ArrowDownRight size={14} /> {totalBudget > 0 ? ((totalSpent / totalBudget) * 100).toFixed(1) : 0}%
                        </span>
                    </div>
                </Card>
                <Card className="p-4">
                    <p className="text-sm text-gray-500">Remaining</p>
                    <div className="flex items-end justify-between mt-1">
                        <h4 className="text-2xl font-bold text-gray-900">${(totalBudget - totalSpent).toLocaleString()}</h4>
                        <span className="text-xs font-medium text-emerald-600 flex items-center">
                            <ArrowUpRight size={14} /> Available
                        </span>
                    </div>
                </Card>
                <Card className="p-4">
                    <p className="text-sm text-gray-500">Avg. Expense</p>
                    <div className="flex items-end justify-between mt-1">
                        <h4 className="text-2xl font-bold text-gray-900">
                            ${expenses.length > 0 ? (totalSpent / expenses.length).toFixed(0) : 0}
                        </h4>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart */}
                <Card className="col-span-2">
                    <h3 className="font-semibold text-lg mb-6">Budget Breakdown</h3>
                    <div className="h-80 w-full flex items-center justify-center">
                        {budgetData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={budgetData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fae8ff" />
                                    <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af' }} />
                                    <RechartsTooltip cursor={{ fill: '#fff1f2' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px -2px rgb(0 0 0 / 0.1)' }} />
                                    <Legend />
                                    <Bar dataKey="allocated" name="Est. Limit" fill="#fda4af" radius={[6, 6, 0, 0]} barSize={32} />
                                    <Bar dataKey="spent" name="Actual Spent" fill="#10b981" radius={[6, 6, 0, 0]} barSize={32} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="text-gray-400 text-sm">Add expenses to visualize data</div>
                        )}
                    </div>
                </Card>

                {/* Recent Transactions */}
                <Card className="col-span-1">
                    <h3 className="font-semibold text-lg mb-4">Recent Transactions</h3>
                    <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                        {expenses.length > 0 ? expenses.slice().reverse().map((tx, i) => (
                            <div key={i} className="flex items-center justify-between pb-3 border-b border-rose-50 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                                        <DollarSign size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{tx.vendor || tx.category}</p>
                                        <p className="text-xs text-gray-500">{tx.date}</p>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-gray-900">-${Number(tx.amount).toLocaleString()}</span>
                            </div>
                        )) : (
                            <p className="text-sm text-gray-500 text-center py-4">No recent transactions</p>
                        )}
                    </div>
                </Card>
            </div>

            <Modal isOpen={isExpenseModalOpen} onClose={() => setExpenseModalOpen(false)} title="Record Expense">
                <form onSubmit={handleAddExpense} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Category</label>
                            <select className="w-full px-4 py-2 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 bg-white"
                                value={newExpense.category} onChange={e => setNewExpense({ ...newExpense, category: e.target.value })}>
                                <option>Venue</option>
                                <option>Catering</option>
                                <option>Decor</option>
                                <option>Logistics</option>
                                <option>Entertainment</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <Input type="number" label="Amount ($)" value={newExpense.amount} onChange={e => setNewExpense({ ...newExpense, amount: e.target.value })} required min="0" />
                    </div>
                    <Input label="Vendor / Description" value={newExpense.vendor} onChange={e => setNewExpense({ ...newExpense, vendor: e.target.value })} placeholder="e.g. Grand Plaza" required />
                    <Button type="submit" variant="success" className="w-full justify-center">Add Expense</Button>
                </form>
            </Modal>
        </div>
    );
};

const VendorModule = ({ vendors, travelDetails, onAddVendor, onAddTravel }) => {
    const [isVendorModalOpen, setVendorModalOpen] = useState(false);
    const [isTravelModalOpen, setTravelModalOpen] = useState(false);

    const [newVendor, setNewVendor] = useState({ name: '', type: 'Venue', status: 'Contracted' });
    const [newTravel, setNewTravel] = useState({ guest: '', mode: 'Flight', time: '', status: 'Scheduled' });

    const handleAddVendor = (e) => {
        e.preventDefault();
        onAddVendor({ ...newVendor, id: Date.now() });
        setVendorModalOpen(false);
        setNewVendor({ name: '', type: 'Venue', status: 'Contracted' });
    };

    const handleAddTravel = (e) => {
        e.preventDefault();
        onAddTravel({ ...newTravel, id: Date.now() });
        setTravelModalOpen(false);
        setNewTravel({ guest: '', mode: 'Flight', time: '', status: 'Scheduled' });
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Vendor & Travel</h2>
                    <p className="text-gray-500">Logistics, bookings, and contracts.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => setVendorModalOpen(true)}><Briefcase size={18} /> Add Vendor</Button>
                    <Button onClick={() => setTravelModalOpen(true)}><Plane size={18} /> Add Logistics</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vendors */}
                <Card>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Briefcase size={20} className="text-pink-600" /> Vendors
                        </h3>
                        <button className="text-xs text-pink-600 font-medium hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto max-h-[400px]">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-rose-50/50 text-gray-500">
                                <tr>
                                    <th className="px-3 py-3 rounded-l-lg">Name</th>
                                    <th className="px-3 py-3">Category</th>
                                    <th className="px-3 py-3 text-right rounded-r-lg">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-rose-50">
                                {vendors.length > 0 ? vendors.map(vendor => (
                                    <tr key={vendor.id} className="hover:bg-rose-50/30">
                                        <td className="px-3 py-3 font-medium text-gray-900">{vendor.name}</td>
                                        <td className="px-3 py-3 text-gray-500">{vendor.type}</td>
                                        <td className="px-3 py-3 text-right">
                                            <Badge variant={vendor.status === 'Paid' ? 'success' : vendor.status === 'Contracted' ? 'primary' : 'warning'}>
                                                {vendor.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={3} className="px-3 py-8 text-center text-gray-400">
                                            No vendors found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Travel Logistics */}
                <Card>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                            <Plane size={20} className="text-rose-400" /> Guest Logistics
                        </h3>
                        <Badge variant="primary">{travelDetails.length} Bookings</Badge>
                    </div>
                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                        {travelDetails.length > 0 ? travelDetails.map(trip => (
                            <div key={trip.id} className="flex items-center justify-between p-3 border border-rose-100 rounded-xl bg-rose-50/20">
                                <div>
                                    <p className="font-medium text-gray-900">{trip.guest}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center gap-1"><Plane size={12} /> {trip.mode}</span>
                                        <span>•</span>
                                        <span>{trip.time}</span>
                                    </div>
                                </div>
                                <Badge variant="default">{trip.status}</Badge>
                            </div>
                        )) : (
                            <div className="flex flex-col items-center justify-center py-8 text-gray-400 bg-rose-50/20 rounded-xl border border-rose-100 border-dashed">
                                <Plane className="opacity-50 mb-2 text-rose-300" size={24} />
                                <p className="text-sm">No impending arrivals</p>
                            </div>
                        )}
                    </div>
                </Card>
            </div>

            {/* Modals */}
            <Modal isOpen={isVendorModalOpen} onClose={() => setVendorModalOpen(false)} title="Add Vendor">
                <form onSubmit={handleAddVendor} className="space-y-4">
                    <Input label="Business Name" value={newVendor.name} onChange={e => setNewVendor({ ...newVendor, name: e.target.value })} required placeholder="e.g. Royal Catering" />
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Category</label>
                        <select className="w-full px-4 py-2 border border-rose-200 rounded-xl focus:outline-none bg-white"
                            value={newVendor.type} onChange={e => setNewVendor({ ...newVendor, type: e.target.value })}>
                            <option>Venue</option>
                            <option>Catering</option>
                            <option>Decor</option>
                            <option>Photo/Video</option>
                        </select>
                    </div>
                    <Button type="submit" className="w-full justify-center">Add Vendor</Button>
                </form>
            </Modal>

            <Modal isOpen={isTravelModalOpen} onClose={() => setTravelModalOpen(false)} title="Add Travel Detail">
                <form onSubmit={handleAddTravel} className="space-y-4">
                    <Input label="Guest Name" value={newTravel.guest} onChange={e => setNewTravel({ ...newTravel, guest: e.target.value })} required />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="Time (e.g. 14:00)" type="time" value={newTravel.time} onChange={e => setNewTravel({ ...newTravel, time: e.target.value })} required />
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-gray-700">Mode</label>
                            <select className="w-full px-4 py-2 border border-rose-200 rounded-xl focus:outline-none bg-white"
                                value={newTravel.mode} onChange={e => setNewTravel({ ...newTravel, mode: e.target.value })}>
                                <option>Flight</option>
                                <option>Train</option>
                                <option>Pickup</option>
                            </select>
                        </div>
                    </div>
                    <Button type="submit" className="w-full justify-center">Save Logistics</Button>
                </form>
            </Modal>

        </div>
    );
};

const AnalyticsModule = ({ expenses, expensesByDate }) => (
    <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
                <p className="text-gray-500">Business intelligence and performance metrics.</p>
            </div>
            <button className="bg-white border text-gray-700 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-rose-50 transition-colors">
                <FileText size={18} /> Export PDF
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
                <h3 className="font-semibold text-lg mb-6">Spending Over Time</h3>
                <div className="h-64 flex items-center justify-center">
                    {expensesByDate.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={expensesByDate}>
                                <defs>
                                    <linearlinear id="colorCost" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                                    </linearlinear>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#fae8ff" />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} />
                                <YAxis axisLine={false} tickLine={false} />
                                <RechartsTooltip />
                                <Area type="monotone" dataKey="amount" stroke="#f43f5e" fillOpacity={1} fill="url(#colorCost)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="text-gray-400 text-sm">Add expenses to see spending trends</div>
                    )}
                </div>
            </Card>

            <Card>
                <h3 className="font-semibold text-lg mb-6">Expense Distribution</h3>
                <div className="h-64 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                        {expenses.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={expenses} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="amount">
                                        {expenses.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#8b5cf6'][index % 5]} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={[{ name: 'No Data', value: 1 }]} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                        <Cell fill="#f3f4f6" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <span className="text-2xl font-bold text-gray-900">{expenses.length}</span>
                            <span className="text-xs text-gray-500 uppercase font-medium">Txns</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {/* Legend could go here */}
                </div>
            </Card>
        </div>
    </div>
);

const Onboarding = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ name: '', destination: '', guests: '', budget: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onComplete(data);
    };

    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-rose-50 flex items-center justify-center p-4 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
            <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 animate-in zoom-in-95 duration-500 relative z-10 border border-rose-100">
                {/* Back Button */}
                <button
                    onClick={handleGoBack}
                    className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-all duration-200"
                >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </button>
                
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg shadow-rose-200">
                        <Heart fill="currentColor" size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Welcome to Shadi Bazar</h1>
                    <p className="text-gray-500">Plan your dream wedding with love & perfection.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                        label="Event Name"
                        placeholder="e.g. Rahul & Priya's Wedding"
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}
                        required
                        autoFocus
                    />
                    <Input
                        label="Destination / Location"
                        placeholder="e.g. Udaipur, Rajasthan"
                        value={data.destination}
                        onChange={e => setData({ ...data, destination: e.target.value })}
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="number"
                            label="Est. Guests"
                            placeholder="500"
                            value={data.guests}
                            onChange={e => setData({ ...data, guests: e.target.value })}
                            required
                        />
                        <Input
                            type="number"
                            label="Total Budget ($)"
                            placeholder="50000"
                            value={data.budget}
                            onChange={e => setData({ ...data, budget: e.target.value })}
                            required
                        />
                    </div>

                    <Button type="submit" size="lg" className="w-full justify-center py-3 text-lg">
                        Start Planning <ChevronRight size={20} />
                    </Button>
                </form>
            </div>
        </div>
    );
}

// --- MAIN LAYOUT ---

export default function EventManagementSoftware() {
    const [activeTab, setActiveTab] = useState('team');
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    // Application State
    const [isSetup, setIsSetup] = useState(false);
    const [weddingDetails, setWeddingDetails] = useState(null);
    const [teamMembers, setTeamMembers] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [expenses, setExpenses] = useState([]);

    // New State for Vendor & Travel
    const [vendors, setVendors] = useState([]);
    const [travelDetails, setTravelDetails] = useState([]);

    // Computed Analytics Data
    const expensesByDate = useMemo(() => {
        const grouped = {};
        expenses.forEach(e => {
            if (!grouped[e.date]) grouped[e.date] = 0;
            grouped[e.date] += Number(e.amount);
        });
        return Object.keys(grouped).map(date => ({ date, amount: grouped[date] }));
    }, [expenses]);

    // Handlers
    const handleOnboardingComplete = (details) => {
        setWeddingDetails(details);
        setIsSetup(true);
    };

    const handleAddMember = (member) => setTeamMembers([...teamMembers, member]);
    const handleAddTask = (task) => setTasks([...tasks, task]);
    const handleToggleTask = (id) => {
        setTasks(tasks.map(t => {
            if (t.id !== id) return t;
            const nextStatus = t.status === 'Pending' ? 'In Progress' : t.status === 'In Progress' ? 'Completed' : 'Pending';
            return { ...t, status: nextStatus };
        }));
    };
    const handleAddExpense = (expense) => setExpenses([...expenses, expense]);
    const handleAddVendor = (vendor) => setVendors([...vendors, vendor]);
    const handleAddTravel = (trip) => setTravelDetails([...travelDetails, trip]);

    const handleGoBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = '/';
        }
    };

    if (!isSetup) {
        return <Onboarding onComplete={handleOnboardingComplete} />;
    }

    const menuItems = [
        { id: 'team', label: 'Team Collaboration', icon: Users },
        { id: 'budget', label: 'Budget & Finance', icon: DollarSign },
        { id: 'vendor', label: 'Vendor & Travel', icon: Plane },
        { id: 'analytics', label: 'Reports & Analytics', icon: BarChart3 },
    ];

    return (
        <div className="flex w-full h-full min-h-screen bg-rose-50/30">
            {/* Sidebar */}
            <aside className={cn(
                "bg-white border-r border-rose-100 flex flex-col transition-all duration-300 z-20",
                isSidebarOpen ? "w-72" : "w-20"
            )}>
                <div className="h-16 flex items-center px-6 border-b border-rose-100">
                    <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-rose-200">
                        <Heart className="text-white fill-white" size={18} />
                    </div>
                    {isSidebarOpen && <span className="ml-3 font-bold text-lg tracking-tight text-gray-900">Shadi Bazar</span>}
                </div>

                <nav className="flex-1 py-6 space-y-1.5 px-3">
                    {menuItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group font-medium",
                                activeTab === item.id
                                    ? "bg-rose-50 text-rose-600"
                                    : "text-gray-500 hover:bg-rose-50/50 hover:text-rose-500"
                            )}
                        >
                            <item.icon size={22} className={cn("shrink-0", activeTab === item.id ? "text-rose-600" : "text-gray-400 group-hover:text-rose-500")} />
                            {isSidebarOpen && <span className="whitespace-nowrap">{item.label}</span>}

                            {activeTab === item.id && isSidebarOpen && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-rose-400" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-rose-100">
                    <button className="flex items-center gap-3 text-gray-400 hover:text-rose-600 transition-colors w-full px-2 py-2">
                        <Settings size={20} />
                        {isSidebarOpen && <span>Settings</span>}
                    </button>
                    <div className="mt-4 flex items-center gap-3 px-2">
                        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-rose-400 to-pink-500 border border-white ring-2 ring-rose-100" />
                        {isSidebarOpen && (
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">Jane Cooper</p>
                                <p className="text-xs text-rose-500 truncate">Admin</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {/* Header */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-rose-100 flex items-center justify-between px-6 shrink-0 z-10">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 text-gray-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-colors">
                            <MoreVertical size={20} className="rotate-90" />
                        </button>
                        <h1 className="text-xl font-semibold text-gray-800">
                            {weddingDetails.name} <span className="text-rose-300 mx-2">•</span> <span className="text-sm font-normal text-gray-500">{weddingDetails.destination}</span>
                        </h1>
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
                        <div className="relative hidden md:block">
                            <input type="text" placeholder="Search..." className="w-64 pl-10 pr-4 py-2 bg-rose-50/50 border border-transparent focus:bg-white focus:border-rose-200 rounded-full text-sm focus:outline-none transition-all placeholder-gray-400" />
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                        <button className="relative p-2 text-gray-400 hover:text-rose-600 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="max-w-7xl mx-auto">
                        {activeTab === 'team' && (
                            <TeamModule
                                members={teamMembers}
                                tasks={tasks}
                                onAddMember={handleAddMember}
                                onAddTask={handleAddTask}
                                onToggleTaskStatus={handleToggleTask}
                            />
                        )}
                        {activeTab === 'budget' && (
                            <BudgetModule
                                expenses={expenses}
                                totalBudget={weddingDetails.budget}
                                onAddExpense={handleAddExpense}
                            />
                        )}
                        {activeTab === 'vendor' && (
                            <VendorModule
                                vendors={vendors}
                                travelDetails={travelDetails}
                                onAddVendor={handleAddVendor}
                                onAddTravel={handleAddTravel}
                            />
                        )}
                        {activeTab === 'analytics' && <AnalyticsModule expenses={expenses} expensesByDate={expensesByDate} />}
                    </div>
                </div>
            </main>
        </div>
    );
}