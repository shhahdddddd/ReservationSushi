// src/admin/AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    window.location.href = '/backend/login'; // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li><Link to="/src/admin/AdminDashboard">Dashboard</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
