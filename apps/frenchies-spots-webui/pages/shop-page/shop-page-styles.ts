import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType, isPhone: boolean) =>
  StyleSheet.create({
    container: {
      width: isPhone ? "100%" : 700,
      height: "100%",
      marginBottom: 500,
    },
    stripe: { width: isPhone ? "100%" : 700 },
  });
