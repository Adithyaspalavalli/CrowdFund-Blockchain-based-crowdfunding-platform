import React, { useEffect } from "react";

// UI imports
import { Box, Container, Typography, Grid, Divider, CircularProgress, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

// [block-chain] smart-contract related imports
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../utils/getCampaigns";

// local components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CampaignCard from "../components/CampaignCard";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Stats from "../components/Stats";

// service imports
import axios from "axios";

const api_url = "http://localhost:4000/api/";

function HomePage() {
  // for navigation
  const navigate = useNavigate();
  const theme = useTheme();

  // hooks
  const [campaignsList, setCampaignsList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let ignore = false;
    
    // fetch the campaigns
    const fetchData = async () => {
      try {
        setLoading(true);
        const deployedCampaignsList = await getDeployedCampaigns();
        setCampaignsList(await getCampaignsSummary(deployedCampaignsList));
        console.log("Fetched campaigns");
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    // fetch the data
    fetchData();
    return () => {
      ignore = true; // to avoid rendering multiple times
    };
  }, []);

  return (
    <Box>
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Box sx={{ pt: 8 }}>
        <Hero />
      </Box>

      {/* Features Section */}
      <Features />

      {/* Stats Section */}
      <Stats />

      {/* Categories Section */}
      <Categories />

      {/* Active Campaigns Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" component="h2" fontWeight="bold" gutterBottom>
              Active Campaigns
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              Discover and support campaigns that need your backing
            </Typography>
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : campaignsList.length > 0 ? (
            <Grid container spacing={4}>
              {campaignsList.map((campaign, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4}>
                  <CampaignCard details={campaign} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No active campaigns at the moment. Be the first to create one!
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            Ready to Start Your Campaign?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            Create your campaign today and start raising funds for your project or cause.
          </Typography>
          <Box 
            component="button"
            onClick={() => navigate('/create-campaign')}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              backgroundColor: 'white',
              border: 'none',
              borderRadius: 30,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.2)',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.3)',
              }
            }}
          >
            Create Campaign
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default HomePage;
