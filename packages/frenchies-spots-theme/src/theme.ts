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
  zinc,
  TFScolors,
} from "./lib/colors";

import { typography } from "./lib/typography";
import { button } from "./lib/button";

export const theme = {
  TFS: {
    colors: { ...TFScolors },
    typography,
    button,
  },
  colors: {
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
    zinc,
  },
};

export type ThemeType = typeof theme;
