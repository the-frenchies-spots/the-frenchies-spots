import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType, isPhone: boolean) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100vh",
    },
  });
