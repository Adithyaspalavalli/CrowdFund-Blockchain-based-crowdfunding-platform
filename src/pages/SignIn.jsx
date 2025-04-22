<<<<<<< HEAD
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

// UI imports..
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl, Input, InputLabel } from "@mui/material";

// service imports..
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext"; // ✅ Correctly import useAuth
import { useNavigate } from "react-router-dom";
=======
import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Grid,
  Link,
  InputAdornment, 
  IconButton,
  Alert,
  CircularProgress
} from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
export default function SignIn() {
  // context's..
  const { signInWithEmailAndPassword, signInWithGooglePopup } = useAuth();

  /*............................hooks............................*/
  // for validations..
  const [showPassword, setShowPassword] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = React.useState({});

  // for showing response...
  const [responseMsg, setResponseMsg] = React.useState(""); // to display error messages.
  const [showResponse, setShowResponse] = React.useState(false); // To know whether error occured. ⁉ why not use length of error message
  const [responseSeverity, setResponseSeverity] = React.useState("error");
  const [isLoading, setIsLoading] = React.useState(false); // to prevent multiple submits while processing..

  const navigate = useNavigate(); // for auto-navigation to home page.

  /// helpers..
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formValues);
    }
  }, [formErrors]);

  // validations..
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    console.info("Values received");
    console.log(values.email);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    console.error(errors);
    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    setFormErrors(validate(formValues)); // perform validation..
    console.info("Errors received");
    console.log(formErrors);

    // Proceed next, only if passed.
    if (
      Object.keys(formErrors).length === 0 &&
      formValues.email !== "" &&
      formValues.password !== ""
    ) {
      console.info("Validation passed");
      try {
        setShowResponse(false);
        setResponseMsg("");
        setIsLoading(true);

        await signInWithEmailAndPassword(
          data.get("email"),
          data.get("password")
        );

        setShowResponse(true);
        setResponseMsg("Sign in success.");
        setResponseSeverity("success");

        navigate("/create-campaign");
      } catch (error) {
        setShowResponse(true);
        setResponseSeverity("error");
        setResponseMsg(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setShowResponse(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 3,
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight="bold">
            Sign in
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            We know, you'll be back. Please enter your credentials to recognize
            you.
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 2, width: "100%" }}
          >
            <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
              <InputLabel>Email Address</InputLabel>
              <Input
                type="email"
                name="email"
                autoComplete="email"
                color={formErrors.email ? "error" : "primary"}
                onChange={handleChange}
              />
              {formErrors.email && (
                <FormHelperText error>{formErrors.email}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }} variant="standard">
              <InputLabel>Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                color={formErrors.password ? "error" : "primary"}
                onChange={handleChange}
                endAdornment={
=======
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      
      <Container component="main" maxWidth="sm" sx={{ mt: 12, mb: 6 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            p: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            borderRadius: 2
          }}
        >
          <Typography component="h1" variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Welcome Back
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Login to your account to manage your campaigns and contributions
          </Typography>

          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 3 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
<<<<<<< HEAD
                }
              />
              {formErrors.password && (
                <FormHelperText error>{formErrors.password}</FormHelperText>
              )}
            </FormControl>
=======
                ),
              }}
              sx={{ mb: 3 }}
            />
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e

            <Button
              type="submit"
              fullWidth
              variant="contained"
<<<<<<< HEAD
              sx={{ mt: 2, mb: 1 }}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <Button
              fullWidth
              variant="outlined"
              onClick={signInWithGooglePopup}
              sx={{ mb: 2 }}
            >
              Sign In with Google
            </Button>

            <Grid container>
              <Grid item xs>
               
                <Typography variant="body2">
  <Link component={RouterLink} to="/forgot-password" variant="body2">
  Forgot password?
  </Link>
</Typography>

              </Grid>
              <Grid item>
              <Typography variant="body2">
  <Link component={RouterLink} to="/SignUp" variant="body2">
    Don't have an account? Sign Up
  </Link>
</Typography>

              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4 }} />
        <Snackbar
          open={showResponse}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <Alert onClose={handleClose} severity={responseSeverity}>
            {responseMsg}
          </Alert>
        </Snackbar>
=======
              size="large"
              disabled={loading}
              sx={{ 
                py: 1.5, 
                mb: 3,
                position: 'relative'
              }}
            >
              {loading ? (
                <CircularProgress 
                  size={24} 
                  sx={{ 
                    position: 'absolute',
                    color: 'white'
                  }} 
                />
              ) : 'Sign In'}
            </Button>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Link 
                  href="#" 
                  variant="body2" 
                  onClick={() => navigate('/forgot-password')}
                  sx={{ 
                    display: 'block', 
                    textAlign: {xs: 'center', sm: 'left'} 
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link 
                  href="#" 
                  variant="body2" 
                  onClick={() => navigate('/sign-up')}
                  sx={{ 
                    display: 'block', 
                    textAlign: {xs: 'center', sm: 'right'}
                  }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
>>>>>>> f7339ca30fd3a145a4ed85e372ca28b4fa724f0e
      </Container>
      
      <Box sx={{ flexGrow: 1 }} />
      <Footer />
    </Box>
  );
};

export default SignIn;
