
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../hooks/authContext'
import { jwtDecode } from 'jwt-decode';

const AdminRoute = ({ children }) => {

    const { currentUser } = useContext(AuthContext);
    
    

    if(!currentUser){
      return <Navigate to="/" replace />;
    }
    const userRole = jwtDecode(currentUser.accessToken).UserInfo.roles;
  
    if (!userRole) {
      return <Navigate to="/" replace />;
    }
  
    if (userRole !== 'Admin') {
      return <Navigate to="/unauthorized" replace />; // Or render an unauthorized page
    }
  
    return <Outlet/>;
  };

  export default AdminRoute;