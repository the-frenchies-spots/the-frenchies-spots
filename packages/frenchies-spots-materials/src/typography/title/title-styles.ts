import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { bluePurple, darkPurple, darkGrey } = theme.TFS.colors;

export const styles = StyleSheet.create({
  h1: {
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 40,
    color: darkPurple,
  },
  h2: {
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    color: bluePurple,
  },
  h3: {
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    color: darkPurple,
  },
  h4: {
    fontFamily: "Montserrat-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: darkGrey,
  },
  h5: {
    fontFamily: "Montserrat-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    color: darkGrey,
  },
});
