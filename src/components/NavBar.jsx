import * as React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
  styled,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountBalanceWallet as WalletIcon,
  Storefront as StorefrontIcon,
  Create as CreateIcon,
  Close as CloseIcon,
  Person as PersonIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { useWallet } from "use-wallet";
import { useAuth } from "../contexts/AuthContext";
import Logo from "./Logo";

function NavBar() {
  const [profileMenuDisplayStatus, setProfileMenuDisplayStatus] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const wallet = useWallet();
  const { currentUserCredentials, signout } = useAuth();

  const isLoggedIn = !!currentUserCredentials;

  const handleSignout = async () => {
    try {
      await signout();
      navigate("/signinz");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const handleProfileMenuClose = () => {
    setProfileMenuDisplayStatus(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    
    // { label: "Active Campaigns", path: "/active-campaigns" },
  ];

  const drawer = (
    <Box sx={{ width: 280, padding: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
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
              navigate("/create-campaign");
              handleMobileMenuToggle();
            }}
            sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
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
            onClick={() => navigate("/sign-in")}
            sx={{ mb: 2 }}
          >
            Login / Sign Up
          </Button>
        )}
        {wallet.status === "connected" ? (
          <Button
            variant="outlined"
            fullWidth
            startIcon={<WalletIcon />}
            onClick={() => wallet.reset()}
            sx={{ mb: 2 }}
          >
            Disconnect Wallet
          </Button>
        ) : (
          <Button
            variant="outlined"
            fullWidth
            startIcon={<WalletIcon />}
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
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 70 }}>
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

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <StorefrontIcon sx={{ color: "primary.main" }} />
            <Typography
              variant="h6"
              component="div"
              onClick={() => navigate("/")}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              CrowdFund
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: "flex", ml: 4 }}>
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

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                startIcon={<CreateIcon />}
                onClick={() => navigate("/create-campaign")}
                sx={{ mr: 2 }}
              >
                Create Campaign
              </Button>

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

              {wallet.status === "connected" ? (
                <Button
                  variant="outlined"
                  onClick={() => setProfileMenuDisplayStatus(true)}
                  startIcon={<WalletIcon />}
                >
                  {wallet.account?.slice(0, 6)}...{wallet.account?.slice(-4)}
                </Button>
              ) : (
                <LoadingButton
                  variant="outlined"
                  loading={wallet.status === "connecting"}
                  loadingIndicator="Connecting..."
                  onClick={() => wallet.connect()}
                  startIcon={<WalletIcon />}
                >
                  Connect Wallet
                </LoadingButton>
              )}
            </Box>
          )}

          <Drawer anchor="left" open={mobileMenuOpen} onClose={handleMobileMenuToggle}>
            {drawer}
          </Drawer>

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
            <MenuItem
              onClick={() => {
                wallet.reset();
                handleProfileMenuClose();
              }}
            >
              <ListItemIcon>
                <WalletIcon fontSize="small" />
              </ListItemIcon>
              Disconnect Wallet
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleProfileMenuClose();
              }}
            >
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            {isLoggedIn && (
              <MenuItem
                onClick={() => {
                  handleSignout();
                  handleProfileMenuClose();
                }}
              >
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
