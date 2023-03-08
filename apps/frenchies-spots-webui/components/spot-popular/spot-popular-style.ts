import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    title: {
      marginBottom: 10,
      color: theme.colors.primary.text,
    },
  });
};
