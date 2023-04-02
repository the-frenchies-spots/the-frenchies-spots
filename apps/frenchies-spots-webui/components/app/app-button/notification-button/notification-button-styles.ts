import { StyleSheet } from "react-native";

export const styles = (withShadow: boolean) =>
  StyleSheet.create({
    notifButton: {
      backgroundColor: "#FFFFFF",
      boxShadow: withShadow
        ? "0px 3px 4px rgba(164, 128, 166, 0.25)"
        : undefined,
      borderRadius: 8,
      padding: 5,
    },
  });
