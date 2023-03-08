import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      height: 200,
      width: "100%",
      borderRadius: 20,
      backgroundColor: theme.colors.neutral.light,
      boxShadow: "0px 1px 6px grey",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
    },
  });
};
