import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { error, white, yellow, lightBluePurple, purple, greyDisable } =
  theme.TFS.colors;

const r = 16;

export const styles = StyleSheet.create({
  cardContent: {
    padding: 20,
    backgroundColor: white,
    borderEndEndRadius: r,
    borderEndStartRadius: r,
  },
  cardButton: {
    zIndex: 5,
    position: "absolute",
    top: -21,
    right: 0,
    marginRight: 20,
  },
});
