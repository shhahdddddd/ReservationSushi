import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('admin') === 'true'; // Check admin authentication

  // If authenticated, render the child component; otherwise, redirect to login
  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
