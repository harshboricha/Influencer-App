import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  
  // If authenticated, render the component; otherwise, redirect to login
  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
