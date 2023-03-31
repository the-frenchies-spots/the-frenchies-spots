import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { lightBluePurple } = theme.TFS.colors;
export const styles = StyleSheet.create({
  container: {
    height: 95,
    width: 95,
    borderRadius: 50,
    backgroundColor: "#E3E3FA",
    boxShadow: `0px 4px 8px  #DBDBDB`,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
