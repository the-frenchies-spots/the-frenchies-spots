import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";

export const styles = (theme: ThemeType, isSelected: boolean) => {
  return StyleSheet.create({
    button: {
      paddingVertical: 5,
      paddingHorizontal: 5,
      backgroundColor: isSelected
        ? theme.navBarButton.select
        : theme.colors.primary.main,
    },
  });
};
