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

        {/* Developers Section */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Developers
          </Typography>
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

        {/* Guide Section */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Guide
          </Typography>
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
