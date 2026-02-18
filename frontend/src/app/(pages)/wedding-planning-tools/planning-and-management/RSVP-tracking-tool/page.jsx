"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Users, CheckCircle, XCircle, Clock, PieChart, Search, Plus, Filter, Trash2, Edit2, Send, Phone, Mail, Printer, ArrowLeft } from 'lucide-react';

// ============================================================================
// CONTEXT
// ============================================================================

const GuestContext = createContext();

const useGuestContext = () => useContext(GuestContext);

const GuestProvider = ({ children }) => {
  const [guests, setGuests] = useState(() => {
    const saved = localStorage.getItem('shadi_bazar_guests');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('shadi_bazar_guests', JSON.stringify(guests));
  }, [guests]);

  const stats = {
    totalInvited: guests.length,
    totalConfirmed: guests.filter(g => g.status === 'Confirmed').reduce((acc, g) => acc + (g.count || 0), 0),
    totalDeclined: guests.filter(g => g.status === 'Not Coming').length,
    pending: guests.filter(g => g.status === 'Pending').length,
    responseRate: 0,
    meals: {
      Veg: 0, 'Non-Veg': 0, Vegan: 0, Kids: 0, Custom: 0
    }
  };

  if (stats.totalInvited > 0) {
    const responded = guests.filter(g => g.status !== 'Pending').length;
    stats.responseRate = Math.round((responded / stats.totalInvited) * 100);
  }

  guests.filter(g => g.status === 'Confirmed').forEach(g => {
    if (g.meal && stats.meals[g.meal] !== undefined) {
      stats.meals[g.meal] += (g.count || 1);
    }
  });

  const addGuest = (newGuest) => {
    setGuests([...guests, { ...newGuest, id: Date.now() }]);
  };

  const updateGuest = (id, updatedData) => {
    setGuests(guests.map(g => g.id === id ? { ...g, ...updatedData } : g));
  };

  const deleteGuest = (id) => {
    setGuests(guests.filter(g => g.id !== id));
  };

  return (
    <GuestContext.Provider value={{ guests, stats, addGuest, updateGuest, deleteGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

// ============================================================================
// COMPONENTS
// ============================================================================

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="card stat-card" style={{ borderLeft: `4px solid ${color}` }}>
    <div className="stat-icon" style={{ backgroundColor: `${color}20`, color: color }}>
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
  const { stats } = useGuestContext();

  return (
    <div className="dashboard-container">
      <header className="page-header">
        <h2>Dashboard Overview</h2>
        <p>Real-time updates on your guest list.</p>
      </header>

      <div className="stats-grid">
        <StatCard
          title="Total Invited"
          value={stats.totalInvited}
          icon={Users}
          color="#ec4899"
        />
        <StatCard
          title="Confirmed"
          value={stats.totalConfirmed}
          subtext="Heads Count"
          icon={CheckCircle}
          color="#f43f5e"
        />
        <StatCard
          title="Declined"
          value={stats.totalDeclined}
          icon={XCircle}
          color="#fb7185"
        />
        <StatCard
          title="Pending"
          value={stats.pending}
          subtext="Need Reminder"
          icon={Clock}
          color="#fda4af"
        />
      </div>

      <div className="dashboard-charts">
        <div className="card chart-card">
          <div className="card-header">
            <h3><PieChart size={18} /> Response Rate</h3>
          </div>
          <div className="chart-content center-text">
            <div className="big-percent" style={{ color: '#ec4899' }}>
              {stats.responseRate}%
            </div>
            <p>of guests have responded</p>
          </div>
        </div>

        <div className="card chart-card">
          <div className="card-header">
            <h3>Meal Preferences</h3>
          </div>
          <div className="meal-list">
            {Object.entries(stats.meals).map(([type, count]) => (
              <div key={type} className="meal-item">
                <span className="meal-name">{type}</span>
                <div className="meal-bar-container">
                  <div
                    className="meal-bar"
                    style={{
                      width: `${stats.totalConfirmed ? (count / stats.totalConfirmed) * 100 : 0}%`,
                      backgroundColor: count > 0 ? '#ec4899' : '#fce7f3'
                    }}
                  ></div>
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
  const { guests, addGuest, updateGuest, deleteGuest } = useGuestContext();
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterSide, setFilterSide] = useState('All');
  const [editingId, setEditingId] = useState(null);

  const initialForm = {
    name: '', side: 'Groom', phone: '', email: '',
    status: 'Pending', count: 1, plusOne: false, date: '',
    meal: '', diet: ''
  };
  const [formData, setFormData] = useState(initialForm);

  const handleEdit = (guest) => {
    setFormData(guest);
    setEditingId(guest.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this guest?')) {
      deleteGuest(id);
    }
  };

  const handleRemind = (guest) => {
    alert(`Reminder sent to ${guest.name} via ${guest.email ? 'Email' : 'SMS'}!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateGuest(editingId, formData);
    } else {
      addGuest(formData);
    }
    setFormData(initialForm);
    setShowForm(false);
    setEditingId(null);
  };

  const filteredGuests = guests.filter(g => {
    const matchesSearch = (g.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || g.status === filterStatus;
    const matchesSide = filterSide === 'All' || g.side === filterSide;
    return matchesSearch && matchesStatus && matchesSide;
  });

  return (
    <div className="guest-manager-container">
      <header className="page-header header-row">
        <div>
          <h2>Guest List Management</h2>
          <p>Manage RSVPs, meals, and invitations.</p>
        </div>
        <button className="btn btn-primary" onClick={() => { setShowForm(!showForm); setEditingId(null); setFormData(initialForm); }}>
          <Plus size={16} /> {showForm ? 'Close Form' : 'Add Guest'}
        </button>
      </header>

      {showForm && (
        <div className="card form-card slide-down">
          <h3>{editingId ? 'Edit Guest' : 'Add New Guest'}</h3>
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
                <input type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="98765..." />
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
                  <input type="number" min="1" value={formData.count} onChange={e => setFormData({ ...formData, count: parseInt(e.target.value) || 0 })} />
                </div>
                <div className="form-group">
                  <label>Plus One?</label>
                  <select value={formData.plusOne} onChange={e => setFormData({ ...formData, plusOne: e.target.value === 'true' })}>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Meal Preference</label>
                  <select value={formData.meal} onChange={e => setFormData({ ...formData, meal: e.target.value })}>
                    <option value="">Select...</option>
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
              <button type="submit" className="btn btn-primary">{editingId ? 'Update' : 'Save Guest'}</button>
            </div>
          </form>
        </div>
      )}

      <div className="filters-bar card">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
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
        <table className="guest-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Side</th>
              <th>Status</th>
              <th>Count</th>
              <th>Meal</th>
              <th>Actions</th>
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
                    <button className="icon-btn edit" onClick={() => handleEdit(guest)}><Edit2 size={16} /></button>
                    <button className="icon-btn delete" onClick={() => handleDelete(guest.id)}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="7" className="text-center p-4">No guests found matching filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const VendorSummary = () => {
  const { stats, guests } = useGuestContext();

  const handlePrint = () => {
    window.print();
  };

  const confirmedGuests = guests.filter(g => g.status === 'Confirmed');

  return (
    <div className="vendor-summary-container">
      <div className="no-print actions-bar">
        <h2>Vendor Report</h2>
        <button className="btn btn-primary" onClick={handlePrint}>
          <Printer size={16} /> Print Report
        </button>
      </div>

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
            <thead>
              <tr>
                <th>Meal Type</th>
                <th>Count</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(stats.meals).map(([type, count]) => (
                <tr key={type}>
                  <td>{type}</td>
                  <td><strong>{count}</strong></td>
                  <td>-</td>
                </tr>
              ))}
              <tr className="total-row">
                <td>Total Plates</td>
                <td>{stats.totalConfirmed}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="report-section page-break">
          <h3>Guest Check-in List</h3>
          <table className="report-table compact">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Count</th>
                <th>Table</th>
              </tr>
            </thead>
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
    </div>
  );
};

// ============================================================================
// MAIN APP
// ============================================================================

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleBack = () => {
    window.history.back();
  };

  return (
    <GuestProvider>
      <div className="app-container">
        <header className="app-header">
          <div className="header-content">
            <div className="header-left">
              <button onClick={handleBack} className="back-btn" title="Go back">
                <ArrowLeft size={20} />
              </button>
              <h1 className="app-title">Shadi Bazar Guest Manager</h1>
            </div>
          </div>
          <nav className="app-nav">
            <button 
              className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentView('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`nav-btn ${currentView === 'guests' ? 'active' : ''}`}
              onClick={() => setCurrentView('guests')}
            >
              Guest List
            </button>
            <button 
              className={`nav-btn ${currentView === 'vendor' ? 'active' : ''}`}
              onClick={() => setCurrentView('vendor')}
            >
              Vendor Report
            </button>
          </nav>
        </header>

        <main className="app-content">
          {currentView === 'dashboard' && <Dashboard />}
          {currentView === 'guests' && <GuestManager />}
          {currentView === 'vendor' && <VendorSummary />}
        </main>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          background: linear-gradient(to bottom right, #ffffff, #fce7f3, #fecdd3);
          color: #1f2937;
          line-height: 1.5;
        }

        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .app-header {
          background: white;
          border-bottom: 2px solid #fbcfe8;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .header-content {
          padding: 1rem 2rem;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .back-btn {
          background: transparent;
          border: none;
          color: #ec4899;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .back-btn:hover {
          background: #fce7f3;
        }

        .app-title {
          font-size: 1.5rem;
          background: linear-gradient(to right, #ec4899, #f43f5e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .app-nav {
          display: flex;
          padding: 0 2rem;
          gap: 0.5rem;
          border-top: 1px solid #fce7f3;
        }

        .nav-btn {
          background: transparent;
          border: none;
          padding: 1rem 1.5rem;
          cursor: pointer;
          font-weight: 500;
          color: #6b7280;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
        }

        .nav-btn:hover {
          color: #ec4899;
          background: #fce7f3;
        }

        .nav-btn.active {
          color: #ec4899;
          border-bottom-color: #ec4899;
          background: #fce7f3;
        }

        .app-content {
          flex: 1;
          padding: 2rem;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h2 {
          font-size: 1.875rem;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: #6b7280;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
          font-size: 0.875rem;
        }

        .btn-primary {
          background: linear-gradient(to right, #ec4899, #f43f5e);
          color: white;
          box-shadow: 0 1px 3px rgba(236, 72, 153, 0.3);
        }

        .btn-primary:hover {
          box-shadow: 0 4px 6px rgba(236, 72, 153, 0.4);
          transform: translateY(-1px);
        }

        .card {
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          padding: 1.5rem;
          border: 1px solid #fce7f3;
        }

        /* Dashboard */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.2s;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-info p {
          margin: 0;
          color: #6b7280;
          font-size: 0.875rem;
        }

        .stat-info small {
          color: #f59e0b;
          font-weight: 500;
        }

        .dashboard-charts {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }

        .chart-card {
          min-height: 250px;
        }

        .card-header {
          border-bottom: 1px solid #fce7f3;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .card-header h3 {
          margin: 0;
          font-size: 1.125rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .center-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 150px;
        }

        .big-percent {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1;
        }

        .meal-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .meal-name {
          width: 80px;
          font-size: 0.875rem;
        }

        .meal-bar-container {
          flex: 1;
          height: 8px;
          background: #fce7f3;
          border-radius: 4px;
          overflow: hidden;
        }

        .meal-bar {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .meal-count {
          width: 30px;
          text-align: right;
          font-weight: 600;
        }

        /* Guest Manager */
        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .filters-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .search-box {
          position: relative;
          flex: 1;
          max-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #ec4899;
        }

        .search-box input {
          width: 100%;
          padding: 8px 10px 8px 36px;
          border: 2px solid #fbcfe8;
          border-radius: 0.5rem;
          outline: none;
        }

        .search-box input:focus {
          border-color: #ec4899;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .filter-group select {
          padding: 6px 12px;
          border: 2px solid #fbcfe8;
          border-radius: 0.5rem;
          background: white;
          height: 36px;
          outline: none;
        }

        .filter-group select:focus {
          border-color: #ec4899;
        }

        .form-card {
          margin-bottom: 1.5rem;
          background: #fce7f3;
          border: 2px solid #fbcfe8;
        }

        .guest-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: flex;
          gap: 1rem;
        }

        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .form-group label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #6b7280;
        }

        .form-group input,
        .form-group select {
          padding: 8px;
          border: 2px solid #fbcfe8;
          border-radius: 0.5rem;
          outline: none;
        }

        .form-group input:focus,
        .form-group select:focus {
          border-color: #ec4899;
        }

        .highlight-box {
          background: rgba(255,255,255,0.6);
          padding: 10px;
          border-radius: 0.5rem;
          border: 2px dashed #ec4899;
        }

        .table-card {
          padding: 0;
          overflow: hidden;
        }

        .guest-table {
          width: 100%;
          border-collapse: collapse;
        }

        .guest-table th,
        .guest-table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #fce7f3;
        }

        .guest-table th {
          background: #fef3f7;
          font-weight: 600;
          color: #6b7280;
          font-size: 0.8125rem;
          text-transform: uppercase;
        }

        .guest-table tr:hover {
          background: #fef3f7;
        }

        .fw-bold {
          font-weight: 600;
          color: #1f2937;
        }

        .contact-icons {
          display: flex;
          gap: 8px;
        }

        .contact-icons a {
          color: #6b7280;
          transition: color 0.2s;
        }

        .contact-icons a:hover {
          color: #ec4899;
        }

        .badge {
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.6875rem;
          font-weight: 600;
        }

        .side-groom {
          color: #1c7ed6;
          background: #d0ebff;
        }

        .side-bride {
          color: #ec4899;
          background: #fce7f3;
        }

        .status-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-confirmed {
          background: #d1fae5;
          color: #065f46;
        }

        .status-not-coming {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-pending {
          background: #fef3c7;
          color: #92400e;
        }

        .icon-btn-small {
          background: none;
          border: none;
          cursor: pointer;
          color: #ec4899;
          margin-left: 6px;
        }

        .action-buttons {
          display: flex;
          gap: 8px;
        }

        .icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          border: 1px solid transparent;
          background: transparent;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .icon-btn:hover {
          background: #fef3f7;
          color: #1f2937;
        }

        .icon-btn.delete:hover {
          background: #fee2e2;
          color: #991b1b;
        }

        .icon-btn.edit:hover {
          background: #fce7f3;
          color: #ec4899;
        }

        .text-center {
          text-align: center;
        }

        .p-4 {
          padding: 1.5rem;
        }

        /* Vendor Summary */
        .vendor-summary-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .actions-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .report-paper {
          background: white;
          padding: 2.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          border-radius: 0.75rem;
          border: 2px solid #fbcfe8;
        }

        .report-header {
          text-align: center;
          margin-bottom: 2.5rem;
          border-bottom: 2px solid #ec4899;
          padding-bottom: 1.25rem;
        }

        .report-header h1 {
          color: #ec4899;
          margin-bottom: 0.3125rem;
        }

        .report-section {
          margin-bottom: 2.5rem;
        }

        .report-section h3 {
          border-bottom: 1px solid #fce7f3;
          padding-bottom: 10px;
          margin-bottom: 1.25rem;
          color: #444;
          text-transform: uppercase;
          font-size: 0.875rem;
          letter-spacing: 1px;
        }

        .report-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .report-item {
          display: flex;
          flex-direction: column;
        }

        .report-item .label {
          color: #666;
          font-size: 0.8125rem;
        }

        .report-item .value {
          font-weight: 700;
          font-size: 1.125rem;
        }

        .report-item .value.big {
          font-size: 2rem;
          color: #ec4899;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
        }

        .report-table th,
        .report-table td {
          border: 1px solid #fce7f3;
          padding: 10px;
          text-align: left;
        }

        .report-table th {
          background: #fef3f7;
          font-weight: 600;
        }

        .total-row td {
          background: #fce7f3;
          font-weight: 700;
        }

        .compact td {
          padding: 6px 10px;
        }

        @media print {
          .no-print {
            display: none !important;
          }
          .app-header,
          .app-nav {
            display: none !important;
          }
          .vendor-summary-container {
            width: 100%;
            max-width: none;
            margin: 0;
          }
          .report-paper {
            box-shadow: none;
            padding: 0;
          }
          body {
            background: white;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}</style>
    </GuestProvider>
  );
};

export default App;