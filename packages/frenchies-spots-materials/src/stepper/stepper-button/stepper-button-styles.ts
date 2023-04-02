import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { darkPurple, yellow, lightBluePurple } = theme.TFS.colors;

export const styles = (isSelected: boolean) =>
  StyleSheet.create({
    touchable: {
      flex: 1,
      borderRightWidth: 8,
      borderRightColor: darkPurple,
      borderLeftWidth: 8,
      borderLeftColor: darkPurple,
    },
    paginationButton: {
      backgroundColor: isSelected ? yellow : lightBluePurple,
      height: 5,
      width: "100%",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      marginVertical: 30,
    },
  });
