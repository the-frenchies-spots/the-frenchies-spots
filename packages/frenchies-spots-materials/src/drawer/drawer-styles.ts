import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    bottom: 0,
    borderWidth: 1,
    borderColor: "#606060",
  },
  closeBarContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBar: {
    backgroundColor: theme.TFS.colors.greyDisable,
    width: "25%",
    height: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 15,
    marginBottom: 35,
  },
  children: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
});
