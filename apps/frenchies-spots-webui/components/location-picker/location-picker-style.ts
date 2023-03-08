import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType, isPhone: boolean) => {
  return StyleSheet.create({
    container: {
      width: isPhone ? "100%" : 700,
      height: 300,
      overflow: "hidden",
      borderRadius: 20,
    },
  });
};
