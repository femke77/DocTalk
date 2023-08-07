import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
    palette: {
      type: 'light', // or 'dark' for dark mode
      primary: {
        main: '#007bff', // Replace with your primary color
      },
      secondary: {
        main: '#ff4081', // Replace with your secondary color
      },
    },
  });

export default theme;
