import React from "react";

// UI imports
import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Divider,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Slide,
  Grow,
} from "@mui/material";

// Icons
import {
  AccountBalanceWallet as WalletIcon,
  Login as LoginIcon,
  AddCircle as CreateIcon,
  Search as SearchIcon,
  Payment as PaymentIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function TutorialPage() {
  return (
    <Box className="App">
      <CssBaseline />
      <NavBar />
      <Container component="main" maxWidth="md" sx={{ mt: 8, mb: 6 }}>
        {/* Page Title */}
        <Fade in timeout={1000}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              Getting Started
            </Typography>
            <Typography variant="h6" color="text.secondary">
              A step-by-step guide to using CrowdFund
            </Typography>
          </Box>
        </Fade>

        <Divider sx={{ mb: 4 }} />

        {/* Setup Steps */}
        <Slide direction="up" in timeout={1000}>
          <Box mb={6}>
            <Typography variant="h4" gutterBottom>
              Initial Setup
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LoginIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Create an Account" 
                  secondary="Sign up for a new account or log in if you already have one. This will allow you to create campaigns and track your contributions."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WalletIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Connect Your Wallet" 
                  secondary="Connect your Ethereum wallet to interact with the platform. Make sure you have some ETH in your wallet for transactions."
                />
              </ListItem>
            </List>
          </Box>
        </Slide>

        {/* For Campaign Creators */}
        <Slide direction="up" in timeout={1200}>
          <Box mb={6}>
            <Typography variant="h4" gutterBottom>
              For Campaign Creators
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Grow in timeout={1500}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Creating a Campaign
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <CreateIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Click 'Create Campaign'" 
                            secondary="Fill in your campaign details including title, description, and funding goal."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <TimelineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Set Campaign Parameters" 
                            secondary="Define minimum contribution amount, deadline, and campaign description."
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grow in timeout={1800}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Managing Your Campaign
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <TimelineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Track Progress" 
                            secondary="Monitor contributions and campaign status in real-time."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <PaymentIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Withdraw Funds" 
                            secondary="Once goals are met, you can withdraw funds through the smart contract."
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            </Grid>
          </Box>
        </Slide>

        {/* For Contributors */}
        <Slide direction="up" in timeout={1400}>
          <Box mb={6}>
            <Typography variant="h4" gutterBottom>
              For Contributors
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Grow in timeout={1700}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Finding Campaigns
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <SearchIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Browse Campaigns" 
                            secondary="Explore active campaigns on the home page or use the search feature."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <TimelineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Check Details" 
                            secondary="Review campaign goals, progress, and creator information."
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grow in timeout={2000}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Contributing to Campaigns
                      </Typography>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <PaymentIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Make a Contribution" 
                            secondary="Connect your wallet and contribute ETH to support campaigns."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <TimelineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Track Your Contributions" 
                            secondary="View your contribution history and campaign progress in your profile."
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            </Grid>
          </Box>
        </Slide>

        {/* Important Notes */}
        <Slide direction="up" in timeout={1600}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Important Notes
            </Typography>
            <Card 
              sx={{ 
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                }
              }}
            >
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Smart Contract Security" 
                      secondary="All transactions are secured by smart contracts on the Ethereum blockchain."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Transaction Fees" 
                      secondary="Be aware of gas fees when making contributions or creating campaigns."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Campaign Verification" 
                      secondary="While we strive to verify campaigns, always do your own research before contributing."
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Slide>
      </Container>
      <Footer />
    </Box>
  );
}

export default TutorialPage; 