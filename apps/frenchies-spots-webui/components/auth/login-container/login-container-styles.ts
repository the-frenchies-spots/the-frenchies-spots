import { StyleSheet } from "react-native";

export const styles = (opacity: number) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      position: "relative",
    },
    imageContainer: {
      height: 500,
      width: "100%",
      position: "absolute",
    },
    image: {
      width: "100%",
      height: "100%",
      opacity,
    },
    waveContainer: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
    inputContainer: {
      height: 370,
      width: "100%",
      paddingHorizontal: 20,
    },
    opacity: {
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "white",
      opacity,
    },
    submitButtonContainer: { marginTop: 15 },
    submitButton: { paddingVertical: 4 },
    createAccountButton: { padding: 15 },
  });
};
