// @flow

import { createMuiTheme } from '@material-ui/core';

const theme = {
  colors: {
    yellow: '#F3FFBD',
    lightGreen: '#B2DBBF',
    green: '#70C1B3',
    blue: '#247BA0',
    red: '#FF1654',
    white: 'white',
  },
  margins: {
    tiny: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 10,
    medium: 20,
    large: 30,
  },
  cards: {
    maxWidth: 375,
  },
  fonts: '"Fredoka One", serif',
};

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: theme.colors.blue,
    },
    secondary: {
      main: theme.colors.red,
    },
  },
  typography: {
    fontFamily: theme.fonts,
    useNextVariants: true,
  },
});

export default theme;
export { muiTheme };
