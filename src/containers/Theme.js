import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        maxWidthXl: {
          maxWidth: 'calc(1440px + 48px) !important',
        },
        maxWidthMd: {
          maxWidth: 'calc(1080px + 48px) !important',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: 16,
        },
        sizeLarge: { minHeight: 56, minWidth: 56, fontSize: 18 },
        sizeMedium: { minHeight: 40, minWidth: 40, fontSize: 16 },
        sizeSmall: { minHeight: 32, minWidth: 32, fontSize: 14 },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiLink: {
      defaultProps: {
        target: '_blank',
      },
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#CFB675',
    },
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={responsiveFontSizes(appTheme)}>{children}</ThemeProvider>;
};

export default Theme;
