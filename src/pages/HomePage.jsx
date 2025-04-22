import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// UI imports
import { Stack } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CampaignCard from "../components/CampaignCard";

// blockchain
import {
  getDeployedCampaigns,
  getCampaignsSummary,
} from "../../utils/getCampaigns";

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

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      const deployedCampaignsList = await getDeployedCampaigns();
      const campaignsSummary = await getCampaignsSummary(deployedCampaignsList);
      if (!ignore) {
        setCampaignsList(campaignsSummary);
        console.log("Fetched campaigns:", campaignsSummary);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Box className="App">
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

        {/* Why CrowdFund Section */}
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
              <Button component={Link} to="/signup" variant="contained" size="large">
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
            <Button variant="outlined" href="https://metamask.io/" size="large" sx={{ mt: 1 }}>
              Create MetaMask Account
            </Button>
          </Box>
        </Container>

        {/* Campaign Listing Section */}
        <Box id="campaigns" sx={{ mt: 4, mb: 2 }}>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h5" gutterBottom>
              Browse Campaigns by Status
            </Typography>
            <Container sx={{ py: 2 }} maxWidth="lg">
              {campaignsList.length === 0 ? (
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
      <Footer />
    </Box>
  );
}

export default HomePage;
