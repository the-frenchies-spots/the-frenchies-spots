import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { bluePurple } = theme.TFS.colors;

export const styles = StyleSheet.create({
  tag: {
    backgroundColor: bluePurple,
    borderRadius: 50,
    padding: 6,
  },
});
