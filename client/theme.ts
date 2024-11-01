import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
    background: {
      default: '#000060',
      paper: '#0000DC',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 5,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          },
        },
        outlined: {
          borderColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.7)',
          },
        },
      },
      defaultProps: {
        variant: 'contained',
        size: 'medium',
      },
    },
  },
});

export default theme;
