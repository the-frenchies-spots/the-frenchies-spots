import { StyleSheet } from "react-native";
import { ThemeType } from "../../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: "red",
      width: 45,
      height: 45,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      paddingTop: 2,
      boxShadow: "1px 2px 8px grey",
    },
    icon: {
      color: "red",
    },
  });
};
