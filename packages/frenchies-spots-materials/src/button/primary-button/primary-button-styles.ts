import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { yellow, white } = theme.TFS.colors;

const borderRadius = {
  borderBottomEndRadius: 8,
  borderBottomStartRadius: 8,
  borderTopEndRadius: 8,
  borderTopStartRadius: 8,
};

export const styles = (variant: "contained" | "outlined") => {
  const { backgroundColor, label, global } = theme.TFS.button.primary[variant];
  return StyleSheet.create({
    text: { color: variant === "contained" ? white : yellow },
    button: { color: backgroundColor },
    label,
    global: { ...global },
  });
};
