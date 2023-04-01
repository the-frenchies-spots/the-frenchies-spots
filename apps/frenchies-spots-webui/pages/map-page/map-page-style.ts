import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  mapMenuContainer: {
    position: "absolute",
    width: "100%",
    zIndex: 5,
    padding: 20,
  },
  topIconContainer: {
    paddingBottom: 20,
  },
  displayModeButton: {
    width: 170,
  },
  displayModeButtonContainer: {
    position: "absolute",
    zIndex: 5,
    width: "100%",
    bottom: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    marginTop: 150,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
});
