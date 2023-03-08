import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType) => {
  return StyleSheet.create({
    options: { marginTop: 24, marginBottom: 30 },
    select: { marginTop: 24 },
    submit: { width: "100%" },
    orderBy: { marginTop: 24, marginBottom: 24 },
    title: {
      color: theme.colors.primary.text,
      fontSize: 20,
      marginBottom: 5,
    },
  });
};
