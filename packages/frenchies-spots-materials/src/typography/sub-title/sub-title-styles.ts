import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { darkPurple, darkGrey } = theme.TFS.colors;

export const styles = StyleSheet.create({
  sub1: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: darkPurple,
  },
  sub2: {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: darkGrey,
  },
});
