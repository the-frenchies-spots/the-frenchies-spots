import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const defaultColor = theme.TFS.colors.darkPurple;

export const styles = (
  color: string | undefined = defaultColor,
  mode: "top" | "bottom"
) =>
  StyleSheet.create({
    container: {
      zIndex: 10,
      height: mode === "bottom" ? "100%" : "auto",
      width: "100%",
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
    },
    cornersContainer: {
      width: "100%",
    },
    cornerbarContainer: {
      width: "100%",
    },
    cornerbarContent: {
      backgroundColor: color,
    },
  });
