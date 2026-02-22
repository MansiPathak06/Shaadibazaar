"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Bell, Search, FileText, Clock, AlertCircle, TrendingUp, Upload, X, Check, User, Mail, Phone, Briefcase, Save, Lock, UserPlus, LogOut, Home, Settings, MoreVertical, Download, Filter, ArrowLeft, Trash2, RefreshCw } from 'lucide-react';
import { format, isBefore, addDays } from 'date-fns';

// ─── API HELPERS ──────────────────────────────────────────────────────────────
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiCall = async (endpoint, options = {}, token = null) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
};

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
const Dashboard = ({ documents, token }) => {
  const [stats, setStats] = useState({ total: 0, expiringSoon: 0, expired: 0, thisMonth: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiCall('/documents/stats', {}, token);
        if (data.success) setStats(data.stats);
      } catch (e) {
        // fallback: compute from local documents array
        const today = new Date();
        const in30 = addDays(today, 30);
        setStats({
          total: documents.length,
          expiringSoon: documents.filter(d => d.expiryDate && new Date(d.expiryDate) >= today && new Date(d.expiryDate) <= in30).length,
          expired: documents.filter(d => d.expiryDate && isBefore(new Date(d.expiryDate), today)).length,
          thisMonth: documents.filter(d => new Date(d.uploadDate).getMonth() === today.getMonth()).length,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [documents, token]);

  const recentDocs = [...documents].sort((a, b) =>
    new Date(b.uploadDate) - new Date(a.uploadDate)
  ).slice(0, 5);

  const StatCard = ({ label, value, icon: Icon, color, bg }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{loading ? '—' : value}</p>
      </div>
      <div className={`${bg} p-3 rounded-xl`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Documents" value={stats.total} icon={FileText} color="text-pink-600" bg="bg-pink-50" />
        <StatCard label="Expiring Soon" value={stats.expiringSoon} icon={Clock} color="text-orange-600" bg="bg-orange-50" />
        <StatCard label="Expired" value={stats.expired} icon={AlertCircle} color="text-red-600" bg="bg-red-50" />
        <StatCard label="This Month" value={stats.thisMonth} icon={TrendingUp} color="text-green-600" bg="bg-green-50" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">Recently Uploaded</h3>
        </div>
        <div className="p-6">
          {recentDocs.length > 0 ? (
            <div className="space-y-3">
              {recentDocs.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{doc.title}</p>
                      <p className="text-xs text-gray-500">{doc.category} • Uploaded {format(new Date(doc.uploadDate), 'MMM d, yyyy')}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 bg-white border border-gray-200 rounded font-medium text-gray-600">
                    {doc.category}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-2">No activity yet</p>
              <p className="text-sm text-gray-400">Upload your first document to get started.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── DOCUMENT LIST ────────────────────────────────────────────────────────────
const DocumentList = ({ documents, onDelete, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', 'Venue', 'Catering', 'Photography', 'Decor', 'Legal', 'Other'];

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doc.vendor?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || doc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or vendor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-100 outline-none"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                categoryFilter === cat
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-200'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <RefreshCw className="w-8 h-8 text-pink-400 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500 mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <button
                    onClick={() => onDelete(doc.id)}
                    className="text-gray-300 hover:text-red-500 transition-colors p-1"
                    title="Delete document"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-bold text-gray-900 truncate" title={doc.title}>{doc.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{doc.vendor || 'No vendor'}</p>

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>Category</span>
                    <span className="font-medium text-gray-700">{doc.category}</span>
                  </div>
                  {doc.expiryDate && (
                    <div className="flex justify-between">
                      <span>Expires</span>
                      <span className={`font-medium ${new Date(doc.expiryDate) < new Date() ? 'text-red-500' : 'text-gray-700'}`}>
                        {format(new Date(doc.expiryDate), 'MMM d, yyyy')}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Uploaded</span>
                    <span className="font-medium text-gray-700">{format(new Date(doc.uploadDate), 'MMM d, yyyy')}</span>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 border-t border-gray-50 bg-gray-50/50 rounded-b-2xl flex justify-between items-center">
                <span className="text-xs font-medium px-2 py-1 bg-white border border-gray-200 rounded text-gray-600">
                  {doc.fileType?.includes('pdf') ? 'PDF' : doc.fileType?.split('/')[1]?.toUpperCase() || 'FILE'}
                </span>
                <button className="text-sm font-medium text-pink-600 hover:text-pink-700 flex items-center gap-1">
                  Download <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && filteredDocs.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-100 border-dashed">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-300" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No documents found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filters, or upload a new one.</p>
        </div>
      )}
    </div>
  );
};

// ─── UPLOAD FORM ──────────────────────────────────────────────────────────────
const UploadForm = ({ onUpload, setActiveTab, token }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    vendor: '',
    category: 'Venue',
    contractDate: '',
    expiryDate: '',
    notes: ''
  });

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !formData.title) return;

    setLoading(true);
    setError('');

    try {
      const payload = {
        ...formData,
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
      };

      const data = await apiCall('/documents', {
        method: 'POST',
        body: JSON.stringify(payload),
      }, token);

      if (data.success) {
        onUpload(data.document);
        setActiveTab('documents');
      }
    } catch (err) {
      setError(err.message || 'Failed to upload document');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-900">Upload New Document</h2>
          <p className="text-gray-500 text-sm mt-1">Add a new contract or important file to your storage.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Drop Zone */}
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors ${
              dragActive ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-300'
            } ${file ? 'bg-green-50 border-green-500' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input type="file" className="hidden" id="file-upload" onChange={e => setFile(e.target.files[0])} />
            <label htmlFor="file-upload" className="cursor-pointer block">
              {file ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-green-800">{file.name}</p>
                  <p className="text-xs text-green-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                  <button onClick={(e) => { e.preventDefault(); setFile(null); }} className="text-xs text-red-500 hover:underline mt-2">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, PNG, JPG up to 10MB</p>
                  </div>
                </div>
              )}
            </label>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Document Title *</label>
              <input required type="text"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                placeholder="e.g. Venue Contract Final"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Vendor Name</label>
              <input type="text"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                placeholder="e.g. The Grand Palace"
                value={formData.vendor}
                onChange={e => setFormData({ ...formData, vendor: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
              >
                {['Venue','Catering','Photography','Decor','Legal','Other'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Expiry Date</label>
              <input type="date"
                className="w-full px-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                value={formData.expiryDate}
                onChange={e => setFormData({ ...formData, expiryDate: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Notes</label>
            <textarea rows="3"
              className="w-full px-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none resize-none"
              placeholder="Any additional details..."
              value={formData.notes}
              onChange={e => setFormData({ ...formData, notes: e.target.value })}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={() => setActiveTab('documents')}
              className="px-6 py-2.5 rounded-xl text-gray-600 font-medium hover:bg-gray-100 transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={loading || !file}
              className={`px-6 py-2.5 rounded-xl text-white font-medium shadow-lg shadow-pink-200 transition-all ${
                loading || !file ? 'bg-gray-300 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl'
              }`}>
              {loading ? 'Uploading...' : 'Save Document'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ─── USER PROFILE ─────────────────────────────────────────────────────────────
const UserProfile = ({ user, onUpdateUser, token }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) setFormData({ name: user.name || '', email: user.email || '', phone: user.phone || '', company: user.company || '' });
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Call your existing auth update-profile endpoint, or adjust to yours
      const data = await apiCall('/auth/update-profile', {
        method: 'PUT',
        body: JSON.stringify(formData),
      }, token);

      if (data.success) {
        onUpdateUser({ ...user, ...formData });
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-900">My Profile</h2>
          <p className="text-gray-500 text-sm mt-1">Manage your personal information.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input type="email" disabled
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-100/50 text-gray-500 border-transparent outline-none cursor-not-allowed"
                  value={formData.email}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input type="tel"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Company / Organization</label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-pink-100 transition-all outline-none"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="pt-4 flex items-center justify-between">
            {message && <span className="text-green-600 text-sm font-medium">{message}</span>}
            <button type="submit"
              className="px-6 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg shadow-pink-200 transition-all flex items-center gap-2 ml-auto">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ─── LOGIN ────────────────────────────────────────────────────────────────────
const Login = ({ onLogin, onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) { setError('Please fill in all fields'); return; }

    setLoading(true);
    setError('');

    try {
      const data = await apiCall('/auth/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      console.log('Login response:', data); // check browser console to see exact shape

      // Handles all common shapes: { token, user } / { token, data } / { accessToken, user }
      const token = data.token || data.accessToken;
      const user  = data.user || data.data || data.userData;

      if (token && user) {
        onLogin(user, token);
      } else if (token && !user) {
        // Fallback: decode user from JWT payload
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          onLogin({ id: payload.id || payload.userId, email: payload.email, name: payload.name || payload.email }, token);
        } catch {
          setError('Login succeeded but user info is missing from response.');
        }
      } else {
        setError(data.message || 'Login failed — no token returned');
      }
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto text-pink-500 mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input type="email"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl bg-pink-500 text-white font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 hover:shadow-xl transition-all disabled:opacity-60">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="text-center">
          <button onClick={onNavigateToSignup} className="text-sm text-pink-500 hover:text-pink-600 font-medium">
            Don't have an account? Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── SIGNUP ───────────────────────────────────────────────────────────────────
const Signup = ({ onSignup, onNavigateToLogin }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', company: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all required fields'); return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const token = data.token || data.accessToken;
      const user  = data.user || data.data || data.userData;
      if (token && user) {
        onSignup(user, token);
      } else {
        setError(data.message || 'Signup failed — no token returned');
      }
    } catch (err) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-sm w-full rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto text-pink-500 mb-4">
            <UserPlus className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Join Shadi Bazar today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { icon: User, type: 'text', placeholder: 'Full Name *', key: 'name' },
            { icon: Mail, type: 'email', placeholder: 'Email Address *', key: 'email' },
            { icon: Phone, type: 'tel', placeholder: 'Phone Number', key: 'phone' },
            { icon: Briefcase, type: 'text', placeholder: 'Company Name', key: 'company' },
          ].map(({ icon: Icon, type, placeholder, key }) => (
            <div key={key} className="relative">
              <Icon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input type={type}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder={placeholder}
                value={formData[key]}
                onChange={e => setFormData({ ...formData, [key]: e.target.value })}
              />
            </div>
          ))}
          <input type="password"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            placeholder="Password *"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-3 rounded-xl bg-pink-500 text-white font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 hover:shadow-xl transition-all disabled:opacity-60">
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <div className="text-center">
          <button onClick={onNavigateToLogin} className="text-sm text-pink-500 hover:text-pink-600 font-medium">
            Already have an account? Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── HEADER ───────────────────────────────────────────────────────────────────
const Header = ({ title, setMobileMenuOpen }) => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100 px-4 sm:px-6 h-16 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <button onClick={() => setMobileMenuOpen(true)}
        className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-lg md:hidden">
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
    </div>
    <div className="flex items-center gap-4">
      <button className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-colors relative">
        <Bell className="w-5 h-5" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
      </button>
    </div>
  </header>
);

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
const Sidebar = ({ activeTab, setActiveTab, mobileMenuOpen, setMobileMenuOpen, user, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'upload', label: 'Upload New', icon: Upload },
    { id: 'profile', label: 'My Profile', icon: User },
  ];

  return (
    <>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
      <div className={`fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 transform transition-transform duration-200 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex items-center h-16 px-6 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Shadi Bazar
            </span>
          </div>
        </div>

        <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <button key={id}
              onClick={() => { setActiveTab(id); setMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === id ? 'bg-pink-50 text-pink-600 shadow-sm' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}>
              <Icon className={`w-5 h-5 ${activeTab === id ? 'text-pink-500' : 'text-gray-400'}`} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-3 px-4 py-3 text-gray-600 mb-2">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center border border-pink-200 text-pink-600 font-bold text-xs uppercase">
              {user?.name?.slice(0, 2) || 'US'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-gray-500 truncate">{user?.company || 'Member'}</p>
            </div>
          </div>
          <button onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

function App() {
  // ── ALL STATE/HOOKS FIRST ──────────────────────────────
  const [authView, setAuthView] = useState('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [docsLoading, setDocsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Session restore
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('shadi_bazar_user');
      const storedToken = localStorage.getItem('shadi_bazar_token');
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
    } catch (e) {
      console.error('Session restore failed', e);
    } finally {
      setAuthLoading(false);
    }
  }, []);

  // Fetch documents
  const fetchDocuments = useCallback(async () => {
    if (!token) return;
    setDocsLoading(true);
    try {
      const data = await apiCall('/documents', {}, token);
      if (data.success) setDocuments(data.documents);
    } catch (e) {
      console.error('Failed to fetch documents', e);
    } finally {
      setDocsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchDocuments();
  }, [token, fetchDocuments]);

  // ── HANDLERS ──────────────────────────────────────────
  const handleLogin = (loggedInUser, jwtToken) => {
    setUser(loggedInUser);
    setToken(jwtToken);
    localStorage.setItem('shadi_bazar_user', JSON.stringify(loggedInUser));
    localStorage.setItem('shadi_bazar_token', jwtToken);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    setDocuments([]);
    localStorage.removeItem('shadi_bazar_user');
    localStorage.removeItem('shadi_bazar_token');
    setAuthView('login');
    setActiveTab('dashboard');
  };

  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('shadi_bazar_user', JSON.stringify(updatedUser));
  };

  const handleUpload = (newDoc) => setDocuments(prev => [newDoc, ...prev]);

  const handleDelete = async (docId) => {
    if (!window.confirm('Delete this document?')) return;
    try {
      await apiCall(`/documents/${docId}`, { method: 'DELETE' }, token);
      setDocuments(prev => prev.filter(d => d.id !== docId));
    } catch (e) {
      alert('Failed to delete document');
    }
  };

  // ── CONDITIONAL RETURNS AFTER ALL HOOKS ───────────────
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-pink-400 animate-spin" />
      </div>
    );
  }

  if (!user) {
    if (authView === 'signup') {
      return <Signup onSignup={handleLogin} onNavigateToLogin={() => setAuthView('login')} />;
    }
    return <Login onLogin={handleLogin} onNavigateToSignup={() => setAuthView('signup')} />;
  }

  const tabTitles = { dashboard: 'Overview', documents: 'Documents', upload: 'Upload', profile: 'Profile' };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen} user={user} onLogout={handleLogout} />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header title={tabTitles[activeTab] || 'App'} setMobileMenuOpen={setMobileMenuOpen} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {activeTab === 'dashboard' && <Dashboard documents={documents} token={token} />}
            {activeTab === 'documents' && <DocumentList documents={documents} onDelete={handleDelete} loading={docsLoading} />}
            {activeTab === 'upload' && <UploadForm onUpload={handleUpload} setActiveTab={setActiveTab} token={token} />}
            {activeTab === 'profile' && <UserProfile user={user} onUpdateUser={handleUpdateUser} token={token} />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;