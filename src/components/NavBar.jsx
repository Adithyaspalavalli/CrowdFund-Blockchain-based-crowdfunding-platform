import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider
} from "@mui/material";
import Logo from "./Logo";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { useWallet } from "use-wallet";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  // States
  const [profileMenuDisplayStatus, setProfileMenuDisplayStatus] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [showResponse, setShowResponse] = useState(false);
  const [responseSeverity, setResponseSeverity] = useState("error");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const wallet = useWallet();
  const { currentUserCredentials, signout } = useAuth();

  // Check if user is logged in
  const isLoggedIn = !!currentUserCredentials;

  const handleSignout = async () => {
    // Set the response activations to default
    setShowResponse(false);
    setResponseMsg("");
    setResponseSeverity("error");

    // Do signout
    try {
      await signout();
      navigate("/sign-in");
    } catch (error) {
      setShowResponse(true);
      setResponseMsg(error.message);
      setResponseSeverity("error");
    }
  };

  const handleProfileMenuClose = () => {
    setProfileMenuDisplayStatus(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Active Campaigns', path: '/active-campaigns' },
  ];

  const drawer = (
    <Box sx={{ width: 280, padding: 2 }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}
      >
        <Logo />
        <IconButton onClick={handleMobileMenuToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              onClick={() => {
                navigate(item.path);
                handleMobileMenuToggle();
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton 
            onClick={() => {
              navigate('/create-campaign');
              handleMobileMenuToggle();
            }}
            sx={{ 
              color: theme.palette.primary.main,
              fontWeight: 'bold'
            }}
          >
            <ListItemIcon>
              <CreateIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Create Campaign" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 2 }}>
        {!isLoggedIn && (
          <Button
            variant="contained"
            fullWidth
            startIcon={<LoginIcon />}
            onClick={() => navigate('/sign-in')}
            sx={{ mb: 2 }}
          >
            Login / Sign Up
          </Button>
        )}
        {wallet.status === "connected" ? (
          <Button
            variant="outlined"
            fullWidth
            startIcon={<AccountBalanceWalletIcon />}
            onClick={() => wallet.reset()}
            sx={{ mb: 2 }}
          >
            Disconnect Wallet
          </Button>
        ) : (
          <Button
            variant="outlined"
            fullWidth
            startIcon={<AccountBalanceWalletIcon />}
            onClick={() => wallet.connect()}
            sx={{ mb: 2 }}
          >
            Connect Wallet
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <AppBar position="fixed" color="default" elevation={0} sx={{ bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 70 }}>
          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          {/* Logo */}
          <Logo />

          {/* Main navigation items */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', ml: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  onClick={() => navigate(item.path)}
                  sx={{ mx: 1 }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right side actions */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant="contained"
                startIcon={<CreateIcon />}
                onClick={() => navigate("/create-campaign")}
                sx={{ mr: 2 }}
              >
                Create Campaign
              </Button>
              
              {/* Login/Signup Button */}
              {!isLoggedIn && (
                <Button
                  variant="outlined"
                  onClick={() => navigate("/sign-in")}
                  startIcon={<LoginIcon />}
                  sx={{ mr: 2 }}
                >
                  Login / Sign Up
                </Button>
              )}
              
              {/* Wallet Button */}
              {wallet.status === "connected" ? (
                <Button
                  variant="outlined"
                  onClick={() => setProfileMenuDisplayStatus(true)}
                  startIcon={<AccountBalanceWalletIcon />}
                >
                  {wallet.account.substr(0, 10) + "..."}
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => wallet.connect()}
                  startIcon={<AccountBalanceWalletIcon />}
                >
                  Connect Wallet
                </Button>
              )}
            </Box>
          )}

          {/* Mobile drawer */}
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={handleMobileMenuToggle}
          >
            {drawer}
          </Drawer>

          {/* Profile menu */}
          <Menu
            id="profile-menu"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={profileMenuDisplayStatus}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={() => {
              wallet.reset();
              handleProfileMenuClose();
            }}>
              <ListItemIcon>
                <AccountBalanceWalletIcon fontSize="small" />
              </ListItemIcon>
              Disconnect Wallet
            </MenuItem>
            <MenuItem onClick={() => {
              navigate("/profile");
              handleProfileMenuClose();
            }}>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            {isLoggedIn && (
              <MenuItem onClick={() => {
                handleSignout();
                handleProfileMenuClose();
              }}>
                <ListItemIcon>
                  <LoginIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;