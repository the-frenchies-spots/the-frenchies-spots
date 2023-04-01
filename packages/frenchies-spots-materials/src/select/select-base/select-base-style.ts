import { theme } from "@frenchies-spots/theme";
import { StyleSheet } from "react-native";

const { darkPurple, white } = theme.TFS.colors;

export const styles = StyleSheet.create({
  input: {
    color: "black",
    backgroundColor: white,
    padding: 12,
    borderRadius: 8,
    width: "100%",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    boxShadow: `0px 4px 8px #DBDBDB`,
    borderWidth: 1,
    borderColor: darkPurple,
    outlineStyle: "none",
  },
  item: {
    color: "black",
    backgroundColor: white,
    padding: 20,
    borderRadius: 8,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    borderWidth: 0,
  },
});
