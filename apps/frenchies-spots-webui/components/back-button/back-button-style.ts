import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: 10,
      opacity: 0.6,
    },
    icon: {
      marginLeft: 10,
    },
  });
};
