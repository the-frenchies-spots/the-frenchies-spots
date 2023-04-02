import { StyleSheet } from "react-native";
import { TVariant } from "./text-input";
import { theme } from "@frenchies-spots/theme";

const { white, bluePurple } = theme.TFS.colors;

export const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 30,
    backgroundColor: bluePurple,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: white,
    fontFamily: "Montserrat-Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
  },
});
