import { StyleSheet } from "react-native";
import { IVariant } from "./text-input";
import { theme } from "@frenchies-spots/theme";

const { error, white, yellow, lightBluePurple, purple } = theme.TFS.colors;

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

export const styles = (variant: IVariant, variantBase: IVariant) => {
  return StyleSheet.create({
    input: {
      outlineStyle: "none",
      ...variantStyle[variant],
      backgroundColor: variantBase === "default" ? lightBluePurple : white,
      boxShadow: `0px 4px 8px #DBDBDB`,
      // height: 42,
      padding: 12,
      color: "black",
      fontSize: 16,
      fontFamily: "Montserrat-Regular",
    },
  });
};
