import React, { useEffect } from "react";

// UI imports
import { Stack } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles"; // ✅ import theme hook

// Blockchain-related imports
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../../utils/getCampaigns";

// Local components
import Features from "../components/Features";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CampaignCard from "../components/CampaignCard";

// API URL for future use if needed
const api_url = "http://localhost:4000/api/";

function HomePage() {
  const navigate = useNavigate();
  const theme = useTheme(); // ✅ use theme hook here

  const [campaignsList, setCampaignsList] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const deployedCampaignsList = await getDeployedCampaigns();
      setCampaignsList(await getCampaignsSummary(deployedCampaignsList));
    };

    fetchData();
  }, []);

  return (
    <Box className="App">
      <NavBar />
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h2" component="h1" gutterBottom color="primary.main">
            CrowdFund
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Empower ideas. Support causes. Join the change.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Start your own campaign or support one that inspires you. All on the blockchain — secure, transparent, and community-driven.
          </Typography>
        </Box>

        
      </Container>

      <Container
        sx={{
          my: 6,
          py: 4,
          backgroundColor: "#e6fff5",
          borderRadius: 3,
        }}
        maxWidth="md"
      >
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Why Use CrowdFund?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "750px", margin: "0 auto" }} color="text.secondary">
            Every contribution has the power to fuel a dream. Whether you want to launch a creative project, fund medical treatment, or support community initiatives — CrowdFund gives you the tools and trust to make it happen.
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, maxWidth: "750px", margin: "0 auto" }} color="text.secondary">
            ✅ 100% Transparency — Track every rupee on the blockchain. <br />
            🔐 Safe & Secure — Smart contracts manage your funds. <br />
            🌍 Global Reach — Get support from anywhere in the world.
          </Typography>

          <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item>
              <Button component={Link} to="/sign-up" variant="contained" size="large">
                Create an account and Start a Campaign
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" href="#campaigns" size="large">
                Explore Campaigns
              </Button>
            </Grid>
          </Grid>
        
         
          <Typography variant="body2" sx={{ mt: 3 }}>
            If you're a new user, please create a new MetaMask account:
          </Typography>
          <Button
            variant="outlined"
            href="https://metamask.io/"
            size="large"
            sx={{ mt: 1 }}
            component="a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create MetaMask Account
          </Button>
        </Box>
 
        <Box
          sx={{
            py: 8,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            textAlign: "center",
            mt: 6,
            borderRadius: 2,
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
              onClick={() => navigate("/create-campaign")}
              sx={{
                py: 2,
                px: 4,
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: theme.palette.primary.main,
                backgroundColor: "white",
                border: "none",
                borderRadius: 30,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              Create Campaign
            </Box>
          </Container>
        </Box>
      </Container>

       {/* this the hero component */}
        <Box sx={{ maxWidth: "100%", margin: "0 auto" , borderRadius: 30,}} >
            <Container>
              <Hero />
            </Container>
        </Box>

        {/*this features component*/}
       <Box sx={{ maxWidth: "750px", margin: "0 auto" , borderRadius: 30,}} >
            <Container>
                <Features />
            </Container>
          </Box>
         
         
      <Box sx={{ mt: 4, mb: 2 }}>
          <Stack>
            <Container sx={{ py: 2 }} maxWidth="md">
              {campaignsList.length === 0 && <CircularProgress color="success" />}
              <Grid container spacing={4}>
                {campaignsList.map((activeCampaign, idx) => (
                  <Grid item key={idx} xs={12} sm={6} md={4}>
                    <CampaignCard details={activeCampaign} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Stack>
        </Box>

      <Footer />
    </Box>
  );
}

export default HomePage;
