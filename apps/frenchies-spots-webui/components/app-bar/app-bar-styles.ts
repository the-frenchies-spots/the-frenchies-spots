import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary.main,
      width: "100%",
    },
    button: {
      color: theme.colors.white,
    },
  });
};
