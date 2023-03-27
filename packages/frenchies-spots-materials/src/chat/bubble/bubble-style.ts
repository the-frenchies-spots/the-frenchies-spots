import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { white } = theme.TFS.colors;

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 0,
    boxShadow: "0px 2px 8px #BBBBBB",
    backgroundColor: white,
  },
});
