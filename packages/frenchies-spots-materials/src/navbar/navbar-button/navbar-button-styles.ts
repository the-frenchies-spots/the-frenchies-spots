import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { backgroundColor, label, global } = theme.TFS.button.floating;

export const styles = (isSelected: boolean = false) =>
  StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      backgroundColor: isSelected
        ? "rgba(255, 255, 255, 0.3)"
        : theme.TFS.colors.darkPurple,
      borderRadius: 8,
      // backgroundColor: isSelected
      //   ? theme.navBarButton.select
      //   : theme.colors.primary.main,
    },
  });
