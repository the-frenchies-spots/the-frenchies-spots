import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { darkPurple } = theme.TFS.colors;

export const styles = StyleSheet.create({
  body: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    color: darkPurple,
  },
});
