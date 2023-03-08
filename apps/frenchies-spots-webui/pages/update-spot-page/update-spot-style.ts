import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType, isPhone: boolean) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      width: isPhone ? "100%" : 700,
    },

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
