import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const desktopStyles = (theme: ThemeType) =>
  StyleSheet.create({
    layout: {},
    stack: {},
    button: {
      marginTop: 100,
      marginBottom: 200,
      width: "300px",
    },
  });
