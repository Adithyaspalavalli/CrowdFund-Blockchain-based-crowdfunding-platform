import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(135deg, #7649f9 0%,rgb(85, 56, 172) 100%)',
        color: 'white',
        pt: 12,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h1" 
              component="h1" 
              fontWeight="bold" 
              sx={{ mb: 2 }}
            >
              Boundless space for your ideas
            </Typography>
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ mb: 4, opacity: 0.8 }}
            >
              Get Help from Crowd. Raise a campaign to help the needy or fund innovative projects.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                color="secondary"
                size="large"
                onClick={() => navigate('/create-campaign')}
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  }
                }}
              >
                Create Campaign
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                onClick={() => navigate('/active-campaigns')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.9)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                View Campaigns
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '300px', md: '400px' },
                background: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80) no-repeat center center',
                backgroundSize: 'cover',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.2)',
                  zIndex: 1
                }
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 