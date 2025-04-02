import React, { useState, useContext } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material'; // Or your preferred UI library
import SettingsIcon from '@mui/icons-material/Settings'; // Or your preferred settings icon

import { AuthContext } from '../hooks/authContext' // Adjust path as needed

const SettingsDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { logout } = useContext(AuthContext);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    
    handleMenuClose();
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleMenuOpen}>
        <SettingsIcon />
      </IconButton>
    
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        {/* Add more settings options here */}
      </Menu>
    </div>
  );
};

export default SettingsDropdown;