import { createStyles } from "@mantine/core";
import { fonts } from "../utils";

export const useStyles = createStyles((theme, color?: string | undefined) => ({
  h1: {
    ...fonts["Montserrat-Bold"].style,
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: 700,
    color: color || theme.colors.darkPurple[0],
  },
  h2: {
    ...fonts["Montserrat-Bold"].style,
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: 700,
    color: color || theme.colors.bluePurple[0],
  },
  h3: {
    ...fonts["Montserrat-Bold"].style,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 700,
    color: color || theme.colors.darkPurple[0],
  },
  h4: {
    ...fonts["Montserrat-Medium"].style,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    color: color || theme.colors.darkGrey[0],
  },
  h5: {
    ...fonts["Montserrat-Medium"].style,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    color: color || theme.colors.darkGrey[0],
  },
  body: {
    ...fonts["Montserrat-Regular"].style,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    color: color || theme.colors.darkPurple[0],
  },
  subtitle1: {
    ...fonts["Montserrat-Regular"].style,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 400,
    color: color || theme.colors.darkPurple[0],
  },
  subtitle2: {
    ...fonts["Montserrat-Regular"].style,
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    color: color || theme.colors.darkGrey[0],
  },
  caption: {
    ...fonts["Montserrat-Medium"].style,
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: 500,
    color: color || theme.colors.darkGrey[0],
  },
}));
