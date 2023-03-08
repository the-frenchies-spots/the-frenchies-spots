import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";
import { StyleParamType } from "./style-param-type";

export const styles = (theme: ThemeType, params: StyleParamType) => {
  const { color, variant } = params;

  const buttonDisplayMode: Record<
    "contained" | "outlined" | "text",
    Record<string, string>
  > = {
    contained: { backgroundColor: theme.button.colors[color].main },
    outlined: { border: `1px solid ${theme.button.colors[color].main}` },
    text: {},
  };

  const textDisplayMode: Record<
    "contained" | "outlined" | "text",
    Record<string, string>
  > = {
    contained: { color: theme.colors.white },
    outlined: { color: theme.colors[color].main },
    text: { color: theme.colors[color].main },
  };

  return StyleSheet.create({
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      ...buttonDisplayMode[variant],
    },
    primary: {},
    secondary: {},
    text: {
      fontSize: 16,
      fontWeight: "bold",
      ...textDisplayMode[variant],
      // color: "white",
    },
  });
};
