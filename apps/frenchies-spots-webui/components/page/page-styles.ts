import { StyleSheet } from "react-native";

export const styles = (opacity: number, isPadding: boolean) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%",
      position: "relative",
    },
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
      position: "absolute",
    },
    body: {
      overflow: "hidden",
      height: "100%",
      width: "100%",
      position: "absolute",
      paddingVertical: isPadding ? 16 : undefined,
      paddingHorizontal: isPadding ? 20 : undefined,
    },
    opacity: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      opacity,
    },
  });
};
