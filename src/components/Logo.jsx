import React from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = ({ color = 'primary', variant = 'h6', sx = {} }) => {
  const navigate = useNavigate();
  
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        cursor: 'pointer',
        ...sx
      }}
      onClick={() => navigate('/')}
    >
      <Typography 
        variant={variant} 
        color={color === 'primary' ? 'primary.main' : 'white'}
        fontWeight="bold"
        sx={{ 
          letterSpacing: '0.5px',
          mr: 0.5
        }}
      >
        Crowd
      </Typography>
      <Typography 
        variant={variant} 
        color={color === 'primary' ? 'secondary.main' : 'white'}
        fontWeight="bold"
        sx={{ letterSpacing: '0.5px' }}
      >
        Fund
      </Typography>
    </Box>
  );
};

export default Logo; 