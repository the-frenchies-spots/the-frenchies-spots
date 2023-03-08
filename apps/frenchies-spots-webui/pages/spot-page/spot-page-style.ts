import { StyleSheet } from "react-native";
import { ThemeType } from "../../theme";

const radius = 50;
const radiusFavorite = 200;

export const styles = (theme: ThemeType, isDesktop: boolean) => {
  return StyleSheet.create({
    image: {
      width: "100%",
      height: "100%",
      borderBottomStartRadius: isDesktop ? 0 : radius,
      borderBottomEndRadius: radius,
      borderTopEndRadius: isDesktop ? radius : 0,
    },
    pictureContainer: {
      width: isDesktop ? "50%" : "100%",
      height: isDesktop ? "100%" : "50%",
      borderBottomStartRadius: isDesktop ? 0 : radius,
      borderBottomEndRadius: radius,
      borderTopEndRadius: isDesktop ? radius : 0,
      position: "relative",
      overflow: "hidden",
    },
    spotInfoContainer: {
      width: isDesktop ? "50%" : "100%",
    },
    spotContent: { width: isDesktop ? "80%" : "100%" },
    backButton: {
      position: "absolute",
      marginHorizontal: 20,
      marginVertical: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    adresse: {
      marginBottom: 5,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
      marginTop: 5,
    },
    description: {
      fontSize: 18,
    },
    favorite: {
      marginRight: 10,
    },
    coordinates: { fontSize: 10 },
    buttonMap: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "1px 2px 8px grey",
    },
    labelMapButton: {
      marginLeft: 4,
    },
    rating: {
      marginLeft: 8,
      color: theme.colors.neutral[200],
    },
  });
};
