import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { error, white, yellow, lightBluePurple, purple, greyDisable } =
  theme.TFS.colors;

const r = 16;

export const styles = StyleSheet.create({
  container: {
    borderRadius: r,
    boxShadow: "0px 4px 6px #E3E3FA",
  },
  picture: {
    borderTopEndRadius: r,
    borderTopStartRadius: r,
    width: "100%",
    height: 220,
  },
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
  tagContainer: {
    zIndex: 5,
    position: "absolute",
    paddingLeft: 20,
    paddingTop: 10,
  },
});
