import React from 'react';
import { Drawer, List } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const LeftDrawer = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <div 
          style={{ padding: '10px', cursor: 'pointer' }} 
          onClick={() => navigate('/statistics')}
        >
          Statistics
        </div>
        <div 
          style={{ padding: '10px', cursor: 'pointer' }} 
          onClick={() => navigate('/leaderboard')}
        >
          Leaderboard
        </div>
      </List>
    </Drawer>
  );
};

export default LeftDrawer;
