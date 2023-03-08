import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    input: {
      color: "black",
      backgroundColor: theme.colors.primary.background,
      padding: 20,
      borderRadius: 8,
      width: "100%",
    },
    item: {
      color: "black",
      backgroundColor: theme.colors.primary.background,
      padding: 20,
      borderRadius: 8,
    },
  });
};
