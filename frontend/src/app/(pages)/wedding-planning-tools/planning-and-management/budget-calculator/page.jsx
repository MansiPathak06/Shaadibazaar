"use client";

import { useState, useEffect } from "react";
import { DollarSign, TrendingUp, TrendingDown, Loader2, Plus, Save, Edit2, Trash2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { format } from "date-fns";

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
};

const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
};

// ============================================================================
// MOCK DATA & API
// ============================================================================

const MOCK_CATEGORIES = [
    { id: "1", name: "Venue", planned: 500000, spent: 0, color: "#b76e79" },
    { id: "2", name: "Catering", planned: 300000, spent: 0, color: "#dcae96" },
    { id: "3", name: "Decoration", planned: 150000, spent: 0, color: "#8a9a5b" },
    { id: "4", name: "Clothing", planned: 200000, spent: 0, color: "#c5a059" },
    { id: "5", name: "Jewellery", planned: 300000, spent: 0, color: "#36454f" },
    { id: "6", name: "Photography", planned: 100000, spent: 0, color: "#e3d5ca" },
    { id: "7", name: "Music / DJ", planned: 50000, spent: 0, color: "#f4a261" },
    { id: "8", name: "Invitations", planned: 20000, spent: 0, color: "#e76f51" },
    { id: "9", name: "Transportation", planned: 40000, spent: 0, color: "#2a9d8f" },
    { id: "10", name: "Gifts", planned: 50000, spent: 0, color: "#264653" },
    { id: "11", name: "Miscellaneous", planned: 50000, spent: 0, color: "#6d6d6d" },
];

let MOCK_EXPENSES = [];
let USER_BUDGET = 1760000;

const api = {
    getDashboardData: async () => {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const totalSpent = MOCK_EXPENSES.reduce((sum, exp) => sum + exp.amount, 0);
        const categoriesWithSpent = MOCK_CATEGORIES.map(cat => {
            const spent = MOCK_EXPENSES
                .filter(e => e.category === cat.name)
                .reduce((sum, e) => sum + e.amount, 0);
            return { ...cat, spent };
        });
        return {
            summary: {
                totalBudget: USER_BUDGET,
                totalSpent,
                remaining: USER_BUDGET - totalSpent,
            },
            categories: categoriesWithSpent,
            recentExpenses: MOCK_EXPENSES.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
        };
    },

    addExpense: async (expense) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const newExpense = { ...expense, id: Math.random().toString(36).substr(2, 9) };
        MOCK_EXPENSES.push(newExpense);
        return newExpense;
    },

    deleteExpense: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const index = MOCK_EXPENSES.findIndex(e => e.id === id);
        if (index > -1) MOCK_EXPENSES.splice(index, 1);
    },

    updateExpense: async (updatedExpense) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const index = MOCK_EXPENSES.findIndex(e => e.id === updatedExpense.id);
        if (index > -1) {
            MOCK_EXPENSES[index] = updatedExpense;
        }
        return updatedExpense;
    },

    updateCategory: async (updatedCategory) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const index = MOCK_CATEGORIES.findIndex(c => c.id === updatedCategory.id);
        if (index > -1) {
            MOCK_CATEGORIES[index] = { ...updatedCategory };
        }
        return updatedCategory;
    },

    updateTotalBudget: async (amount) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        USER_BUDGET = amount;
        return USER_BUDGET;
    }
};

// ============================================================================
// UI COMPONENTS
// ============================================================================

function ProgressBar({ value, max, label, showPercentage = true }) {
    const percentage = Math.min(Math.round((value / max) * 100), 100);
    let colorClass = "bg-green-500";
    if (percentage > 80) colorClass = "bg-yellow-500";
    if (percentage >= 100) colorClass = "bg-red-500";

    return (
        <div className="w-full">
            <div className="flex justify-between items-end mb-2">
                {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
                {showPercentage && (
                    <span className={cn("text-xs font-bold", percentage >= 100 ? "text-red-600" : "text-gray-600")}>
                        {percentage}% Used
                    </span>
                )}
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={cn("h-full transition-all duration-1000 ease-out rounded-full", colorClass)}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    );
}

function SummaryCard({ title, amount, icon: Icon, variant = "default" }) {
    const variantStyles = {
        default: "bg-white border-gray-200 text-gray-900",
        warning: "bg-red-50 border-red-200 text-red-800",
        success: "bg-green-50 border-green-200 text-green-800",
    };

    return (
        <div className={cn("p-6 rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md", variantStyles[variant])}>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium opacity-80">{title}</h3>
                <div className="p-2 rounded-full bg-pink-100">
                    <Icon className="h-5 w-5 text-pink-600" />
                </div>
            </div>
            <p className="text-3xl font-bold">{formatCurrency(amount)}</p>
        </div>
    );
}

function CategoryCard({ category, onEdit }) {
    const isOverBudget = category.spent > category.planned;
    const difference = category.planned - category.spent;

    return (
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                <div className="flex gap-2">
                    {onEdit && (
                        <button
                            onClick={() => onEdit(category)}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded hover:bg-pink-500 hover:text-white transition-colors"
                        >
                            Edit
                        </button>
                    )}
                    <span
                        className={cn(
                            "text-xs font-bold px-2 py-1 rounded-full",
                            isOverBudget ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                        )}
                    >
                        {isOverBudget ? "Over Budget" : "On Track"}
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="text-gray-500 mb-1">Planned</p>
                        <p className="font-semibold text-gray-900">{formatCurrency(category.planned)}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 mb-1">Spent</p>
                        <p className={cn("font-semibold", isOverBudget ? "text-red-600" : "text-gray-900")}>
                            {formatCurrency(category.spent)}
                        </p>
                    </div>
                </div>

                <ProgressBar value={category.spent} max={category.planned} showPercentage={false} />

                <div className="pt-2 border-t border-gray-50 flex justify-between items-center text-sm">
                    <span className="text-gray-500">Difference</span>
                    <span className={cn("font-mono font-medium", difference < 0 ? "text-red-600" : "text-green-600")}>
                        {difference > 0 ? "+" : ""}{formatCurrency(difference)}
                    </span>
                </div>
            </div>
        </div>
    );
}

function ExpenseForm({ categories, initialData, onSubmit, onCancel, isSubmitting = false }) {
    const [formData, setFormData] = useState(
        initialData || {
            title: "",
            amount: 0,
            date: new Date().toISOString().split("T")[0],
            category: categories[0]?.name || "",
            paymentMethod: "UPI",
            notes: "",
        }
    );

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.title) newErrors.title = "Title is required";
        if (formData.amount <= 0) newErrors.amount = "Amount must be greater than 0";
        if (!formData.date) newErrors.date = "Date is required";
        if (!formData.category) newErrors.category = "Category is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            await onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                {initialData ? "Edit Expense" : "Add New Expense"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Title</label>
                    <input
                        type="text"
                        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900", errors.title ? "border-red-500" : "border-gray-200")}
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. Venue Advance"
                    />
                    {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Category</label>
                    <select
                        className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Amount (₹)</label>
                    <input
                        type="number"
                        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900", errors.amount ? "border-red-500" : "border-gray-200")}
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
                    />
                    {errors.amount && <p className="text-xs text-red-500">{errors.amount}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Date</label>
                    <input
                        type="date"
                        className={cn("w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900", errors.date ? "border-red-500" : "border-gray-200")}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                    {errors.date && <p className="text-xs text-red-500">{errors.date}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Payment Method</label>
                    <select
                        className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white text-gray-900"
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    >
                        <option value="Cash">Cash</option>
                        <option value="UPI">UPI</option>
                        <option value="Card">Card</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Notes (Optional)</label>
                <textarea
                    className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[80px] bg-white text-gray-900"
                    value={formData.notes || ""}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Add any details..."
                />
            </div>

            <div className="flex justify-end gap-3 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    disabled={isSubmitting}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md shadow-sm transition-all disabled:opacity-70"
                >
                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : (initialData ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />)}
                    {initialData ? "Save Changes" : "Add Expense"}
                </button>
            </div>
        </form>
    );
}

function ExpenseTable({ expenses, onEdit, onDelete, isDeletingId }) {
    if (expenses.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">No expenses recorded yet.</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
                        <th className="px-6 py-4 font-semibold text-sm">Date</th>
                        <th className="px-6 py-4 font-semibold text-sm">Title</th>
                        <th className="px-6 py-4 font-semibold text-sm">Category</th>
                        <th className="px-6 py-4 font-semibold text-sm text-right">Amount</th>
                        <th className="px-6 py-4 font-semibold text-sm text-center">Payment</th>
                        <th className="px-6 py-4 font-semibold text-sm text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {expenses.map((expense) => (
                        <tr key={expense.id} className="hover:bg-gray-50 transition-colors group">
                            <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                                {format(new Date(expense.date), "dd MMM yyyy")}
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                {expense.title}
                                {expense.notes && <div className="text-xs text-gray-400 mt-0.5 font-normal truncate max-w-[150px]">{expense.notes}</div>}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">
                                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700 border border-gray-200">
                                    {expense.category}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-gray-900 text-right font-mono">
                                {formatCurrency(expense.amount)}
                            </td>
                            <td className="px-6 py-4 text-sm text-center text-gray-500">
                                {expense.paymentMethod}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => onEdit(expense)}
                                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                        title="Edit"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => onDelete(expense.id)}
                                        disabled={isDeletingId === expense.id}
                                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function EditBudgetModal({ category, onSave, onClose, isSubmitting = false }) {
    const [plannedAmount, setPlannedAmount] = useState(category.planned);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (plannedAmount < 0) {
            setError("Budget cannot be negative");
            return;
        }
        await onSave({ ...category, planned: plannedAmount });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Edit Budget: <span className="text-pink-600">{category.name}</span>
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Planned Amount (₹)</label>
                            <input
                                type="number"
                                className={cn(
                                    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono text-lg text-gray-900",
                                    error ? "border-red-500" : "border-gray-200"
                                )}
                                value={plannedAmount}
                                onChange={(e) => {
                                    setPlannedAmount(parseFloat(e.target.value) || 0);
                                    setError("");
                                }}
                                autoFocus
                            />
                            {error && <p className="text-xs text-red-500">{error}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md shadow-sm transition-all disabled:opacity-70"
                            >
                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function EditTotalBudgetModal({ currentAmount, onSave, onClose, isSubmitting = false }) {
    const [amount, setAmount] = useState(currentAmount);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (amount < 0) {
            setError("Budget cannot be negative");
            return;
        }
        await onSave(amount);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-sm overflow-hidden">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Set Total Budget
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Total Amount (₹)</label>
                            <input
                                type="number"
                                className={cn(
                                    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono text-lg text-gray-900",
                                    error ? "border-red-500" : "border-gray-200"
                                )}
                                value={amount}
                                onChange={(e) => {
                                    setAmount(parseFloat(e.target.value) || 0);
                                    setError("");
                                }}
                                autoFocus
                            />
                            {error && <p className="text-xs text-red-500">{error}</p>}
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md shadow-sm transition-all disabled:opacity-70"
                            >
                                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function BudgetBarChart({ data }) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg z-50">
                    <p className="font-bold text-gray-900 mb-1">{label}</p>
                    <p className="text-sm text-green-600">
                        Planned: {formatCurrency(payload[0].value)}
                    </p>
                    <p className="text-sm text-pink-600">
                        Spent: {formatCurrency(payload[1].value)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="h-[350px] w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center shrink-0">Budget vs Actual</h3>
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                            dataKey="name"
                            tick={{ fontSize: 10, fill: '#666' }}
                            interval={0}
                            angle={-30}
                            textAnchor="end"
                            height={60}
                        />
                        <YAxis
                            tick={{ fontSize: 10, fill: '#666' }}
                            tickFormatter={(value) => `₹${value / 1000}k`}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                        <Legend wrapperStyle={{ paddingTop: '0px' }} />
                        <Bar name="Planned" dataKey="planned" fill="#8a9a5b" radius={[4, 4, 0, 0]} barSize={20} />
                        <Bar name="Spent" dataKey="spent" fill="#ec4899" radius={[4, 4, 0, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

function ExpensesPieChart({ data }) {
    const activeData = data.filter(item => item.spent > 0);

    if (activeData.length === 0) {
        return (
            <div className="h-[350px] flex items-center justify-center bg-gray-50 rounded-lg border border-dashed text-gray-400">
                No expenses to display yet
            </div>
        );
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-lg">
                    <p className="font-bold text-gray-900">{payload[0].name}</p>
                    <p className="text-sm font-mono text-gray-600">
                        {formatCurrency(payload[0].value)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="h-[350px] w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center shrink-0">Expense Breakdown</h3>
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <PieChart>
                        <Pie
                            data={activeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="spent"
                        >
                            {activeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color || "#ec4899"} stroke="white" strokeWidth={2} />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: "20px" }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function BudgetCalculatorPage() {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const [editingExpense, setEditingExpense] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingTotalBudget, setEditingTotalBudget] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        setLoading(true);
        try {
            const data = await api.getDashboardData();
            setDashboardData(data);
        } catch (error) {
            console.error("Error loading dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddExpense = async (expenseData) => {
        setIsSubmitting(true);
        try {
            if (editingExpense) {
                await api.updateExpense({ ...expenseData, id: editingExpense.id });
            } else {
                await api.addExpense(expenseData);
            }
            await loadDashboardData();
            setShowExpenseForm(false);
            setEditingExpense(null);
        } catch (error) {
            console.error("Error saving expense:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteExpense = async (id) => {
        setDeletingId(id);
        try {
            await api.deleteExpense(id);
            await loadDashboardData();
        } catch (error) {
            console.error("Error deleting expense:", error);
        } finally {
            setDeletingId(null);
        }
    };

    const handleEditExpense = (expense) => {
        setEditingExpense(expense);
        setShowExpenseForm(true);
    };

    const handleUpdateCategory = async (updatedCategory) => {
        setIsSubmitting(true);
        try {
            await api.updateCategory(updatedCategory);
            await loadDashboardData();
            setEditingCategory(null);
        } catch (error) {
            console.error("Error updating category:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleUpdateTotalBudget = async (amount) => {
        setIsSubmitting(true);
        try {
            await api.updateTotalBudget(amount);
            await loadDashboardData();
            setEditingTotalBudget(false);
        } catch (error) {
            console.error("Error updating total budget:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-500 mx-auto"></div>
                    <p className="mt-4 text-gray-700 font-medium">Loading your wedding budget...</p>
                </div>
            </div>
        );
    }

    const { summary, categories, recentExpenses } = dashboardData;
    const budgetUsagePercentage = (summary.totalSpent / summary.totalBudget) * 100;

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-50 via-white to-purple-50">
            {/* Header Section */}
            <div className="bg-linear-to-r from-pink-500 to-purple-600 py-16 px-4 shadow-lg">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Wedding Budget Calculator
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Plan your dream wedding with confidence. Track expenses, manage budgets, and stay organized every step of the way.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard
                        title="Total Budget"
                        amount={summary.totalBudget}
                        icon={DollarSign}
                        variant="default"
                    />
                    <SummaryCard
                        title="Total Spent"
                        amount={summary.totalSpent}
                        icon={TrendingUp}
                        variant={budgetUsagePercentage > 100 ? "warning" : "default"}
                    />
                    <SummaryCard
                        title="Remaining"
                        amount={summary.remaining}
                        icon={TrendingDown}
                        variant={summary.remaining < 0 ? "warning" : "success"}
                    />
                </div>

                {/* Budget Overview */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Budget Overview</h2>
                        <button
                            onClick={() => setEditingTotalBudget(true)}
                            className="px-4 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md transition-colors"
                        >
                            Edit Total Budget
                        </button>
                    </div>
                    <ProgressBar
                        value={summary.totalSpent}
                        max={summary.totalBudget}
                        label="Overall Budget Progress"
                    />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <BudgetBarChart data={categories} />
                    <ExpensesPieChart data={categories} />
                </div>

                {/* Category Breakdown */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Breakdown</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                                onEdit={setEditingCategory}
                            />
                        ))}
                    </div>
                </div>

                {/* Expenses Section */}
                <div>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Expenses</h2>
                        <button
                            onClick={() => {
                                setEditingExpense(null);
                                setShowExpenseForm(true);
                            }}
                            className="px-6 py-2 text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 rounded-md shadow-sm transition-all"
                        >
                            Add Expense
                        </button>
                    </div>

                    {showExpenseForm && (
                        <div className="mb-6">
                            <ExpenseForm
                                categories={categories}
                                initialData={editingExpense}
                                onSubmit={handleAddExpense}
                                onCancel={() => {
                                    setShowExpenseForm(false);
                                    setEditingExpense(null);
                                }}
                                isSubmitting={isSubmitting}
                            />
                        </div>
                    )}

                    <ExpenseTable
                        expenses={recentExpenses}
                        onEdit={handleEditExpense}
                        onDelete={handleDeleteExpense}
                        isDeletingId={deletingId}
                    />
                </div>

                {/* Tips Section */}
                <div className="bg-linear-to-r from-pink-100 to-purple-100 p-8 rounded-xl border border-pink-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        💡 Budget Planning Tips
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <p>Set aside 10-15% of your budget for unexpected expense</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <p>Prioritize the most important elements of your wedding day</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <p>Track every expense, no matter how small</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <p>Review and adjust your budget regularly as plans evolve</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {editingCategory && (
                <EditBudgetModal
                    category={editingCategory}
                    onSave={handleUpdateCategory}
                    onClose={() => setEditingCategory(null)}
                    isSubmitting={isSubmitting}
                />
            )}

            {editingTotalBudget && (
                <EditTotalBudgetModal
                    currentAmount={summary.totalBudget}
                    onSave={handleUpdateTotalBudget}
                    onClose={() => setEditingTotalBudget(false)}
                    isSubmitting={isSubmitting}
                />
            )}
        </div>
    );
}
