import React from "react";

// UI imports
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  Divider,
} from "@mui/material";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const developers = [
  "Appaji N",
  "Darshan Gowda S",
  "Chandan Hosmane",
  "Palavalli S Adithya",
];

function AboutPage() {
  return (
    <Box className="App">
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 6 }}>
        {/* Page Title */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            About CrowdFund
          </Typography>
          <Typography variant="h6" color="text.secondary">
            A blockchain-powered crowdfunding platform built by aspiring engineers.
          </Typography>
        </Box>

        <Divider sx={{ mb: 4 }} />
        {/* About the Project*/}
<Box>
  <Typography variant="h4" gutterBottom textAlign="center">
    About the Project
  </Typography>
  <Typography paragraph>
    Crowdfunding has emerged as a transformative way for individuals and organizations to raise funds 
    by gathering small contributions from a large number of people—primarily via the internet. It 
    removes barriers to traditional funding and empowers anyone with a vision to bring their ideas to life.
  </Typography>
  <Typography paragraph>
    <strong>CrowdFund</strong> is a blockchain-powered crowdfunding platform designed to provide transparency, 
    security, and decentralization in the fundraising process. By leveraging smart contracts on the Ethereum 
    blockchain, the platform ensures that funds are only released when specific goals are met—minimizing the 
    risk of misuse and maximizing donor trust.
  </Typography>
  <Typography paragraph>
    The platform supports multiple campaigns, tracks contributions on-chain, and enables users to browse, fund, 
    and monitor projects in real-time. Users can authenticate via Firebase, manage profiles, and explore campaign 
    statuses like Active, Completed, or Expired.
  </Typography>
  <Typography paragraph>
    This project was developed using modern web technologies including <strong>React.js, Next.js, Solidity, 
    Ethers.js, Firebase</strong>, ensuring a seamless full-stack experience. It reflects our 
    passion for innovation and our belief in the potential of decentralized technologies to create meaningful impact.
  </Typography>
</Box>

        <Divider sx={{ mb: 4 }} />
        {/* Developers Section */}
        <Box>
          <Box textAlign="center">
          <Typography variant="h4" gutterBottom >
            Students
          </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" mb={2}>
            This project is developed by final year students of the Department of Information Science and Engineering,
            Sri Siddhartha Institute of Technology, Tumakuru.
          </Typography>
          <Grid container spacing={3}>
            {developers.map((name, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Card sx={{ borderLeft: "4px solid #1976d2", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Final Year ISE Student
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>


        <Divider sx={{ mb: 4 }} />
        {/* Guide Section */}
        <Box sx={{ mt: 6 }}>
        {/* <Box textAlign="center"> */}
          <Typography variant="h4" gutterBottom>
            Guide
          </Typography>
          {/* </Box> */}
          <Card sx={{ borderLeft: "4px solid #388e3c", borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6">Dr. Suma R</Typography>
              <Typography variant="body2" color="text.secondary">
                Professor, Department of Information Science and Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sri Siddhartha Institute of Technology, Tumakuru
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

export default AboutPage;
