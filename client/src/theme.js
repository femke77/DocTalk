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
      type: 'light', // Switching the dark mode on is a single property value change.
      primary: {
        main: '#007bff', 
      },
      secondary: {
        main: '#abcdd6', 
      },
    },
    
  });

export default theme;
