import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { backgroundColor, label, global } = theme.TFS.button.floating;
const defaultColor = theme.TFS.colors.darkPurple;

export const styles = StyleSheet.create({
  navbar: {
    backgroundColor: defaultColor,
    width: "100%",
    alignItems: "center",
  },
});
