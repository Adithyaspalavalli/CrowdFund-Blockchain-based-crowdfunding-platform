import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7649f9', // Purple color from Tecra
      light: '#9671fa',
      dark: '#5a35c7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d32f2f', // Red color for accents
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f7f7',
      dark: '#121212', // For dark sections
    },
    text: {
      primary: '#202020',
      secondary: '#585858',
      disabled: '#9e9e9e',
      hint: '#bdbdbd',
    },
    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: '0 4px 14px 0 rgba(118, 73, 249, 0.39)',
          fontWeight: 500,
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #7649f9 0%, #5a35c7 100%)',
          '&:hover': {
            background: 'linear-gradient(90deg, #9671fa 0%, #7649f9 100%)',
            boxShadow: '0 6px 20px 0 rgba(118, 73, 249, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme; 