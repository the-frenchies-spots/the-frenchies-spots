import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    rating: {
      marginLeft: 8,
      color: theme.colors.neutral[200],
    },
  });
};
