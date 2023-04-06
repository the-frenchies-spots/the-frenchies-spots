import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { lightBluePurple, grey, darkPurple } = theme.TFS.colors;

export const styles = (selected: boolean) =>
  StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      backgroundColor: selected ? lightBluePurple : grey,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: selected ? darkPurple : grey,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    label: {
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  });
