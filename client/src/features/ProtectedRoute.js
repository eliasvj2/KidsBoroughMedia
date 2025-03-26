import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../hooks/authContext'

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? <Outlet/> : <Navigate to="/" />;
};

export default ProtectedRoute;