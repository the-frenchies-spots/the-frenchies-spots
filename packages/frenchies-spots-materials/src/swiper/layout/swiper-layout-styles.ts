import { StyleSheet } from "react-native";

export const styles = (paddingDisabled: boolean) =>
  StyleSheet.create({
    swiperLayout: {
      width: "100%",
      height: "100%",
      paddingVertical: paddingDisabled ? 16 : undefined,
      paddingHorizontal: paddingDisabled ? 20 : undefined,
    },
    buttonBar: {
      width: "100%",
      height: 80,
    },
    content: {
      flex: 1,
      width: "100%",
    },
    counter: {
      paddingBottom: 20,
    },
  });
