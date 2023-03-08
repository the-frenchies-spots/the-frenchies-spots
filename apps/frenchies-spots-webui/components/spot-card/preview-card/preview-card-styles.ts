import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      width: "100%",
      height: 120,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
    },
    textContainer: {
      position: "absolute",
    },
    title: {
      color: theme.colors.white,
      fontSize: 20,
      fontWeight: "bold",
    },
    description: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: "600",
    },
    link: {
      color: theme.colors.secondary.main,
      fontSize: 16,
      fontWeight: "600",
    },
    background: {
      backgroundColor: theme.colors.primary.text,
      opacity: 0.8,
      width: "100%",
      height: "100%",
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
    },
  });
