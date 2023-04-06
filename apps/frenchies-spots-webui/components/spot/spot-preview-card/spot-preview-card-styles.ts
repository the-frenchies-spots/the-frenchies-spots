import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
  },
  imageContainer: {
    width: 170,
    height: 210,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  infoBox: { flex: 1 },
  button: { margin: 20 },
});
