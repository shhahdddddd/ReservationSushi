import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import Menu from './menu';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Home from './home';
import Reservations from './reservation';
import Delivery from './delievery';
import DeliveryForm from './DeliveryForm';
import Contact from './contact';
import ProtectedRoute from './utils/ProtectedRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservations />} />
          <Route path="/delievery" element={<Delivery />} />
          <Route path="/delivery-form" element={<DeliveryForm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Navigate to="/admin/login" />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/AdminDashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
