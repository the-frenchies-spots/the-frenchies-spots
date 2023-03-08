import { StyleSheet } from "react-native";

export const styles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      width: "100%",
    },
    carousel: {
      width: "100%",
      height: height + 20,
    },
    dotView: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 20,
    },
    circle: {
      width: 10,
      height: 10,
      backgroundColor: "grey",
      borderRadius: 50,
      marginHorizontal: 5,
    },
  });
