"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Users, CheckCircle, XCircle, Clock, PieChart, Search, Plus, Filter, Trash2, Edit2, Send, Phone, Mail, Printer, ArrowLeft, LogIn, AlertCircle } from 'lucide-react';

// ============================================================================
// CONFIG
// ============================================================================

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// ─── reads the JWT that your existing login flow saves ───────────────────────
// Adjust the key name if your app saves it under a different key
// (common names: 'token', 'authToken', 'jwt', 'shadi_token')
// Guard with typeof window so this is safe during Next.js SSR
const getToken = () => {
  if (typeof window === 'undefined') return null;
  return (
    localStorage.getItem('token') ||
    localStorage.getItem('authToken') ||
    localStorage.getItem('shadi_token') ||
    null
  );
};

const apiFetch = async (path, options = {}) => {
  const token = getToken();
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
};

// ============================================================================
// CONTEXT
// ============================================================================

const GuestContext = createContext();
const useGuestContext = () => useContext(GuestContext);

const GuestProvider = ({ children }) => {
  const [guests, setGuests] = useState([]);
  const [stats, setStats]   = useState({
    totalInvited: 0, totalConfirmed: 0, totalDeclined: 0,
    pending: 0, responseRate: 0,
    meals: { Veg: 0, 'Non-Veg': 0, Vegan: 0, Kids: 0, Custom: 0 },
  });
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [gRes, sRes] = await Promise.all([
        apiFetch('/wedding/guests/shadi-bazar'),
        apiFetch('/wedding/guests/shadi-bazar/stats'),
      ]);
      setGuests(gRes.data || []);
      setStats(sRes.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addGuest = async (guest) => {
    await apiFetch('/wedding/guests/shadi-bazar', {
      method: 'POST',
      body: JSON.stringify(guest),
    });
    await fetchAll();
  };

  const updateGuest = async (id, data) => {
    await apiFetch(`/wedding/guests/shadi-bazar/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    await fetchAll();
  };

  const deleteGuest = async (id) => {
    await apiFetch(`/wedding/guests/shadi-bazar/${id}`, { method: 'DELETE' });
    await fetchAll();
  };

  return (
    <GuestContext.Provider value={{ guests, stats, loading, error, fetchAll, addGuest, updateGuest, deleteGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

// ============================================================================
// AUTH GATE  –  shown only when no JWT token is found
// ============================================================================

const NoAuthMessage = ({ onRetry }) => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right,#ffffff,#fce7f3,#fecdd3)' }}>
    <div style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', width: '100%', maxWidth: '440px', boxShadow: '0 4px 20px rgba(236,72,153,0.15)', border: '2px solid #fbcfe8', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#fce7f3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
        <LogIn size={26} color="#ec4899" />
      </div>
      <h2 style={{ color: '#1f2937', marginBottom: '0.5rem', fontSize: '1.375rem', fontWeight: 700 }}>Login Required</h2>
      <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
        You need to be logged in to access the Guest Manager. Please log in through the main Shadi Bazar platform first.
      </p>
      <button
        onClick={onRetry}
        style={{ padding: '0.625rem 1.5rem', background: 'linear-gradient(to right,#ec4899,#f43f5e)', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem' }}
      >
        I've logged in — Retry
      </button>
    </div>
  </div>
);

// ============================================================================
// COMPONENTS
// ============================================================================

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="card stat-card" style={{ borderLeft: `4px solid ${color}` }}>
    <div className="stat-icon" style={{ backgroundColor: `${color}20`, color }}>
      <Icon size={24} />
    </div>
    <div className="stat-info">
      <h3>{value}</h3>
      <p>{title}</p>
      {subtext && <small>{subtext}</small>}
    </div>
  </div>
);

const Dashboard = () => {
  const { stats, loading, fetchAll } = useGuestContext();
  useEffect(() => { fetchAll(); }, [fetchAll]);

  if (loading) return <div className="loading-state">Loading dashboard…</div>;

  return (
    <div className="dashboard-container">
      <header className="page-header">
        <h2>Dashboard Overview</h2>
        <p>Real-time updates on your guest list.</p>
      </header>

      <div className="stats-grid">
        <StatCard title="Total Invited"  value={stats.totalInvited}   icon={Users}        color="#ec4899" />
        <StatCard title="Confirmed"      value={stats.totalConfirmed} subtext="Heads Count" icon={CheckCircle} color="#f43f5e" />
        <StatCard title="Declined"       value={stats.totalDeclined}  icon={XCircle}       color="#fb7185" />
        <StatCard title="Pending"        value={stats.pending}        subtext="Need Reminder" icon={Clock} color="#fda4af" />
      </div>

      <div className="dashboard-charts">
        <div className="card chart-card">
          <div className="card-header"><h3><PieChart size={18} /> Response Rate</h3></div>
          <div className="chart-content center-text">
            <div className="big-percent" style={{ color: '#ec4899' }}>{stats.responseRate}%</div>
            <p>of guests have responded</p>
          </div>
        </div>

        <div className="card chart-card">
          <div className="card-header"><h3>Meal Preferences</h3></div>
          <div className="meal-list">
            {Object.entries(stats.meals || {}).map(([type, count]) => (
              <div key={type} className="meal-item">
                <span className="meal-name">{type}</span>
                <div className="meal-bar-container">
                  <div className="meal-bar" style={{
                    width: `${stats.totalConfirmed ? (count / stats.totalConfirmed) * 100 : 0}%`,
                    backgroundColor: count > 0 ? '#ec4899' : '#fce7f3',
                  }} />
                </div>
                <span className="meal-count">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GuestManager = () => {
  const { guests, addGuest, updateGuest, deleteGuest, fetchAll, loading, error } = useGuestContext();
  const [showForm,    setShowForm]    = useState(false);
  const [searchTerm,  setSearchTerm]  = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterSide,  setFilterSide]  = useState('All');
  const [editingId,   setEditingId]   = useState(null);
  const [saving,      setSaving]      = useState(false);
  const [formError,   setFormError]   = useState('');

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const initialForm = {
    name: '', side: 'Groom', phone: '', email: '',
    status: 'Pending', count: 1, plusOne: false, date: '', meal: '', diet: '',
  };
  const [formData, setFormData] = useState(initialForm);

  const handleEdit = (guest) => {
    setFormData(guest);
    setEditingId(guest.id);
    setShowForm(true);
    setFormError('');
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this guest?')) return;
    try { await deleteGuest(id); }
    catch (e) { alert('Failed to delete: ' + e.message); }
  };

  const handleRemind = (guest) => {
    alert(`Reminder sent to ${guest.name} via ${guest.email ? 'Email' : 'SMS'}!`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError('');
    try {
      if (editingId) {
        await updateGuest(editingId, formData);
      } else {
        await addGuest(formData);
      }
      setFormData(initialForm);
      setShowForm(false);
      setEditingId(null);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const filteredGuests = guests.filter(g => {
    const matchSearch = (g.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = filterStatus === 'All' || g.status === filterStatus;
    const matchSide   = filterSide   === 'All' || g.side   === filterSide;
    return matchSearch && matchStatus && matchSide;
  });

  return (
    <div className="guest-manager-container">
      <header className="page-header header-row">
        <div>
          <h2>Guest List Management</h2>
          <p>Manage RSVPs, meals, and invitations.</p>
        </div>
        <button className="btn btn-primary" onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData(initialForm); setFormError(''); }}>
          <Plus size={16} /> {showForm ? 'Close Form' : 'Add Guest'}
        </button>
      </header>

      {error && <div className="error-banner"><AlertCircle size={16} /> {error}</div>}

      {showForm && (
        <div className="card form-card slide-down">
          <h3>{editingId ? 'Edit Guest' : 'Add New Guest'}</h3>
          {formError && <div className="error-banner" style={{ marginBottom: '1rem' }}><AlertCircle size={14} /> {formError}</div>}
          <form onSubmit={handleSubmit} className="guest-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Aditi Rao" />
              </div>
              <div className="form-group">
                <label>Side *</label>
                <select value={formData.side} onChange={e => setFormData({ ...formData, side: e.target.value })}>
                  <option value="Groom">Groom</option>
                  <option value="Bride">Bride</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="98765…" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>RSVP Status</label>
                <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Not Coming">Not Coming</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date Responded</label>
                <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
              </div>
            </div>

            {formData.status === 'Confirmed' && (
              <div className="form-row highlight-box">
                <div className="form-group">
                  <label>Total Guests (Count)</label>
                  <input type="number" min="1" value={formData.count} onChange={e => setFormData({ ...formData, count: parseInt(e.target.value) || 1 })} />
                </div>
                <div className="form-group">
                  <label>Plus One?</label>
                  <select value={String(formData.plusOne)} onChange={e => setFormData({ ...formData, plusOne: e.target.value === 'true' })}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Meal Preference</label>
                  <select value={formData.meal} onChange={e => setFormData({ ...formData, meal: e.target.value })}>
                    <option value="">Select…</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Kids">Kids</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>
            )}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? 'Saving…' : editingId ? 'Update' : 'Save Guest'}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="filters-bar card">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search by name…" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
        <div className="filter-group">
          <Filter size={18} />
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Not Coming">Not Coming</option>
          </select>
          <select value={filterSide} onChange={e => setFilterSide(e.target.value)}>
            <option value="All">All Sides</option>
            <option value="Bride">Bride</option>
            <option value="Groom">Groom</option>
          </select>
        </div>
      </div>

      <div className="card table-card">
        {loading ? (
          <div className="loading-state">Loading guests…</div>
        ) : (
          <table className="guest-table">
            <thead>
              <tr>
                <th>Name</th><th>Contact</th><th>Side</th>
                <th>Status</th><th>Count</th><th>Meal</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredGuests.length > 0 ? filteredGuests.map(guest => (
                <tr key={guest.id}>
                  <td className="fw-bold">{guest.name}</td>
                  <td>
                    <div className="contact-icons">
                      {guest.phone && <a href={`tel:${guest.phone}`} title={guest.phone}><Phone size={14} /></a>}
                      {guest.email && <a href={`mailto:${guest.email}`} title={guest.email}><Mail size={14} /></a>}
                    </div>
                  </td>
                  <td><span className={`badge side-${(guest.side || '').toLowerCase()}`}>{guest.side}</span></td>
                  <td>
                    <span className={`status-badge status-${(guest.status || '').replace(' ', '-').toLowerCase()}`}>
                      {guest.status}
                    </span>
                    {guest.status === 'Pending' && (
                      <button className="icon-btn-small" onClick={() => handleRemind(guest)} title="Send Reminder">
                        <Send size={12} />
                      </button>
                    )}
                  </td>
                  <td>{guest.status === 'Confirmed' ? guest.count : '-'}</td>
                  <td>{guest.status === 'Confirmed' ? (guest.meal || 'Not set') : '-'}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="icon-btn edit"   onClick={() => handleEdit(guest)}><Edit2  size={16} /></button>
                      <button className="icon-btn delete" onClick={() => handleDelete(guest.id)}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="7" className="text-center p-4">No guests found matching filters.</td></tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const VendorSummary = () => {
  const { stats, guests, fetchAll, loading } = useGuestContext();
  useEffect(() => { fetchAll(); }, [fetchAll]);

  const confirmedGuests = guests.filter(g => g.status === 'Confirmed');

  return (
    <div className="vendor-summary-container">
      <div className="no-print actions-bar">
        <h2>Vendor Report</h2>
        <button className="btn btn-primary" onClick={() => window.print()}>
          <Printer size={16} /> Print Report
        </button>
      </div>

      {loading ? <div className="loading-state">Loading report…</div> : (
        <div className="report-paper">
          <header className="report-header">
            <h1>Shadi Bazar - Wedding Summary</h1>
            <p>Generated on {new Date().toLocaleDateString()}</p>
          </header>

          <section className="report-section">
            <h3>Guest Headcount</h3>
            <div className="report-grid">
              <div className="report-item">
                <span className="label">Total Confirmed Guests:</span>
                <span className="value big">{stats.totalConfirmed}</span>
              </div>
              <div className="report-item">
                <span className="label">Bride Side:</span>
                <span className="value">
                  {guests.filter(g => g.status === 'Confirmed' && g.side === 'Bride').reduce((acc, g) => acc + (g.count || 0), 0)}
                </span>
              </div>
              <div className="report-item">
                <span className="label">Groom Side:</span>
                <span className="value">
                  {guests.filter(g => g.status === 'Confirmed' && g.side === 'Groom').reduce((acc, g) => acc + (g.count || 0), 0)}
                </span>
              </div>
            </div>
          </section>

          <section className="report-section">
            <h3>Catering Summary (Meal Preferences)</h3>
            <table className="report-table">
              <thead><tr><th>Meal Type</th><th>Count</th><th>Notes</th></tr></thead>
              <tbody>
                {Object.entries(stats.meals || {}).map(([type, count]) => (
                  <tr key={type}><td>{type}</td><td><strong>{count}</strong></td><td>-</td></tr>
                ))}
                <tr className="total-row"><td>Total Plates</td><td>{stats.totalConfirmed}</td><td></td></tr>
              </tbody>
            </table>
          </section>

          <section className="report-section page-break">
            <h3>Guest Check-in List</h3>
            <table className="report-table compact">
              <thead><tr><th>#</th><th>Name</th><th>Count</th><th>Table</th></tr></thead>
              <tbody>
                {confirmedGuests.length > 0 ? confirmedGuests.map((g, i) => (
                  <tr key={g.id}>
                    <td>{i + 1}</td>
                    <td>{g.name} <small style={{ color: '#888' }}>({g.side})</small></td>
                    <td>{g.count}</td>
                    <td style={{ width: '100px', borderBottom: '1px solid #ddd' }}></td>
                  </tr>
                )) : (
                  <tr><td colSpan="4">No confirmed guests yet.</td></tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// MAIN APP
// ============================================================================

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  // null = not yet checked (SSR safe), false = no token, true = has token
  // getToken() is NEVER called at module level or during SSR render —
  // only inside useEffect which runs exclusively in the browser.
  const [hasToken, setHasToken] = useState(null);

  useEffect(() => {
    setHasToken(Boolean(getToken()));
  }, []);

  const handleRetry = () => setHasToken(Boolean(getToken()));

  // Still hydrating — render nothing to avoid SSR/client mismatch
  if (hasToken === null) return null;

  if (!hasToken) return <NoAuthMessage onRetry={handleRetry} />;

  return (
    <GuestProvider>
      <div className="sb-guest-app app-container">
        <header className="app-header">
          <div className="header-content">
            <div className="header-left">
              <button onClick={() => window.history.back()} className="back-btn" title="Go back">
                <ArrowLeft size={20} />
              </button>
              <h1 className="app-title">Shadi Bazar Guest Manager</h1>
            </div>
          </div>
          <nav className="app-nav">
            {[
              { key: 'dashboard', label: 'Dashboard' },
              { key: 'guests',    label: 'Guest List' },
              { key: 'vendor',    label: 'Vendor Report' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`nav-btn ${currentView === key ? 'active' : ''}`}
                onClick={() => setCurrentView(key)}
              >
                {label}
              </button>
            ))}
          </nav>
        </header>

        <main className="app-content">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'guests'    && <GuestManager />}
          {currentView === 'vendor'    && <VendorSummary />}
        </main>
      </div>

      <style>{`
        /* ── Scoped to .sb-guest-app so parent navbar is never affected ── */
        .sb-guest-app, .sb-guest-app * { box-sizing: border-box; }
        .sb-guest-app { min-height: 100vh; display: flex; flex-direction: column; font-family: 'Inter', system-ui, -apple-system, sans-serif; color: #1f2937; line-height: 1.5; }
        .sb-guest-app .app-header { background: white; border-bottom: 2px solid #fbcfe8; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .sb-guest-app .header-content { padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .sb-guest-app .header-left { display: flex; align-items: center; gap: 1rem; }
        .sb-guest-app .back-btn { background: transparent; border: none; color: #ec4899; cursor: pointer; padding: 0.5rem; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .sb-guest-app .back-btn:hover { background: #fce7f3; }
        .sb-guest-app .app-title { font-size: 1.5rem; background: linear-gradient(to right,#ec4899,#f43f5e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; margin: 0; }
        .sb-guest-app .app-nav { display: flex; padding: 0 2rem; gap: 0.5rem; border-top: 1px solid #fce7f3; }
        .sb-guest-app .nav-btn { background: transparent; border: none; padding: 1rem 1.5rem; cursor: pointer; font-weight: 500; color: #6b7280; border-bottom: 2px solid transparent; transition: all 0.2s; }
        .sb-guest-app .nav-btn:hover { color: #ec4899; background: #fce7f3; }
        .sb-guest-app .nav-btn.active { color: #ec4899; border-bottom-color: #ec4899; background: #fce7f3; }
        .sb-guest-app .app-content { flex: 1; padding: 2rem; max-width: 1400px; width: 100%; margin: 0 auto; }
        .sb-guest-app .page-header { margin-bottom: 2rem; }
        .sb-guest-app .page-header h2 { font-size: 1.875rem; color: #1f2937; margin-bottom: 0.5rem; }
        .sb-guest-app .page-header p { color: #6b7280; }
        .sb-guest-app .loading-state { padding: 3rem; text-align: center; color: #ec4899; font-weight: 500; }
        .sb-guest-app .error-banner { background: #fee2e2; color: #991b1b; padding: 0.75rem 1rem; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 0.875rem; display: flex; align-items: center; gap: 0.5rem; }
        .sb-guest-app .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.625rem 1rem; border-radius: 0.5rem; font-weight: 500; cursor: pointer; border: none; transition: all 0.2s; font-size: 0.875rem; }
        .sb-guest-app .btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .sb-guest-app .btn-primary { background: linear-gradient(to right,#ec4899,#f43f5e); color: white; box-shadow: 0 1px 3px rgba(236,72,153,0.3); }
        .sb-guest-app .btn-primary:hover:not(:disabled) { box-shadow: 0 4px 6px rgba(236,72,153,0.4); transform: translateY(-1px); }
        .sb-guest-app .card { background: white; border-radius: 0.75rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; border: 1px solid #fce7f3; }
        .sb-guest-app .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 1rem; margin-bottom: 2rem; }
        .sb-guest-app .stat-card { display: flex; align-items: center; gap: 1rem; transition: transform 0.2s; }
        .sb-guest-app .stat-card:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .sb-guest-app .stat-icon { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .sb-guest-app .stat-info h3 { margin: 0; font-size: 1.5rem; font-weight: 700; color: #1f2937; }
        .sb-guest-app .stat-info p { margin: 0; color: #6b7280; font-size: 0.875rem; }
        .sb-guest-app .stat-info small { color: #f59e0b; font-weight: 500; }
        .sb-guest-app .dashboard-charts { display: grid; grid-template-columns: repeat(auto-fit,minmax(300px,1fr)); gap: 1rem; }
        .sb-guest-app .chart-card { min-height: 250px; }
        .sb-guest-app .card-header { border-bottom: 1px solid #fce7f3; padding-bottom: 0.5rem; margin-bottom: 1rem; }
        .sb-guest-app .card-header h3 { margin: 0; font-size: 1.125rem; display: flex; align-items: center; gap: 0.5rem; }
        .sb-guest-app .center-text { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 150px; }
        .sb-guest-app .big-percent { font-size: 4rem; font-weight: 800; line-height: 1; }
        .sb-guest-app .meal-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
        .sb-guest-app .meal-name { width: 80px; font-size: 0.875rem; }
        .sb-guest-app .meal-bar-container { flex: 1; height: 8px; background: #fce7f3; border-radius: 4px; overflow: hidden; }
        .sb-guest-app .meal-bar { height: 100%; border-radius: 4px; transition: width 0.5s ease; }
        .sb-guest-app .meal-count { width: 30px; text-align: right; font-weight: 600; }
        .sb-guest-app .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .sb-guest-app .filters-bar { display: flex; justify-content: space-between; align-items: center; padding: 1rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem; }
        .sb-guest-app .search-box { position: relative; flex: 1; max-width: 300px; }
        .sb-guest-app .search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #ec4899; }
        .sb-guest-app .search-box input { width: 100%; padding: 8px 10px 8px 36px; border: 2px solid #fbcfe8; border-radius: 0.5rem; outline: none; font-size: 0.875rem; }
        .sb-guest-app .search-box input:focus { border-color: #ec4899; }
        .sb-guest-app .filter-group { display: flex; align-items: center; gap: 1rem; }
        .sb-guest-app .filter-group select { padding: 6px 12px; border: 2px solid #fbcfe8; border-radius: 0.5rem; background: white; height: 36px; outline: none; font-size: 0.875rem; }
        .sb-guest-app .filter-group select:focus { border-color: #ec4899; }
        .sb-guest-app .form-card { margin-bottom: 1.5rem; background: #fce7f3; border: 2px solid #fbcfe8; }
        .sb-guest-app .guest-form { display: flex; flex-direction: column; gap: 1rem; }
        .sb-guest-app .form-row { display: flex; gap: 1rem; flex-wrap: wrap; }
        .sb-guest-app .form-group { flex: 1; min-width: 160px; display: flex; flex-direction: column; gap: 4px; }
        .sb-guest-app .form-group label { font-size: 0.8125rem; font-weight: 600; color: #6b7280; }
        .sb-guest-app .form-group input, .sb-guest-app .form-group select { padding: 8px; border: 2px solid #fbcfe8; border-radius: 0.5rem; outline: none; font-size: 0.875rem; width: 100%; }
        .sb-guest-app .form-group input:focus, .sb-guest-app .form-group select:focus { border-color: #ec4899; }
        .sb-guest-app .highlight-box { background: rgba(255,255,255,0.6); padding: 10px; border-radius: 0.5rem; border: 2px dashed #ec4899; }
        .sb-guest-app .form-actions { display: flex; justify-content: flex-end; padding-top: 0.5rem; }
        .sb-guest-app .table-card { padding: 0; overflow: hidden; }
        .sb-guest-app .guest-table { width: 100%; border-collapse: collapse; }
        .sb-guest-app .guest-table th, .sb-guest-app .guest-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #fce7f3; }
        .sb-guest-app .guest-table th { background: #fef3f7; font-weight: 600; color: #6b7280; font-size: 0.8125rem; text-transform: uppercase; }
        .sb-guest-app .guest-table tr:hover { background: #fef3f7; }
        .sb-guest-app .fw-bold { font-weight: 600; color: #1f2937; }
        .sb-guest-app .contact-icons { display: flex; gap: 8px; }
        .sb-guest-app .contact-icons a { color: #6b7280; transition: color 0.2s; text-decoration: none; }
        .sb-guest-app .contact-icons a:hover { color: #ec4899; }
        .sb-guest-app .badge { padding: 2px 6px; border-radius: 4px; font-size: 0.6875rem; font-weight: 600; }
        .sb-guest-app .side-groom { color: #1c7ed6; background: #d0ebff; }
        .sb-guest-app .side-bride { color: #ec4899; background: #fce7f3; }
        .sb-guest-app .status-badge { display: inline-block; padding: 4px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; }
        .sb-guest-app .status-confirmed { background: #d1fae5; color: #065f46; }
        .sb-guest-app .status-not-coming { background: #fee2e2; color: #991b1b; }
        .sb-guest-app .status-pending { background: #fef3c7; color: #92400e; }
        .sb-guest-app .icon-btn-small { background: none; border: none; cursor: pointer; color: #ec4899; margin-left: 6px; }
        .sb-guest-app .action-buttons { display: flex; gap: 8px; }
        .sb-guest-app .icon-btn { width: 32px; height: 32px; border-radius: 4px; border: 1px solid transparent; background: transparent; color: #6b7280; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
        .sb-guest-app .icon-btn:hover { background: #fef3f7; color: #1f2937; }
        .sb-guest-app .icon-btn.delete:hover { background: #fee2e2; color: #991b1b; }
        .sb-guest-app .icon-btn.edit:hover { background: #fce7f3; color: #ec4899; }
        .sb-guest-app .text-center { text-align: center; }
        .sb-guest-app .p-4 { padding: 1.5rem; }
        .sb-guest-app .vendor-summary-container { max-width: 900px; margin: 0 auto; }
        .sb-guest-app .actions-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .sb-guest-app .report-paper { background: white; padding: 2.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 0.75rem; border: 2px solid #fbcfe8; }
        .sb-guest-app .report-header { text-align: center; margin-bottom: 2.5rem; border-bottom: 2px solid #ec4899; padding-bottom: 1.25rem; }
        .sb-guest-app .report-header h1 { color: #ec4899; margin-bottom: 0.3125rem; }
        .sb-guest-app .report-section { margin-bottom: 2.5rem; }
        .sb-guest-app .report-section h3 { border-bottom: 1px solid #fce7f3; padding-bottom: 10px; margin-bottom: 1.25rem; color: #444; text-transform: uppercase; font-size: 0.875rem; letter-spacing: 1px; }
        .sb-guest-app .report-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.25rem; }
        .sb-guest-app .report-item { display: flex; flex-direction: column; }
        .sb-guest-app .report-item .label { color: #666; font-size: 0.8125rem; }
        .sb-guest-app .report-item .value { font-weight: 700; font-size: 1.125rem; }
        .sb-guest-app .report-item .value.big { font-size: 2rem; color: #ec4899; }
        .sb-guest-app .report-table { width: 100%; border-collapse: collapse; }
        .sb-guest-app .report-table th, .sb-guest-app .report-table td { border: 1px solid #fce7f3; padding: 10px; text-align: left; }
        .sb-guest-app .report-table th { background: #fef3f7; font-weight: 600; }
        .sb-guest-app .total-row td { background: #fce7f3; font-weight: 700; }
        .sb-guest-app .compact td { padding: 6px 10px; }
        @media print {
          .sb-guest-app .no-print { display: none !important; }
          .app-header, .app-nav { display: none !important; }
          .sb-guest-app .vendor-summary-container { width: 100%; max-width: none; margin: 0; }
          .sb-guest-app .report-paper { box-shadow: none; padding: 0; }
          .sb-guest-app .page-break { page-break-before: always; }
        }
      `}</style>
    </GuestProvider>
  );
};

export default App;