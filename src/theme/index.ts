import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#111111'
    },

    secondary: {
      main: '#E5E5E5'
    },

    error: {
      main: red.A400
    }
  },

  typography: {
    fontFamily: 'Poppins, sans-serif',

    h1: {
      fontSize: '27px',
      fontWeight: '600',
      lineHeight: '140%',
      textTransform: 'capitalize'
    },

    h2: {
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '140%'
    }
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& legend': {
            display: 'none'
          }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: '16.5px 24px'
        },

        notchedOutline: {
          top: '0',
          border: '1px solid #E5E5E5 !important',
          outline: 'none',
          borderRadius: '20px'
        },

        input: {
          padding: '0px'
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-20px',
          color: '#666666',
          fontSize: '20px',
          lineHeight: '24px'
        }
      }
    }
  }
});
