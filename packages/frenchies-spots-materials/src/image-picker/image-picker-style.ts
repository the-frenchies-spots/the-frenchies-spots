import { StyleSheet } from "react-native";
import { theme } from "@frenchies-spots/theme";

const { lightBluePurple } = theme.TFS.colors;

export const styles = (isCardMode: boolean) =>
  StyleSheet.create({
    container: {
      height: 95,
      width: 95,
      borderRadius: isCardMode ? 16 : 50,
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
    deleteContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      padding: 5,
      backgroundColor: "black",
      opacity: 0.3,
      borderEndStartRadius: 12,
    },
  });
