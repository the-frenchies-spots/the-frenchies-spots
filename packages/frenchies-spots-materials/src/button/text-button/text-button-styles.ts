import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

export const styles = (variant: "default" | "action") => {
  const { textColor, label } = theme.TFS.button.text[variant];
  return StyleSheet.create({
    text: { color: textColor },
    label,
  });
};
