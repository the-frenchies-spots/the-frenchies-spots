import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { backgroundColor, label, global } = theme.TFS.button.floating;

export const styles = StyleSheet.create({
  text: { color: theme.TFS.colors.white },
  button: { color: backgroundColor },
  label,
  global,
});
