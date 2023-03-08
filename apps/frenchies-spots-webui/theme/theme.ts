import {
  grey,
  blue,
  yellow,
  green,
  red,
  orange,
  blueAlt,
  tags,
  basic,
} from "./colors";

const standardScale = [
  0, // index: 0
  2, // index: 1
  4, // index: 2
  8, // index: 3
  12, // index: 4
  16, // index: 5
  24, // index: 6
  32, // index: 7
  40, // index: 8
  48, // index: 9
  64, // index: 10
  128, // index: 11
  192, // index: 12
];

const neutral = {
  light: grey[100],
  main: grey[300],
  dark: grey[500],
  background: grey[25],
  hover: grey[75],
  ...grey,
};

export type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

const primary = {
  light: "#A480A6",
  text: "#8686D6",
  background: "#E9E9F8",
  main: "#3F3979",
  dark: "#1f1c3c",
};

const secondary = {
  light: "#fed676",
  main: "#EBA701",
  dark: "#755300",
};

const success = {
  light: "",
  main: "#0E7C86",
  dark: "",
};

const error = {
  light: "",
  main: "#BA2525",
  dark: "",
};

const info = {
  light: "",
  main: "#0E7C25",
  dark: "",
};

const warning = {
  light: "",
  main: "#B44D12",
  dark: "",
};

const theme = {
  colors: {
    primary,
    secondary,
    neutral,
    success,
    info,
    warning,
    error,
    white: basic.white,
    black: basic.black,
  },
  button: {
    colors: {
      primary: secondary,
      secondary: {
        light: "#A480A6",
        main: "#A480A6",
        dark: "#A480A6",
      },
      neutral,
      success,
      info: primary,
      warning,
      error,
      white: basic.white,
      black: basic.black,
    },
  },
  navBarButton: {
    select: "#9F9CBC",
  },
  fontSizes: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: [8, 10, 12, 14, 16, 20, 24, 32, 48, 64],
  fonts: {
    light: "DINRoundPro-Light",
    regular: "DINRoundPro",
    medium: "DINRoundPro-Medi",
    bold: "DINRoundPro-Bold",
    black: "DINRoundPro-Black",
  },
  radii: standardScale,
  sizes: standardScale,
  space: standardScale,
};

export type ThemeType = typeof theme;

export default theme;
