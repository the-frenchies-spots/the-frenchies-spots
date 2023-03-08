import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    input: {
      width: "100%",
    },
    options: {
      width: "100%",
      marginBottom: 8,
      position: "relative",
    },
    option: {},
    submit: { width: "100%" },
  });
};
