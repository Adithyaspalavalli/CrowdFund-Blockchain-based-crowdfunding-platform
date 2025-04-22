import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
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
  const navigate = useNavigate();
  const wallet = useWallet();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
  );
}

export default NavBar;
