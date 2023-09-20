import { createStyles } from "@mantine/core";
import { fonts } from "../../utils";

type StyleParams = { color?: string | undefined; h?: number | string };
export const useStyles = createStyles((theme, params?: StyleParams) => {
  const height = params?.h || 42;
  return {
    filled: {},
    outline: {
      ...fonts["Montserrat-Regular"].style,
      height,
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "uppercase",
      color: params?.color || theme.colors.yellow[0],
      backgroundColor: theme.white,
      borderRadius: 8,
      border: `1px solid ${params?.color || theme.colors.yellow[0]}`,
      boxShadow: "0px 3px 4px 0px rgba(164, 128, 166, 0.25)",
      transition: "background-color 0.3s ease",
      "&:hover": {
        backgroundColor: theme.colors.superLightGrey[1],
      },
    },
    light: {},
    white: {},
    default: {
      ...fonts["Montserrat-Regular"].style,
      height,
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "uppercase",
      color: params?.color || theme.white,
      backgroundColor: theme.colors.yellow[0],
      borderRadius: 8,
      transition: "background-color 0.3s ease",
      boxShadow: "0px 3px 4px 0px rgba(164, 128, 166, 0.25)",
      "&:hover": {
        backgroundColor: theme.colors.yellow[1],
      },
    },
    subtle: {
      ...fonts["Montserrat-Regular"].style,
      color: params?.color || theme.colors.yellow[0],
      backgroundColor: "transparent",
      height,
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 400,
      "&:hover": {
        backgroundColor: theme.colors.superLightGrey[2],
      },
    },
    gradient: {},
  };
});
