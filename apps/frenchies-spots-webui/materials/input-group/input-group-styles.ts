import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

export const styles = (theme: ThemeType, fullWidth: boolean) => {
  return StyleSheet.create({
    container: { marginBottom: 16, width: fullWidth ? "100%" : "auto" },
    label: { marginBottom: 4 },
    input: {},
    error: { marginBottom: 16 },
  });
};
