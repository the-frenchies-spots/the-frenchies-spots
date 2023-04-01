import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { lightBluePurple, grey, darkPurple } = theme.TFS.colors;

export const styles = (selected: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: selected ? lightBluePurple : grey,
      borderRadius: 8,
      paddingHorizontal: 30,
      paddingVertical: 30,
      borderWidth: 1,
      borderColor: selected ? darkPurple : grey,
    },
    label: {
      textAlign: "center",
    },
  });
