import { Dimensions, StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 1);

const { lightBluePurple, grey, darkPurple } = theme.TFS.colors;

export const styles = (selected: boolean) =>
  StyleSheet.create({
    touchableContainer: {},
    container: {
      backgroundColor: selected ? lightBluePurple : grey,
      borderRadius: 50,
      width: 77,
      height: 77,
      borderWidth: 1,
      borderColor: selected ? darkPurple : grey,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    picture: {
      width: 40,
      height: 40,
    },

    label: {
      textAlign: "center",
    },
    tagLabel: {
      fontFamily: "Montserrat-Regular",
      fontStyle: "normal",
      fontSize: 10,
    },
  });
