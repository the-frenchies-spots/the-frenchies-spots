import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { error, white, yellow, lightBluePurple, purple, greyDisable } =
  theme.TFS.colors;

export const styles = (isEnteredText: boolean, isFocus: boolean) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: "auto",

      borderWidth: 1,
      borderRadius: 8,
      borderColor: isFocus ? yellow : purple,
      paddingVertical: 8,
      backgroundColor: white,
    },
    inputContainer: {
      flex: 1,
    },
    input: {
      width: "100%",
      fontFamily: "Montserrat-Regular",
      fontStyle: "normal",
      fontSize: 16,
      outlineStyle: "none",
      color: isEnteredText ? undefined : greyDisable,
    },
    filterButton: {
      paddingHorizontal: 15,
    },
    dividerVertical: {
      borderLeftWidth: 1,
      borderLeftColor: greyDisable,
    },
    searchIconContainer: {
      paddingLeft: 15,
      paddingRight: 5,
    },
  });
};
