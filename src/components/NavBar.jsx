<<<<<<< HEAD
import * as React from "react";
=======
import React, { useState } from "react";
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
<<<<<<< HEAD
  IconButton,
  InputBase,
=======
  Container,
  IconButton,
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
<<<<<<< HEAD
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  AccountBalanceWallet as WalletIcon,
  Storefront as StorefrontIcon,
  Create as CreateIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useNavigate, Link as RouterLink } from "react-router-dom";

// Auth and Wallet
import { useWallet } from "use-wallet";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  marginLeft: theme.spacing(1),
  width: "auto",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
}));

function NavBar() {
=======
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
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e
  const navigate = useNavigate();
  const wallet = useWallet();
  const [anchorEl, setAnchorEl] = React.useState(null);

<<<<<<< HEAD
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ mb: 2 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <StorefrontIcon />
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}
            >
              CrowdFund
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About
            </Button>
            <Button
              color="inherit"
              startIcon={<CreateIcon />}
              onClick={() => navigate("/SignIn")}
            >
              Create Campaign
            </Button>

            <Button
              color="inherit"
              startIcon={<WalletIcon />}
              onClick={() =>
                window.open(
                  "https://docs.metamask.io/snaps/features/custom-evm-accounts/create-account-snap/",
                  "_blank"
                )
              }
            >
              Create Wallet
            </Button>

            {wallet.status === "connected" ? (
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => wallet.reset()}
              >
                Disconnect Wallet
              </Button>
            ) : (
              <LoadingButton
                variant="outlined"
                color="inherit"
                loading={wallet.status === "connecting"}
                loadingIndicator="Connecting..."
                onClick={() => wallet.connect()}
              >
                Connect Wallet
              </LoadingButton>
            )}

            {/* Profile button placed outside the dropdown */}
            {wallet.status === "connected" && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/profile")}
              >
                Profile
              </Button>
            )}
          </Box>

          {/* <Search>
            <SearchIcon sx={{ mr: 1 }} />
            <InputBase placeholder="Search…" />
          </Search> */}
        </Toolbar>
      </AppBar>
    </>
=======
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
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e
  );
}

export default NavBar;
