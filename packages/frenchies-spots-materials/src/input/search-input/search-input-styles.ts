import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { error, white, yellow, lightBluePurple, purple, greyDisable } =
  theme.TFS.colors;

export const styles = StyleSheet.create({
  searchButton: {
    borderRadius: 50,
    width: 28,
    height: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: purple,
  },
  buttonContainer: {
    position: "absolute",
    right: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
});
