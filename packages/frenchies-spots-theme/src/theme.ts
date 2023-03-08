import {
  primary,
  secondary,
  success,
  info,
  warning,
  error
} from './lib/states';

import {
  amber,
  blue,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  orange,
  pink,
  purple,
  red,
  rose,
  sky,
  slate,
  stone,
  teal,
  violet,
  yellow,
  zinc
} from './lib/colors';

export type ColorType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export const grey = {
  0: '#FFFFFF',
  25: '#F6F6F9',
  50: '#F0F2F4',
  75: '#EAEDF0',
  100: '#E1E5EA',
  150: '#D3D9DF',
  200: '#C4CCD4',
  300: '#A6B2BF',
  400: '#8999A9',
  500: '#6B8094',
  600: '#566676',
  700: '#404D59',
  800: '#2B333B',
  900: '#151A1E',
  950: '#0B0D0F',
  1000: '#000000'
};

const neutral = {
  light: grey[100],
  main: grey[300],
  dark: grey[500],
  ...grey
};

export const basic = {
  black: '#000000',
  white: '#FFFFFF'
};

export const theme = {
  colors: {
    primary,
    secondary,
    neutral,
    success,
    info,
    warning,
    error,
    white: basic.white,
    black: basic.black
  },
  button: {
    colors: {
      primary: secondary,
      secondary: {
        light: '#A480A6',
        main: '#A480A6',
        dark: '#A480A6'
      },
      neutral,
      success,
      info: primary,
      warning,
      error,
      white: basic.white,
      black: basic.black
    }
  },
  navBarButton: {
    select: '#9F9CBC'
  },
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64],
  fonts: {
    light: 'DINRoundPro-Light',
    regular: 'DINRoundPro',
    medium: 'DINRoundPro-Medi',
    bold: 'DINRoundPro-Bold',
    black: 'DINRoundPro-Black'
  }
};

export type ThemeType = typeof theme;
