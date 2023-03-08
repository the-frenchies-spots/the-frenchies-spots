import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    title: {
      color: theme.colors.primary.text,
      fontSize: 20,
      marginBottom: 5,
    },
    article: {
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    image: {
      width: 100,
      height: 100,
      borderWidth: 1,
      borderColor: theme.colors.primary.text,
      borderRadius: 15,
    },
    price: {
      color: theme.colors.primary.text,
      fontSize: 30,
    },
    close: { color: theme.colors.primary.text, fontSize: 30 },
  });
