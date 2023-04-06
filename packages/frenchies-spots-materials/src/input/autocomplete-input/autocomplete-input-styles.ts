import { StyleSheet } from "react-native";
import { Variant } from "./autocomplete-input";
import { theme } from "@frenchies-spots/theme";

const { error, white, yellow, lightBluePurple, purple, darkGrey } = theme.TFS.colors;

const variantStyle = {
  default: {
    borderRadius: 8,
  },
  normal: {
    borderRadius: 8,
  },
  outlined: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: purple,
  },
  focus: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: yellow,
  },
  error: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: error,
  },
};

export const styles = (variant: Variant, variantBase: Variant) => {
  return StyleSheet.create({
    input: {
      outlineStyle: "none",
      borderWidth: 1,
      borderColor: variantBase === "default" ? lightBluePurple : white,
      backgroundColor: variantBase === "default" ? lightBluePurple : white,
      ...variantStyle[variant],
      boxShadow: `0px 4px 8px #DBDBDB`,
      // height: 42,
      padding: 12,
      color: "black",
      fontSize: 16,
      fontFamily: "Montserrat-Regular",
    },
    searchButton: {
      borderRadius: 50,
      width: 28,
      height: 28,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: purple,
    },
    buttonContainer: {
      position: "absolute",
      right: 0,
      top: 0,
      zIndex: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingRight: 10,
      paddingTop: 6
    },
    sugestContainer: {
      zIndex: 40,
      backgroundColor: white,
      position: "absolute",
      width: "100%",
      boxShadow: `0px 4px 8px #DBDBDB`,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    },
    sugestTouchable: {
      zIndex: 40,
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    sugest: {
      color: darkGrey,
      fontSize: 16,
      fontFamily: "Montserrat-Regular",
    }
  });
};
