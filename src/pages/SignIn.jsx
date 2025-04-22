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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        CrowdHelp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

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
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {formErrors.password && (
                <FormHelperText error>{formErrors.password}</FormHelperText>
              )}
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
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
      </Container>
    </ThemeProvider>
  );
}
