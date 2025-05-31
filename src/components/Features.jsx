import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SecurityIcon from '@mui/icons-material/Security';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const featureData = [
  {
    icon: <CampaignIcon fontSize="large" />,
    title: 'Campaign Creation',
    description: 'Create a campaign with a title, description, goal, and deadline to raise funds for your cause.'
  },
  {
    icon: <PeopleAltIcon fontSize="large" />,
    title: 'Community Support',
    description: 'Get support from a community of backers who believe in your cause and vision.'
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: 'Blockchain Security',
    description: 'All transactions are secured by blockchain technology, ensuring transparency and security.'
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: 'Fund Management',
    description: 'Manage your funds securely with ability to withdraw after reaching your goal.'
  }
];

const Features = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" color="primary" fontWeight="bold" gutterBottom>
            Key Features
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Our platform offers a seamless experience for both campaign creators and backers
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {featureData.map((feature, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    backgroundColor:'orange'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    color: 'primary.main', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(118, 73, 249, 0.1)',
                    mb: 2
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 