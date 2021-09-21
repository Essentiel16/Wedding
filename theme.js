import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1441px'
});

const colors = {
  brand: {
    black: '#1A1A1A',
    gray: '#848484',
    green: '#EBFAF3',
    red: '#E70000',
    blue: '#195ED2',
    magenta: 'rgba(208, 88, 73, 0.83)',
    main: '#f7f7f7',
    light: '#FAF8F9',
    yellow: '#E7B500',
    orange: '#E76100',
    lightBlue: '#3FB0E2',
    dark: '#003731',
  }
};

const styles = {
  global: {
    html: {
      fontSize: '62.5%',
      boxSizing: 'border-box'
    },
    button: {
      brand: {
        color: '#1A1A1A',
        background: 'yellow'
      }
    },
    body: {
      fontSize: '1.5rem',
      fontFamily: "'Karla', sans-serif;",
      color: '#1A1A1A'
    },
    a: {
      color: '#1A1A1A'
    },
    '::placeholder': {
      color: '#BABABA'
    }
  }
};

const customTheme = extendTheme({ styles, colors, breakpoints });

export default customTheme;
