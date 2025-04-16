import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categoryData = [
  {
    title: 'Technology Projects',
    description: 'Support innovative technology solutions and products that are changing the world.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: '#7649f9'
  },
  {
    title: 'Green Transition',
    description: 'Fund sustainable initiatives and green projects that help protect our planet.',
    image: 'https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: '#4caf50'
  },
  {
    title: 'Creative Arts',
    description: 'Help artists and creators bring their creative visions to life through funding.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    color: '#ff9800'
  }
];

const Categories = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h2" fontWeight="bold" gutterBottom>
            Campaign Categories
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Discover and fund campaigns across different categories
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {categoryData.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={category.image}
                    alt={category.title}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to top, ${category.color}DD, transparent)`,
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    {category.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {category.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      onClick={() => navigate('/active-campaigns')}
                      fullWidth
                    >
                      Explore Projects
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories; 