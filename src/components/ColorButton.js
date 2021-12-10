import { Button, createTheme, ThemeProvider } from '@mui/material';
import { appTheme } from 'containers/Theme';

const ColorButton = ({ background = '#CFB675', color, ...props }) => {
  const theme = createTheme({
    ...appTheme,
    palette: {
      primary: {
        main: background,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
          color: 'primary',
          size: 'medium',
          disableElevation: true,
        },
        styleOverrides: {
          root: { textTransform: 'none', borderRadius: 9999, color },
          sizeLarge: { minHeight: 56, minWidth: 56, fontSize: 20 },
          sizeMedium: { minHeight: 40, minWidth: 40, fontSize: 16 },
          sizeSmall: { minHeight: 32, minWidth: 32, fontSize: 14 },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant='contained' color='primary' disableElevation {...props} />
    </ThemeProvider>
  );
};

export default ColorButton;
