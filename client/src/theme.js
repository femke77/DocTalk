import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, pink, green, red } from '@mui/material/colors';

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
        main: '#007bff', 
      },
      secondary: {
        main: '#05337d', 
      },
    },
    
  });

export default theme;
