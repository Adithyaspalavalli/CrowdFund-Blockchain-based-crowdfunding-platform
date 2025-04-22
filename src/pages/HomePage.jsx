import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  CircularProgress,
  CssBaseline,
  Tabs,
  Tab,
  Button,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CampaignCard from "../components/CampaignCard";
import Hero from "../components/Hero";
import Features from "../components/Features";
// import Categories from "../components/Categories";
import Stats from "../components/Stats";

// blockchain
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../utils/getCampaigns";

// Custom Tabs Panel Component
function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-panel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-panel-${index}`,
  };
}

function CampaignTabs({ campaigns }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "All", state: null },
    { label: "Active", state: 0 },
    { label: "Successful", state: 1 },
    { label: "Expired", state: 2 },
    { label: "Aborted", state: 3 },
  ];

  const filterCampaigns = (state) => {
    if (state === null) return campaigns;
    return campaigns.filter((c) => c.currentState === state);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="campaign state tabs"
          centered
        >
          {tabs.map((tab, idx) => (
            <Tab key={idx} label={tab.label} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </Box>

      {tabs.map((tab, idx) => (
        <CustomTabPanel key={idx} value={value} index={idx}>
          <Grid container spacing={4} justifyContent="center">
            {filterCampaigns(tab.state).map((campaign, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <CampaignCard details={campaign} />
              </Grid>
            ))}
          </Grid>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

function HomePage() {
  const [campaignsList, setCampaignsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const deployedCampaignsList = await getDeployedCampaigns();
        const campaignsSummary = await getCampaignsSummary(deployedCampaignsList);
        if (!ignore) {
          setCampaignsList(campaignsSummary);
          console.log("Fetched campaigns:", campaignsSummary);
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Box>
      <NavBar />
      <CssBaseline />

      <Container component="main" sx={{ mt: 8, mb: 4 }} maxWidth="lg">
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
                  Start a Campaign
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
        </Container>

        <Box id="campaigns" sx={{ mt: 4, mb: 2 }}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" gutterBottom>
              Browse Campaigns by Status
            </Typography>
            <Container sx={{ py: 2 }} maxWidth="lg">
              {loading ? (
                <Box textAlign="center">
                  <CircularProgress color="primary" />
                </Box>
              ) : (
                <CampaignTabs campaigns={campaignsList} />
              )}
            </Container>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ pt: 8 }}>
        <Hero />
      </Box>

      <Features />
      <Stats />
      {/* <Categories /> */}

      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h2" component="h2" fontWeight="bold" gutterBottom>
              Active Campaigns
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
              Discover and support campaigns that need your backing
            </Typography>
          </Box>

          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
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
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Typography variant="h6" color="text.secondary">
                No active campaigns at the moment. Be the first to create one!
              </Typography>
            </Box>
          )}
        </Container>
      </Box>

      <Box
        sx={{
          py: 8,
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textAlign: "center",
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

      <Footer />
    </Box>
  );
}

export default HomePage;
