import { StyleSheet } from "react-native";
import { theme, type TColors } from "@frenchies-spots/theme";

const { white } = theme.TFS.colors;
const themeColor = theme.TFS.colors;

export const styles = (color: TColors) =>
  StyleSheet.create({
    cardButton: {
      width: 42,
      height: 42,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      borderWidth: 2,
      borderColor: themeColor[color],
      boxShadow: "0px 3px 4px #BBBBBB",
      backgroundColor: white,
    },
  });
