import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  borderRadius: 16,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
  }
}));

const Stats = () => {
  const theme = useTheme();
  
  // Mock data - in a real app, you would fetch these from API
  const statsData = [
    {
      value: "53+",
      label: 'Active Campaigns',
      color: theme.palette.primary.main
    },
    {
      value: "120+",
      label: 'ETH Raised',
      color: theme.palette.secondary.main
    },
    {
      value: "5,680+",
      label: 'Backers',
      color: theme.palette.success.main
    },
    {
      value: "93%",
      label: 'Success Rate',
      color: theme.palette.info.main
    }
  ];
  
  return (
    <Box 
      sx={{ 
        py: 8,
        backgroundColor: '#f5f7ff'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" fontWeight="bold" gutterBottom>
            Our Impact
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Join a growing community of backers and creators making a difference
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {statsData.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <StatsCard>
                <Typography 
                  variant="h3" 
                  component="div" 
                  fontWeight="bold"
                  sx={{ 
                    color: stat.color,
                    mb: 1
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                >
                  {stat.label}
                </Typography>
              </StatsCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stats; 